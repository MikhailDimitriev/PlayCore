import { Link } from "react-router";
import { useFavoritesStore } from "~/entities/favorites";
import { useIsMounted } from "~/shared/hooks/useIsMounted";

const FavoritesNavItem = () => {
  const isMounted = useIsMounted();
  const count = useFavoritesStore((state) => state.items.length);

  return (
    <Link
      to="/favorites"
      className="inline-flex items-center gap-2 rounded-lg border border-edge px-3 py-2 font-display text-sm font-semibold text-frost transition-colors hover:border-phosphor/70 hover:text-phosphor"
    >
      Favorites
      {isMounted && count > 0 && (
        <span className="rounded-full bg-phosphor px-2 py-0.5 text-xs font-semibold text-surface">
          {count}
        </span>
      )}
    </Link>
  );
};

export { FavoritesNavItem };