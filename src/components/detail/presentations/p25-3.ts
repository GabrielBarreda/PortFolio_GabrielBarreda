import type { PresentationBlock } from '@/types';
import { TemplateDesigner1, TemplateDesigner2 } from '@/img';

// Designer Desktop (Projet Personnel) — 2025
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `TemplateDesigner est une application WPF/.NET 8 permettant de créer, modifier et gérer des templates de documents de manière visuelle et intuitive. L'application s'adresse aux professionnels ayant besoin de générer des documents personnalisés (factures, devis, CV, affiches, etc.) avec une mise en page précise et un mapping de données avancé.`,
  },
  { type: 'image', content: TemplateDesigner1, caption: "Éditeur principal" },
  {
    type: 'text',
    content: `L'application propose une interface utilisateur moderne et intuitive, permettant aux utilisateurs de concevoir rapidement des documents professionnels sans nécessiter de connaissances approfondies en design. Pour l'instant il est possible de réaliser des templates, des affiches, des CV ou autres documents au format papier.`,
  },
  { type: 'image', content: TemplateDesigner2, caption: "Exemple de CV créé depuis l'application" },
  {
    type: 'text',
    content: `🎯 Objectif du projet

Pour ce projet, je me suis largement inspiré de Canva et des solutions de templating disponibles majoritairement sur le web. Ma volonté était de créer un logiciel de bureau puissant permettant de :

- Manipuler des templates avec leur propre format d'extension (.tdt)
- Convertir des documents existants (PDF, images) en templates modifiables
- Réexporter dans de multiples formats (JSON, XAML, RDLC, PDF)`,
  },
  {
    type: 'text',
    content: `✨ Ce que permet l'application aujourd'hui

📁 Gestion des templates
- Création : De zéro, avec choix du format page (A4, A5, Letter) et orientation
- Ouverture : Chargement de templates existants (.json)
- Sauvegarde : Enregistrement complet (éléments, propriétés, bindings)
- Export : Vers JSON (format natif), XAML et RDLC en développement

🎨 Éditeur visuel
L'utilisateur peut composer son template par glisser-déposer d'éléments :

📦 Éléments disponibles :
├── 🔡 Texte fixe
├── 📝 Texte dynamique (liaison données)
├── ⬜ Rectangle (fond, bordure, coins arrondis)
├── 📏 Ligne (horizontale/verticale)
├── 🖼️ Image (logo, photo, signature)
├── 📊 Code-barres (QR Code, Code 128, EAN13)
├── 🏁 Grille (organisation en tableau)
└── ☰ StackPanel (empilement horizontal/vertical)

[capture écran: palette éléments / toolbox / éléments disponibles]`,
  },
  {
    type: 'text',
    content: `🧩 Gestion de la disposition

J'ai ajouté des conteneurs intelligents :
- Grille : Organisation en lignes et colonnes, comme un tableau
- StackPanel : Empilement automatique (horizontal ou vertical)

[capture écran: palette éléments / conteneurs / grille layout]

⚙️ Personnalisation

Une page de paramètres permet à l'utilisateur de :
- Régler ses propres raccourcis clavier
- Changer le thème (clair/sombre)
- Configurer le comportement de l'application

[capture écran: paramètres / préférences utilisateur]

🔗 Liaison de données (Mapping)

Le template peut être lié à des données externes via un système de binding :
- Chargement d'une classe métier
- Sélection d'une propriété depuis l'arborescence
- Liaison automatique avec un élément de texte dynamique`,
  },
];
