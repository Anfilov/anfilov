"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
        <Container>
          <SectionHeading
            overline="See it in action"
            title="Watch the demo"
            subtitle="A two-minute walkthrough of the token system, concept switching, and block composition."
          />

          <div className="max-w-4xl mx-auto">
            <button
              onClick={() => setIsOpen(true)}
              className="
                group relative block w-full aspect-video
                rounded-[var(--card-radius)] overflow-hidden
                border border-[var(--color-border)]
                bg-[var(--color-surface-sunken)]
                cursor-pointer
                hover-effect
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
              "
              aria-label="Play demo video"
            >
              <Image
                src="https://placehold.co/1280x720/1a1a2e/e0e0e0?text=Demo+Video"
                alt=""
                fill
                className="object-cover transition-transform duration-[var(--duration-normal)] group-hover:scale-[1.02]"
                sizes="(max-width: 896px) 100vw, 896px"
                unoptimized
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-[var(--duration-fast)]" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="
                    w-16 h-16 sm:w-20 sm:h-20
                    rounded-full
                    bg-[var(--color-accent)] text-[var(--color-text-on-accent)]
                    inline-flex items-center justify-center
                    shadow-[var(--shadow-lg)]
                    transition-transform duration-[var(--duration-fast)] ease-[var(--ease-spring)]
                    group-hover:scale-110
                  "
                >
                  <Play size={28} fill="currentColor" aria-hidden="true" className="ml-1" />
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4">
                <span className="text-xs font-medium text-[var(--color-cream)] bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-[var(--radius-sm)] font-[family-name:var(--font-body)]">
                  2:14
                </span>
              </div>
            </button>
          </div>
        </Container>
      </section>

      {/* Video modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="
              absolute top-4 right-4 z-10
              w-10 h-10 rounded-full
              bg-white/10 hover:bg-white/20
              text-[var(--color-cream)]
              inline-flex items-center justify-center
              cursor-pointer
              transition-colors duration-[var(--duration-fast)]
              focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none
            "
            aria-label="Close video"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <div className="w-full max-w-4xl aspect-video rounded-[var(--card-radius)] overflow-hidden bg-black">
            {/* Replace src with actual video embed URL */}
            <iframe
              src="about:blank"
              title="Demo video"
              className="w-full h-full"
              allow="autoplay; fullscreen"
            />
          </div>
        </div>
      )}
    </>
  );
}
