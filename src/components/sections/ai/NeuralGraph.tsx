import { cssVars } from '@/lib/style';
import styles from './NeuralGraph.module.css';

const LAYERS = [3, 5, 5, 2];
const WIDTH = 520;
const HEIGHT = 120;
const PAD_X = 24;
const PAD_Y = 16;

const layerX = (l: number) => PAD_X + (l * (WIDTH - PAD_X * 2)) / (LAYERS.length - 1);
const nodeY = (count: number, n: number) => PAD_Y + ((n + 0.5) * (HEIGHT - PAD_Y * 2)) / count;

const nodes = LAYERS.flatMap((count, l) =>
  Array.from({ length: count }, (_, n) => ({
    id: `${l}-${n}`,
    layer: l,
    x: layerX(l),
    y: nodeY(count, n),
  })),
);

const edges = nodes.flatMap((a) =>
  nodes
    .filter((b) => b.layer === a.layer + 1)
    .map((b) => ({ id: `${a.id}>${b.id}`, layer: a.layer, d: `M${a.x} ${a.y} L${b.x} ${b.y}` })),
);

/** Decorative model graph that "fires" while the console is processing. */
export function NeuralGraph({ active, complete }: { active: boolean; complete: boolean }) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      className={styles.graph}
      data-active={active || undefined}
      data-complete={complete || undefined}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      {edges.map((e) => (
        <path key={e.id} d={e.d} className={styles.edge} />
      ))}
      {/* Pulse overlay travels along the always-visible base edges. */}
      {edges.map((e, i) => (
        <path
          key={`${e.id}-pulse`}
          d={e.d}
          className={styles.pulse}
          style={cssVars({ '--l': e.layer, '--i': i % 7 })}
        />
      ))}
      {nodes.map((n) => (
        <circle
          key={n.id}
          cx={n.x}
          cy={n.y}
          r={n.layer === LAYERS.length - 1 ? 6 : 4.5}
          className={styles.node}
          data-output={n.layer === LAYERS.length - 1 || undefined}
          style={cssVars({ '--l': n.layer })}
        />
      ))}
    </svg>
  );
}
