'use client';

import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { Icon } from '@/components/ui/Icon';
import { THEME_STORAGE_KEY, type Theme } from '@/lib/theme';
import { cx } from '@/lib/cx';
import styles from './ThemeToggle.module.css';

const root = () => document.documentElement;

const subscribe = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(root(), { attributes: true, attributeFilter: ['data-theme'] });
  return () => observer.disconnect();
};

const getTheme = (): Theme => (root().dataset.theme === 'light' ? 'light' : 'dark');
const getServerTheme = (): Theme => 'dark';

const hasSavedPreference = () => {
  try {
    return localStorage.getItem(THEME_STORAGE_KEY) !== null;
  } catch {
    return false;
  }
};

export function ThemeToggle({ className }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  // Follow live OS theme changes until the visitor picks a theme explicitly.
  useEffect(() => {
    const query = window.matchMedia('(prefers-color-scheme: light)');
    const onSystemChange = (event: MediaQueryListEvent) => {
      if (!hasSavedPreference()) root().dataset.theme = event.matches ? 'light' : 'dark';
    };
    query.addEventListener('change', onSystemChange);
    return () => query.removeEventListener('change', onSystemChange);
  }, []);

  const toggle = useCallback(() => {
    const next: Theme = getTheme() === 'dark' ? 'light' : 'dark';
    root().dataset.theme = next;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next);
    } catch {
      /* Storage unavailable (private mode) — theme still applies for this visit. */
    }
  }, []);

  const nextLabel = theme === 'dark' ? 'light' : 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      className={cx(styles.toggle, className)}
      aria-label={`Switch to ${nextLabel} theme`}
      title={`Switch to ${nextLabel} theme`}
    >
      <span className={styles.icons} data-theme-icon={theme}>
        <Icon name="moon" size={17} />
        <Icon name="sun" size={17} />
      </span>
    </button>
  );
}
