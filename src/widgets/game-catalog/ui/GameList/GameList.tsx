import { GameGrid } from "~/entities/game";
import type { Game } from "~/entities/game";
import { FavoriteButton } from "~/features/favorite-button";

type GameListProps = {
  games: Game[];
};

const GameList = ({ games }: GameListProps) => {
  return (
    <GameGrid
      games={games}
      renderAction={(game) => <FavoriteButton game={game} />}
    />
  );
};

export { GameList };