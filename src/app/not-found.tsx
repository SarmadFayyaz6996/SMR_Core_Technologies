import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ui/Button';
import { LogoMark } from '@/components/ui/Logo';
import styles from './not-found.module.css';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`container ${styles.inner}`}>
        <LogoMark size={56} className={styles.mark} />
        <p className="mono">Error 404</p>
        <h1 className={styles.title}>This page has moved — or never existed.</h1>
        <p className={styles.text}>The link may be outdated. Let&apos;s get you back on track.</p>
        <div className={styles.actions}>
          <ButtonLink href="/" variant="primary" icon="arrow-right">
            Back to home
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
