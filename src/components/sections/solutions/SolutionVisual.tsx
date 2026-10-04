import type { ReactNode } from 'react';
import type { Solution } from '@/data/solutions';
import { cssVars } from '@/lib/style';
import styles from './SolutionVisual.module.css';

/** Small, decorative product vignettes for each concept solution. */
export function SolutionVisual({ visual }: { visual: Solution['visual'] }) {
  return (
    <div className={styles.frame} aria-hidden="true">
      {visuals[visual]}
    </div>
  );
}

const CHART_POINTS = [38, 46, 41, 55, 52, 63, 58, 70, 66, 78, 74, 86];
const chartPath = (() => {
  const step = 400 / (CHART_POINTS.length - 1);
  const line = CHART_POINTS.map((v, i) => `${i === 0 ? 'M' : 'L'}${i * step} ${100 - v}`).join(' ');
  return { line, area: `${line} L400 100 L0 100 Z` };
})();

const visuals: Record<Solution['visual'], ReactNode> = {
  assistant: (
    <div className={styles.chat}>
      <div className={styles.bubbleUser}>Which invoices are overdue this week?</div>
      <div className={styles.bubbleAi}>
        <span className={styles.aiTag}>AI</span>
        <div>
          <p>4 invoices are overdue, totalling $18,420.</p>
          <div className={styles.chips}>
            <span>Send reminders</span>
            <span>View report</span>
          </div>
        </div>
      </div>
      <div className={styles.typing}>
        <span />
        <span />
        <span />
      </div>
    </div>
  ),
  kanban: (
    <div className={styles.kanban}>
      {['To do', 'In progress', 'Done'].map((col, c) => (
        <div key={col} className={styles.column}>
          <span className={styles.colTitle}>{col}</span>
          {Array.from({ length: 3 - (c === 2 ? 1 : 0) }, (_, i) => (
            <span key={i} className={styles.task} data-moving={c === 0 && i === 0 ? '' : undefined}>
              <i style={cssVars({ '--w': `${50 + ((i * 17 + c * 11) % 40)}%` })} />
              <i className={styles.avatar} />
            </span>
          ))}
        </div>
      ))}
    </div>
  ),
  health: (
    <div className={styles.health}>
      <svg viewBox="0 0 200 50" className={styles.ecg} preserveAspectRatio="none">
        <polyline points="0,25 50,25 60,25 68,8 76,42 84,25 120,25 128,18 134,25 200,25" />
      </svg>
      <ul className={styles.slots}>
        {['09:00', '09:30', '10:00', '10:30'].map((t, i) => (
          <li key={t} data-state={['booked', 'checked-in', 'open', 'booked'][i]}>
            <span>{t}</span>
            <i />
          </li>
        ))}
      </ul>
    </div>
  ),
  pos: (
    <div className={styles.pos}>
      {[
        ['Wireless headset', '$89.00'],
        ['USB-C dock', '$129.00'],
        ['Cable kit', '$24.00'],
      ].map(([item, price]) => (
        <div key={item} className={styles.line}>
          <span>{item}</span>
          <span>{price}</span>
        </div>
      ))}
      <div className={styles.total}>
        <span>Total</span>
        <strong>$242.00</strong>
      </div>
      <div className={styles.stock}>
        <span>Stock synced · 3 stores</span>
        <i />
      </div>
    </div>
  ),
  property: (
    <div className={styles.property}>
      {Array.from({ length: 15 }, (_, i) => (
        <span
          key={i}
          data-state={i % 7 === 3 ? 'maintenance' : i % 5 === 1 ? 'vacant' : 'leased'}
        />
      ))}
    </div>
  ),
  analytics: (
    <div className={styles.analytics}>
      <div className={styles.kpis}>
        {[
          ['Revenue', '+12.4%'],
          ['Active users', '+8.1%'],
          ['Churn', '−1.3%'],
        ].map(([label, delta]) => (
          <div key={label} className={styles.kpi}>
            <span>{label}</span>
            <strong>{delta}</strong>
          </div>
        ))}
      </div>
      <svg viewBox="0 0 400 100" preserveAspectRatio="none" className={styles.chart}>
        <defs>
          <linearGradient id="sv-area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={chartPath.area} fill="url(#sv-area)" />
        <path d={chartPath.line} className={styles.chartLine} />
      </svg>
    </div>
  ),
};
