import type { ReactNode } from "react";
import type { Game } from "../../model/types";
import { GameCard } from "../GameCard";

type GameGridProps = {
  games: Game[];
  renderAction?: (game: Game) => ReactNode;
};

const GameGrid = ({ games, renderAction }: GameGridProps) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {games.map((game) => (
        <GameCard
          key={game.id}
          {...game}
          action={renderAction?.(game)}
        />
      ))}
    </section>
  );
};

export { GameGrid };