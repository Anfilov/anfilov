import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

/* ── ANFILOV Color Data — v3.0 Warm Signature 2026 ── */

const primitiveGold = [
  { name: "gold", hex: "#C8A84E" },
  { name: "gold-hover", hex: "#B89A42" },
  { name: "gold-light", hex: "#E8D9A0" },
  { name: "gold-dark", hex: "#8B7D5E" },
];

const primitiveForest = [
  { name: "forest", hex: "#1A3A2E" },
  { name: "forest-mid", hex: "#245C46" },
  { name: "forest-light", hex: "#2E7A5A" },
];

const primitiveWarm = [
  { name: "warm-50", hex: "#FAF8F4" },
  { name: "warm-100", hex: "#F5F0E6" },
  { name: "warm-200", hex: "#E8E0D0" },
  { name: "warm-300", hex: "#D4C9B5" },
  { name: "warm-400", hex: "#A89E8C" },
  { name: "warm-500", hex: "#8B7D5E" },
  { name: "warm-600", hex: "#6B6050" },
  { name: "warm-700", hex: "#4A4338" },
  { name: "warm-800", hex: "#2D2820" },
  { name: "warm-900", hex: "#1C1C1C" },
];

const semanticSurfaces = [
  { name: "surface-base", token: "--color-surface", hex: "#FAF8F4", desc: "Pozadí stránky (warm-50)" },
  { name: "surface-primary", token: "--color-surface-elevated", hex: "#FFFFFF", desc: "Karty, panely" },
  { name: "surface-secondary", token: "--color-surface-sunken", hex: "#F5F0E6", desc: "Sekční pozadí (cream)" },
  { name: "surface-invert", token: "--color-surface-dark", hex: "#1C1C1C", desc: "Tmavé sekce (warm-900)" },
  { name: "surface-elevated", token: "--color-surface-dark-elevated", hex: "#2D2820", desc: "Elevated on dark" },
];

const semanticText = [
  { name: "text-primary", token: "--color-text-primary", hex: "#1C1C1C", desc: "Hlavní text (warm-900)" },
  { name: "text-secondary", token: "--color-text-secondary", hex: "#6B6050", desc: "Vedlejší text (warm-600)" },
  { name: "text-tertiary", token: "--color-text-tertiary", hex: "#A89E8C", desc: "Metadata, captions (warm-400)" },
  { name: "text-accent", token: "--color-text-accent", hex: "#C8A84E", desc: "Akcentový text (gold)" },
  { name: "text-link", token: "--color-text-link", hex: "#245C46", desc: "Odkazy (forest-mid)" },
  { name: "text-inverse", token: "--color-text-inverse", hex: "#F5F0E6", desc: "Text na tmavém (cream)" },
];

const semanticBorder = [
  { name: "border-light", token: "--color-border", hex: "#E8E0D0", desc: "Jemné bordery (warm-200)" },
  { name: "border-mid", token: "--color-border-strong", hex: "#D4C9B5", desc: "Středně silné (warm-300)" },
  { name: "border-accent", token: "--color-border-accent", hex: "#E8D9A0", desc: "Hover/accent (gold-light)" },
];

const statusColors = [
  { name: "success", token: "--color-success", hex: "#2E7A5A", desc: "= forest-light" },
  { name: "warning", token: "--color-warning", hex: "#C8A84E", desc: "= gold" },
  { name: "error", token: "--color-error", hex: "#B8422A" },
  { name: "info", token: "--color-info", hex: "#1A3A2E", desc: "= forest" },
];

const buttonRules = [
  { context: "Light BG", button: "Forest", bg: "#245C46", text: "#F5F0E6", hover: "#1A3A2E", rule: "Primární na světlém pozadí" },
  { context: "Dark BG", button: "Gold", bg: "#C8A84E", text: "#1A3A2E", hover: "#B89A42", rule: "Primární na tmavém pozadí" },
];

function isLightColor(hex: string): boolean {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 160;
}

function ColorSwatch({ hex, name, desc }: { hex: string; name: string; desc?: string }) {
  const light = isLightColor(hex);
  return (
    <div className="group flex flex-col">
      <div
        className="relative h-20 sm:h-24 rounded-t-[var(--radius-lg)] border border-b-0 border-[var(--color-border)] transition-transform duration-[var(--duration-fast)] group-hover:scale-[1.02]"
        style={{ backgroundColor: hex }}
      >
        <span
          className="absolute bottom-2 left-3 text-[11px] font-mono font-semibold tracking-wide uppercase"
          style={{ color: light ? "#1C1C1C" : "#F5F0E6" }}
        >
          {hex}
        </span>
      </div>
      <div className="bg-[var(--color-surface-elevated)] border border-t-0 border-[var(--color-border)] rounded-b-[var(--radius-lg)] px-3 py-2.5">
        <p className="text-[13px] font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)] tracking-tight">
          {name}
        </p>
        {desc && (
          <p className="text-[11px] text-[var(--color-text-tertiary)] leading-snug mt-0.5 font-[family-name:var(--font-body)]">
            {desc}
          </p>
        )}
      </div>
    </div>
  );
}

