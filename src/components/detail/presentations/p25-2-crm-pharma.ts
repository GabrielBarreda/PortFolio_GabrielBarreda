import type { PresentationBlock } from '@/types';
import { DashboardCRMpharma, PipelinKanbanCRMpharma, WorkflowCRMpharma } from '@/img';

// CRM Délégué Pharmaceutique (Projet Personnel) — 2025/2026
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `J'ai conçu et développé ce CRM complet à destination des délégués pharmaceutiques terrain. Le projet couvre la totalité du cycle commercial : gestion du portefeuille de pharmacies, suivi des visites, pipeline Kanban, et une couche d'automatisation IA (n8n + GPT-4o-mini) pour la structuration des comptes rendus, la génération des emails de relance et le scoring des clients.

L'objectif métier : permettre à un délégué gérant 50 à 150 pharmacies de se concentrer sur le terrain en déléguant la partie administrative à l'IA.`,
  },
  { type: 'image', content: DashboardCRMpharma, caption: "Dashboard — KPIs, pipeline, alertes clients" },
  {
    type: 'text',
    content: `📊 Dashboard & KPIs

Vue d'ensemble du portefeuille en temps réel :
- Chiffre d'affaires mensuel et annuel avec progression N vs N-1
- Nombre de visites effectuées vs objectif
- Clients à risque (inactivité > 60 jours, détection automatique)
- Pipeline Kanban (À Contacter → RDV Planifié → Devis Envoyé → Signé/Perdu)
- Alertes IA : relances à déclencher, briefs de visites en attente
- Répartition des segments A / B / C du portefeuille`,
  },
  { type: 'image', content: PipelinKanbanCRMpharma, caption: "Pipeline Kanban — drag-and-drop des prospects" },
  {
    type: 'text',
    content: `🗂️ Pipeline Kanban (Angular CDK Drag & Drop)

Gestion visuelle du cycle de vente prospect → client :

**4 colonnes :**
- À Contacter (prospects non encore visités)
- RDV Planifié (premier contact établi)
- Devis Envoyé (offre transmise, en attente de décision)
- Signé / Perdu (clôture du dossier)

Déplacement par drag-and-drop avec saisie de motif obligatoire.
Webhook automatique au changement de colonne :
- Passage en "Signé" → email de bienvenue généré par IA
- Passage en "Perdu" → relance planifiée à +90 jours`,
  },
  {
    type: 'text',
    content: `

📱 Application Terrain Flutter (Mobile)

L'app mobile accompagne le délégué pendant ses tournées :

**Accueil** : KPIs du jour + liste des clients à risque à prioriser
**Planning** : tournées des 30 prochains jours par jour de visite
**Pharmacies** : liste filtrée avec recherche + fiche détaillée
**Pipeline Kanban** : consultation en lecture sur le terrain

**Nouvelle visite (fonctionnalité clé)** :
1. Sélection de la pharmacie dans la liste
2. Saisie du CR par dictée vocale (speech-to-text natif Flutter)
3. Envoi → l'IA structure la note brute en CR formaté en ~5 secondes
4. Relecture + validation en 1 clic

La dictée vocale supprime 80% du temps de saisie après chaque visite.`,
  },
  { type: 'image', content: WorkflowCRMpharma, caption: "Workflow n8n — structuration CR via GPT-4o-mini" },
  {
    type: 'text',
    content: `🤖 Automatisations IA (n8n + GPT-4o-mini)

Le cœur différenciateur du projet : une couche d'orchestration IA sans code backend supplémentaire.

**Workflow 1 — Structuration CR post-visite**
Note brute dictée → webhook n8n → prompt GPT-4o-mini → CR structuré (résumé, commandes, points d'attention, concurrence, prochaine action) → sauvegarde backend en statut "À valider"

**Workflow 2 — Relances automatiques (CRON nocturne)**
Récupération des clients inactifs → génération d'un email personnalisé par pharmacie → envoi SMTP → log dans la base

**Workflow 3 — Scoring pharmacies (hebdomadaire)**
Calcul du score de risque combinant délai d'inactivité, volume N vs N-1, fréquence de commandes → mise à jour des segments ABC

**Workflow 4 — Brief visite (avant tournée)**
Synthèse automatique de l'historique + dernière commande + points d'attention pour chaque pharmacie du planning du jour

Coût IA estimé : ~0,04 $/mois (100 visites) avec GPT-4o-mini.`,
  },
  {
    type: 'text',
    content: `

⚙️ Architecture Backend — Clean Architecture C#

Backend structuré en 4 projets selon les principes de la Clean Architecture :

\`\`\`
CrmPharma.Domain         ← entités + enums + règles métier (0 dépendance)
CrmPharma.Application    ← DTOs, interfaces (ports), services métier
CrmPharma.Infrastructure ← EF Core, repositories, n8n, SMTP, seed
CrmPharma.Api            ← controllers, Program.cs, Swagger, sécurité
\`\`\`

Entités principales :
- **Pharmacie** — portefeuille, segment ABC, score risque
- **CarteKanban** — pipeline commercial (4 colonnes)
- **Interaction** — visites, notes brutes, CRs structurés
- **Email** — relances manuelles et automatiques
- **Produit / OperationProduit** — catalogue + historique commandes
- **Tournee / Tache** — planning terrain`,
  },
  {
    type: 'text',
    content: `Stack technologique :
**Backend** : C# / ASP.NET Core 8 · Clean Architecture · Entity Framework Core 8 · SQLite → PostgreSQL · MailKit · Serilog · xUnit + Moq
**Front Web** : Angular 18 · Angular Material · CDK Drag & Drop · TypeScript
**Mobile** : Flutter · Riverpod · Dio · speech_to_text · go_router
**Automatisation** : n8n · GPT-4o-mini (OpenAI) · webhooks HTTP`,
  },
];
