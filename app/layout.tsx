// app/layout.tsx
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

import { Footer } from '../components/footer/Footer';
import { Whatsapp } from '../components/fixed-elements/Whatsapp';
import React from 'react';
import { NavbarProyect } from '@/components/navbar/NavbarProyect';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rozas & Román',
    template: '%s | Rozas & Román',
  },
  icons: {
    icon: '/favicon.ico',
  },
  description:
    'Servicios jurídicos integrales. Asesoría legal clara y efectiva para proteger tus derechos y encontrar soluciones adaptadas a tus necesidades.',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Rozas & Román',
    description:
      'Servicios jurídicos integrales. Asesoría legal clara y efectiva para proteger tus derechos y encontrar soluciones adaptadas a tus necesidades.',
    siteName: 'Rozas & Román',
    locale: 'es_ES',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rozas & Román',
    description:
      'Servicios jurídicos integrales. Asesoría legal clara y efectiva para proteger tus derechos y encontrar soluciones adaptadas a tus necesidades.',
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={montserrat.className}>
      <body>
        <div>
          <NavbarProyect />
          <Whatsapp />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
