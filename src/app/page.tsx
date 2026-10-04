import type { Metadata } from 'next';
import { Hero } from '@/components/sections/hero/Hero';
import { Principles } from '@/components/sections/Principles';
import { Services } from '@/components/sections/Services';
import { Solutions } from '@/components/sections/solutions/Solutions';
import { CaseStudies } from '@/components/case-studies/CaseStudies';
import { AISection } from '@/components/sections/ai/AISection';
import { TechnologySection } from '@/components/sections/technology/TechnologySection';
import { Process } from '@/components/sections/process/Process';
import { WhySmr } from '@/components/sections/WhySmr';
import { Industries } from '@/components/sections/Industries';
import { About } from '@/components/sections/About';
import { Faq } from '@/components/sections/Faq';
import { CTASection } from '@/components/sections/CTASection';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqs } from '@/data/faq';
import { site } from '@/data/site';
import { buildMetadata, faqSchema } from '@/lib/seo';

export const metadata: Metadata = {
  ...buildMetadata({
    title: `${site.name} — Custom Software Development Company`,
    description: site.description,
    path: '/',
  }),
  // The home page uses the full title without the "| SMR Core Technologies" template suffix.
  title: { absolute: `${site.name} — Custom Software Development Company` },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Principles />
      <Services />
      <Solutions />
      <CaseStudies />
      <AISection />
      <TechnologySection />
      <Process />
      <WhySmr />
      <Industries />
      <About />
      <Faq items={faqs} index="10" />
      <CTASection />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
