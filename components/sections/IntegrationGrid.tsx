import {
  Database,
  BarChart3,
  Mail,
  Shield,
  Zap,
  Globe,
  MessageSquare,
  CreditCard,
  Cloud,
  FileText,
  Users,
  GitBranch,
  Lock,
  Bell,
  Layers,
  Settings,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const integrations = [
  { name: "PostgreSQL", tag: "Database", icon: Database },
  { name: "Mixpanel", tag: "Analytics", icon: BarChart3 },
  { name: "Resend", tag: "Email", icon: Mail },
  { name: "Auth0", tag: "Auth", icon: Shield },
  { name: "Vercel", tag: "Hosting", icon: Zap },
  { name: "Cloudflare", tag: "CDN", icon: Globe },
  { name: "Intercom", tag: "Support", icon: MessageSquare },
  { name: "Stripe", tag: "Payments", icon: CreditCard, featured: true },
  { name: "AWS", tag: "Cloud", icon: Cloud },
  { name: "Notion", tag: "Docs", icon: FileText },
  { name: "Clerk", tag: "Users", icon: Users },
  { name: "GitHub", tag: "Version Control", icon: GitBranch },
  { name: "Vault", tag: "Secrets", icon: Lock },
  { name: "PagerDuty", tag: "Alerts", icon: Bell },
  { name: "Terraform", tag: "IaC", icon: Layers },
  { name: "LaunchDarkly", tag: "Flags", icon: Settings },
];

export function IntegrationGrid() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Integrations"
          title="Connects to your stack"
          subtitle="First-class integrations with the tools your team already uses."
        />

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-[var(--space-grid)] max-w-4xl mx-auto">
          {integrations.map((item) => {
            const Icon = item.icon;
            const isFeatured = "featured" in item && item.featured;
            return (
              <article
                key={item.name}
                className={`
                  group relative flex flex-col items-center text-center
                  rounded-[var(--card-radius)] border
                  p-[var(--card-padding)]
                  transition-[border-color] duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
                  hover-effect
                  ${
                    isFeatured
                      ? "border-[var(--color-accent)] bg-[var(--color-surface-elevated)] shadow-[var(--shadow-md)]"
                      : "border-[var(--color-border)] bg-[var(--color-surface-elevated)] hover:border-[var(--color-accent)]/40"
                  }
                `}
              >
                {/* Accent glow for featured */}
                {isFeatured && (
                  <div
                    aria-hidden="true"
                    className="absolute -inset-px rounded-[var(--card-radius)] bg-[var(--color-accent)]/5 -z-10 blur-md"
                  />
                )}

                <span
                  className={`
                    inline-flex items-center justify-center w-12 h-12 rounded-[var(--radius-lg)] mb-3
                    ${
                      isFeatured
                        ? "bg-[var(--color-accent-subtle)] text-[var(--color-text-accent)]"
                        : "bg-[var(--color-surface-sunken)] text-[var(--color-text-secondary)]"
                    }
                  `}
                  aria-hidden="true"
                >
                  <Icon size={22} strokeWidth={1.6} />
                </span>

                <h3 className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-1">
                  {item.name}
                </h3>

                <span className="text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                  {item.tag}
                </span>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
