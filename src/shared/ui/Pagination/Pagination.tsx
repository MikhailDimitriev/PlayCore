import { getPageItems } from "./model/getPageItems";

type PaginationProps = {
  currentPage: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
};

const arrowClass =
  "flex size-9 shrink-0 items-center justify-center gap-2 rounded-lg border border-edge bg-surface-raised text-sm font-medium text-frost transition-colors hover:border-phosphor/70 disabled:cursor-not-allowed disabled:opacity-40 sm:h-auto sm:w-auto sm:px-4 sm:py-2";

const pageClass =
  "flex items-center justify-center rounded-lg px-3 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm";

const Pagination = ({ currentPage, pagesCount, onPageChange }: PaginationProps) => {
  const pageItems = getPageItems(currentPage, pagesCount);

  return (
    <nav
      aria-label="Pagination"
      className="flex flex-wrap items-center justify-center gap-2 pt-10 sm:gap-2"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className={arrowClass}
      >
        <span aria-hidden="true" className="sm:hidden">
          ←
        </span>
        <span className="hidden sm:inline">Previous</span>
      </button>

      {pageItems.map((item, index) => {
        if (item === "…") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="px-0.5 text-xs text-mist sm:px-1 sm:text-sm"
            >
              …
            </span>
          );
        }

        const isActive = item === currentPage;

        const tone = isActive
          ? "bg-phosphor font-semibold text-surface"
          : "border border-edge bg-surface-raised text-frost hover:border-phosphor/70";

        return (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            aria-current={isActive ? "page" : undefined}
            className={`${pageClass} ${tone}`}
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pagesCount}
        aria-label="Next page"
        className={arrowClass}
      >
        <span aria-hidden="true" className="sm:hidden">
          →
        </span>
        <span className="hidden sm:inline">Next</span>
      </button>
    </nav>
  );
};

export { Pagination };
