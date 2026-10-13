import { getIndustries } from '@/data/industries';
import { IndustryCard } from '@/components/cards/IndustryCard';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { getDictionary } from '@/i18n/server';
import styles from './Industries.module.css';

export async function Industries() {
  const dict = await getDictionary();
  const t = dict.industries;

  return (
    <section id="industries" className="section" aria-labelledby="industries-title">
      <div className="container-wide">
        <SectionHeader
          id="industries-title"
          index="08"
          eyebrow={t.eyebrow}
          align="split"
          title={t.title}
          lead={t.lead}
        />
        <ul className={styles.grid}>
          {getIndustries(dict).map((industry, i) => (
            <IndustryCard key={industry.id} industry={industry} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
