import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqSection } from "@/components/ui/FaqSection";

const faqs = [
  {
    question: "How does the token system work?",
    answer:
      "Design tokens are CSS custom properties organized in three layers: primitive (raw values), semantic (purpose-driven), and component (element-specific). Changing a semantic token automatically propagates to all components that reference it.",
  },
  {
    question: "Can I use this with my existing CMS?",
    answer:
      "Yes. The framework is built on Next.js with Server Components. You can fetch data from any CMS — Sanity, Contentful, Strapi, or your own API — and render it in any section.",
  },
  {
    question: "Is dark mode automatic?",
    answer:
      "Dark mode uses a data-theme attribute on the HTML element. A ThemeProvider component handles persistence and system preference detection. Components don't need any dark-mode-specific code.",
  },
  {
    question: "How do I rebrand the entire site?",
    answer:
      "Change the semantic tokens in globals.css (6 color variables, radius, spacing-unit) and swap the font imports in layout.tsx. Zero changes needed in component files.",
  },
  {
    question: "Is it accessible?",
    answer:
      "Yes. All components follow WCAG AA standards: semantic HTML, proper ARIA attributes, keyboard navigation, visible focus rings, sufficient color contrast, and reduced-motion support.",
  },
  {
    question: "What happens if I don't need all 24 sections?",
    answer:
      "Simply remove the sections you don't need from page.tsx. Each section is a standalone component with no cross-dependencies. Delete the import line and it's gone.",
  },
];

export function FaqAccordion() {
  return (
    <section
      id="faq"
      className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]"
    >
      <Container>
        <SectionHeading
          overline="FAQ"
          title="Common questions"
          subtitle="Everything you need to know about the framework."
        />

        <FaqSection items={faqs} className="max-w-2xl mx-auto" />
      </Container>
    </section>
  );
}
