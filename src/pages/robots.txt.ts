import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const site = import.meta.env.SITE || 'https://osbgx.dev';
  const base = import.meta.env.BASE_URL || '/';
  const sitemapPath = `${base.replace(/\/$/, '')}/sitemap-index.xml`.replace(/^\/\//, '/');
  const sitemapUrl = new URL(sitemapPath, site).toString();

  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
