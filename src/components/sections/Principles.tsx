import { engineeringPrinciples } from '@/data/principles';
import { featuredTechnologies } from '@/data/technologies';
import { Icon } from '@/components/ui/Icon';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import styles from './Principles.module.css';

/** Credibility strip: engineering principles + the stack we work with. */
export function Principles() {
  return (
    <section className={styles.section} aria-labelledby="principles-title">
      <div className="container-wide">
        <div className={styles.head}>
          <h2 id="principles-title" className={cx('mono', styles.label)}>
            Trusted engineering principles
          </h2>
        </div>
        <ul className={styles.grid}>
          {engineeringPrinciples.map((p, i) => (
            <li key={p.title} className={styles.item}>
              <span className={styles.itemInner} data-reveal style={revealDelay(i)}>
                <Icon name={p.icon} size={18} className={styles.icon} />
                {p.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.techRow}>
        <p className={cx('mono', styles.techLabel)}>Technology we work with</p>
        <div className={styles.marquee}>
          <ul className={styles.track}>
            {featuredTechnologies.map((t) => (
              <li key={t} className={styles.tech}>
                {t}
              </li>
            ))}
          </ul>
          {/* Duplicate for a seamless loop; hidden from assistive tech. */}
          <ul className={styles.track} aria-hidden="true">
            {featuredTechnologies.map((t) => (
              <li key={t} className={styles.tech}>
                {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
