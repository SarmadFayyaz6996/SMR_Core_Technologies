import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { CaseStudyDetail } from '@/components/case-studies/CaseStudyDetail';
import { Solutions } from '@/components/sections/solutions/Solutions';
import { CTASection } from '@/components/sections/CTASection';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { caseStudies } from '@/data/projects';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Work — Demo Case Studies',
  description:
    'Demo case studies showing how SMR Core Technologies approaches custom software, AI integration, SaaS platforms and legacy modernization — from problem to architecture to outcome.',
  path: '/work',
});

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="How we turn complex problems into reliable software."
        lead="The case studies below are demo projects created to illustrate our process, architecture decisions and the outcomes we design for. They are not client engagements."
        breadcrumbs={[{ name: 'Work', path: '/work' }]}
      >
        <DemoBadge label="All projects on this page are demos" />
      </PageHero>

      <div className="container-wide">
        {caseStudies.map((study, i) => (
          <section key={study.slug} className={styles.study} aria-label={study.name}>
            <p className={`mono ${styles.index}`}>
              Case {String(i + 1).padStart(2, '0')} / {String(caseStudies.length).padStart(2, '0')}
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
