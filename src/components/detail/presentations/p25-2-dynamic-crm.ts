import type { PresentationBlock } from '@/types';

// CRM (Projet Personnel) — 2025
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `J'ai développé ce CRM, une application desktop spécialisée pour les courtiers en énergie B2B. Ce projet personnel répond aux besoins métier très spécifiques du courtage d'électricité et gaz : gestion de portefeuilles clients multi-sites, suivi commercial complexe et analyse comparative de tarifs fournisseurs.

Le CRM gère le cycle complet du courtier : prospection, qualification clients, suivi contrats énergétiques, relances automatisées et génération de dossiers de comparaison tarifaire pour négocier les meilleurs prix auprès des fournisseurs.`,
  },
  {
    type: 'text',
    content: `[capture écran: accueil CRM / dashboard principal]

👥 Gestion Clients & Multi-sites

Le cœur du métier : chaque client peut être particulier ou professionnel, mono-site ou multi-site (5-50 sites typiquement).

Données complètes capturées pour chaque client :
- Identité (nom, prénom, raison sociale, SIRET, SIREN pour les pro)
- Contacts multiples (email principal, secondaire, téléphone, fax)
- Sites distincts avec localisation complète (adresses, codes postaux, régions)
- Données énergie par site : PDL (électricité), PCE (gaz), consommations annuelles
- Fournisseurs actuels et tarifs (crucial pour comparaison)
- Dates de fin de contrat (fenêtre de relance critique : -90 jours)

Architecture : chaque Client peut avoir plusieurs AdresseClient (multi-site), chacune avec ses propres PDL/PCE et tarifs.`,
  },
  {
    type: 'text',
    content: `[capture écran: fiche client détaillée / adresses multi-sites]

⚡ Données Énergie & Tarification

Le CRM gère les spécificités énergétiques que les courtiers manipulent quotidiennement :

**Électricité**
- PDL (Point De Livraison) unique par site
- Puissance souscrite
- Consommation annuelle (MWh)
- Fournisseur actuel + tarif actuel
- Date fin contrat

**Gaz**
- PCE (Point de Comptage d'Échange) unique par site
- Consommation annuelle (MWh ou Nm³)
- Classe de consommation (domestique/PME/industriel)
- Fournisseur + tarif
- Date fin contrat

**Comparaison tarifaire**
- Base de fournisseurs multi-offres (EDF, Engie, TotalEnergies, Vattenfall, etc.)
- Tarifs par zone géographique
- Variation prix (hausse/baisse/stable) vs mois précédent
- Extraction données EPEX spot (prix horaires marché)
- Calcul automatique du gain potentiel (enjeu clé pour négociation)`,
  },
  {
    type: 'text',
    content: `[capture écran: tableau comparaison fournisseurs / détail tarifs]

📂 Gestion Dossiers & Documents

Organisation des dossiers clients et documents métier :
- Dossiers Windows structurés par client (organisation locale)
- Chemins de dossiers enregistrés en base de données
- Accès rapide aux documents et fichiers du client
- Historique des modifications et accès aux dossiers`,
  },
  {
    type: 'text',
    content: `[capture écran: sélection dossiers clients / structure arborescence]

📧 Suivi Commercial & Alertes

Gestion du pipeline commercial et relances intelligentes :

**État d'avancement dossier**
- Prospect (nouveau prospect, non validé)
- Client (prospect converti, contrat signé)
- Priorité (A = gros CA, B = relance rapide, C = prospect froid)

**Follow-up & Alertes**
- Historique des échanges et dates clés
- Suivi des actions commerciales
- Notes internes sur le dossier
- Statut de relance (pending, en cours, complété, bloqué)
- Dates de prochaine action

**Workflow relance (critique métier)**
- Alerte automatique 90 jours avant fin contrat
- Listes de dossiers à relancer (segmentés par priorité)
- Historique des relances (dates, type, résultat)
- Intégration email basique (MailKit)`,
  },
  {
    type: 'text',
    content: `[capture écran: module follow-up / alertes relance]

📊 Analytics & Tableau de Bord

Visualisations commerciales avec LiveChartsCore :

**Métriques courtier**
- Nombre de prospects en portefeuille
- Nombre de clients actuels
- Répartition prospect vs client
- Taux de transformation (conversion)

**Données énergétiques**
- Répartition électricité vs gaz par client
- Graphiques de consommation (MWh total)
- Évolution tarifs par fournisseur
- Variation de prix (tendances)

**Performance CA**
- Commission estimée par dossier
- Commission réalisée (à la signature)
- CA potentiel (portefeuille)`,
  },
  {
    type: 'text',
    content: `[capture écran: dashboard analytics / charts commission et CA]

⚙️ Architecture & Infrastructure

Architecture robuste pour usage quotidien intensif (100-500 dossiers/courtier/an) :

**Couche présentation**
- WPF + XAML (interface desktop moderne)
- MVVM + Community Toolkit (séparation claire des responsabilités)
- MahApps.Metro (design professional dark theme)
- LiveChartsCore (visualisations en temps réel)

**Couche métier**
- Services (ClientService, DossierService, EnergyService, AlertService, FollowUpService)
- Repository pattern pour accès données unifié
- Gestion des droits (Admin, Courtier, Lecteur)
- Authentification sécurisée (PasswordHelper, hash bcrypt)

**Couche données**
- Entity Framework Core 10 (ORM moderne)
- PostgreSQL (scalabilité, multi-utilisateur)
- Migrations versionnées (schéma évolutif)
- DbContextFactory (gestion concurrence)
- Entités rich avec métadonnées (DateCreation, DateModification)`,
  },
  {
    type: 'text',
    content: `[capture écran: architecture MVVM / diagramme modèles]

💾 Modèle de Données Métier

Entités principales capturant la réalité du courtage :

\`\`\`
Client
├── Type (Particulier / Professionnel)
├── Identité (nom, raison sociale, SIRET/SIREN)
├── Contact (email, téléphone, fax)
├── Commercial
│   ├── Statut (Prospect / Client)
│   ├── Priorité (A/B/C)
│   ├── Commission (estimée/réalisée)
│   └── Dates clés (1er contact, signature)
├── Énergie
│   ├── Fournisseur électricité + tarif + PDL
│   ├── Fournisseur gaz + tarif + PCE
│   └── Dates fin contrat (alertes -90j)
└── Relations
    ├── Adresses (multi-sites) ✅
    ├── Dossiers (documents) ✅
    └── FollowUp (alertes) ✅

AdresseClient
├── Localisation (rue, CP, ville, région)
├── Données pro (type commerce, surface, nb employés)
├── PDL/PCE locaux
└── Consommation par site

FollowUp
├── ClientId + ScheduledAt
├── Status (Pending / Done / Overdue)
└── Type alerte (relance, fin contrat -90j, etc.)
\`\`\``,
  },
  {
    type: 'text',
    content: `[capture écran: ERD modèle données / relations entités]

🚀 Roadmap Technique (En cours)

Phase 1 — Fondations critiques (3-4 semaines en cours)
✅ Gestion documentaire réelle (OCR factures, stockage BD)
✅ Pipeline kanban visible (prospect → proposition → signé)
✅ Alertes intelligentes relance (fin contrat -90j)
✅ Dashboard manager KPI (CA, conversion, pipeline)
✅ Comparaison tarifaire multi-fournisseurs

Phase 2 — Productivité+ (après Phase 1 stabilisée)
🔄 Synchronisation email bidirectionnelle (threads liés)
🔄 Import/export intelligent (Excel, factures)
🔄 Segmentation commerciale (tags, filtres)
🔄 Historique tarifaire + simulation gain

Phase 3 — Équipe & Automatisation (après Phase 2)
🔄 Gestion utilisateurs/roles/audit
🔄 Workflows automatisés (relances sans effort)
🔄 Signature électronique basique

Phase 4 — Portail Client Web (après Phase 1-3 stable)
⏱️ Frontend Angular + API NestJS
⏱️ Upload documents clients
⏱️ Consultation contrats/tarifs`,
  },
  {
    type: 'text',
    content: `[capture écran: kanban pipeline / états dossiers]`,
  },
  {
    type: 'text',
    content: `Stack technologique : C# / .NET 10 | WPF + XAML | MVVM + Community Toolkit | Entity Framework Core 10 | PostgreSQL | EPPlus (Excel) | LiveChartsCore | MahApps.Metro | MailKit`,
  },
];
