import type { IconName } from '@/components/ui/Icon';

export interface Industry {
  name: string;
  icon: IconName;
  focus: string;
}

/** Sectors we design for. These describe capability, not specific clients. */
export const industries: Industry[] = [
  { name: 'Healthcare', icon: 'pulse', focus: 'Patient workflows, scheduling and compliant data.' },
  { name: 'FinTech', icon: 'card', focus: 'Secure payments, ledgers and real-time reporting.' },
  { name: 'Retail', icon: 'bag', focus: 'POS, inventory and omnichannel commerce.' },
  { name: 'Real Estate', icon: 'building', focus: 'Property, tenant and lease management.' },
  { name: 'Logistics', icon: 'truck', focus: 'Fleet tracking, routing and warehouse systems.' },
  { name: 'Education', icon: 'graduation', focus: 'Learning platforms and student management.' },
  { name: 'Manufacturing', icon: 'factory', focus: 'Production planning and shop-floor data.' },
  {
    name: 'Professional Services',
    icon: 'briefcase',
    focus: 'Client portals, billing and resource planning.',
  },
  { name: 'Startups', icon: 'rocket', focus: 'MVPs that are built to become products.' },
  { name: 'Enterprise', icon: 'globe', focus: 'Modernization and integration at scale.' },
];
