export interface ProcessStep {
  title: string;
  description: string;
  outputs: string[];
}

export const processSteps: ProcessStep[] = [
  {
    title: 'Discover',
    description: 'Understand the business, users and goals.',
    outputs: ['Stakeholder interviews', 'Problem framing', 'Success metrics'],
  },
  {
    title: 'Strategize',
    description: 'Define architecture, technology and product direction.',
    outputs: ['Technical architecture', 'Roadmap', 'Delivery plan'],
  },
  {
    title: 'Design',
    description: 'Create intuitive and scalable experiences.',
    outputs: ['User flows', 'Interactive prototypes', 'Design system'],
  },
  {
    title: 'Build',
    description: 'Engineer the product using modern development practices.',
    outputs: ['Iterative sprints', 'Code reviews', 'Continuous integration'],
  },
  {
    title: 'Test',
    description: 'Quality, security, performance and reliability testing.',
    outputs: ['Automated test suites', 'Security review', 'Load testing'],
  },
  {
    title: 'Launch',
    description: 'Deploy and monitor the production environment.',
    outputs: ['Zero-downtime release', 'Monitoring', 'Runbooks'],
  },
  {
    title: 'Evolve',
    description: 'Continuous improvements, optimization and support.',
    outputs: ['Analytics review', 'Optimization', 'Ongoing support'],
  },
];
