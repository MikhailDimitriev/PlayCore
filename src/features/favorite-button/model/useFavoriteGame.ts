import { useFavoritesStore } from "~/entities/favorites";
import type { Game } from "~/entities/game";
import { useIsMounted } from "~/shared/hooks/useIsMounted";

type UseFavoriteGameResult = {
  isActive: boolean;
  toggle: () => void;
};

export const useFavoriteGame = (game: Game): UseFavoriteGameResult => {
  const isMounted = useIsMounted();
  const isFavorite = useFavoritesStore((state) => state.isFavorite(game.id));
  const add = useFavoritesStore((state) => state.add);
  const remove = useFavoritesStore((state) => state.remove);

  return {
    isActive: isMounted && isFavorite,
    toggle: () => (isFavorite ? remove(game.id) : add(game)),
  };
};