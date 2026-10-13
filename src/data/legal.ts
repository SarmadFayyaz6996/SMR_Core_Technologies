import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * Legal pages. Text lives in the dictionaries (`legal.documents`) and is template
 * copy that must be reviewed by qualified counsel before commercial use.
 */
export type LegalSlug = keyof Dictionary['legal']['documents'];

/** Date the legal templates were last revised (same for every language). */
export const LEGAL_UPDATED = '2026-10-01';

export const getLegalDocument = (dict: Dictionary, slug: LegalSlug) => ({
  slug,
  updated: LEGAL_UPDATED,
  ...dict.legal.documents[slug],
});

export type LegalDocument = ReturnType<typeof getLegalDocument>;
