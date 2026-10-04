import type { SVGProps } from 'react';

/**
 * Inline stroke icon set (24×24 grid, 1.5px stroke). Inline SVG keeps icons
 * themeable via `currentColor` and avoids an icon-font or library dependency.
 */
const strokeIcons = {
  browser: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
      <path d="M3 8.5h18M6.5 6.25h.01M9 6.25h.01" />
      <path d="M8 13l-2 2 2 2M16 13l2 2-2 2M13 12.5l-2 5" />
    </>
  ),
  mobile: (
    <>
      <rect x="6.5" y="2.5" width="11" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </>
  ),
  desktop: (
    <>
      <rect x="2.5" y="3.5" width="19" height="13" rx="2" />
      <path d="M8 20.5h8M12 16.5v4" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3.5l1.7 4.8 4.8 1.7-4.8 1.7L12 16.5l-1.7-4.8L5.5 10l4.8-1.7z" />
      <path d="M18.5 15.5l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z" />
    </>
  ),
  layers: (
    <>
      <path d="M12 3l9 4.5-9 4.5-9-4.5z" />
      <path d="M3 12l9 4.5 9-4.5M3 16.5L12 21l9-4.5" />
    </>
  ),
  plug: (
    <>
      <path d="M9 3v4M15 3v4M7 7h10v3.5a5 5 0 01-10 0z" />
      <path d="M12 15.5V21" />
    </>
  ),
  cloud: <path d="M7 18.5a4.5 4.5 0 01-.6-8.96A6 6 0 0118 9.5a4.5 4.5 0 01-.5 9z" />,
  refresh: (
    <>
      <path d="M20 11a8 8 0 00-14.3-4.9L4 8" />
      <path d="M4 3.5V8h4.5M4 13a8 8 0 0014.3 4.9L20 16" />
      <path d="M20 20.5V16h-4.5" />
    </>
  ),
  kanban: (
    <>
      <rect x="3" y="3.5" width="18" height="17" rx="2.5" />
      <path d="M8 7.5v5M12 7.5v9M16 7.5v3" />
    </>
  ),
  pulse: <path d="M3 12h4l2.5-6 4 12 2.5-6H21" />,
  bag: (
    <>
      <path d="M5 8h14l-1 12.5H6z" />
      <path d="M9 8V6.5a3 3 0 016 0V8" />
    </>
  ),
  chart: (
    <>
      <path d="M3.5 3.5v17h17" />
      <path d="M7.5 15l4-4.5 3 3 5-6" />
    </>
  ),
  building: (
    <>
      <path d="M4 20.5V5.5l8-3v18M12 8.5l8 3v9M2.5 20.5h19" />
      <path d="M7.5 8h1M7.5 11.5h1M7.5 15h1M15.5 13.5h1M15.5 17h1" />
    </>
  ),
  card: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2.5" />
      <path d="M2.5 9.5h19M6 15h4" />
    </>
  ),
  truck: (
    <>
      <path d="M2.5 6h11v10h-11zM13.5 9.5h4l3 3.5v3h-7" />
      <circle cx="6.5" cy="17.5" r="1.75" />
      <circle cx="17" cy="17.5" r="1.75" />
    </>
  ),
  graduation: (
    <>
      <path d="M2.5 9L12 4.5 21.5 9 12 13.5z" />
      <path d="M6.5 11v4.5c1.5 1.5 3.5 2.25 5.5 2.25s4-.75 5.5-2.25V11M21.5 9v5" />
    </>
  ),
  factory: (
    <>
      <path d="M2.5 20.5V10l5.5 3.5V10l5.5 3.5V6h3l1 6.5h4v8z" />
      <path d="M6.5 17h1M11 17h1M15.5 17h1" />
    </>
  ),
  briefcase: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2.5" />
      <path d="M8.5 7V5.5a2 2 0 012-2h3a2 2 0 012 2V7M2.5 12.5h19" />
    </>
  ),
  rocket: (
    <>
      <path d="M14 4.5c3-1.5 5.5-1 5.5-1s.5 2.5-1 5.5L13 14.5 9.5 11z" />
      <path d="M9.5 11L6 10.5 3.5 13l4 1M13 14.5l.5 3.5-2.5 2.5-1-4M5 19c.5-2 1.5-3 3-3" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3z" />
    </>
  ),
  code: <path d="M8.5 7L3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" />,
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="3" />
      <path d="M4 5.5v13c0 1.66 3.58 3 8 3s8-1.34 8-3v-13M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </>
  ),
  infinity: (
    <path d="M12 12c-1.8-2.4-3.5-3.75-5.25-3.75a3.75 3.75 0 000 7.5C8.5 15.75 10.2 14.4 12 12zm0 0c1.8 2.4 3.5 3.75 5.25 3.75a3.75 3.75 0 000-7.5C15.5 8.25 13.8 9.6 12 12z" />
  ),
  shield: (
    <>
      <path d="M12 2.75l7.5 3v5.5c0 4.75-3.25 8.75-7.5 10-4.25-1.25-7.5-5.25-7.5-10v-5.5z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  gauge: (
    <>
      <path d="M3.5 16a8.5 8.5 0 1117 0" />
      <path d="M12 16l4-5M3.5 16h2M18.5 16h2M12 7.5V9" />
    </>
  ),
  scale: (
    <>
      <path d="M14 3.5h6.5V10M20.5 3.5L13 11" />
      <rect x="3.5" y="13" width="7.5" height="7.5" rx="1.5" />
      <path d="M3.5 9V5a1.5 1.5 0 011.5-1.5h4M20.5 15v4a1.5 1.5 0 01-1.5 1.5h-4" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h16a1 1 0 011 1v10a1 1 0 01-1 1h-9l-5 3.5v-3.5H4a1 1 0 01-1-1v-10a1 1 0 011-1z" />
      <path d="M7.5 10h9M7.5 13h5.5" />
    </>
  ),
  document: (
    <>
      <path d="M14 2.5H6.5a2 2 0 00-2 2v15a2 2 0 002 2h11a2 2 0 002-2V8z" />
      <path d="M14 2.5V8h5.5M8.5 13h7M8.5 16.5h5" />
    </>
  ),
  workflow: (
    <>
      <rect x="2.5" y="3.5" width="7" height="5" rx="1.5" />
      <rect x="14.5" y="15.5" width="7" height="5" rx="1.5" />
      <path d="M6 8.5V12a2 2 0 002 2h8a2 2 0 012 2v-.5" />
      <path d="M14.5 6h7M18 3.5V8.5" />
    </>
  ),
  search: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5l5 5" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  terminal: (
    <>
      <rect x="2.5" y="4" width="19" height="16" rx="2.5" />
      <path d="M6.5 9.5l3 2.5-3 2.5M12 15h5" />
    </>
  ),
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0116 0v2" />
      <rect x="3" y="13.5" width="4" height="6" rx="1.5" />
      <rect x="17" y="13.5" width="4" height="6" rx="1.5" />
      <path d="M19 19.5c0 1-1.5 2-4 2h-2" />
    </>
  ),
  'arrow-right': <path d="M4.5 12h15M13.5 6l6 6-6 6" />,
  'arrow-up-right': <path d="M7 17L17 7M8.5 7H17v8.5" />,
  'arrow-left': <path d="M19.5 12h-15M10.5 6l-6 6 6 6" />,
  menu: <path d="M3.5 8h17M3.5 16h17" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2M12 19.5v2M4.6 4.6L6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" />
    </>
  ),
  moon: <path d="M20 14.5A8.5 8.5 0 019.5 4a8.5 8.5 0 1010.5 10.5z" />,
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  alert: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.5h.01" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="4.5" width="19" height="15" rx="2.5" />
      <path d="M3 6.5l9 6.5 9-6.5" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  'chevron-down': <path d="M6 9l6 6 6-6" />,
} as const;

