import type { ExperienceDetail, MilestoneConfig } from '@/types';

// ─── SVG Path ─────────────────────────────────────────────────────────────────
// viewBox "0 0 900 520"
// Snake: left→right, curve right, right→left, curve left, left→right
export const ROAD_PATH =
  'M 50,100 L 720,100 Q 820,100 820,160 L 820,240 Q 820,290 750,290 L 150,290 Q 80,290 80,350 L 80,440 Q 80,490 150,490 L 850,490';

export const ROAD_VIEWBOX = { width: 900, height: 520 };

// ─── Experiences ──────────────────────────────────────────────────────────────
export const EXPERIENCES: ExperienceDetail[] = [
  {
    id: 'actulog-stage-1',
    company: 'Actulog',
    role: 'Stagiaire Développeur',
    period: 'Début 2023 — 3 mois',
    location: 'Bordeaux',
    type: 'stage',
    color: '#7eb8f7',
    icon: '',
    summary:
      "Premier stage chez Actulog. Découverte d'un ERP Client Lourd WPF destiné aux cartonniers façonneurs. Ce furent mes premiers pas sur un vrai projet de production en C# / WPF / XAML.",
    tech: ['C#', 'WPF', 'XAML', 'SQL Server', '.NET Framework'],
    missions: [
      "Prise en main du logiciel ERP (modules BE, planning, fabrication)",
      "Développement de petites fonctionnalités UI en WPF/XAML",
      "Correction de bugs sur les modules de saisie de commandes",
      "Rédaction de documentation technique interne",
    ],
    achievements: [
      "Première livraison en production d'une fonctionnalité UI",
      "Prise en main rapide du codebase WPF existant",
    ],
    context:
      "Actulog est une PME bordelaise éditrice d'un ERP spécialisé pour le secteur des cartonniers transformateurs (Sigbox/Furio) en production et développé en langage ToolBook. Une refonte en C# / WPF / XAML était en cours. Ce stage m'a permis de participer activement au développement applicatif sur la refonte du logiciel et de prendre en main l'environnement .NET.",
    problems: [
      "Adaptation à partir du codebase ToolBook de grande taille et déjà en production",
      "Comprendre le métier des cartonniers façonneurs (BE, découpe, façonnage FEFCO) ",
      "Appréhender l'architecture MVC mise en place dans la nouvelle version en développement.",
    ],
    solutions: [
      "Lecture intensive du code et de la documentation interne disponible",
      "Échanges réguliers avec les développeurs senior de l'équipe",
      "Approche progressive : corrections de bugs avant les nouvelles fonctionnalités",
    ],
    results: [
      "Premières fonctionnalités livrées dans les délais",
      "Bonne intégration dans l'équipe technique",
      "Bases WPF / C# solidement posées",
    ],
    feedback:
      "Ce stage m'a confirmé mon attrait pour le développement d'applications métier complexes. Le domaine du carton façonné est très technique, ce qui rend les problématiques logicielles passionnantes.",
  },
  {
    id: 'actulog-toussaint',
    company: 'Actulog',
    role: 'Développeur (mission courte)',
    period: 'Toussaint 2023 — 2 semaines',
    location: 'Bordeaux',
    type: 'emploi',
    color: '#7ef7c2',
    icon: '',
    summary:
      "Mission de renfort de 2 semaines pendant la Toussaint entre les deux stages. Contribution directe sur les modules commande et maintenance de l'ERP.",
    tech: ['C#', 'WPF', 'XAML', 'SQL Server', '.NET Framework'],
    missions: [
      "Renfort sur les développements en cours (module commande)",
      "Corrections et ajustements sur les fonctionnalités du stage 1",
    ],
    achievements: [
      "Retour rapide opérationnel sur la codebase",
      "Module commande avancé de manière significative",
    ],
    context:
      "Après le premier stage, l'équipe avait besoin d'un renfort ponctuel pendant les vacances de la Toussaint. Cette mission de 2 semaines a permis de maintenir ma montée en compétences entre les deux stages tout en renforçant la connaissance de l'ERP.",
    problems: [
      "Reprendre rapidement le fil du code après une pause",
      "Prioriser les tâches sur une fenêtre de 2 semaines seulement",
    ],
    solutions: [
      "Relecture du code et des notes avant d'intervenir",
      "Focus sur des tâches à fort impact et délai court",
    ],
    results: [
      "Module commande significativement avancé",
      "Relation de confiance renforcée avec l'équipe",
    ],
    feedback:
      "Cette courte mission a prouvé que l'équipe me faisait confiance en dehors des périodes de stage formelles. Un signal positif qui annonçait la suite.",
  },
  {
    id: 'actulog-stage-2',
    company: 'Actulog',
    role: 'Stagiaire Développeur',
    period: 'Début 2024 — 2 mois',
    location: 'Bordeaux',
    type: 'stage',
    color: '#f0c060',
    icon: '',
    summary:
      "Second stage avec davantage d'autonomie. Développement end-to-end sur les modules logistique/fournisseur. Début du travail sur la migration MVVM.",
    tech: ['C#', 'WPF', 'XAML', '.NET Framework', 'MVVM', 'SQL Server', 'Git'],
    missions: [
      "Développement de fonctionnalités complètes sur les modules logistique et fournisseur",
      "Premières contributions à la réflexion sur le passage MVC → MVVM",
      "Amélioration des bindings WPF et de la séparation logique/UI",
      "Participation aux réunions de spécifications avec le référent métier",
    ],
    achievements: [
      "Module logistique enrichi de plusieurs écrans complexes",
      "Premiers bindings MVVM mis en place sur des vues refactorisées",
      "Autonomie complète sur plusieurs tâches de développement",
    ],
    context:
      "Suite au premier stage et à la mission Toussaint, ce second stage marque une vraie progression. Je suis beaucoup plus autonome, je comprends les enjeux métier et je commence à challenger l'architecture existante.",
    problems: [
      "Gérer des modules plus complexes (logistique avec contraintes métier fortes)",
      "Initier la réflexion MVVM dans un contexte MVC legacy",
      "Travailler en binôme avec d'autres développeurs sur la même codebase",
    ],
    solutions: [
      "Documentation et prototypage des refactorisations MVVM avant implémentation",
      "Communication régulière avec l'équipe sur les choix techniques",
      "Tests manuels approfondis sur les cas métier de logistique (liasse logistique, génération QRcode, impression en lot...)",
    ],
    results: [
      "Modules logistique et fournisseur livrés",
      "Base de la migration MVVM posée pour l'alternance",
    ],
    feedback:
      "Ce second stage m'a mis en confiance. Je suis capable de porter des fonctionnalités de A à Z sur un ERP dont certains modules sont en production — un sentiment très différent du premier stage.",
  },
  {
    id: 'actulog-alternance',
    linkedProjectId: 'p24-2',
    company: 'Actulog',
    role: 'Développeur en Alternance',
    period: '2024 — 2026',
    location: 'Bordeaux',
    type: 'alternance',
    color: '#f77e7e',
    icon: '',
    summary:
      "Développeur à part entière sur l'ERP cartonniers/façonneurs. Migration complète MVC → MVVM, bindings avancés, développement sur l'ensemble des modules BE / planning / offre / fabrication / paramètres.",
    tech: ['C#', 'WPF', 'XAML', 'MVVM', 'SQL Server', '.NET', 'Entity Framework', 'Git'],
    missions: [
      "Migration architecture MVC → MVVM sur l'ensemble de l'ERP",
      "Développement de nouveaux écrans sur tout le périmètre (BE, planning, offre, fabrication, logistique)",
      "Participation aux décisions d'architecture technique",
      "Résolution de cases clients (correction de bugs sur le progiciel en production)",
      "Rédaction de spécifications détaillées",
    ],
    achievements: [
      "Migration MVC → MVVM menée à bien sur l'ensemble de l'ERP",
      "Bindings WPF robustes et maintenables implémentés partout",             
      "Couverture complète de la chaîne ERP : offre → devis → commande → planning → fournisseur → fabrication → livraison → logistique → facture ...",
      "Référent technique junior reconnu au sein de l'équipe",
    ],
    context:
      "L'alternance est la phase qui m'a transformé. J'ai passé environ 1 an et 6 mois sur le même projet avec un excellent mentor avec lequel j'ai pu rapidement monter en compétence. Durant la fin de l'alternance j'ai également eu l'occasion de participer au support d'un second projet Web cette fois ci en PHP Symfony.",
    problems: [
      "Migration MVVM progressive",
      "Gérer la complexité métier du carton façonné avec de plus en plus d'autonomie",
      "Appréhender les frameworks et langages d'un nouveau projet Web en parallèle (PHP Symfony)",
    ],
    solutions: [
      "Refactoring progressif module par module avec validation continue",
      "Documentation des ViewModels et des bindings pour faciliter la transmission",
      "Implication dans la résolution de cases clients pour comprendre les enjeux métier et les problématiques techniques du second projet en production",
    ],
    results: [
      "ERP entièrement passé en MVVM, codebase bien plus maintenable",
      "Solide expertise métier carton/emballage acquise",
      "Autonomie complète sur les développements et les décisions techniques",
      "Adaptation rapide au second projet Web et contribution significative sur les résolutions de bugs en production",
    ],
    feedback:
      "1 an et 6 mois sur le même projet en alternance, c'est une chance rare : on comprend vraiment le métier, on maîtrise l'architecture dans ses moindres détails, et on mesure l'impact de chaque décision technique sur les utilisateurs finaux.",
  },
];

