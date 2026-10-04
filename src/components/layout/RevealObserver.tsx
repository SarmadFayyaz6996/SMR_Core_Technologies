'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * One shared IntersectionObserver for every `[data-reveal]` element, instead of
 * a client component per animated element. Re-scans on route changes.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const pending = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-revealed])');
    if (!('IntersectionObserver' in window)) {
      pending.forEach((el) => el.setAttribute('data-revealed', ''));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-revealed', '');
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    );

    pending.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
