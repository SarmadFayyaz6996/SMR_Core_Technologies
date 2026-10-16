import type { Dictionary } from './en';

export const sv: Dictionary = {
  meta: {
    siteDescription:
      'SMR Core Technologies är ett företag inom skräddarsydd mjukvaruutveckling som bygger högpresterande webb-, mobil-, desktop-, SaaS- och AI-drivna lösningar för ambitiösa företag.',
    homeTitle: 'SMR Core Technologies — Skräddarsydd mjukvaruutveckling',
    contactTitle: 'Kontakt — Starta ett mjukvaruprojekt',
    contactDescription:
      'Berätta om ditt webb-, mobil-, AI- eller SaaS-projekt. SMR Core Technologies går igenom dina mål och återkommer med nästa steg och en transparent uppskattning.',
    workTitle: 'Case — Demoprojekt',
    workDescription:
      'Demoprojekt som visar hur SMR Core Technologies arbetar med skräddarsydd mjukvara, AI-integration, SaaS-plattformar och modernisering av äldre system — från problem till arkitektur och resultat.',
    insightsTitle: 'Insikter — Systemutveckling, AI & moln',
    insightsDescription:
      'Praktiska insikter om skräddarsydd mjukvaruutveckling, AI-integration, skalbara webbapplikationer, molnarkitektur och modernisering av äldre system från SMR Core Technologies.',
    careersTitle: 'Karriär',
    careersDescription:
      'Bli en del av SMR Core Technologies — utvecklare, designers och problemlösare som bygger modern mjukvara för webb, mobil, moln och AI.',
    notFoundTitle: 'Sidan hittades inte',
    ogAlt: 'SMR Core Technologies — Vi bygger mjukvara som tar affären framåt.',
  },

  common: {
    skipToContent: 'Hoppa till innehållet',
    startProject: 'Starta ett projekt',
    exploreWork: 'Se våra case',
    talkToExpert: 'Prata med en expert',
    letsTalk: 'Hör av dig',
    learnMore: 'Läs mer',
    demoProject: 'Demoprojekt',
    conceptProject: 'Konceptprojekt',
    demoMetrics: 'Demomått',
    demoContent: 'Demoinnehåll',
    home: 'Hem',
    breadcrumb: 'Brödsmulor',
    tagline: 'Vi bygger mjukvara som tar affären framåt.',
  },

  nav: {
    services: 'Tjänster',
    solutions: 'Lösningar',
    industries: 'Branscher',
    work: 'Case',
    technology: 'Teknik',
    about: 'Om oss',
    primaryLabel: 'Huvudmeny',
    mobileLabel: 'Mobilmeny',
    openMenu: 'Öppna menyn',
    closeMenu: 'Stäng menyn',
    themeToLight: 'Byt till ljust tema',
    themeToDark: 'Byt till mörkt tema',
    language: 'Språk',
    chooseLanguage: 'Välj språk',
  },

  footer: {
    navLabel: 'Sidfot',
    company: 'Företaget',
    services: 'Tjänster',
    resources: 'Resurser',
    about: 'Om oss',
    work: 'Case',
    careers: 'Karriär',
    contact: 'Kontakt',
    webDevelopment: 'Webbutveckling',
    mobileDevelopment: 'Apputveckling',
    ai: 'AI',
    saas: 'SaaS',
    cloud: 'Moln',
    softwareSupport: 'Förvaltning & support',
    blog: 'Blogg',
    insights: 'Insikter',
    faq: 'Vanliga frågor',
    privacy: 'Integritetspolicy',
    terms: 'Villkor',
    cookies: 'Cookiepolicy',
    rights: '© {year} {name}. Alla rättigheter förbehållna.',
    socialOn: '{name} på {network}',
  },

  hero: {
    pillTag: 'Nyhet',
    pill: 'AI-integration för befintliga produkter',
    titleLead: 'Vi bygger mjukvara som',
    titleAccent: 'tar affären framåt.',
    lead: 'Vi designar och utvecklar högpresterande mjukvara för webb, mobil, desktop och AI som hjälper ambitiösa företag att bygga, skala och utvecklas.',
    capabilitiesLabel: 'Det här bygger vi',
    capabilities: ['Webb', 'Mobil', 'Desktop', 'AI', 'Moln'],
    visualLabel:
      'Illustration av en mjukvarukärna kopplad till moduler för AI, webb, API, moln, mobil och desktop, med data som flödar mellan dem.',
    deploy: 'Driftsättning · produktion',
    ready: 'Klar',
    latency: 'p95-latens',
  },

  principles: {
    title: 'Ingenjörsprinciper att lita på',
    techTitle: 'Tekniker vi arbetar med',
    items: {
      architecture: 'Modern arkitektur',
      security: 'Säkerhet först',
      cloud: 'Molnredo',
      ai: 'AI-förberett',
      performance: 'Fokus på prestanda',
      scale: 'Byggt för att skala',
    },
  },

  services: {
    eyebrow: 'Tjänster',
    title: 'Teknik som löser verkliga affärsproblem.',
    lead: 'Systemutveckling från början till slut — från första prototyp till skalbara produktionssystem.',
    pageEyebrow: 'Tjänst',
    seeDemoWork: 'Se demoprojekt',
    deliverTitle: 'Det här levererar vi',
    techTitle: 'Typisk teknik',
    relatedTitle: 'Relaterade tjänster',
    items: {
      'web-application-development': {
        title: 'Webbutveckling',
        summary: 'Högpresterande webbapplikationer byggda kring din verksamhets behov.',
        description:
          'Från kundportaler till komplexa interna plattformar utvecklar vi webbapplikationer som är snabba, tillgängliga och byggda för att växa — med en ren arkitektur som ditt team kan förvalta i många år.',
        deliverables: [
          'Produktdiscovery och teknisk arkitektur',
          'Responsiva och tillgängliga gränssnitt',
          'Säkra, väldokumenterade API:er',
          'Prestandabudgetar och optimering av Core Web Vitals',
          'Automatiserade tester och CI/CD från dag ett',
        ],
      },
      'mobile-application-development': {
        title: 'Apputveckling',
        summary: 'Moderna mobilupplevelser för iOS och Android.',
        description:
          'Vi designar och bygger mobilappar som känns native, fungerar offline när det behövs och integreras smidigt med dina befintliga system och API:er.',
        deliverables: [
          'Strategi för plattformsoberoende och native appar',
          'Offline-first-data och synkronisering',
          'Push-notiser och djuplänkning',
          'Releasehantering för App Store och Google Play',
          'Kraschrapportering och produktanalys',
        ],
      },
      'desktop-applications': {
        title: 'Desktopapplikationer',
        summary: 'Pålitlig desktopmjukvara för komplexa arbetsflöden och affärsprocesser.',
        description:
          'För arbetslaster som kräver lokal prestanda, hårdvaruåtkomst eller tillförlitlighet offline bygger vi desktopmjukvara som är stabil, säker och enkel att rulla ut i hela organisationen.',
        deliverables: [
          'Byggen för Windows, macOS och flera plattformar',
          'Integration med hårdvara och kringutrustning',
          'Automatiska uppdateringar och tyst distribution',
          'Lokal data först, med molnsynk',
          'Migrering från äldre desktopverktyg',
        ],
      },
      'ai-integration': {
        title: 'AI-integration',
        summary:
          'Integrera AI i befintlig mjukvara för att automatisera arbetsflöden och skapa intelligenta upplevelser.',
        description:
          'Vi tillför praktisk, mätbar AI till de produkter och processer du redan har — assistenter, dokumentanalys, smart sök och automatisering — med de skyddsräcken, utvärderingar och den kostnadskontroll som produktionssystem kräver.',
        deliverables: [
          'Kartläggning av AI-möjligheter',
          'Retrieval-augmented generation (RAG) över er data',
          'Agenter och automatisering av arbetsflöden',
          'Utvärdering, övervakning och säkerhetsspärrar',
          'Optimering av kostnad och latens',
        ],
      },
      'saas-development': {
        title: 'SaaS-utveckling',
        summary:
          'Bygg skalbara prenumerationsbaserade mjukvaruprodukter från koncept till produktion.',
        description:
          'Vi hjälper grundare och produktteam att ta SaaS-produkter från idé till betalande kunder — med multi-tenant-arkitektur, fakturering, onboarding och den operativa grund som krävs för att skala.',
        deliverables: [
          'Avgränsning av MVP och produktroadmap',
          'Multi-tenant-arkitektur',
          'Prenumerationsfakturering och planer',
          'Rollbaserad åtkomst och SSO',
          'Användningsanalys och observerbarhet',
        ],
      },
      'api-system-integration': {
        title: 'API- & systemintegration',
        summary: 'Koppla samman dina applikationer, tjänster och tredjepartsplattformar.',
        description:
          'Vi designar robusta API:er och integrationslager som låter dina system dela data på ett tillförlitligt sätt — ERP, CRM, betaltjänster, vård- och logistikplattformar och allt däremellan.',
        deliverables: [
          'Design av REST- och GraphQL-API:er',
          'Integration med tredjeparts-API:er',
          'Händelsedriven och meddelandebaserad integration',
          'API-säkerhet, versionering och dokumentation',
          'Datasynkronisering och ETL',
        ],
      },
      'cloud-devops': {
        title: 'Moln & DevOps',
        summary:
          'Automatiserad driftsättning, molninfrastruktur, övervakning och skalbara miljöer.',
        description:
          'Vi bygger molnplattformar som är säkra, observerbara och kostnadsmedvetna — med infrastruktur som kod och pipelines som gör releaser till rutin i stället för risk.',
        deliverables: [
          'Molnarkitektur på Azure och AWS',
          'Infrastruktur som kod',
          'CI/CD-pipelines',
          'Containerisering och Kubernetes',
          'Övervakning, larm och kostnadsoptimering',
        ],
      },
      'software-support-modernization': {
        title: 'Förvaltning & modernisering',
        summary: 'Förbättra, förvalta och modernisera befintliga applikationer.',
        description:
          'Vi tar ansvar för befintlig mjukvara — stabiliserar den, förbättrar prestandan och moderniserar äldre system steg för steg, utan att störa verksamheten som är beroende av dem.',
        deliverables: [
          'Granskning av kodbas och arkitektur',
          'Stegvis modernisering av äldre system',
          'Uppgradering av ramverk och runtime',
          'Åtgärder för prestanda och säkerhet',
          'Löpande förvaltning med tydliga SLA:er',
        ],
      },
    },
  },

  solutions: {
    eyebrow: 'Lösningar',
    title: 'Byggt för hur moderna företag arbetar.',
    lead: 'Konceptprodukter som visar hur vi angriper vanliga affärsplattformar — var och en designad, arkitekterad och redo att anpassas till din bransch.',
    capabilitiesLabel: 'Funktioner i {title}',
    items: {
      assistant: {
        title: 'AI-affärsassistent',
        description: 'AI-driven affärsassistent integrerad i företagets arbetsflöden.',
        capabilities: [
          'Frågor på naturligt språk',
          'Frågor och svar om dokument',
          'Automatiserade åtgärder',
        ],
      },
      kanban: {
        title: 'Smart projektledning',
        description: 'Plattform för projektledning med samarbete i realtid.',
        capabilities: ['Live-tavlor', 'Resursplanering', 'Tidrapportering'],
      },
      health: {
        title: 'Plattform för vårdadministration',
        description: 'Modern plattform för vårdflöden och patienthantering.',
        capabilities: ['Bokning', 'Patientjournaler', 'Faktureringsflöden'],
      },
      pos: {
        title: 'Kassasystem & lager',
        description: 'Molnbaserad plattform för kassa och lagerhantering.',
        capabilities: ['Lager för flera butiker', 'Offlinekassa', 'Leverantörsorder'],
      },
      property: {
        title: 'Plattform för fastighetsförvaltning',
        description: 'Hantering av fastigheter, hyresgäster, betalningar och underhåll.',
        capabilities: ['Hyresgästportal', 'Hyresavisering', 'Felanmälningar'],
      },
      analytics: {
        title: 'BI-dashboard',
        description: 'Realtidsanalys och visualisering av nyckeltal.',
        capabilities: ['Nyckeltal i realtid', 'Anpassade rapporter', 'Prognoser'],
      },
    },
    visuals: {
      chatQuestion: 'Vilka fakturor är förfallna den här veckan?',
      chatAnswer: '4 fakturor är förfallna, totalt $18 420.',
      sendReminders: 'Skicka påminnelser',
      viewReport: 'Visa rapport',
      todo: 'Att göra',
      inProgress: 'Pågår',
      done: 'Klart',
      posItems: ['Trådlöst headset', 'USB-C-docka', 'Kabelkit'],
      total: 'Totalt',
      stockSynced: 'Lager synkat · 3 butiker',
      revenue: 'Intäkter',
      activeUsers: 'Aktiva användare',
      churn: 'Churn',
    },
  },

  caseStudies: {
    eyebrow: 'Case',
    title: 'Ingenjörskonst, visad på detaljnivå.',
    lead: 'Demoprojekt som visar hur vi ringar in ett problem, designar arkitekturen och mäter resultatet.',
    tabsLabel: 'Case',
    viewAll: 'Se alla case',
    problem: 'Problem',
    solution: 'Lösning',
    technology: 'Teknik',
    architecture: 'Arkitektur',
    architectureLabel: 'Arkitekturlager för {name}',
    metricsLabel: 'Demomått för {name}',
    mockLabel: 'Illustrativt gränssnitt för konceptprodukten {name}',
    workEyebrow: 'Case',
    workTitle: 'Så förvandlar vi komplexa problem till pålitlig mjukvara.',
    workLead:
      'Casen nedan är demoprojekt som skapats för att illustrera vår process, våra arkitekturbeslut och de resultat vi designar för. De är inte kunduppdrag.',
    workBadge: 'Alla projekt på den här sidan är demoprojekt',
    caseOf: 'Case {i} / {n}',
    items: {
      novaflow: {
        tagline: 'AI-driven plattform för automatisering av arbetsflöden.',
        category: 'AI · Automatisering av arbetsflöden',
        problem:
          'Driftteamen lade timmar varje dag på repetitiva uppgifter — att sortera ärenden, mata in data på nytt mellan system och jaga godkännanden.',
        solution:
          'En central plattform för automatisering av arbetsflöden med AI-driven ärendehantering: inkommande ärenden klassificeras, berikas och dirigeras automatiskt, och människor godkänner bara undantagen.',
        metrics: [
          { value: '68 %', label: 'mindre manuell handläggningstid' },
          { value: '4,2×', label: 'snabbare ärendehantering' },
          { value: '92 %', label: 'av ärendena dirigeras automatiskt' },
        ],
        architecture: [
          { label: 'Klient', nodes: ['Angular-arbetsyta', 'Inkorg för godkännanden'] },
          {
            label: 'Plattform',
            nodes: ['ASP.NET Core API', 'Arbetsflödesmotor', 'AI-ärendeprocessor'],
          },
          { label: 'Data & AI', nodes: ['SQL Server', 'Azure OpenAI', 'Blob-lagring'] },
        ],
      },
      medicore: {
        tagline: 'Plattform för klinikdrift och patienthantering.',
        category: 'Vård · Drift',
        problem:
          'Kliniker med flera mottagningar jonglerade osammanhängande bokningsverktyg, pappersblanketter och sen fakturering, vilket gav långa väntetider och intäktsläckage.',
        solution:
          'En samlad plattform för bokning, digital inskrivning, patientjournaler och faktureringsflöden — med rollbaserad åtkomst och spårbarhet utformade efter vårdens regelkrav.',
        metrics: [
          { value: '37 %', label: 'färre uteblivna besök' },
          { value: '3 min', label: 'genomsnittlig digital inskrivning' },
          { value: '2×', label: 'snabbare inskickning av ersättningsanspråk' },
        ],
        architecture: [
          { label: 'Klient', nodes: ['Webbapp för personal', 'Patientportal'] },
          {
            label: 'Plattform',
            nodes: ['Node.js-tjänster', 'Bokningsmotor', 'Faktureringstjänst'],
          },
          { label: 'Data', nodes: ['PostgreSQL', 'FHIR-gateway', 'Granskningslogg'] },
        ],
      },
      stockline: {
        tagline: 'Molnbaserad kassa och lager för butikskedjor.',
        category: 'Handel · E-handel',
        problem:
          'En växande butikskedja saknade realtidsöverblick över lagret i butikerna, vilket ledde till slutförsäljning, överbeställningar och stillastående kassor vid nätverksavbrott.',
        solution:
          'Ett kassasystem som fungerar offline, med lagersynk i realtid, automatiska leverantörsbeställningar och en central dashboard för varje butik.',
        metrics: [
          { value: '24 %', label: 'färre tillfällen med slut i lager' },
          { value: '0', label: 'förlorade köp vid avbrott' },
          { value: '< 2 s', label: 'lagersynk från butik till moln' },
        ],
        architecture: [
          { label: 'Klient', nodes: ['Kassaterminal', 'Dashboard för butikschef'] },
          { label: 'Plattform', nodes: ['Synktjänst', 'Lager-API', 'Beställningsmotor'] },
          { label: 'Data', nodes: ['PostgreSQL', 'Redis-cache', 'Händelseström'] },
        ],
      },
      'atlas-modernization': {
        tagline: 'Modernisering av äldre ERP till en molnbaserad plattform.',
        category: 'Modernisering · Enterprise',
        problem:
          'Ett 15 år gammalt desktop-ERP hade blivit långsamt, svårt att ändra och omöjligt att nå på distans — men verksamheten var beroende av det varje dag.',
        solution:
          'En stegvis migrering enligt strangler-mönstret till en modulär .NET- och Angular-plattform på Azure, en domän i taget och utan planerat driftstopp.',
        metrics: [
          { value: '60 %', label: 'snabbare rapportgenerering' },
          { value: '0 h', label: 'planerat driftstopp' },
          { value: '5×', label: 'tätare releaser' },
        ],
        architecture: [
          { label: 'Klient', nodes: ['Angular-skal', 'Brygga till äldre system'] },
          { label: 'Plattform', nodes: ['Domäntjänster', 'API-gateway', 'Bakgrundsjobb'] },
          { label: 'Infra', nodes: ['SQL Server', 'AKS-kluster', 'CI/CD-pipelines'] },
        ],
      },
    },
    mocks: {
      automations: 'Automatiseringar',
      running: '12 aktiva',
      flow: ['Ärende in', 'AI klassar', 'Dirigera', 'Godkänn'],
      rows: [
        'Leverantörsonboarding — EU',
        'Fakturatvist #2291',
        'Behörighetsbegäran — Ekonomi',
        'Avtalsförnyelse Q4',
      ],
      aiRouted: 'Dirigerad av AI',
      awaitingApproval: 'Väntar på godkännande',
      completed: 'Slutförd',
      clinicToday: 'Idag · Klinik Nord',
      appointments: '28 bokningar',
      inventoryAll: 'Lager · Alla butiker',
      synced: 'Synkat',
      salesToday: 'Försäljning idag',
      orders: 'Ordrar',
      lowStock: 'Lågt lager',
      skus: ['SKU-1042 Headset', 'SKU-2210 Docka', 'SKU-0871 Kabelkit'],
      migrationProgress: 'Migreringsförlopp',
      domains: '7 / 12 domäner',
      legacy: 'Äldre system',
      modernPlatform: 'Modern plattform',
    },
  },

  ai: {
    eyebrow: 'Artificiell intelligens',
    titleLead: 'Gör din mjukvara',
    titleAccent: 'intelligent.',
    lead: 'AI ska inte vara en funktion som läggs till i slutet. Vi hjälper företag att bygga in intelligenta förmågor direkt i sina produkter, arbetsflöden och processer.',
    cta: 'Utforska AI-integration',
    capabilitiesLabel: 'AI-förmågor',
    demoLabel: 'Illustrativ demo',
    you: 'Du',
    assistant: 'SMR AI',
    stepsLabel: 'Bearbetningssteg',
    items: {
      assistant: {
        name: 'AI-assistenter',
        summary: 'Kontextmedvetna copiloter i din produkt.',
        prompt: 'Sammanfatta öppna eskaleringar för kontot Northwind.',
        steps: ['Hämta kontokontext', 'Fråga ärendesystemets API', 'Rangordna efter allvarlighet'],
        response:
          '3 öppna eskaleringar. Högst prioritet: fakturasynken har fallerat sedan tisdag (P1, ansvarig: Finance Ops). Två P3-ärenden i gränssnittet väntar på bekräftelse från kunden.',
      },
      documents: {
        name: 'Dokumentanalys',
        summary: 'Extrahera, klassificera och validera ostrukturerade dokument.',
        prompt: 'Extrahera nyckelvillkoren ur det uppladdade leverantörsavtalet.',
        steps: ['Tolka 14-sidig PDF', 'Klassificera klausuler', 'Validera mot policy'],
        response:
          'Avtalstid: 24 månader · Betalning 45 dagar netto · Automatisk förlängning med 60 dagars uppsägning. Flagga: ansvarstaket ligger under er standardpolicy.',
      },
      workflows: {
        name: 'Automatiserade arbetsflöden',
        summary: 'Agenter som dirigerar, berikar och agerar på ärenden.',
        prompt: 'Dirigera den här nya begäran om leverantörsonboarding.',
        steps: ['Klassificera ärendet', 'Kontrollera regelefterlevnad', 'Skapa godkännandeuppgift'],
        response:
          'Klassificerat som ”Leverantörsonboarding — EU”. Checklista för regelefterlevnad bifogad. Godkännandeuppgift skapad för Inköp med 2 dagars SLA.',
      },
      search: {
        name: 'Smart sök',
        summary: 'Semantisk sökning över alla kunskapskällor.',
        prompt: 'Hur hanterar vi återbetalningar för årsplaner?',
        steps: ['Vektorisera frågan', 'Sök i 3 kunskapsbaser', 'Ange källor'],
        response:
          'Årsplaner återbetalas proportionerligt inom 30 dagar efter förnyelse. Källa: Faktureringspolicy v4, §2.3 och supporthandboken ”Återbetalningar”.',
      },
      recommendations: {
        name: 'Rekommendationer',
        summary: 'Personliga förslag baserade på beteendesignaler.',
        prompt: 'Vad ska vi erbjuda den här kunden härnäst?',
        steps: ['Läs in köphistorik', 'Poängsätt liknande kohorter', 'Rangordna erbjudanden'],
        response:
          'Främsta förslag: uppgradering till Team-planen (matchningspoäng 0,87). Kunder med liknande användning gick över inom 3 veckor.',
      },
      predictive: {
        name: 'Prediktiv analys',
        summary: 'Förutse efterfrågan, churn och operativa risker.',
        prompt: 'Gör en prognos för lagerefterfrågan nästa månad.',
        steps: [
          'Sammanställ 18 månaders försäljning',
          'Tillämpa säsongsmodell',
          'Beräkna intervall',
        ],
        response:
          'Förväntad efterfrågan +12 % jämfört med föregående månad. 4 SKU:er riskerar att ta slut — förslag på beställningskvantiteter har tagits fram.',
      },
      'nl-interface': {
        name: 'Gränssnitt med naturligt språk',
        summary: 'Låt användare ställa frågor i stället för att bygga frågor.',
        prompt: 'Visa intäkter per region för Q3 jämfört med Q2.',
        steps: ['Översätt till SQL', 'Kör skrivskyddad fråga', 'Skapa diagram'],
        response:
          'Intäkterna ökade totalt 9 % under Q3. EMEA +14 %, Nordamerika +7 %, APAC +4 %. Ett jämförelsediagram har lagts till på din dashboard.',
      },
      support: {
        name: 'AI-driven kundtjänst',
        summary: 'Lös vanliga ärenden direkt och eskalera resten.',
        prompt: 'En kund undrar varför deras order inte har skickats.',
        steps: ['Slå upp ordern', 'Kontrollera transportörens status', 'Skriv svarsutkast'],
        response:
          'Order #48213 är packad och hämtas av transportören idag. Svarsutkast med spårningslänk klart — hög säkerhet, ingen eskalering behövs.',
      },
    },
  },

  technology: {
    eyebrow: 'Teknik',
    title: 'En modern stack, vald med omsorg.',
    lead: 'Varje lager i systemen vi bygger — från AI till infrastruktur — använder beprövad teknik vald för prestanda, förvaltningsbarhet och långsiktigt stöd.',
    tabsLabel: 'Lager i teknikstacken',
    layerOf: 'Lager {i} / {n}',
    layers: {
      ai: {
        name: 'AI',
        description: 'Språkmodeller, sökning och maskininlärnings-API:er invävda i produktlogiken.',
      },
      frontend: {
        name: 'Frontend',
        description: 'Snabba, tillgängliga gränssnitt med komponentarkitektur och stark typning.',
      },
      backend: {
        name: 'Backend',
        description: 'Säkra, vältestade tjänster och API:er byggda för långsiktig förändring.',
      },
      database: {
        name: 'Databas',
        description:
          'Relationella och dokumentbaserade datamodeller optimerade för integritet och prestanda.',
      },
      cloud: {
        name: 'Moln',
        description: 'Molnbaserad arkitektur med säkerhet, skalning och kostnad i fokus.',
      },
      devops: {
        name: 'DevOps',
        description: 'Automatiserade pipelines, containrar och observerbarhet för trygga releaser.',
      },
    },
    notes: {
      Oa: 'GPT-modeller & embeddings',
      Ao: 'LLM-hosting i enterpriseklass',
      Ml: 'Bild, tal & prediktion',
      Ng: 'Strukturerade SPA:er för företag',
      Re: 'Komponerbart UI i alla skalor',
      Nx: 'Serverrendering & edge-leverans',
      As: 'API:er & tjänster med hög genomströmning',
      Nd: 'Realtids- & händelsedrivna tjänster',
      Py: 'Datapipelines & AI-arbetslaster',
      Sq: 'Transaktionell företagsdata',
      Pg: 'Relationsdata + JSON + vektorer',
      My: 'Beprövad lagring i webbskala',
      Mg: 'Flexibla dokumentmodeller',
      Az: 'App Service, AKS, Functions',
      Aw: 'ECS, Lambda, RDS',
      Dk: 'Reproducerbara containrar',
      K8: 'Orkestrering i stor skala',
      Ad: 'Boards, repos & pipelines',
      Gh: 'CI/CD som kod',
    },
  },

  process: {
    eyebrow: 'Process',
    title: 'Från idé till effekt.',
    lead: 'En tydlig och samarbetsinriktad leveransprocess — så att du alltid vet vad som händer, vad som kommer härnäst och varför.',
    outputsLabel: 'Resultat av {title}',
    steps: [
      {
        title: 'Utforska',
        description: 'Förstå verksamheten, användarna och målen.',
        outputs: ['Intervjuer med intressenter', 'Problemformulering', 'Framgångsmått'],
      },
      {
        title: 'Strategi',
        description: 'Fastställ arkitektur, teknik och produktriktning.',
        outputs: ['Teknisk arkitektur', 'Roadmap', 'Leveransplan'],
      },
      {
        title: 'Design',
        description: 'Skapa intuitiva och skalbara upplevelser.',
        outputs: ['Användarflöden', 'Interaktiva prototyper', 'Designsystem'],
      },
      {
        title: 'Utveckling',
        description: 'Bygg produkten med moderna utvecklingsmetoder.',
        outputs: ['Iterativa sprintar', 'Kodgranskning', 'Kontinuerlig integration'],
      },
      {
        title: 'Test',
        description: 'Test av kvalitet, säkerhet, prestanda och tillförlitlighet.',
        outputs: ['Automatiserade testsviter', 'Säkerhetsgranskning', 'Lasttester'],
      },
      {
        title: 'Lansering',
        description: 'Driftsätt och övervaka produktionsmiljön.',
        outputs: ['Release utan driftstopp', 'Övervakning', 'Driftrutiner'],
      },
      {
        title: 'Vidareutveckling',
        description: 'Ständiga förbättringar, optimering och support.',
        outputs: ['Analysgenomgång', 'Optimering', 'Löpande support'],
      },
    ],
  },

  why: {
    eyebrow: 'Varför SMR',
    title: 'Ingenjörskonst byggd för lång sikt.',
    lead: 'Mjukvara är en långsiktig tillgång. Vi bygger den så som du skulle vilja att den förvaltas — noggrant, transparent och med de kommande fem åren i åtanke.',
    items: {
      architecture: {
        title: 'Modern arkitektur',
        description: 'Modulära, väl avgränsade system som är lätta att bygga ut och förstå.',
      },
      code: {
        title: 'Ren, förvaltningsbar kod',
        description:
          'Typad, testad och granskad — kod som ditt framtida team kommer att tacka dig för.',
      },
      security: {
        title: 'Säkerhet från start',
        description:
          'Hotmodellering, minsta möjliga behörighet och säkra standardval från första commit.',
      },
      performance: {
        title: 'Prestandaoptimering',
        description: 'Prestandabudgetar, profilering och cachning inbyggt i leveransen.',
      },
      scale: {
        title: 'Skalbar infrastruktur',
        description:
          'Infrastruktur som växer med efterfrågan — utan att kostnaden växer i samma takt.',
      },
      ai: {
        title: 'AI-förberedd arkitektur',
        description:
          'Ren data och tydliga API:er som gör det enkelt att lägga till intelligenta funktioner.',
      },
      cloud: {
        title: 'Molnbaserade förmågor',
        description: 'Containrar, managerade tjänster och automatisering på Azure och AWS.',
      },
      improvement: {
        title: 'Ständig förbättring',
        description: 'Vi mäter, lär och förfinar långt efter lanseringsdagen.',
      },
      communication: {
        title: 'Transparent kommunikation',
        description: 'Tydlig omfattning, ärliga uppskattningar och synliga framsteg varje vecka.',
      },
    },
  },

  industries: {
    eyebrow: 'Branscher',
    title: 'Mjukvara för alla slags ambitioner.',
    lead: 'Branschkunnig systemutveckling för reglerade, volymintensiva och snabbrörliga branscher — från första MVP till enterpriseskala.',
    items: {
      healthcare: {
        name: 'Vård & hälsa',
        focus: 'Patientflöden, bokning och regelefterlevande data.',
      },
      fintech: {
        name: 'Fintech',
        focus: 'Säkra betalningar, huvudböcker och rapportering i realtid.',
      },
      retail: { name: 'Handel', focus: 'Kassa, lager och omnikanalhandel.' },
      realEstate: {
        name: 'Fastigheter',
        focus: 'Förvaltning av fastigheter, hyresgäster och hyresavtal.',
      },
      logistics: { name: 'Logistik', focus: 'Fordonsspårning, ruttplanering och lagersystem.' },
      education: { name: 'Utbildning', focus: 'Lärplattformar och studentadministration.' },
      manufacturing: {
        name: 'Tillverkning',
        focus: 'Produktionsplanering och data från verkstadsgolvet.',
      },
      professional: {
        name: 'Konsult- & tjänsteföretag',
        focus: 'Kundportaler, fakturering och resursplanering.',
      },
      startups: { name: 'Startups', focus: 'MVP:er byggda för att bli riktiga produkter.' },
      enterprise: { name: 'Storföretag', focus: 'Modernisering och integration i stor skala.' },
    },
  },

  about: {
    eyebrow: 'Om SMR',
    titleLead: 'Teknik är bara värdefull när den skapar',
    titleAccent: 'framsteg.',
    lead: 'SMR Core Technologies hjälper företag att förvandla idéer till pålitliga digitala produkter.',
    text: 'Vi kombinerar systemutveckling, modern arkitektur, molnteknik och artificiell intelligens för att skapa lösningar för dagens företag och morgondagens utmaningar.',
    values: [
      {
        title: 'Framsteg före volym',
        text: 'Vi mäter framgång i de affärsresultat mjukvaran skapar, inte i antalet kodrader vi levererar.',
      },
      {
        title: 'Hantverk som håller',
        text: 'Ren arkitektur och noggrann utveckling, så att din produkt förblir snabb och lätt att förändra i många år.',
      },
      {
        title: 'Partnerskap, inte projekt',
        text: 'Vi finns kvar efter lanseringen — och förbättrar, stöttar och vidareutvecklar det vi bygger tillsammans.',
      },
    ],
  },

  faq: {
    eyebrow: 'Vanliga frågor',
    title: 'Frågor och svar.',
    items: [
      {
        question: 'Vilken typ av mjukvara bygger SMR Core Technologies?',
        answer:
          'Vi bygger skräddarsydda webbapplikationer, mobilappar, desktopmjukvara, SaaS-produkter och AI-drivna system — tillsammans med de API:er, den molninfrastruktur och de integrationer som binder ihop dem.',
      },
      {
        question: 'Kan ni arbeta i vår befintliga kodbas?',
        answer:
          'Ja. En stor del av vårt arbete handlar om att förbättra, bygga ut och modernisera befintliga applikationer. Vi börjar med en granskning av kod och arkitektur och kommer sedan överens om en stegvis plan som undviker störningar.',
      },
      {
        question: 'Hur integrerar ni AI i befintliga produkter?',
        answer:
          'Vi identifierar de arbetsflöden där AI skapar mätbart värde och integrerar sedan modeller som OpenAI eller Azure OpenAI via era befintliga API:er — med sökning över er data, utvärdering, skyddsräcken och kostnadsövervakning.',
      },
      {
        question: 'Vilka tekniker är ni specialiserade på?',
        answer:
          'Vår kärnstack omfattar Angular, React och Next.js i frontend; ASP.NET Core, Node.js och Python i backend; SQL Server och PostgreSQL för data; samt Azure eller AWS med Docker och Kubernetes för infrastruktur.',
      },
      {
        question: 'Hur brukar projekten starta?',
        answer:
          'Med ett kort inledande samtal om dina mål, användare och förutsättningar. Därefter föreslår vi omfattning, arkitektur, tidsplan och en transparent uppskattning innan något utvecklingsarbete påbörjas.',
      },
      {
        question: 'Erbjuder ni support efter lansering?',
        answer:
          'Ja. Vi erbjuder löpande förvaltning, övervakning, prestandaoptimering och vidareutveckling så att din mjukvara fortsätter att bli bättre efter lanseringen.',
      },
    ],
  },

  cta: {
    title: 'Har du en idé värd att bygga?',
    text: 'Låt oss förvandla din idé till mjukvara som skapar verkligt affärsvärde.',
  },

  contact: {
    eyebrow: 'Kontakt',
    title: 'Låt oss bygga något som tar dig framåt.',
    lead: 'Berätta vad du arbetar med. Vi återkommer med genomtänkta frågor, ärliga råd och tydliga nästa steg.',
    nextTitle: 'Så går det till',
    steps: [
      { title: 'Dela din idé', text: 'Berätta om dina mål, användare och tidsplan.' },
      { title: 'Inledande samtal', text: 'Ett 30 minuter långt samtal med en senior utvecklare.' },
      {
        title: 'Tydligt förslag',
        text: 'Omfattning, arkitektur, tidsplan och en transparent uppskattning.',
      },
    ],
    preferEmail: 'Föredrar du e-post?',
    whatsappCeo: 'Eller chatta direkt med vår vd, {name}, på WhatsApp',
    expertMessage: 'Jag vill gärna prata med en expert om ',
    form: {
      fullName: 'Fullständigt namn',
      fullNamePlaceholder: 'Anna Svensson',
      workEmail: 'Jobbmejl',
      workEmailPlaceholder: 'anna@foretag.se',
      company: 'Företag',
      companyPlaceholder: 'Företagsnamn',
      phone: 'Telefon',
      phonePlaceholder: '+46 70 123 45 67',
      optional: 'Valfritt',
      projectType: 'Projekttyp',
      budget: 'Budgetspann',
      message: 'Meddelande',
      messagePlaceholder:
        'Berätta om din produkt, dina mål, din tidsplan och eventuella befintliga system.',
      consentBefore: 'Jag godkänner',
      consentLink: 'integritetspolicyn',
      consentAfter:
        'och samtycker till att SMR Core Technologies kontaktar mig angående den här förfrågan.',
      send: 'Skicka meddelande',
      sending: 'Skickar…',
      note: 'Vi svarar normalt inom en arbetsdag.',
      successTitle: 'Tack, {name} — vi har tagit emot ditt meddelande.',
      successBefore: 'En senior utvecklare går igenom ditt projekt och svarar till',
      successAfter: 'inom en arbetsdag.',
      successSteps: [
        'Vi går igenom dina mål och förutsättningar.',
        'Vi bokar ett 30 minuter långt inledande samtal.',
        'Du får ett avgränsat förslag och en uppskattning.',
      ],
      sendAnother: 'Skicka ett nytt meddelande',
    },
    errors: {
      fullNameRequired: 'Ange ditt fullständiga namn.',
      fullNameTooLong: 'Ange ett kortare namn.',
      workEmailRequired: 'Ange din jobbmejl.',
      workEmailInvalid: 'Ange en giltig e-postadress.',
      companyTooLong: 'Ange ett kortare företagsnamn.',
      phoneInvalid: 'Ange ett giltigt telefonnummer.',
      projectTypeRequired: 'Välj en projekttyp.',
      budgetRequired: 'Välj ett budgetspann.',
      messageTooShort: 'Berätta lite mer (minst {min} tecken).',
      messageTooLong: 'Håll meddelandet under {max} tecken.',
      consentRequired: 'Godkänn integritetspolicyn så att vi kan svara dig.',
      reviewForm: 'Vissa uppgifter behöver åtgärdas. Gå igenom formuläret.',
      network: 'Nätverksfel — kontrollera din anslutning och försök igen.',
      deliveryFailed: 'Vi kunde inte skicka ditt meddelande just nu. Försök igen om en stund.',
    },
    projectTypes: {
      'web-application': 'Webbapplikation',
      'mobile-application': 'Mobilapp',
      'desktop-application': 'Desktopapplikation',
      'ai-integration': 'AI-integration',
      'saas-product': 'SaaS-produkt',
      'cloud-devops': 'Moln / DevOps',
      'software-modernization': 'Modernisering av mjukvara',
      'support-maintenance': 'Support & förvaltning',
      other: 'Annat',
    },
    budgets: {
      'under-5k': 'Under $5K',
      '5k-15k': '$5K–$15K',
      '15k-50k': '$15K–$50K',
      '50k-plus': '$50K+',
      'not-sure': 'Vet inte än',
    },
  },

  insights: {
    eyebrow: 'Insikter',
    title: 'Tankar om att bygga mjukvara som håller.',
    lead: 'Perspektiv på utveckling, arkitektur, AI och modernisering — för dig som bygger och köper mjukvara.',
    latest: 'Senaste artiklarna',
    more: 'Fler insikter',
    minRead: '{n} min läsning',
    demoArticle: 'Demoartikel',
    disclaimer: 'Detta är exempelinnehåll som skapats i demonstrationssyfte.',
    categories: {
      AI: 'AI',
      Engineering: 'Utveckling',
      Architecture: 'Arkitektur',
      Modernization: 'Modernisering',
      Cloud: 'Moln',
      Security: 'Säkerhet',
    },
    articles: {
      'how-ai-is-changing-modern-software-development': {
        title: 'Så förändrar AI modern mjukvaruutveckling',
        excerpt:
          'AI förändrar både hur mjukvara byggs och vad mjukvara kan göra. Här är vad det innebär för produktteam i praktiken.',
        sections: [
          {
            heading: 'Två skiften samtidigt',
            paragraphs: [
              'AI förändrar mjukvaruutvecklingen i två riktningar samtidigt. Utvecklingsteam använder AI-stödda verktyg för att skriva, granska och testa kod snabbare, samtidigt som produkterna i allt högre grad levereras med intelligenta förmågor — assistenter, sök, sammanfattning och automatisering.',
              'De team som får ut mest värde behandlar dessa som separata discipliner. Utvecklarverktyg är en produktivitetsfråga; AI i produkten är en arkitekturfråga.',
            ],
          },
          {
            heading: 'AI-funktioner är systemdesignproblem',
            paragraphs: [
              'En användbar AI-funktion är sällan ett enda modellanrop. Den kräver ren data, sökning i rätt källor, utvärdering för att mäta kvalitet, skyddsräcken, reservlösningar och kostnadskontroll.',
              'Därför designar vi AI-förmågor som fullvärdiga delar av arkitekturen i stället för funktioner som skruvas på i slutet.',
            ],
          },
          {
            heading: 'Var ska man börja?',
            paragraphs: [
              'Börja med ett arbetsflöde som är repetitivt, mätbart och redan väl förstått av ditt team. Leverera en avgränsad version, mät den mot den nuvarande processen och bygg vidare utifrån resultaten.',
            ],
          },
        ],
      },
      'building-scalable-web-applications-in-2026': {
        title: 'Att bygga skalbara webbapplikationer 2026',
        excerpt:
          'Skalbarhet handlar mindre om ren trafik och mer om hur väl ditt system — och ditt team — hanterar förändring.',
        sections: [
          {
            heading: 'Skala är ett produktbeslut',
            paragraphs: [
              'De flesta applikationer möter aldrig extrem trafik, men alla applikationer möter växande komplexitet. En skalbar arkitektur gör att nya funktioner förblir billiga att lägga till i takt med att produkten mognar.',
            ],
          },
          {
            heading: 'Praktiska grundstenar',
            paragraphs: [
              'Serverrendering och edge-cachning för snabba första laddningar. Typade API:er mellan frontend och backend. Tydliga modulgränser. Bakgrundsjobb för långsamt arbete. Observerbarhet från dag ett.',
              'Inget av detta är exotiskt — disciplinen ligger i att tillämpa det konsekvent.',
            ],
          },
        ],
      },
      'when-should-a-business-modernize-legacy-software': {
        title: 'När bör ett företag modernisera äldre mjukvara?',
        excerpt:
          'Äldre system driver ofta verksamheten. Frågan är inte om man ska modernisera, utan när och hur man gör det på ett säkert sätt.',
        sections: [
          {
            heading: 'Tecken på att det är dags',
            paragraphs: [
              'Ändringar tar veckor i stället för dagar. Bara en eller två personer förstår systemet. Säkerhetsuppdateringar finns inte längre för plattformen. Integrationer kräver manuella nödlösningar.',
            ],
          },
          {
            heading: 'Modernisera stegvis',
            paragraphs: [
              'Att skriva om allt på en gång innebär enorma risker. Strangler-mönstret — att ersätta en förmåga i taget bakom ett stabilt gränssnitt — låter verksamheten fortsätta medan plattformen utvecklas.',
            ],
          },
        ],
      },
      'angular-vs-react-for-enterprise-applications': {
        title: 'Angular vs React för företagsapplikationer',
        excerpt:
          'Båda är utmärkta. Rätt val beror på ditt team, dina förutsättningar och hur mycket inbyggd struktur du vill ha.',
        sections: [
          {
            heading: 'Struktur kontra flexibilitet',
            paragraphs: [
              'Angular är ett komplett ramverk med starka konventioner för routing, formulär, dependency injection och testning — värdefullt för stora team som vill ha enhetlighet.',
              'React är ett fokuserat UI-bibliotek med ett enormt ekosystem. Tillsammans med ett ramverk som Next.js ger det flexibilitet och utmärkta renderingsalternativ.',
            ],
          },
          {
            heading: 'Så fattar vi beslutet',
            paragraphs: [
              'Vi väger in teamets befintliga kompetens, produktens karaktär, långsiktig förvaltning och integrationsbehov. Båda valen skalar utan problem — om de görs rätt.',
            ],
          },
        ],
      },
      'building-secure-apis-with-aspnet-core': {
        title: 'Att bygga säkra API:er med ASP.NET Core',
        excerpt:
          'En praktisk checklista för autentisering, auktorisering, validering och observerbarhet i produktions-API:er.',
        sections: [
          {
            heading: 'Säkra standardval',
            paragraphs: [
              'Använd standardbaserad autentisering som OpenID Connect, upprätthåll auktorisering med policyer i stället för utspridda kontroller och validera all indata vid systemgränsen.',
            ],
          },
          {
            heading: 'Försvar på djupet',
            paragraphs: [
              'Inför rate limiting, förvara hemligheter i ett hanterat valv, logga säkerhetsrelevanta händelser och kör beroendeskanning i CI. Säkerhet är en egenskap hos hela leveransprocessen.',
            ],
          },
        ],
      },
      'how-cloud-architecture-improves-scalability': {
        title: 'Så förbättrar molnarkitektur skalbarheten',
        excerpt:
          'Elastisk infrastruktur är bara en del av historien. God molnarkitektur gör skalning förutsägbar och prisvärd.',
        sections: [
          {
            heading: 'Bortom autoskalning',
            paragraphs: [
              'Managerade databaser, köer och cacher låter team skala enskilda flaskhalsar i stället för hela system. Infrastruktur som kod gör miljöerna reproducerbara.',
            ],
          },
          {
            heading: 'Kostnad är en designparameter',
            paragraphs: [
              'Rätt dimensionering, cachning och asynkron bearbetning håller kostnaderna i proportion till värdet. Vi behandlar molnkostnader som ett mått att följa upp, inte en överraskning att förklara.',
            ],
          },
        ],
      },
    },
  },

  careers: {
    eyebrow: 'Karriär',
    title: 'Bygg mjukvaran som företag är beroende av.',
    lead: 'Vi vill alltid träffa eftertänksamma utvecklare och designers som bryr sig om hantverk, tydlighet och effekt.',
    principles: [
      {
        title: 'Ägarskap',
        text: 'Utvecklare äger problemen hela vägen — från idé till produktion.',
      },
      {
        title: 'Hantverk',
        text: 'Kodgranskning, testning och designkvalitet är en del av jobbet, inte extra.',
      },
      {
        title: 'Utveckling',
        text: 'Moderna stackar, verkliga arkitekturbeslut och tid att lära sig.',
      },
    ],
    openRoles: 'Lediga tjänster',
    empty:
      'Just nu finns inga lediga tjänster. Vill du bli aktuell för framtida roller? Skicka en kort presentation och en länk till ditt arbete.',
    introduce: 'Presentera dig',
    emailSubject: 'Karriär',
  },

  legal: {
    eyebrow: 'Juridiskt',
    lastUpdated: 'Senast uppdaterad',
    badge: 'Mall — inväntar juridisk granskning',
    documents: {
      privacy: {
        title: 'Integritetspolicy',
        description: 'Hur SMR Core Technologies samlar in, använder och skyddar personuppgifter.',
        sections: [
          {
            heading: 'Uppgifter vi samlar in',
            body: 'När du kontaktar oss samlar vi in de uppgifter du lämnar — till exempel namn, e-postadress till jobbet, företag, telefonnummer och projektinformation — så att vi kan besvara din förfrågan.',
          },
          {
            heading: 'Hur vi använder uppgifterna',
            body: 'Vi använder dina uppgifter enbart för att besvara din förfrågan, tillhandahålla våra tjänster och förbättra vår webbplats. Vi säljer inte personuppgifter.',
          },
          {
            heading: 'Lagring av uppgifter',
            body: 'Vi sparar uppgifter från förfrågningar endast så länge som behövs för att besvara dem och upprätthålla en affärsrelation, eller så länge som lagen kräver.',
          },
          {
            heading: 'Dina rättigheter',
            body: 'Du kan när som helst begära tillgång till, rättelse av eller radering av dina personuppgifter genom att kontakta oss.',
          },
        ],
      },
      terms: {
        title: 'Villkor',
        description: 'Villkor för användning av SMR Core Technologies webbplats.',
        sections: [
          {
            heading: 'Användning av webbplatsen',
            body: 'Den här webbplatsen ger allmän information om våra tjänster. Innehållet kan ändras utan föregående meddelande och utgör inte ett bindande erbjudande.',
          },
          {
            heading: 'Demoinnehåll',
            body: 'Case, mätvärden, konceptprojekt och artiklar som är markerade som demoinnehåll är illustrativa och representerar inte faktiska kunduppdrag eller resultat.',
          },
          {
            heading: 'Immateriella rättigheter',
            body: 'Design, text och grafik på den här webbplatsen tillhör SMR Core Technologies om inget annat anges.',
          },
          {
            heading: 'Ansvarsbegränsning',
            body: 'Informationen på den här webbplatsen tillhandahålls i befintligt skick (”as is”) utan garantier av något slag.',
          },
        ],
      },
      cookies: {
        title: 'Cookiepolicy',
        description: 'Hur SMR Core Technologies webbplats använder cookies och lokal lagring.',
        sections: [
          {
            heading: 'Endast nödvändig lagring',
            body: 'Den här webbplatsen använder inga cookies för annonsering eller spårning. Den sparar två inställningar i din webbläsare: ditt valda färgtema (lokal lagring) och ditt valda språk (en förstapartscookie).',
          },
          {
            heading: 'Hantera inställningar',
            body: 'Du kan när som helst rensa dessa via webbläsarens inställningar. Webbplatsen följer då ditt systemtema och identifierar ditt språk automatiskt.',
          },
        ],
      },
    },
  },

  notFound: {
    code: 'Fel 404',
    title: 'Den här sidan har flyttats — eller har aldrig funnits.',
    text: 'Länken kan vara inaktuell. Vi hjälper dig tillbaka på rätt spår.',
    home: 'Tillbaka till startsidan',
    contact: 'Kontakta oss',
  },
};
