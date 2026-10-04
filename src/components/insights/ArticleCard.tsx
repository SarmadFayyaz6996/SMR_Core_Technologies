import Link from 'next/link';
import type { Article } from '@/data/blog';
import { formatDate } from '@/lib/format';
import { cx } from '@/lib/cx';
import { ArticleCover } from './ArticleCover';
import styles from './ArticleCard.module.css';

export function ArticleCard({ article, featured }: { article: Article; featured?: boolean }) {
  return (
    <article className={cx(styles.card, featured && styles.featured)} data-reveal>
      <Link href={`/insights/${article.slug}`} className={styles.link}>
        <ArticleCover article={article} large={featured} />
        <div className={styles.body}>
          <p className={cx('mono', styles.meta)}>
            <span>{article.category}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
            <span>{article.readingMinutes} min read</span>
          </p>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.excerpt}>{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