// ─── Milestones sur le chemin SVG ─────────────────────────────────────────────
export const MILESTONES: MilestoneConfig[] = [
  { experienceId: 'actulog-stage-1',   pathFraction: 0.11, svgX: 210, svgY: 100 },
  { experienceId: 'actulog-toussaint', pathFraction: 0.35, svgX: 570, svgY: 100 },
  { experienceId: 'actulog-stage-2',   pathFraction: 0.60, svgX: 560, svgY: 290 },
  { experienceId: 'actulog-alternance',pathFraction: 0.87, svgX: 510, svgY: 490 },
];

// ─── Labels ────────────────────────────────────────────────────────────────────
export const EXPRO_LABELS = {
  headerLabel: 'EXPÉRIENCE PROFESSIONNELLE',
  headerTitle: 'Mon parcours pro.',
  headerSub: "Scrollez pour faire avancer le rover et découvrir chaque étape du parcours.",
  missionLogLabel: 'TRACÉ',
  startMessage: "Scrollez pour commencer",
  completeTitle: 'Parcours complet.',
  completeDesc: "3 ans chez Actulog sur un ERP WPF/MVVM pour les cartonniers façonneurs.",
  detailCta: 'Voir le détail',
  typeBadge: {
    stage: 'STAGE',
    alternance: 'ALTERNANCE',
    emploi: 'MISSION',
  },
};
