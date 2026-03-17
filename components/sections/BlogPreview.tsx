import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

const posts = [
  {
    title: "Introducing the 3-Layer Token Architecture",
    excerpt:
      "Learn how primitive, semantic, and component tokens create a cascading design system that scales.",
    date: "Mar 5, 2025",
    category: "Design Systems",
    image: "https://placehold.co/600x400/111111/e63328?text=Blog+1",
  },
  {
    title: "Dark Mode Without Dark Classes",
    excerpt:
      "How we implemented automatic dark mode using CSS custom properties and zero component changes.",
    date: "Feb 20, 2025",
    category: "Engineering",
    image: "https://placehold.co/600x400/111111/e63328?text=Blog+2",
  },
  {
    title: "Mobile-First: More Than a Buzzword",
    excerpt:
      "Our process for designing every section at 375px before scaling up to desktop breakpoints.",
    date: "Feb 12, 2025",
    category: "Design",
    image: "https://placehold.co/600x400/111111/e63328?text=Blog+3",
  },
];

export function BlogPreview() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Blog"
          title="Latest articles"
          subtitle="Insights on design systems, frontend engineering, and building for the web."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
          {posts.map((post) => (
            <article
              key={post.title}
              className="
                group rounded-[var(--card-radius)] overflow-hidden
                bg-[var(--color-surface-elevated)] shadow-[var(--shadow-sm)]
                hover:shadow-[var(--shadow-md)]
                transition-shadow duration-[var(--duration-normal)]
              "
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-[var(--color-surface-sunken)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="
                    object-cover
                    transition-transform duration-[var(--duration-slow)] ease-[var(--ease-smooth)]
                    group-hover:scale-105
                  "
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-[var(--card-padding)]">
                <div className="flex items-center gap-3 mb-3">
                  <Badge variant="accent">{post.category}</Badge>
                  <time className="text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
                    {post.date}
                  </time>
                </div>
                <h3 className="text-base font-bold mb-2 line-clamp-2 font-[family-name:var(--font-heading)]">
                  {post.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-2 font-[family-name:var(--font-body)]">
                  {post.excerpt}
                </p>
                <a
                  href="#"
                  className="
                    mt-4 inline-flex items-center gap-1 text-sm font-semibold
                    text-[var(--color-text-accent)]
                    hover:gap-2
                    transition-[gap] duration-[var(--duration-fast)]
                    cursor-pointer
                    focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                    rounded-[var(--radius-sm)]
                  "
                >
                  Read more
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
