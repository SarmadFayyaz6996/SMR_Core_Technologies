import { getTechLayers, type TechLayer } from '@/data/technologies';
import { Icon } from '@/components/ui/Icon';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Tabs } from '@/components/ui/Tabs';
import { format } from '@/i18n/format';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import { cssVars } from '@/lib/style';
import styles from './TechnologySection.module.css';

const pad = (n: number) => String(n).padStart(2, '0');

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

interface LayerPanelProps {
  layer: TechLayer;
  /** e.g. "Layer 02 / 06", already localized. */
  label: string;
  /** Running "atomic number" of the first tile, so tiles read like a periodic table. */
  atomicStart: number;
}

function LayerPanel({ layer, label, atomicStart }: LayerPanelProps) {
  return (
    <div className={styles.detail}>
      <div className={styles.detailHead}>
        <p className={cx('mono', styles.detailLabel)}>{label}</p>
        <h3 className={styles.detailTitle}>{layer.name}</h3>
        <p className={styles.detailText}>{layer.description}</p>
      </div>
      <ul className={styles.tiles}>
        {layer.technologies.map((tech, i) => (
          <li key={tech.name} className={styles.tile} style={cssVars({ '--i': i })}>
            <span className={cx('mono', styles.atomic)}>{atomicStart + i}</span>
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

export async function TechnologySection() {
  const dict = await getDictionary();
  const t = dict.technology;
  const layers = getTechLayers(dict);
  const atomicStart = layers.map((_, i) =>
    layers.slice(0, i).reduce((sum, layer) => sum + layer.technologies.length, 1),
  );

  return (
    <section id="technology" className="section section--alt" aria-labelledby="technology-title">
      <div className="container-wide">
        <SectionHeader
          id="technology-title"
          index="05"
          eyebrow={t.eyebrow}
          align="split"
          title={t.title}
          lead={t.lead}
        />

        <div data-reveal>
          <Tabs
            label={t.tabsLabel}
            orientation="vertical"
            hoverActivate
            classNames={{
              root: styles.map,
              list: styles.stack,
              tab: styles.plate,
              panel: styles.panel,
            }}
            tabs={layers.map((layer, i) => (
              <LayerTab key={layer.id} layer={layer} index={i} />
            ))}
            panels={layers.map((layer, i) => (
              <LayerPanel
                key={layer.id}
                layer={layer}
                label={format(t.layerOf, { i: pad(i + 1), n: pad(layers.length) })}
                atomicStart={atomicStart[i]}
              />
            ))}
          />
        </div>
      </div>
    </section>
  );
}
