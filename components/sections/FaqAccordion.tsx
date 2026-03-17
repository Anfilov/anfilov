import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const faqs = [
  {
    q: "How does the token system work?",
    a: "Design tokens are CSS custom properties organized in three layers: primitive (raw values), semantic (purpose-driven), and component (element-specific). Changing a semantic token automatically propagates to all components that reference it.",
  },
  {
    q: "Can I use this with my existing CMS?",
    a: "Yes. The framework is built on Next.js with Server Components. You can fetch data from any CMS — Sanity, Contentful, Strapi, or your own API — and render it in any section.",
  },
  {
    q: "Is dark mode automatic?",
    a: "Dark mode uses a data-theme attribute on the HTML element. A ThemeProvider component handles persistence and system preference detection. Components don't need any dark-mode-specific code.",
  },
  {
    q: "How do I rebrand the entire site?",
    a: "Change the semantic tokens in globals.css (6 color variables, radius, spacing-unit) and swap the font imports in layout.tsx. Zero changes needed in component files.",
  },
  {
    q: "Is it accessible?",
    a: "Yes. All components follow WCAG AA standards: semantic HTML, proper ARIA attributes, keyboard navigation, visible focus rings, sufficient color contrast, and reduced-motion support.",
  },
  {
    q: "What happens if I don't need all 24 sections?",
    a: "Simply remove the sections you don't need from page.tsx. Each section is a standalone component with no cross-dependencies. Delete the import line and it's gone.",
  },
];

export function FaqAccordion() {
  return (
    <section id="faq" className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="FAQ"
          title="Common questions"
          subtitle="Everything you need to know about the framework."
        />

        <div className="max-w-2xl mx-auto divide-y divide-[var(--color-border)]">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group"
            >
              <summary
                className="
                  flex items-center justify-between gap-6
                  py-5 sm:py-6
                  text-[15px] sm:text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight
                  cursor-pointer select-none
                  min-h-[44px]
                  list-none [&::-webkit-details-marker]:hidden
                  transition-colors duration-[var(--duration-fast)]
                  focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                  rounded-[var(--radius-sm)]
                "
              >
                {faq.q}
                <span
                  aria-hidden="true"
                  className="
                    flex-shrink-0 w-8 h-8
                    rounded-[var(--avatar-radius)] border border-[var(--color-border)]
                    inline-flex items-center justify-center
                    text-[var(--color-text-tertiary)]
                    transition-[transform,background-color,border-color] duration-[var(--duration-normal)] ease-[var(--ease-spring)]
                    group-open:rotate-45 group-open:bg-[var(--color-accent)] group-open:border-[var(--color-accent)] group-open:text-[var(--color-text-on-accent)]
                  "
                >
                  <Plus size={16} strokeWidth={1.5} />
                </span>
              </summary>
              <div className="pb-5 sm:pb-6 pr-14 text-[15px] text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
