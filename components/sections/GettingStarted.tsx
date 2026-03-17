"use client";

import { useState } from "react";
import { Check, Copy, ArrowRight, Terminal, Palette, Rocket } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Step {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  code: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Clone & install",
    description: "Get up and running in under a minute with a single command.",
    icon: <Terminal size={20} aria-hidden="true" />,
    code: `npx create-next-app@latest my-site \\
  --example master-framework
cd my-site && npm install`,
  },
  {
    number: "02",
    title: "Pick a preset",
    description: "Choose one of 8 design presets or customize tokens to match your brand.",
    icon: <Palette size={20} aria-hidden="true" />,
    code: `// site.config.ts
export const siteConfig = {
  preset: "editorial",   // or: saas, brutalist, luxury…
  name: "My Brand",
  description: "Ship faster.",
};`,
  },
  {
    number: "03",
    title: "Ship it",
    description: "Deploy to Vercel with one click. Your site is live in seconds.",
    icon: <Rocket size={20} aria-hidden="true" />,
    code: `npm run build && npx vercel --prod

# ✓ Production: https://my-site.vercel.app
# ✓ Lighthouse: 98 / 100`,
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard API not available */
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy to clipboard"}
      className="
        absolute top-3 right-3 p-1.5
        rounded-[var(--radius-sm)]
        text-slate-400
        hover:text-slate-200 hover:bg-white/10
        transition-colors duration-[var(--duration-fast)]
        cursor-pointer min-h-[44px] min-w-[44px]
        inline-flex items-center justify-center
        focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
      "
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export function GettingStarted() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Quick start"
          title="Up and running in 3 steps"
          subtitle="From zero to production-ready website in under five minutes."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <article
              key={step.number}
              className="
                flex flex-col
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface-elevated)]
                overflow-hidden hover-effect glass-surface
              "
            >
              {/* Header */}
              <div className="p-5 sm:p-6 pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <span className="
                    inline-flex items-center justify-center w-9 h-9
                    rounded-[var(--radius-md)]
                    bg-[var(--color-accent)]/10 text-[var(--color-accent)]
                  ">
                    {step.icon}
                  </span>
                  <span className="text-xs font-bold text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)] tracking-widest uppercase">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Code block */}
              <div className="relative mt-auto mx-4 mb-4 sm:mx-5 sm:mb-5 rounded-[var(--radius-sm)] bg-[var(--color-surface-dark)] overflow-hidden">
                <CopyButton text={step.code} />
                <pre className="p-4 pr-12 text-[13px] leading-relaxed text-slate-100 font-mono overflow-x-auto">
                  <code>{step.code}</code>
                </pre>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 layout-text">
          <a
            href="#"
            className="
              inline-flex items-center gap-2 px-6 py-3
              rounded-[var(--radius-md)]
              bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
              text-sm font-semibold font-[family-name:var(--font-heading)]
              hover:opacity-90 active:opacity-80
              transition-opacity duration-[var(--duration-fast)]
              cursor-pointer min-h-[44px]
              focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
            "
          >
            Read the docs
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  );
}
