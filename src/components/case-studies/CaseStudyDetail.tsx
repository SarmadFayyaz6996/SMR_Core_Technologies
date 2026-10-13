import type { CaseStudy } from '@/data/projects';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { format } from '@/i18n/format';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ProductMock } from './ProductMock';
import styles from './CaseStudyDetail.module.css';

interface CaseStudyDetailProps {
  study: CaseStudy;
  headingLevel?: 'h2' | 'h3';
}

/** Full case-study presentation: product, architecture, narrative, stack and demo metrics. */
export async function CaseStudyDetail({
  study,
  headingLevel: Heading = 'h3',
}: CaseStudyDetailProps) {
  const dict = await getDictionary();
  const t = dict.caseStudies;

  return (
    <article className={styles.detail} aria-labelledby={`cs-${study.slug}`}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <Heading id={`cs-${study.slug}`} className={styles.name}>
            {study.name}
          </Heading>
          <DemoBadge label={dict.common.demoProject} />
        </div>
        <p className={styles.tagline}>{study.tagline}</p>
        <p className={cx('mono', styles.category)}>{study.category}</p>
      </header>

      <div className={styles.visuals}>
        <ProductMock
          variant={study.mock}
          name={study.name}
          label={format(t.mockLabel, { name: study.name })}
          t={t.mocks}
        />
        <ArchitectureDiagram
          tiers={study.architecture}
          caption={t.architecture}
          label={format(t.architectureLabel, { name: study.name })}
        />
      </div>

      <dl className={styles.facts}>
        <div>
          <dt className="mono">{t.problem}</dt>
          <dd>{study.problem}</dd>
        </div>
        <div>
          <dt className="mono">{t.solution}</dt>
          <dd>{study.solution}</dd>
        </div>
        <div>
          <dt className="mono">{t.technology}</dt>
          <dd>
            <ul className={styles.stack}>
              {study.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <section className={styles.metrics} aria-label={format(t.metricsLabel, { name: study.name })}>
        <DemoBadge label={dict.common.demoMetrics} className={styles.metricsBadge} />
        <ul className={styles.metricList}>
          {study.metrics.map((m) => (
            <li key={m.label}>
              <strong>{m.value}</strong>
              <span>{m.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
