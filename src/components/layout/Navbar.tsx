'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { primaryNav } from '@/data/navigation';
import { site } from '@/data/site';
import { ButtonLink } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { cx } from '@/lib/cx';
import { revealDelay } from '@/lib/style';
import { ThemeToggle } from './ThemeToggle';
import styles from './Navbar.module.css';

const SCROLL_COMPACT_THRESHOLD = 24;
const MENU_ID = 'mobile-menu';

/** Section ids on the home page that map to nav links (e.g. "/#services"). */
const sectionIds = primaryNav
  .map((link) => link.href.split('#')[1])
  .filter((id): id is string => Boolean(id));

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_COMPACT_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the nav item for the section currently in view (home page only).
  useEffect(() => {
    if (pathname !== '/') return;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // Track every section currently crossing the middle band; none → no highlight.
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        setActiveSection(sectionIds.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [pathname]);

  // Mobile menu: lock scroll, close on Escape, trap focus.
  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add(styles.locked);
    const menu = menuRef.current;
    menu?.querySelector<HTMLElement>('a, button')?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (event.key !== 'Tab' || !menu) return;
      const focusables = [
        toggleRef.current,
        ...menu.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'),
      ].filter((el): el is HTMLElement => el !== null);
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const desktop = window.matchMedia('(min-width: 960px)');
    const onResize = () => desktop.matches && setOpen(false);

    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onResize);
    return () => {
      document.documentElement.classList.remove(styles.locked);
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onResize);
    };
  }, [open]);

  const isActive = (href: string) => {
    const [path, hash] = href.split('#');
    if (hash) return pathname === '/' && activeSection === hash;
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  return (
    <header
      className={styles.header}
      data-scrolled={scrolled || undefined}
      data-open={open || undefined}
    >
      <div className={cx('container-wide', styles.bar)}>
        <Logo className={styles.logo} />

        <nav aria-label="Primary" className={styles.desktopNav}>
          <ul className={styles.links}>
            {primaryNav.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.link}
                  aria-current={isActive(link.href) ? 'page' : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.actions}>
          <ThemeToggle />
          <ButtonLink
            href="/contact"
            size="sm"
            variant="primary"
            className={styles.cta}
            icon="arrow-right"
          >
            Let&apos;s Talk
          </ButtonLink>
          <button
            ref={toggleRef}
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls={MENU_ID}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={styles.burger} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        id={MENU_ID}
        ref={menuRef}
        className={styles.mobileMenu}
        inert={!open}
        aria-hidden={!open}
      >
        <nav aria-label="Mobile" className={styles.mobileInner}>
          <ul className={styles.mobileLinks}>
            {primaryNav.map((link, i) => (
              <li key={link.href} style={revealDelay(i)}>
                <Link href={link.href} onClick={close} className={styles.mobileLink}>
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                  {link.label}
                  <Icon name="arrow-up-right" size={20} />
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.mobileFooter} style={revealDelay(primaryNav.length)}>
            <ButtonLink
              href="/contact"
              onClick={close}
              variant="accent"
              size="lg"
              block
              icon="arrow-right"
            >
              Start a Project
            </ButtonLink>
            <a href={`mailto:${site.email}`} className={styles.mobileEmail}>
              {site.email}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
