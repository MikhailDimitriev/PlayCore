import type { Route } from "./+types/FavoritesPage";
import { useFavoritesStore } from "~/entities/favorites";
import { GameGrid } from "~/entities/game";
import { FavoriteButton } from "~/features/favorite-button";
import { useIsMounted } from "~/shared/hooks/useIsMounted";
import { toFavoritesMeta, toFavoritesSummary } from "./model/favoritesPresentation";
import { FavoritesEmpty } from "./ui";

export const meta: Route.MetaFunction = () => toFavoritesMeta();

const FavoritesPage = () => {
  const isMounted = useIsMounted();
  const items = useFavoritesStore((state) => state.items);

  return (
    <div className="py-10 inline-padding">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="font-display text-3xl font-semibold tracking-tight text-frost sm:text-4xl">
          Favorites
        </h1>
        <p className="text-sm text-mist">
          {isMounted ? toFavoritesSummary(items.length) : "Your saved games"}
        </p>
      </div>

      {!isMounted ? (
        <p className="text-lg text-mist">Loading...</p>
      ) : items.length === 0 ? (
        <FavoritesEmpty />
      ) : (
        <GameGrid
          games={items}
          renderAction={(game) => <FavoriteButton game={game} />}
        />
      )}
    </div>
  );
};

export default FavoritesPage;