import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

declare global {
  // eslint-disable-next-line no-var
  var __ROZAS_RATE_LIMIT__: Map<string, RateLimitEntry> | undefined;
}

const RATE_LIMIT_MAX = 2;
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000;

const rateLimitStore: Map<string, RateLimitEntry> = globalThis.__ROZAS_RATE_LIMIT__ ?? new Map();
globalThis.__ROZAS_RATE_LIMIT__ = rateLimitStore;

const BodySchema = z.object({
  name: z.string().trim().min(1).max(120),
  email: z.string().trim().email().max(254),
  phone: z.string().trim().min(5).max(30),
  contactType: z.string().trim().min(1).max(80),
  details: z.string().trim().max(5000).optional().or(z.literal("")),
  policy: z.boolean(),
});

async function getClientIp() {
  const h = await headers();
  const xff = h.get("x-forwarded-for");
  if (xff) return xff.split(",")[0]?.trim();
  const xrip = h.get("x-real-ip");
  if (xrip) return xrip.trim();
  return "unknown";
}

function checkRateLimit(key: string): { ok: true; remaining: number; resetAt: number } | { ok: false; remaining: 0; resetAt: number } {
  const now = Date.now();
  const entry = rateLimitStore.get(key);
  if (!entry) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true, remaining: RATE_LIMIT_MAX - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }

  if (now > entry.resetAt) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { ok: true, remaining: RATE_LIMIT_MAX - 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);
  return { ok: true, remaining: RATE_LIMIT_MAX - entry.count, resetAt: entry.resetAt };
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const ip = await getClientIp();
  const rl = checkRateLimit(`contact:${ip}`);
  if (!rl.ok) {
    return NextResponse.json(
      { error: "Rate limit exceeded" },
      {
        status: 429,
        headers: {
          "Retry-After": String(Math.max(0, Math.ceil((rl.resetAt - Date.now()) / 1000))),
        },
      },
    );
  }

  let rawBody: unknown;
  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = BodySchema.safeParse(rawBody);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }

  if (!parsed.data.policy) {
    return NextResponse.json({ error: "Policy must be accepted" }, { status: 400 });
  }

  const { name, email, phone, contactType, details } = parsed.data;

  const resend = new Resend(apiKey);

  const subject = `Nuevo contacto (${contactType}) - ${name}`;
  const detailsText = details?.trim() ? details.trim() : "(sin detalles)";

  const text = [
    `Nombre: ${name}`,
    `Email: ${email}`,
    `Teléfono: ${phone}`,
    `Tipo de servicio: ${contactType}`,
    "",
    "Detalles:",
    detailsText,
    "",
  ].join("\n");

  await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject,
    replyTo: email,
    text,
  });

  return NextResponse.json({ ok: true });
}
