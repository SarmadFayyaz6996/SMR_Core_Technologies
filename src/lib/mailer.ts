import { site } from '@/data/site';
import { en } from '@/i18n/dictionaries/en';
import type { ContactPayload } from './contact';

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const SEND_TIMEOUT_MS = 10_000;

/** True when the email provider is configured (see .env.example). */
export const isEmailConfigured = () => Boolean(process.env.RESEND_API_KEY);

const escapeHtml = (value: string) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Strips line breaks so user input can never inject extra email headers. */
const singleLine = (value: string) => value.replace(/[\r\n]+/g, ' ').trim();

interface LeadContext {
  /** Language the visitor was browsing in, e.g. "fr". */
  locale?: string;
  /** Page the form was submitted from. */
  pageUrl?: string;
}

/**
 * Sends a contact-form lead to the company inbox via Resend.
 * "Reply" in the mail client answers the visitor directly (reply_to).
 */
export async function sendLeadEmail(lead: ContactPayload, context: LeadContext = {}) {
  // Tolerate stray whitespace/quotes picked up when pasting the secret into a dashboard.
  const apiKey = process.env.RESEND_API_KEY?.trim().replace(/^["']|["']$/g, '');
  if (!apiKey) throw new Error('RESEND_API_KEY is not set');
  if (!apiKey.startsWith('re_')) {
    throw new Error('RESEND_API_KEY does not look like a Resend key (it should start with "re_")');
  }

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from =
    process.env.CONTACT_FROM_EMAIL || `SMR Core Website <website@${new URL(site.url).hostname}>`;

  // Readable labels (English) for the option IDs the form submits.
  const projectType =
    en.contact.projectTypes[lead.projectType as keyof typeof en.contact.projectTypes] ??
    lead.projectType;
  const budget = en.contact.budgets[lead.budget as keyof typeof en.contact.budgets] ?? lead.budget;

  const rows: [string, string][] = [
    ['Name', lead.fullName],
    ['Email', lead.workEmail],
    ['Company', lead.company || '—'],
    ['Phone', lead.phone || '—'],
    ['Project type', projectType],
    ['Budget', budget],
    ['Language', context.locale?.toUpperCase() || '—'],
    ['Page', context.pageUrl || '—'],
  ];

  const name = singleLine(lead.fullName);
  const subject = `New project enquiry — ${name}${lead.company ? ` (${singleLine(lead.company)})` : ''}`;

  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    '',
    'Message:',
    lead.message.trim(),
  ].join('\n');

  const html = `<div style="font-family:Arial,Helvetica,sans-serif;font-size:14px;color:#111;line-height:1.5">
  <h2 style="margin:0 0 16px;font-size:18px">New project enquiry</h2>
  <table cellpadding="6" style="border-collapse:collapse">
    ${rows
      .map(
        ([label, value]) =>
          `<tr><td style="color:#666;padding-right:16px;vertical-align:top">${escapeHtml(label)}</td><td>${escapeHtml(value)}</td></tr>`,
      )
      .join('')}
  </table>
  <h3 style="margin:20px 0 8px;font-size:15px">Message</h3>
  <p style="white-space:pre-wrap;margin:0">${escapeHtml(lead.message.trim())}</p>
  <p style="margin-top:24px;color:#888;font-size:12px">Sent from the contact form on ${escapeHtml(site.url)}. Reply to this email to answer ${escapeHtml(name)} directly.</p>
</div>`;

  const res = await fetch(RESEND_ENDPOINT, {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: singleLine(lead.workEmail),
      subject,
      text,
      html,
    }),
    signal: AbortSignal.timeout(SEND_TIMEOUT_MS),
  });

  if (!res.ok) {
    throw new Error(`Resend responded with ${res.status}: ${await res.text()}`);
  }
}
