import type { PresentationBlock } from '@/types';
import { SigboxDashboard1, SigboxOffre1, SigboxDevis1, Sigboxdevis2, SigboxPlanning, sigboxFactureLot } from '@/img';

// Sigbox (Alternance Actulog) — 2024
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `Durant mon alternance chez Actulog, j'ai contribué activement au développement de Sigbox — un ERP métier destiné aux cartonniers façonneurs, couvrant l'ensemble de leur chaîne commerciale et de production.

Sigbox est le portage en technologie Microsoft du pro-logiciel Sigbox ToolBook. C'est un logiciel Client Lourd (C# / WPF / XAML) avec une architecture MVVM et un backend SQL Server. L'un des axes majeurs de mon travail a été de participer à la migration progressive de l'architecture MVC vers MVVM sur l'ensemble des modules.`,
  },
  { type: 'image', content: SigboxDashboard1, caption: "Écran d'accueil - Dashboard principal" },
  {
    type: 'text',
    content: `📋 Gestion des Devis

Le module Devis est au cœur de la chaîne commerciale. Il permet de créer et gérer des devis simples et composés pour les clients. Un devis dans Sigbox correspond à une quantité spécifique ; plusieurs devis sont regroupés en OFFRE qui est transmise au client.

La procédure de création guide l'utilisateur à travers :
- Sélection du client et adresse de livraison
- Saisie des articles avec gestion des quantités, prix d'achat, prix de vente et remises
- Calcul automatique des marges et tarifs
- Export en PDF, impression et envoi par email

J'ai contribué à l'amélioration des écrans de saisie et des flux de calcul tarifaire.`,
  },
  { type: 'image', content: SigboxDevis1, caption: "Module Devis - Création de devis" },
  { type: 'image', content: Sigboxdevis2, caption: "Module Devis - Consultation et modification" },
  {
    type: 'text',
    content: `💼 Module Offres

Le module Offres gère l'assemblage de plusieurs devis en une offre commerciale transmise au client. C'est le point de décision stratégique : le client sélectionne parmi les quantités et tarifs proposés pour passer sa commande.

Fonctionnalités :
- Fusion d'offres (une offre sur un type de caisse avec déclinaison de quantité et prix)
- Filtrage et suivi des offres (consultations, relances, statuts)
- Gestion des modèles personnalisés selon les clients
- Assistants pour optimiser l'offre
- Intégration API pour enregistrement et transmission

J'ai travaillé sur l'amélioration des flux de création et d'édition des offres commerciales.`,
  },
  { type: 'image', content: SigboxOffre1, caption: "Module Offres - Création et gestion des offres" },
  {
    type: 'text',
    content: `🧾 Facturation en Lot

Le module Facturation en Lot est un composant central pour la gestion de la facturation. C'est un processus complexe de traitement séquentiel qui génère et imprime en masse les factures clients.

Capacités :
- Génération de factures sur commande, bon de livraison, ou avancées
- Filtrage par client ou période de facturation
- Impression batch avec gestion des états de facturation (SOLDÉE, AVANCÉE)
- Calcul automatique des montants et taxes
- Interface intuitive avec cases à cocher pour la sélection

J'ai développé plusieurs aspects techniques de ce module, notamment la gestion du processus de traitement séquentiel et les interfaces de sélection et de lancement de la facturation.`,
  },
  { type: 'image', content: sigboxFactureLot, caption: "Module Facturation - Facturation en lot" },
  {
    type: 'text',
    content: `📅 Planning de Fabrication

Le module Planning offre une vue Gantt de l'atelier de fabrication, permettant de visualiser et modifier les tâches machine en temps réel. Il s'appuie sur une bibliothèque Gantt personnalisée (nGantt) adaptée aux contraintes métier.

Fonctionnalités :
- Visualisation des tâches (circuits de fabrication des Ordres de Fabrication)
- Tâches color-codées par état (En attente, En cours, Complétée, etc.)
- Drag & drop pour repositionner les tâches dans le planning
- Fenêtre de détail : informations OF, opérateurs assignés, machines utilisées
- Système d'alertes paramétrables (surcharge machine, retard, etc.)

J'ai contribué au développement de la surcouche métier de cette bibliothèque et à l'implémentation des détails de tâche et des alertes.`,
  },
  { type: 'image', content: SigboxPlanning, caption: "Module Planning - Vue Gantt de la fabrication" },
  {
    type: 'text',
    content: `🏗️ Stack technologique : C# / WPF | XAML | .NET Framework | MVVM pattern | SQL Server | Architecture Client Lourd`,
  },
];
