/**
 * Single source of truth for brand, contact and URL configuration.
 * Values marked as placeholders should be replaced before going live.
 */
export const site = {
  name: 'SMR Core Technologies',
  shortName: 'SMR',
  tagline: 'We build software that moves business forward.',
  description:
    'SMR Core Technologies is a custom software development company engineering high-performance web, mobile, desktop, SaaS and AI-powered software for ambitious businesses.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://smrcoretechnologies.com').replace(/\/$/, ''),
  locale: 'en_US',
  email: 'sarmad.fayyaz99@gmail.com',
  /** Placeholder social profiles — replace with real URLs before launch. */
  social: {
    linkedin: 'https://www.linkedin.com/company/smr-core-technologies',
    github: 'https://github.com/smr-core-technologies',
    x: 'https://x.com/smrcoretech',
  },
  twitterHandle: '@smrcoretech',
} as const;

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
