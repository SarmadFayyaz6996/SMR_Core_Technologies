'use client';

import { useId, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import type { Option } from '@/data/projectOptions';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import type { Dictionary } from '@/i18n/dictionaries/en';
import { format } from '@/i18n/format';
import { LocaleLink } from '@/i18n/LocaleLink';
import {
  MESSAGE_MAX,
  MESSAGE_MIN,
  emptyContact,
  validateContact,
  type ContactErrorCode,
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
  t: Dictionary['contact'];
  projectTypes: Option[];
  budgets: Option[];
}

export function ContactForm({ initial, t, projectTypes, budgets: budgetRanges }: ContactFormProps) {
  const f = t.form;
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const [values, setValues] = useState<ContactPayload>({ ...emptyContact, ...initial });
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [status, setStatus] = useState<Status>('idle');
  const [serverError, setServerError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const errors: ContactErrors = validateContact(values);
  const message = (code: ContactErrorCode) =>
    format(t.errors[code], { min: MESSAGE_MIN, max: MESSAGE_MAX });
  const visibleError = (field: ContactField) => {
    const code = submitted || touched[field] ? errors[field] : undefined;
    return code ? message(code) : undefined;
  };
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
      const data: { ok: boolean; error?: ContactErrorCode; errors?: ContactErrors } =
        await res.json();
      if (res.ok && data.ok) {
        setStatus('success');
        return;
      }
      if (data.errors) focusFirstError(data.errors);
      setServerError(message(data.error ?? 'reviewForm'));
      setStatus('error');
    } catch {
      setServerError(message('network'));
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
        <h2 className={styles.successTitle}>{format(f.successTitle, { name: firstName })}</h2>
        <p className={styles.successText}>
          {f.successBefore} <strong>{values.workEmail}</strong> {f.successAfter}
        </p>
        <ol className={styles.nextSteps}>
          {f.successSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
        <Button variant="secondary" onClick={reset}>
          {f.sendAnother}
        </Button>
      </div>
    );
  }

  const textField = (
    field: 'fullName' | 'workEmail' | 'company' | 'phone',
    label: string,
    props: { type?: string; autoComplete: string; required?: boolean; placeholder?: string },
  ) => (
    <Field
      id={fieldId(field)}
      label={label}
      required={props.required}
      optionalLabel={f.optional}
      error={visibleError(field)}
    >
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
        {textField('fullName', f.fullName, {
          autoComplete: 'name',
          required: true,
          placeholder: f.fullNamePlaceholder,
        })}
        {textField('workEmail', f.workEmail, {
          type: 'email',
          autoComplete: 'email',
          required: true,
          placeholder: f.workEmailPlaceholder,
        })}
      </div>
      <div className={styles.row}>
        {textField('company', f.company, {
          autoComplete: 'organization',
          placeholder: f.companyPlaceholder,
        })}
        {textField('phone', f.phone, {
          type: 'tel',
          autoComplete: 'tel',
          placeholder: f.phonePlaceholder,
        })}
      </div>

      {chipGroup('projectType', f.projectType, projectTypes)}
      {chipGroup('budget', f.budget, budgetRanges)}

      <Field
        id={fieldId('message')}
        label={f.message}
        required
        optionalLabel={f.optional}
        error={visibleError('message')}
      >
        <textarea
          id={fieldId('message')}
          name="message"
          rows={6}
          maxLength={MESSAGE_MAX}
          placeholder={f.messagePlaceholder}
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
            {f.consentBefore}{' '}
            <LocaleLink href="/privacy" className={styles.link}>
              {f.consentLink}
            </LocaleLink>{' '}
            {f.consentAfter}
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
              {f.sending}
            </>
          ) : (
            f.send
          )}
        </Button>
        <p className={styles.note}>{f.note}</p>
      </div>
    </form>
  );
}

function Field({
  id,
  label,
  required,
  optionalLabel,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  optionalLabel: string;
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
          <span className={styles.optional}>{optionalLabel}</span>
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
