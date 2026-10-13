import { getSolutions } from '@/data/solutions';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { format } from '@/i18n/format';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import { SolutionVisual } from './SolutionVisual';
import styles from './Solutions.module.css';

export async function Solutions() {
  const dict = await getDictionary();
  const t = dict.solutions;

  return (
    <section id="solutions" className="section section--alt" aria-labelledby="solutions-title">
      <div className="container-wide">
        <SectionHeader
          id="solutions-title"
          index="02"
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.lead}
        />

        <ul className={styles.bento}>
          {getSolutions(dict).map((s, i) => (
            <li
              key={s.visual}
              className={cx('solution-card', styles.card, styles[`card${i}`])}
              data-reveal
              style={revealDelay(i % 3)}
            >
              <div className={styles.meta}>
                <span className={styles.icon}>
                  <Icon name={s.icon} size={18} />
                </span>
                <DemoBadge label={dict.common.conceptProject} />
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.description}>{s.description}</p>
              </div>
              <div className={styles.visual}>
                <SolutionVisual visual={s.visual} t={t.visuals} />
              </div>
              <ul
                className={styles.tags}
                aria-label={format(t.capabilitiesLabel, { title: s.title })}
              >
                {s.capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
