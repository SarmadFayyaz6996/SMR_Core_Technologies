import Link from 'next/link';
import type { ReactNode } from 'react';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/seo';
import { cx } from '@/lib/cx';
import styles from './PageHero.module.css';

interface Crumb {
  name: string;
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
export function PageHero({ eyebrow, title, lead, breadcrumbs, children }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={cx('grid-bg', styles.grid)} aria-hidden="true" />
      <div className={cx('container-wide', styles.inner)}>
        <nav aria-label="Breadcrumb">
          <ol className={styles.crumbs}>
            <li>
              <Link href="/">Home</Link>
            </li>
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.path}>
                {i === breadcrumbs.length - 1 ? (
                  <span aria-current="page">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path}>{crumb.name}</Link>
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
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
    </section>
  );
}
