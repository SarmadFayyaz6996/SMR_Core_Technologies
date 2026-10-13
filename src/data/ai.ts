import type { IconName } from '@/components/ui/Icon';
import type { Dictionary } from '@/i18n/dictionaries/en';

type CapabilityId = keyof Dictionary['ai']['items'];

/**
 * AI capabilities shown in the interactive console. The console is an
 * illustration — prompts and responses are pre-written demo content.
 */
const capabilityData: { id: CapabilityId; icon: IconName }[] = [
  { id: 'assistant', icon: 'sparkles' },
  { id: 'documents', icon: 'document' },
  { id: 'workflows', icon: 'workflow' },
  { id: 'search', icon: 'search' },
  { id: 'recommendations', icon: 'target' },
  { id: 'predictive', icon: 'chart' },
  { id: 'nl-interface', icon: 'terminal' },
  { id: 'support', icon: 'headset' },
];

export const getAiCapabilities = (dict: Dictionary) =>
  capabilityData.map((c) => ({ ...c, ...dict.ai.items[c.id] }));

export type AiCapability = ReturnType<typeof getAiCapabilities>[number];
