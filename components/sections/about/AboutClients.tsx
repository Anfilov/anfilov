"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

const BASE =
  "https://content.app-sources.com/s/41101902986880176/thumbnails/640x480/Logo_SVG";

const clients = [
  { name: "Radio Impuls", logo: `${BASE}/Radio-Impuls-4770025.svg?format=webp` },
  { name: "Novak", logo: `${BASE}/Novak-4770025.svg?format=webp` },
  { name: "Harrachov", logo: `${BASE}/Harrachov-4770025.svg?format=webp` },
  { name: "Innova", logo: `${BASE}/Innova-3453689.svg?format=webp` },
  { name: "Pernod", logo: `${BASE}/Pernod-3453689.svg?format=webp` },
  { name: "Fisaf", logo: `${BASE}/Fisaf-4770025.svg?format=webp` },
  { name: "Druchema", logo: `${BASE}/Druchema-3453689.svg?format=webp` },
  { name: "H1", logo: `${BASE}/H1-4770025.svg?format=webp` },
  { name: "Rudolf Jelínek", logo: `${BASE}/Rudolf-Jelinek-3453689.svg?format=webp` },
  { name: "FZU", logo: `${BASE}/FZU-4770025.svg?format=webp` },
  { name: "Direct Alpine", logo: `${BASE}/Direct-Alpine-4770025.svg?format=webp` },
  { name: "CVR", logo: `${BASE}/CVR-3453689.svg?format=webp` },
];

function LogoRow() {
  return (
    <div className="flex items-center gap-16 sm:gap-20 shrink-0">
      {clients.map((client) => (
        <img
          key={client.name}
          src={client.logo}
          alt={client.name}
          className="h-32 sm:h-40 w-auto object-contain opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
          loading="lazy"
        />
      ))}
    </div>
  );
}

export function AboutClients() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Spolupráce"
          title="Vybraní klienti, kteří mi dali svoji důvěru."
          className="[&_h2]:text-balance"
        />
      </Container>

      {/* Marquee — full width, no container constraint */}
      <div className="relative overflow-hidden mt-10">
        {/* Fade edges */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[var(--color-surface)] to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[var(--color-surface)] to-transparent" />

        <div
          className="flex gap-16 sm:gap-20 py-6 animate-[marquee-scroll_35s_linear_infinite] hover:[animation-play-state:paused]"
          style={{ width: "max-content" }}
        >
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
