import { ButtonLink } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { PointerField } from '@/components/ui/PointerField';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import styles from './CTASection.module.css';

interface CTASectionProps {
  title?: string;
  text?: string;
}

export async function CTASection({ title, text }: CTASectionProps) {
  const dict = await getDictionary();

  return (
    <section className={cx('section', styles.section)} aria-labelledby="cta-title">
      <div className="container-wide">
        <PointerField className={styles.panel}>
          <div className={cx('grid-bg', styles.grid)} aria-hidden="true" />
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.rings} aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className={styles.content}>
            <h2 id="cta-title" className={styles.title} data-reveal>
              {title ?? dict.cta.title}
            </h2>
            <p className={styles.text} data-reveal>
              {text ?? dict.cta.text}
            </p>
            <div className={styles.actions} data-reveal>
              <Magnetic>
                <ButtonLink href="/contact" variant="primary" size="lg" icon="arrow-right">
                  {dict.common.startProject}
                </ButtonLink>
              </Magnetic>
              <ButtonLink href="/contact?topic=expert" variant="secondary" size="lg">
                {dict.common.talkToExpert}
              </ButtonLink>
            </div>
          </div>
        </PointerField>
      </div>
    </section>
  );
}
