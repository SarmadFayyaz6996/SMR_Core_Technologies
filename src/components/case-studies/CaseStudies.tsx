import { caseStudies } from '@/data/projects';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tabs } from '@/components/ui/Tabs';
import { cx } from '@/lib/cx';
import { CaseStudyDetail } from './CaseStudyDetail';
import styles from './CaseStudies.module.css';

export function CaseStudies() {
  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container-wide">
        <SectionHeader
          id="work-title"
          index="03"
          eyebrow="Case studies"
          align="split"
          title="Engineering, shown in detail."
          lead="Demo case studies that walk through how we frame a problem, design the architecture and measure the outcome."
        />

        <div data-reveal>
          <Tabs
            label="Case studies"
            orientation="vertical"
            classNames={{
              root: styles.showcase,
              list: styles.list,
              tab: styles.tab,
              panel: styles.panel,
            }}
            tabs={caseStudies.map((s, i) => (
              <span key={s.slug} className={styles.tabInner}>
                <span className={cx('mono', styles.tabIndex)}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className={styles.tabText}>
                  <span className={styles.tabName}>{s.name}</span>
                  <span className={styles.tabCategory}>{s.category}</span>
                </span>
              </span>
            ))}
            panels={caseStudies.map((s) => (
              <CaseStudyDetail key={s.slug} study={s} />
            ))}
          />
        </div>

        <div className={styles.footer}>
          <ButtonLink href="/work" variant="secondary" icon="arrow-right">
            View all work
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
