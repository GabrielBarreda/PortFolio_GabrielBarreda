import type { PresentationBlock } from '@/types';

// FnR multi-lines (Projet Personnel) — 2026
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `J'ai développé FindNReplace VS, une extension Visual Studio 2022+ avancée pour la recherche et le remplacement multi-lignes avec un générateur de regex interactif.

Ce projet représente la migration complète d'une extension VS Code (TypeScript) vers une extension Visual Studio (C# / WPF) tout en préservant l'intégralité des fonctionnalités et de la logique métier.

[capture écran: interface principale extension / 3 onglets]`,
  },
  {
    type: 'text',
    content: `🔍 Recherche Multi-ligne

L'interface principale offre un textarea pour coller du texte multi-lignes, avec un générateur de regex automatique capable de déduire un pattern valide à partir de 2-5 lignes d'exemple. Les résultats sont surlignés directement dans l'éditeur VS avec support complet des flags regex (i, m, s) et navigation vers chaque match.

[capture écran: onglet recherche multi-ligne / textarea + regex generator]`,
  },
  {
    type: 'text',
    content: `🎯 Assistant Regex

Un onglet dédié propose des assistants pour :
- Échappement intelligent des caractères spéciaux
- Génération automatique de variantes de capture groups
- Analyse et validation de patterns regex avec conversion des flags VS Code ↔ .NET regex

[capture écran: onglet assistant regex / outils d'aide]`,
  },
  {
    type: 'text',
    content: `📂 Recherche Multi-fichiers

L'extension supporte la recherche et remplacement sur plusieurs fichiers avec :
- Sélection de fichiers individuels
- Sélection de dossiers avec glob patterns
- Remplacement batch dans tous les résultats
- Gestion robuste des encodages (UTF-8)

[capture écran: onglet multi-fichiers / sélecteur dossiers / résultats]`,
  },
  {
    type: 'text',
    content: `🏗️ Architecture modulaire

Core/ (logique métier portable) | Services/ (intégration VS) | UI/WPF (interface utilisateur)

La séparation nette entre la logique regex (indépendante de l'IDE) et l'intégration VS a permis une migration fluide depuis VS Code. Les tests unitaires sont entièrement réutilisables des deux côtés.`,
  },
  {
    type: 'text',
    content: `Stack technologique : C# / .NET 4.7.2+ | WPF + XAML | Visual Studio SDK (VSSDK) | Regex avancées | VSIX format | MSBuild`,
  },
];
