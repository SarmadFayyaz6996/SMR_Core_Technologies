import { getFooterNav, getLegalNav } from '@/data/navigation';
import { site } from '@/data/site';
import { Icon, type IconName } from '@/components/ui/Icon';
import { LogoMark } from '@/components/ui/Logo';
import { format } from '@/i18n/format';
import { LocaleLink } from '@/i18n/LocaleLink';
import { getDictionary } from '@/i18n/server';
import { cx } from '@/lib/cx';
import styles from './Footer.module.css';

/** Only profiles that exist are shown (see `site.social`). */
const socials = (
  [
    { label: 'LinkedIn', href: site.social.linkedin, icon: 'linkedin' },
    { label: 'GitHub', href: site.social.github, icon: 'github' },
    { label: 'X', href: site.social.x, icon: 'x' },
  ] satisfies { label: string; href: string; icon: IconName }[]
).filter((s) => s.href);

export async function Footer() {
  const dict = await getDictionary();
  const t = dict.footer;
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={cx('container-wide', styles.inner)}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <LocaleLink href="/" className={styles.brandLink}>
              <LogoMark size={32} />
              <span>{site.name}</span>
            </LocaleLink>
            <p className={styles.tagline}>{dict.common.tagline}</p>
            <a href={`mailto:${site.email}`} className={styles.email}>
              <Icon name="mail" size={16} />
              {site.email}
            </a>
          </div>

          <nav aria-label={t.navLabel} className={styles.columns}>
            {getFooterNav(dict).map((group) => (
              <div key={group.title}>
                <h2 className={cx('mono', styles.colTitle)}>{group.title}</h2>
                <ul className={styles.colLinks}>
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <LocaleLink href={link.href} className={styles.link}>
                        {link.label}
                      </LocaleLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>{format(t.rights, { year, name: site.name })}</p>
          <ul className={styles.legal}>
            {getLegalNav(dict).map((link) => (
              <li key={link.href}>
                <LocaleLink href={link.href} className={styles.link}>
                  {link.label}
                </LocaleLink>
              </li>
            ))}
          </ul>
          <ul className={styles.socials} hidden={socials.length === 0}>
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={format(t.socialOn, { name: site.name, network: s.label })}
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
