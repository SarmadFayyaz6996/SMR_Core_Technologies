import type { Metadata } from 'next';
import { absoluteUrl, site, socialProfiles } from '@/data/site';
import type { Article } from '@/data/blog';
import type { Service } from '@/data/services';
import { localeInfo, localizeHref, locales, type Locale } from '@/i18n/config';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** Absolute URL of a language-neutral path in a given language: ("/work", "fr") → ".../fr/work". */
export const localizedUrl = (locale: Locale, path = '/') => absoluteUrl(localizeHref(locale, path));

/**
 * hreflang alternates for a page: one URL per language, plus `x-default` pointing at the
 * language-neutral URL (e.g. `/work`), which redirects each visitor to their language —
 * Google's recommended setup for locale-redirecting pages.
 */
export const languageAlternates = (path: string) => ({
  ...Object.fromEntries(locales.map((locale) => [locale, localizedUrl(locale, path)])),
  'x-default': absoluteUrl(path),
});

interface PageMeta {
  locale: Locale;
  title: string;
  description: string;
  /** Language-neutral path, e.g. "/work". */
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  /** Exclude utility pages (e.g. legal placeholders) from search results. */
  noIndex?: boolean;
}

/** Consistent per-page metadata: title, description, canonical, hreflang, OG and X cards. */
export function buildMetadata({
  locale,
  title,
  description,
  path,
  type = 'website',
  publishedTime,
  noIndex,
}: PageMeta): Metadata {
  const url = localizedUrl(locale, path);
  return {
    title,
    description,
    alternates: { canonical: url, languages: languageAlternates(path) },
    openGraph: {
      type,
      url,
      title,
      description,
      siteName: site.name,
      locale: localeInfo[locale].ogLocale,
      alternateLocale: locales.filter((l) => l !== locale).map((l) => localeInfo[l].ogLocale),
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

export const organizationSchema = (dict: Dictionary, locale: Locale) => ({
  '@context': 'https://schema.org',
  '@type': ['Organization', 'ProfessionalService'],
  '@id': organizationId,
  name: site.name,
  alternateName: site.alternateNames,
  url: site.url,
  logo: { '@type': 'ImageObject', url: absoluteUrl(site.logo), width: 800, height: 800 },
  image: absoluteUrl(site.logo),
  slogan: dict.common.tagline,
  description: dict.meta.siteDescription,
  email: site.email,
  telephone: site.ceo.phone.replace(/\s/g, ''),
  founder: { '@type': 'Person', name: site.ceo.name, jobTitle: 'Founder & CEO' },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: site.email,
    telephone: site.ceo.phone.replace(/\s/g, ''),
    url: site.ceo.whatsapp,
    availableLanguage: locales.map((l) => localeInfo[l].nativeName),
  },
  ...(socialProfiles.length > 0 && { sameAs: socialProfiles }),
  availableLanguage: locales.map((l) => localeInfo[l].nativeName),
  inLanguage: locale,
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
  url: `${site.url}/`,
  // `name` + `alternateName` drive the site name Google shows above search results.
  name: site.name,
  alternateName: site.alternateNames,
  inLanguage: locales,
  publisher: { '@id': organizationId },
});

export const breadcrumbSchema = (
  locale: Locale,
  homeLabel: string,
  items: { name: string; path: string }[],
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: homeLabel, path: '/' }, ...items].map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: localizedUrl(locale, item.path),
  })),
});

export const faqSchema = (locale: Locale, items: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: locale,
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
});

export const serviceSchema = (locale: Locale, service: Service) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  description: service.description,
  serviceType: service.title,
  url: localizedUrl(locale, `/services/${service.slug}`),
  inLanguage: locale,
  provider: { '@id': organizationId },
});

export const articleSchema = (locale: Locale, article: Article) => ({
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: article.title,
  description: article.excerpt,
  datePublished: article.date,
  url: localizedUrl(locale, `/insights/${article.slug}`),
  inLanguage: locale,
  author: { '@id': organizationId },
  publisher: { '@id': organizationId },
});
