'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import {
  LOCALE_COOKIE,
  localeInfo,
  localizeHref,
  locales,
  stripLocale,
  type Locale,
} from '@/i18n/config';
import { cx } from '@/lib/cx';
import styles from './LanguageSwitcher.module.css';

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Remembers the choice so the proxy stops auto-detecting for this visitor. */
const rememberLocale = (locale: Locale) => {
  document.cookie = `${LOCALE_COOKIE}=${locale}; path=/; max-age=${ONE_YEAR}; samesite=lax`;
};

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
  className?: string;
}

/** Language menu: links to the same page in every language (crawlable, with hreflang). */
export function LanguageSwitcher({ locale, label, className }: LanguageSwitcherProps) {
  const id = useId();
  const pathname = usePathname();
  const path = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className={cx(styles.root, className)}>
      <button
        ref={buttonRef}
        type="button"
        className={styles.button}
        aria-expanded={open}
        aria-controls={`${id}-menu`}
        aria-label={`${label}: ${localeInfo[locale].nativeName}`}
        onClick={() => setOpen((v) => !v)}
      >
        <Icon name="globe" size={16} />
        <span className={styles.code}>{locale}</span>
        <Icon name="chevron-down" size={14} className={styles.chevron} />
      </button>

      <ul
        id={`${id}-menu`}
        className={styles.menu}
        data-open={open || undefined}
        aria-label={label}
      >
        {locales.map((l) => (
          <li key={l}>
            <Link
              href={localizeHref(l, path)}
              hrefLang={l}
              lang={l}
              className={styles.item}
              aria-current={l === locale ? 'true' : undefined}
              tabIndex={open ? 0 : -1}
              onClick={() => {
                rememberLocale(l);
                setOpen(false);
              }}
            >
              <span>{localeInfo[l].nativeName}</span>
              <span className={styles.itemCode}>{l}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
