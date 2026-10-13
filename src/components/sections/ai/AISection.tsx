import { SectionHeader } from '@/components/ui/SectionHeader';
import { ButtonLink } from '@/components/ui/Button';
import { getAiCapabilities } from '@/data/ai';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { AIConsole } from './AIConsole';
import styles from './AISection.module.css';

/** Always rendered in the dark theme — a deliberate, inverted "intelligence" band. */
export async function AISection() {
  const dict = await getDictionary();
  const t = dict.ai;

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
          eyebrow={t.eyebrow}
          align="split"
          title={
            <>
              {t.titleLead} <span className="gradient-text">{t.titleAccent}</span>
            </>
          }
          lead={t.lead}
        />
        <div data-reveal>
          <AIConsole
            capabilities={getAiCapabilities(dict)}
            labels={{
              you: t.you,
              assistant: t.assistant,
              stepsLabel: t.stepsLabel,
              capabilitiesLabel: t.capabilitiesLabel,
              demoLabel: t.demoLabel,
            }}
          />
        </div>
        <div className={styles.cta}>
          <ButtonLink href="/services/ai-integration" variant="secondary" icon="arrow-right">
            {t.cta}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
