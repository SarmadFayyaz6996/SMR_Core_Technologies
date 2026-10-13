import { getEngineeringPrinciples } from '@/data/principles';
import { featuredTechnologies } from '@/data/technologies';
import { Icon } from '@/components/ui/Icon';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import styles from './Principles.module.css';

/** Credibility strip: engineering principles + the stack we work with. */
export async function Principles() {
  const dict = await getDictionary();

  return (
    <section className={styles.section} aria-labelledby="principles-title">
      <div className="container-wide">
        <div className={styles.head}>
          <h2 id="principles-title" className={cx('mono', styles.label)}>
            {dict.principles.title}
          </h2>
        </div>
        <ul className={styles.grid}>
          {getEngineeringPrinciples(dict).map((p, i) => (
            <li key={p.id} className={styles.item}>
              <span className={styles.itemInner} data-reveal style={revealDelay(i)}>
                <Icon name={p.icon} size={18} className={styles.icon} />
                {p.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.techRow}>
        <p className={cx('mono', styles.techLabel)}>{dict.principles.techTitle}</p>
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
