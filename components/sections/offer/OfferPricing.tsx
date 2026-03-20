"use client";

import { useRef, useState, useEffect, useSyncExternalStore } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import type { OfferData } from "@/lib/offer-types";

interface Props {
  offer: OfferData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 260, damping: 20 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring" as const, stiffness: 120, damping: 14 },
  },
};

function useIsDesktop() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia("(min-width: 1024px)");
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia("(min-width: 1024px)").matches,
    () => true,
  );
}

function DotScore({ score, max = 5, highlight = false }: { score: number; max?: number; highlight?: boolean }) {
  return (
    <span className="inline-flex gap-1.5" aria-label={`${score} z ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < score
              ? highlight
                ? "bg-[var(--color-gold)]"
                : "bg-[var(--color-warm-400)]"
              : "bg-[var(--color-border)]"
          }`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}

/** Blok 6+7 — Ceník & Srovnání. Dvousloupcový: ceník vlevo, srovnání vpravo. */
export function OfferPricing({ offer }: Props) {
  const { pricing, comparison } = offer;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const isDesktop = useIsDesktop();

  useEffect(() => {
    if (isInView && !hasAnimated) setHasAnimated(true);
  }, [isInView, hasAnimated]);

  return (
    <section id="cenik" className="bg-[var(--color-surface-sunken)] py-[var(--section-padding-y)]">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={hasAnimated ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Header */}
          <motion.header className="mb-[var(--space-heading-gap)]" variants={itemVariants}>
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              Ceník a srovnání
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] leading-[1.12] tracking-[-0.03em] mb-5">
              Kolik stojí tvorba loga
            </h2>
            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)] max-w-2xl text-balance">
              Cenu vám připravím vždy na míru na&nbsp;základě konkrétní specifikace zadání a&nbsp;rozsahu zakázky.
            </p>
          </motion.header>

          {/* Two-column layout */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isDesktop ? "2fr 3fr" : "1fr",
              gap: isDesktop ? 32 : 24,
              alignItems: "start",
            }}
          >
            {/* LEFT — Pricing card */}
            <motion.div
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-4">
                Cena za návrh loga
              </h3>

              <motion.div variants={itemVariants} className="mb-8">
                <span className="text-3xl sm:text-4xl font-bold text-[var(--color-gold)] font-[family-name:var(--font-heading)] tracking-tight leading-none">
                  od {pricing.anchor.toLocaleString("cs-CZ")}<span className="text-xl sm:text-2xl">&nbsp;Kč</span>
                </span>
              </motion.div>

              {/* Co vše je v ceně */}
              <div className="mb-8">
                <h3 className="text-base font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-4">
                  Co vše je v ceně
                </h3>
                <div className="space-y-4">
                  {[
                    { name: "Grafické návrhy", desc: "3 grafické návrhy loga v online prezentaci s ukázkami aplikace a doporučením" },
                    { name: "Licence na užití", desc: "Neomezená a výhradní licence na užití loga" },
                    { name: "Zdrojové soubory", desc: "Vektorové soubory loga pro rozvíjení vizuální identity značky" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      variants={listItemVariants}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-9 h-9 mt-0.5 rounded-[var(--avatar-radius)] bg-[rgba(46,122,90,0.08)] text-[var(--color-forest-mid)] inline-flex items-center justify-center">
                        <Check size={16} strokeWidth={2.5} />
                      </span>
                      <div>
                        <span className="block text-[14px] font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] leading-[1.4]">
                          {item.name}
                        </span>
                        <p className="text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)] mt-1 leading-[1.5]">
                          {item.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <a href="#konzultace">
                <Button variant="primary" size="lg">
                  Chci nabídku
                  <ArrowRight size={18} aria-hidden="true" />
                </Button>
              </a>
            </motion.div>

            {/* RIGHT — Comparison table (ANFILOV vs Agentura only) */}
            <motion.div
              variants={itemVariants}
            >
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-4">
                Proč je to se mnou výhodnější
              </h3>
              <div className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-elevated)] overflow-hidden">
              <table className="w-full text-[14px]">
                <thead>
                  <tr className="border-b-2 border-[var(--color-border)]">
                    <th className="text-left py-4 px-5 font-semibold text-[13px] uppercase tracking-[1.5px] text-[var(--color-warm-700)] font-[family-name:var(--font-ui)]">
                      Kritérium
                    </th>
                    <th className="py-4 px-4 font-semibold text-[13px] uppercase tracking-[1.5px] font-[family-name:var(--font-ui)] text-center text-[var(--color-gold)] bg-[rgba(200,168,78,0.04)]">
                      ANFILOV
                    </th>
                    <th className="py-4 px-4 font-semibold text-[13px] uppercase tracking-[1.5px] font-[family-name:var(--font-ui)] text-center text-[var(--color-warm-500)]">
                      Agentura
                    </th>
                    <th className="py-4 px-4 font-semibold text-[13px] uppercase tracking-[1.5px] font-[family-name:var(--font-ui)] text-center text-[var(--color-warm-500)]">
                      Svépomocí
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.criteria.map((criterion, i) => (
                    <tr
                      key={criterion}
                      className="border-b border-[var(--color-border)] last:border-0"
                    >
                      <td className="py-3.5 px-5 font-semibold text-[var(--color-warm-800)] font-[family-name:var(--font-ui)]">
                        {criterion}
                      </td>
                      <td className="py-3.5 px-4 text-center bg-[rgba(200,168,78,0.04)]">
                        <DotScore score={comparison.columns.anfilov[i]} highlight />
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <DotScore score={comparison.columns.agentura[i]} />
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <DotScore score={comparison.columns.diy[i]} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <p className="px-5 py-3 text-[11px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)] border-t border-[var(--color-border)]">
                Srovnání vychází z průměrných zkušeností klientů.
              </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
