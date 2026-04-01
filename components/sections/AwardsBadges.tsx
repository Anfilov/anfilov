import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Award {
  name: string;
  issuer: string;
  year: string;
  icon: React.ReactNode;
}

const awards: Award[] = [
  {
    name: "Leader",
    issuer: "G2 — Spring 2025",
    year: "2025",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 8l2.5 5 5.5.8-4 3.9.9 5.3-4.9-2.6L11.1 23l.9-5.3-4-3.9 5.5-.8L16 8z" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Best Value",
    issuer: "Capterra",
    year: "2025",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 17l4 4 8-10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "SOC 2 Type II",
    issuer: "Certified",
    year: "2024",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 3l10 5v8c0 5.5-4.2 10.6-10 12-5.8-1.4-10-6.5-10-12V8l10-5z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.08" />
        <path d="M12 16l3 3 5-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "GDPR Compliant",
    issuer: "EU Standard",
    year: "2024",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Top Rated",
    issuer: "TrustRadius",
    year: "2025",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M16 4l3.5 7 7.5 1.1-5.4 5.3 1.3 7.6L16 21.2 9.1 25l1.3-7.6L5 12.1l7.5-1.1L16 4z" stroke="currentColor" strokeWidth="1.5" fill="currentColor" opacity="0.1" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "ISO 27001",
    issuer: "Certified",
    year: "2024",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="6" y="12" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M10 12V9a6 6 0 0112 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="16" cy="20" r="2" fill="currentColor" />
      </svg>
    ),
  },
];

export function AwardsBadges() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Trusted & Certified"
          title="Awards & compliance"
          subtitle="Recognized by industry leaders and compliant with the highest security standards."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {awards.map((award) => (
            <div
              key={award.name}
              className="
                group relative flex flex-col items-center text-center
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface-elevated)] p-5 sm:p-6
                hover-effect glass-surface
                transition-colors duration-[var(--duration-normal)]
              "
            >
              {/* Icon */}
              <div className="text-[var(--color-accent)] mb-3 transition-transform duration-[var(--duration-normal)] ease-[var(--ease-smooth)] group-hover:scale-110">
                {award.icon}
              </div>

              {/* Name */}
              <p className="text-sm font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)] leading-tight">
                {award.name}
              </p>

              {/* Issuer */}
              <p className="mt-1 text-[12px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                {award.issuer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
