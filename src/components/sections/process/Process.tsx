import { SectionHeader } from '@/components/ui/SectionHeader';
import { getDictionary } from '@/i18n/server';
import { ProcessTimeline } from './ProcessTimeline';

export async function Process() {
  const { process: t } = await getDictionary();

  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container-wide">
        <SectionHeader
          id="process-title"
          index="06"
          eyebrow={t.eyebrow}
          title={t.title}
          lead={t.lead}
        />
        <ProcessTimeline steps={t.steps} outputsLabel={t.outputsLabel} />
      </div>
    </section>
  );
}
