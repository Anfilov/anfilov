"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function BeforeAfter() {
  const [position, setPosition] = useState(50);

  const handleMove = useCallback(
    (clientX: number, rect: DOMRect) => {
      const x = clientX - rect.left;
      const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(pct);
    },
    [],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.buttons === 0) return;
      handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
    },
    [handleMove],
  );

  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      e.currentTarget.setPointerCapture(e.pointerId);
      handleMove(e.clientX, e.currentTarget.getBoundingClientRect());
    },
    [handleMove],
  );

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="Results"
          title="Before & after"
          subtitle="Drag the slider to compare the transformation."
        />

        <div className="max-w-3xl layout-mx">
          <div
            className="
              relative overflow-hidden cursor-col-resize select-none
              rounded-[var(--card-radius)] border border-[var(--color-border)]
              aspect-[16/9]
              focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
            "
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            role="slider"
            aria-label="Before and after comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(position)}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 2));
              if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 2));
            }}
          >
            {/* After (full background) */}
            <Image
              src="https://placehold.co/960x540/111111/e63328.png?text=After"
              alt="After transformation"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />

            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${position}%` }}
            >
              <Image
                src="https://placehold.co/960x540/333333/999999.png?text=Before"
                alt="Before transformation"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>

            {/* Divider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_8px_rgba(45,40,32,0.4)]"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-[var(--shadow-lg)] flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M7 4l-4 6 4 6M13 4l4 6-4 6" stroke="var(--color-surface-dark)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-3 left-3 px-2 py-1 rounded-[var(--radius-sm)] bg-black/50 backdrop-blur-sm text-[12px] font-bold text-[var(--color-cream)] uppercase tracking-wider font-[family-name:var(--font-heading)]">
              Before
            </div>
            <div className="absolute top-3 right-3 px-2 py-1 rounded-[var(--radius-sm)] bg-black/50 backdrop-blur-sm text-[12px] font-bold text-[var(--color-cream)] uppercase tracking-wider font-[family-name:var(--font-heading)]">
              After
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
