import type { GamePlatform, GameSortBy } from "./types";

export const SORT_OPTIONS: ReadonlyArray<{ value: GameSortBy; label: string }> =
  [
    { value: "popularity", label: "Most popular" },
    { value: "release-date", label: "Newest" },
    { value: "alphabetical", label: "A–Z" },
    { value: "relevance", label: "Relevance" },
  ];

export const PLATFORM_OPTIONS: ReadonlyArray<{ value: GamePlatform; label: string; }> = [
  { value: "all", label: "All" },
  { value: "pc", label: "PC" },
  { value: "browser", label: "Browser" },
];

export const GENRE_OPTIONS: ReadonlyArray<{ value: string; label: string }> = [
  { value: "", label: "All" },
  { value: "mmorpg", label: "MMORPG" },
  { value: "shooter", label: "Shooter" },
  { value: "moba", label: "MOBA" },
  { value: "anime", label: "Anime" },
  { value: "battle-royale", label: "Battle Royale" },
  { value: "strategy", label: "Strategy" },
  { value: "fantasy", label: "Fantasy" },
  { value: "sci-fi", label: "Sci-Fi" },
  { value: "card", label: "Card Games" },
  { value: "racing", label: "Racing" },
  { value: "fighting", label: "Fighting" },
  { value: "social", label: "Social" },
  { value: "sports", label: "Sports" },
];