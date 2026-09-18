import { useEffect, useRef } from "react";
import { useGameStore } from "~/entities/game";

export const useGamesCatalog = () => {
  const { games, currentPage, pageSize, isLoading, errorMessage, gamesFetch, gamesPageSet } =
    useGameStore();

  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gamesFetch();
  }, [gamesFetch]);

  const totalCount = games.length;
  const pagesCount = Math.ceil(totalCount / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const visibleGames = games.slice(startIndex, startIndex + pageSize);

  const handlePageChange = (page: number) => {
    gamesPageSet(page);
    listRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return {
    currentPage,
    visibleGames,
    totalCount,
    pagesCount,
    isLoading,
    errorMessage,
    listRef,
    handlePageChange,
  };
};