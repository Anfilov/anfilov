import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  aspect: "tall" | "wide" | "square";
}

const items: GalleryItem[] = [
  {
    src: "https://placehold.co/600x800/111111/e63328.png?text=Project+1",
    alt: "Project 1 — Brand identity redesign",
    caption: "Brand Identity",
    aspect: "tall",
  },
  {
    src: "https://placehold.co/600x400/1a1a1a/f25c54.png?text=Project+2",
    alt: "Project 2 — Marketing website",
    caption: "Marketing Site",
    aspect: "wide",
  },
  {
    src: "https://placehold.co/600x600/333333/999999.png?text=Project+3",
    alt: "Project 3 — Mobile application",
    caption: "Mobile App",
    aspect: "square",
  },
  {
    src: "https://placehold.co/600x400/111111/cccccc.png?text=Project+4",
    alt: "Project 4 — Dashboard UI",
    caption: "Dashboard",
    aspect: "wide",
  },
  {
    src: "https://placehold.co/600x800/1a1a1a/e63328.png?text=Project+5",
    alt: "Project 5 — E-commerce platform",
    caption: "E-commerce",
    aspect: "tall",
  },
  {
    src: "https://placehold.co/600x600/111111/999999.png?text=Project+6",
    alt: "Project 6 — Illustration series",
    caption: "Illustrations",
    aspect: "square",
  },
  {
    src: "https://placehold.co/600x400/333333/e63328.png?text=Project+7",
    alt: "Project 7 — Design system",
    caption: "Design System",
    aspect: "wide",
  },
  {
    src: "https://placehold.co/600x800/111111/fafafa.png?text=Project+8",
    alt: "Project 8 — Photography portfolio",
    caption: "Photography",
    aspect: "tall",
  },
];

const aspectMap = {
  tall: "aspect-[3/4]",
  wide: "aspect-[3/2]",
  square: "aspect-square",
};

export function MasonryGallery() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Portfolio"
          title="Selected work"
          subtitle="A curated collection of projects across brand, product, and digital experiences."
        />

        {/* CSS columns masonry */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-[var(--space-grid)]">
          {items.map((item) => (
            <figure
              key={item.alt}
              className="
                group relative overflow-hidden break-inside-avoid
                mb-[var(--space-grid)]
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface-sunken)]
                cursor-pointer
              "
            >
              <div className={aspectMap[item.aspect]}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="
                    object-cover
                    transition-transform duration-[var(--duration-slow)] ease-[var(--ease-smooth)]
                    group-hover:scale-105
                  "
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Hover overlay */}
              <div
                aria-hidden="true"
                className="
                  absolute inset-0 flex items-end
                  bg-gradient-to-t from-black/60 via-black/20 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-[var(--duration-normal)]
                "
              >
                <div className="p-4 sm:p-5 w-full">
                  <p className="text-[var(--color-cream)] text-sm font-bold font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)]">
                    {item.caption}
                  </p>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
