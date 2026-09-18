import type { GameDetailDto, GameDto } from "./dto";
import type { GameDetail, Game } from "./types";

export function mapToGame(dto: GameDto): Game {
  return {
    id: dto.id,
    title: dto.title,
    thumbnail: dto.thumbnail,
    shortDescription: dto.short_description,
    gameUrl: dto.game_url,
    genre: dto.genre,
    platform: dto.platform,
    publisher: dto.publisher,
    developer: dto.developer,
    releaseDate: dto.release_date,
    freeToGameProfileUrl: dto.freetogame_profile_url,
  };
}

export function mapToGameDetail(dto: GameDetailDto): GameDetail {
  return {
    ...mapToGame(dto),
    status: dto.status,
    description: dto.description,
    minimumSystemRequirements: dto.minimum_system_requirements,
    screenshots: dto.screenshots,
  };
}