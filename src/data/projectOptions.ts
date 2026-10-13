import type { Dictionary } from '@/i18n/dictionaries/en';

/** Option values are stable IDs (sent to the API); labels come from the dictionaries. */
export const projectTypeValues = [
  'web-application',
  'mobile-application',
  'desktop-application',
  'ai-integration',
  'saas-product',
  'cloud-devops',
  'software-modernization',
  'support-maintenance',
  'other',
] as const;

export const budgetValues = ['under-5k', '5k-15k', '15k-50k', '50k-plus', 'not-sure'] as const;

export type ProjectType = (typeof projectTypeValues)[number];
export type BudgetRange = (typeof budgetValues)[number];

export interface Option {
  value: string;
  label: string;
}

export const getProjectTypeOptions = (dict: Dictionary): Option[] =>
  projectTypeValues.map((value) => ({ value, label: dict.contact.projectTypes[value] }));

export const getBudgetOptions = (dict: Dictionary): Option[] =>
  budgetValues.map((value) => ({ value, label: dict.contact.budgets[value] }));