function PaletteStrip({ colors, label }: { colors: { name: string; hex: string }[]; label: string }) {
  return (
    <div>
      <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
        {label}
      </p>
      <div className="flex rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border)]">
        {colors.map((c) => (
          <div
            key={c.name}
            className="flex-1 h-14 sm:h-16 relative group cursor-default"
            style={{ backgroundColor: c.hex }}
            title={`${c.name}: ${c.hex}`}
          >
            <span
              className="absolute inset-0 flex items-center justify-center text-[9px] sm:text-[10px] font-mono font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-[var(--duration-fast)]"
              style={{ color: isLightColor(c.hex) ? "#1C1C1C" : "#F5F0E6" }}
            >
              {c.hex}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function DSColors() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)] border-t border-[var(--color-border)]">
      <Container>
        <SectionHeading
          overline="Brand Identity"
          title="Barvy"
          subtitle="Warm Signature paleta — gold akcent, forest CTA, warm neutrály. Třívrstvý token systém: primitives → semantic → component."
        />

        {/* ── Primitive Palettes ── */}
        <div className="space-y-6 mb-[var(--space-block)]">
          <PaletteStrip colors={primitiveGold} label="Primitives — Gold" />
          <PaletteStrip colors={primitiveForest} label="Primitives — Forest" />
          <PaletteStrip colors={primitiveWarm} label="Primitives — Warm Neutrals" />
        </div>

        {/* ── Semantic: Surfaces ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Sémantické — Surfaces
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {semanticSurfaces.map((c) => (
              <ColorSwatch key={c.name} hex={c.hex} name={c.name} desc={c.desc} />
            ))}
          </div>
        </div>

        {/* ── Semantic: Text ── */}
        <div className="mb-[var(--space-block)]">
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Sémantické — Text
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {semanticText.map((c) => (
              <ColorSwatch key={c.name} hex={c.hex} name={c.name} desc={c.desc} />
            ))}
          </div>
        </div>

        {/* ── Borders + Status ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[var(--space-grid-lg)] mb-[var(--space-block)]">
          <div>
            <p className="text-sm font-bold text-[var(--color-text-primary)] mb-4 font-[family-name:var(--font-heading)] tracking-tight">
              Borders
            </p>
            <div className="grid grid-cols-3 gap-3">
              {semanticBorder.map((c) => (
                <ColorSwatch key={c.name} hex={c.hex} name={c.name} desc={c.desc} />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--color-text-primary)] mb-4 font-[family-name:var(--font-heading)] tracking-tight">
              Status
            </p>
            <div className="grid grid-cols-4 gap-3">
              {statusColors.map((c) => (
                <ColorSwatch key={c.name} hex={c.hex} name={c.name} desc={c.desc} />
              ))}
            </div>
          </div>
        </div>

        {/* ── Button Context Rules ── */}
        <div>
          <p className="text-sm font-bold text-[var(--color-text-primary)] mb-4 font-[family-name:var(--font-heading)] tracking-tight">
            Pravidla tlačítek
          </p>
          <p className="text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed mb-6 max-w-2xl">
            <strong>Forest</strong> = primární na světlém pozadí.{" "}
            <strong>Gold</strong> = primární na tmavém pozadí.{" "}
            <strong>Nikdy</strong> gold tlačítko na světlém. <strong>Nikdy</strong> forest na tmavém.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[var(--space-grid)]">
            {buttonRules.map((r) => (
              <div
                key={r.context}
                className={`
                  rounded-[var(--radius-lg)] border p-6 flex flex-col items-center gap-4
                  ${r.context === "Dark BG"
                    ? "bg-[var(--color-surface-dark)] border-[var(--color-border)]"
                    : "bg-[var(--color-surface-elevated)] border-[var(--color-border)]"
                  }
                `}
              >
                <p className={`text-[12px] font-semibold tracking-[3px] uppercase font-[family-name:var(--font-ui)] ${
                  r.context === "Dark BG" ? "text-[var(--color-gold-light)]" : "text-[var(--color-gold)]"
                }`}>
                  {r.context}
                </p>
                <button
                  className="inline-flex items-center justify-center gap-2 font-semibold text-[14px] px-[26px] py-[13px] rounded-[10px] transition-all duration-200"
                  style={{ backgroundColor: r.bg, color: r.text }}
                >
                  {r.button} Button
                </button>
                <p className={`text-[12px] font-[family-name:var(--font-body)] ${
                  r.context === "Dark BG" ? "text-[rgba(245,240,230,0.6)]" : "text-[var(--color-text-tertiary)]"
                }`}>
                  {r.rule}
                </p>
              </div>
            ))}
          </div>

          {/* WCAG warning */}
          <div className="mt-6 bg-[var(--color-warning-subtle)] border border-[var(--color-gold)]/20 rounded-[var(--radius-lg)] p-5">
            <p className="text-sm font-bold text-[var(--color-warm-700)] mb-2 font-[family-name:var(--font-heading)]">
              WCAG kontrast
            </p>
            <ul className="space-y-1 text-[13px] text-[var(--color-warm-600)] font-[family-name:var(--font-body)]">
              <li><strong>Gold na Cream</strong> (~2.8:1) — Fail. Nepoužívat gold text na cream bg.</li>
              <li><strong>Warm-400 na White</strong> (~2.9:1) — Fail. Nepoužívat jako primární text.</li>
              <li><strong>Gold na Forest</strong> (~4.6:1) — AA pro tlačítka (≥ 3:1 large text).</li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
