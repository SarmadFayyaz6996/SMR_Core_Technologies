import type { IconName } from '@/components/ui/Icon';
import type { Dictionary } from '@/i18n/dictionaries/en';

type PrincipleId = keyof Dictionary['principles']['items'];
type WhyId = keyof Dictionary['why']['items'];

/** Engineering principles shown in the credibility strip under the hero. */
const principleData: { id: PrincipleId; icon: IconName }[] = [
  { id: 'architecture', icon: 'layers' },
  { id: 'security', icon: 'shield' },
  { id: 'cloud', icon: 'cloud' },
  { id: 'ai', icon: 'sparkles' },
  { id: 'performance', icon: 'gauge' },
  { id: 'scale', icon: 'scale' },
];

/** "Why SMR" — long-term engineering commitments. */
const whyData: { id: WhyId; icon: IconName }[] = [
  { id: 'architecture', icon: 'layers' },
  { id: 'code', icon: 'code' },
  { id: 'security', icon: 'shield' },
  { id: 'performance', icon: 'gauge' },
  { id: 'scale', icon: 'scale' },
  { id: 'ai', icon: 'sparkles' },
  { id: 'cloud', icon: 'cloud' },
  { id: 'improvement', icon: 'refresh' },
  { id: 'communication', icon: 'chat' },
];

export const getEngineeringPrinciples = (dict: Dictionary) =>
  principleData.map((p) => ({ ...p, title: dict.principles.items[p.id] }));

export const getWhySmr = (dict: Dictionary) =>
  whyData.map((w) => ({ ...w, ...dict.why.items[w.id] }));
