import { SectionHeader } from '@/components/ui/SectionHeader';
import { ProcessTimeline } from './ProcessTimeline';

export function Process() {
  return (
    <section id="process" className="section" aria-labelledby="process-title">
      <div className="container-wide">
        <SectionHeader
          id="process-title"
          index="06"
          eyebrow="Process"
          title="From idea to impact."
          lead="A clear, collaborative delivery process — so you always know what is happening, what comes next and why."
        />
        <ProcessTimeline />
      </div>
    </section>
  );
}
