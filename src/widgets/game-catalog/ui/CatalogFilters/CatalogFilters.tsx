import {
  GENRE_OPTIONS,
  PLATFORM_OPTIONS,
  SORT_OPTIONS,
  useGameStore,
} from "~/entities/game";
import { Select } from "~/shared/ui/Select";

const CatalogFilters = () => {
  const {
    sortBy,
    platform,
    genre,
    gamesSortSet,
    gamesPlatformSet,
    gamesGenreSet,
  } = useGameStore();

  return (
    <div className="mb-6 flex flex-wrap items-center gap-4">
      <Select
        id="game-sort"
        label="Sort by"
        value={sortBy}
        options={SORT_OPTIONS}
        onChange={gamesSortSet}
      />

      <Select
        id="game-platform"
        label="Platform"
        value={platform}
        options={PLATFORM_OPTIONS}
        onChange={gamesPlatformSet}
      />

      <Select
        id="game-genre"
        label="Genre"
        value={genre}
        options={GENRE_OPTIONS}
        onChange={gamesGenreSet}
      />
    </div>
  );
};

export { CatalogFilters };