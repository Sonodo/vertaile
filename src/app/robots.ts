import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          // Query reflector — no unique content, wastes crawl budget
          '/haku?*',
        ],
      },
    ],
    sitemap: 'https://valitse.fi/sitemap.xml',
  };
}
