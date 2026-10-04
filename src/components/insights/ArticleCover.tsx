import type { Article } from '@/data/blog';
import { cssVars } from '@/lib/style';
import styles from './ArticleCover.module.css';

/** Hue per category: covers are generated, so no stock imagery is needed. */
const categoryHue: Record<Article['category'], number> = {
  AI: 248,
  Engineering: 200,
  Architecture: 275,
  Modernization: 170,
  Cloud: 215,
  Security: 320,
};

/** Generative, on-brand cover art: concentric "core" frames + a seeded node grid. */
export function ArticleCover({ article, large }: { article: Article; large?: boolean }) {
  const seed = [...article.slug].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  const nodes = Array.from({ length: 18 }, (_, i) => ((seed * (i + 3)) % 97) / 97);

  return (
    <div
      className={styles.cover}
      data-large={large || undefined}
      style={cssVars({ '--hue': categoryHue[article.category] })}
      aria-hidden="true"
    >
      <div className={styles.frames}>
        <span />
        <span />
        <span />
      </div>
      <div className={styles.nodes}>
        {nodes.map((v, i) => (
          <i key={i} data-on={v > 0.62 || undefined} />
        ))}
      </div>
      <span className={`mono ${styles.label}`}>{article.category}</span>
    </div>
  );
}
