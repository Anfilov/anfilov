import Image from "next/image";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface VideoItem {
  title: string;
  duration: string;
  thumbnail: string;
}

const videos: VideoItem[] = [
  {
    title: "Getting Started in 5 Minutes",
    duration: "5:12",
    thumbnail: "https://placehold.co/640x360/111111/e63328.png?text=Video+1",
  },
  {
    title: "Design Token Deep Dive",
    duration: "12:34",
    thumbnail: "https://placehold.co/640x360/1a1a1a/f25c54.png?text=Video+2",
  },
  {
    title: "Building a SaaS Landing Page",
    duration: "18:07",
    thumbnail: "https://placehold.co/640x360/333333/999999.png?text=Video+3",
  },
  {
    title: "Preset System Walkthrough",
    duration: "8:45",
    thumbnail: "https://placehold.co/640x360/111111/cccccc.png?text=Video+4",
  },
  {
    title: "CMS Integration with Sanity",
    duration: "14:22",
    thumbnail: "https://placehold.co/640x360/1a1a1a/e63328.png?text=Video+5",
  },
  {
    title: "Deploy to Production",
    duration: "6:50",
    thumbnail: "https://placehold.co/640x360/111111/fafafa.png?text=Video+6",
  },
];

export function VideoGallery() {
  return (
    <section className="bg-[var(--color-surface-elevated)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Tutorials"
          title="Video library"
          subtitle="Step-by-step video tutorials to help you master every aspect of the framework."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {videos.map((video) => (
            <a
              key={video.title}
              href="#"
              className="
                group flex flex-col
                rounded-[var(--card-radius)] border border-[var(--color-border)]
                bg-[var(--color-surface)] overflow-hidden
                hover-effect cursor-pointer
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
              "
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-[var(--color-surface-sunken)]">
                <Image
                  src={video.thumbnail}
                  alt={`Thumbnail for ${video.title}`}
                  fill
                  className="
                    object-cover
                    transition-transform duration-[var(--duration-slow)] ease-[var(--ease-smooth)]
                    group-hover:scale-105
                  "
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="
                    w-12 h-12 rounded-full
                    bg-white/90 backdrop-blur-sm
                    flex items-center justify-center
                    shadow-[var(--shadow-lg)]
                    transition-transform duration-[var(--duration-normal)] ease-[var(--ease-smooth)]
                    group-hover:scale-110
                  ">
                    <Play size={20} className="text-[var(--color-surface-dark)] ml-0.5" aria-hidden="true" fill="currentColor" />
                  </div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded-[var(--radius-sm)] bg-black/70 text-[11px] font-mono text-[var(--color-cream)] tabular-nums">
                  {video.duration}
                </div>
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-[var(--heading-tracking)] group-hover:text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)]">
                  {video.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
