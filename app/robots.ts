import { metaData } from '@/lib/data';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${metaData.baseUrl}/sitemap.xml`,
  };
}
