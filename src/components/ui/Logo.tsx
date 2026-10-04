import Link from 'next/link';
import { cx } from '@/lib/cx';
import styles from './Logo.module.css';

/**
 * SMR mark: a frame within a frame around a solid core — "engineering around
 * the core". The inner square is offset to imply forward motion.
 */
export function LogoMark({ size = 28, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      aria-hidden="true"
      focusable="false"
      className={cx(styles.mark, className)}
    >
      <rect
        x="1.5"
        y="1.5"
        width="29"
        height="29"
        rx="8"
        fill="none"
        stroke="currentColor"
        strokeOpacity=".28"
        strokeWidth="1.5"
      />
      <rect
        x="7.5"
        y="7.5"
        width="17"
        height="17"
        rx="4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect x="13" y="11" width="8" height="8" rx="2" className={styles.core} />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    // The visible wordmark is the accessible name (a link to "/" reads as home).
    <Link href="/" className={cx(styles.logo, className)}>
      <LogoMark />
      <span className={styles.wordmark}>
        <span className={styles.primary}>SMR</span>{' '}
        <span className={styles.secondary}>Core Technologies</span>
      </span>
    </Link>
  );
}
