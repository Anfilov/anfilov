import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface StackItem {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const stack: StackItem[] = [
  {
    name: "Next.js",
    description: "React framework",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10.5 18.5V9.5l10.5 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="10" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    description: "Type safety",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="24" height="24" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <text x="14" y="19" textAnchor="middle" fill="currentColor" fontSize="12" fontWeight="bold" fontFamily="monospace">TS</text>
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M9 12c1-4 3.5-5 7-5 5 0 5.5 3.5 3 5.5S14 14 14 17c-1 4-3.5 5-7 5-5 0-5.5-3.5-3-5.5S9 15 9 12z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Sanity",
    description: "Headless CMS",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M8 10c0-2.5 2-4.5 6-4.5 3 0 5.5 1.5 5.5 4 0 3-3 4-6.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 18c0 2.5-2 4.5-6 4.5-3 0-5.5-1.5-5.5-4 0-3 3-4 6.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    description: "Deployment",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 6l10 16H4L14 6z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Lucide",
    description: "Icon library",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M14 5v3M14 20v3M5 14h3M20 14h3M7.5 7.5l2 2M18.5 18.5l2 2M7.5 20.5l2-2M18.5 9.5l2-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function StackLogos() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Tech stack"
          title="Built with the best"
          subtitle="A modern, production-ready stack chosen for performance, DX, and scalability."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stack.map((item) => (
            <div
              key={item.name}
              className="
                group flex flex-col items-center text-center
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface)] p-5 sm:p-6
                hover-effect glass-surface
              "
            >
              <div className="text-[var(--color-text-primary)] mb-3 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-smooth)] group-hover:scale-110">
                {item.icon}
              </div>
              <p className="text-sm font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]">
                {item.name}
              </p>
              <p className="mt-0.5 text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
