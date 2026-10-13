import type { Metadata } from 'next';
import { getLegalDocument, type LegalSlug } from '@/data/legal';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { getDictionary, getLocale } from '@/i18n/server';
import { formatDate } from '@/lib/format';
import { buildMetadata } from '@/lib/seo';
import { PageHero } from './PageHero';
import styles from './LegalPage.module.css';

/** Shared metadata for the legal pages (template copy → kept out of search results). */
export async function legalMetadata(slug: LegalSlug): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const doc = getLegalDocument(dict, slug);
  return buildMetadata({
    locale,
    title: doc.title,
    description: doc.description,
    path: `/${slug}`,
    noIndex: true,
  });
}

export async function LegalPage({ slug }: { slug: LegalSlug }) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  const doc = getLegalDocument(dict, slug);
  const t = dict.legal;

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={doc.title}
        lead={doc.description}
        breadcrumbs={[{ name: doc.title, path: `/${slug}` }]}
      >
        <p className={`mono ${styles.meta}`}>
          {t.lastUpdated} <time dateTime={doc.updated}>{formatDate(doc.updated, locale)}</time>
          <DemoBadge label={t.badge} />
        </p>
      </PageHero>
      <section className="section section--tight">
        <div className={`container ${styles.body}`}>
          {doc.sections.map((s) => (
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
