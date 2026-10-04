import { solutions } from '@/data/solutions';
import { DemoBadge } from '@/components/ui/DemoBadge';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import { SolutionVisual } from './SolutionVisual';
import styles from './Solutions.module.css';

export function Solutions() {
  return (
    <section id="solutions" className="section section--alt" aria-labelledby="solutions-title">
      <div className="container-wide">
        <SectionHeader
          id="solutions-title"
          index="02"
          eyebrow="Solutions"
          title="Built for the way modern businesses work."
          lead="Concept products that show how we approach common business platforms — each one designed, architected and ready to adapt to your domain."
        />

        <ul className={styles.bento}>
          {solutions.map((s, i) => (
            <li
              key={s.title}
              className={cx('solution-card', styles.card, styles[`card${i}`])}
              data-reveal
              style={revealDelay(i % 3)}
            >
              <div className={styles.meta}>
                <span className={styles.icon}>
                  <Icon name={s.icon} size={18} />
                </span>
                <DemoBadge label="Concept Project" />
              </div>
              <div className={styles.text}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.description}>{s.description}</p>
              </div>
              <div className={styles.visual}>
                <SolutionVisual visual={s.visual} />
              </div>
              <ul className={styles.tags} aria-label={`${s.title} capabilities`}>
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
