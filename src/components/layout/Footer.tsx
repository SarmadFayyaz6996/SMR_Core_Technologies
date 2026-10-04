import Link from 'next/link';
import { footerNav, legalNav } from '@/data/navigation';
import { site } from '@/data/site';
import { Icon, type IconName } from '@/components/ui/Icon';
import { LogoMark } from '@/components/ui/Logo';
import { cx } from '@/lib/cx';
import styles from './Footer.module.css';

const socials: { label: string; href: string; icon: IconName }[] = [
  { label: 'LinkedIn', href: site.social.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: site.social.github, icon: 'github' },
  { label: 'X', href: site.social.x, icon: 'x' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={cx('container-wide', styles.inner)}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link href="/" className={styles.brandLink}>
              <LogoMark size={32} />
              <span>{site.name}</span>
            </Link>
            <p className={styles.tagline}>{site.tagline}</p>
            <a href={`mailto:${site.email}`} className={styles.email}>
              <Icon name="mail" size={16} />
              {site.email}
            </a>
          </div>

          <nav aria-label="Footer" className={styles.columns}>
            {footerNav.map((group) => (
              <div key={group.title}>
                <h2 className={cx('mono', styles.colTitle)}>{group.title}</h2>
                <ul className={styles.colLinks}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className={styles.link}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className={styles.legal}>
            {legalNav.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className={styles.socials}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${site.name} on ${s.label}`}
                >
                  <Icon name={s.icon} size={16} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.wordmark} aria-hidden="true">
        SMR CORE
      </div>
    </footer>
  );
}
