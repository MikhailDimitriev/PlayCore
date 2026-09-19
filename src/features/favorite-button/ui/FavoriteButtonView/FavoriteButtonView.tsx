import { StarIcon } from "../StarIcon";

type FavoriteButtonViewProps = {
  isFavorite: boolean;
  onToggle: () => void;
  withLabel?: boolean;
};

const FavoriteButtonView = ({
  isFavorite,
  onToggle,
  withLabel,
}: FavoriteButtonViewProps) => {

  return (
    <button
      type="button"
      aria-pressed={isFavorite}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      onClick={onToggle}
      className={`inline-flex items-center justify-center gap-2 rounded-lg border px-3 py-2 font-display text-sm font-semibold transition-colors ${
        withLabel
          ? "bg-surface/90 backdrop-blur-sm hover:bg-surface"
          : "size-10 bg-surface/90 backdrop-blur-sm hover:bg-surface"
      } ${isFavorite ? "border-phosphor text-phosphor" : "border-edge text-frost hover:border-phosphor/70 hover:text-phosphor"}`}
    >
      <StarIcon active={isFavorite} />
      {withLabel && <span>{isFavorite ? "In favorites" : "Add to favorites"}</span>}
    </button>
  );
};

export { FavoriteButtonView };