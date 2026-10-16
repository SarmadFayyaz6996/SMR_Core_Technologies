import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { Icon } from '@/components/ui/Icon';
import { getBudgetOptions, getProjectTypeOptions, projectTypeValues } from '@/data/projectOptions';
import { site } from '@/data/site';
import { format } from '@/i18n/format';
import { getDictionary, getLocale } from '@/i18n/server';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return buildMetadata({
    locale,
    title: dict.meta.contactTitle,
    description: dict.meta.contactDescription,
    path: '/contact',
  });
}

interface ContactPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const [params, dict] = await Promise.all([searchParams, getDictionary()]);
  const t = dict.contact;
  const type = typeof params.type === 'string' ? params.type : '';
  const initial = {
    projectType: (projectTypeValues as readonly string[]).includes(type) ? type : '',
    message: params.topic === 'expert' ? t.expertMessage : '',
  };

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbs={[{ name: t.eyebrow, path: '/contact' }]}
      />
      <section className="section section--tight">
        <div className={`container-wide ${styles.layout}`}>
          <aside className={styles.aside}>
            <h2 className={styles.asideTitle}>{t.nextTitle}</h2>
            <ol className={styles.steps}>
              {t.steps.map((step, i) => (
                <li key={step.title}>
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={styles.direct}>
              <p className="mono">{t.preferEmail}</p>
              <a href={`mailto:${site.email}`} className={styles.email}>
                <Icon name="mail" size={18} />
                {site.email}
              </a>
              <p className={styles.whatsappLabel}>{format(t.whatsappCeo, { name: site.ceo.name })}</p>
              <a
                href={site.ceo.whatsapp}
                className={styles.email}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="whatsapp" size={18} />
                {site.ceo.phone}
              </a>
            </div>
          </aside>
          <div className={styles.formCard}>
            <ContactForm
              initial={initial}
              t={t}
              projectTypes={getProjectTypeOptions(dict)}
              budgets={getBudgetOptions(dict)}
            />
          </div>
        </div>
      </section>
    </>
  );
}
