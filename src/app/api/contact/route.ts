import { NextResponse } from 'next/server';
import { emptyContact, validateContact, type ContactPayload } from '@/lib/contact';

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

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body.' }, { status: 400 });
  }

  const data = normalize(body);

  // Honeypot filled → silently accept so bots learn nothing.
  if (data.website) return NextResponse.json({ ok: true });

  const errors = validateContact(data);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // `website: undefined` drops the honeypot field from the serialized lead.
        body: JSON.stringify({
          ...data,
          website: undefined,
          submittedAt: new Date().toISOString(),
        }),
        signal: AbortSignal.timeout(WEBHOOK_TIMEOUT_MS),
      });
      if (!res.ok) throw new Error(`Webhook responded with ${res.status}`);
    } catch (error) {
      console.error('Contact webhook failed', error);
      return NextResponse.json(
        { ok: false, error: 'We could not send your message right now. Please try again shortly.' },
        { status: 502 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
