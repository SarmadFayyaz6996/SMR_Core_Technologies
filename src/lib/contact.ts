import { budgetRanges, projectTypes } from '@/data/projectOptions';

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
export type ContactErrors = Partial<Record<ContactField, string>>;

export const MESSAGE_MIN = 20;
export const MESSAGE_MAX = 4000;
const NAME_MAX = 120;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_PATTERN = /^[+()\d\s.-]{7,20}$/;
const projectValues = new Set<string>(projectTypes.map((p) => p.value));
const budgetValues = new Set<string>(budgetRanges.map((b) => b.value));

export function validateContact(data: ContactPayload): ContactErrors {
  const errors: ContactErrors = {};
  const name = data.fullName.trim();
  const message = data.message.trim();

  if (!name) errors.fullName = 'Please enter your full name.';
  else if (name.length > NAME_MAX) errors.fullName = 'Please use a shorter name.';

  if (!data.workEmail.trim()) errors.workEmail = 'Please enter your work email.';
  else if (!EMAIL_PATTERN.test(data.workEmail.trim()))
    errors.workEmail = 'Please enter a valid email address.';

  if (data.company.length > NAME_MAX) errors.company = 'Please use a shorter company name.';

  if (data.phone.trim() && !PHONE_PATTERN.test(data.phone.trim()))
    errors.phone = 'Please enter a valid phone number.';

  if (!projectValues.has(data.projectType)) errors.projectType = 'Please choose a project type.';
  if (!budgetValues.has(data.budget)) errors.budget = 'Please choose a budget range.';

  if (message.length < MESSAGE_MIN)
    errors.message = `Please tell us a little more (at least ${MESSAGE_MIN} characters).`;
  else if (message.length > MESSAGE_MAX)
    errors.message = `Please keep your message under ${MESSAGE_MAX} characters.`;

  if (!data.consent) errors.consent = 'Please agree to the privacy policy so we can reply.';

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
