import type { FaqItem } from '@/data/faq';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './Faq.module.css';

interface FaqProps {
  items: FaqItem[];
  index?: string;
  title?: string;
}

/** Native <details> accordion: accessible and functional without JavaScript. */
export function Faq({ items, index, title = 'Questions, answered.' }: FaqProps) {
  return (
    <section id="faq" className="section section--alt" aria-labelledby="faq-title">
      <div className={`container-wide ${styles.layout}`}>
        <SectionHeader id="faq-title" index={index} eyebrow="FAQ" title={title} />
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
