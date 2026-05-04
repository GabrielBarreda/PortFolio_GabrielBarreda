import type { PortfolioData, SpiralItem } from '../types';

export const DATA: PortfolioData = {
  name: "GABRIEL",
  title: "Desktop & FullStack Engineer",
  tagline: "Ingénieur passionné par les interfaces interactives et les architectures desktop robustes",
  bio: "Spécialisé dans le développement d'applications performantes, je combine une expertise backend solide avec une sensibilité frontend pour créer des expériences numériques uniques.",
  skills: {
    "Frontend": ["React", "TypeScript", "Three.js", "Vite", "Electron"],
    "Backend": ["Node.js", "Express", "PostgreSQL", "Docker"],
    "Expertise": ["Architecture Logicielle", "UI/UX Interactive", "Systèmes Desktop"]
  },
  contact: {
    email: "contact@gabriel-dev.com",
    github: "https://github.com/gabriel-dev",
    linkedin: "https://linkedin.com/in/gabriel-dev"
  },
  projects: [
    // 2026
    { id: "p26-1", title: "Quantum OS Interface", cat: "Desktop", year: 2026, color: "#7eb8f7", summary: "Interface système futuriste pour processeurs quantiques.", desc: "Développement d'une couche d'abstraction visuelle pour le monitoring de calculs quantiques en temps réel.", highlights: ["Performance extrême", "WebGPU rendering"], tech: ["Electron", "React", "WebGPU"] },
    { id: "p26-2", title: "Neural Connect", cat: "API", year: 2026, color: "#a187f5", summary: "Passerelle intelligente pour interfaces neuronales.", desc: "Système de traitement de signal binaire pour prothèses connectées.", highlights: ["Latence < 1ms", "Signal processing"], tech: ["Rust", "Node.js"] },
    { id: "p26-3", title: "Ethereal Web", cat: "Web", year: 2026, color: "#f587d6", summary: "Nouveau paradigme de navigation 3D.", desc: "Framework de navigation spatiale pour le web décentralisé.", highlights: ["No-DOM rendering", "Three.js custom core"], tech: ["TypeScript", "Three.js"] },
    
    // 2025
    { id: "p25-1", title: "Titan Cloud Sync", cat: "Desktop", year: 2025, color: "#7ef7c2", summary: "Client de synchronisation de fichiers haute sécurité.", desc: "Alternative open-source ultra-rapide aux services cloud majeurs.", highlights: ["End-to-end encryption", "P2P protocol"], tech: ["Electron", "Go"] },
    { id: "p25-2", title: "Cyber-Vigilance", cat: "Mobile", year: 2025, color: "#f7e57e", summary: "App de monitoring réseau mobile.", desc: "Outil de détection d'intrusions pour réseaux 5G.", highlights: ["Real-time alerts", "AI Detection"], tech: ["React Native", "Python"] },
    { id: "p25-3", title: "OpenShader", cat: "Open Source", year: 2025, color: "#f77e7e", summary: "Bibliothèque de shaders réutilisables.", desc: "Projet communautaire regroupant plus de 500 effets visuels optimisés.", highlights: ["Communauté active", "Optimisation GPU"], tech: ["GLSL", "C++"] },

    // 2024
    { id: "p24-1", title: "Project Alpha", cat: "Web", year: 2024, color: "#ff5733", summary: "Application web innovante.", desc: "Refonte complète de l'écosystème digital pour une multinationale.", highlights: ["Next.js App Router", "Server Components"], tech: ["Next.js", "Tailwind"] },
    { id: "p24-2", title: "Project Beta", cat: "Desktop", year: 2024, color: "#33c3ff", summary: "Outil de productivité desktop.", desc: "Application de gestion de flux de travail pour créateurs de contenu.", highlights: ["Multi-window sync", "Local storage optim"], tech: ["Electron", "SQLite"] },
    { id: "p24-3", title: "Project Gamma", cat: "API", year: 2024, color: "#8333ff", summary: "Moteur de recommandations.", desc: "API haute performance utilisant le machine learning pour suggérer du contenu.", highlights: ["Redis caching", "Microservices"], tech: ["Node.js", "TensorFlow"] },

    // 2023
    { id: "p23-1", title: "ScolarHub", cat: "Projet Scolaire", year: 2023, color: "#ffbd33", summary: "Gestion de vie étudiante.", desc: "Plateforme collaborative pour étudiants permettant le partage de notes et d'agenda.", highlights: ["User management", "Socket.io"], tech: ["React", "Express"] },
    { id: "p23-2", title: "DataViz Pro", cat: "Extension", year: 2023, color: "#33ffbd", summary: "Extension de visualisation de données.", desc: "Transforme les tableaux HTML complexes en graphiques interactifs.", highlights: ["Browser compatibility", "D3.js"], tech: ["JS", "D3.js"] },
    { id: "p23-3", title: "CodeStream", cat: "Open Source", year: 2023, color: "#bd33ff", summary: "Lecteur de logs temps réel.", desc: "Utilitaire CLI pour le streaming et le filtrage de logs distribués.", highlights: ["Go concurrency", "Low footprint"], tech: ["Go"] },

    // 2022
    { id: "p22-1", title: "RetroGame Engine", cat: "Projet Perso", year: 2022, color: "#ff3357", summary: "Moteur de jeu 2D.", desc: "Création d'un moteur de jeu minimaliste pour le développement de jeux rétro.", highlights: ["Physics engine", "Pixel perfect"], tech: ["C++", "SDL2"] },
    { id: "p22-2", title: "AgriTrack", cat: "Mobile", year: 2022, color: "#33ff57", summary: "Monitoring agricole.", desc: "Application mobile connectée à des capteurs IoT pour le suivi des cultures.", highlights: ["Bluetooth Low Energy", "Charts"], tech: ["React Native"] },
    { id: "p22-3", title: "SecurePass", cat: "Desktop", year: 2022, color: "#3357ff", summary: "Gestionnaire de mots de passe.", desc: "Application desktop sécurisée avec chiffrement AES-256 local.", highlights: ["Crypto library", "Biometrics"], tech: ["Electron", "Node.js"] }
  ],
  accomplishments: [
    { id: "acc-2021-1", year: 2021, title: "Master en Informatique", desc: "Obtention du diplôme de Master avec les félicitations du jury." },
    { id: "acc-2021-2", year: 2021, title: "Stage chez TechGiant", desc: "Développement d'outils internes pour la gestion de flottes de serveurs." },
    { id: "acc-2021-3", year: 2021, title: "Hackathon Champion", desc: "Gagnant de la compétition nationale de cybersécurité." },
    
    { id: "acc-2020-1", year: 2020, title: "Licence Informatique", desc: "Validation de la licence avec spécialisation génie logiciel." },
    { id: "acc-2020-2", year: 2020, title: "Premier projet Open Source", desc: "Publication d'une librairie de composants React sur NPM." },
    { id: "acc-2020-3", year: 2020, title: "Junior Dev Award", desc: "Récompensé pour la meilleure contribution étudiante régionale." }
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
