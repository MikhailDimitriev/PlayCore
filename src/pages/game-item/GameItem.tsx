import { data } from "react-router";
import { getGameById } from "~/entities/game";
import type { Route } from "./+types/GameItem";
import { GameError, GameItemPage } from "./ui";

export const loader = async ({ params }: Route.LoaderArgs) => {
  const gameId = Number(params.gameId);

  if (!Number.isInteger(gameId) || gameId <= 0) {
    throw data("Game not found", { status: 404 });
  }

  try {
    const game = await getGameById(gameId);
    return { game };
  } catch {
    throw data("Game not found", { status: 404 });
  }
};

export const meta: Route.MetaFunction = ({ loaderData }) => {
  if (!loaderData) {
    return [{ title: "PlayCore" }];
  }

  return [
    { title: `${loaderData.game.title} — PlayCore` },
    { name: "description", content: loaderData.game.shortDescription },
  ];
};

export const ErrorBoundary = ({ error }: Route.ErrorBoundaryProps) => (
  <GameError error={error} />
);

const GameItem = ({ loaderData }: Route.ComponentProps) => (
  <GameItemPage game={loaderData.game} />
);

export default GameItem;