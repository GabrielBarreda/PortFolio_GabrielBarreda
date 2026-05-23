import type { PresentationBlock } from '@/types';

// Ychess (Projet Scolaire) — 2025
export const presentation: PresentationBlock[] = [
  {
    type: 'text',
    content: `J'ai développé YChess, une application web de jeu d'échecs complète en React. Le projet démontre une architecture robuste avec un moteur d'échecs fonctionnel, des règles strictes et une interface intuitive.

L'application gère tous les éléments du jeu : déplacement des pièces, captures, roque, promotion de pions, détection d'échec et échec-et-mat.`,
  },
  {
    type: 'text',
    content: `🎮 Moteur d'Échecs (~650 lignes de logique)

Le cœur du jeu repose sur des custom hooks React qui encapsulent toute la logique échiquéenne :

• useGameLogic : Logique globale du jeu, sélection des pièces, validation des mouvements
• useCheckMate : Détection de l'état d'échec et d'échec-et-mat
• usePawnPromotion : Promotion automatique des pions en première ligne
• useRockHook : Validation et exécution du roque (castling)
• useChessUtils : Calcul des mouvements valides pour chaque type de pièce
• useBoardState : Gestion de l'état du plateau (positions, cases surlignées)
• usePlayerLogic : Alternance des joueurs, gestion des tours`,
  },
  {
    type: 'text',
    content: `♟️ Représentation & Interface

• Plateau 8x8 avec symboles Unicode pour les pièces (♔♕♖♗♘♙ / ♚♛♜♝♞♟)
• Composants modulaires : ChessBoard (plateau) → ChessBoardRow (rangée) → ChessBoardKey (case)
• Surlignage des mouvements valides en temps réel
• Messages contextuels (sélection, capture, échec, échec-et-mat)
• Affichage du joueur actuel (Blanc / Noir)`,
  },
  {
    type: 'text',
    content: `📱 Navigation & Pages

• GamePage : Interface principale du jeu avec plateau interactif
• HomePage : Écran d'accueil et navigation
• StatistiquePage : Suivi des statistiques de partie
• ExplicationJeux : Règles et tutoriel du jeu`,
  },
  {
    type: 'text',
    content: `Stack technologique : React 18 | React Router v6 | TypeScript | Vite | Tailwind CSS | Hooks personnalisés`,
  },
];
