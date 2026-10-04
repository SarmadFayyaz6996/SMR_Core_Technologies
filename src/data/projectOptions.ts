export const projectTypes = [
  { value: 'web-application', label: 'Web Application' },
  { value: 'mobile-application', label: 'Mobile Application' },
  { value: 'desktop-application', label: 'Desktop Application' },
  { value: 'ai-integration', label: 'AI Integration' },
  { value: 'saas-product', label: 'SaaS Product' },
  { value: 'cloud-devops', label: 'Cloud / DevOps' },
  { value: 'software-modernization', label: 'Software Modernization' },
  { value: 'support-maintenance', label: 'Support & Maintenance' },
  { value: 'other', label: 'Other' },
] as const;

export const budgetRanges = [
  { value: 'under-5k', label: 'Under $5K' },
  { value: '5k-15k', label: '$5K–$15K' },
  { value: '15k-50k', label: '$15K–$50K' },
  { value: '50k-plus', label: '$50K+' },
  { value: 'not-sure', label: 'Not Sure' },
] as const;

export type ProjectType = (typeof projectTypes)[number]['value'];
export type BudgetRange = (typeof budgetRanges)[number]['value'];
