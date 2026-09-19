import { Link } from "react-router";

const FavoritesEmpty = () => {
  return (
    <div className="rounded-lg border border-edge bg-surface-raised p-10 text-center">
      <p className="text-lg text-frost">No favorites yet</p>

      <p className="mt-2 text-sm text-mist">
        Save games to keep them here for quick access.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center justify-center rounded-lg bg-phosphor px-6 py-3 font-display text-base font-semibold text-surface transition-opacity hover:opacity-90"
      >
        Browse the catalog
      </Link>
    </div>
  );
};

export { FavoritesEmpty };