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

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

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

  const html = `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(subject)}</title>
  </head>
  <body style="margin:0; padding:0; background:#f5f7fb; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color:#111827;">
    <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
      Nuevo mensaje desde el formulario de Rozas &amp; Román
    </div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;">
      <tr>
        <td style="padding:24px 12px;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; max-width:640px; margin:0 auto;">
            <tr>
              <td style="background:#0c4684; padding:22px 24px; border-radius:14px 14px 0 0;">
                <div style="font-size:18px; font-weight:700; color:#ffffff; letter-spacing:0.2px;">Rozas &amp; Román</div>
                <div style="margin-top:6px; font-size:13px; color:rgba(255,255,255,0.9);">Nuevo mensaje desde el formulario web</div>
              </td>
            </tr>

            <tr>
              <td style="background:#ffffff; padding:22px 24px; border-left:1px solid #e5e7eb; border-right:1px solid #e5e7eb;">
                <div style="font-size:16px; font-weight:700; margin:0 0 10px 0;">${escapeHtml(subject)}</div>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse; margin-top:12px;">
                  <tr>
                    <td style="padding:12px 14px; background:#f8fafc; border:1px solid #e5e7eb; border-radius:12px;">
                      <div style="font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em;">Datos de contacto</div>
                      <div style="margin-top:10px; font-size:14px; line-height:1.5;">
                        <div><strong>Nombre:</strong> ${escapeHtml(name)}</div>
                        <div><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}" style="color:#0c4684; text-decoration:none;">${escapeHtml(email)}</a></div>
                        <div><strong>Teléfono:</strong> <a href="tel:${escapeHtml(phone)}" style="color:#0c4684; text-decoration:none;">${escapeHtml(phone)}</a></div>
                        <div><strong>Servicio:</strong> ${escapeHtml(contactType)}</div>
                      </div>
                    </td>
                  </tr>
                </table>

                <div style="margin-top:16px; font-size:12px; color:#6b7280; text-transform:uppercase; letter-spacing:0.08em;">Mensaje</div>
                <div style="margin-top:10px; padding:14px; background:#ffffff; border:1px solid #e5e7eb; border-radius:12px; font-size:14px; line-height:1.6; white-space:pre-wrap;">${escapeHtml(detailsText)}</div>
              </td>
            </tr>

            <tr>
              <td style="background:#ffffff; padding:16px 24px 22px; border-left:1px solid #e5e7eb; border-right:1px solid #e5e7eb;">
                <div style="font-size:12px; color:#6b7280;">Responde directamente a este correo para contestar al cliente.</div>
              </td>
            </tr>

            <tr>
              <td style="background:#f8fafc; padding:16px 24px; border:1px solid #e5e7eb; border-top:0; border-radius:0 0 14px 14px;">
                <div style="font-size:12px; color:#6b7280;">Enviado automáticamente desde la web.</div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;

  const { data, error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    subject,
    replyTo: email,
    html,
    text,
  });

  if (error) {
    // eslint-disable-next-line no-console
    console.error("resend send failed", {
      message: error.message,
      name,
      email,
      toEmail,
      fromEmail,
    });
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  // eslint-disable-next-line no-console
  console.log("resend send ok", { id: data?.id });

  return NextResponse.json({ ok: true, id: data?.id });
}
