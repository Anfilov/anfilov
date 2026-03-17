"use client";

import { useState } from "react";
import Image from "next/image";
import { BarChart3, Layers, Zap, Shield } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const tabs = [
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
    title: "Real-time analytics dashboard",
    description:
      "Track every metric that matters with sub-second latency. Custom dashboards, automated reports, and anomaly detection — all without writing a single query.",
    bullets: ["Custom dashboard builder", "Automated weekly reports", "Anomaly alerts"],
    image: "https://placehold.co/640x420/111111/999999?text=Analytics+Dashboard",
  },
  {
    id: "components",
    label: "Components",
    icon: Layers,
    title: "40+ production-ready blocks",
    description:
      "Every section you need to build a complete website — hero, features, pricing, testimonials, and more. Each block responds to design tokens for instant theming.",
    bullets: ["Token-driven theming", "Accessible by default", "Responsive on every device"],
    image: "https://placehold.co/640x420/1a1a1a/cccccc?text=Component+Library",
  },
  {
    id: "performance",
    label: "Performance",
    icon: Zap,
    title: "Built for speed",
    description:
      "Server components, streaming, and ISR ensure your site loads instantly. No client-side data fetching spinners — users see content immediately.",
    bullets: ["Server-first rendering", "Edge-ready deployment", "Sub-100ms TTFB"],
    image: "https://placehold.co/640x420/333333/999999?text=Performance+Metrics",
  },
  {
    id: "security",
    label: "Security",
    icon: Shield,
    title: "Enterprise-grade security",
    description:
      "SOC 2 compliant, GDPR ready, and HIPAA certified. Role-based access, audit logs, and SSO integration come standard with every plan.",
    bullets: ["SSO & SAML support", "Role-based access control", "Full audit trail"],
    image: "https://placehold.co/640x420/111111/e63328?text=Security+Panel",
  },
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const active = tabs.find((t) => t.id === activeTab) ?? tabs[0];

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Features"
          title="Everything you need"
          subtitle="Explore the capabilities that make this framework the best choice for your next project."
        />

        {/* Tab buttons */}
        <div className="flex flex-wrap layout-justify gap-2 mb-10" role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  inline-flex items-center gap-2
                  px-5 py-2.5 min-h-[44px]
                  rounded-[var(--btn-radius)]
                  text-sm font-semibold font-[family-name:var(--font-heading)]
                  cursor-pointer select-none
                  transition-[background-color,color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-smooth)]
                  focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                  ${
                    isActive
                      ? "bg-[var(--color-accent)] text-[var(--color-text-on-accent)] shadow-[var(--shadow-sm)]"
                      : "bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]"
                  }
                `}
              >
                <Icon size={16} aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        <div
          id={`panel-${active.id}`}
          role="tabpanel"
          className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-block)] items-center"
        >
          {/* Text side */}
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] mb-4">
              {active.title}
            </h3>
            <p className="text-[15px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-6">
              {active.description}
            </p>
            <ul className="space-y-3">
              {active.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-center gap-3 text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]"
                >
                  <span
                    className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  {bullet}
                </li>
              ))}
            </ul>
          </div>

          {/* Image side */}
          <div className="relative rounded-[var(--card-radius)] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-lg)]">
            <div className="relative aspect-[640/420]">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
