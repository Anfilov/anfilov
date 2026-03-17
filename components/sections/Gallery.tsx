import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface GalleryImage {
  src: string;
  alt: string;
}

const featured: GalleryImage = {
  src: "https://placehold.co/800x600/111111/e63328.png?text=Gallery+1",
  alt: "Gallery image 1",
};

const sideImages: GalleryImage[] = [
  { src: "https://placehold.co/400x300/1a1a1a/f25c54.png?text=Gallery+2", alt: "Gallery image 2" },
  { src: "https://placehold.co/400x300/111111/999999.png?text=Gallery+3", alt: "Gallery image 3" },
];

const bottomImages: [GalleryImage, GalleryImage] = [
  { src: "https://placehold.co/800x400/111111/cccccc.png?text=Gallery+5", alt: "Gallery image 5" },
  { src: "https://placehold.co/400x400/333333/e63328.png?text=Gallery+4", alt: "Gallery image 4" },
];

function GalleryItem({ src, alt, className = "" }: GalleryImage & { className?: string }) {
  return (
    <figure
      className={`
        relative overflow-hidden
        rounded-[var(--card-radius)] bg-[var(--color-surface-sunken)]
        border border-[var(--color-border)]
        group cursor-pointer
        ${className}
      `}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="
          object-cover
          transition-transform duration-[var(--duration-slow)] ease-[var(--ease-smooth)]
          group-hover:scale-105
        "
        sizes="(max-width: 640px) 100vw, 50vw"
      />
      <div
        aria-hidden="true"
        className="
          absolute inset-0
          bg-gradient-to-t from-black/40 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-[var(--duration-normal)]
        "
      />
    </figure>
  );
}

export function Gallery() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Gallery"
          title="Visual showcase"
          subtitle="A responsive image grid with mixed sizes and hover effects."
        />

        <div className="flex flex-col gap-[var(--space-grid)]">
          {/* Top: featured image + 2 stacked side images */}
          <div className="flex flex-col sm:flex-row gap-[var(--space-grid)]">
            <GalleryItem
              {...featured}
              className="aspect-[4/3] sm:flex-[2] sm:min-h-0"
            />
            <div className="flex flex-col gap-[var(--space-grid)] sm:flex-[1]">
              {sideImages.map((img) => (
                <GalleryItem
                  key={img.alt}
                  {...img}
                  className="aspect-[4/3] flex-1"
                />
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row gap-[var(--space-grid)]">
            <GalleryItem
              {...bottomImages[0]}
              className="aspect-[4/3] sm:aspect-[5/2] sm:flex-[2]"
            />
            <GalleryItem
              {...bottomImages[1]}
              className="aspect-[4/3] sm:aspect-[5/2] sm:flex-[1]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
