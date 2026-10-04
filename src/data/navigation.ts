export interface NavLink {
  label: string;
  href: string;
}

export const primaryNav: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Solutions', href: '/#solutions' },
  { label: 'Industries', href: '/#industries' },
  { label: 'Work', href: '/work' },
  { label: 'Technology', href: '/#technology' },
  { label: 'About', href: '/#about' },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/#about' },
      { label: 'Work', href: '/work' },
      { label: 'Careers', href: '/careers' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Web Development', href: '/services/web-application-development' },
      { label: 'Mobile Development', href: '/services/mobile-application-development' },
      { label: 'AI', href: '/services/ai-integration' },
      { label: 'SaaS', href: '/services/saas-development' },
      { label: 'Cloud', href: '/services/cloud-devops' },
      { label: 'Software Support', href: '/services/software-support-modernization' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Blog', href: '/insights' },
      { label: 'Insights', href: '/insights' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Cookie Policy', href: '/cookies' },
];
