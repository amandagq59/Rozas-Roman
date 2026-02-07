import type { MetadataRoute } from 'next';

function getBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getBaseUrl();
  const now = new Date();

  const paths = [
    '/',
    '/actualidad',
    '/servicio-laboral',
    '/servicio-civil-familiar',
    '/servicio-penal',
    '/servicio-administrativo',
    '/servicio-extranjeria',
    '/servicio-trafico',
    '/servicio-gestion-inmobiliaria',
    '/servicio-mercantil',
  ];

  return paths.map((p) => ({
    url: `${baseUrl}${p}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: p === '/' ? 1 : 0.7,
  }));
}
