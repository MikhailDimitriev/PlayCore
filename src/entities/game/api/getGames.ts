import { get } from "~/shared/api";
import type { GameDto } from "../model/dto";
import { mapToGame } from "../model/mappers";
import type { GameListParams, Game } from "../model/types";

export async function getGames(params: GameListParams = {}): Promise<Game[]> {
  const dto = await get<GameDto[]>("/games", {
    platform: params.platform,
    category: params.category,
    "sort-by": params.sortBy,
    tag: params.tag,
  });

  return dto.map(mapToGame);
}