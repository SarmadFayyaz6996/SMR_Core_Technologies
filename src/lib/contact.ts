import { budgetValues, projectTypeValues } from '@/data/projectOptions';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** Shared by the client form and the API route so validation can never drift. */
export interface ContactPayload {
  fullName: string;
  workEmail: string;
  company: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
  consent: boolean;
  /** Honeypot — must stay empty. Bots tend to fill every field. */
  website?: string;
}

export type ContactField = Exclude<keyof ContactPayload, 'website'>;

/**
 * Validation returns language-neutral error codes (keys of `contact.errors`);
 * the form turns them into localized messages.
 */
export type ContactErrorCode = keyof Dictionary['contact']['errors'];
export type ContactErrors = Partial<Record<ContactField, ContactErrorCode>>;

export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 4000;
const NAME_MAX = 120;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d\s.-]{7,20}$/;
const projectSet = new Set<string>(projectTypeValues);
const budgetSet = new Set<string>(budgetValues);

export function validateContact(data: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  const name = data.fullName.trim();
  const email = data.workEmail.trim();
  const message = data.message.trim();

  if (!name) errors.fullName = 'fullNameRequired';
  else if (name.length > NAME_MAX) errors.fullName = 'fullNameTooLong';

  if (!email) errors.workEmail = 'workEmailRequired';
  else if (!EMAIL_PATTERN.test(email)) errors.workEmail = 'workEmailInvalid';

  if (data.company.length > NAME_MAX) errors.company = 'companyTooLong';

  if (data.phone.trim() && !PHONE_PATTERN.test(data.phone.trim())) errors.phone = 'phoneInvalid';

  if (!projectSet.has(data.projectType)) errors.projectType = 'projectTypeRequired';
  if (!budgetSet.has(data.budget)) errors.budget = 'budgetRequired';

  if (message.length < MESSAGE_MIN) errors.message = 'messageTooShort';
  else if (message.length > MESSAGE_MAX) errors.message = 'messageTooLong';

  if (!data.consent) errors.consent = 'consentRequired';

  return errors;
}

export const emptyContact: ContactPayload = {
  fullName: '',
  workEmail: '',
  company: '',
  phone: '',
  projectType: '',
  budget: '',
  message: '',
  consent: false,
  website: '',
};
