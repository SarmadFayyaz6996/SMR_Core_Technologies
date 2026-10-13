/**
 * Formats an ISO date (YYYY-MM-DD) in the visitor's language, independent of the
 * server timezone: ("2026-10-01", "fr") → "1 oct. 2026".
 */
export const formatDate = (iso: string, locale: string) =>
  new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
