import type { Dictionary } from '@/i18n/dictionaries/en';

/**
 * Demo case studies. Every project, problem statement and metric is a fictional
 * concept created to illustrate SMR's approach — not client work.
 * Text (problem, solution, metrics, architecture) lives in `caseStudies.items`.
 */
export type CaseStudySlug = keyof Dictionary['caseStudies']['items'];
export type MockVariant = 'workflow' | 'clinical' | 'commerce' | 'analytics';

const caseStudyData: {
  slug: CaseStudySlug;
  name: string;
  technologies: string[];
  mock: MockVariant;
}[] = [
  {
    slug: 'novaflow',
    name: 'NovaFlow',
    technologies: ['Angular', 'ASP.NET Core', 'SQL Server', 'Azure', 'OpenAI API', 'Docker'],
    mock: 'workflow',
  },
  {
    slug: 'medicore',
    name: 'MediCore',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'FHIR APIs', 'Docker'],
    mock: 'clinical',
  },
  {
    slug: 'stockline',
    name: 'Stockline',
    technologies: ['Next.js', 'ASP.NET Core', 'PostgreSQL', 'Azure', 'Redis', 'Flutter'],
    mock: 'commerce',
  },
  {
    slug: 'atlas-modernization',
    name: 'Atlas',
    technologies: ['.NET 8', 'Angular', 'SQL Server', 'Azure', 'Kubernetes', 'Azure DevOps'],
    mock: 'analytics',
  },
];

export const getCaseStudies = (dict: Dictionary) =>
  caseStudyData.map((c) => ({ ...c, ...dict.caseStudies.items[c.slug] }));

export type CaseStudy = ReturnType<typeof getCaseStudies>[number];
export type ArchitectureTier = CaseStudy['architecture'][number];
