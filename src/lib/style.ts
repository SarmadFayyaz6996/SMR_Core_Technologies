import type { CSSProperties } from 'react';

/** Typed helper for passing CSS custom properties through `style`. */
export const cssVars = (vars: Record<`--${string}`, string | number>) => vars as CSSProperties;

/** Stagger index for `[data-reveal]` elements (each step = 70ms). */
export const revealDelay = (step: number) => cssVars({ '--reveal-delay': step });
