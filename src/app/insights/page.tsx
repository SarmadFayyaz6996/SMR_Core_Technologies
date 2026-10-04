import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ArticleCard } from '@/components/insights/ArticleCard';
import { CTASection } from '@/components/sections/CTASection';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { articles } from '@/data/blog';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Insights — Software Engineering, AI & Cloud',
  description:
    'Practical insights on custom software development, AI integration, scalable web applications, cloud architecture and legacy modernization from SMR Core Technologies.',
  path: '/insights',
});

export default function InsightsPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Notes on building software that lasts."
        lead="Perspectives on engineering, architecture, AI and modernization — written for people who build and buy software."
        breadcrumbs={[{ name: 'Insights', path: '/insights' }]}
      >
        <DemoBadge label="Demo content" />
      </PageHero>

      <section className="section section--tight" aria-label="Articles">
        <div className="container-wide">
          <h2 className="sr-only">Latest articles</h2>
          <div className={styles.featured}>
            <ArticleCard article={featured} featured />
          </div>
          <div className={styles.grid}>
            {rest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
