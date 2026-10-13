import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ArticleCard } from '@/components/insights/ArticleCard';
import { CTASection } from '@/components/sections/CTASection';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { getArticles } from '@/data/blog';
import { getDictionary, getLocale } from '@/i18n/server';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return buildMetadata({
    locale,
    title: dict.meta.insightsTitle,
    description: dict.meta.insightsDescription,
    path: '/insights',
  });
}

export default async function InsightsPage() {
  const dict = await getDictionary();
  const t = dict.insights;
  const [featured, ...rest] = getArticles(dict);

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbs={[{ name: t.eyebrow, path: '/insights' }]}
      >
        <DemoBadge label={dict.common.demoContent} />
      </PageHero>

      <section className="section section--tight" aria-labelledby="latest-title">
        <div className="container-wide">
          <h2 id="latest-title" className="sr-only">
            {t.latest}
          </h2>
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
