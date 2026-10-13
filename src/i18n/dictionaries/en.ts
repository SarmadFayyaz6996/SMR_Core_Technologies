/**
 * English dictionary — the source of truth for every visible string on the site.
 * Its shape defines the `Dictionary` type: every other language must provide exactly
 * the same keys, so TypeScript fails the build if a translation is missing.
 *
 * Placeholders like {name} are filled at runtime with `format()`; keep them as-is.
 * Brand and technology names (SMR, Angular, Azure…) are not translated.
 */
export const en = {
  meta: {
    siteDescription:
      'SMR Core Technologies is a custom software development company engineering high-performance web, mobile, desktop, SaaS and AI-powered software for ambitious businesses.',
    homeTitle: 'SMR Core Technologies (SMR Core) — Custom Software Development',
    contactTitle: 'Contact — Start a Software Project',
    contactDescription:
      'Tell us about your web, mobile, AI or SaaS project. SMR Core Technologies will review your goals and reply with next steps and a transparent estimate.',
    workTitle: 'Work — Demo Case Studies',
    workDescription:
      'Demo case studies showing how SMR Core Technologies approaches custom software, AI integration, SaaS platforms and legacy modernization — from problem to architecture to outcome.',
    insightsTitle: 'Insights — Software Engineering, AI & Cloud',
    insightsDescription:
      'Practical insights on custom software development, AI integration, scalable web applications, cloud architecture and legacy modernization from SMR Core Technologies.',
    careersTitle: 'Careers',
    careersDescription:
      'Join SMR Core Technologies — engineers, designers and problem-solvers building modern web, mobile, cloud and AI software.',
    notFoundTitle: 'Page not found',
    ogAlt: 'SMR Core Technologies — We build software that moves business forward.',
  },

  common: {
    skipToContent: 'Skip to content',
    startProject: 'Start a Project',
    exploreWork: 'Explore Our Work',
    talkToExpert: 'Talk to an Expert',
    letsTalk: "Let's Talk",
    learnMore: 'Learn more',
    demoProject: 'Demo Project',
    conceptProject: 'Concept Project',
    demoMetrics: 'Demo metrics',
    demoContent: 'Demo content',
    home: 'Home',
    breadcrumb: 'Breadcrumb',
    tagline: 'We build software that moves business forward.',
  },

  nav: {
    services: 'Services',
    solutions: 'Solutions',
    industries: 'Industries',
    work: 'Work',
    technology: 'Technology',
    about: 'About',
    primaryLabel: 'Primary',
    mobileLabel: 'Mobile',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    themeToLight: 'Switch to light theme',
    themeToDark: 'Switch to dark theme',
    language: 'Language',
    chooseLanguage: 'Choose language',
  },

  footer: {
    navLabel: 'Footer',
    company: 'Company',
    services: 'Services',
    resources: 'Resources',
    about: 'About',
    work: 'Work',
    careers: 'Careers',
    contact: 'Contact',
    webDevelopment: 'Web Development',
    mobileDevelopment: 'Mobile Development',
    ai: 'AI',
    saas: 'SaaS',
    cloud: 'Cloud',
    softwareSupport: 'Software Support',
    blog: 'Blog',
    insights: 'Insights',
    faq: 'FAQ',
    privacy: 'Privacy Policy',
    terms: 'Terms & Conditions',
    cookies: 'Cookie Policy',
    rights: '© {year} {name}. All rights reserved.',
    socialOn: '{name} on {network}',
  },

  hero: {
    pillTag: 'New',
    pill: 'AI integration for existing products',
    titleLead: 'We build software that',
    titleAccent: 'moves business forward.',
    lead: 'We design and engineer high-performance web, mobile, desktop and AI-powered software that helps ambitious businesses build, scale and evolve.',
    capabilitiesLabel: 'What we build',
    capabilities: ['Web', 'Mobile', 'Desktop', 'AI', 'Cloud'],
    visualLabel:
      'Illustration of a software core connected to AI, web, API, cloud, mobile and desktop modules with data flowing between them.',
    deploy: 'Deploy · production',
    ready: 'Ready',
    latency: 'p95 latency',
  },

  principles: {
    title: 'Trusted engineering principles',
    techTitle: 'Technology we work with',
    items: {
      architecture: 'Modern Architecture',
      security: 'Security First',
      cloud: 'Cloud Ready',
      ai: 'AI Enabled',
      performance: 'Performance Focused',
      scale: 'Built to Scale',
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Technology that solves real business problems.',
    lead: 'End-to-end software engineering — from first prototype to production systems built to scale.',
    pageEyebrow: 'Service',
    seeDemoWork: 'See demo work',
    deliverTitle: 'What we deliver',
    techTitle: 'Typical technology',
    relatedTitle: 'Related services',
    items: {
      'web-application-development': {
        title: 'Web Application Development',
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
      },
      'mobile-application-development': {
        title: 'Mobile Application Development',
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
      },
      'desktop-applications': {
        title: 'Desktop Applications',
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
      },
      'ai-integration': {
        title: 'AI Integration',
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
      },
      'saas-development': {
        title: 'SaaS Development',
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
      },
      'api-system-integration': {
        title: 'API & System Integration',
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
      },
      'cloud-devops': {
        title: 'Cloud & DevOps',
        summary:
          'Automated deployment, cloud infrastructure, monitoring and scalable environments.',
        description:
          'We build cloud foundations that are secure, observable and cost-aware — with infrastructure as code and pipelines that make shipping routine instead of risky.',
        deliverables: [
          'Cloud architecture on Azure and AWS',
          'Infrastructure as code',
          'CI/CD pipelines',
          'Containerization and Kubernetes',
          'Monitoring, alerting and cost optimization',
        ],
      },
      'software-support-modernization': {
        title: 'Software Support & Modernization',
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
      },
    },
  },

  solutions: {
    eyebrow: 'Solutions',
    title: 'Built for the way modern businesses work.',
    lead: 'Concept products that show how we approach common business platforms — each one designed, architected and ready to adapt to your domain.',
    capabilitiesLabel: '{title} capabilities',
    items: {
      assistant: {
        title: 'AI Business Assistant',
        description: 'AI-powered business assistant integrated into enterprise workflows.',
        capabilities: ['Natural language queries', 'Document Q&A', 'Action automation'],
      },
      kanban: {
        title: 'Smart Project Management',
        description: 'Project management platform with real-time collaboration.',
        capabilities: ['Live boards', 'Resource planning', 'Time tracking'],
      },
      health: {
        title: 'Healthcare Management Platform',
        description: 'Modern healthcare workflow and patient management platform.',
        capabilities: ['Scheduling', 'Patient records', 'Billing workflows'],
      },
      pos: {
        title: 'Retail POS & Inventory',
        description: 'Cloud-based POS and inventory management platform.',
        capabilities: ['Multi-store stock', 'Offline checkout', 'Supplier orders'],
      },
      property: {
        title: 'Property Management Platform',
        description: 'Property, tenant, payment and maintenance management.',
        capabilities: ['Tenant portal', 'Rent collection', 'Maintenance tickets'],
      },
      analytics: {
        title: 'Business Intelligence Dashboard',
        description: 'Real-time analytics and KPI visualization.',
        capabilities: ['Live KPIs', 'Custom reports', 'Forecasting'],
      },
    },
    visuals: {
      chatQuestion: 'Which invoices are overdue this week?',
      chatAnswer: '4 invoices are overdue, totalling $18,420.',
      sendReminders: 'Send reminders',
      viewReport: 'View report',
      todo: 'To do',
      inProgress: 'In progress',
      done: 'Done',
      posItems: ['Wireless headset', 'USB-C dock', 'Cable kit'],
      total: 'Total',
      stockSynced: 'Stock synced · 3 stores',
      revenue: 'Revenue',
      activeUsers: 'Active users',
      churn: 'Churn',
    },
  },

  caseStudies: {
    eyebrow: 'Case studies',
    title: 'Engineering, shown in detail.',
    lead: 'Demo case studies that walk through how we frame a problem, design the architecture and measure the outcome.',
    tabsLabel: 'Case studies',
    viewAll: 'View all work',
    problem: 'Problem',
    solution: 'Solution',
    technology: 'Technology',
    architecture: 'Architecture',
    architectureLabel: '{name} architecture tiers',
    metricsLabel: '{name} demo metrics',
    mockLabel: 'Illustrative interface of the {name} concept product',
    workEyebrow: 'Work',
    workTitle: 'How we turn complex problems into reliable software.',
    workLead:
      'The case studies below are demo projects created to illustrate our process, architecture decisions and the outcomes we design for. They are not client engagements.',
    workBadge: 'All projects on this page are demos',
    caseOf: 'Case {i} / {n}',
    items: {
      novaflow: {
        tagline: 'AI-powered workflow automation platform.',
        category: 'AI · Workflow Automation',
        problem:
          'Operations teams were spending hours every day on repetitive tasks — triaging requests, re-keying data between systems and chasing approvals.',
        solution:
          'A centralized workflow automation platform with AI-powered task processing: incoming requests are classified, enriched and routed automatically, with humans approving only the exceptions.',
        metrics: [
          { value: '68%', label: 'less manual processing time' },
          { value: '4.2×', label: 'faster request turnaround' },
          { value: '92%', label: 'of requests auto-routed' },
        ],
        architecture: [
          { label: 'Client', nodes: ['Angular workspace', 'Approvals inbox'] },
          {
            label: 'Platform',
            nodes: ['ASP.NET Core API', 'Workflow engine', 'AI task processor'],
          },
          { label: 'Data & AI', nodes: ['SQL Server', 'Azure OpenAI', 'Blob storage'] },
        ],
      },
      medicore: {
        tagline: 'Clinic operations and patient management platform.',
        category: 'Healthcare · Operations',
        problem:
          'Multi-location clinics juggled disconnected scheduling tools, paper intake forms and delayed billing, creating long waits and revenue leakage.',
        solution:
          'A unified platform for scheduling, digital intake, patient records and billing workflows — with role-based access and audit trails designed around healthcare compliance.',
        metrics: [
          { value: '37%', label: 'fewer missed appointments' },
          { value: '3 min', label: 'average digital intake' },
          { value: '2×', label: 'faster claim submission' },
        ],
        architecture: [
          { label: 'Client', nodes: ['Staff web app', 'Patient portal'] },
          {
            label: 'Platform',
            nodes: ['Node.js services', 'Scheduling engine', 'Billing service'],
          },
          { label: 'Data', nodes: ['PostgreSQL', 'FHIR gateway', 'Audit log'] },
        ],
      },
      stockline: {
        tagline: 'Cloud POS and inventory for multi-store retail.',
        category: 'Retail · Commerce',
        problem:
          'A growing retail chain had no real-time view of stock across stores, leading to stockouts, over-ordering and checkout downtime during network outages.',
        solution:
          'An offline-capable POS with real-time inventory sync, automated supplier re-ordering and a central dashboard for every location.',
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
      },
      'atlas-modernization': {
        tagline: 'Legacy ERP modernization to a cloud-native platform.',
        category: 'Modernization · Enterprise',
        problem:
          'A 15-year-old desktop ERP had become slow, hard to change and impossible to access remotely — but the business depended on it every day.',
        solution:
          'An incremental strangler-pattern migration to a modular .NET and Angular platform on Azure, moving one domain at a time with zero planned downtime.',
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
      },
    },
    mocks: {
      automations: 'Automations',
      running: '12 running',
      flow: ['Request in', 'AI classify', 'Route', 'Approve'],
      rows: [
        'Vendor onboarding — EU',
        'Invoice dispute #2291',
        'Access request — Finance',
        'Contract renewal Q4',
      ],
      aiRouted: 'AI routed',
      awaitingApproval: 'Awaiting approval',
      completed: 'Completed',
      clinicToday: 'Today · Clinic North',
      appointments: '28 appointments',
      inventoryAll: 'Inventory · All stores',
      synced: 'Synced',
      salesToday: 'Sales today',
      orders: 'Orders',
      lowStock: 'Low stock',
      skus: ['SKU-1042 Headset', 'SKU-2210 Dock', 'SKU-0871 Cable kit'],
      migrationProgress: 'Migration progress',
      domains: '7 / 12 domains',
      legacy: 'Legacy',
      modernPlatform: 'Modern platform',
    },
  },

  ai: {
    eyebrow: 'Artificial intelligence',
    titleLead: 'Make your software',
    titleAccent: 'intelligent.',
    lead: "AI shouldn't be a feature added at the end. We help businesses integrate intelligent capabilities directly into their products, workflows and operations.",
    cta: 'Explore AI integration',
    capabilitiesLabel: 'AI capabilities',
    demoLabel: 'Illustrative demo',
    you: 'You',
    assistant: 'SMR AI',
    stepsLabel: 'Processing steps',
    items: {
      assistant: {
        name: 'AI assistants',
        summary: 'Context-aware copilots inside your product.',
        prompt: 'Summarize open escalations for the Northwind account.',
        steps: ['Resolve account context', 'Query ticketing API', 'Rank by severity'],
        response:
          '3 open escalations. Highest priority: invoice sync failing since Tuesday (P1, owner: Finance Ops). Two P3 UI issues are awaiting customer confirmation.',
      },
      documents: {
        name: 'Document intelligence',
        summary: 'Extract, classify and validate unstructured documents.',
        prompt: 'Extract key terms from the uploaded supplier contract.',
        steps: ['Parse 14-page PDF', 'Classify clauses', 'Validate against policy'],
        response:
          'Term: 24 months · Net-45 payment · Auto-renewal with 60-day notice. Flag: liability cap is below your standard policy threshold.',
      },
      workflows: {
        name: 'Automated workflows',
        summary: 'Agents that route, enrich and act on requests.',
        prompt: 'Route this new vendor onboarding request.',
        steps: ['Classify request', 'Check compliance rules', 'Create approval task'],
        response:
          'Classified as “Vendor onboarding — EU”. Compliance checklist attached. Approval task created for Procurement with a 2-day SLA.',
      },
      search: {
        name: 'Smart search',
        summary: 'Semantic search across every knowledge source.',
        prompt: 'How do we handle refunds for annual plans?',
        steps: ['Embed query', 'Search 3 knowledge bases', 'Cite sources'],
        response:
          'Annual plans are refundable pro-rata within 30 days of renewal. Source: Billing Policy v4, §2.3 and Support Playbook “Refunds”.',
      },
      recommendations: {
        name: 'Recommendations',
        summary: 'Personalized suggestions from behavioral signals.',
        prompt: 'What should we offer this customer next?',
        steps: ['Load purchase history', 'Score similar cohorts', 'Rank offers'],
        response:
          'Top suggestion: upgrade to the Team plan (match score 0.87). Customers with similar usage adopted it within 3 weeks.',
      },
      predictive: {
        name: 'Predictive analytics',
        summary: 'Forecast demand, churn and operational risk.',
        prompt: 'Forecast inventory demand for next month.',
        steps: ['Aggregate 18 months of sales', 'Apply seasonality model', 'Estimate ranges'],
        response:
          'Expected demand +12% month-over-month. 4 SKUs are at risk of stockout — recommended re-order quantities have been drafted.',
      },
      'nl-interface': {
        name: 'Natural language interfaces',
        summary: 'Let users ask questions instead of building queries.',
        prompt: 'Show revenue by region for Q3 compared with Q2.',
        steps: ['Translate to SQL', 'Run read-only query', 'Build chart'],
        response:
          'Q3 revenue grew 9% overall. EMEA +14%, North America +7%, APAC +4%. A comparison chart has been added to your dashboard.',
      },
      support: {
        name: 'AI customer support',
        summary: 'Resolve common requests instantly, escalate the rest.',
        prompt: 'A customer asks why their order hasn’t shipped.',
        steps: ['Look up order', 'Check carrier status', 'Draft reply'],
        response:
          'Order #48213 is packed and awaiting carrier pickup today. Drafted reply with tracking link — confidence high, no escalation needed.',
      },
    },
  },

  technology: {
    eyebrow: 'Technology',
    title: 'A modern stack, chosen with intent.',
    lead: 'Every layer of the systems we build — from AI to infrastructure — uses proven technology selected for performance, maintainability and long-term support.',
    tabsLabel: 'Technology stack layers',
    layerOf: 'Layer {i} / {n}',
    layers: {
      ai: {
        name: 'AI',
        description:
          'Language models, retrieval and machine learning APIs woven into product logic.',
      },
      frontend: {
        name: 'Frontend',
        description: 'Fast, accessible interfaces with component architecture and strong typing.',
      },
      backend: {
        name: 'Backend',
        description: 'Secure, well-tested services and APIs designed for long-term change.',
      },
      database: {
        name: 'Database',
        description: 'Relational and document data models tuned for integrity and performance.',
      },
      cloud: {
        name: 'Cloud',
        description: 'Cloud-native architecture with security, scaling and cost in mind.',
      },
      devops: {
        name: 'DevOps',
        description: 'Automated pipelines, containers and observability for confident releases.',
      },
    },
    notes: {
      Oa: 'GPT models & embeddings',
      Ao: 'Enterprise-grade LLM hosting',
      Ml: 'Vision, speech & prediction',
      Ng: 'Structured enterprise SPAs',
      Re: 'Composable UI at any scale',
      Nx: 'Server rendering & edge delivery',
      As: 'High-throughput APIs & services',
      Nd: 'Real-time & event-driven services',
      Py: 'Data pipelines & AI workloads',
      Sq: 'Transactional enterprise data',
      Pg: 'Relational + JSON + vectors',
      My: 'Proven web-scale storage',
      Mg: 'Flexible document models',
      Az: 'App Service, AKS, Functions',
      Aw: 'ECS, Lambda, RDS',
      Dk: 'Reproducible containers',
      K8: 'Orchestration at scale',
      Ad: 'Boards, repos & pipelines',
      Gh: 'CI/CD as code',
    },
  },

  process: {
    eyebrow: 'Process',
    title: 'From idea to impact.',
    lead: 'A clear, collaborative delivery process — so you always know what is happening, what comes next and why.',
    outputsLabel: '{title} outputs',
    steps: [
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
    ],
  },

  why: {
    eyebrow: 'Why SMR',
    title: 'Engineering built for the long term.',
    lead: 'Software is a long-term asset. We build it the way you would want it maintained — carefully, transparently and with the next five years in mind.',
    items: {
      architecture: {
        title: 'Modern architecture',
        description: 'Modular, well-bounded systems that are easy to extend and reason about.',
      },
      code: {
        title: 'Clean, maintainable code',
        description: 'Typed, tested and reviewed — code your future team will thank you for.',
      },
      security: {
        title: 'Security-first development',
        description: 'Threat modeling, least privilege and secure defaults from the first commit.',
      },
      performance: {
        title: 'Performance optimization',
        description: 'Performance budgets, profiling and caching built into delivery.',
      },
      scale: {
        title: 'Scalable infrastructure',
        description: 'Infrastructure that grows with demand without growing your bill linearly.',
      },
      ai: {
        title: 'AI-ready architecture',
        description: 'Clean data and APIs that make adding intelligent features straightforward.',
      },
      cloud: {
        title: 'Cloud-native capabilities',
        description: 'Containers, managed services and automation on Azure and AWS.',
      },
      improvement: {
        title: 'Continuous improvement',
        description: 'We measure, learn and refine long after launch day.',
      },
      communication: {
        title: 'Transparent communication',
        description: 'Clear scope, honest estimates and visible progress every week.',
      },
    },
  },

  industries: {
    eyebrow: 'Industries',
    title: 'Software for every kind of ambition.',
    lead: 'Domain-aware engineering for regulated, high-volume and fast-moving industries — from first MVP to enterprise scale.',
    items: {
      healthcare: {
        name: 'Healthcare',
        focus: 'Patient workflows, scheduling and compliant data.',
      },
      fintech: { name: 'FinTech', focus: 'Secure payments, ledgers and real-time reporting.' },
      retail: { name: 'Retail', focus: 'POS, inventory and omnichannel commerce.' },
      realEstate: { name: 'Real Estate', focus: 'Property, tenant and lease management.' },
      logistics: { name: 'Logistics', focus: 'Fleet tracking, routing and warehouse systems.' },
      education: { name: 'Education', focus: 'Learning platforms and student management.' },
      manufacturing: { name: 'Manufacturing', focus: 'Production planning and shop-floor data.' },
      professional: {
        name: 'Professional Services',
        focus: 'Client portals, billing and resource planning.',
      },
      startups: { name: 'Startups', focus: 'MVPs that are built to become products.' },
      enterprise: { name: 'Enterprise', focus: 'Modernization and integration at scale.' },
    },
  },

  about: {
    eyebrow: 'About SMR',
    titleLead: 'Technology is only valuable when it creates',
    titleAccent: 'progress.',
    lead: 'SMR Core Technologies — SMR Core for short — helps businesses transform ideas into reliable digital products.',
    text: "We combine software engineering, modern architecture, cloud technologies and artificial intelligence to create solutions designed for today's businesses and tomorrow's challenges.",
    values: [
      {
        title: 'Progress over output',
        text: 'We measure success by the business outcomes software creates, not the lines of code we ship.',
      },
      {
        title: 'Craft that lasts',
        text: 'Clean architecture and careful engineering, so your product stays fast and changeable for years.',
      },
      {
        title: 'Partnership, not projects',
        text: 'We stay close after launch — improving, supporting and evolving what we build together.',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered.',
    items: [
      {
        question: 'What kind of software does SMR Core Technologies build?',
        answer:
          'We build custom web applications, mobile apps, desktop software, SaaS products and AI-powered systems — along with the APIs, cloud infrastructure and integrations that connect them.',
      },
      {
        question: 'Can you work with our existing codebase?',
        answer:
          'Yes. Much of our work is improving, extending and modernizing existing applications. We start with a code and architecture review, then agree on an incremental plan that avoids disruption.',
      },
      {
        question: 'How do you integrate AI into existing products?',
        answer:
          'We identify the workflows where AI creates measurable value, then integrate models such as OpenAI or Azure OpenAI through your existing APIs — with retrieval over your data, evaluation, guardrails and cost monitoring.',
      },
      {
        question: 'Which technologies do you specialize in?',
        answer:
          'Our core stack includes Angular, React and Next.js on the frontend; ASP.NET Core, Node.js and Python on the backend; SQL Server and PostgreSQL for data; and Azure or AWS with Docker and Kubernetes for infrastructure.',
      },
      {
        question: 'How do projects typically start?',
        answer:
          'With a short discovery conversation about your goals, users and constraints. From there we propose scope, architecture, timeline and a transparent estimate before any build work begins.',
      },
      {
        question: 'Do you provide support after launch?',
        answer:
          'Yes. We offer ongoing maintenance, monitoring, performance optimization and feature development so your software keeps improving after it ships.',
      },
    ],
  },

  cta: {
    title: 'Have an idea worth building?',
    text: "Let's turn your idea into software that creates real business value.",
  },

  contact: {
    eyebrow: 'Contact',
    title: "Let's build something that moves you forward.",
    lead: "Tell us what you're working on. We'll get back to you with thoughtful questions, honest advice and clear next steps.",
    nextTitle: 'What happens next',
    steps: [
      { title: 'Share your idea', text: 'Tell us about your goals, users and timeline.' },
      { title: 'Discovery call', text: 'A 30-minute conversation with a senior engineer.' },
      {
        title: 'Clear proposal',
        text: 'Scope, architecture, timeline and a transparent estimate.',
      },
    ],
    preferEmail: 'Prefer email?',
    expertMessage: "I'd like to talk to an expert about ",
    form: {
      fullName: 'Full name',
      fullNamePlaceholder: 'Jane Cooper',
      workEmail: 'Work email',
      workEmailPlaceholder: 'jane@company.com',
      company: 'Company',
      companyPlaceholder: 'Company name',
      phone: 'Phone',
      phonePlaceholder: '+1 555 000 0000',
      optional: 'Optional',
      projectType: 'Project type',
      budget: 'Budget range',
      message: 'Message',
      messagePlaceholder: 'Tell us about your product, goals, timeline and any existing systems.',
      consentBefore: 'I agree to the',
      consentLink: 'privacy policy',
      consentAfter: 'and consent to SMR Core Technologies contacting me about this enquiry.',
      send: 'Send message',
      sending: 'Sending…',
      note: 'We usually reply within one business day.',
      successTitle: 'Thanks, {name} — message received.',
      successBefore: 'A senior engineer will review your project and reply to',
      successAfter: 'within one business day.',
      successSteps: [
        'We review your goals and constraints.',
        'We schedule a 30-minute discovery call.',
        'You receive a scoped proposal and estimate.',
      ],
      sendAnother: 'Send another message',
    },
    errors: {
      fullNameRequired: 'Please enter your full name.',
      fullNameTooLong: 'Please use a shorter name.',
      workEmailRequired: 'Please enter your work email.',
      workEmailInvalid: 'Please enter a valid email address.',
      companyTooLong: 'Please use a shorter company name.',
      phoneInvalid: 'Please enter a valid phone number.',
      projectTypeRequired: 'Please choose a project type.',
      budgetRequired: 'Please choose a budget range.',
      messageTooShort: 'Please tell us a little more (at least {min} characters).',
      messageTooLong: 'Please keep your message under {max} characters.',
      consentRequired: 'Please agree to the privacy policy so we can reply.',
      reviewForm: 'Some details need attention. Please review the form.',
      network: 'Network error — please check your connection and try again.',
      deliveryFailed: 'We could not send your message right now. Please try again shortly.',
    },
    projectTypes: {
      'web-application': 'Web Application',
      'mobile-application': 'Mobile Application',
      'desktop-application': 'Desktop Application',
      'ai-integration': 'AI Integration',
      'saas-product': 'SaaS Product',
      'cloud-devops': 'Cloud / DevOps',
      'software-modernization': 'Software Modernization',
      'support-maintenance': 'Support & Maintenance',
      other: 'Other',
    },
    budgets: {
      'under-5k': 'Under $5K',
      '5k-15k': '$5K–$15K',
      '15k-50k': '$15K–$50K',
      '50k-plus': '$50K+',
      'not-sure': 'Not Sure',
    },
  },

  insights: {
    eyebrow: 'Insights',
    title: 'Notes on building software that lasts.',
    lead: 'Perspectives on engineering, architecture, AI and modernization — written for people who build and buy software.',
    latest: 'Latest articles',
    more: 'More insights',
    minRead: '{n} min read',
    demoArticle: 'Demo article',
    disclaimer: 'This is sample content created for demonstration purposes.',
    categories: {
      AI: 'AI',
      Engineering: 'Engineering',
      Architecture: 'Architecture',
      Modernization: 'Modernization',
      Cloud: 'Cloud',
      Security: 'Security',
    },
    articles: {
      'how-ai-is-changing-modern-software-development': {
        title: 'How AI is changing modern software development',
        excerpt:
          'AI is reshaping both how software is built and what software can do. Here is what that means for product teams in practice.',
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
      'building-scalable-web-applications-in-2026': {
        title: 'Building scalable web applications in 2026',
        excerpt:
          'Scalability is less about raw traffic and more about how well your system — and your team — handles change.',
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
      'when-should-a-business-modernize-legacy-software': {
        title: 'When should a business modernize legacy software?',
        excerpt:
          'Legacy systems often run the business. The question is not whether to modernize, but when and how to do it safely.',
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
      'angular-vs-react-for-enterprise-applications': {
        title: 'Angular vs React for enterprise applications',
        excerpt:
          'Both are excellent. The right choice depends on your team, your constraints and how much structure you want built in.',
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
      'building-secure-apis-with-aspnet-core': {
        title: 'Building secure APIs with ASP.NET Core',
        excerpt:
          'A practical checklist for authentication, authorization, validation and observability in production APIs.',
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
      'how-cloud-architecture-improves-scalability': {
        title: 'How cloud architecture improves scalability',
        excerpt:
          'Elastic infrastructure is only part of the story. Good cloud architecture makes scaling predictable and affordable.',
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
    },
  },

  careers: {
    eyebrow: 'Careers',
    title: 'Build the software businesses depend on.',
    lead: "We're always interested in meeting thoughtful engineers and designers who care about craft, clarity and impact.",
    principles: [
      {
        title: 'Ownership',
        text: 'Engineers own problems end to end — from discovery to production.',
      },
      {
        title: 'Craft',
        text: 'Code review, testing and design quality are part of the job, not extras.',
      },
      { title: 'Growth', text: 'Modern stacks, real architecture decisions and time to learn.' },
    ],
    openRoles: 'Open roles',
    empty:
      "There are no open positions listed right now. If you'd like to be considered for future roles, send us a short introduction and a link to your work.",
    introduce: 'Introduce yourself',
    emailSubject: 'Careers',
  },

  legal: {
    eyebrow: 'Legal',
    lastUpdated: 'Last updated',
    badge: 'Template — pending legal review',
    documents: {
      privacy: {
        title: 'Privacy Policy',
        description: 'How SMR Core Technologies collects, uses and protects personal information.',
        sections: [
          {
            heading: 'Information we collect',
            body: 'When you contact us we collect the details you provide — such as your name, work email, company, phone number and project information — so that we can respond to your enquiry.',
          },
          {
            heading: 'How we use information',
            body: 'We use your information only to respond to your enquiry, provide our services and improve our website. We do not sell personal information.',
          },
          {
            heading: 'Data retention',
            body: 'We keep enquiry data only for as long as needed to respond and maintain a business relationship, or as required by law.',
          },
          {
            heading: 'Your rights',
            body: 'You may request access to, correction of or deletion of your personal information at any time by contacting us.',
          },
        ],
      },
      terms: {
        title: 'Terms & Conditions',
        description: 'Terms governing use of the SMR Core Technologies website.',
        sections: [
          {
            heading: 'Use of this website',
            body: 'This website provides general information about our services. Content may change without notice and does not form a binding offer.',
          },
          {
            heading: 'Demo content',
            body: 'Case studies, metrics, concept projects and articles marked as demo content are illustrative and do not represent actual client engagements or results.',
          },
          {
            heading: 'Intellectual property',
            body: 'The design, text and graphics of this website are the property of SMR Core Technologies unless otherwise stated.',
          },
          {
            heading: 'Limitation of liability',
            body: 'Information on this website is provided “as is” without warranties of any kind.',
          },
        ],
      },
      cookies: {
        title: 'Cookie Policy',
        description: 'How the SMR Core Technologies website uses cookies and local storage.',
        sections: [
          {
            heading: 'Essential storage only',
            body: 'This website does not use advertising or tracking cookies. It stores two preferences in your browser: your chosen colour theme (local storage) and your chosen language (a first-party cookie).',
          },
          {
            heading: 'Managing preferences',
            body: 'You can clear these at any time through your browser settings. The site will then follow your system theme and detect your language automatically.',
          },
        ],
      },
    },
  },

  notFound: {
    code: 'Error 404',
    title: 'This page has moved — or never existed.',
    text: "The link may be outdated. Let's get you back on track.",
    home: 'Back to home',
    contact: 'Contact us',
  },
};

export type Dictionary = typeof en;
