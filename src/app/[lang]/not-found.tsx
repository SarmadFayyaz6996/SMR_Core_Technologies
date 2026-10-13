import type { Metadata } from 'next';
import { ButtonLink } from '@/components/ui/Button';
import { LogoMark } from '@/components/ui/Logo';
import { getDictionary } from '@/i18n/server';
import styles from './not-found.module.css';

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary();
  return { title: dict.meta.notFoundTitle, robots: { index: false } };
}

export default async function NotFound() {
  const { notFound: t } = await getDictionary();

  return (
    <section className={`section ${styles.wrap}`}>
      <div className={`container ${styles.inner}`}>
        <LogoMark size={56} className={styles.mark} />
        <p className="mono">{t.code}</p>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.text}>{t.text}</p>
        <div className={styles.actions}>
          <ButtonLink href="/" variant="primary" icon="arrow-right">
            {t.home}
          </ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            {t.contact}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
