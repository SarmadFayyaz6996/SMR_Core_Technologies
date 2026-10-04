/**
 * Demo articles for the Insights section. Content is illustrative sample copy
 * and is labelled as demo content wherever it is displayed.
 */
export interface ArticleSection {
  heading: string;
  paragraphs: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: 'AI' | 'Engineering' | 'Architecture' | 'Modernization' | 'Cloud' | 'Security';
  date: string;
  readingMinutes: number;
  sections: ArticleSection[];
}

export const articles: Article[] = [
  {
    slug: 'how-ai-is-changing-modern-software-development',
    title: 'How AI is changing modern software development',
    excerpt:
      'AI is reshaping both how software is built and what software can do. Here is what that means for product teams in practice.',
    category: 'AI',
    date: '2026-09-18',
    readingMinutes: 7,
    sections: [
      {
        heading: 'Two shifts at once',
        paragraphs: [
          'AI is changing software development in two directions simultaneously. Engineering teams use AI-assisted tooling to write, review and test code faster, while products themselves increasingly ship intelligent capabilities — assistants, search, summarization and automation.',
          'The teams getting the most value treat these as separate disciplines. Developer tooling is a productivity question; product AI is an architecture question.',
        ],
      },
      {
        heading: 'AI features are system design problems',
        paragraphs: [
          'A useful AI feature is rarely a single model call. It needs clean data, retrieval over the right sources, evaluation to measure quality, guardrails, fallbacks and cost controls.',
          'That is why we design AI capabilities as first-class parts of the architecture rather than features bolted on at the end.',
        ],
      },
      {
        heading: 'Where to start',
        paragraphs: [
          'Begin with a workflow that is repetitive, measurable and already well understood by your team. Ship a narrow version, measure it against the current process and expand from evidence.',
        ],
      },
    ],
  },
  {
    slug: 'building-scalable-web-applications-in-2026',
    title: 'Building scalable web applications in 2026',
    excerpt:
      'Scalability is less about raw traffic and more about how well your system — and your team — handles change.',
    category: 'Engineering',
    date: '2026-09-02',
    readingMinutes: 6,
    sections: [
      {
        heading: 'Scale is a product decision',
        paragraphs: [
          'Most applications never face extreme traffic, but every application faces growing complexity. Scalable architecture keeps features cheap to add as the product matures.',
        ],
      },
      {
        heading: 'Practical foundations',
        paragraphs: [
          'Server rendering and edge caching for fast first loads. Typed APIs between frontend and backend. Clear module boundaries. Background jobs for slow work. Observability from day one.',
          'None of these are exotic — the discipline is applying them consistently.',
        ],
      },
    ],
  },
  {
    slug: 'when-should-a-business-modernize-legacy-software',
    title: 'When should a business modernize legacy software?',
    excerpt:
      'Legacy systems often run the business. The question is not whether to modernize, but when and how to do it safely.',
    category: 'Modernization',
    date: '2026-08-21',
    readingMinutes: 8,
    sections: [
      {
        heading: 'Signals it is time',
        paragraphs: [
          'Changes take weeks instead of days. Only one or two people understand the system. Security updates are no longer available for the runtime. Integrations require manual workarounds.',
        ],
      },
      {
        heading: 'Modernize incrementally',
        paragraphs: [
          'Big-bang rewrites carry enormous risk. The strangler pattern — replacing one capability at a time behind a stable interface — lets the business keep running while the platform evolves.',
        ],
      },
    ],
  },
  {
    slug: 'angular-vs-react-for-enterprise-applications',
    title: 'Angular vs React for enterprise applications',
    excerpt:
      'Both are excellent. The right choice depends on your team, your constraints and how much structure you want built in.',
    category: 'Architecture',
    date: '2026-08-06',
    readingMinutes: 6,
    sections: [
      {
        heading: 'Structure vs flexibility',
        paragraphs: [
          'Angular is a complete framework with strong conventions for routing, forms, dependency injection and testing — valuable for large teams that want consistency.',
          'React is a focused UI library with a vast ecosystem. Paired with a framework like Next.js, it offers flexibility and excellent rendering options.',
        ],
      },
      {
        heading: 'How we decide',
        paragraphs: [
          'We weigh existing team skills, the shape of the product, long-term maintenance and integration needs. Either choice, done well, scales comfortably.',
        ],
      },
    ],
  },
  {
    slug: 'building-secure-apis-with-aspnet-core',
    title: 'Building secure APIs with ASP.NET Core',
    excerpt:
      'A practical checklist for authentication, authorization, validation and observability in production APIs.',
    category: 'Security',
    date: '2026-07-24',
    readingMinutes: 9,
    sections: [
      {
        heading: 'Secure defaults',
        paragraphs: [
          'Use standards-based authentication such as OpenID Connect, enforce authorization with policies rather than scattered checks and validate every input at the boundary.',
        ],
      },
      {
        heading: 'Defense in depth',
        paragraphs: [
          'Apply rate limiting, keep secrets in a managed vault, log security-relevant events and run dependency scanning in CI. Security is a property of the whole delivery process.',
        ],
      },
    ],
  },
  {
    slug: 'how-cloud-architecture-improves-scalability',
    title: 'How cloud architecture improves scalability',
    excerpt:
      'Elastic infrastructure is only part of the story. Good cloud architecture makes scaling predictable and affordable.',
    category: 'Cloud',
    date: '2026-07-10',
    readingMinutes: 5,
    sections: [
      {
        heading: 'Beyond autoscaling',
        paragraphs: [
          'Managed databases, queues and caches let teams scale individual bottlenecks instead of entire systems. Infrastructure as code makes environments reproducible.',
        ],
      },
      {
        heading: 'Cost is a design input',
        paragraphs: [
          'Right-sizing, caching and asynchronous processing keep costs proportional to value. We treat cloud spend as a metric to monitor, not a surprise to explain.',
        ],
      },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
