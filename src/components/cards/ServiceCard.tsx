import Link from 'next/link';
import type { Service } from '@/data/services';
import { Icon } from '@/components/ui/Icon';
import { revealDelay } from '@/lib/style';
import styles from './ServiceCard.module.css';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <li className={styles.card}>
      {/* Content (not the cell) reveals, so the hairline grid never shows gaps. */}
      <div className={styles.content} data-reveal style={revealDelay(index % 4)}>
        <div className={styles.top}>
          <span className={styles.iconWrap}>
            <Icon name={service.icon} size={22} />
          </span>
          <span className={`mono ${styles.index}`}>{String(index + 1).padStart(2, '0')}</span>
        </div>
        <h3 className={styles.title}>
          {/* Stretched link: the whole card is clickable, with one accessible name. */}
          <Link href={`/services/${service.slug}`} className={styles.link}>
            {service.title}
          </Link>
        </h3>
        <p className={styles.summary}>{service.summary}</p>
        <span className={styles.more} aria-hidden="true">
          Learn more
          <Icon name="arrow-right" size={14} />
        </span>
      </div>
    </li>
  );
}
