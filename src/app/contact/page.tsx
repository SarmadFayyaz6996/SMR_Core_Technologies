import type { Metadata } from 'next';
import { PageHero } from '@/components/layout/PageHero';
import { ContactForm } from '@/components/contact/ContactForm';
import { Icon } from '@/components/ui/Icon';
import { projectTypes } from '@/data/projectOptions';
import { site } from '@/data/site';
import { buildMetadata } from '@/lib/seo';
import styles from './page.module.css';

export const metadata: Metadata = buildMetadata({
  title: 'Contact — Start a Software Project',
  description:
    'Tell us about your web, mobile, AI or SaaS project. SMR Core Technologies will review your goals and reply with next steps and a transparent estimate.',
  path: '/contact',
});

const EXPERT_MESSAGE = "I'd like to talk to an expert about ";

const steps = [
  { title: 'Share your idea', text: 'Tell us about your goals, users and timeline.' },
  { title: 'Discovery call', text: 'A 30-minute conversation with a senior engineer.' },
  { title: 'Clear proposal', text: 'Scope, architecture, timeline and a transparent estimate.' },
];

interface ContactPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const type = typeof params.type === 'string' ? params.type : '';
  const initial = {
    projectType: projectTypes.some((p) => p.value === type) ? type : '',
    message: params.topic === 'expert' ? EXPERT_MESSAGE : '',
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something that moves you forward."
        lead="Tell us what you're working on. We'll get back to you with thoughtful questions, honest advice and clear next steps."
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />
      <section className="section section--tight">
        <div className={`container-wide ${styles.layout}`}>
          <aside className={styles.aside}>
            <h2 className={styles.asideTitle}>What happens next</h2>
            <ol className={styles.steps}>
              {steps.map((step, i) => (
                <li key={step.title}>
                  <span className="mono">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className={styles.direct}>
              <p className="mono">Prefer email?</p>
              <a href={`mailto:${site.email}`} className={styles.email}>
                <Icon name="mail" size={18} />
                {site.email}
              </a>
            </div>
          </aside>
          <div className={styles.formCard}>
            <ContactForm initial={initial} />
          </div>
        </div>
      </section>
    </>
  );
}
