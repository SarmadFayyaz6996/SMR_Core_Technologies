import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { site } from '@/data/site';
import { getDictionary, getLocale } from '@/i18n/server';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return buildMetadata({
    locale,
    title: dict.meta.careersTitle,
    description: dict.meta.careersDescription,
    path: '/careers',
  });
}

export default async function CareersPage() {
  const { careers: t } = await getDictionary();
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent(t.emailSubject)}`;

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbs={[{ name: t.eyebrow, path: '/careers' }]}
      />
      <section className="section section--tight">
        <div className={`container-wide ${styles.layout}`}>
          <ul className={styles.principles}>
            {t.principles.map((p) => (
              <li key={p.title}>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles.openings}>
            <h2 className={styles.openingsTitle}>{t.openRoles}</h2>
            <p className={styles.empty}>{t.empty}</p>
            <ButtonLink href={mailto} variant="secondary" icon="arrow-right">
              {t.introduce}
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
