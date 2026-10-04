/**
 * Demo case studies. Every project, problem statement and metric below is a
 * fictional concept created to illustrate SMR's approach — not client work.
 */
export interface Metric {
  value: string;
  label: string;
}

export interface ArchitectureTier {
  label: string;
  nodes: string[];
}

export type MockVariant = 'workflow' | 'clinical' | 'commerce' | 'analytics';

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  metrics: Metric[];
  architecture: ArchitectureTier[];
  mock: MockVariant;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'novaflow',
    name: 'NovaFlow',
    tagline: 'AI-powered workflow automation platform.',
    category: 'AI · Workflow Automation',
    problem:
      'Operations teams were spending hours every day on repetitive tasks — triaging requests, re-keying data between systems and chasing approvals.',
    solution:
      'A centralized workflow automation platform with AI-powered task processing: incoming requests are classified, enriched and routed automatically, with humans approving only the exceptions.',
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure', 'OpenAI API', 'Docker'],
    metrics: [
      { value: '68%', label: 'less manual processing time' },
      { value: '4.2×', label: 'faster request turnaround' },
      { value: '92%', label: 'of requests auto-routed' },
    ],
    architecture: [
      { label: 'Client', nodes: ['Angular workspace', 'Approvals inbox'] },
      { label: 'Platform', nodes: ['ASP.NET Core API', 'Workflow engine', 'AI task processor'] },
      { label: 'Data & AI', nodes: ['SQL Server', 'Azure OpenAI', 'Blob storage'] },
    ],
    mock: 'workflow',
  },
  {
    slug: 'medicore',
    name: 'MediCore',
    tagline: 'Clinic operations and patient management platform.',
    category: 'Healthcare · Operations',
    problem:
      'Multi-location clinics juggled disconnected scheduling tools, paper intake forms and delayed billing, creating long waits and revenue leakage.',
    solution:
      'A unified platform for scheduling, digital intake, patient records and billing workflows — with role-based access and audit trails designed around healthcare compliance.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'FHIR APIs', 'Docker'],
    metrics: [
      { value: '37%', label: 'fewer missed appointments' },
      { value: '3 min', label: 'average digital intake' },
      { value: '2×', label: 'faster claim submission' },
    ],
    architecture: [
      { label: 'Client', nodes: ['Staff web app', 'Patient portal'] },
      { label: 'Platform', nodes: ['Node.js services', 'Scheduling engine', 'Billing service'] },
      { label: 'Data', nodes: ['PostgreSQL', 'FHIR gateway', 'Audit log'] },
    ],
    mock: 'clinical',
  },
  {
    slug: 'stockline',
    name: 'Stockline',
    tagline: 'Cloud POS and inventory for multi-store retail.',
    category: 'Retail · Commerce',
    problem:
      'A growing retail chain had no real-time view of stock across stores, leading to stockouts, over-ordering and checkout downtime during network outages.',
    solution:
      'An offline-capable POS with real-time inventory sync, automated supplier re-ordering and a central dashboard for every location.',
    technologies: ['Next.js', 'ASP.NET Core', 'PostgreSQL', 'Azure', 'Redis', 'Flutter'],
    metrics: [
      { value: '24%', label: 'reduction in stockouts' },
      { value: '0', label: 'checkouts lost to outages' },
      { value: '< 2s', label: 'store-to-cloud stock sync' },
    ],
    architecture: [
      { label: 'Client', nodes: ['POS terminal', 'Manager dashboard'] },
      { label: 'Platform', nodes: ['Sync service', 'Inventory API', 'Re-order engine'] },
      { label: 'Data', nodes: ['PostgreSQL', 'Redis cache', 'Event stream'] },
    ],
    mock: 'commerce',
  },
  {
    slug: 'atlas-modernization',
    name: 'Atlas',
    tagline: 'Legacy ERP modernization to a cloud-native platform.',
    category: 'Modernization · Enterprise',
    problem:
      'A 15-year-old desktop ERP had become slow, hard to change and impossible to access remotely — but the business depended on it every day.',
    solution:
      'An incremental strangler-pattern migration to a modular .NET and Angular platform on Azure, moving one domain at a time with zero planned downtime.',
    technologies: ['.NET 8', 'Angular', 'SQL Server', 'Azure', 'Kubernetes', 'Azure DevOps'],
    metrics: [
      { value: '60%', label: 'faster report generation' },
      { value: '0 h', label: 'planned downtime' },
      { value: '5×', label: 'more frequent releases' },
    ],
    architecture: [
      { label: 'Client', nodes: ['Angular shell', 'Legacy bridge'] },
      { label: 'Platform', nodes: ['Domain services', 'API gateway', 'Background jobs'] },
      { label: 'Infra', nodes: ['SQL Server', 'AKS cluster', 'CI/CD pipelines'] },
    ],
    mock: 'analytics',
  },
];
