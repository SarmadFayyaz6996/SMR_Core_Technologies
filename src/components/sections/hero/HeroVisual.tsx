import { Icon, type IconName } from '@/components/ui/Icon';
import { cssVars } from '@/lib/style';
import styles from './HeroVisual.module.css';

/**
 * "System core" — SMR's signature hero visual. A processor-like core is wired to
 * six product modules via circuit traces; packets travel along each trace to
 * suggest live data flow. Pure SVG + SMIL/CSS, no JavaScript required.
 */

const CENTER = 300;
const CORE = 128;
const CORE_START = CENTER - CORE / 2;
const NODE_W = 140;
const NODE_H = 54;

interface Module {
  label: string;
  meta: string;
  icon: IconName;
  cx: number;
  cy: number;
  /** Circuit trace from the core to this module. */
  trace: string;
  /** Packet direction: outbound from the core, or inbound to it. */
  inbound?: boolean;
  duration: number;
}

const modules: Module[] = [
  {
    label: 'AI Engine',
    meta: 'llm · rag',
    icon: 'sparkles',
    cx: 300,
    cy: 95,
    trace: 'M300 222 V122',
    duration: 2.4,
  },
  {
    label: 'Web Apps',
    meta: 'angular · react',
    icon: 'browser',
    cx: 478,
    cy: 198,
    trace: 'M378 270 H452 V225',
    duration: 3.1,
    inbound: true,
  },
  {
    label: 'API Gateway',
    meta: 'rest · graphql',
    icon: 'plug',
    cx: 478,
    cy: 402,
    trace: 'M378 330 H452 V375',
    duration: 2.8,
  },
  {
    label: 'Cloud',
    meta: 'azure · aws',
    icon: 'cloud',
    cx: 300,
    cy: 505,
    trace: 'M300 378 V478',
    duration: 3.4,
    inbound: true,
  },
  {
    label: 'Mobile',
    meta: 'ios · android',
    icon: 'mobile',
    cx: 122,
    cy: 402,
    trace: 'M222 330 H148 V375',
    duration: 2.6,
  },
  {
    label: 'Desktop',
    meta: '.net · winui',
    icon: 'desktop',
    cx: 122,
    cy: 198,
    trace: 'M222 270 H148 V225',
    duration: 3.2,
    inbound: true,
  },
];

const PIN_OFFSETS = [16, 40, 64, 88, 112];

function CorePins() {
  const near = CORE_START - 1;
  const far = CORE_START + CORE + 1;
  return (
    <g className={styles.pins}>
      {PIN_OFFSETS.map((o) => {
        const p = CORE_START + o;
        return (
          <g key={o}>
            <line x1={p} y1={near - 10} x2={p} y2={near} />
            <line x1={p} y1={far} x2={p} y2={far + 10} />
            <line x1={near - 10} y1={p} x2={near} y2={p} />
            <line x1={far} y1={p} x2={far + 10} y2={p} />
          </g>
        );
      })}
    </g>
  );
}

function ModuleNode({ module, index }: { module: Module; index: number }) {
  const x = module.cx - NODE_W / 2;
  const y = module.cy - NODE_H / 2;
  return (
    <g className={styles.node} style={cssVars({ '--i': index })}>
      <rect x={x} y={y} width={NODE_W} height={NODE_H} rx={12} className={styles.nodeBox} />
      <rect x={x + 10} y={y + 11} width={32} height={32} rx={8} className={styles.nodeIconBg} />
      <Icon name={module.icon} size={18} x={x + 17} y={y + 18} className={styles.nodeIcon} />
      <text x={x + 52} y={y + 24} className={styles.nodeLabel}>
        {module.label}
      </text>
      <text x={x + 52} y={y + 40} className={styles.nodeMeta}>
        {module.meta}
      </text>
    </g>
  );
}

