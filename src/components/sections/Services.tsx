import { getServices } from '@/data/services';
import { ServiceCard } from '@/components/cards/ServiceCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getDictionary } from '@/i18n/server';
import styles from './Services.module.css';

export async function Services() {
  const dict = await getDictionary();
  const t = dict.services;

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container-wide">
        <SectionHeader
          id="services-title"
          index="01"
          eyebrow={t.eyebrow}
          align="split"
          title={t.title}
          lead={t.lead}
        />
        <ul className={styles.grid}>
          {getServices(dict).map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              index={i}
              learnMore={dict.common.learnMore}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
