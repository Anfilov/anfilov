import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TableRow {
  plan: string;
  price: string;
  users: string;
  storage: string;
  support: string;
}

const rows: TableRow[] = [
  { plan: "Free", price: "$0/mo", users: "1", storage: "500 MB", support: "Community" },
  { plan: "Starter", price: "$19/mo", users: "5", storage: "10 GB", support: "Email" },
  { plan: "Pro", price: "$49/mo", users: "25", storage: "100 GB", support: "Priority" },
  { plan: "Business", price: "$99/mo", users: "Unlimited", storage: "500 GB", support: "24/7 Phone" },
  { plan: "Enterprise", price: "Custom", users: "Unlimited", storage: "Unlimited", support: "Dedicated" },
];

const columns: { key: keyof TableRow; label: string }[] = [
  { key: "plan", label: "Plan" },
  { key: "price", label: "Price" },
  { key: "users", label: "Users" },
  { key: "storage", label: "Storage" },
  { key: "support", label: "Support" },
];

export function DataTable() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Plans"
          title="Plan comparison"
          subtitle="All plans at a glance. Pick the one that fits your team."
        />

        {/* Desktop table */}
        <div className="hidden sm:block overflow-x-auto rounded-[var(--card-radius)] border border-[var(--color-border)]">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--color-surface-sunken)]">
                {columns.map((col) => (
                  <th
                    key={col.key}
                    className="
                      text-left px-5 py-3.5
                      text-xs font-bold uppercase tracking-[0.12em]
                      text-[var(--color-text-tertiary)]
                      font-[family-name:var(--font-heading)]
                      border-b border-[var(--color-border)]
                    "
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.plan}
                  className={`
                    border-b border-[var(--color-border)] last:border-0
                    ${i % 2 === 1 ? "bg-[var(--color-surface-sunken)]/30" : "bg-[var(--color-surface-elevated)]"}
                    hover:bg-[var(--color-accent)]/[0.03]
                    transition-colors duration-[var(--duration-fast)]
                  `}
                >
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className={`
                        px-5 py-3.5 font-[family-name:var(--font-body)]
                        ${col.key === "plan" ? "font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)]" : "text-[var(--color-text-secondary)]"}
                      `}
                    >
                      {row[col.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile stacked cards */}
        <div className="sm:hidden space-y-4">
          {rows.map((row) => (
            <div
              key={row.plan}
              className="
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface-elevated)] p-4
              "
            >
              <p className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)] mb-3">
                {row.plan}
              </p>
              <dl className="grid grid-cols-2 gap-y-2 gap-x-4 text-sm">
                {columns.slice(1).map((col) => (
                  <div key={col.key}>
                    <dt className="text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)]">
                      {col.label}
                    </dt>
                    <dd className="text-[var(--color-text-primary)] font-[family-name:var(--font-body)] mt-0.5">
                      {row[col.key]}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
