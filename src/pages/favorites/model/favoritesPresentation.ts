export const toFavoritesSummary = (count: number): string =>
  `${count} saved ${count === 1 ? "game" : "games"}`;

export const toFavoritesMeta = () => [
  { title: "Favorites — PlayCore" },
  { name: "description", content: "Your saved free-to-play games." },
];