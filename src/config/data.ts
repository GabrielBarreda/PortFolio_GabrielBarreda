import type { PortfolioData, SpiralItem } from '../types';
import { presentation as p261 } from '@/components/detail/presentations/p26-1';
import { presentation as p262 } from '@/components/detail/presentations/p26-2';
import { presentation as p252 } from '@/components/detail/presentations/p25-2-dynamic-crm';
import { presentation as p253 } from '@/components/detail/presentations/p25-3';
import { presentation as p241 } from '@/components/detail/presentations/p24-1';
import { presentation as p242 } from '@/components/detail/presentations/p24-2';

export const DATA: PortfolioData = {
  name: "GABRIEL",
  title: "Développeur Desktop & FullStack",
  tagline: "Développeur passionné",
  bio: "Spécialisé dans le développement desktop (client lourd), je combine une expertise desktop solide ainsi que des compétences fullstack.",
  skills: {
    "Web Frontend": ["React", "Three.js", "Angular", "Tailwind"],
    "Web Backend": ["Node.js", "Express", "PostgreSQL"],
    "Expertise": [".Net", "Architecture Logicielle", "Client Lourd", "Applications Métier"],
    "Logiciel": ["WPF", "Entity Framework"]
  },
  contact: {
    email: "gabri.barreda@gmail.com",
    github: "https://github.com/GabrielBarreda",
    linkedin: "..."
  },
  projects: [
    // 2026-2027 (B3 / M1 - deuxième année d'alternance)
    { id: "p26-1", title: "CheerzUp (Projet Groupe)", cat: "Mobile", year: 2026, color: "#7eb8f7", summary: "Plateforme de jeux de bars & fidélisation client.", desc: "Participation au développement du backend NestJS et du back-office Angular pour une plateforme connectant bars et clients via jeux engageants et campagnes de fidélisation.", highlights: ["NestJS", "Angular", "TypeORM", "PostgreSQL"], tech: ["NestJS", "Angular 21", "TypeORM", "PostgreSQL"], presentation: p261 },
    { id: "p26-2", title: "FindNReplace VS (Projet Personnel)", cat: "Extension", year: 2026, color: "#787878ff", summary: "Extension VS pour recherche multi-ligne avancée.", desc: "Extension Visual Studio 2022+ pour recherche/remplacement multi-lignes avec générateur regex interactif. Port d'une extension VS Code vers C# / WPF avec architecture modulaire et tests complets.", highlights: ["C# / WPF", "VSSDK", "Regex", "Architecture"], tech: ["C#", "WPF", "XAML", ".NET 4.7.2"], presentation: p262 },

    // 2025 (B3 / M1 - première année d'alternance)
    { id: "p25-2", title: "CRM (Projet Personnel)", cat: "Desktop", year: 2025, color: "#f7e57e", summary: "CRM pour courtiers en énergie.", desc: "Application WPF complète de gestion de relation client pour le secteur énergétique. Gestion clients/prospects, dossiers clients, suivi commercial et analyse comparative des tarifs fournisseurs. Frontend Angular/API NestJS prévus.", highlights: ["WPF/MVVM", "EF Core", "PostgreSQL", "Métier Énergie"], tech: ["C#", "WPF", ".NET 10", "Entity Framework Core", "PostgreSQL"], presentation: p252 },
    { id: "p25-3", title: "Designer Desktop (Projet Personnel)", cat: "Desktop", year: 2025, color: "#f77e7e", summary: "Designer Canva-like", desc: "Projet personnel de création de templates de documents avec éditeur visuel. Gestion des documents au format papier (A4, A5, Letter) avec support de multiples éléments (texte, image, code-barres) et liaison de données avancée.", highlights: [".NET", "WPF", "Template Engine"], tech: ["C#", "WPF", ".NET 8", "XAML"], presentation: p253 },

    // 2024 (fin BTS + début alternance Actulog)
    { id: "p24-2", title: "Sigbox", cat: "Desktop", year: 2024, color: "#e8853a", summary: "ERP WPF/C# pour cartonniers façonneurs.", desc: "Sigbox est le portage en technologie Microsoft du pro-logiciel Sigbox ToolBook. ERP complet couvrant devis, fabrication, logistique et facturation pour les cartonniers façonneurs.", highlights: ["WPF/MVVM", "Module Devis", "Module Logistique", "Migration .NET"], tech: ["C#", "WPF", "XAML", "MVVM", ".NET", "SQL Server"], presentation: p242 },

    // 2023 (fin BTS, entre BTS et Bachelor)
    { id: "p24-1", title: "TaskManager (Projet Scolaire)", cat: "Web", year: 2023, color: "#ffbd33", summary: "Application web de gestion des tâches.", desc: "Application web permettant de créer, organiser et suivre des tâches avec catégorisation et priorisation. Projet réalisé en React avec Vite pour démontrer les concepts de gestion d'état et d'interface réactive.", highlights: ["React", "Vite", "Tasks management"], tech: ["React", "Vite", "TypeScript", "Tailwind CSS"], presentation: p241 },

    // ...-2022 avant BTS > pas de projet informatique
  ],
  accomplishments: [
    { id: "acc-2022-1", year: 2022, title: "Baccalauréat général", desc: "Validation du baccalauréat Option Maths et NSI." },
    { id: "acc-2024-1", year: 2024, title: "Obtention du BTS SIO", desc: "Validation du BTS SIO option SLAM. Formation en alternance avec 1er stage (1 mois en 2023) et 2e stage (2 mois en 2024)." },
    { id: "acc-2025-1", year: 2025, title: "Obtention du Bachelor", desc: "Validation du Bachelor 3 à Ynov Campus Bordeaux." },
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
