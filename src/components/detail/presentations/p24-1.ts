import type { PresentationBlock } from '@/types';
import { TaskManager1, TaskManager2, TaskManager3 } from '@/img';

// TaskManager (Projet Scolaire) — 2024
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `TaskManager est une application web de gestion de tâches développée comme projet scolaire. L'application permet aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes de manière simple et intuitive.`,
  },
  { type: 'image', content: TaskManager1, caption: "Dashboard principal - Liste des tâches" },
  {
    type: 'text',
    content: `✨ Fonctionnalités principales

📋 Gestion des tâches
- Création de nouvelles tâches avec titre et description
- Édition et modification des tâches existantes
- Suppression des tâches complétées
- État des tâches (à faire, en cours, complétée)`,
  },
  { type: 'image', content: TaskManager2, caption: "Formulaire création / édition tâche" },
  {
    type: 'text',
    content: `🎯 Organisation
- Listes de tâches catégorisées
- Affichage sous forme de planning

✅ Suivi
- Marquage des tâches comme complétées
- Historique des tâches terminées
`,
  },
  { type: 'image', content: TaskManager3, caption: "Vue filtrée / tri par priorité" },
  {
    type: 'text',
    content: `🏗️ Architecture

Application React moderne avec :
- Composants fonctionnels avec hooks
- Vite comme build tool
- Architecture modulaire et maintenable
- Gestion d'état locale avec useState

Stack technologique : React | Vite | TypeScript | Tailwind CSS`,
  },
];
