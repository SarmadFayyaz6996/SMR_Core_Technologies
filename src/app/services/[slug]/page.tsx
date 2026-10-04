import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { CTASection } from '@/components/sections/CTASection';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { JsonLd } from '@/components/seo/JsonLd';
import { getService, services } from '@/data/services';
import { buildMetadata, serviceSchema } from '@/lib/seo';
import { revealDelay } from '@/lib/style';
import styles from './page.module.css';

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: `${service.summary} ${service.description}`.slice(0, 158),
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const related = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow="Service"
        title={service.title}
        lead={service.description}
        breadcrumbs={[
          { name: 'Services', path: '/#services' },
          { name: service.title, path: `/services/${service.slug}` },
        ]}
      >
        <div className={styles.heroActions}>
          <ButtonLink
            href={`/contact?type=${service.projectType}`}
            variant="primary"
            icon="arrow-right"
          >
            Start a Project
          </ButtonLink>
          <ButtonLink href="/work" variant="secondary">
            See demo work
          </ButtonLink>
        </div>
      </PageHero>

      <section className="section section--tight">
        <div className={`container-wide ${styles.layout}`}>
          <div>
            <h2 className={styles.heading}>What we deliver</h2>
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
            <h2 className={`mono ${styles.asideTitle}`}>Typical technology</h2>
            <ul className={styles.tech}>
              {service.technologies.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--tight section--alt" aria-labelledby="related-title">
        <div className="container-wide">
          <h2 id="related-title" className={styles.heading}>
            Related services
          </h2>
          <ul className={styles.related}>
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className={styles.relatedCard}>
                  <Icon name={s.icon} size={20} />
                  <span className={styles.relatedTitle}>{s.title}</span>
                  <span className={styles.relatedText}>{s.summary}</span>
                  <Icon name="arrow-up-right" size={16} className={styles.relatedArrow} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
      <JsonLd data={serviceSchema(service)} />
    </>
  );
}
