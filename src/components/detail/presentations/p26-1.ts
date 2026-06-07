import type { PresentationBlock } from '@/types';
import { CheerzUpBackOfficeDashboard, CheerzUpBOGestionEquipe, CheerzUpBOGestionMenu } from '@/img';

// CheerzUp (Projet Groupe) — 2026
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `J'ai participé au développement de CheerzUp, une plateforme de jeux de bars et de fidélisation client en environnement professionnel collectif. Ma contribution s'est concentrée sur le développement du back-office administrateur Angular 21.

CheerzUp connecte les bars avec leurs clients par le biais de jeux engageants, de campagnes de fidélisation et de gestion d'offres — l'objectif étant de créer une meilleure expérience client et de booster la fidélisation. Le back-office permet aux administrateurs de configurer, monitorer et piloter l'ensemble de la plateforme.`,
  },
  { type: 'image', content: CheerzUpBackOfficeDashboard, caption: "Back-office dashboard - Vue admin" },
  {
    type: 'text',
    content: `📊 Back-office Angular 21 (Développement complet)

J'ai développé de A à Z l'interface d'administration permettant :

• Dashboard : Visualisations Chart.js avec statistiques en temps réel (KPIs, actions joueurs, performance campagnes)
• Gestion des établissements : CRUD complets des bars avec horaires d'ouverture et horaires spéciaux
• Gestion des équipes : Hiérarchies de droits, Staff & Players avec permissions granulaires
• Configuration des campagnes : Création et paramétrage des campagnes de fidélisation
• Gestion des offres : Système d'offres promotionnelles liées aux campagnes
• Suivi des KPIs : Charts interactifs avec stats quotidiennes/mensuelles
• Architecture moderne : SSR (Server-Side Rendering) pour SEO, SCSS modulaire, composants réutilisables`,
  },
  { type: 'image', content: CheerzUpBOGestionEquipe, caption: "Dashboard BO - Gestion des équipes" },
  {
    type: 'text',
    content: `🏗️ Architecture & Best Practices

• Composants Angular réutilisables et modulaires
• Gestion d'état centralisée (services + RxJS)
• Intégration API complète (interceptors, error handling)
• Design responsive et accessibilité
• Tests unitaires et tests d'intégration
• Documentation des composants et workflows

Stack technologique : Angular 21 | TypeScript | RxJS | Chart.js | SCSS | SSR`,
  },
];
