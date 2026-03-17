import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const collageImages = [
  { src: "https://placehold.co/400x500/111111/e63328.png?text=Work+1", alt: "Creative work sample 1" },
  { src: "https://placehold.co/400x300/1a1a1a/f25c54.png?text=Work+2", alt: "Creative work sample 2" },
  { src: "https://placehold.co/400x300/333333/999999.png?text=Work+3", alt: "Creative work sample 3" },
  { src: "https://placehold.co/400x400/111111/cccccc.png?text=Work+4", alt: "Creative work sample 4" },
];

export function HeroImageCollage() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-accent)] mb-4 font-[family-name:var(--font-heading)]">
            Creative Studio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            We craft digital{" "}
            <span className="text-[var(--color-accent)]">experiences</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] max-w-lg">
            An award-winning agency specializing in brand identity, web design,
            and digital products. We turn bold ideas into memorable interfaces.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              View our work
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="outline" size="lg">
              Get in touch
            </Button>
          </div>
        </div>

        {/* Image collage */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Tall left image spanning 2 rows */}
          <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-[var(--color-surface-sunken)] row-span-2 aspect-[3/4]">
            <Image
              src={collageImages[0].src}
              alt={collageImages[0].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Top right */}
          <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-[var(--color-surface-sunken)] aspect-[4/3]">
            <Image
              src={collageImages[1].src}
              alt={collageImages[1].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          {/* Bottom right */}
          <div className="relative overflow-hidden rounded-[var(--card-radius)] bg-[var(--color-surface-sunken)] aspect-[4/3]">
            <Image
              src={collageImages[2].src}
              alt={collageImages[2].alt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
