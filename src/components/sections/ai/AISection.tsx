import { SectionHeader } from '@/components/ui/SectionHeader';
import { ButtonLink } from '@/components/ui/Button';
import { cx } from '@/lib/cx';
import { AIConsole } from './AIConsole';
import styles from './AISection.module.css';

/** Always rendered in the dark theme — a deliberate, inverted "intelligence" band. */
export function AISection() {
  return (
    <section
      id="ai"
      data-theme="dark"
      className={cx('section', styles.section)}
      aria-labelledby="ai-title"
    >
      <div className={styles.backdrop} aria-hidden="true">
        <div className={cx('grid-bg', styles.grid)} />
        <div className={styles.aurora} />
      </div>
      <div className={cx('container-wide', styles.inner)}>
        <SectionHeader
          id="ai-title"
          index="04"
          eyebrow="Artificial intelligence"
          align="split"
          title={
            <>
              Make your software <span className="gradient-text">intelligent.</span>
            </>
          }
          lead="AI shouldn't be a feature added at the end. We help businesses integrate intelligent capabilities directly into their products, workflows and operations."
        />
        <div data-reveal>
          <AIConsole />
        </div>
        <div className={styles.cta}>
          <ButtonLink href="/services/ai-integration" variant="secondary" icon="arrow-right">
            Explore AI integration
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
