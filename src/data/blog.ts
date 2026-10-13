import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * Demo articles for the Insights section. Content is illustrative sample copy
 * and is labelled as demo content wherever it is displayed.
 */
export type ArticleSlug = keyof Dictionary['insights']['articles'];
export type ArticleCategory = keyof Dictionary['insights']['categories'];

const articleData: {
  slug: ArticleSlug;
  category: ArticleCategory;
  date: string;
  readingMinutes: number;
}[] = [
  {
    slug: 'how-ai-is-changing-modern-software-development',
    category: 'AI',
    date: '2026-09-18',
    readingMinutes: 7,
  },
  {
    slug: 'building-scalable-web-applications-in-2026',
    category: 'Engineering',
    date: '2026-09-02',
    readingMinutes: 6,
  },
  {
    slug: 'when-should-a-business-modernize-legacy-software',
    category: 'Modernization',
    date: '2026-08-21',
    readingMinutes: 8,
  },
  {
    slug: 'angular-vs-react-for-enterprise-applications',
    category: 'Architecture',
    date: '2026-08-06',
    readingMinutes: 6,
  },
  {
    slug: 'building-secure-apis-with-aspnet-core',
    category: 'Security',
    date: '2026-07-24',
    readingMinutes: 9,
  },
  {
    slug: 'how-cloud-architecture-improves-scalability',
    category: 'Cloud',
    date: '2026-07-10',
    readingMinutes: 5,
  },
];

export const articleSlugs = articleData.map((a) => a.slug);

export const getArticles = (dict: Dictionary) =>
  articleData.map((a) => ({
    ...a,
    ...dict.insights.articles[a.slug],
    categoryLabel: dict.insights.categories[a.category],
  }));

export type Article = ReturnType<typeof getArticles>[number];

export const getArticle = (dict: Dictionary, slug: string) =>
  getArticles(dict).find((a) => a.slug === slug);

/** Language-independent article list (slugs + dates) for the sitemap. */
export const articleIndex = articleData;
