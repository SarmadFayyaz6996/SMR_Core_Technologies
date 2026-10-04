import type { IconName } from '@/components/ui/Icon';

export interface Principle {
  title: string;
  icon: IconName;
  description?: string;
}

/** Engineering principles shown in the credibility strip under the hero. */
export const engineeringPrinciples: Principle[] = [
  { title: 'Modern Architecture', icon: 'layers' },
  { title: 'Security First', icon: 'shield' },
  { title: 'Cloud Ready', icon: 'cloud' },
  { title: 'AI Enabled', icon: 'sparkles' },
  { title: 'Performance Focused', icon: 'gauge' },
  { title: 'Built to Scale', icon: 'scale' },
];

/** "Why SMR" — long-term engineering commitments. */
export const whySmr: Principle[] = [
  {
    title: 'Modern architecture',
    icon: 'layers',
    description: 'Modular, well-bounded systems that are easy to extend and reason about.',
  },
  {
    title: 'Clean, maintainable code',
    icon: 'code',
    description: 'Typed, tested and reviewed — code your future team will thank you for.',
  },
  {
    title: 'Security-first development',
    icon: 'shield',
    description: 'Threat modeling, least privilege and secure defaults from the first commit.',
  },
  {
    title: 'Performance optimization',
    icon: 'gauge',
    description: 'Performance budgets, profiling and caching built into delivery.',
  },
  {
    title: 'Scalable infrastructure',
    icon: 'scale',
    description: 'Infrastructure that grows with demand without growing your bill linearly.',
  },
  {
    title: 'AI-ready architecture',
    icon: 'sparkles',
    description: 'Clean data and APIs that make adding intelligent features straightforward.',
  },
  {
    title: 'Cloud-native capabilities',
    icon: 'cloud',
    description: 'Containers, managed services and automation on Azure and AWS.',
  },
  {
    title: 'Continuous improvement',
    icon: 'refresh',
    description: 'We measure, learn and refine long after launch day.',
  },
  {
    title: 'Transparent communication',
    icon: 'chat',
    description: 'Clear scope, honest estimates and visible progress every week.',
  },
];
