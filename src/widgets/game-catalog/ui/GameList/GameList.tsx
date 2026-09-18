import { GameCard } from "~/entities/game";
import type { Game } from "~/entities/game";

type GameListProps = {
  games: Game[];
};

const GameList = ({ games }: GameListProps) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {games.map((game) => (
        <GameCard key={game.id} {...game} />
      ))}
    </section>
  );
};

export { GameList };