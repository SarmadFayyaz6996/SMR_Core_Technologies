import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Magnetic } from '@/components/ui/Magnetic';
import { PointerField } from '@/components/ui/PointerField';
import { LocaleLink } from '@/i18n/LocaleLink';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { cssVars } from '@/lib/style';
import { HeroVisual } from './HeroVisual';
import styles from './Hero.module.css';

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

export async function Hero() {
  const dict = await getDictionary();
  const t = dict.hero;
  const lead = t.titleLead.split(' ');
  // The gradient spans the accent words; `--a` positions each word within it.
  const accent = t.titleAccent.split(' ');
  const accentStep = accent.length > 1 ? 2 / (accent.length - 1) : 0;

  return (
    <PointerField as="section" className={styles.hero} aria-labelledby="hero-title">
      <div className={cx('grid-bg', styles.grid)} aria-hidden="true" />
      <div className={styles.spotlight} aria-hidden="true" />

      <div className={cx('container-wide', styles.inner)}>
        <div className={styles.copy}>
          <LocaleLink href="/#ai" className={styles.pill}>
            <span className={styles.pillTag}>{t.pillTag}</span>
            {t.pill}
            <Icon name="arrow-right" size={14} />
          </LocaleLink>

          <h1 id="hero-title" className={styles.title}>
            {lead.map((w, i) => (
              <Word key={`l${i}`} text={w} index={i} />
            ))}
            {accent.map((w, i) => (
              <Word key={`a${i}`} text={w} index={lead.length + i} accent={i * accentStep} />
            ))}
          </h1>

          <p className={styles.lead}>{t.lead}</p>

          <div className={styles.ctas}>
            <Magnetic>
              <ButtonLink href="/contact" size="lg" variant="primary" icon="arrow-right">
                {dict.common.startProject}
              </ButtonLink>
            </Magnetic>
            <ButtonLink href="/work" size="lg" variant="secondary">
              {dict.common.exploreWork}
            </ButtonLink>
          </div>

          <ul className={styles.capabilities} aria-label={t.capabilitiesLabel}>
            {t.capabilities.map((c) => (
              <li key={c} className="mono">
                {c}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.visualWrap}>
          <HeroVisual
            t={{ visualLabel: t.visualLabel, deploy: t.deploy, ready: t.ready, latency: t.latency }}
          />
        </div>
      </div>
    </PointerField>
  );
}
