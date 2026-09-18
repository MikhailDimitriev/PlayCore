import type { GameDetail, Screenshot } from "~/entities/game";

export type GameFact = {
  label: string;
  value: string;
};

export const getHeroImage = (
  game: Pick<GameDetail, "screenshots" | "thumbnail">,
): string => game.screenshots[0]?.image ?? game.thumbnail;

export const toGameFacts = (game: GameDetail): GameFact[] => [
  { label: "Genre", value: game.genre },
  { label: "Platform", value: game.platform },
  { label: "Publisher", value: game.publisher },
  { label: "Developer", value: game.developer },
  { label: "Release date", value: game.releaseDate },
  { label: "Status", value: game.status },
];

export const toParagraphs = (description: string): string[] =>
  description
    .split(/\r?\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

export const toGalleryScreenshots = (screenshots: Screenshot[]): Screenshot[] =>
  screenshots.length > 1 ? screenshots.slice(1) : screenshots;