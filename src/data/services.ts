import type { IconName } from '@/components/ui/Icon';
import type { Dictionary } from '@/i18n/dictionaries/en';
import type { ProjectType } from './projectOptions';

export type ServiceSlug = keyof Dictionary['services']['items'];

/** Language-independent service data. Text lives in the dictionaries (`services.items`). */
const serviceData: {
  slug: ServiceSlug;
  icon: IconName;
  technologies: string[];
  /** Pre-selects the contact form's project type when starting from this service. */
  projectType: ProjectType;
}[] = [
  {
    slug: 'web-application-development',
    icon: 'browser',
    technologies: ['Angular', 'React', 'Next.js', 'ASP.NET Core', 'Node.js', 'PostgreSQL'],
    projectType: 'web-application',
  },
  {
    slug: 'mobile-application-development',
    icon: 'mobile',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    projectType: 'mobile-application',
  },
  {
    slug: 'desktop-applications',
    icon: 'desktop',
    technologies: ['.NET', 'WPF', 'WinUI', 'Electron', 'Tauri'],
    projectType: 'desktop-application',
  },
  {
    slug: 'ai-integration',
    icon: 'sparkles',
    technologies: ['OpenAI', 'Azure OpenAI', 'Python', 'Vector databases', 'ASP.NET Core'],
    projectType: 'ai-integration',
  },
  {
    slug: 'saas-development',
    icon: 'layers',
    technologies: ['Next.js', 'Angular', 'ASP.NET Core', 'PostgreSQL', 'Stripe', 'Azure'],
    projectType: 'saas-product',
  },
  {
    slug: 'api-system-integration',
    icon: 'plug',
    technologies: ['ASP.NET Core', 'Node.js', 'Azure Service Bus', 'RabbitMQ', 'OpenAPI'],
    projectType: 'web-application',
  },
  {
    slug: 'cloud-devops',
    icon: 'cloud',
    technologies: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    projectType: 'cloud-devops',
  },
  {
    slug: 'software-support-modernization',
    icon: 'refresh',
    technologies: ['.NET', 'Angular', 'SQL Server', 'Azure', 'Docker'],
    projectType: 'software-modernization',
  },
];

export const serviceSlugs = serviceData.map((s) => s.slug);

export const getServices = (dict: Dictionary) =>
  serviceData.map((s) => ({ ...s, ...dict.services.items[s.slug] }));

export type Service = ReturnType<typeof getServices>[number];

export const getService = (dict: Dictionary, slug: string) =>
  getServices(dict).find((s) => s.slug === slug);
