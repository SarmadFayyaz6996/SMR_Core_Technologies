import { getWhySmr } from '@/data/principles';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import styles from './WhySmr.module.css';

export async function WhySmr() {
  const dict = await getDictionary();
  const t = dict.why;

  return (
    <section id="why" className="section section--alt" aria-labelledby="why-title">
      <div className="container-wide">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeader
              id="why-title"
              index="07"
              eyebrow={t.eyebrow}
              title={t.title}
              lead={t.lead}
            />
          </div>
          <ul className={styles.list}>
            {getWhySmr(dict).map((item, i) => (
              <li key={item.id} className={styles.item}>
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
