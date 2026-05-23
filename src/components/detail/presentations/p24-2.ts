import type { PresentationBlock } from '@/types';

// Sigbox (Alternance Actulog) — 2024
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `Durant mon alternance chez Actulog, j'ai contribué activement au développement de Sigbox — un ERP métier destiné aux cartonniers façonneurs, couvrant l'ensemble de leur chaîne commerciale et de production.

Sigbox est le portage en technologie Microsoft du pro-logiciel Sigbox ToolBook. C'est un logiciel Client Lourd (C# / WPF / XAML) avec une architecture MVVM et un backend SQL Server. L'un des axes majeurs de mon travail a été de participer à la migration progressive de l'architecture MVC vers MVVM sur l'ensemble des modules.

[capture écran: écran d'accueil / dashboard principal]`,
  },
  {
    type: 'text',
    content: `💼 Offre commerciale

Le module Offre permet aux équipes commerciales de gérer et envoyer les offres aux clients. J'ai contribué à l'évolution des écrans de saisie, à l'amélioration des flux de création et d'édition, ainsi qu'à la fiabilisation des processus d'envoi.

[capture écran: module offre / création d'offre]`,
  },
  {
    type: 'text',
    content: `🚛 Logistique

Le module Logistique couvre le suivi des fabrications en atelier : saisie des palettes produites, constatation des matières premières consommées et clôture des ordres de fabrication. J'ai développé plusieurs écrans de ce module et participé à la refonte de certains flux de saisie.

[capture écran: module logistique / suivi fabrication]`,
  },
  {
    type: 'text',
    content: `📦 Livraison

Le module Livraison gère la préparation et l'expédition des commandes clients : palettisation, édition de la liasse logistique (bon de livraison, liste de colisage, étiquettes palettes) et transmission EDI. J'ai travaillé sur l'amélioration de l'ergonomie et l'automatisation de certaines étapes du processus d'expédition.

[capture écran: module livraison / préparation expédition]`,
  },
  {
    type: 'text',
    content: `🏭 Fournisseurs

Le module Fournisseurs regroupe la gestion des onduleurs et fournisseurs de matière (plaques carton). Il inclut notamment la configuration des onduleuses, leurs tarifs et leurs quantités minimales — des données clés utilisées par le moteur d'achat lors du calcul des devis. J'ai contribué à la maintenance et à l'évolution de ce module.

[capture écran: module fournisseurs / configuration onduleuses]`,
  },
  {
    type: 'text',
    content: `🧾 Facturation

Deux composants distincts ont retenu mon attention sur la partie facturation.

La Facturation en Lot permet de générer et imprimer en masse les factures clients (sur commande, sur bon de livraison, avancées), avec des critères de sélection par client ou par période. J'ai travaillé sur le développement de ce module qui implique un processus de traitement séquentiel assez complexe.

La Remise en Banque permet quant à elle de regrouper et clôturer les règlements clients avant transmission bancaire. J'ai contribué à la mise en place de l'interface de recherche, des filtres et des fonctionnalités d'impression associées.

[capture écran: module facturation / facturation en lot]`,
  },
  {
    type: 'text',
    content: `📬 Commandes

Le module Commandes assure le suivi des commandes clients depuis la validation du devis jusqu'à la mise en fabrication. J'ai participé à l'évolution de certains écrans et à la fiabilisation des transitions entre les différents états d'une commande.

[capture écran: module commandes / suivi des commandes]`,
  },
  {
    type: 'text',
    content: `📅 Planning

Le module Planning offre une vue Gantt de l'atelier de fabrication, permettant de visualiser et déplacer les tâches machine en temps réel. Il s'appuie sur une bibliothèque Gantt personnalisée (nGantt) sur laquelle j'ai développé une surcouche métier adaptée aux contraintes de Sigbox.

Les tâches représentent les circuits de fabrication des ordres (OF) et sont color-codées selon leur état. J'ai également travaillé sur la fenêtre de détail tâche (infos OF, opérateurs, machines) et sur les bases d'un système d'alertes paramétrables (surcharge machine, etc.).

[capture écran: module planning / vue Gantt fabrication]`,
  },
  {
    type: 'text',
    content: `📐 Bureau d'Études (BE)

Le module BE gère les demandes d'étude techniques — la conception et le dimensionnement des emballages carton sur mesure pour les clients. Chaque demande passe par un workflow structuré (non traitée → en cours → clôturée) avec un système de droits utilisateurs différenciés.

J'ai contribué au développement de ce module en implémentant notamment la gestion des suites et clones de demandes, l'enrichissement des formulaires de saisie (propriétés volumiques, contraintes de palettisation, faisabilité industrielle) et la gestion des travaux associés à chaque demande.

[capture écran: module BE / demandes d'étude techniques]

🏗️ Stack technologique : C# / WPF | XAML | .NET Framework | MVVM pattern | SQL Server | Architecture Client Lourd`,
  },
];
