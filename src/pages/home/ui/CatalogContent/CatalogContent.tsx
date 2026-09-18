import type { RefObject } from "react";

import type { Game } from "~/entities/game";
import { Pagination } from "~/shared/ui/Pagination";
import { GamesList } from "~/widgets/games-list";

type CatalogContentProps = {
  visibleGames: Game[];
  currentPage: number;
  pagesCount: number;
  isLoading: boolean;
  errorMessage: string;
  listRef: RefObject<HTMLDivElement | null>;
  onPageChange: (page: number) => void;
};

const CatalogContent = ({
  visibleGames,
  currentPage,
  pagesCount,
  isLoading,
  errorMessage,
  listRef,
  onPageChange,
}: CatalogContentProps) => {

  if (isLoading) {
    return <p className="text-lg text-mist">Loading...</p>;
  }

  if (errorMessage) {
    return <p className="text-lg text-mist">{errorMessage}</p>;
  }

  return (
    <div ref={listRef}>
      <GamesList games={visibleGames} />
      {pagesCount > 1 && (
        <Pagination
          currentPage={currentPage}
          pagesCount={pagesCount}
          onPageChange={onPageChange}
        />
      )}
    </div>
  );
};

export { CatalogContent };