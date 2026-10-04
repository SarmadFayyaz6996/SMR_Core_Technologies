import type { LegalDocument } from '@/data/legal';
import { formatDate } from '@/lib/format';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { PageHero } from './PageHero';
import styles from './LegalPage.module.css';

export function LegalPage({ document }: { document: LegalDocument }) {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={document.title}
        lead={document.description}
        breadcrumbs={[{ name: document.title, path: `/${document.slug}` }]}
      >
        <p className={`mono ${styles.meta}`}>
          Last updated <time dateTime={document.updated}>{formatDate(document.updated)}</time>
          <DemoBadge label="Template — pending legal review" />
        </p>
      </PageHero>
      <section className="section section--tight">
        <div className={`container ${styles.body}`}>
          {document.sections.map((s) => (
            <section key={s.heading}>
              <h2>{s.heading}</h2>
              <p>{s.body}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
