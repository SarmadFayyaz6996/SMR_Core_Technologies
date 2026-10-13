import type { MetadataRoute } from 'next';
import { articleIndex } from '@/data/blog';
import { serviceSlugs } from '@/data/services';
import { locales } from '@/i18n/config';
import { languageAlternates, localizedUrl } from '@/lib/seo';

type Entry = {
  path: string;
  priority: number;
  changeFrequency: 'monthly' | 'yearly';
  lastModified: Date;
};

/** Every page in every language, each listing its translations (hreflang) for search engines. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages: Entry[] = [
    { path: '/', priority: 1, changeFrequency: 'monthly', lastModified: now },
    { path: '/work', priority: 0.8, changeFrequency: 'monthly', lastModified: now },
    { path: '/contact', priority: 0.8, changeFrequency: 'monthly', lastModified: now },
    { path: '/insights', priority: 0.7, changeFrequency: 'monthly', lastModified: now },
    { path: '/careers', priority: 0.4, changeFrequency: 'monthly', lastModified: now },
    ...serviceSlugs.map((slug): Entry => ({
      path: `/services/${slug}`,
      priority: 0.8,
      changeFrequency: 'monthly',
      lastModified: now,
    })),
    ...articleIndex.map((a): Entry => ({
      path: `/insights/${a.slug}`,
      priority: 0.5,
      changeFrequency: 'yearly',
      lastModified: new Date(a.date),
    })),
  ];

  return pages.flatMap(({ path, ...rest }) =>
    locales.map((locale) => ({
      url: localizedUrl(locale, path),
      ...rest,
      alternates: { languages: languageAlternates(path) },
    })),
  );
}
