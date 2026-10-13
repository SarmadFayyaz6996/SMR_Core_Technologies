import type { Dictionary } from './en';

export const fr: Dictionary = {
  meta: {
    siteDescription:
      'SMR Core Technologies est une entreprise de développement de logiciels sur mesure qui conçoit des applications web, mobiles, desktop, SaaS et IA hautement performantes pour les entreprises ambitieuses.',
    homeTitle: 'SMR Core Technologies — Développement de logiciels sur mesure',
    contactTitle: 'Contact — Lancer un projet logiciel',
    contactDescription:
      'Parlez-nous de votre projet web, mobile, IA ou SaaS. SMR Core Technologies étudie vos objectifs et vous répond avec les prochaines étapes et une estimation transparente.',
    workTitle: 'Réalisations — Études de cas de démonstration',
    workDescription:
      "Des études de cas de démonstration qui montrent comment SMR Core Technologies aborde le logiciel sur mesure, l'intégration de l'IA, les plateformes SaaS et la modernisation de l'existant — du problème à l'architecture, jusqu'aux résultats.",
    insightsTitle: 'Insights — Ingénierie logicielle, IA et cloud',
    insightsDescription:
      "Des analyses concrètes sur le développement de logiciels sur mesure, l'intégration de l'IA, les applications web évolutives, l'architecture cloud et la modernisation de l'existant, par SMR Core Technologies.",
    careersTitle: 'Carrières',
    careersDescription:
      'Rejoignez SMR Core Technologies — ingénieurs, designers et esprits pragmatiques qui construisent des logiciels web, mobiles, cloud et IA modernes.',
    notFoundTitle: 'Page introuvable',
    ogAlt: 'SMR Core Technologies — Des logiciels qui font avancer votre entreprise.',
  },

  common: {
    skipToContent: 'Aller au contenu',
    startProject: 'Lancer un projet',
    exploreWork: 'Découvrir nos réalisations',
    talkToExpert: 'Parler à un expert',
    letsTalk: 'Parlons-en',
    learnMore: 'En savoir plus',
    demoProject: 'Projet de démonstration',
    conceptProject: 'Projet concept',
    demoMetrics: 'Indicateurs de démonstration',
    demoContent: 'Contenu de démonstration',
    home: 'Accueil',
    breadcrumb: "Fil d'Ariane",
    tagline: 'Des logiciels qui font avancer votre entreprise.',
  },

  nav: {
    services: 'Services',
    solutions: 'Solutions',
    industries: 'Secteurs',
    work: 'Réalisations',
    technology: 'Technologies',
    about: 'À propos',
    primaryLabel: 'Principal',
    mobileLabel: 'Mobile',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    themeToLight: 'Passer au thème clair',
    themeToDark: 'Passer au thème sombre',
    language: 'Langue',
    chooseLanguage: 'Choisir la langue',
  },

  footer: {
    navLabel: 'Pied de page',
    company: 'Entreprise',
    services: 'Services',
    resources: 'Ressources',
    about: 'À propos',
    work: 'Réalisations',
    careers: 'Carrières',
    contact: 'Contact',
    webDevelopment: 'Développement web',
    mobileDevelopment: 'Développement mobile',
    ai: 'IA',
    saas: 'SaaS',
    cloud: 'Cloud',
    softwareSupport: 'Support logiciel',
    blog: 'Blog',
    insights: 'Insights',
    faq: 'FAQ',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions générales',
    cookies: 'Politique relative aux cookies',
    rights: '© {year} {name}. Tous droits réservés.',
    socialOn: '{name} sur {network}',
  },

  hero: {
    pillTag: 'Nouveau',
    pill: "Intégration de l'IA dans vos produits existants",
    titleLead: 'Des logiciels qui font',
    titleAccent: 'avancer votre entreprise.',
    lead: 'Nous concevons et développons des logiciels web, mobiles, desktop et IA hautement performants qui aident les entreprises ambitieuses à se construire, à croître et à évoluer.',
    capabilitiesLabel: 'Ce que nous construisons',
    capabilities: ['Web', 'Mobile', 'Desktop', 'IA', 'Cloud'],
    visualLabel:
      "Illustration d'un cœur logiciel connecté à des modules IA, web, API, cloud, mobile et desktop, avec des données circulant entre eux.",
    deploy: 'Déploiement · production',
    ready: 'Prêt',
    latency: 'Latence p95',
  },

  principles: {
    title: "Des principes d'ingénierie éprouvés",
    techTitle: 'Les technologies que nous utilisons',
    items: {
      architecture: 'Architecture moderne',
      security: 'Sécurité avant tout',
      cloud: 'Prêt pour le cloud',
      ai: "Propulsé par l'IA",
      performance: 'Axé performance',
      scale: 'Conçu pour évoluer',
    },
  },

  services: {
    eyebrow: 'Services',
    title: 'Des technologies qui résolvent de vrais enjeux métier.',
    lead: 'Une ingénierie logicielle de bout en bout — du premier prototype aux systèmes de production conçus pour évoluer.',
    pageEyebrow: 'Service',
    seeDemoWork: 'Voir les réalisations de démonstration',
    deliverTitle: 'Ce que nous livrons',
    techTitle: 'Technologies typiques',
    relatedTitle: 'Services associés',
    items: {
      'web-application-development': {
        title: "Développement d'applications web",
        summary: 'Des applications web performantes, pensées pour vos besoins métier.',
        description:
          'Des portails clients aux plateformes internes complexes, nous développons des applications web rapides, accessibles et prêtes à évoluer — avec une architecture claire que vos équipes pourront maintenir pendant des années.',
        deliverables: [
          'Cadrage produit et architecture technique',
          'Interfaces responsives et accessibles',
          'API sécurisées et bien documentées',
          'Budgets de performance et optimisation des Core Web Vitals',
          'Tests automatisés et CI/CD dès le premier jour',
        ],
      },
      'mobile-application-development': {
        title: "Développement d'applications mobiles",
        summary: 'Des expériences mobiles modernes pour iOS et Android.',
        description:
          "Nous concevons et développons des applications mobiles à l'expérience native, qui fonctionnent hors ligne quand il le faut et s'intègrent proprement à vos systèmes et API existants.",
        deliverables: [
          "Stratégie d'application native et multiplateforme",
          'Données offline-first et synchronisation',
          'Notifications push et liens profonds',
          "Gestion des publications sur l'App Store et Google Play",
          'Suivi des plantages et analytique produit',
        ],
      },
      'desktop-applications': {
        title: 'Applications desktop',
        summary: 'Des logiciels desktop fiables pour les flux de travail et opérations complexes.',
        description:
          'Pour les usages qui exigent des performances locales, un accès au matériel ou une fiabilité hors ligne, nous créons des logiciels desktop stables, sécurisés et faciles à déployer dans toute votre organisation.',
        deliverables: [
          'Versions Windows, macOS et multiplateformes',
          'Intégration du matériel et des périphériques',
          'Mise à jour automatique et déploiement silencieux',
          'Données locales en priorité avec synchronisation cloud',
          "Migration depuis d'anciens outils desktop",
        ],
      },
      'ai-integration': {
        title: "Intégration de l'IA",
        summary:
          "Intégrez l'IA à vos logiciels existants pour automatiser vos processus et créer des expériences intelligentes.",
        description:
          "Nous apportons une IA concrète et mesurable aux produits et processus dont vous disposez déjà — assistants, analyse documentaire, recherche intelligente et automatisation — avec les garde-fous, l'évaluation et la maîtrise des coûts qu'exigent les systèmes en production.",
        deliverables: [
          "Évaluation des opportunités liées à l'IA",
          'Génération augmentée par récupération (RAG) sur vos données',
          'Agents et automatisation des processus',
          'Évaluation, supervision et garde-fous de sécurité',
          'Optimisation des coûts et de la latence',
        ],
      },
      'saas-development': {
        title: 'Développement SaaS',
        summary:
          'Créez des produits logiciels par abonnement évolutifs, du concept à la production.',
        description:
          "Nous aidons fondateurs et équipes produit à faire passer leur SaaS de l'idée aux premiers clients payants — architecture multi-tenant, facturation, onboarding et fondations opérationnelles pour passer à l'échelle.",
        deliverables: [
          'Cadrage du MVP et feuille de route produit',
          'Architecture multi-tenant',
          "Facturation et formules d'abonnement",
          "Contrôle d'accès par rôles et SSO",
          "Analytique d'usage et observabilité",
        ],
      },
      'api-system-integration': {
        title: 'API et intégration de systèmes',
        summary: 'Connectez vos applications, vos services et vos plateformes tierces.',
        description:
          "Nous concevons des API et des couches d'intégration robustes qui permettent à vos systèmes d'échanger des données de manière fiable — ERP, CRM, prestataires de paiement, plateformes de santé et de logistique, et bien plus.",
        deliverables: [
          "Conception d'API REST et GraphQL",
          "Intégration d'API tierces",
          'Intégration événementielle et par messages',
          'Sécurité, versioning et documentation des API',
          'Synchronisation des données et ETL',
        ],
      },
      'cloud-devops': {
        title: 'Cloud et DevOps',
        summary:
          'Déploiement automatisé, infrastructure cloud, supervision et environnements évolutifs.',
        description:
          "Nous bâtissons des fondations cloud sécurisées, observables et maîtrisées en coûts — avec une infrastructure as code et des pipelines qui font de chaque mise en production une routine plutôt qu'un risque.",
        deliverables: [
          'Architecture cloud sur Azure et AWS',
          'Infrastructure as code',
          'Pipelines CI/CD',
          'Conteneurisation et Kubernetes',
          'Supervision, alertes et optimisation des coûts',
        ],
      },
      'software-support-modernization': {
        title: 'Support et modernisation logicielle',
        summary: 'Améliorez, maintenez et modernisez vos applications existantes.',
        description:
          "Nous prenons en charge vos logiciels existants — en les stabilisant, en améliorant leurs performances et en modernisant progressivement les systèmes hérités, sans perturber l'activité qui en dépend.",
        deliverables: [
          "Audit du code et de l'architecture",
          "Modernisation progressive de l'existant",
          "Mises à niveau des frameworks et des environnements d'exécution",
          'Correction des problèmes de performance et de sécurité',
          'Maintenance continue avec des SLA clairs',
        ],
      },
    },
  },

  solutions: {
    eyebrow: 'Solutions',
    title: "Pensées pour les entreprises d'aujourd'hui.",
    lead: "Des produits concepts qui illustrent notre approche des plateformes métier courantes — chacun conçu, architecturé et prêt à s'adapter à votre domaine.",
    capabilitiesLabel: 'Fonctionnalités de {title}',
    items: {
      assistant: {
        title: 'Assistant métier IA',
        description:
          "Un assistant métier propulsé par l'IA, intégré aux processus de l'entreprise.",
        capabilities: [
          'Requêtes en langage naturel',
          'Questions-réponses sur documents',
          'Automatisation des actions',
        ],
      },
      kanban: {
        title: 'Gestion de projet intelligente',
        description: 'Une plateforme de gestion de projet avec collaboration en temps réel.',
        capabilities: ['Tableaux en direct', 'Planification des ressources', 'Suivi du temps'],
      },
      health: {
        title: 'Plateforme de gestion de santé',
        description: 'Une plateforme moderne de gestion des parcours de soins et des patients.',
        capabilities: ['Prise de rendez-vous', 'Dossiers patients', 'Processus de facturation'],
      },
      pos: {
        title: 'Caisse et stocks pour le retail',
        description: 'Une plateforme cloud de caisse et de gestion des stocks.',
        capabilities: [
          'Stocks multi-magasins',
          'Encaissement hors ligne',
          'Commandes fournisseurs',
        ],
      },
      property: {
        title: 'Plateforme de gestion immobilière',
        description: 'Gestion des biens, des locataires, des paiements et de la maintenance.',
        capabilities: ['Portail locataire', 'Encaissement des loyers', 'Tickets de maintenance'],
      },
      analytics: {
        title: 'Tableau de bord décisionnel',
        description: 'Analytique en temps réel et visualisation des KPI.',
        capabilities: ['KPI en direct', 'Rapports personnalisés', 'Prévisions'],
      },
    },
    visuals: {
      chatQuestion: 'Quelles factures sont en retard cette semaine ?',
      chatAnswer: '4 factures sont en retard, pour un total de 18 420 $.',
      sendReminders: 'Envoyer des relances',
      viewReport: 'Voir le rapport',
      todo: 'À faire',
      inProgress: 'En cours',
      done: 'Terminé',
      posItems: ['Casque sans fil', 'Station USB-C', 'Kit de câbles'],
      total: 'Total',
      stockSynced: 'Stock synchronisé · 3 magasins',
      revenue: "Chiffre d'affaires",
      activeUsers: 'Utilisateurs actifs',
      churn: 'Attrition',
    },
  },

  caseStudies: {
    eyebrow: 'Études de cas',
    title: "L'ingénierie, dans le détail.",
    lead: "Des études de cas de démonstration qui montrent comment nous cadrons un problème, concevons l'architecture et mesurons les résultats.",
    tabsLabel: 'Études de cas',
    viewAll: 'Voir toutes les réalisations',
    problem: 'Problème',
    solution: 'Solution',
    technology: 'Technologies',
    architecture: 'Architecture',
    architectureLabel: "Niveaux d'architecture de {name}",
    metricsLabel: 'Indicateurs de démonstration de {name}',
    mockLabel: 'Interface illustrative du produit concept {name}',
    workEyebrow: 'Réalisations',
    workTitle: 'Comment nous transformons des problèmes complexes en logiciels fiables.',
    workLead:
      "Les études de cas ci-dessous sont des projets de démonstration conçus pour illustrer notre méthode, nos choix d'architecture et les résultats que nous visons. Il ne s'agit pas de missions clients.",
    workBadge: 'Tous les projets de cette page sont des démonstrations',
    caseOf: 'Cas {i} / {n}',
    items: {
      novaflow: {
        tagline: "Plateforme d'automatisation des processus propulsée par l'IA.",
        category: 'IA · Automatisation des processus',
        problem:
          "Les équipes opérationnelles passaient chaque jour des heures sur des tâches répétitives — trier les demandes, ressaisir des données d'un système à l'autre et relancer les validations.",
        solution:
          "Une plateforme centralisée d'automatisation des processus avec traitement des tâches par IA : les demandes entrantes sont classées, enrichies et routées automatiquement, et seules les exceptions sont validées par un humain.",
        metrics: [
          { value: '68 %', label: 'de temps de traitement manuel en moins' },
          { value: '4,2×', label: 'plus rapide pour traiter les demandes' },
          { value: '92 %', label: 'des demandes routées automatiquement' },
        ],
        architecture: [
          { label: 'Client', nodes: ['Espace de travail Angular', 'Boîte de validation'] },
          {
            label: 'Plateforme',
            nodes: ['API ASP.NET Core', 'Moteur de workflows', 'Processeur de tâches IA'],
          },
          { label: 'Données et IA', nodes: ['SQL Server', 'Azure OpenAI', 'Stockage Blob'] },
        ],
      },
      medicore: {
        tagline: 'Plateforme de gestion des cliniques et des patients.',
        category: 'Santé · Opérations',
        problem:
          "Des cliniques multisites jonglaient entre des outils de planification déconnectés, des formulaires d'admission papier et une facturation tardive, ce qui allongeait l'attente et entraînait des pertes de revenus.",
        solution:
          "Une plateforme unifiée pour la prise de rendez-vous, l'admission numérique, les dossiers patients et la facturation — avec contrôle d'accès par rôles et pistes d'audit conçus pour la conformité dans le secteur de la santé.",
        metrics: [
          { value: '37 %', label: 'de rendez-vous manqués en moins' },
          { value: '3 min', label: 'pour une admission numérique en moyenne' },
          { value: '2×', label: 'plus rapide pour soumettre les demandes de remboursement' },
        ],
        architecture: [
          { label: 'Client', nodes: ['Application web du personnel', 'Portail patient'] },
          {
            label: 'Plateforme',
            nodes: ['Services Node.js', 'Moteur de planification', 'Service de facturation'],
          },
          { label: 'Données', nodes: ['PostgreSQL', 'Passerelle FHIR', "Journal d'audit"] },
        ],
      },
      stockline: {
        tagline: 'Caisse et stocks dans le cloud pour le retail multi-magasins.',
        category: 'Retail · Commerce',
        problem:
          "Une enseigne en pleine croissance n'avait aucune vue en temps réel des stocks de ses magasins, ce qui provoquait ruptures, surcommandes et caisses à l'arrêt lors des pannes réseau.",
        solution:
          'Une caisse capable de fonctionner hors ligne, avec synchronisation des stocks en temps réel, réapprovisionnement fournisseur automatisé et un tableau de bord central pour chaque point de vente.',
        metrics: [
          { value: '24 %', label: 'de ruptures de stock en moins' },
          { value: '0', label: 'encaissement perdu à cause des pannes' },
          { value: '< 2 s', label: 'de synchronisation des stocks magasin-cloud' },
        ],
        architecture: [
          { label: 'Client', nodes: ['Terminal de caisse', 'Tableau de bord manager'] },
          {
            label: 'Plateforme',
            nodes: [
              'Service de synchronisation',
              "API d'inventaire",
              'Moteur de réapprovisionnement',
            ],
          },
          { label: 'Données', nodes: ['PostgreSQL', 'Cache Redis', "Flux d'événements"] },
        ],
      },
      'atlas-modernization': {
        tagline: "Modernisation d'un ERP historique vers une plateforme cloud-native.",
        category: 'Modernisation · Grands comptes',
        problem:
          "Un ERP desktop vieux de 15 ans était devenu lent, difficile à faire évoluer et inaccessible à distance — alors que toute l'activité en dépendait au quotidien.",
        solution:
          'Une migration progressive selon le pattern « strangler » vers une plateforme modulaire .NET et Angular sur Azure, un domaine à la fois, sans aucune interruption planifiée.',
        metrics: [
          { value: '60 %', label: 'plus rapide pour générer les rapports' },
          { value: '0 h', label: "d'interruption planifiée" },
          { value: '5×', label: 'plus de mises en production' },
        ],
        architecture: [
          { label: 'Client', nodes: ['Shell Angular', "Passerelle vers l'existant"] },
          {
            label: 'Plateforme',
            nodes: ['Services métier', 'Passerelle API', 'Tâches en arrière-plan'],
          },
          { label: 'Infra', nodes: ['SQL Server', 'Cluster AKS', 'Pipelines CI/CD'] },
        ],
      },
    },
    mocks: {
      automations: 'Automatisations',
      running: '12 en cours',
      flow: ['Demande reçue', 'Classement IA', 'Routage', 'Validation'],
      rows: [
        'Onboarding fournisseur — UE',
        'Litige facture n° 2291',
        "Demande d'accès — Finance",
        'Renouvellement de contrat T4',
      ],
      aiRouted: "Routé par l'IA",
      awaitingApproval: 'En attente de validation',
      completed: 'Terminé',
      clinicToday: "Aujourd'hui · Clinique Nord",
      appointments: '28 rendez-vous',
      inventoryAll: 'Stocks · Tous les magasins',
      synced: 'Synchronisé',
      salesToday: 'Ventes du jour',
      orders: 'Commandes',
      lowStock: 'Stock faible',
      skus: ['SKU-1042 Casque', 'SKU-2210 Station', 'SKU-0871 Kit de câbles'],
      migrationProgress: 'Avancement de la migration',
      domains: '7 / 12 domaines',
      legacy: 'Existant',
      modernPlatform: 'Plateforme moderne',
    },
  },

  ai: {
    eyebrow: 'Intelligence artificielle',
    titleLead: 'Rendez vos logiciels',
    titleAccent: 'intelligents.',
    lead: "L'IA ne devrait pas être une fonctionnalité ajoutée à la dernière minute. Nous aidons les entreprises à intégrer l'intelligence directement au cœur de leurs produits, de leurs processus et de leurs opérations.",
    cta: "Découvrir l'intégration de l'IA",
    capabilitiesLabel: 'Capacités IA',
    demoLabel: 'Démo illustrative',
    you: 'Vous',
    assistant: 'SMR AI',
    stepsLabel: 'Étapes de traitement',
    items: {
      assistant: {
        name: 'Assistants IA',
        summary: 'Des copilotes contextuels au sein de votre produit.',
        prompt: 'Résume les escalades ouvertes pour le compte Northwind.',
        steps: [
          'Identifier le contexte du compte',
          "Interroger l'API de ticketing",
          'Classer par gravité',
        ],
        response:
          "3 escalades ouvertes. Priorité maximale : la synchronisation des factures échoue depuis mardi (P1, responsable : Finance Ops). Deux anomalies d'interface P3 attendent la confirmation du client.",
      },
      documents: {
        name: 'Analyse documentaire',
        summary: 'Extrayez, classez et validez vos documents non structurés.',
        prompt: 'Extrais les conditions clés du contrat fournisseur importé.',
        steps: [
          'Analyser le PDF de 14 pages',
          'Classer les clauses',
          'Vérifier la conformité à la politique',
        ],
        response:
          'Durée : 24 mois · Paiement à 45 jours · Reconduction tacite avec préavis de 60 jours. Alerte : le plafond de responsabilité est inférieur au seuil de votre politique standard.',
      },
      workflows: {
        name: 'Processus automatisés',
        summary: 'Des agents qui routent, enrichissent et traitent les demandes.',
        prompt: "Route cette nouvelle demande d'onboarding fournisseur.",
        steps: [
          'Classer la demande',
          'Vérifier les règles de conformité',
          'Créer la tâche de validation',
        ],
        response:
          'Classée comme « Onboarding fournisseur — UE ». Checklist de conformité jointe. Tâche de validation créée pour les Achats avec un SLA de 2 jours.',
      },
      search: {
        name: 'Recherche intelligente',
        summary: 'Une recherche sémantique sur toutes vos sources de connaissances.',
        prompt: 'Comment gérons-nous les remboursements des abonnements annuels ?',
        steps: [
          'Vectoriser la requête',
          'Interroger 3 bases de connaissances',
          'Citer les sources',
        ],
        response:
          'Les abonnements annuels sont remboursables au prorata dans les 30 jours suivant le renouvellement. Sources : Politique de facturation v4, §2.3 et guide du support « Remboursements ».',
      },
      recommendations: {
        name: 'Recommandations',
        summary: 'Des suggestions personnalisées à partir des signaux comportementaux.',
        prompt: 'Que devrions-nous proposer ensuite à ce client ?',
        steps: [
          "Charger l'historique d'achats",
          'Évaluer des cohortes similaires',
          'Classer les offres',
        ],
        response:
          "Suggestion principale : passer à la formule Team (score de correspondance 0,87). Les clients au profil d'usage similaire l'ont adoptée en moins de 3 semaines.",
      },
      predictive: {
        name: 'Analytique prédictive',
        summary: "Anticipez la demande, l'attrition et les risques opérationnels.",
        prompt: 'Prévois la demande de stock pour le mois prochain.',
        steps: [
          'Agréger 18 mois de ventes',
          'Appliquer le modèle de saisonnalité',
          'Estimer les fourchettes',
        ],
        response:
          'Demande attendue : +12 % sur un mois. 4 SKU risquent la rupture — les quantités de réapprovisionnement recommandées ont été préparées.',
      },
      'nl-interface': {
        name: 'Interfaces en langage naturel',
        summary: "Vos utilisateurs posent des questions au lieu d'écrire des requêtes.",
        prompt: "Affiche le chiffre d'affaires par région au T3 par rapport au T2.",
        steps: ['Traduire en SQL', 'Exécuter une requête en lecture seule', 'Générer le graphique'],
        response:
          "Le chiffre d'affaires du T3 progresse de 9 % au global. EMEA +14 %, Amérique du Nord +7 %, APAC +4 %. Un graphique comparatif a été ajouté à votre tableau de bord.",
      },
      support: {
        name: 'Support client IA',
        summary: 'Résolvez instantanément les demandes courantes, escaladez le reste.',
        prompt: "Un client demande pourquoi sa commande n'a pas été expédiée.",
        steps: [
          'Rechercher la commande',
          'Vérifier le statut du transporteur',
          'Rédiger la réponse',
        ],
        response:
          "La commande n° 48213 est emballée et attend l'enlèvement par le transporteur aujourd'hui. Réponse rédigée avec lien de suivi — confiance élevée, aucune escalade nécessaire.",
      },
    },
  },

  technology: {
    eyebrow: 'Technologies',
    title: 'Une stack moderne, choisie avec intention.',
    lead: "Chaque couche des systèmes que nous construisons — de l'IA à l'infrastructure — repose sur des technologies éprouvées, sélectionnées pour leur performance, leur maintenabilité et leur support sur le long terme.",
    tabsLabel: 'Couches de la stack technologique',
    layerOf: 'Couche {i} / {n}',
    layers: {
      ai: {
        name: 'IA',
        description:
          'Modèles de langage, recherche augmentée et API de machine learning intégrés à la logique produit.',
      },
      frontend: {
        name: 'Frontend',
        description:
          'Des interfaces rapides et accessibles, avec une architecture par composants et un typage strict.',
      },
      backend: {
        name: 'Backend',
        description: 'Des services et API sécurisés et testés, conçus pour évoluer dans la durée.',
      },
      database: {
        name: 'Bases de données',
        description:
          "Des modèles relationnels et documentaires optimisés pour l'intégrité et la performance.",
      },
      cloud: {
        name: 'Cloud',
        description:
          'Une architecture cloud-native pensée pour la sécurité, la scalabilité et la maîtrise des coûts.',
      },
      devops: {
        name: 'DevOps',
        description:
          'Pipelines automatisés, conteneurs et observabilité pour des mises en production sereines.',
      },
    },
    notes: {
      Oa: 'Modèles GPT et embeddings',
      Ao: 'Hébergement de LLM de niveau entreprise',
      Ml: 'Vision, voix et prédiction',
      Ng: "SPA d'entreprise structurées",
      Re: 'UI modulaire à toute échelle',
      Nx: 'Rendu serveur et diffusion en edge',
      As: 'API et services à haut débit',
      Nd: 'Services temps réel et événementiels',
      Py: 'Pipelines de données et charges IA',
      Sq: "Données transactionnelles d'entreprise",
      Pg: 'Relationnel + JSON + vecteurs',
      My: 'Stockage web éprouvé à grande échelle',
      Mg: 'Modèles documentaires flexibles',
      Az: 'App Service, AKS, Functions',
      Aw: 'ECS, Lambda, RDS',
      Dk: 'Conteneurs reproductibles',
      K8: 'Orchestration à grande échelle',
      Ad: 'Boards, repos et pipelines',
      Gh: 'CI/CD as code',
    },
  },

  process: {
    eyebrow: 'Méthode',
    title: "De l'idée à l'impact.",
    lead: 'Un processus de delivery clair et collaboratif — pour que vous sachiez toujours ce qui se passe, ce qui vient ensuite et pourquoi.',
    outputsLabel: "Livrables de l'étape {title}",
    steps: [
      {
        title: 'Découvrir',
        description: "Comprendre l'entreprise, les utilisateurs et les objectifs.",
        outputs: [
          'Entretiens avec les parties prenantes',
          'Cadrage du problème',
          'Indicateurs de réussite',
        ],
      },
      {
        title: 'Définir la stratégie',
        description: "Définir l'architecture, les technologies et l'orientation produit.",
        outputs: ['Architecture technique', 'Feuille de route', 'Plan de livraison'],
      },
      {
        title: 'Concevoir',
        description: 'Créer des expériences intuitives et évolutives.',
        outputs: ['Parcours utilisateurs', 'Prototypes interactifs', 'Design system'],
      },
      {
        title: 'Développer',
        description: 'Construire le produit avec des pratiques de développement modernes.',
        outputs: ['Sprints itératifs', 'Revues de code', 'Intégration continue'],
      },
      {
        title: 'Tester',
        description: 'Tests de qualité, de sécurité, de performance et de fiabilité.',
        outputs: ['Suites de tests automatisés', 'Revue de sécurité', 'Tests de charge'],
      },
      {
        title: 'Lancer',
        description: "Déployer et superviser l'environnement de production.",
        outputs: ['Mise en production sans interruption', 'Supervision', 'Runbooks'],
      },
      {
        title: 'Faire évoluer',
        description: 'Amélioration continue, optimisation et support.',
        outputs: ["Analyse des données d'usage", 'Optimisation', 'Support continu'],
      },
    ],
  },

  why: {
    eyebrow: 'Pourquoi SMR',
    title: 'Une ingénierie pensée pour durer.',
    lead: "Un logiciel est un actif à long terme. Nous le construisons comme vous voudriez qu'il soit maintenu — avec rigueur, en toute transparence et en pensant aux cinq prochaines années.",
    items: {
      architecture: {
        title: 'Architecture moderne',
        description:
          'Des systèmes modulaires et bien délimités, faciles à faire évoluer et à comprendre.',
      },
      code: {
        title: 'Un code propre et maintenable',
        description: 'Typé, testé et relu — un code dont votre future équipe vous remerciera.',
      },
      security: {
        title: 'La sécurité dès la conception',
        description:
          'Modélisation des menaces, moindre privilège et paramètres sécurisés dès le premier commit.',
      },
      performance: {
        title: 'Optimisation des performances',
        description:
          'Budgets de performance, profilage et mise en cache intégrés à chaque livraison.',
      },
      scale: {
        title: 'Infrastructure évolutive',
        description:
          "Une infrastructure qui suit la demande sans que votre facture n'augmente au même rythme.",
      },
      ai: {
        title: "Architecture prête pour l'IA",
        description:
          "Des données et des API propres qui simplifient l'ajout de fonctionnalités intelligentes.",
      },
      cloud: {
        title: 'Capacités cloud-native',
        description: 'Conteneurs, services managés et automatisation sur Azure et AWS.',
      },
      improvement: {
        title: 'Amélioration continue',
        description: 'Nous mesurons, apprenons et affinons bien après la mise en ligne.',
      },
      communication: {
        title: 'Communication transparente',
        description:
          'Un périmètre clair, des estimations honnêtes et des avancées visibles chaque semaine.',
      },
    },
  },

  industries: {
    eyebrow: 'Secteurs',
    title: 'Des logiciels à la hauteur de toutes les ambitions.',
    lead: "Une ingénierie qui connaît votre métier, pour les secteurs réglementés, à fort volume ou en évolution rapide — du premier MVP à l'échelle des grands comptes.",
    items: {
      healthcare: {
        name: 'Santé',
        focus: 'Parcours patients, prise de rendez-vous et données conformes.',
      },
      fintech: {
        name: 'FinTech',
        focus: 'Paiements sécurisés, registres comptables et reporting en temps réel.',
      },
      retail: { name: 'Retail', focus: 'Caisse, stocks et commerce omnicanal.' },
      realEstate: { name: 'Immobilier', focus: 'Gestion des biens, des locataires et des baux.' },
      logistics: {
        name: 'Logistique',
        focus: "Suivi de flotte, optimisation des tournées et gestion d'entrepôt.",
      },
      education: {
        name: 'Éducation',
        focus: "Plateformes d'apprentissage et gestion des étudiants.",
      },
      manufacturing: {
        name: 'Industrie',
        focus: "Planification de la production et données d'atelier.",
      },
      professional: {
        name: 'Services professionnels',
        focus: 'Portails clients, facturation et planification des ressources.',
      },
      startups: { name: 'Startups', focus: 'Des MVP conçus pour devenir de vrais produits.' },
      enterprise: {
        name: 'Grands comptes',
        focus: 'Modernisation et intégration à grande échelle.',
      },
    },
  },

  about: {
    eyebrow: 'À propos de SMR',
    titleLead: "La technologie n'a de valeur que lorsqu'elle crée du",
    titleAccent: 'progrès.',
    lead: 'SMR Core Technologies aide les entreprises à transformer leurs idées en produits numériques fiables.',
    text: "Nous associons ingénierie logicielle, architecture moderne, technologies cloud et intelligence artificielle pour créer des solutions pensées pour les entreprises d'aujourd'hui et les défis de demain.",
    values: [
      {
        title: 'Le progrès plutôt que le volume',
        text: 'Nous mesurons notre succès aux résultats métier que crée le logiciel, pas au nombre de lignes de code livrées.',
      },
      {
        title: 'Un savoir-faire durable',
        text: 'Une architecture claire et une ingénierie soignée, pour que votre produit reste rapide et évolutif pendant des années.',
      },
      {
        title: 'Un partenariat, pas des projets',
        text: 'Nous restons à vos côtés après le lancement — pour améliorer, accompagner et faire évoluer ce que nous construisons ensemble.',
      },
    ],
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Vos questions, nos réponses.',
    items: [
      {
        question: 'Quels types de logiciels SMR Core Technologies développe-t-elle ?',
        answer:
          "Nous développons des applications web sur mesure, des applications mobiles, des logiciels desktop, des produits SaaS et des systèmes propulsés par l'IA — ainsi que les API, l'infrastructure cloud et les intégrations qui les relient.",
      },
      {
        question: 'Pouvez-vous travailler sur notre code existant ?',
        answer:
          "Oui. Une grande partie de notre travail consiste à améliorer, enrichir et moderniser des applications existantes. Nous commençons par une revue du code et de l'architecture, puis convenons d'un plan progressif qui évite toute perturbation.",
      },
      {
        question: "Comment intégrez-vous l'IA dans des produits existants ?",
        answer:
          "Nous identifions les processus où l'IA apporte une valeur mesurable, puis intégrons des modèles comme OpenAI ou Azure OpenAI via vos API existantes — avec recherche sur vos données, évaluation, garde-fous et suivi des coûts.",
      },
      {
        question: 'Dans quelles technologies êtes-vous spécialisés ?',
        answer:
          "Notre stack principale comprend Angular, React et Next.js côté frontend ; ASP.NET Core, Node.js et Python côté backend ; SQL Server et PostgreSQL pour les données ; et Azure ou AWS avec Docker et Kubernetes pour l'infrastructure.",
      },
      {
        question: 'Comment démarre généralement un projet ?',
        answer:
          'Par un court échange de découverte sur vos objectifs, vos utilisateurs et vos contraintes. Nous vous proposons ensuite un périmètre, une architecture, un calendrier et une estimation transparente avant tout développement.',
      },
      {
        question: 'Assurez-vous un support après la mise en ligne ?',
        answer:
          "Oui. Nous proposons maintenance continue, supervision, optimisation des performances et développement de nouvelles fonctionnalités, pour que votre logiciel continue de s'améliorer après sa mise en production.",
      },
    ],
  },

  cta: {
    title: "Une idée qui mérite d'exister ?",
    text: 'Transformons votre idée en un logiciel qui crée une réelle valeur pour votre entreprise.',
  },

  contact: {
    eyebrow: 'Contact',
    title: 'Construisons ensemble ce qui vous fera avancer.',
    lead: 'Parlez-nous de votre projet. Nous reviendrons vers vous avec des questions pertinentes, des conseils honnêtes et des prochaines étapes claires.',
    nextTitle: 'La suite',
    steps: [
      {
        title: 'Partagez votre idée',
        text: 'Parlez-nous de vos objectifs, de vos utilisateurs et de votre calendrier.',
      },
      {
        title: 'Échange de découverte',
        text: 'Une conversation de 30 minutes avec un ingénieur senior.',
      },
      {
        title: 'Une proposition claire',
        text: 'Périmètre, architecture, calendrier et estimation transparente.',
      },
    ],
    preferEmail: "Vous préférez l'e-mail ?",
    expertMessage: "J'aimerais échanger avec un expert au sujet de ",
    form: {
      fullName: 'Nom complet',
      fullNamePlaceholder: 'Claire Martin',
      workEmail: 'E-mail professionnel',
      workEmailPlaceholder: 'claire@entreprise.com',
      company: 'Entreprise',
      companyPlaceholder: "Nom de l'entreprise",
      phone: 'Téléphone',
      phonePlaceholder: '+33 6 00 00 00 00',
      optional: 'Facultatif',
      projectType: 'Type de projet',
      budget: 'Fourchette budgétaire',
      message: 'Message',
      messagePlaceholder:
        'Parlez-nous de votre produit, de vos objectifs, de votre calendrier et de vos systèmes existants.',
      consentBefore: "J'accepte la",
      consentLink: 'politique de confidentialité',
      consentAfter: "et j'autorise SMR Core Technologies à me contacter au sujet de cette demande.",
      send: 'Envoyer le message',
      sending: 'Envoi en cours…',
      note: 'Nous répondons généralement sous un jour ouvré.',
      successTitle: 'Merci, {name} — message bien reçu.',
      successBefore: 'Un ingénieur senior va étudier votre projet et vous répondra à',
      successAfter: 'sous un jour ouvré.',
      successSteps: [
        'Nous étudions vos objectifs et vos contraintes.',
        'Nous planifions un échange de découverte de 30 minutes.',
        'Vous recevez une proposition cadrée et une estimation.',
      ],
      sendAnother: 'Envoyer un autre message',
    },
    errors: {
      fullNameRequired: 'Veuillez saisir votre nom complet.',
      fullNameTooLong: 'Veuillez utiliser un nom plus court.',
      workEmailRequired: 'Veuillez saisir votre e-mail professionnel.',
      workEmailInvalid: 'Veuillez saisir une adresse e-mail valide.',
      companyTooLong: "Veuillez utiliser un nom d'entreprise plus court.",
      phoneInvalid: 'Veuillez saisir un numéro de téléphone valide.',
      projectTypeRequired: 'Veuillez choisir un type de projet.',
      budgetRequired: 'Veuillez choisir une fourchette budgétaire.',
      messageTooShort: 'Dites-nous-en un peu plus (au moins {min} caractères).',
      messageTooLong: 'Votre message ne doit pas dépasser {max} caractères.',
      consentRequired:
        'Veuillez accepter la politique de confidentialité afin que nous puissions vous répondre.',
      reviewForm: 'Certaines informations sont à vérifier. Veuillez relire le formulaire.',
      network: 'Erreur réseau — veuillez vérifier votre connexion et réessayer.',
      deliveryFailed:
        "Nous n'avons pas pu envoyer votre message pour le moment. Veuillez réessayer dans quelques instants.",
    },
    projectTypes: {
      'web-application': 'Application web',
      'mobile-application': 'Application mobile',
      'desktop-application': 'Application desktop',
      'ai-integration': "Intégration de l'IA",
      'saas-product': 'Produit SaaS',
      'cloud-devops': 'Cloud / DevOps',
      'software-modernization': 'Modernisation logicielle',
      'support-maintenance': 'Support et maintenance',
      other: 'Autre',
    },
    budgets: {
      'under-5k': 'Moins de 5 k$',
      '5k-15k': '5 k$ – 15 k$',
      '15k-50k': '15 k$ – 50 k$',
      '50k-plus': '50 k$ et plus',
      'not-sure': 'Je ne sais pas',
    },
  },

  insights: {
    eyebrow: 'Insights',
    title: "Réflexions sur l'art de concevoir des logiciels durables.",
    lead: "Des points de vue sur l'ingénierie, l'architecture, l'IA et la modernisation — pour celles et ceux qui conçoivent et achètent des logiciels.",
    latest: 'Derniers articles',
    more: "Plus d'articles",
    minRead: '{n} min de lecture',
    demoArticle: 'Article de démonstration',
    disclaimer: 'Ce contenu est un exemple créé à des fins de démonstration.',
    categories: {
      AI: 'IA',
      Engineering: 'Ingénierie',
      Architecture: 'Architecture',
      Modernization: 'Modernisation',
      Cloud: 'Cloud',
      Security: 'Sécurité',
    },
    articles: {
      'how-ai-is-changing-modern-software-development': {
        title: "Comment l'IA transforme le développement logiciel moderne",
        excerpt:
          "L'IA redéfinit à la fois la manière dont les logiciels sont construits et ce qu'ils sont capables de faire. Voici ce que cela change concrètement pour les équipes produit.",
        sections: [
          {
            heading: 'Deux transformations simultanées',
            paragraphs: [
              "L'IA transforme le développement logiciel dans deux directions à la fois. Les équipes d'ingénierie utilisent des outils assistés par l'IA pour écrire, relire et tester le code plus vite, tandis que les produits eux-mêmes intègrent de plus en plus de capacités intelligentes — assistants, recherche, synthèse et automatisation.",
              "Les équipes qui en tirent le plus de valeur les traitent comme deux disciplines distinctes. L'outillage des développeurs est une question de productivité ; l'IA produit est une question d'architecture.",
            ],
          },
          {
            heading: 'Les fonctionnalités IA sont un enjeu de conception système',
            paragraphs: [
              'Une fonctionnalité IA utile se résume rarement à un simple appel de modèle. Elle exige des données propres, une recherche sur les bonnes sources, une évaluation pour mesurer la qualité, des garde-fous, des solutions de repli et une maîtrise des coûts.',
              "C'est pourquoi nous concevons les capacités IA comme des éléments à part entière de l'architecture, et non comme des fonctionnalités greffées à la fin.",
            ],
          },
          {
            heading: 'Par où commencer',
            paragraphs: [
              'Commencez par un processus répétitif, mesurable et déjà bien maîtrisé par votre équipe. Livrez une version ciblée, comparez-la au processus actuel et étendez-la sur la base de résultats concrets.',
            ],
          },
        ],
      },
      'building-scalable-web-applications-in-2026': {
        title: 'Construire des applications web évolutives en 2026',
        excerpt:
          "La scalabilité tient moins au volume de trafic qu'à la capacité de votre système — et de votre équipe — à absorber le changement.",
        sections: [
          {
            heading: "L'évolutivité est une décision produit",
            paragraphs: [
              'La plupart des applications ne connaîtront jamais de trafic extrême, mais toutes font face à une complexité croissante. Une architecture évolutive permet de continuer à ajouter des fonctionnalités à moindre coût à mesure que le produit mûrit.',
            ],
          },
          {
            heading: 'Des fondations pragmatiques',
            paragraphs: [
              "Rendu serveur et cache en edge pour des premiers chargements rapides. Des API typées entre frontend et backend. Des frontières de modules claires. Des tâches en arrière-plan pour les traitements lents. De l'observabilité dès le premier jour.",
              "Rien de tout cela n'est exotique — toute la discipline consiste à l'appliquer avec constance.",
            ],
          },
        ],
      },
      'when-should-a-business-modernize-legacy-software': {
        title: 'Quand une entreprise doit-elle moderniser ses logiciels historiques ?',
        excerpt:
          "Les systèmes historiques font souvent tourner l'entreprise. La question n'est pas de savoir s'il faut les moderniser, mais quand et comment le faire en toute sécurité.",
        sections: [
          {
            heading: 'Les signes qui ne trompent pas',
            paragraphs: [
              "Les évolutions prennent des semaines au lieu de quelques jours. Seules une ou deux personnes comprennent le système. L'environnement d'exécution ne reçoit plus de mises à jour de sécurité. Les intégrations nécessitent des contournements manuels.",
            ],
          },
          {
            heading: 'Moderniser progressivement',
            paragraphs: [
              "Les refontes totales comportent des risques considérables. Le pattern « strangler » — qui remplace une fonctionnalité à la fois derrière une interface stable — permet à l'entreprise de continuer à fonctionner pendant que la plateforme évolue.",
            ],
          },
        ],
      },
      'angular-vs-react-for-enterprise-applications': {
        title: "Angular ou React pour les applications d'entreprise",
        excerpt:
          "Les deux sont excellents. Le bon choix dépend de votre équipe, de vos contraintes et du niveau de structure que vous souhaitez intégré d'emblée.",
        sections: [
          {
            heading: 'Structure ou flexibilité',
            paragraphs: [
              "Angular est un framework complet doté de conventions fortes pour le routage, les formulaires, l'injection de dépendances et les tests — un atout pour les grandes équipes en quête de cohérence.",
              "React est une bibliothèque d'interface ciblée, portée par un vaste écosystème. Associé à un framework comme Next.js, il offre une grande flexibilité et d'excellentes options de rendu.",
            ],
          },
          {
            heading: 'Comment nous choisissons',
            paragraphs: [
              "Nous prenons en compte les compétences de l'équipe en place, la nature du produit, la maintenance à long terme et les besoins d'intégration. Bien mis en œuvre, l'un comme l'autre passe à l'échelle sans difficulté.",
            ],
          },
        ],
      },
      'building-secure-apis-with-aspnet-core': {
        title: 'Concevoir des API sécurisées avec ASP.NET Core',
        excerpt:
          "Une checklist pratique pour l'authentification, l'autorisation, la validation et l'observabilité des API en production.",
        sections: [
          {
            heading: 'Des paramètres sécurisés par défaut',
            paragraphs: [
              "Utilisez une authentification fondée sur des standards comme OpenID Connect, appliquez l'autorisation via des politiques plutôt que par des contrôles dispersés et validez chaque entrée à la frontière du système.",
            ],
          },
          {
            heading: 'La défense en profondeur',
            paragraphs: [
              "Appliquez une limitation de débit, conservez les secrets dans un coffre managé, journalisez les événements de sécurité et analysez les dépendances dans la CI. La sécurité est une propriété de l'ensemble du processus de livraison.",
            ],
          },
        ],
      },
      'how-cloud-architecture-improves-scalability': {
        title: "Comment l'architecture cloud améliore la scalabilité",
        excerpt:
          "L'élasticité de l'infrastructure n'est qu'une partie de l'histoire. Une bonne architecture cloud rend la montée en charge prévisible et abordable.",
        sections: [
          {
            heading: "Au-delà de l'autoscaling",
            paragraphs: [
              "Les bases de données, files d'attente et caches managés permettent de traiter chaque goulot d'étranglement individuellement plutôt que de redimensionner des systèmes entiers. L'infrastructure as code rend les environnements reproductibles.",
            ],
          },
          {
            heading: 'Le coût, une donnée de conception',
            paragraphs: [
              'Dimensionnement au plus juste, mise en cache et traitements asynchrones maintiennent les coûts proportionnels à la valeur créée. Nous traitons les dépenses cloud comme un indicateur à suivre, pas comme une surprise à justifier.',
            ],
          },
        ],
      },
    },
  },

  careers: {
    eyebrow: 'Carrières',
    title: 'Construisez les logiciels sur lesquels reposent les entreprises.',
    lead: "Nous sommes toujours heureux de rencontrer des ingénieurs et designers réfléchis, attachés à la qualité, à la clarté et à l'impact.",
    principles: [
      {
        title: 'Responsabilité',
        text: 'Nos ingénieurs prennent en charge les problèmes de bout en bout — de la découverte à la production.',
      },
      {
        title: 'Exigence',
        text: 'Revue de code, tests et qualité de conception font partie du métier, pas des à-côtés.',
      },
      {
        title: 'Évolution',
        text: "Des stacks modernes, de vraies décisions d'architecture et du temps pour apprendre.",
      },
    ],
    openRoles: 'Postes ouverts',
    empty:
      "Aucun poste n'est ouvert pour le moment. Si vous souhaitez que nous pensions à vous pour de futures opportunités, envoyez-nous une courte présentation et un lien vers vos travaux.",
    introduce: 'Présentez-vous',
    emailSubject: 'Candidature',
  },

  legal: {
    eyebrow: 'Mentions légales',
    lastUpdated: 'Dernière mise à jour',
    badge: 'Modèle — en attente de validation juridique',
    documents: {
      privacy: {
        title: 'Politique de confidentialité',
        description:
          'Comment SMR Core Technologies collecte, utilise et protège les données personnelles.',
        sections: [
          {
            heading: 'Informations que nous collectons',
            body: 'Lorsque vous nous contactez, nous collectons les informations que vous fournissez — telles que votre nom, votre e-mail professionnel, votre entreprise, votre numéro de téléphone et les informations relatives à votre projet — afin de pouvoir répondre à votre demande.',
          },
          {
            heading: 'Utilisation des informations',
            body: 'Nous utilisons vos informations uniquement pour répondre à votre demande, fournir nos services et améliorer notre site web. Nous ne vendons pas de données personnelles.',
          },
          {
            heading: 'Conservation des données',
            body: "Nous conservons les données liées aux demandes uniquement le temps nécessaire pour y répondre et entretenir une relation commerciale, ou selon ce qu'exige la loi.",
          },
          {
            heading: 'Vos droits',
            body: "Vous pouvez à tout moment demander l'accès à vos données personnelles, leur rectification ou leur suppression en nous contactant.",
          },
        ],
      },
      terms: {
        title: 'Conditions générales',
        description: "Conditions régissant l'utilisation du site web de SMR Core Technologies.",
        sections: [
          {
            heading: 'Utilisation de ce site web',
            body: 'Ce site web fournit des informations générales sur nos services. Son contenu peut être modifié sans préavis et ne constitue pas une offre contractuelle.',
          },
          {
            heading: 'Contenu de démonstration',
            body: 'Les études de cas, indicateurs, projets concepts et articles identifiés comme contenu de démonstration sont fournis à titre illustratif et ne représentent pas des missions ou des résultats clients réels.',
          },
          {
            heading: 'Propriété intellectuelle',
            body: 'Le design, les textes et les éléments graphiques de ce site web sont la propriété de SMR Core Technologies, sauf mention contraire.',
          },
          {
            heading: 'Limitation de responsabilité',
            body: "Les informations de ce site web sont fournies « en l'état », sans garantie d'aucune sorte.",
          },
        ],
      },
      cookies: {
        title: 'Politique relative aux cookies',
        description:
          'Comment le site web de SMR Core Technologies utilise les cookies et le stockage local.',
        sections: [
          {
            heading: 'Stockage strictement nécessaire',
            body: "Ce site web n'utilise aucun cookie publicitaire ni de suivi. Il enregistre deux préférences dans votre navigateur : le thème de couleur choisi (stockage local) et la langue choisie (un cookie propriétaire).",
          },
          {
            heading: 'Gérer vos préférences',
            body: 'Vous pouvez les effacer à tout moment depuis les paramètres de votre navigateur. Le site suivra alors le thème de votre système et détectera automatiquement votre langue.',
          },
        ],
      },
    },
  },

  notFound: {
    code: 'Erreur 404',
    title: "Cette page a été déplacée — ou n'a jamais existé.",
    text: 'Le lien est peut-être obsolète. Reprenons le bon chemin.',
    home: "Retour à l'accueil",
    contact: 'Nous contacter',
  },
};
