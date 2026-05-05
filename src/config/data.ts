import type { PortfolioData, SpiralItem } from '../types';

export const DATA: PortfolioData = {
  name: "GABRIEL",
  title: "Développeur Desktop & FullStack",
  tagline: "Développeur passionné par les interfaces interactives",
  bio: "Spécialisé dans le développement d'applications performantes, je combine une expertise backend solide avec une sensibilité frontend pour créer des expériences numériques uniques.",
  skills: {
    "Web Frontend": ["React", "TypeScript", "Three.js", "Vite", "Vue", "Angular", "Tailwind", "Bootstrap", "Material UI"],
    "Web Backend": ["Node.js", "Express", "PostgreSQL", "Docker"],
    "Expertise": [".Net", "Architecture Logicielle", "Client Lourd", "Applications Métier"],
    "Logiciel": ["WPF", "Entity Framework"]
  },
  contact: {
    email: "gabri.barreda@gmail.com",
    github: "https://github.com/GabrielBarreda",
    linkedin: "..."
  },
  projects: [
    // 2026-2027 (premier année année de BUT & deuxième année d'alternance)
    { id: "p26-1", title: "CheerzUp (Projet Groupe)", cat: "Mobile", year: 2026, color: "#7eb8f7", summary: "Application mobile de jeux de bars.", desc: "Développement d'une application mobile permettant de partager de meilleur moments au bar.", highlights: ["Angular", "Docker", "CICD"], tech: ["NextJS", "Angular", "Docker"] },
    { id: "p26-2", title: "FnR multi-lines (Projet Personel)", cat: "Extension", year: 2026, color: "#787878ff", summary: "Extension VSCode.", desc: "Extension permettant le Find and Replace multi-line / multi File.", highlights: ["VSC Extension", "VScode API"], tech: ["VScode", "Typescript", "webview"] },

    // 2025-2026 (licence ( B3 ) & première année d'alternance)
    { id: "p25-1", title: "Ychess (Projet Scolaire)", cat: "Web", year: 2025, color: "#7ef7c2", summary: "Application web de jeu d'echec.", desc: "Application web de jeu d'echec .", highlights: ["React", "TypeScript", "Next.js"], tech: ["Next.js", "Tailwind"] },
    { id: "p25-2", title: "BankApp (Projet Scolaire)", cat: "Mobile", year: 2025, color: "#f7e57e", summary: "Application bancaire mobile", desc: "Application bancaire mobile ayant pour but de regrouper plusieur portefeuilles.", highlights: ["Angular", "TypeScript"], tech: ["Angular", "TypeScript"] },
    { id: "p25-3", title: "Designer Desktop (Projet Personnel)", cat: "Desktop", year: 2025, color: "#f77e7e", summary: "Designer canva Like", desc: "Projet personnel censé pouvoir permettre la modification de PDF / le templating de document format papier / le maquettage avancé (formulaire, page web, application web)  .", highlights: [".NET", "WPF"], tech: ["XAML", "C#"] },

    // 2024-2025 (2eme années BTS & deuxième année d'alternance)
    { id: "p24-1", title: "Leprojet", cat: "Web", year: 2024, color: "#ff5733", summary: "Application web innovante.", desc: "Refonte complète de l'écosystème digital pour une multinationale.", highlights: ["Next.js App Router", "Server Components"], tech: ["Next.js", "Tailwind"] },

    // 2023-2024 (1ere années BTS & première année d'alternance)
    { id: "p23-1", title: "TaskManager (Projet Scolaire)", cat: "Projet Scolaire", year: 2023, color: "#ffbd33", summary: "Application web de gestion des tâches.", desc: "Application permettant de gérer des tâches.", highlights: ["Tasks management"], tech: ["React", "Vite"] },

    // ...-2022 avant BTS > pas de projet informatique a part un jeux scratch peut être ...
  ],
  accomplishments: [
    { id: "acc-2020-1", year: 2020, title: "Baccalauréat général", desc: "Validation du baccalauréat Option Maths et NSI." },
    { id: "acc-2021-1", year: 2021, title: "Premier Stage", desc: "j'ai pus effectuer en fin d'année scolaire 2020/2021 un stage dans l'entrprise Actulog, anciennement Antsys située a Bordeaux." },
    { id: "acc-2022-1", year: 2021, title: "Deuxième Stage", desc: "tous s'étant passé pour le mieux la première fois Actulog m'a offert l'opportunité d'y faire un second stage en 2021-2022 " },
    { id: "acc-2022-2", year: 2021, title: "Obtention du BTS SIO", desc: "Validation du BTS SIO option SLAM" },


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
