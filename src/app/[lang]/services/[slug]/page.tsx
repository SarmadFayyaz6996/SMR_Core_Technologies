import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { JsonLd } from '@/components/seo/JsonLd';
import { getService, getServices, serviceSlugs } from '@/data/services';
import { LocaleLink } from '@/i18n/LocaleLink';
import { getDictionary, getLocale } from '@/i18n/server';
import { buildMetadata, serviceSchema } from '@/lib/seo';
import { revealDelay } from '@/lib/style';
import styles from './page.module.css';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const [{ slug }, locale, dict] = await Promise.all([params, getLocale(), getDictionary()]);
  const service = getService(dict, slug);
  if (!service) return {};
  return buildMetadata({
    locale,
    title: service.title,
    description: `${service.summary} ${service.description}`.slice(0, 158),
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const [{ slug }, locale, dict] = await Promise.all([params, getLocale(), getDictionary()]);
  const service = getService(dict, slug);
  if (!service) notFound();
  const t = dict.services;
  const related = getServices(dict)
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={t.pageEyebrow}
        title={service.title}
        lead={service.description}
        breadcrumbs={[
          { name: dict.nav.services, path: '/#services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      >
        <div className={styles.heroActions}>
          <ButtonLink
            href={`/contact?type=${service.projectType}`}
            variant="primary"
            icon="arrow-right"
          >
            {dict.common.startProject}
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            {t.seeDemoWork}
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section section--tight">
        <div className={`container-wide ${styles.layout}`}>
          <div>
            <h2 className={styles.heading}>{t.deliverTitle}</h2>
            <ul className={styles.deliverables}>
              {service.deliverables.map((d, i) => (
                <li key={d} data-reveal style={revealDelay(i)}>
                  <span className={styles.check}>
                    <Icon name="check" size={14} />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
          <aside className={styles.aside}>
            <h2 className={`mono ${styles.asideTitle}`}>{t.techTitle}</h2>
            <ul className={styles.tech}>
              {service.technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--tight section--alt" aria-labelledby="related-title">
        <div className="container-wide">
          <h2 id="related-title" className={styles.heading}>
            {t.relatedTitle}
          </h2>
          <ul className={styles.related}>
            {related.map((s) => (
              <li key={s.slug}>
                <LocaleLink href={`/services/${s.slug}`} className={styles.relatedCard}>
                  <Icon name={s.icon} size={20} />
                  <span className={styles.relatedTitle}>{s.title}</span>
                  <span className={styles.relatedText}>{s.summary}</span>
                  <Icon name="arrow-up-right" size={16} className={styles.relatedArrow} />
                </LocaleLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
      <JsonLd data={serviceSchema(locale, service)} />
    </>
  );
}
