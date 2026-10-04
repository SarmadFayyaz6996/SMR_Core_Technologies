import { techLayers, type TechLayer } from '@/data/technologies';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tabs } from '@/components/ui/Tabs';
import { cx } from '@/lib/cx';
import { cssVars } from '@/lib/style';
import styles from './TechnologySection.module.css';

/** Running "atomic number" across all layers, so tiles read like a periodic table. */
const atomicStart = techLayers.map((_, i) =>
  techLayers.slice(0, i).reduce((sum, layer) => sum + layer.technologies.length, 1),
);

function LayerTab({ layer, index }: { layer: TechLayer; index: number }) {
  return (
    <span className={styles.plateInner}>
      <span className={cx('mono', styles.plateIndex)}>L{index + 1}</span>
      <span className={styles.plateIcon}>
        <Icon name={layer.icon} size={16} />
      </span>
      <span className={styles.plateName}>{layer.name}</span>
      <span className={styles.plateCount}>{layer.technologies.length}</span>
    </span>
  );
}

function LayerPanel({ layer, index }: { layer: TechLayer; index: number }) {
  return (
    <div className={styles.detail}>
      <div className={styles.detailHead}>
        <p className={cx('mono', styles.detailLabel)}>
          Layer {String(index + 1).padStart(2, '0')} / {String(techLayers.length).padStart(2, '0')}
        </p>
        <h3 className={styles.detailTitle}>{layer.name}</h3>
        <p className={styles.detailText}>{layer.description}</p>
      </div>
      <ul className={styles.tiles}>
        {layer.technologies.map((tech, i) => (
          <li key={tech.name} className={styles.tile} style={cssVars({ '--i': i })}>
            <span className={cx('mono', styles.atomic)}>{atomicStart[index] + i}</span>
            <span className={styles.symbol} aria-hidden="true">
              {tech.symbol}
            </span>
            <span className={styles.techName}>{tech.name}</span>
            <span className={styles.techNote}>{tech.note}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function TechnologySection() {
  return (
    <section id="technology" className="section section--alt" aria-labelledby="technology-title">
      <div className="container-wide">
        <SectionHeader
          id="technology-title"
          index="05"
          eyebrow="Technology"
          align="split"
          title="A modern stack, chosen with intent."
          lead="Every layer of the systems we build — from AI to infrastructure — uses proven technology selected for performance, maintainability and long-term support."
        />

        <div data-reveal>
          <Tabs
            label="Technology stack layers"
            orientation="vertical"
            hoverActivate
            classNames={{
              root: styles.map,
              list: styles.stack,
              tab: styles.plate,
              panel: styles.panel,
            }}
            tabs={techLayers.map((layer, i) => (
              <LayerTab key={layer.id} layer={layer} index={i} />
            ))}
            panels={techLayers.map((layer, i) => (
              <LayerPanel key={layer.id} layer={layer} index={i} />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
