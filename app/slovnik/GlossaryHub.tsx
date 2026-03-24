"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { GlossaryTermListItem } from "./page";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const CATEGORY_STYLES: Record<string, { bg: string; color: string }> = {
  Branding: { bg: "rgba(200,168,78,0.12)", color: "#8B7D5E" },
  Typografie: { bg: "rgba(26,58,46,0.10)", color: "#245C46" },
  Webdesign: { bg: "rgba(46,122,90,0.12)", color: "#2E7A5A" },
  Tisk: { bg: "rgba(168,158,140,0.15)", color: "#6B6050" },
  "Obalový design": { bg: "rgba(200,168,78,0.10)", color: "#4A4338" },
  "Sociální média": { bg: "rgba(36,92,70,0.10)", color: "#245C46" },
  "Digitální design": { bg: "rgba(232,217,160,0.25)", color: "#6B6050" },
  Marketing: { bg: "rgba(26,58,46,0.08)", color: "#1A3A2E" },
};
const DEFAULT_STYLE = { bg: "#f0ede6", color: "#6B6050" };

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

function TermCard({ t, highlighted }: { t: GlossaryTermListItem; highlighted?: boolean }) {
  return (
    <div
      id={slugify(t.term)}
      className={`py-5 border-b scroll-mt-40 transition-all duration-700 ${
        highlighted
          ? "border-[var(--color-gold)] bg-[rgba(200,168,78,0.08)] -mx-4 px-4 rounded-[8px]"
          : "border-[var(--color-border)]"
      }`}
    >
      <div className="flex items-start gap-3 mb-1.5">
        <h3 className="text-[16px] font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight">
          {t.term}
        </h3>
        <span
          className="shrink-0 text-[11px] font-semibold px-2 py-0.5 rounded-[6px] font-[family-name:var(--font-ui)]"
          style={{
            backgroundColor: (CATEGORY_STYLES[t.category] ?? DEFAULT_STYLE).bg,
            color: (CATEGORY_STYLES[t.category] ?? DEFAULT_STYLE).color,
          }}
        >
          {t.category}
        </span>
      </div>

      {t.aliases && t.aliases.length > 0 && (
        <p className="text-[13px] italic text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)] mb-1.5">
          {t.aliases.join(", ")}
        </p>
      )}

      <p className="text-[14px] text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.6] mb-2">
        {t.shortDefinition}
      </p>

      {t.hasDetailPage && (
        <Link
          href={`/slovnik/${t.slug}`}
          className="
            inline-flex items-center gap-1 text-[13px] font-semibold
            text-[var(--color-forest-mid)] font-[family-name:var(--font-ui)]
            hover:gap-2 transition-all duration-[var(--duration-fast)]
            no-underline
          "
        >
          Více
          <ArrowRight size={12} />
        </Link>
      )}
    </div>
  );
}

