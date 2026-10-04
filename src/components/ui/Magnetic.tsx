'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import styles from './Magnetic.module.css';

interface MagneticProps {
  children: ReactNode;
  /** Fraction of the pointer offset applied as translation. */
  strength?: number;
}

/**
 * Pulls its child gently toward the pointer. Only active for fine pointers and
 * when the visitor has not requested reduced motion.
 */
export function Magnetic({ children, strength = 0.22 }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const allowed = window.matchMedia(
      '(pointer: fine) and (prefers-reduced-motion: no-preference)',
    );
    if (!allowed.matches) return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (event.clientX - (rect.left + rect.width / 2)) * strength;
      const y = (event.clientY - (rect.top + rect.height / 2)) * strength;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = '';
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, [strength]);

  return (
    <span ref={ref} className={styles.magnetic}>
      {children}
    </span>
  );
}
