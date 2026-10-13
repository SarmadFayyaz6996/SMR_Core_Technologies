/**
 * Supported languages and how visitors are matched to them.
 * Shared by the proxy (edge of the request), server components and client components.
 */
export const locales = ['en', 'de', 'fr', 'es', 'it', 'nl', 'pt', 'pl', 'sv', 'tr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** Remembers a visitor's explicit language choice (set by the language switcher). */
export const LOCALE_COOKIE = 'NEXT_LOCALE';

export const localeInfo: Record<Locale, { nativeName: string; ogLocale: string }> = {
  en: { nativeName: 'English', ogLocale: 'en_US' },
  de: { nativeName: 'Deutsch', ogLocale: 'de_DE' },
  fr: { nativeName: 'Français', ogLocale: 'fr_FR' },
  es: { nativeName: 'Español', ogLocale: 'es_ES' },
  it: { nativeName: 'Italiano', ogLocale: 'it_IT' },
  nl: { nativeName: 'Nederlands', ogLocale: 'nl_NL' },
  pt: { nativeName: 'Português', ogLocale: 'pt_PT' },
  pl: { nativeName: 'Polski', ogLocale: 'pl_PL' },
  sv: { nativeName: 'Svenska', ogLocale: 'sv_SE' },
  tr: { nativeName: 'Türkçe', ogLocale: 'tr_TR' },
};

/**
 * Country (ISO 3166-1 alpha-2) → languages spoken there, most common first.
 * Multilingual countries (CH, BE, LU) are resolved with the browser's language
 * preferences; otherwise the first entry wins. Countries not listed fall back to
 * the browser language, then English.
 */
export const countryLocales: Record<string, Locale[]> = {
  // German
  DE: ['de'],
  AT: ['de'],
  LI: ['de'],
  // French
  FR: ['fr'],
  MC: ['fr'],
  // Spanish (Spain + Latin America)
  ES: ['es'],
  AD: ['es'],
  MX: ['es'],
  AR: ['es'],
  CO: ['es'],
  CL: ['es'],
  PE: ['es'],
  VE: ['es'],
  EC: ['es'],
  GT: ['es'],
  CU: ['es'],
  BO: ['es'],
  DO: ['es'],
  HN: ['es'],
  PY: ['es'],
  SV: ['es'],
  NI: ['es'],
  CR: ['es'],
  PA: ['es'],
  UY: ['es'],
  // Italian
  IT: ['it'],
  SM: ['it'],
  VA: ['it'],
  // Dutch
  NL: ['nl'],
  SR: ['nl'],
  // Portuguese (Portugal, Brazil, Lusophone Africa)
  PT: ['pt'],
  BR: ['pt'],
  AO: ['pt'],
  MZ: ['pt'],
  // Polish, Swedish, Turkish
  PL: ['pl'],
  SE: ['sv'],
  AX: ['sv'],
  TR: ['tr'],
  // Multilingual
  CH: ['de', 'fr', 'it'],
  BE: ['nl', 'fr'],
  LU: ['fr', 'de'],
};

export const isLocale = (value: string | undefined | null): value is Locale =>
  !!value && (locales as readonly string[]).includes(value);

/** "/work" + "fr" → "/fr/work"; "/#services" → "/fr#services"; external links untouched. */
export function localizeHref(locale: Locale, href: string): string {
  if (!href.startsWith('/') || href.startsWith('//') || href.startsWith('/api/')) return href;
  const [first] = href.slice(1).split(/[/?#]/);
  if (isLocale(first)) return href;
  if (href === '/') return `/${locale}`;
  if (href.startsWith('/#') || href.startsWith('/?')) return `/${locale}${href.slice(1)}`;
  return `/${locale}${href}`;
}

/** "/fr/work" → "/work" (the path without its language prefix). */
export function stripLocale(pathname: string): string {
  const [, first, ...rest] = pathname.split('/');
  if (!isLocale(first)) return pathname;
  return `/${rest.join('/')}`;
}