const brandIcons = {
  linkedin: (
    <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9.75h4V21H3zM9.5 9.75h3.83v1.54h.06c.53-1 1.84-2.05 3.79-2.05 4.05 0 4.8 2.66 4.8 6.13V21h-4v-4.98c0-1.19-.02-2.72-1.66-2.72-1.66 0-1.91 1.3-1.91 2.63V21h-4z" />
  ),
  github: (
    <path d="M12 2.25a9.75 9.75 0 00-3.08 19c.49.09.66-.21.66-.47v-1.66c-2.72.59-3.29-1.31-3.29-1.31-.45-1.13-1.09-1.43-1.09-1.43-.89-.61.07-.6.07-.6.98.07 1.5 1.01 1.5 1.01.87 1.5 2.29 1.07 2.85.82.09-.63.34-1.07.62-1.31-2.17-.25-4.46-1.09-4.46-4.83 0-1.07.38-1.94 1.01-2.62-.1-.25-.44-1.24.1-2.59 0 0 .82-.26 2.68 1a9.3 9.3 0 014.88 0c1.86-1.26 2.68-1 2.68-1 .54 1.35.2 2.34.1 2.59.63.68 1.01 1.55 1.01 2.62 0 3.75-2.29 4.58-4.47 4.82.35.3.67.9.67 1.81v2.68c0 .26.17.57.67.47A9.75 9.75 0 0012 2.25z" />
  ),
  x: (
    <path d="M17.53 3h3.07l-6.7 7.66L21.75 21h-6.17l-4.83-6.32L5.22 21H2.15l7.17-8.2L1.75 3h6.33l4.37 5.77zm-1.08 16.17h1.7L7.17 4.73H5.35z" />
  ),
} as const;

export type IconName = keyof typeof strokeIcons | keyof typeof brandIcons;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'name'> {
  name: IconName;
  size?: number;
  /** Accessible label. Icons without a label are hidden from assistive tech. */
  label?: string;
}

export function Icon({ name, size = 20, label, ...rest }: IconProps) {
  const isBrand = name in brandIcons;
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true as const };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      focusable="false"
      {...(isBrand
        ? { fill: 'currentColor' }
        : {
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 1.5,
            strokeLinecap: 'round' as const,
            strokeLinejoin: 'round' as const,
          })}
      {...a11y}
      {...rest}
    >
      {isBrand
        ? brandIcons[name as keyof typeof brandIcons]
        : strokeIcons[name as keyof typeof strokeIcons]}
    </svg>
  );
}
