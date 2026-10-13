import { cx } from '@/lib/cx';
import styles from './DemoBadge.module.css';

interface DemoBadgeProps {
  /** Localized label, e.g. dict.common.demoProject. */
  label: string;
  className?: string;
}

/** Marks fictional content (concept projects, demo metrics, sample articles). */
export function DemoBadge({ label, className }: DemoBadgeProps) {
  return <span className={cx('mono', styles.badge, className)}>{label}</span>;
}
