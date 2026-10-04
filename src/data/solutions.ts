import type { IconName } from '@/components/ui/Icon';

/** Fictional concept products used to illustrate capability. Not client work. */
export interface Solution {
  title: string;
  icon: IconName;
  description: string;
  capabilities: string[];
  /** Visual treatment used by the bento card's mini illustration. */
  visual: 'assistant' | 'kanban' | 'health' | 'pos' | 'property' | 'analytics';
}

export const solutions: Solution[] = [
  {
    title: 'AI Business Assistant',
    icon: 'sparkles',
    description: 'AI-powered business assistant integrated into enterprise workflows.',
    capabilities: ['Natural language queries', 'Document Q&A', 'Action automation'],
    visual: 'assistant',
  },
  {
    title: 'Smart Project Management',
    icon: 'kanban',
    description: 'Project management platform with real-time collaboration.',
    capabilities: ['Live boards', 'Resource planning', 'Time tracking'],
    visual: 'kanban',
  },
  {
    title: 'Healthcare Management Platform',
    icon: 'pulse',
    description: 'Modern healthcare workflow and patient management platform.',
    capabilities: ['Scheduling', 'Patient records', 'Billing workflows'],
    visual: 'health',
  },
  {
    title: 'Retail POS & Inventory',
    icon: 'bag',
    description: 'Cloud-based POS and inventory management platform.',
    capabilities: ['Multi-store stock', 'Offline checkout', 'Supplier orders'],
    visual: 'pos',
  },
  {
    title: 'Property Management Platform',
    icon: 'building',
    description: 'Property, tenant, payment and maintenance management.',
    capabilities: ['Tenant portal', 'Rent collection', 'Maintenance tickets'],
    visual: 'property',
  },
  {
    title: 'Business Intelligence Dashboard',
    icon: 'chart',
    description: 'Real-time analytics and KPI visualization.',
    capabilities: ['Live KPIs', 'Custom reports', 'Forecasting'],
    visual: 'analytics',
  },
];
