import type { Metadata } from 'next';
import { absoluteUrl, site } from '@/data/site';
import type { FaqItem } from '@/data/faq';
import type { Article } from '@/data/blog';
import type { Service } from '@/data/services';

interface PageMeta {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  /** Exclude utility pages (e.g. legal placeholders) from search results. */
  noIndex?: boolean;
}

/** Consistent per-page metadata: title, description, canonical, OG and X cards. */
export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  noIndex,
}: PageMeta): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: site.locale,
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      site: site.twitterHandle,
    },
    ...(noIndex && { robots: { index: false, follow: true } }),
  };
}

const organizationId = `${site.url}/#organization`;

export const organizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': organizationId,
  name: site.name,
  url: site.url,
  logo: absoluteUrl('/icon.svg'),
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  sameAs: Object.values(site.social),
  knowsAbout: [
    'Custom software development',
    'Web application development',
    'Mobile app development',
    'AI software development',
    'SaaS development',
    'Cloud software development',
    'Software modernization',
  ],
});

export const websiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${site.url}/#website`,
  url: site.url,
  name: site.name,
  publisher: { '@id': organizationId },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: absoluteUrl(item.path),
  })),
});

export const faqSchema = (items: FaqItem[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

export const serviceSchema = (service: Service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  serviceType: service.title,
  url: absoluteUrl(`/services/${service.slug}`),
  provider: { '@id': organizationId },
});

export const articleSchema = (article: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.excerpt,
  datePublished: article.date,
  url: absoluteUrl(`/insights/${article.slug}`),
  author: { '@id': organizationId },
  publisher: { '@id': organizationId },
});
