import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getDictionary } from '@/i18n/server';
import styles from './Faq.module.css';

interface FaqProps {
  index?: string;
}

/** Native <details> accordion: accessible and functional without JavaScript. */
export async function Faq({ index }: FaqProps) {
  const { faq: t } = await getDictionary();
  const items = t.items;

  return (
    <section id="faq" className="section section--alt" aria-labelledby="faq-title">
      <div className={`container-wide ${styles.layout}`}>
        <SectionHeader id="faq-title" index={index} eyebrow={t.eyebrow} title={t.title} />
        <div className={styles.list}>
          {items.map((item) => (
            <details key={item.question} className={styles.item} name="faq">
              <summary className={styles.summary}>
                <h3 className={styles.question}>{item.question}</h3>
                <span className={styles.toggle} aria-hidden="true">
                  <Icon name="plus" size={16} />
                </span>
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
