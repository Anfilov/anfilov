import type { ReactNode } from "react";

interface TableColumn<T> {
  key: string;
  header: string;
  render?: (row: T) => ReactNode;
  align?: "left" | "center" | "right";
  className?: string;
}

interface TableProps<T extends Record<string, unknown>> {
  columns: TableColumn<T>[];
  data: T[];
  striped?: boolean;
  className?: string;
}

const alignClass = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Table<T extends Record<string, unknown>>({
  columns,
  data,
  striped = false,
  className = "",
}: TableProps<T>) {
  return (
    <div
      className={`overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)] ${className}`}
    >
      <table className="w-full border-collapse text-sm font-[family-name:var(--font-body)]">
        <thead>
          <tr className="bg-[var(--color-surface-sunken)] border-b border-[var(--color-border)]">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`
                  px-4 py-3 text-[12px] font-bold uppercase tracking-[0.1em]
                  font-[family-name:var(--font-heading)]
                  text-[var(--color-text-tertiary)]
                  ${alignClass[col.align ?? "left"]}
                  ${col.className ?? ""}
                `}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className={`
                border-b border-[var(--color-border)] last:border-b-0
                transition-colors duration-[var(--duration-fast)]
                hover:bg-[var(--color-surface-sunken)]
                bg-[var(--color-surface-elevated)]
              `}
              style={
                striped && i % 2 === 1
                  ? { backgroundColor: "color-mix(in srgb, var(--color-surface-sunken) 25%, var(--color-surface-elevated))" }
                  : undefined
              }
            >
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`
                    px-4 py-3 text-[var(--color-text-secondary)]
                    ${alignClass[col.align ?? "left"]}
                    ${col.className ?? ""}
                  `}
                >
                  {col.render
                    ? col.render(row)
                    : (row[col.key] as ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
