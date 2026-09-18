import { Pagination } from "~/shared/ui/Pagination";
import { useGamesCatalog } from "../../model/useGamesCatalog";
import { CatalogFilters } from "../CatalogFilters";
import { GameList } from "../GameList";

const GameCatalog = () => {
  const {
    currentPage,
    visibleGames,
    pagesCount,
    isLoading,
    errorMessage,
    listRef,
    handlePageChange,
  } = useGamesCatalog();

  if (isLoading) {
    return <p className="text-lg text-mist">Loading...</p>;
  }

  if (errorMessage) {
    return <p className="text-lg text-mist">{errorMessage}</p>;
  }

  return (
    <div ref={listRef}>
      <CatalogFilters />

      <GameList games={visibleGames} />

      {pagesCount > 1 && (
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export { GameCatalog };