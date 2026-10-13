import { lang } from 'next/root-params';
import { defaultLocale, isLocale, type Locale } from './config';
import type { Dictionary } from './dictionaries/en';

/** Each language is a separate chunk, so a page only loads the dictionary it renders. */
const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en').then((m) => m.en),
  de: () => import('./dictionaries/de').then((m) => m.de),
  fr: () => import('./dictionaries/fr').then((m) => m.fr),
  es: () => import('./dictionaries/es').then((m) => m.es),
  it: () => import('./dictionaries/it').then((m) => m.it),
  nl: () => import('./dictionaries/nl').then((m) => m.nl),
  pt: () => import('./dictionaries/pt').then((m) => m.pt),
  pl: () => import('./dictionaries/pl').then((m) => m.pl),
  sv: () => import('./dictionaries/sv').then((m) => m.sv),
  tr: () => import('./dictionaries/tr').then((m) => m.tr),
};

/** The current request's language, read from the `[lang]` root segment. */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  return isLocale(value) ? value : defaultLocale;
}

/** Loads a dictionary — for the current request by default, or a specific locale. */
export async function getDictionary(locale?: Locale): Promise<Dictionary> {
  return loaders[locale ?? (await getLocale())]();
}
