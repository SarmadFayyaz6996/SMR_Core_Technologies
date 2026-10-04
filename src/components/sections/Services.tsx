import { services } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './Services.module.css';

export function Services() {
  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container-wide">
        <SectionHeader
          id="services-title"
          index="01"
          eyebrow="Services"
          align="split"
          title="Technology that solves real business problems."
          lead="End-to-end software engineering — from first prototype to production systems built to scale."
        />
        <ul className={styles.grid}>
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
