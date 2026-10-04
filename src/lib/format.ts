/** Formats an ISO date (YYYY-MM-DD) as e.g. "Oct 1, 2026", independent of server timezone. */
export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
