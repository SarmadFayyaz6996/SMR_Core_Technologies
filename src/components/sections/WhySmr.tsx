import { whySmr } from '@/data/principles';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import styles from './WhySmr.module.css';

export function WhySmr() {
  return (
    <section id="why" className="section section--alt" aria-labelledby="why-title">
      <div className="container-wide">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeader
              id="why-title"
              index="07"
              eyebrow="Why SMR"
              title="Engineering built for the long term."
              lead="Software is a long-term asset. We build it the way you would want it maintained — carefully, transparently and with the next five years in mind."
            />
          </div>
          <ul className={styles.list}>
            {whySmr.map((item, i) => (
              <li key={item.title} className={styles.item}>
                <div className={styles.itemInner} data-reveal style={revealDelay(i % 3)}>
                  <span className={cx('mono', styles.index)}>{String(i + 1).padStart(2, '0')}</span>
                  <Icon name={item.icon} size={20} className={styles.icon} />
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
