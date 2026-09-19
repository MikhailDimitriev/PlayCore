import { useFavoriteGame } from "./model/useFavoriteGame";
import type { Game } from "~/entities/game";
import { FavoriteButtonView } from "./ui";

type FavoriteButtonProps = {
  game: Game;
  withLabel?: boolean;
};

const FavoriteButton = ({ game, withLabel }: FavoriteButtonProps) => {
  const { isActive, toggle } = useFavoriteGame(game);

  return (
    <FavoriteButtonView
      isFavorite={isActive}
      onToggle={toggle}
      withLabel={withLabel}
    />
  );
};

export { FavoriteButton };