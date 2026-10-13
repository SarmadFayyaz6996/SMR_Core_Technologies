import type { IconName } from '@/components/ui/Icon';
import type { Dictionary } from '@/i18n/dictionaries/en';

/** Fictional concept products used to illustrate capability. Not client work. */
export type SolutionVisualKind = keyof Dictionary['solutions']['items'];

const solutionData: { visual: SolutionVisualKind; icon: IconName }[] = [
  { visual: 'assistant', icon: 'sparkles' },
  { visual: 'kanban', icon: 'kanban' },
  { visual: 'health', icon: 'pulse' },
  { visual: 'pos', icon: 'bag' },
  { visual: 'property', icon: 'building' },
  { visual: 'analytics', icon: 'chart' },
];

export const getSolutions = (dict: Dictionary) =>
  solutionData.map((s) => ({ ...s, ...dict.solutions.items[s.visual] }));
