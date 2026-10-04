import type { IconName } from '@/components/ui/Icon';
import type { ProjectType } from './projectOptions';

export interface Service {
  slug: string;
  title: string;
  icon: IconName;
  summary: string;
  description: string;
  deliverables: string[];
  technologies: string[];
  /** Pre-selects the contact form's project type when starting from this service. */
  projectType: ProjectType;
}

export const services: Service[] = [
  {
    slug: 'web-application-development',
    title: 'Web Application Development',
    icon: 'browser',
    summary: 'High-performance web applications built around your business needs.',
    description:
      'From customer portals to complex internal platforms, we engineer web applications that are fast, accessible and built to grow — with clean architecture your team can maintain for years.',
    deliverables: [
      'Product discovery and technical architecture',
      'Responsive, accessible interfaces',
      'Secure, well-documented APIs',
      'Performance budgets and Core Web Vitals tuning',
      'Automated testing and CI/CD from day one',
    ],
    technologies: ['Angular', 'React', 'Next.js', 'ASP.NET Core', 'Node.js', 'PostgreSQL'],
    projectType: 'web-application',
  },
  {
    slug: 'mobile-application-development',
    title: 'Mobile Application Development',
    icon: 'mobile',
    summary: 'Modern mobile experiences for iOS and Android.',
    description:
      'We design and build mobile apps that feel native, work offline when they need to and integrate cleanly with your existing systems and APIs.',
    deliverables: [
      'Cross-platform and native app strategy',
      'Offline-first data and sync',
      'Push notifications and deep linking',
      'App Store and Google Play release management',
      'Crash reporting and product analytics',
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    projectType: 'mobile-application',
  },
  {
    slug: 'desktop-applications',
    title: 'Desktop Applications',
    icon: 'desktop',
    summary: 'Reliable desktop software for complex workflows and business operations.',
    description:
      'For workloads that demand local performance, hardware access or offline reliability, we build desktop software that is stable, secure and easy to deploy across your organization.',
    deliverables: [
      'Windows, macOS and cross-platform builds',
      'Hardware and peripheral integration',
      'Auto-update and silent deployment',
      'Local-first data with cloud sync',
      'Migration from legacy desktop tools',
    ],
    technologies: ['.NET', 'WPF', 'WinUI', 'Electron', 'Tauri'],
    projectType: 'desktop-application',
  },
  {
    slug: 'ai-integration',
    title: 'AI Integration',
    icon: 'sparkles',
    summary:
      'Integrate AI into existing software to automate workflows and create intelligent experiences.',
    description:
      'We add practical, measurable AI to the products and processes you already have — assistants, document intelligence, smart search and automation — with the guardrails, evaluation and cost control production systems need.',
    deliverables: [
      'AI opportunity assessment',
      'Retrieval-augmented generation (RAG) over your data',
      'Agents and workflow automation',
      'Evaluation, monitoring and safety guardrails',
      'Cost and latency optimization',
    ],
    technologies: ['OpenAI', 'Azure OpenAI', 'Python', 'Vector databases', 'ASP.NET Core'],
    projectType: 'ai-integration',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    icon: 'layers',
    summary: 'Build scalable subscription-based software products from concept to production.',
    description:
      'We help founders and product teams take SaaS products from idea to paying customers — multi-tenant architecture, billing, onboarding and the operational foundations to scale.',
    deliverables: [
      'MVP scoping and product roadmap',
      'Multi-tenant architecture',
      'Subscription billing and plans',
      'Role-based access and SSO',
      'Usage analytics and observability',
    ],
    technologies: ['Next.js', 'Angular', 'ASP.NET Core', 'PostgreSQL', 'Stripe', 'Azure'],
    projectType: 'saas-product',
  },
  {
    slug: 'api-system-integration',
    title: 'API & System Integration',
    icon: 'plug',
    summary: 'Connect your applications, services and third-party platforms.',
    description:
      'We design robust APIs and integration layers that let your systems share data reliably — ERPs, CRMs, payment providers, healthcare and logistics platforms, and everything in between.',
    deliverables: [
      'REST and GraphQL API design',
      'Third-party API integration',
      'Event-driven and message-based integration',
      'API security, versioning and documentation',
      'Data synchronization and ETL',
    ],
    technologies: ['ASP.NET Core', 'Node.js', 'Azure Service Bus', 'RabbitMQ', 'OpenAPI'],
    projectType: 'web-application',
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: 'cloud',
    summary: 'Automated deployment, cloud infrastructure, monitoring and scalable environments.',
    description:
      'We build cloud foundations that are secure, observable and cost-aware — with infrastructure as code and pipelines that make shipping routine instead of risky.',
    deliverables: [
      'Cloud architecture on Azure and AWS',
      'Infrastructure as code',
      'CI/CD pipelines',
      'Containerization and Kubernetes',
      'Monitoring, alerting and cost optimization',
    ],
    technologies: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    projectType: 'cloud-devops',
  },
  {
    slug: 'software-support-modernization',
    title: 'Software Support & Modernization',
    icon: 'refresh',
    summary: 'Improve, maintain and modernize existing applications.',
    description:
      'We take ownership of existing software — stabilizing it, improving performance and incrementally modernizing legacy systems without disrupting the business that depends on them.',
    deliverables: [
      'Codebase and architecture audit',
      'Incremental legacy modernization',
      'Framework and runtime upgrades',
      'Performance and security remediation',
      'Ongoing maintenance with clear SLAs',
    ],
    technologies: ['.NET', 'Angular', 'SQL Server', 'Azure', 'Docker'],
    projectType: 'software-modernization',
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
