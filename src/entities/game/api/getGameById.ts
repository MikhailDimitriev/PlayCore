import { get } from "~/shared/api";

import type { GameDetailDto } from "../model/dto";
import { mapToGameDetail } from "../model/mappers";
import type { GameDetail } from "../model/types";

export async function getGameById(id: number): Promise<GameDetail> {
  const dto = await get<GameDetailDto>("/game", { id });

  return mapToGameDetail(dto);
}