/**
 * Single source of truth for brand, contact and URL configuration.
 */
export const site = {
  name: 'SMR Core Technologies',
  shortName: 'SMR',
  /**
   * Other names people search for. Published in structured data so search engines
   * connect queries like "SMR Core" to this site.
   */
  alternateNames: ['SMR Core', 'SMR Core Tech', 'SMRCore'],
  tagline: 'We build software that moves business forward.',
  description:
    'SMR Core Technologies is a custom software development company engineering high-performance web, mobile, desktop, SaaS and AI-powered software for ambitious businesses.',
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://smrcoretechnologies.com').replace(/\/$/, ''),
  locale: 'en_US',
  email: 'info@smrcoretechnologies.com',
  /** Raster logo (search engines don't accept SVG logos in structured data). */
  logo: '/logo.png',
  /** Founder & CEO — reachable directly on WhatsApp. */
  ceo: {
    name: 'Sarmad Fayyaz',
    phone: '+33 7 66 96 20 82',
    whatsapp: 'https://wa.me/33766962082',
  },
  /**
   * Official profiles. Leave a value empty until the profile exists — empty entries are
   * hidden from the footer and left out of structured data (fake links hurt trust).
   */
  social: {
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      'https://www.linkedin.com/company/smr-core-technologies/',
    github: process.env.NEXT_PUBLIC_GITHUB_URL ?? '',
    x: process.env.NEXT_PUBLIC_X_URL ?? '',
  },
  twitterHandle: process.env.NEXT_PUBLIC_X_HANDLE || undefined,
} as const;

/** Profile URLs that actually exist (non-empty). */
export const socialProfiles = Object.values(site.social).filter(Boolean);

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`;
