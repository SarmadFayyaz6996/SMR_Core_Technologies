import type { IconName } from '@/components/ui/Icon';
import type { Dictionary } from '@/i18n/dictionaries/en';

type IndustryId = keyof Dictionary['industries']['items'];

/** Sectors we design for. These describe capability, not specific clients. */
const industryData: { id: IndustryId; icon: IconName }[] = [
  { id: 'healthcare', icon: 'pulse' },
  { id: 'fintech', icon: 'card' },
  { id: 'retail', icon: 'bag' },
  { id: 'realEstate', icon: 'building' },
  { id: 'logistics', icon: 'truck' },
  { id: 'education', icon: 'graduation' },
  { id: 'manufacturing', icon: 'factory' },
  { id: 'professional', icon: 'briefcase' },
  { id: 'startups', icon: 'rocket' },
  { id: 'enterprise', icon: 'globe' },
];

export const getIndustries = (dict: Dictionary) =>
  industryData.map((i) => ({ ...i, ...dict.industries.items[i.id] }));

export type Industry = ReturnType<typeof getIndustries>[number];
