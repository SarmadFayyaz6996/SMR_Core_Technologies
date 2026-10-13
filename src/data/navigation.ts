import type { Dictionary } from '@/i18n/dictionaries/en';

export interface NavLink {
  label: string;
  /** Language-neutral path; LocaleLink adds the visitor's language prefix. */
  href: string;
}

export const getPrimaryNav = (dict: Dictionary): NavLink[] => [
  { label: dict.nav.services, href: '/#services' },
  { label: dict.nav.solutions, href: '/#solutions' },
  { label: dict.nav.industries, href: '/#industries' },
  { label: dict.nav.work, href: '/work' },
  { label: dict.nav.technology, href: '/#technology' },
  { label: dict.nav.about, href: '/#about' },
];

export const getFooterNav = ({ footer: f }: Dictionary): { title: string; links: NavLink[] }[] => [
  {
    title: f.company,
    links: [
      { label: f.about, href: '/#about' },
      { label: f.work, href: '/work' },
      { label: f.careers, href: '/careers' },
      { label: f.contact, href: '/contact' },
    ],
  },
  {
    title: f.services,
    links: [
      { label: f.webDevelopment, href: '/services/web-application-development' },
      { label: f.mobileDevelopment, href: '/services/mobile-application-development' },
      { label: f.ai, href: '/services/ai-integration' },
      { label: f.saas, href: '/services/saas-development' },
      { label: f.cloud, href: '/services/cloud-devops' },
      { label: f.softwareSupport, href: '/services/software-support-modernization' },
    ],
  },
  {
    title: f.resources,
    links: [
      { label: f.blog, href: '/insights' },
      { label: f.insights, href: '/insights' },
      { label: f.faq, href: '/#faq' },
    ],
  },
];

export const getLegalNav = ({ footer: f }: Dictionary): NavLink[] => [
  { label: f.privacy, href: '/privacy' },
  { label: f.terms, href: '/terms' },
  { label: f.cookies, href: '/cookies' },
];
