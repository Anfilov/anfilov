import { FileText, Video, BookOpen, Download } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Resource {
  title: string;
  description: string;
  type: "guide" | "video" | "ebook" | "template";
  tag: string;
}

const resources: Resource[] = [
  { title: "Getting Started Guide", description: "A complete walkthrough of setup, configuration, and your first deploy.", type: "guide", tag: "Beginner" },
  { title: "Design Token Deep Dive", description: "Learn how to master the token system for pixel-perfect branding.", type: "ebook", tag: "Intermediate" },
  { title: "Building with Sanity CMS", description: "Connect your content, define schemas, and go live with dynamic pages.", type: "video", tag: "Tutorial" },
  { title: "Starter Templates Pack", description: "6 ready-to-use page templates for SaaS, agency, and portfolio sites.", type: "template", tag: "Download" },
  { title: "Accessibility Checklist", description: "Ensure your site meets WCAG AA standards with this hands-on checklist.", type: "guide", tag: "Reference" },
  { title: "Performance Optimization", description: "Tips on image loading, code splitting, and achieving 95+ Lighthouse scores.", type: "video", tag: "Advanced" },
];

const typeIcons: Record<Resource["type"], React.ReactNode> = {
  guide: <BookOpen size={18} aria-hidden="true" />,
  video: <Video size={18} aria-hidden="true" />,
  ebook: <FileText size={18} aria-hidden="true" />,
  template: <Download size={18} aria-hidden="true" />,
};

const typeLabels: Record<Resource["type"], string> = {
  guide: "Guide",
  video: "Video",
  ebook: "E-book",
  template: "Template",
};

export function ResourceLibrary() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Resources"
          title="Learn & build"
          subtitle="Guides, videos, and templates to help you get the most out of the framework."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {resources.map((res) => (
            <a
              key={res.title}
              href="#"
              className="
                group flex flex-col
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface-elevated)] p-5 sm:p-6
                hover-effect glass-surface cursor-pointer
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
              "
            >
              {/* Top row: icon + tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-md)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]">
                  {typeIcons[res.type]}
                </span>
                <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-[var(--color-text-tertiary)] font-[family-name:var(--font-heading)]">
                  {res.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]">
                {res.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed flex-1">
                {res.description}
              </p>

              {/* Type label */}
              <p className="mt-4 text-xs font-semibold text-[var(--color-text-accent)] font-[family-name:var(--font-heading)] uppercase tracking-wider">
                {typeLabels[res.type]}
              </p>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
