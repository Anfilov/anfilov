import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const spokes = [
  { name: "Slack", angle: 0, description: "Send notifications to channels and DMs when events fire." },
  { name: "Stripe", angle: 45, description: "Sync subscriptions, invoices, and payment status in real-time." },
  { name: "GitHub", angle: 90, description: "Trigger deploys and sync repos on every push or PR merge." },
  { name: "Figma", angle: 135, description: "Export design tokens directly into your project config." },
  { name: "Notion", angle: 180, description: "Publish content from Notion pages to your live website." },
  { name: "Vercel", angle: 225, description: "Auto-deploy previews for every branch and pull request." },
  { name: "Linear", angle: 270, description: "Link issues to deploys and auto-close on merge." },
  { name: "Sentry", angle: 315, description: "Route errors to the right team with full stack traces." },
];

const pulseLineKeyframes = `
@keyframes pulse-line {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
}
`;

export function IntegrationHub() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <style>{pulseLineKeyframes}</style>
      <Container>
        <SectionHeading
          overline="Ecosystem"
          title="Your tools, connected"
          subtitle="A central hub that orchestrates your entire workflow."
        />

        {/* Hub-and-spoke visualization */}
        <div className="relative mx-auto w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[420px] lg:h-[420px] mb-[var(--space-block)]">
          {/* Center hub */}
          <div
            className="
              absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10
              w-16 h-16 sm:w-20 sm:h-20
              rounded-full
              bg-[var(--color-surface-elevated)] border-2 border-[var(--color-accent)]
              shadow-[var(--shadow-lg)]
              flex items-center justify-center
            "
          >
            <span className="text-sm sm:text-base font-bold tracking-[var(--heading-tracking)] font-[family-name:var(--font-heading)] text-[var(--color-accent)]">
              Hub
            </span>
          </div>

          {/* Spoke nodes */}
          {spokes.map((spoke) => {
            const radians = (spoke.angle * Math.PI) / 180;
            const radius = 50;
            const x = 50 + radius * Math.cos(radians);
            const y = 50 + radius * Math.sin(radians);

            return (
              <div key={spoke.name}>
                {/* Connecting line */}
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  viewBox="0 0 100 100"
                >
                  <line
                    x1="50"
                    y1="50"
                    x2={x}
                    y2={y}
                    stroke="var(--color-border-strong)"
                    strokeWidth="0.3"
                    style={{ animation: "pulse-line 3s ease-in-out infinite", animationDelay: `${spoke.angle * 10}ms` }}
                  />
                </svg>

                {/* Node */}
                <div
                  className="
                    absolute w-12 h-12 sm:w-14 sm:h-14
                    -translate-x-1/2 -translate-y-1/2
                    rounded-full
                    bg-[var(--color-surface-elevated)] border border-[var(--color-border)]
                    shadow-[var(--shadow-sm)]
                    flex items-center justify-center
                    hover:border-[var(--color-accent)] hover:shadow-[var(--shadow-md)]
                    transition-[border-color,box-shadow] duration-[var(--duration-normal)]
                    cursor-default
                  "
                  style={{
                    left: `${x}%`,
                    top: `${y}%`,
                  }}
                >
                  <span className="text-[10px] sm:text-xs font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] select-none">
                    {spoke.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Description grid below */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--space-grid)] max-w-5xl mx-auto">
          {spokes.map((spoke) => (
            <div key={spoke.name} className="layout-text">
              <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-1">
                {spoke.name}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                {spoke.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
