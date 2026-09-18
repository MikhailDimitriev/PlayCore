import type { Screenshot, SystemRequirements } from "./dto";

export type GamePlatform = "pc" | "browser" | "all";

export type GameSortBy = "release-date" | "popularity" | "alphabetical" | "relevance";

export interface GameListParams {
  platform?: GamePlatform;
  category?: string;
  sortBy?: GameSortBy;
  tag?: string;
}

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  shortDescription: string;
  gameUrl: string;
  genre: string;
  platform: string;
  publisher: string;
  developer: string;
  releaseDate: string;
  freeToGameProfileUrl: string;
}

export interface GameDetail extends Game {
  status: string;
  description: string;
  minimumSystemRequirements: SystemRequirements | null;
  screenshots: Screenshot[];
}