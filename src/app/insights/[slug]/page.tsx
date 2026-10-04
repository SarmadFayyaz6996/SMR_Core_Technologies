import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageHero } from '@/components/layout/PageHero';
import { ArticleCard } from '@/components/insights/ArticleCard';
import { ArticleCover } from '@/components/insights/ArticleCover';
import { CTASection } from '@/components/sections/CTASection';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { JsonLd } from '@/components/seo/JsonLd';
import { articles, getArticle } from '@/data/blog';
import { formatDate } from '@/lib/format';
import { articleSchema, buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticle((await params).slug);
  if (!article) return {};
  return buildMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
    type: 'article',
    publishedTime: article.date,
  });
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticle((await params).slug);
  if (!article) notFound();
  const more = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        lead={article.excerpt}
        breadcrumbs={[
          { name: 'Insights', path: '/insights' },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
      >
        <p className={`mono ${styles.meta}`}>
          <time dateTime={article.date}>{formatDate(article.date)}</time>
          <span>{article.readingMinutes} min read</span>
          <DemoBadge label="Demo article" />
        </p>
      </PageHero>

      <article className="section section--tight">
        <div className={`container ${styles.article}`}>
          <ArticleCover article={article} large />
          <div className={styles.prose}>
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)}>{p}</p>
                ))}
              </section>
            ))}
            <p className={styles.disclaimer}>
              This is sample content created for demonstration purposes.
            </p>
          </div>
        </div>
      </article>

      <section className="section section--tight section--alt" aria-labelledby="more-title">
        <div className="container-wide">
          <h2 id="more-title" className={styles.moreTitle}>
            More insights
          </h2>
          <div className={styles.more}>
            {more.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <JsonLd data={articleSchema(article)} />
    </>
  );
}
