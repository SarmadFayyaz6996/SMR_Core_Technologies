import type { ReactNode } from 'react';
import type { MockVariant } from '@/data/projects';
import { Icon, type IconName } from '@/components/ui/Icon';
import { cssVars } from '@/lib/style';
import styles from './ProductMock.module.css';

interface ProductMockProps {
  variant: MockVariant;
  name: string;
}

const SIDEBAR_ICONS: IconName[] = ['layers', 'workflow', 'chart', 'document', 'shield'];

/**
 * Illustrative product UI rendered in HTML/CSS (no raster screenshots): crisp at
 * any density, themeable, and a fraction of the bytes of an image.
 */
export function ProductMock({ variant, name }: ProductMockProps) {
  const slug = name.toLowerCase().replace(/\s+/g, '');
  return (
    <figure
      className={styles.window}
      aria-label={`Illustrative interface of the ${name} concept product`}
    >
      <div className={styles.chrome} aria-hidden="true">
        <span className={styles.dots}>
          <i />
          <i />
          <i />
        </span>
        <span className={styles.url}>app.{slug}.demo</span>
      </div>
      <div className={styles.app} aria-hidden="true">
        <nav className={styles.sidebar}>
          <span className={styles.brandDot} />
          {SIDEBAR_ICONS.map((icon, i) => (
            <span key={icon} className={styles.navItem} data-active={i === 1 || undefined}>
              <Icon name={icon} size={14} />
            </span>
          ))}
        </nav>
        <div className={styles.main}>{bodies[variant]}</div>
      </div>
    </figure>
  );
}

const Pill = ({
  tone,
  children,
}: {
  tone: 'accent' | 'signal' | 'success' | 'muted';
  children: ReactNode;
}) => (
  <span className={styles.pill} data-tone={tone}>
    {children}
  </span>
);

const bodies: Record<MockVariant, ReactNode> = {
  workflow: (
    <>
      <header className={styles.head}>
        <strong>Automations</strong>
        <Pill tone="success">12 running</Pill>
      </header>
      <div className={styles.flow}>
        {['Request in', 'AI classify', 'Route', 'Approve'].map((step, i) => (
          <span key={step} className={styles.flowStep} style={cssVars({ '--i': i })}>
            {step}
          </span>
        ))}
      </div>
      <ul className={styles.rows}>
        {[
          ['Vendor onboarding — EU', 'AI routed', 'accent'],
          ['Invoice dispute #2291', 'Awaiting approval', 'signal'],
          ['Access request — Finance', 'Completed', 'success'],
          ['Contract renewal Q4', 'AI routed', 'accent'],
        ].map(([title, status, tone]) => (
          <li key={title}>
            <span className={styles.rowTitle}>{title}</span>
            <Pill tone={tone as 'accent'}>{status}</Pill>
          </li>
        ))}
      </ul>
    </>
  ),
  clinical: (
    <>
      <header className={styles.head}>
        <strong>Today · Clinic North</strong>
        <Pill tone="accent">28 appointments</Pill>
      </header>
      <div className={styles.calendar}>
        {['Dr. Ahmed', 'Dr. Patel', 'Dr. Lewis'].map((doc, c) => (
          <div key={doc} className={styles.calCol}>
            <span className={styles.calHead}>{doc}</span>
            {[0, 1, 2].map((slot) => (
              <span
                key={slot}
                className={styles.appt}
                data-tone={(c + slot) % 3 === 0 ? 'signal' : 'accent'}
                style={cssVars({
                  '--top': `${slot * 30 + c * 8}%`,
                  '--h': `${18 + ((c + slot) % 2) * 8}%`,
                })}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  ),
  commerce: (
    <>
      <header className={styles.head}>
        <strong>Inventory · All stores</strong>
        <Pill tone="success">Synced</Pill>
      </header>
      <div className={styles.kpis}>
        {[
          ['Sales today', '$24.8k'],
          ['Orders', '612'],
          ['Low stock', '4'],
        ].map(([label, value]) => (
          <div key={label} className={styles.kpi}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
      <ul className={styles.rows}>
        {[
          ['SKU-1042 Headset', 82],
          ['SKU-2210 Dock', 46],
          ['SKU-0871 Cable kit', 14],
        ].map(([sku, level]) => (
          <li key={sku}>
            <span className={styles.rowTitle}>{sku}</span>
            <span
              className={styles.meter}
              style={cssVars({ '--v': `${level}%` })}
              data-low={Number(level) < 20 || undefined}
            />
          </li>
        ))}
      </ul>
    </>
  ),
  analytics: (
    <>
      <header className={styles.head}>
        <strong>Migration progress</strong>
        <Pill tone="signal">7 / 12 domains</Pill>
      </header>
      <div className={styles.progress}>
        <span style={cssVars({ '--v': '58%' })} />
      </div>
      <div className={styles.barsChart}>
        {[34, 48, 42, 61, 55, 72, 68, 84].map((h, i) => (
          <span key={i} style={cssVars({ '--h': `${h}%` })} data-new={i > 4 || undefined} />
        ))}
      </div>
      <div className={styles.legend}>
        <span data-tone="muted">Legacy</span>
        <span data-tone="accent">Modern platform</span>
      </div>
    </>
  ),
};
