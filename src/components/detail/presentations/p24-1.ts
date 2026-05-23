import type { PresentationBlock } from '@/types';

// TaskManager (Projet Scolaire) — 2024
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `TaskManager est une application web de gestion de tâches développée comme projet scolaire. L'application permet aux utilisateurs de créer, organiser et suivre leurs tâches quotidiennes de manière simple et intuitive.

[capture écran: dashboard principal / liste des tâches]`,
  },
  {
    type: 'text',
    content: `✨ Fonctionnalités principales

📋 Gestion des tâches
- Création de nouvelles tâches avec titre et description
- Édition et modification des tâches existantes
- Suppression des tâches complétées
- État des tâches (à faire, en cours, complétée)

[capture écran: formulaire création / édition tâche]

🎯 Organisation
- Listes de tâches catégorisées
- Tri et filtrage des tâches
- Priorisation des tâches (haute, normale, basse)
- Dates d'échéance

[capture écran: vue filtrée / tri par priorité]

✅ Suivi
- Marquage des tâches comme complétées
- Historique des tâches terminées
- Affichage du progrès global
- Statistiques (nombre tâches, complétées, en cours)

[capture écran: statistiques / progrès]`,
  },
  {
    type: 'text',
    content: `🏗️ Architecture

Application React moderne avec :
- Composants fonctionnels avec hooks
- Vite comme build tool
- Architecture modulaire et maintenable
- Gestion d'état locale avec useState
- Responsive design (mobile-first)

[capture écran: interface responsive / vue mobile]

Stack technologique : React | Vite | TypeScript | Tailwind CSS`,
  },
];
