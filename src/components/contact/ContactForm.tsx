'use client';

import Link from 'next/link';
import { useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { budgetRanges, projectTypes } from '@/data/projectOptions';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import {
  MESSAGE_MAX,
  emptyContact,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactPayload,
} from '@/lib/contact';
import { cx } from '@/lib/cx';
import styles from './ContactForm.module.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const FIELD_ORDER: ContactField[] = [
  'fullName',
  'workEmail',
  'company',
  'phone',
  'projectType',
  'budget',
  'message',
  'consent',
];

interface ContactFormProps {
  initial?: Partial<ContactPayload>;
}

export function ContactForm({ initial }: ContactFormProps) {
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactPayload>({ ...emptyContact, ...initial });
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const errors: ContactErrors = validateContact(values);
  const visibleError = (field: ContactField) =>
    submitted || touched[field] ? errors[field] : undefined;
  const fieldId = (field: string) => `${id}-${field}`;

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = event.target;
    const next = type === 'checkbox' ? (event.target as HTMLInputElement).checked : value;
    setValues((v) => ({ ...v, [name]: next }));
  };

  const onBlur = (field: ContactField) => setTouched((t) => ({ ...t, [field]: true }));

  const focusFirstError = (errs: ContactErrors) => {
    const first = FIELD_ORDER.find((f) => errs[f]);
    if (!first) return;
    formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
  };

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (Object.keys(errors).length > 0) {
      focusFirstError(errors);
      return;
    }

    setStatus('submitting');
    setServerError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      const data: { ok: boolean; error?: string; errors?: ContactErrors } = await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
        return;
      }
      if (data.errors) focusFirstError(data.errors);
      setServerError(data.error ?? 'Some details need attention. Please review the form.');
      setStatus('error');
    } catch {
      setServerError('Network error — please check your connection and try again.');
      setStatus('error');
    }
  };

  const reset = () => {
    setValues({ ...emptyContact });
    setTouched({});
    setSubmitted(false);
    setStatus('idle');
  };

  if (status === 'success') {
    const firstName = values.fullName.trim().split(/\s+/)[0];
    return (
      <div className={styles.success} role="status" aria-live="polite">
        <span className={styles.successIcon}>
          <Icon name="check" size={28} />
        </span>
        <h2 className={styles.successTitle}>Thanks, {firstName} — message received.</h2>
        <p className={styles.successText}>
          A senior engineer will review your project and reply to{' '}
          <strong>{values.workEmail}</strong> within one business day.
        </p>
        <ol className={styles.nextSteps}>
          <li>We review your goals and constraints.</li>
          <li>We schedule a 30-minute discovery call.</li>
          <li>You receive a scoped proposal and estimate.</li>
        </ol>
        <Button variant="secondary" onClick={reset}>
          Send another message
        </Button>
      </div>
    );
  }

  const textField = (
    field: 'fullName' | 'workEmail' | 'company' | 'phone',
    label: string,
    props: { type?: string; autoComplete: string; required?: boolean; placeholder?: string },
  ) => (
    <Field id={fieldId(field)} label={label} required={props.required} error={visibleError(field)}>
      <input
        id={fieldId(field)}
        name={field}
        type={props.type ?? 'text'}
        autoComplete={props.autoComplete}
        placeholder={props.placeholder}
        value={values[field]}
        onChange={onChange}
        onBlur={() => onBlur(field)}
        aria-required={props.required || undefined}
        aria-invalid={Boolean(visibleError(field)) || undefined}
        aria-describedby={visibleError(field) ? `${fieldId(field)}-error` : undefined}
        className={styles.input}
      />
    </Field>
  );

  const chipGroup = (
    field: 'projectType' | 'budget',
    legend: string,
    options: readonly { value: string; label: string }[],
  ) => (
    <fieldset
      className={styles.fieldset}
      aria-invalid={Boolean(visibleError(field)) || undefined}
      aria-describedby={visibleError(field) ? `${fieldId(field)}-error` : undefined}
    >
      <legend className={styles.label}>
        {legend} <span className={styles.required}>*</span>
      </legend>
      <div className={styles.chips}>
        {options.map((option) => (
          <label key={option.value} className={styles.chip}>
            <input
              type="radio"
              name={field}
              value={option.value}
              checked={values[field] === option.value}
              onChange={onChange}
              onBlur={() => onBlur(field)}
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
      <FieldError id={`${fieldId(field)}-error`} message={visibleError(field)} />
    </fieldset>
  );

  return (
    <form
      ref={formRef}
      className={styles.form}
      onSubmit={onSubmit}
      noValidate
      aria-busy={status === 'submitting'}
    >
      {status === 'error' && serverError && (
        <div className={styles.banner} role="alert">
          <Icon name="alert" size={18} />
          {serverError}
        </div>
      )}

      <div className={styles.row}>
        {textField('fullName', 'Full name', {
          autoComplete: 'name',
          required: true,
          placeholder: 'Jane Cooper',
        })}
        {textField('workEmail', 'Work email', {
          type: 'email',
          autoComplete: 'email',
          required: true,
          placeholder: 'jane@company.com',
        })}
      </div>
      <div className={styles.row}>
        {textField('company', 'Company', {
          autoComplete: 'organization',
          placeholder: 'Company name',
        })}
        {textField('phone', 'Phone', {
          type: 'tel',
          autoComplete: 'tel',
          placeholder: '+1 555 000 0000',
        })}
      </div>

      {chipGroup('projectType', 'Project type', projectTypes)}
      {chipGroup('budget', 'Budget range', budgetRanges)}

      <Field id={fieldId('message')} label="Message" required error={visibleError('message')}>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={6}
          maxLength={MESSAGE_MAX}
          placeholder="Tell us about your product, goals, timeline and any existing systems."
          value={values.message}
          onChange={onChange}
          onBlur={() => onBlur('message')}
          aria-required
          aria-invalid={Boolean(visibleError('message')) || undefined}
          aria-describedby={cx(
            `${fieldId('message')}-count`,
            visibleError('message') && `${fieldId('message')}-error`,
          )}
          className={cx(styles.input, styles.textarea)}
        />
        <span id={`${fieldId('message')}-count`} className={styles.count}>
          {values.message.length} / {MESSAGE_MAX}
        </span>
      </Field>

      {/* Honeypot: hidden from people and assistive tech, tempting to bots. */}
      <div className={styles.honeypot} aria-hidden="true">
        <label>
          Website
          <input
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website ?? ''}
            onChange={onChange}
          />
        </label>
      </div>

      <div className={styles.consentWrap}>
        <label className={styles.consent}>
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={onChange}
            onBlur={() => onBlur('consent')}
            aria-invalid={Boolean(visibleError('consent')) || undefined}
            aria-describedby={visibleError('consent') ? `${fieldId('consent')}-error` : undefined}
          />
          <span className={styles.checkbox} aria-hidden="true">
            <Icon name="check" size={12} />
          </span>
          <span>
            I agree to the{' '}
            <Link href="/privacy" className={styles.link}>
              privacy policy
            </Link>{' '}
            and consent to SMR Core Technologies contacting me about this enquiry.
          </span>
        </label>
        <FieldError id={`${fieldId('consent')}-error`} message={visibleError('consent')} />
      </div>

      <div className={styles.actions}>
        <Button
          type="submit"
          variant="accent"
          size="lg"
          icon={status === 'submitting' ? undefined : 'arrow-right'}
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              Sending…
            </>
          ) : (
            'Send message'
          )}
        </Button>
        <p className={styles.note}>We usually reply within one business day.</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className={cx(styles.field, error && styles.hasError)}>
      <label htmlFor={id} className={styles.label}>
        {label}{' '}
        {required ? (
          <span className={styles.required}>*</span>
        ) : (
          <span className={styles.optional}>Optional</span>
        )}
      </label>
      {children}
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className={styles.error}>
      <Icon name="alert" size={14} />
      {message}
    </p>
  );
}
