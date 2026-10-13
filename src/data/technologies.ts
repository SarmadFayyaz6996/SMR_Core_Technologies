import type { IconName } from '@/components/ui/Icon';
import type { Dictionary } from '@/i18n/dictionaries/en';

type LayerId = keyof Dictionary['technology']['layers'];
type TechSymbol = keyof Dictionary['technology']['notes'];

/** Ordered top (user-facing) to bottom (infrastructure) — rendered as a stack. */
const layerData: {
  id: LayerId;
  icon: IconName;
  /** Technology names are not translated; each `symbol` keys a translated note. */
  technologies: { name: string; symbol: TechSymbol }[];
}[] = [
  {
    id: 'ai',
    icon: 'sparkles',
    technologies: [
      { name: 'OpenAI', symbol: 'Oa' },
      { name: 'Azure OpenAI', symbol: 'Ao' },
      { name: 'Machine Learning APIs', symbol: 'Ml' },
    ],
  },
  {
    id: 'frontend',
    icon: 'browser',
    technologies: [
      { name: 'Angular', symbol: 'Ng' },
      { name: 'React', symbol: 'Re' },
      { name: 'Next.js', symbol: 'Nx' },
    ],
  },
  {
    id: 'backend',
    icon: 'code',
    technologies: [
      { name: 'ASP.NET Core', symbol: 'As' },
      { name: 'Node.js', symbol: 'Nd' },
      { name: 'Python', symbol: 'Py' },
    ],
  },
  {
    id: 'database',
    icon: 'database',
    technologies: [
      { name: 'SQL Server', symbol: 'Sq' },
      { name: 'PostgreSQL', symbol: 'Pg' },
      { name: 'MySQL', symbol: 'My' },
      { name: 'MongoDB', symbol: 'Mg' },
    ],
  },
  {
    id: 'cloud',
    icon: 'cloud',
    technologies: [
      { name: 'Microsoft Azure', symbol: 'Az' },
      { name: 'AWS', symbol: 'Aw' },
    ],
  },
  {
    id: 'devops',
    icon: 'infinity',
    technologies: [
      { name: 'Docker', symbol: 'Dk' },
      { name: 'Kubernetes', symbol: 'K8' },
      { name: 'Azure DevOps', symbol: 'Ad' },
      { name: 'GitHub Actions', symbol: 'Gh' },
    ],
  },
];

export const getTechLayers = (dict: Dictionary) =>
  layerData.map((layer) => ({
    ...layer,
    ...dict.technology.layers[layer.id],
    technologies: layer.technologies.map((t) => ({ ...t, note: dict.technology.notes[t.symbol] })),
  }));

export type TechLayer = ReturnType<typeof getTechLayers>[number];

/** Flat list for the "technology we work with" strip (names are not translated). */
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
