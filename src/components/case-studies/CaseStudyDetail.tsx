import type { CaseStudy } from '@/data/projects';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { cx } from '@/lib/cx';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { ProductMock } from './ProductMock';
import styles from './CaseStudyDetail.module.css';

interface CaseStudyDetailProps {
  study: CaseStudy;
  headingLevel?: 'h2' | 'h3';
}

/** Full case-study presentation: product, architecture, narrative, stack and demo metrics. */
export function CaseStudyDetail({ study, headingLevel: Heading = 'h3' }: CaseStudyDetailProps) {
  return (
    <article className={styles.detail} aria-labelledby={`cs-${study.slug}`}>
      <header className={styles.header}>
        <div className={styles.titleRow}>
          <Heading id={`cs-${study.slug}`} className={styles.name}>
            {study.name}
          </Heading>
          <DemoBadge />
        </div>
        <p className={styles.tagline}>{study.tagline}</p>
        <p className={cx('mono', styles.category)}>{study.category}</p>
      </header>

      <div className={styles.visuals}>
        <ProductMock variant={study.mock} name={study.name} />
        <ArchitectureDiagram tiers={study.architecture} name={study.name} />
      </div>

      <dl className={styles.facts}>
        <div>
          <dt className="mono">Problem</dt>
          <dd>{study.problem}</dd>
        </div>
        <div>
          <dt className="mono">Solution</dt>
          <dd>{study.solution}</dd>
        </div>
        <div>
          <dt className="mono">Technology</dt>
          <dd>
            <ul className={styles.stack}>
              {study.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </dd>
        </div>
      </dl>

      <section className={styles.metrics} aria-label={`${study.name} demo metrics`}>
        <DemoBadge label="Demo metrics" className={styles.metricsBadge} />
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