export function GlossaryHub({ terms }: { terms: GlossaryTermListItem[] }) {
  const [query, setQuery] = useState("");
  const [highlightedSlug, setHighlightedSlug] = useState<string | null>(null);
  const isSearching = query.trim().length > 0;

  // Highlight term from URL hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    setHighlightedSlug(hash);
    const timer = setTimeout(() => setHighlightedSlug(null), 4000);
    return () => clearTimeout(timer);
  }, []);

  // Filter + rank terms by relevance: name match > alias match > definition match
  const filtered = useMemo(() => {
    if (!query.trim()) return terms;
    const q = query.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const normalize = (s: string) =>
      s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const scored = terms
      .map((t) => {
        const termN = normalize(t.term);
        const aliasesN = (t.aliases ?? []).map(normalize);
        const defN = normalize(t.shortDefinition);

        // Score: higher = more relevant
        let score = 0;
        if (termN === q) score = 100;                          // exact name match
        else if (termN.startsWith(q)) score = 80;             // name starts with
        else if (termN.includes(q)) score = 60;               // name contains
        else if (aliasesN.some((a) => a === q)) score = 50;   // exact alias match
        else if (aliasesN.some((a) => a.startsWith(q))) score = 40; // alias starts with
        else if (aliasesN.some((a) => a.includes(q))) score = 30;   // alias contains
        else if (defN.includes(q)) score = 10;                // definition contains
        // no match
        return { t, score };
      })
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score || a.t.term.localeCompare(b.t.term, "cs"));

    return scored.map((x) => x.t);
  }, [terms, query]);

  // Group by first letter
  const grouped = useMemo(() => {
    const map = new Map<string, GlossaryTermListItem[]>();
    for (const t of filtered) {
      const letter = t.term[0]
        .toUpperCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(t);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b, "cs"));
  }, [filtered]);

  // All unique first letters for A-Z nav
  const allLetters = useMemo(() => {
    const set = new Set<string>();
    for (const t of terms) {
      set.add(
        t.term[0].toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""),
      );
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b, "cs"));
  }, [terms]);

  const activeLetters = new Set(grouped.map(([l]) => l));

  return (
    <div>
      {/* Search + A-Z nav */}
      <div className="sticky top-0 z-10 bg-[var(--color-surface)] pt-4 pb-5">
        {/* Search */}
        <div style={{ position: "relative", maxWidth: 360, marginBottom: 16 }}>
          <label htmlFor="glossary-search" className="sr-only">Hledat pojem</label>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              position: "absolute",
              left: 14,
              top: "50%",
              transform: "translateY(-50%)",
              pointerEvents: "none",
              color: "#A89E8C",
            }}
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            id="glossary-search"
            type="text"
            inputMode="search"
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
            placeholder="Hledat pojem…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              WebkitAppearance: "none",
              MozAppearance: "none",
              appearance: "none" as const,
              width: "100%",
              maxWidth: 360,
              boxSizing: "border-box" as const,
              paddingLeft: 40,
              paddingRight: 16,
              paddingTop: 10,
              paddingBottom: 10,
              fontSize: 16,
              borderRadius: 10,
              border: "1px solid #E8E0D0",
              backgroundColor: "#fff",
              color: "#1C1C1C",
              outline: "none",
            }}
          />
        </div>

        {/* A-Z — hidden during search */}
        <nav aria-label="Abecední navigace" className={`flex flex-wrap gap-1.5 ${isSearching ? "hidden" : ""}`}>
          {allLetters.map((letter) => {
            const active = activeLetters.has(letter);
            return (
              <a
                key={letter}
                href={active ? `#letter-${letter}` : undefined}
                aria-disabled={!active || undefined}
                tabIndex={active ? undefined : -1}
                className={`
                  inline-flex items-center justify-center w-8 h-8 rounded-[var(--radius-xs)]
                  text-[13px] font-semibold font-[family-name:var(--font-ui)]
                  transition-colors duration-[var(--duration-fast)]
                  ${
                    active
                      ? "text-[var(--color-text-primary)] hover:bg-[var(--color-surface-elevated)] hover:text-[var(--color-forest-mid)] cursor-pointer"
                      : "text-[var(--color-text-tertiary)] opacity-40 cursor-default"
                  }
                `}
              >
                {letter}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Terms list */}
      {filtered.length === 0 ? (
        <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] py-12 text-center">
          Žádné pojmy neodpovídají vašemu hledání.
        </p>
      ) : isSearching ? (
        /* ── Flat list when searching ── */
        <div>
          <p className="text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)] mb-4">
            {filtered.length} {filtered.length === 1 ? "výsledek" : filtered.length < 5 ? "výsledky" : "výsledků"}
          </p>
          <div className="grid grid-cols-1 gap-0">
            {filtered.map((t) => (
              <TermCard key={t._id} t={t} highlighted={highlightedSlug === slugify(t.term)} />
            ))}
          </div>
        </div>
      ) : (
        /* ── Alphabetical groups when browsing ── */
        <div className="space-y-12">
          {grouped.map(([letter, items]) => (
            <div key={letter} id={`letter-${letter}`}>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-text-primary)] font-[family-name:var(--font-heading)] tracking-tight mb-6 scroll-mt-40">
                {letter}
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0">
                {items.map((t) => (
                  <TermCard key={t._id} t={t} highlighted={highlightedSlug === slugify(t.term)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
