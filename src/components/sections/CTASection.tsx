import { ButtonLink } from '@/components/ui/Button';
import { Magnetic } from '@/components/ui/Magnetic';
import { PointerField } from '@/components/ui/PointerField';
import { cx } from '@/lib/cx';
import styles from './CTASection.module.css';

interface CTASectionProps {
  title?: string;
  text?: string;
}

export function CTASection({
  title = 'Have an idea worth building?',
  text = "Let's turn your idea into software that creates real business value.",
}: CTASectionProps) {
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
              {title}
            </h2>
            <p className={styles.text} data-reveal>
              {text}
            </p>
            <div className={styles.actions} data-reveal>
              <Magnetic>
                <ButtonLink href="/contact" variant="primary" size="lg" icon="arrow-right">
                  Start a Project
                </ButtonLink>
              </Magnetic>
              <ButtonLink href="/contact?topic=expert" variant="secondary" size="lg">
                Talk to an Expert
              </ButtonLink>
            </div>
          </div>
        </PointerField>
      </div>
    </section>
  );
}
