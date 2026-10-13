import { getCaseStudies } from '@/data/projects';
import { ButtonLink } from '@/components/ui/Button';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tabs } from '@/components/ui/Tabs';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { CaseStudyDetail } from './CaseStudyDetail';
import styles from './CaseStudies.module.css';

export async function CaseStudies() {
  const dict = await getDictionary();
  const t = dict.caseStudies;
  const caseStudies = getCaseStudies(dict);

  return (
    <section id="work" className="section" aria-labelledby="work-title">
      <div className="container-wide">
        <SectionHeader
          id="work-title"
          index="03"
          eyebrow={t.eyebrow}
          align="split"
          title={t.title}
          lead={t.lead}
        />

        <div data-reveal>
          <Tabs
            label={t.tabsLabel}
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
            {t.viewAll}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
