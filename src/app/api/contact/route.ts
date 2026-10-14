import { NextResponse } from 'next/server';
import { isLocale } from '@/i18n/config';
import { emptyContact, validateContact, type ContactPayload } from '@/lib/contact';
import { isEmailConfigured, sendLeadEmail } from '@/lib/mailer';

const WEBHOOK_TIMEOUT_MS = 8000;

/** Coerce an unknown JSON body into the expected shape (strings/booleans only). */
function normalize(body: unknown): ContactPayload {
  const source = (typeof body === 'object' && body !== null ? body : {}) as Record<string, unknown>;
  const str = (key: keyof ContactPayload) =>
    typeof source[key] === 'string' ? (source[key] as string) : '';
  return {
    ...emptyContact,
    fullName: str('fullName'),
    workEmail: str('workEmail'),
    company: str('company'),
    phone: str('phone'),
    projectType: str('projectType'),
    budget: str('budget'),
    message: str('message'),
    website: str('website'),
    consent: source.consent === true,
  };
}

async function postToWebhook(url: string, data: ContactPayload) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    // `website: undefined` drops the honeypot field from the serialized lead.
    body: JSON.stringify({ ...data, website: undefined, submittedAt: new Date().toISOString() }),
    signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
  });
  if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'reviewForm' }, { status: 400 });
  }

  const data = normalize(body);

  // Honeypot filled → silently accept so bots learn nothing.
  if (data.website) return NextResponse.json({ ok: true });

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // Which page/language the enquiry came from (for the email).
  const referer = request.headers.get('referer') ?? '';
  const firstSegment = referer ? new URL(referer).pathname.split('/')[1] : '';
  const context = { locale: isLocale(firstSegment) ? firstSegment : undefined, pageUrl: referer };

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  const deliveries: Promise<void>[] = [];
  if (isEmailConfigured()) deliveries.push(sendLeadEmail(data, context));
  if (webhook) deliveries.push(postToWebhook(webhook, data));

  if (deliveries.length === 0) {
    // Never tell a real visitor "received" when the message goes nowhere.
    if (process.env.NODE_ENV === 'production') {
      console.error(
        'Contact form: no delivery configured (set RESEND_API_KEY or CONTACT_WEBHOOK_URL)',
      );
      return NextResponse.json({ ok: false, error: 'deliveryFailed' }, { status: 503 });
    }
    return NextResponse.json({ ok: true, demo: true });
  }

  const results = await Promise.allSettled(deliveries);
  const failed = results.filter((r) => r.status === 'rejected');
  failed.forEach((r) =>
    console.error('Contact delivery failed', (r as PromiseRejectedResult).reason),
  );

  // Success if at least one channel delivered the lead.
  if (failed.length === results.length) {
    // Error codes (not sentences) — the form shows them in the visitor's language.
    return NextResponse.json({ ok: false, error: 'deliveryFailed' }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
