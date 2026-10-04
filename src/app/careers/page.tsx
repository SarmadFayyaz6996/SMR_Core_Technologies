import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ButtonLink } from '@/components/ui/Button';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Careers',
  description:
    'Join SMR Core Technologies — engineers, designers and problem-solvers building modern web, mobile, cloud and AI software.',
  path: '/careers',
});

const principles = [
  { title: 'Ownership', text: 'Engineers own problems end to end — from discovery to production.' },
  {
    title: 'Craft',
    text: 'Code review, testing and design quality are part of the job, not extras.',
  },
  { title: 'Growth', text: 'Modern stacks, real architecture decisions and time to learn.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build the software businesses depend on."
        lead="We're always interested in meeting thoughtful engineers and designers who care about craft, clarity and impact."
        breadcrumbs={[{ name: 'Careers', path: '/careers' }]}
      />
      <section className="section section--tight">
        <div className={`container-wide ${styles.layout}`}>
          <ul className={styles.principles}>
            {principles.map((p) => (
              <li key={p.title}>
                <h2>{p.title}</h2>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
          <div className={styles.openings}>
            <h2 className={styles.openingsTitle}>Open roles</h2>
            <p className={styles.empty}>
              There are no open positions listed right now. If you&apos;d like to be considered for
              future roles, send us a short introduction and a link to your work.
            </p>
            <ButtonLink
              href={`mailto:${site.email}?subject=Careers`}
              variant="secondary"
              icon="arrow-right"
            >
              Introduce yourself
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
