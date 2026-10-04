import { industries } from '@/data/industries';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import styles from './Industries.module.css';

export function Industries() {
  return (
    <section id="industries" className="section" aria-labelledby="industries-title">
      <div className="container-wide">
        <SectionHeader
          id="industries-title"
          index="08"
          eyebrow="Industries"
          align="split"
          title="Software for every kind of ambition."
          lead="Domain-aware engineering for regulated, high-volume and fast-moving industries — from first MVP to enterprise scale."
        />
        <ul className={styles.grid}>
          {industries.map((industry, i) => (
            <IndustryCard key={industry.name} industry={industry} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
