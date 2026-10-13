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
import { getDictionary, getLocale } from '@/i18n/server';
import { buildMetadata, faqSchema } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);
  return {
    ...buildMetadata({
      locale,
      title: dict.meta.homeTitle,
      description: dict.meta.siteDescription,
      path: '/',
    }),
    // The home page uses the full title without the "| SMR Core Technologies" suffix.
    title: { absolute: dict.meta.homeTitle },
  };
}

export default async function HomePage() {
  const [locale, dict] = await Promise.all([getLocale(), getDictionary()]);

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
      <Faq index="10" />
      <CTASection />
      <JsonLd data={faqSchema(locale, dict.faq.items)} />
    </>
  );
}
