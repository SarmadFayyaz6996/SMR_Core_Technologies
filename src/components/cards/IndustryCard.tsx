import type { Industry } from '@/data/industries';
import { Icon } from '@/components/ui/Icon';
import { revealDelay } from '@/lib/style';
import styles from './IndustryCard.module.css';

export function IndustryCard({ industry, index }: { industry: Industry; index: number }) {
  return (
    <li className={styles.card} data-reveal style={revealDelay(index % 5)}>
      <span className={styles.icon}>
        <Icon name={industry.icon} size={20} />
      </span>
      <h3 className={styles.name}>{industry.name}</h3>
      <p className={styles.focus}>{industry.focus}</p>
    </li>
  );
}
