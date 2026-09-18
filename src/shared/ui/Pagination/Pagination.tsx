import { getPageItems } from "./model/getPageItems";

type PaginationProps = {
  currentPage: number;
  pagesCount: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ currentPage, pagesCount, onPageChange }: PaginationProps) => {
  const pageItems = getPageItems(currentPage, pagesCount);

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 pt-10"
    >
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-lg border border-edge bg-surface-raised px-4 py-2 text-sm font-medium text-frost transition-colors hover:border-phosphor/70 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Previous
      </button>

      {pageItems.map((item, index) => {
        if (item === "…") {
          return (
            <span key={`ellipsis-${index}`} className="px-1 text-mist">
              …
            </span>
          );
        }

        const isActive = item === currentPage;

        return (
          <button
            key={item}
            type="button"
            onClick={() => onPageChange(item)}
            aria-current={isActive ? "page" : undefined}
            className={
              isActive
                ? "rounded-lg bg-phosphor px-4 py-2 text-sm font-semibold text-surface"
                : "rounded-lg border border-edge bg-surface-raised px-4 py-2 text-sm font-medium text-frost transition-colors hover:border-phosphor/70"
            }
          >
            {item}
          </button>
        );
      })}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pagesCount}
        className="rounded-lg border border-edge bg-surface-raised px-4 py-2 text-sm font-medium text-frost transition-colors hover:border-phosphor/70 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Next
      </button>
    </nav>
  );
};

export { Pagination };