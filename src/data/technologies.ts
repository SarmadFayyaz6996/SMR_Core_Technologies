import type { IconName } from '@/components/ui/Icon';

export interface Technology {
  name: string;
  /** Two-character "element" symbol used by the periodic-table tiles. */
  symbol: string;
  note: string;
}

export interface TechLayer {
  id: string;
  name: string;
  icon: IconName;
  description: string;
  technologies: Technology[];
}

/** Ordered top (user-facing) to bottom (infrastructure) — rendered as a stack. */
export const techLayers: TechLayer[] = [
  {
    id: 'ai',
    name: 'AI',
    icon: 'sparkles',
    description: 'Language models, retrieval and machine learning APIs woven into product logic.',
    technologies: [
      { name: 'OpenAI', symbol: 'Oa', note: 'GPT models & embeddings' },
      { name: 'Azure OpenAI', symbol: 'Ao', note: 'Enterprise-grade LLM hosting' },
      { name: 'Machine Learning APIs', symbol: 'Ml', note: 'Vision, speech & prediction' },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    icon: 'browser',
    description: 'Fast, accessible interfaces with component architecture and strong typing.',
    technologies: [
      { name: 'Angular', symbol: 'Ng', note: 'Structured enterprise SPAs' },
      { name: 'React', symbol: 'Re', note: 'Composable UI at any scale' },
      { name: 'Next.js', symbol: 'Nx', note: 'Server rendering & edge delivery' },
    ],
  },
  {
    id: 'backend',
    name: 'Backend',
    icon: 'code',
    description: 'Secure, well-tested services and APIs designed for long-term change.',
    technologies: [
      { name: 'ASP.NET Core', symbol: 'As', note: 'High-throughput APIs & services' },
      { name: 'Node.js', symbol: 'Nd', note: 'Real-time & event-driven services' },
      { name: 'Python', symbol: 'Py', note: 'Data pipelines & AI workloads' },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    icon: 'database',
    description: 'Relational and document data models tuned for integrity and performance.',
    technologies: [
      { name: 'SQL Server', symbol: 'Sq', note: 'Transactional enterprise data' },
      { name: 'PostgreSQL', symbol: 'Pg', note: 'Relational + JSON + vectors' },
      { name: 'MySQL', symbol: 'My', note: 'Proven web-scale storage' },
      { name: 'MongoDB', symbol: 'Mg', note: 'Flexible document models' },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: 'cloud',
    description: 'Cloud-native architecture with security, scaling and cost in mind.',
    technologies: [
      { name: 'Microsoft Azure', symbol: 'Az', note: 'App Service, AKS, Functions' },
      { name: 'AWS', symbol: 'Aw', note: 'ECS, Lambda, RDS' },
    ],
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: 'infinity',
    description: 'Automated pipelines, containers and observability for confident releases.',
    technologies: [
      { name: 'Docker', symbol: 'Dk', note: 'Reproducible containers' },
      { name: 'Kubernetes', symbol: 'K8', note: 'Orchestration at scale' },
      { name: 'Azure DevOps', symbol: 'Ad', note: 'Boards, repos & pipelines' },
      { name: 'GitHub Actions', symbol: 'Gh', note: 'CI/CD as code' },
    ],
  },
];

/** Flat list for the "technology we work with" strip. */
export const featuredTechnologies = [
  'Angular',
  'React',
  '.NET',
  'ASP.NET Core',
  'Node.js',
  'Python',
  'Azure',
  'AWS',
  'Docker',
  'Kubernetes',
  'SQL Server',
  'PostgreSQL',
];
