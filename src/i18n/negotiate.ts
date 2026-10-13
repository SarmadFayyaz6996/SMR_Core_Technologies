import { countryLocales, defaultLocale, isLocale, type Locale } from './config';

/** Headers set by common hosts/CDNs with the visitor's country (ISO alpha-2). */
const COUNTRY_HEADERS = [
  'x-vercel-ip-country', // Vercel
  'cf-ipcountry', // Cloudflare
  'cloudfront-viewer-country', // AWS CloudFront
  'x-country-code', // Netlify / generic reverse proxies
  'x-appengine-country', // Google App Engine
];

export function getCountry(headers: Headers): string | null {
  for (const name of COUNTRY_HEADERS) {
    const value = headers.get(name)?.trim().toUpperCase();
    if (value && /^[A-Z]{2}$/.test(value) && value !== 'XX') return value;
  }
  return null;
}

/** Parses Accept-Language into base language codes ordered by preference. */
export function parseAcceptLanguage(header: string | null): string[] {
  if (!header) return [];
  return header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';');
      const q = params.find((p) => p.trim().startsWith('q='));
      return { lang: tag.trim().toLowerCase().split('-')[0], q: q ? Number(q.split('=')[1]) : 1 };
    })
    .filter((entry) => entry.lang && entry.lang !== '*' && !Number.isNaN(entry.q) && entry.q > 0)
    .sort((a, b) => b.q - a.q)
    .map((entry) => entry.lang);
}

/**
 * Picks the language for a visitor with no explicit choice:
 * country (from the host's geo header) → browser language → English.
 */
export function negotiateLocale(headers: Headers): Locale {
  const preferred = parseAcceptLanguage(headers.get('accept-language'));
  const country = getCountry(headers);
  const candidates = country ? countryLocales[country] : undefined;

  if (candidates?.length) {
    return candidates.find((locale) => preferred.includes(locale)) ?? candidates[0];
  }
  return preferred.find(isLocale) ?? defaultLocale;
}
