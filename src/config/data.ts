import type { PortfolioData, SpiralItem } from '../types';
import { presentation as p261 } from '@/components/detail/presentations/p26-1';
import { presentation as p262 } from '@/components/detail/presentations/p26-2';
import { presentation as p252 } from '@/components/detail/presentations/p25-2-crm-pharma';
import { presentation as p253 } from '@/components/detail/presentations/p25-3';
import { presentation as p241 } from '@/components/detail/presentations/p24-1';
import { presentation as p242 } from '@/components/detail/presentations/p24-2';

export const DATA: PortfolioData = {
  name: "GABRIEL",
  surname: "BARREDA",
  title: "Développeur Logiciel métier & FullStack",
  tagline: "Développeur .NET passioné ",
  bio: "Spécialisé dans le développement Logiciel métier (client lourd), je combine une expertise desktop solide ainsi que de bonnes bases en fullstack.",
  skills: {
    "Web Frontend": ["React", "Three.js", "Angular", "Tailwind"],
    "Web Backend": ["C# ASP.NET",  "PostgreSQL", "Entity Framework Core", "SQL Server", "SQLite"],
    "Expertise": [".Net", "Architecture Logicielle", "Client Lourd", "Applications Métier"],
    "Logiciel": ["WPF", "Entity Framework"]
  },
  contact: {
    email: "gabri.barreda@gmail.com",
    github: "https://github.com/GabrielBarreda",
    linkedin: "https://www.linkedin.com/in/gabriel-barreda-814919282/"
  },
  projects: [
    // 2026-2027 (B3 / M1 - deuxième année d'alternance)
    { id: "p26-1", title: "CheerzUp (Projet Groupe)", cat: "Mobile", year: 2026, color: "#7eb8f7", summary: "Plateforme de jeux de bars & fidélisation client.", desc: "Participation au développement du backend NestJS et du back-office Angular pour une plateforme connectant bars et clients via jeux engageants et campagnes de fidélisation.", highlights: ["NestJS", "Angular", "TypeORM", "PostgreSQL"], tech: ["NestJS", "Angular 21", "TypeORM", "PostgreSQL"], presentation: p261 },
    { id: "p26-2", title: "FindNReplace VS (Projet Personnel)", cat: "Extension", year: 2026, color: "#787878ff", summary: "Extension VS pour recherche multi-ligne avancée.", desc: "Extension Visual Studio 2022+ pour recherche/remplacement multi-lignes avec générateur regex interactif. Port d'une extension VS Code vers C# / WPF avec architecture modulaire et tests complets.", highlights: ["C# / WPF", "VSSDK", "Regex", "Architecture"], tech: ["C#", "WPF", "XAML", ".NET 4.7.2"], presentation: p262 },

    // 2025 (B3 / M1 - première année d'alternance)
    { id: "p25-2", title: "CRM Pharma (Projet Personnel)", cat: "Fullstack", year: 2026, color: "#7ef7c4", summary: "CRM pour délégués pharmaceutiques terrain.", desc: "CRM en cours de développement pour délégués pharmaceutiques. Gestion de portefeuille officines, pipeline Kanban et app mobile Flutter. Automatisations IA via n8n + GPT-4o-mini (structuration CRs, relances, scoring clients).", highlights: ["ASP.NET Core 8", "Angular + Flutter", "n8n + GPT-4o-mini", "Clean Architecture"], tech: ["C#", "ASP.NET Core 8", "Angular 18", "Flutter", "n8n", "SQLite / PostgreSQL"], presentation: p252 },
    { id: "p25-3", title: "Designer Desktop (Projet Personnel)", cat: "Desktop", year: 2025, color: "#f77e7e", summary: "Designer Canva-like", desc: "Projet personnel de création de templates de documents avec éditeur visuel. Gestion des documents au format papier (A4, A5, Letter) avec support de multiples éléments (texte, image, code-barres) et liaison de données avancée.", highlights: [".NET", "WPF", "Template Engine"], tech: ["C#", "WPF", ".NET 8", "XAML"], presentation: p253 },

    // 2024 (fin BTS + début alternance Actulog)
    { id: "p24-2", title: "Sigbox", cat: "Desktop", year: 2024, color: "#e8853a", summary: "ERP WPF/C# pour cartonniers façonneurs.", desc: "Sigbox est le portage en technologie Microsoft du pro-logiciel Sigbox ToolBook. ERP complet couvrant devis, fabrication, logistique et facturation pour les cartonniers façonneurs.", highlights: ["WPF/MVVM", "Module Devis", "Module Logistique", "Migration .NET"], tech: ["C#", "WPF", "XAML", "MVVM", ".NET", "SQL Server"], presentation: p242 },

    // 2023 (fin BTS, entre BTS et Bachelor)
    { id: "p24-1", title: "TaskManager (Projet Scolaire)", cat: "Web", year: 2023, color: "#ffbd33", summary: "Application web de gestion des tâches.", desc: "Application web permettant de créer, organiser et suivre des tâches avec catégorisation et priorisation. Projet réalisé en React avec Vite pour démontrer les concepts de gestion d'état et d'interface réactive.", highlights: ["React", "Vite", "Tasks management"], tech: ["React", "Vite", "TypeScript", "Tailwind CSS"], presentation: p241 },

    // ...-2022 avant BTS > pas de projet informatique
  ],
  accomplishments: [
    {
      id: "acc-2022-1",
      year: 2022,
      title: "Baccalauréat général",
      shortDesc: "Au cours de ma scolarité au Lycée Fernand Daguin (Mérignac), j'ai pu valider le baccalauréat général avec options Mathématiques, Numérique et Sciences Informatiques (NSI).",
      desc: "Au cours de ma scolarité au Lycée Fernand Daguin (Mérignac), j'ai pu valider le baccalauréat général avec specialisations Mathématiques et Numérique & Sciences Informatiques (NSI). En première, j'avais également choisi Sciences Économiques et Sociales (SES), mais en terminale, la sélection imposée de deux spécialités m'a amené à délaisser SES pour approfondir davantage ma formation informatique, confirmant ainsi mon orientation progressive.<br><br>J'ai également profité de ces années lycéennes pour passer mon BAFA auprès de différents organismes, dont REMPART. Cette implication m'a permis de développer des compétences d'encadrement et de responsabilité au-delà du cadre scolaire strictement académique.<br><br>L'épreuve orale du baccalauréat a porté sur une thématique spatiale — élément qui inspire aujourd'hui de manière notable la direction visuelle et thématique de ce portfolio. Cette période représente avant tout une phase d'exploration générale des domaines informatiques et scientifiques, sans attrait décisif particulier pour le développement logiciel professionnel. L'intérêt s'est manifesté davantage sur les aspects mathématiques, algorithmiques et scientifiques."
    },
    {
      id: "acc-2024-1",
      year: 2024,
      title: "Obtention du BTS SIO",
      shortDesc: "J'ai pu valider mon BTS Services Informatiques aux Organisations, option SLAM (Solutions Logicielles et Applications Métier), au Lycée Gustave Eiffel (Bordeaux).",
      desc: "J'ai pu valider mon BTS Services Informatiques aux Organisations, option SLAM (Solutions Logicielles et Applications Métier), au Lycée Gustave Eiffel (Bordeaux). Cette formation de deux années a intégré une expérience formative auprès d'une entreprise partenaire : un premier stage d'une durée d'un mois en début 2023, suivi d'un second stage de deux mois en début 2024, tous deux au sein de la structure Actulog.<br><br>C'est précisément au cours de ces missions en contexte professionnel que j'ai découvert véritablement ma passion pour le développement d'applications métier. Immersion auprès d'une équipe technique expérimentée, compréhension des enjeux réels du secteur (carton et emballage), et responsabilité progressive sur des modules de production m'ont confirmé l'orientation de ma carrière.<br><br>Les projets scolaires réalisés durant ce BTS, bien que formateurs pour l'apprentissage de concepts fondamentaux, n'offrent pas une valeur pédagogique suffisante pour être valorisés au sein de ce portfolio professionnel."
    },
    {
      id: "acc-2025-1",
      year: 2025,
      title: "Obtention du Bachelor",
      shortDesc: "Au cours de ma première année au sein d'Ynov Campus pour le Bachelor 3, en alternance chez Actulog (octobre 2024 — février 2026), mon intérêt pour les technologies web s'est développé progressivement.",
      desc: "Au cours de ma première année au sein d'Ynov Campus pour le Bachelor 3, en alternance chez Actulog (octobre 2024 — février 2026), mon intérêt pour les technologies web s'est développé progressivement. Cette approche s'est matérialisée par des projets scolaires et des développements personnels me permettant d'explorer des frameworks modernes : React en développement frontend, Angular pour les back-offices, et Symfony (PHP) côté backend.<br><br>Cette transition de compétences marque le passage progressif d'une expertise initiale centrée sur le Client Lourd vers une approche Fullstack plus équilibrée, combinant les connaissances techniques acquises chez Actulog avec les compétences web développées en formation académique."
    },
  ]
};

export const ITEMS: SpiralItem[] = [
  ...DATA.projects.map(p => ({
    ...p,
    kind: 'project' as const
  })),
  ...DATA.accomplishments.map(a => ({
    ...a,
    kind: 'accomplishment' as const,
    color: '#f0c060'
  }))
].sort((a, b) => b.year - a.year);
