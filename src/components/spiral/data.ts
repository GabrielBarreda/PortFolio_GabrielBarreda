export interface SpiralSection {
  period: string;
  summary: string;
  bgTint: string;
}

// Clés = année simple (ex: "2026"), comme renvoyé par useSpiral
export const SPIRAL_SECTIONS: Record<string, SpiralSection> = {
  "2026": {
    period: "2026 – 2027",
    summary: "Bientôt en Master 2, peut-être au sein de votre entreprise si mon profil vous intéresse !",
    bgTint: "rgba(14, 60, 180, 0.13)",
  },
  "2025": {
    period: "2025 – 2026",
    summary: "Actuellement en Master 1 en alternance chez Ynov Campus Bordeaux, Suite à la liquidation de la société qui m'employait jusqu'à présent, je suis actuellement à la recherche d'une nouvelle entreprise afin d'effectuer ma dernière année d'alternance.",
    bgTint: "rgba(10, 130, 90, 0.11)",
  },
  "2024": {
    period: "2024 – 2025",
    summary: "Une fois mon BTS SIO en poche, j'ai pu intégrer le Bachelor 3 en alternance chez Ynov Campus Bordeaux avec la même entreprise qui m'avait pris en stage.",
    bgTint: "rgba(190, 70, 15, 0.10)",
  },
  "2023": {
    period: "2023 – 2024",
    summary: "Suite à mon premier Stage j'ai donc pu passer en deuxième année, faire un second stage et valider mon BTS SIO.",
    bgTint: "rgba(170, 130, 10, 0.10)",
  },
  "2022": {
    period: "2022 – 2023",
    summary: "Suite à l'obtention du bac j'ai pu intégrer le BTS Services Informatiques aux Organisations que proposait le lycée Gustave Eiffel à Bordeaux.",
    bgTint: "rgba(90, 15, 150, 0.10)",
  },
  "2021": {
    period: "2018 – 2022",
    summary: "J'ai pu effectuer ma période lycée au sein du lycée Fernand Daguin, où j'ai obtenu mon Baccalauréat général option Mathématiques et Sciences de l'Informatique.",
    bgTint: "rgba(5, 8, 35, 0.18)",
  },
  "2020": {
    period: "2018 – 2022",
    summary: "J'ai pu effectuer ma période lycée au sein du lycée Fernand Daguin, où j'ai obtenu mon Baccalauréat général option Mathématiques et Sciences de l'Informatique.",
    bgTint: "rgba(5, 8, 35, 0.18)",
  },
};

export const SPIRAL_DEFAULT_SUMMARY = "Période d'exploration technique";
