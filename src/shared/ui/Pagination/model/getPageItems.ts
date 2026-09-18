export type PageItem = number | "…";

export const getPageItems = (currentPage: number, pagesCount: number): PageItem[] => {
  if (pagesCount <= 7) {
    return Array.from({ length: pagesCount }, (_, i) => i + 1);
  }

  if (currentPage <= 4) {
    return [1, 2, 3, 4, 5, "…", pagesCount];
  }

  if (currentPage >= pagesCount - 3) {
    return [1, "…", pagesCount - 4, pagesCount - 3, pagesCount - 2, pagesCount - 1, pagesCount];
  }

  return [1, "…", currentPage - 1, currentPage, currentPage + 1, "…", pagesCount];
};