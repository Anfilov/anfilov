import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");

  pages.push(total);
  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
}: PaginationProps) {
  const pages = getPageNumbers(currentPage, totalPages);

  const btnBase = `
    inline-flex items-center justify-center
    min-h-[36px] min-w-[36px] rounded-[var(--btn-radius)]
    text-sm font-medium font-[family-name:var(--font-body)]
    transition-[background-color,color,border-color] duration-[var(--duration-fast)]
    cursor-pointer select-none
    focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
  `;

  const btnDefault = `
    ${btnBase}
    text-[var(--color-text-secondary)]
    hover:bg-[var(--color-surface-sunken)] hover:text-[var(--color-text-primary)]
  `;

  const btnActive = `
    ${btnBase}
    bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
    shadow-[var(--btn-shadow)]
  `;

  const btnDisabled = `
    ${btnBase}
    text-[var(--color-text-tertiary)] opacity-50 pointer-events-none
  `;

  return (
    <nav aria-label="Pagination" className={className}>
      <ul className="flex items-center gap-1">
        {/* Previous */}
        <li>
          <button
            onClick={() => onPageChange?.(currentPage - 1)}
            disabled={currentPage <= 1}
            aria-label="Previous page"
            className={currentPage <= 1 ? btnDisabled : btnDefault}
          >
            <ChevronLeft size={16} aria-hidden="true" />
          </button>
        </li>

        {/* Page numbers */}
        {pages.map((page, i) =>
          page === "..." ? (
            <li key={`dots-${i}`}>
              <span className="inline-flex items-center justify-center min-h-[36px] min-w-[24px] text-sm text-[var(--color-text-tertiary)]">
                &hellip;
              </span>
            </li>
          ) : (
            <li key={page}>
              <button
                onClick={() => onPageChange?.(page)}
                aria-current={page === currentPage ? "page" : undefined}
                aria-label={`Page ${page}`}
                className={page === currentPage ? btnActive : btnDefault}
              >
                {page}
              </button>
            </li>
          ),
        )}

        {/* Next */}
        <li>
          <button
            onClick={() => onPageChange?.(currentPage + 1)}
            disabled={currentPage >= totalPages}
            aria-label="Next page"
            className={currentPage >= totalPages ? btnDisabled : btnDefault}
          >
            <ChevronRight size={16} aria-hidden="true" />
          </button>
        </li>
      </ul>
    </nav>
  );
}
