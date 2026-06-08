<div align="center">

# GABRIEL BARREDA
### Portfolio — Développeur Logiciel Métier & FullStack

<br/>

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

<br/>

> *Développeur .NET passionné, spécialisé dans les applications métier (client lourd) avec de solides bases fullstack.*

</div>

---

## ✦ Présentation

Ce repository héberge le code source de mon portfolio personnel, conçu pour présenter mon parcours, mes projets et mes compétences de manière immersive et soignée.

Le design s'inspire d'une esthétique **spatiale et minimaliste** — fond sombre, typographie monospace, animations fluides 

---


## 🧠 Stack & Compétences présentées

### Développement Desktop & Métier
`.NET` · `C#` · `WPF / MVVM` · `Entity Framework Core` · `SQL Server` · `SQLite` · `PostgreSQL` · 

### Développement Web Frontend
`React` · `TypeScript` · `Angular` · `Three.js` · `Tailwind CSS`

### Développement Web Backend
`C# ASP.NET` 

---

## 📁 Structure du projet

```
src/
├── components/     # Composants réutilisables (UI, layout, sections)
├── config/         # Données du portfolio (projets, compétences, expériences)
├── pages/          # Pages principales (Home, About, Contact, ExPro, détails)
├── styles/         # Design system, tokens CSS, styles globaux
├── hooks/          # Hooks React custom
└── types/          # Types TypeScript partagés
```

---

## 🚀 CI/CD & Déploiement

### GitHub Pages + GitHub Actions

Le portfolio est déployé automatiquement sur GitHub Pages via un workflow CI/CD.

#### Configuration

**Fichiers essentiels :**
- `.github/workflows/deploy.yml` — Workflow d'automatisation
- `vite.config.ts` — Configuration de la base URL pour GitHub Pages

#### Workflow automatique

```yaml
Trigger: git push vers 'main'
  ↓
Checkout code
  ↓
Setup Node.js 18 + npm cache
  ↓
npm ci (installer dépendances)
  ↓
npm run build (TypeScript + Vite)
  ↓
Upload artifact (dist/)
  ↓
Deploy to GitHub Pages
  ↓
✅ Portfolio en ligne
```

#### Variables configurées

```typescript
// vite.config.ts
const GITHUB_USERNAME = 'GabrielBarreda'
const REPO_NAME = 'PortFolio_GabrielBarreda'
const BASE = `/${REPO_NAME}/`  // en production
```

#### Scripts disponibles

```bash
# Développement local
npm run dev          # Démarre le serveur local (port 3000)

# Build
npm run build        # Compile TypeScript + Vite pour production

# Déploiement manuel (gh-pages)
npm install --save-dev gh-pages  # Installer gh-pages
npm run deploy                    # Build + déploiement

# Preview production
npm run preview       # Aperçu du build production

# Linting
npm run lint         # Vérifier la qualité du code (ESLint)
```

#### Statut du déploiement

- **Repository** : https://github.com/GabrielBarreda/PortFolio_GabrielBarreda
- **Live** : https://gabrielbarreda.github.io/PortFolio_GabrielBarreda/
- **Actions** : https://github.com/GabrielBarreda/PortFolio_GabrielBarreda/actions

---

## 📬 Contact

<div align="center">

**Gabriel Barreda**

[gabri.barreda@gmail.com](mailto:gabri.barreda@gmail.com) · [GitHub](https://github.com/GabrielBarreda) · *En recherche d'alternance (rythme 1 sem / 2 sem)*

</div>

---

<div align="center">
<sub>Conçu & développé par Gabriel Barreda — 2025/2026</sub>
</div>
