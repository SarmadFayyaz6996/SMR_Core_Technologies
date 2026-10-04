import Link from 'next/link';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Magnetic } from '@/components/ui/Magnetic';
import { PointerField } from '@/components/ui/PointerField';
import { cx } from '@/lib/cx';
import { cssVars } from '@/lib/style';
import { HeroVisual } from './HeroVisual';
import styles from './Hero.module.css';

const HEADLINE_LEAD = ['We', 'build', 'software', 'that'];
const HEADLINE_ACCENT = ['moves', 'business', 'forward.'];
const CAPABILITIES = ['Web', 'Mobile', 'Desktop', 'AI', 'Cloud'];

/** Each word slides up from its own mask; real spaces keep the text readable to AT. */
function Word({ text, index, accent }: { text: string; index: number; accent?: number }) {
  return (
    <>
      <span className={styles.wordMask}>
        <span
          className={cx(styles.word, accent !== undefined && styles.accentWord)}
          style={cssVars({ '--w': index, '--a': accent ?? 0 })}
        >
          {text}
        </span>
      </span>{' '}
    </>
  );
}

export function Hero() {
  return (
    <PointerField as="section" className={styles.hero} aria-labelledby="hero-title">
      <div className={cx('grid-bg', styles.grid)} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={cx('container-wide', styles.inner)}>
        <div className={styles.copy}>
          <Link href="/#ai" className={styles.pill}>
            <span className={styles.pillTag}>New</span>
            AI integration for existing products
            <Icon name="arrow-right" size={14} />
          </Link>

          <h1 id="hero-title" className={styles.title}>
            {HEADLINE_LEAD.map((w, i) => (
              <Word key={w} text={w} index={i} />
            ))}
            {HEADLINE_ACCENT.map((w, i) => (
              <Word key={w} text={w} index={HEADLINE_LEAD.length + i} accent={i} />
            ))}
          </h1>

          <p className={styles.lead}>
            We design and engineer high-performance web, mobile, desktop and AI-powered software
            that helps ambitious businesses build, scale and evolve.
          </p>

          <div className={styles.ctas}>
            <Magnetic>
              <ButtonLink href="/contact" size="lg" variant="primary" icon="arrow-right">
                Start a Project
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/work" size="lg" variant="secondary">
              Explore Our Work
            </ButtonLink>
          </div>

          <ul className={styles.capabilities} aria-label="What we build">
            {CAPABILITIES.map((c) => (
              <li key={c} className="mono">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visualWrap}>
          <HeroVisual />
        </div>
      </div>
    </PointerField>
  );
}
