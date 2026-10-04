'use client';

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';
import { cx } from '@/lib/cx';

interface TabsProps {
  label: string;
  tabs: ReactNode[];
  /** Server-rendered panels — all stay in the DOM (hidden) so content remains crawlable. */
  panels: ReactNode[];
  orientation?: 'horizontal' | 'vertical';
  /** Also activate tabs on pointer hover (fine pointers only). */
  hoverActivate?: boolean;
  classNames: { root?: string; list: string; tab: string; panel: string };
}

/** Accessible tabs following the WAI-ARIA tabs pattern (automatic activation). */
export function Tabs({
  label,
  tabs,
  panels,
  orientation = 'horizontal',
  hoverActivate,
  classNames,
}: TabsProps) {
  const id = useId();
  const [active, setActive] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const select = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const keys: Record<string, () => void> = {
      ArrowDown: () => select(active + 1),
      ArrowRight: () => select(active + 1),
      ArrowUp: () => select(active - 1),
      ArrowLeft: () => select(active - 1),
      Home: () => select(0),
      End: () => select(tabs.length - 1),
    };
    const action = keys[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  return (
    <div className={classNames.root}>
      <div
        role="tablist"
        aria-label={label}
        aria-orientation={orientation}
        className={classNames.list}
      >
        {tabs.map((tab, i) => (
          <button
            key={i}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`${id}-tab-${i}`}
            aria-controls={`${id}-panel-${i}`}
            aria-selected={active === i}
            tabIndex={active === i ? 0 : -1}
            className={classNames.tab}
            onClick={() => setActive(i)}
            onPointerEnter={
              hoverActivate ? (e) => e.pointerType === 'mouse' && setActive(i) : undefined
            }
            onKeyDown={onKeyDown}
          >
            {tab}
          </button>
        ))}
      </div>
      {panels.map((panel, i) => (
        <div
          key={i}
          role="tabpanel"
          id={`${id}-panel-${i}`}
          aria-labelledby={`${id}-tab-${i}`}
          hidden={active !== i}
          tabIndex={0}
          className={cx(classNames.panel)}
        >
          {panel}
        </div>
      ))}
    </div>
  );
}
