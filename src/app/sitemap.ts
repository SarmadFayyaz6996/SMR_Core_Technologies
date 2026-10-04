import type { MetadataRoute } from 'next';
import { articles } from '@/data/blog';
import { services } from '@/data/services';
import { absoluteUrl } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number }[] = [
    { path: '/', priority: 1 },
    { path: '/work', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/insights', priority: 0.7 },
    { path: '/careers', priority: 0.4 },
  ];

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: absoluteUrl(path),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    })),
    ...services.map((s) => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles.map((a) => ({
      url: absoluteUrl(`/insights/${a.slug}`),
      lastModified: new Date(a.date),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    })),
  ];
}