export function HeroVisual() {
  return (
    <div
      className={`corners ${styles.visual}`}
      role="img"
      aria-label="Illustration of a software core connected to AI, web, API, cloud, mobile and desktop modules with data flowing between them."
    >
      <div className={styles.layerBack} aria-hidden="true">
        <svg viewBox="0 0 600 600" className={styles.svg}>
          <defs>
            <radialGradient id="hv-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.45" />
              <stop offset="60%" stopColor="var(--accent)" stopOpacity="0.06" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hv-core" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--surface-3)" />
              <stop offset="100%" stopColor="var(--surface)" />
            </linearGradient>
            <linearGradient id="hv-trace" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--signal)" />
            </linearGradient>
          </defs>

          <circle cx={CENTER} cy={CENTER} r={230} fill="url(#hv-glow)" className={styles.glow} />

          <g className={styles.orbitSlow}>
            <circle cx={CENTER} cy={CENTER} r={262} className={styles.orbit} />
            <circle cx={CENTER} cy={CENTER - 262} r={3} className={styles.orbitDot} />
          </g>
          <g className={styles.orbitFast}>
            <circle cx={CENTER} cy={CENTER} r={168} className={styles.orbitDashed} />
            <circle cx={CENTER + 168} cy={CENTER} r={2.5} className={styles.orbitDotSignal} />
          </g>

          {/* Traces + packets */}
          {modules.map((m, i) => (
            <g key={m.label}>
              <path id={`hv-trace-${i}`} d={m.trace} className={styles.traceBase} />
              <path d={m.trace} className={styles.traceFlow} style={cssVars({ '--i': i })} />
              <circle r={3.2} className={styles.packet}>
                <animateMotion
                  dur={`${m.duration}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.35}s`}
                  keyPoints={m.inbound ? '1;0' : '0;1'}
                  keyTimes="0;1"
                  calcMode="linear"
                >
                  <mpath href={`#hv-trace-${i}`} />
                </animateMotion>
              </circle>
            </g>
          ))}

          {/* Core */}
          <CorePins />
          <circle cx={CENTER} cy={CENTER} r={82} className={styles.pulse} />
          <circle
            cx={CENTER}
            cy={CENTER}
            r={82}
            className={styles.pulse}
            style={cssVars({ '--delay': '1.6s' })}
          />
          <rect
            x={CORE_START}
            y={CORE_START}
            width={CORE}
            height={CORE}
            rx={24}
            fill="url(#hv-core)"
            className={styles.core}
          />
          <rect
            x={CORE_START + 14}
            y={CORE_START + 14}
            width={CORE - 28}
            height={CORE - 28}
            rx={14}
            className={styles.coreInner}
          />
          <rect
            x={CENTER - 14}
            y={CENTER - 30}
            width={28}
            height={28}
            rx={7}
            className={styles.coreChip}
          />
          <text x={CENTER} y={CENTER + 20} className={styles.coreLabel}>
            SMR CORE
          </text>
          <text x={CENTER} y={CENTER + 36} className={styles.coreMeta}>
            ● systems online
          </text>

          {modules.map((m, i) => (
            <ModuleNode key={m.label} module={m} index={i} />
          ))}

          <text x={582} y={26} className={styles.annotation} textAnchor="end">
            SYS / ARCH-01
          </text>
          <text x={18} y={590} className={styles.annotation}>
            06 MODULES · 01 CORE
          </text>
        </svg>
      </div>

      {/* Floating panels — HTML for crisp text, offset by pointer parallax. */}
      <div className={styles.codePanel} aria-hidden="true">
        <div className={styles.panelBar}>
          <span />
          <span />
          <span />
          <em>build.ts</em>
        </div>
        <pre className={styles.code}>
          <code>
            <span className={styles.kw}>const</span> app = <span className={styles.kw}>await</span>{' '}
            smr.
            <span className={styles.fn}>build</span>({'{'}
            {'\n  '}platforms: [<span className={styles.str}>&apos;web&apos;</span>,{' '}
            <span className={styles.str}>&apos;mobile&apos;</span>],
            {'\n  '}ai: <span className={styles.kw}>true</span>,{'\n  '}scale:{' '}
            <span className={styles.str}>&apos;global&apos;</span>,{'\n'}
            {'}'});
          </code>
        </pre>
      </div>

      <div className={styles.deployPanel} aria-hidden="true">
        <div className={styles.deployHead}>
          <span className={styles.deployDot} />
          <span>Deploy · production</span>
          <span className={styles.deployOk}>Ready</span>
        </div>
        <div className={styles.bars}>
          {[42, 58, 36, 70, 52, 84, 64, 92, 76, 88].map((h, i) => (
            <span key={i} style={cssVars({ '--h': `${h}%`, '--i': i })} />
          ))}
        </div>
        <div className={styles.deployFoot}>
          <span>p95 latency</span>
          <strong>84 ms</strong>
        </div>
      </div>
    </div>
  );
}
