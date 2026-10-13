import type { ReactNode } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { LocaleLink } from '@/i18n/LocaleLink';
import { getDictionary, getLocale } from '@/i18n/server';
import { breadcrumbSchema } from '@/lib/seo';
import { cx } from '@/lib/cx';
import styles from './PageHero.module.css';

interface Crumb {
  name: string;
  /** Language-neutral path, e.g. "/work". */
  path: string;
}

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  /** Trail after "Home"; the last item is the current page. */
  breadcrumbs: Crumb[];
  children?: ReactNode;
}

/** Header for secondary pages: breadcrumb trail (+ schema), h1 and lead. */
export async function PageHero({ eyebrow, title, lead, breadcrumbs, children }: PageHeroProps) {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

  return (
    <section className={styles.hero}>
      <div className={cx('grid-bg', styles.grid)} aria-hidden="true" />
      <div className={cx('container-wide', styles.inner)}>
        <nav aria-label={dict.common.breadcrumb}>
          <ol className={styles.crumbs}>
            <li>
              <LocaleLink href="/">{dict.common.home}</LocaleLink>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.path}>
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <LocaleLink href={crumb.path}>{crumb.name}</LocaleLink>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <p className={cx('mono', styles.eyebrow)}>{eyebrow}</p>
        <h1 className={styles.title}>{title}</h1>
        {lead && <p className={styles.lead}>{lead}</p>}
        {children}
      </div>
      <JsonLd data={breadcrumbSchema(locale, dict.common.home, breadcrumbs)} />
    </section>
  );
}
