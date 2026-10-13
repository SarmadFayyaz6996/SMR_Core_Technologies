import { LocaleLink as Link } from '@/i18n/LocaleLink';
import type { Article } from '@/data/blog';
import { format } from '@/i18n/format';
import { getDictionary, getLocale } from '@/i18n/server';
import { formatDate } from '@/lib/format';
import { cx } from '@/lib/cx';
import { ArticleCover } from './ArticleCover';
import styles from './ArticleCard.module.css';

export async function ArticleCard({ article, featured }: { article: Article; featured?: boolean }) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <article className={cx(styles.card, featured && styles.featured)} data-reveal>
      <Link href={`/insights/${article.slug}`} className={styles.link}>
        <ArticleCover article={article} large={featured} />
        <div className={styles.body}>
          <p className={cx('mono', styles.meta)}>
            <span>{article.categoryLabel}</span>
            <time dateTime={article.date}>{formatDate(article.date, locale)}</time>
            <span>{format(dict.insights.minRead, { n: article.readingMinutes })}</span>
          </p>
          <h3 className={styles.title}>{article.title}</h3>
          <p className={styles.excerpt}>{article.excerpt}</p>
        </div>
      </Link>
    </article>
  );
}
