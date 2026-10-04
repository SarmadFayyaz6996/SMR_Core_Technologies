'use client';

import { useEffect, useRef, useState } from 'react';
import { processSteps } from '@/data/process';
import { cx } from '@/lib/cx';
import { cssVars } from '@/lib/style';
import styles from './ProcessTimeline.module.css';

/** Viewport line (fraction of height) that a step must cross to become active. */
const ACTIVATION_LINE = 0.55;

/**
 * Scroll-driven timeline: progress is written straight to a CSS variable (no
 * re-render per frame); React state only changes when the active step changes.
 */
export function ProcessTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const list = listRef.current;
    const root = rootRef.current;
    if (!list || !root) return;
    const items = Array.from(list.querySelectorAll<HTMLElement>('[data-step]'));
    let frame = 0;

    const update = () => {
      frame = 0;
      const line = window.innerHeight * ACTIVATION_LINE;
      const rect = list.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (line - rect.top) / rect.height));
      root.style.setProperty('--progress', progress.toFixed(4));

      let current = 0;
      items.forEach((item, i) => {
        if (item.getBoundingClientRect().top < line) current = i;
      });
      setActive(current);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    frame = requestAnimationFrame(update);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={rootRef} className={styles.timeline}>
      <aside className={styles.sticky} aria-hidden="true">
        <div className={styles.counter}>
          <span className={styles.digits} style={cssVars({ '--active': active })}>
            {processSteps.map((_, i) => (
              <span key={i} style={cssVars({ '--o': i })}>
                {String(i + 1).padStart(2, '0')}
              </span>
            ))}
          </span>
          <span className={styles.total}>/ {String(processSteps.length).padStart(2, '0')}</span>
        </div>
        <p className={styles.currentName}>{processSteps[active].title}</p>
        <div className={styles.bar}>
          <span />
        </div>
      </aside>

      <ol ref={listRef} className={styles.steps}>
        {processSteps.map((step, i) => (
          <li
            key={step.title}
            data-step
            className={cx(
              styles.step,
              i <= active && styles.reached,
              i === active && styles.current,
            )}
            aria-current={i === active ? 'step' : undefined}
          >
            <span className={cx('mono', styles.index)}>{String(i + 1).padStart(2, '0')}</span>
            <div className={styles.body}>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
              <ul className={styles.outputs} aria-label={`${step.title} outputs`}>
                {step.outputs.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
