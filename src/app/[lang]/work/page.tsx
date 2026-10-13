import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { CaseStudyDetail } from '@/components/case-studies/CaseStudyDetail';
import { Solutions } from '@/components/sections/solutions/Solutions';
import { CTASection } from '@/components/sections/CTASection';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { getCaseStudies } from '@/data/projects';
import { format } from '@/i18n/format';
import { getDictionary, getLocale } from '@/i18n/server';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return buildMetadata({
    locale,
    title: dict.meta.workTitle,
    description: dict.meta.workDescription,
    path: '/work',
  });
}

const pad = (n: number) => String(n).padStart(2, '0');

export default async function WorkPage() {
  const dict = await getDictionary();
  const t = dict.caseStudies;
  const caseStudies = getCaseStudies(dict);

  return (
    <>
      <PageHero
        eyebrow={t.workEyebrow}
        title={t.workTitle}
        lead={t.workLead}
        breadcrumbs={[{ name: t.workEyebrow, path: '/work' }]}
      >
        <DemoBadge label={t.workBadge} />
      </PageHero>

      <div className="container-wide">
        {caseStudies.map((study, i) => (
          <section key={study.slug} className={styles.study} aria-label={study.name}>
            <p className={`mono ${styles.index}`}>
              {format(t.caseOf, { i: pad(i + 1), n: pad(caseStudies.length) })}
            </p>
            <CaseStudyDetail study={study} headingLevel="h2" />
          </section>
        ))}
      </div>

      <Solutions />
      <CTASection />
    </>
  );
}
