"use client";

import { useRef, useState, useEffect, useSyncExternalStore } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import type { SluzbaData } from "@/lib/sluzba-types";

interface Props {
  offer: SluzbaData;
}

function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 768px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 768px)").matches,
    () => true,
  );
}

/** Proces — jak probíhá spolupráce. Horizontální stepper. */
export function SluzbaProces({ offer }: Props) {
  const totalDays = offer.steps.reduce((sum, s) => sum + s.days, 0);
  const count = offer.steps.length;
  const isDesktop = useIsDesktop();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <section className="bg-[var(--color-surface-sunken)]" style={{ paddingTop: "calc(var(--section-padding-y) / 2)", paddingBottom: "calc(var(--section-padding-y) / 2)" }}>
      <Container>
        <header className="max-w-[680px] mb-[var(--space-heading-gap)]">
          <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
            Proces
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em]">
            Jak probíhá spolupráce
          </h2>
        </header>

        <div className="relative" ref={ref}>
          {/* Connecting lines between numbers (desktop only) */}
          {isDesktop && count > 1 && (
            <div aria-hidden="true" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
              {offer.steps.slice(0, -1).map((_, i) => {
                const stepWidth = 100 / count;
                const leftEnd = stepWidth * i + stepWidth * 0.22;
                const rightStart = stepWidth * (i + 1);
                return (
                  <motion.div
                    key={i}
                    initial={{ scaleX: 0 }}
                    animate={hasAnimated ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.15, ease: [0, 0, 0.2, 1] }}
                    style={{
                      position: "absolute",
                      top: 14,
                      left: `${leftEnd}%`,
                      width: `${rightStart - leftEnd}%`,
                      height: 1,
                      backgroundColor: "var(--color-border)",
                      transformOrigin: "left",
                    }}
                  />
                );
              })}
            </div>
          )}

          <div
            style={{
              display: "flex",
              flexDirection: isDesktop ? "row" : "column",
              gap: isDesktop ? 40 : 32,
            }}
          >
            {offer.steps.map((step, index) => (
              <motion.article
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: [0, 0, 0.2, 1],
                }}
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: isDesktop ? "column" : "row",
                  alignItems: "flex-start",
                  textAlign: "left",
                  flex: 1,
                  gap: isDesktop ? 0 : 20,
                }}
              >
                {/* Step number */}
                <div style={{ position: "relative", zIndex: 10, flexShrink: 0, marginBottom: isDesktop ? 12 : 0 }}>
                  <span
                    className="text-[28px] font-bold text-[var(--color-gold)] font-[family-name:var(--font-heading)] leading-none tracking-tight"
                    style={{ opacity: 0.4 }}
                  >
                    {String(step.num).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div style={{ flex: isDesktop ? "none" : 1 }}>
                  <h3 className="text-[15px] font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight" style={{ marginBottom: 6 }}>
                    {step.title}
                  </h3>
                  <span className="text-[11px] font-semibold text-[var(--color-warm-500)] font-[family-name:var(--font-ui)] bg-[var(--color-tag-gold)] px-2 py-0.5 rounded-[var(--radius-xs)] inline-block" style={{ marginBottom: 8 }}>
                    {step.days === 1 ? "1 den" : `${step.days} dny`}
                  </span>
                  <p className="text-[13px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.6]">
                    {step.desc}
                  </p>
                </div>

                {/* Mobile vertical connector */}
                {!isDesktop && index < count - 1 && (
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: 21,
                      top: 44,
                      bottom: -32,
                      width: 1,
                      backgroundColor: "var(--color-border)",
                    }}
                  />
                )}
              </motion.article>
            ))}
          </div>
        </div>

        {/* Total timeline */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 12 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: count * 0.12 + 0.2 }}
        >
          <span className="inline-flex items-center gap-3 px-5 py-3 rounded-[var(--radius-sm)] bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)]">
            <span className="text-base text-[var(--color-text-secondary)] font-[family-name:var(--font-ui)]">
              Celkem cca <strong className="font-bold text-[var(--color-text-primary)]">{totalDays} pracovních dní</strong>
            </span>
          </span>
        </motion.div>
      </Container>
    </section>
  );
}
