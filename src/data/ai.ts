import type { IconName } from '@/components/ui/Icon';

/**
 * AI capabilities and the scripted exchanges shown in the interactive AI console.
 * The console is an illustration — responses are pre-written demo content.
 */
export interface AiCapability {
  id: string;
  name: string;
  icon: IconName;
  summary: string;
  prompt: string;
  steps: string[];
  response: string;
}

export const aiCapabilities: AiCapability[] = [
  {
    id: 'assistant',
    name: 'AI assistants',
    icon: 'sparkles',
    summary: 'Context-aware copilots inside your product.',
    prompt: 'Summarize open escalations for the Northwind account.',
    steps: ['Resolve account context', 'Query ticketing API', 'Rank by severity'],
    response:
      '3 open escalations. Highest priority: invoice sync failing since Tuesday (P1, owner: Finance Ops). Two P3 UI issues are awaiting customer confirmation.',
  },
  {
    id: 'documents',
    name: 'Document intelligence',
    icon: 'document',
    summary: 'Extract, classify and validate unstructured documents.',
    prompt: 'Extract key terms from the uploaded supplier contract.',
    steps: ['Parse 14-page PDF', 'Classify clauses', 'Validate against policy'],
    response:
      'Term: 24 months · Net-45 payment · Auto-renewal with 60-day notice. Flag: liability cap is below your standard policy threshold.',
  },
  {
    id: 'workflows',
    name: 'Automated workflows',
    icon: 'workflow',
    summary: 'Agents that route, enrich and act on requests.',
    prompt: 'Route this new vendor onboarding request.',
    steps: ['Classify request', 'Check compliance rules', 'Create approval task'],
    response:
      'Classified as “Vendor onboarding — EU”. Compliance checklist attached. Approval task created for Procurement with a 2-day SLA.',
  },
  {
    id: 'search',
    name: 'Smart search',
    icon: 'search',
    summary: 'Semantic search across every knowledge source.',
    prompt: 'How do we handle refunds for annual plans?',
    steps: ['Embed query', 'Search 3 knowledge bases', 'Cite sources'],
    response:
      'Annual plans are refundable pro-rata within 30 days of renewal. Source: Billing Policy v4, §2.3 and Support Playbook “Refunds”.',
  },
  {
    id: 'recommendations',
    name: 'Recommendations',
    icon: 'target',
    summary: 'Personalized suggestions from behavioral signals.',
    prompt: 'What should we offer this customer next?',
    steps: ['Load purchase history', 'Score similar cohorts', 'Rank offers'],
    response:
      'Top suggestion: upgrade to the Team plan (match score 0.87). Customers with similar usage adopted it within 3 weeks.',
  },
  {
    id: 'predictive',
    name: 'Predictive analytics',
    icon: 'chart',
    summary: 'Forecast demand, churn and operational risk.',
    prompt: 'Forecast inventory demand for next month.',
    steps: ['Aggregate 18 months of sales', 'Apply seasonality model', 'Estimate ranges'],
    response:
      'Expected demand +12% month-over-month. 4 SKUs are at risk of stockout — recommended re-order quantities have been drafted.',
  },
  {
    id: 'nl-interface',
    name: 'Natural language interfaces',
    icon: 'terminal',
    summary: 'Let users ask questions instead of building queries.',
    prompt: 'Show revenue by region for Q3 compared with Q2.',
    steps: ['Translate to SQL', 'Run read-only query', 'Build chart'],
    response:
      'Q3 revenue grew 9% overall. EMEA +14%, North America +7%, APAC +4%. A comparison chart has been added to your dashboard.',
  },
  {
    id: 'support',
    name: 'AI customer support',
    icon: 'headset',
    summary: 'Resolve common requests instantly, escalate the rest.',
    prompt: 'A customer asks why their order hasn’t shipped.',
    steps: ['Look up order', 'Check carrier status', 'Draft reply'],
    response:
      'Order #48213 is packed and awaiting carrier pickup today. Drafted reply with tracking link — confidence high, no escalation needed.',
  },
];
