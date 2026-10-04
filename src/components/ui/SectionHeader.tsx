import type { ReactNode } from 'react';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  /** Two-digit section index shown in the eyebrow, e.g. "02". */
  index?: string;
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: 'start' | 'center' | 'split';
  as?: 'h1' | 'h2';
  id?: string;
}

export function SectionHeader({
  index,
  eyebrow,
  title,
  lead,
  align = 'start',
  as: Heading = 'h2',
  id,
}: SectionHeaderProps) {
  return (
    <header
      className={cx(
        styles.header,
        align === 'center' && styles.center,
        align === 'split' && styles.split,
      )}
    >
      <p className={cx('mono', styles.eyebrow)} data-reveal>
        {index && <span className={styles.index}>[{index}]</span>}
        {eyebrow}
      </p>
      <Heading id={id} className={styles.title} data-reveal style={revealDelay(1)}>
        {title}
      </Heading>
      {lead && (
        <p className={styles.lead} data-reveal style={revealDelay(2)}>
          {lead}
        </p>
      )}
    </header>
  );
}
