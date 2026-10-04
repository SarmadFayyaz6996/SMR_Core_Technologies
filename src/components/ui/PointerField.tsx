'use client';

import { useEffect, useRef, type ReactNode, type Ref } from 'react';

interface PointerFieldProps {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'section';
  id?: string;
  'aria-labelledby'?: string;
}

/**
 * Exposes the pointer position as CSS variables on the element:
 * `--mx` / `--my` in px (for spotlights) and `--px` / `--py` in −1…1 (for parallax).
 * Disabled for coarse pointers and reduced motion; updates are rAF-throttled.
 */
export function PointerField({ children, className, as: Tag = 'div', ...rest }: PointerFieldProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const allowed = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    if (!allowed.matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        el.style.setProperty('--mx', `${x}px`);
        el.style.setProperty('--my', `${y}px`);
        el.style.setProperty('--px', ((x / rect.width) * 2 - 1).toFixed(3));
        el.style.setProperty('--py', ((y / rect.height) * 2 - 1).toFixed(3));
      });
    };

    el.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
    };
  }, []);

  return (
    <Tag ref={ref as Ref<HTMLDivElement>} className={className} {...rest}>
      {children}
    </Tag>
  );
}
