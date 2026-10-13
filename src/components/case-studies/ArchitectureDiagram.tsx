import type { ArchitectureTier } from '@/data/projects';
import { cssVars } from '@/lib/style';
import styles from './ArchitectureDiagram.module.css';

interface ArchitectureDiagramProps {
  tiers: ArchitectureTier[];
  caption: string;
  label: string;
}

/** Tiered architecture with animated connectors between layers. */
export function ArchitectureDiagram({ tiers, caption, label }: ArchitectureDiagramProps) {
  return (
    <figure className={styles.diagram}>
      <figcaption className={`mono ${styles.caption}`}>{caption}</figcaption>
      <ol className={styles.tiers} aria-label={label}>
        {tiers.map((tier, t) => (
          <li key={tier.label} className={styles.tier} style={cssVars({ '--t': t })}>
            <span className={`mono ${styles.tierLabel}`}>{tier.label}</span>
            <ul className={styles.nodes}>
              {tier.nodes.map((node) => (
                <li key={node} className={styles.node}>
                  {node}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </figure>
  );
}
