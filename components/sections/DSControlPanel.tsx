"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { presets, dimensionToAttribute } from "@/lib/presets";
import type { DesignPreset } from "@/lib/presets";
import {
  AlignCenter,
  AlignLeft,
  Circle,
  Square,
  Maximize2,
  Shrink,
  Sun,
  Layers,
  Zap,
  Pause,
  Sparkles,
  Type,
  Palette,
  Minus,
  SeparatorHorizontal,
  SlidersHorizontal,
  Eye,
  EyeOff,
  Gem,
  Flower,
  Fingerprint,
  Scan,
  PenTool,
  ArrowUpFromLine,
  MousePointerClick,
  Scale,
  Droplets,
  CreditCard,
  SquareDashedBottom,
} from "lucide-react";

/* ---- Concept Dimension Definitions ---- */
interface ConceptDimension {
  key: string;
  label: string;
  attribute: string;
  file: string;
  options: { value: string; label: string; icon: React.ReactNode }[];
  promptExamples: string[];
}

const dimensions: ConceptDimension[] = [
  {
    key: "layout",
    label: "Layout",
    attribute: "data-layout",
    file: "layout.tsx",
    options: [
      { value: "center", label: "Center", icon: <AlignCenter size={14} aria-hidden="true" /> },
      { value: "left", label: "Left", icon: <AlignLeft size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Change layout to left-aligned",
      "Make all text centered",
    ],
  },
  {
    key: "radius",
    label: "Radius",
    attribute: "data-radius",
    file: "layout.tsx",
    options: [
      { value: "sharp", label: "Sharp", icon: <Square size={14} aria-hidden="true" /> },
      { value: "rounded", label: "Rounded", icon: <Square size={14} className="rounded" aria-hidden="true" /> },
      { value: "pill", label: "Pill", icon: <Circle size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Make everything sharper / more angular",
      "Use pill-shaped buttons and badges",
    ],
  },
  {
    key: "density",
    label: "Density",
    attribute: "data-density",
    file: "layout.tsx",
    options: [
      { value: "tight", label: "Tight", icon: <Shrink size={14} aria-hidden="true" /> },
      { value: "balanced", label: "Balanced", icon: <Layers size={14} aria-hidden="true" /> },
      { value: "airy", label: "Airy", icon: <Maximize2 size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Make spacing tighter across the whole site",
      "Make the design more airy and spacious",
    ],
  },
  {
    key: "shadows",
    label: "Shadows",
    attribute: "data-shadows",
    file: "layout.tsx",
    options: [
      { value: "flat", label: "Flat", icon: <Square size={14} aria-hidden="true" /> },
      { value: "subtle", label: "Subtle", icon: <Layers size={14} aria-hidden="true" /> },
      { value: "dramatic", label: "Dramatic", icon: <Sun size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Remove all shadows / make it flat",
      "Make shadows more dramatic",
    ],
  },
  {
    key: "motion",
    label: "Motion",
    attribute: "data-motion",
    file: "layout.tsx",
    options: [
      { value: "none", label: "None", icon: <Pause size={14} aria-hidden="true" /> },
      { value: "subtle", label: "Subtle", icon: <Zap size={14} aria-hidden="true" /> },
      { value: "playful", label: "Playful", icon: <Sparkles size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Disable all animations",
      "Make animations more playful and bouncy",
    ],
  },
  {
    key: "dividers",
    label: "Dividers",
    attribute: "data-dividers",
    file: "layout.tsx",
    options: [
      { value: "none", label: "None", icon: <Minus size={14} aria-hidden="true" /> },
      { value: "subtle", label: "Subtle", icon: <SeparatorHorizontal size={14} aria-hidden="true" /> },
      { value: "bold", label: "Bold", icon: <SlidersHorizontal size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Remove section separators",
      "Use bold accent dividers between sections",
    ],
  },
  {
    key: "contrast",
    label: "Contrast",
    attribute: "data-contrast",
    file: "layout.tsx",
    options: [
      { value: "low", label: "Low", icon: <Minus size={14} aria-hidden="true" /> },
      { value: "medium", label: "Medium", icon: <Layers size={14} aria-hidden="true" /> },
      { value: "high", label: "High", icon: <Eye size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Make all sections the same background",
      "Increase contrast between alternating sections",
    ],
  },
  {
    key: "ornament",
    label: "Ornament",
    attribute: "data-ornament",
    file: "layout.tsx",
    options: [
      { value: "none", label: "None", icon: <EyeOff size={14} aria-hidden="true" /> },
      { value: "minimal", label: "Minimal", icon: <Gem size={14} aria-hidden="true" /> },
      { value: "decorative", label: "Decorative", icon: <Flower size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Remove all background decorations",
      "Add decorative patterns and glows",
    ],
  },
  /* ── New dimensions ── */
  {
    key: "texture",
    label: "Texture",
    attribute: "data-texture",
    file: "layout.tsx",
    options: [
      { value: "clean", label: "Clean", icon: <Scan size={14} aria-hidden="true" /> },
      { value: "grain", label: "Grain", icon: <Fingerprint size={14} aria-hidden="true" /> },
      { value: "glass", label: "Glass", icon: <Droplets size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Add film grain texture to the background",
      "Use frosted glass effect on cards",
    ],
  },
  {
    key: "borderWeight",
    label: "Border Weight",
    attribute: "data-border-weight",
    file: "layout.tsx",
    options: [
      { value: "hairline", label: "Hairline", icon: <Minus size={14} aria-hidden="true" /> },
      { value: "normal", label: "Normal", icon: <SeparatorHorizontal size={14} aria-hidden="true" /> },
      { value: "heavy", label: "Heavy", icon: <PenTool size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Make borders thinner / more delicate",
      "Use heavy brutalist borders",
    ],
  },
  {
    key: "ink",
    label: "Ink",
    attribute: "data-ink",
    file: "layout.tsx",
    options: [
      { value: "crisp", label: "Crisp", icon: <Eye size={14} aria-hidden="true" /> },
      { value: "soft", label: "Soft", icon: <Layers size={14} aria-hidden="true" /> },
      { value: "muted", label: "Muted", icon: <EyeOff size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Make text and borders more contrasty",
      "Soften / mute the secondary text and borders",
    ],
  },
  {
    key: "cardStyle",
    label: "Card Style",
    attribute: "data-card-style",
    file: "layout.tsx",
    options: [
      { value: "minimal", label: "Minimal", icon: <Square size={14} aria-hidden="true" /> },
      { value: "elevated", label: "Elevated", icon: <CreditCard size={14} aria-hidden="true" /> },
      { value: "outlined", label: "Outlined", icon: <SquareDashedBottom size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Make cards flat without borders or shadows",
      "Use outlined card style with visible borders",
    ],
  },
  {
    key: "hover",
    label: "Hover",
    attribute: "data-hover",
    file: "layout.tsx",
    options: [
      { value: "lift", label: "Lift", icon: <ArrowUpFromLine size={14} aria-hidden="true" /> },
      { value: "glow", label: "Glow", icon: <Sparkles size={14} aria-hidden="true" /> },
      { value: "scale", label: "Scale", icon: <Scale size={14} aria-hidden="true" /> },
    ],
    promptExamples: [
      "Cards should glow on hover instead of lifting",
      "Use scale effect for hover interactions",
    ],
  },
];

const additionalConcepts = [
  {
    label: "Typography",
    icon: <Type size={14} aria-hidden="true" />,
    file: "lib/fonts.ts + globals.css",
    examples: [
      "Change font to Clash Display + Satoshi",
      "Use editorial typography: Playfair Display + Source Sans 3",
    ],
  },
  {
    label: "Colors",
    icon: <Palette size={14} aria-hidden="true" />,
    file: "globals.css (@theme)",
    examples: [
      "Make the color scheme monochromatic navy",
      "Change accent color to coral / warm orange",
    ],
  },
];

function ActiveIndicator({ active }: { active: boolean }) {
  return (
    <span
      className={`
        inline-block w-1.5 h-1.5 rounded-full
        ${active ? "bg-[var(--color-accent)]" : "bg-[var(--sc-border)]"}
        transition-colors duration-[var(--duration-fast)]
      `}
      aria-hidden="true"
    />
  );
}

/* ---- Preset display helpers ---- */
const dimensionColumns: (keyof DesignPreset["dimensions"])[] = [
  "layout", "radius", "density", "shadows", "motion", "dividers", "contrast",
  "ornament", "texture", "borderWeight", "ink", "cardStyle", "hover",
];
const columnHeaders = [
  "Preset", "Layout", "Radius", "Density", "Shadows", "Motion", "Dividers",
  "Contrast", "Ornament", "Texture", "Border", "Ink", "Card", "Hover",
  "Fonts", "Colors",
];

export function DSControlPanel() {
  const [activeValues, setActiveValues] = useState<Record<string, string>>({});

  useEffect(() => {
    const html = document.documentElement;
    const values: Record<string, string> = {};
    for (const dim of dimensions) {
      values[dim.key] = html.getAttribute(dim.attribute) ?? "";
    }
    setActiveValues(values);
  }, []);

  return (
    <section className="section-contrast bg-[var(--sc-bg)] text-[var(--sc-text)] py-[var(--section-padding-y)]">
      <Container>
        <SectionHeading
          overline="System"
          title="Design Control Panel"
          subtitle="Prompt-driven design customization. Change one data-attribute on <html> to transform the entire site."
          className="[&_h2]:text-[var(--sc-text)] [&_p:last-child]:text-[var(--sc-text-muted)]"
        />

        {/* Dimensions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-grid)]">
          {dimensions.map((dim) => (
            <article
              key={dim.key}
              className="
                rounded-[var(--card-radius)] border border-[var(--sc-border)]
                bg-[var(--sc-card-bg)]
                p-[var(--card-padding)]
                transition-[border-color,box-shadow] duration-[var(--duration-normal)]
                hover:border-[var(--color-accent)]/30
              "
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--sc-text)] font-[family-name:var(--font-heading)]">
                  {dim.label}
                </h3>
                <code className="text-[10px] text-[var(--sc-text-dim)] font-mono">
                  {dim.attribute}
                </code>
              </div>

              {/* Options */}
              <div className="flex flex-wrap gap-2 mb-5">
                {dim.options.map((opt) => {
                  const isActive = activeValues[dim.key] === opt.value;
                  return (
                    <span
                      key={opt.value}
                      className={`
                        inline-flex items-center gap-1.5
                        text-xs font-medium px-3 py-1.5
                        rounded-[var(--badge-radius)] border
                        transition-colors duration-[var(--duration-fast)]
                        ${
                          isActive
                            ? "bg-[var(--color-accent)] text-[var(--color-text-on-accent)] border-[var(--color-accent)]"
                            : "bg-[var(--sc-pill-bg)] text-[var(--sc-pill-text)] border-[var(--sc-pill-border)]"
                        }
                      `}
                    >
                      <ActiveIndicator active={isActive} />
                      {opt.icon}
                      {opt.label}
                    </span>
                  );
                })}
              </div>

              {/* Prompt examples */}
              <div className="space-y-1.5">
                {dim.promptExamples.map((ex) => (
                  <p
                    key={ex}
                    className="text-[11px] text-[var(--sc-text-dim)] italic font-[family-name:var(--font-body)] leading-relaxed"
                  >
                    &ldquo;{ex}&rdquo;
                  </p>
                ))}
              </div>

              {/* File reference */}
              <p className="mt-3 text-[10px] text-[var(--sc-text-dimmer)] font-mono">
                {dim.file}
              </p>
            </article>
          ))}

          {/* Typography & Colors — non-attribute concepts */}
          {additionalConcepts.map((concept) => (
            <article
              key={concept.label}
              className="
                rounded-[var(--card-radius)] border border-[var(--sc-border)]
                bg-[var(--sc-card-bg)]
                p-[var(--card-padding)]
                transition-[border-color,box-shadow] duration-[var(--duration-normal)]
                hover:border-[var(--color-accent)]/30
              "
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--sc-text)] font-[family-name:var(--font-heading)]">
                  {concept.label}
                </h3>
                <span className="text-[var(--sc-text-dim)]">{concept.icon}</span>
              </div>

              <div className="space-y-1.5 mb-3">
                {concept.examples.map((ex) => (
                  <p
                    key={ex}
                    className="text-[11px] text-[var(--sc-text-dim)] italic font-[family-name:var(--font-body)] leading-relaxed"
                  >
                    &ldquo;{ex}&rdquo;
                  </p>
                ))}
              </div>

              <p className="mt-3 text-[10px] text-[var(--sc-text-dimmer)] font-mono">
                {concept.file}
              </p>
            </article>
          ))}
        </div>

        {/* Quick Reference Table */}
        <div className="mt-[var(--space-block)] overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--sc-border)]">
                <th className="pb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--sc-text-sub)] font-[family-name:var(--font-heading)]">
                  Prompt
                </th>
                <th className="pb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--sc-text-sub)] font-[family-name:var(--font-heading)]">
                  Change
                </th>
                <th className="pb-3 text-xs font-bold uppercase tracking-[0.15em] text-[var(--sc-text-sub)] font-[family-name:var(--font-heading)]">
                  Where
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--sc-border-divider)]">
              {[
                { prompt: "Layout na levý", change: 'data-layout="left"', where: "layout.tsx" },
                { prompt: "Font na Clash Display + Satoshi", change: "Font imports + personality tokens", where: "lib/fonts.ts + globals.css" },
                { prompt: "Všechno ostřejší", change: 'data-radius="sharp"', where: "layout.tsx" },
                { prompt: "Všechno pill", change: 'data-radius="pill"', where: "layout.tsx" },
                { prompt: "Spacing těsnější", change: 'data-density="tight"', where: "layout.tsx" },
                { prompt: "Spacing vzdušnější", change: 'data-density="airy"', where: "layout.tsx" },
                { prompt: "Shadows dramatické", change: 'data-shadows="dramatic"', where: "layout.tsx" },
                { prompt: "Bez animací", change: 'data-motion="none"', where: "layout.tsx" },
                { prompt: "Barvy monochromatické", change: "5-6 semantic tokens", where: "globals.css (@theme)" },
                { prompt: "Bez oddělovačů sekcí", change: 'data-dividers="none"', where: "layout.tsx" },
                { prompt: "Výrazné oddělovače", change: 'data-dividers="bold"', where: "layout.tsx" },
                { prompt: "Střídání pozadí sekcí", change: 'data-contrast="high"', where: "layout.tsx" },
                { prompt: "Přidej dekorativní vzory", change: 'data-ornament="decorative"', where: "layout.tsx" },
                { prompt: "Čistý design bez ozdob", change: 'data-ornament="none"', where: "layout.tsx" },
                { prompt: "Zrnitá textura pozadí", change: 'data-texture="grain"', where: "layout.tsx" },
                { prompt: "Skleněný efekt na kartách", change: 'data-texture="glass"', where: "layout.tsx" },
                { prompt: "Tenčí / jemnější okraje", change: 'data-border-weight="hairline"', where: "layout.tsx" },
                { prompt: "Tlusté brutalistické okraje", change: 'data-border-weight="heavy"', where: "layout.tsx" },
                { prompt: "Ostřejší text a okraje", change: 'data-ink="crisp"', where: "layout.tsx" },
                { prompt: "Ztlumit sekundární text", change: 'data-ink="muted"', where: "layout.tsx" },
                { prompt: "Karty bez rámečku a stínu", change: 'data-card-style="minimal"', where: "layout.tsx" },
                { prompt: "Karty jen s obrysem", change: 'data-card-style="outlined"', where: "layout.tsx" },
                { prompt: "Glow efekt při hoveru", change: 'data-hover="glow"', where: "layout.tsx" },
                { prompt: "Scale efekt při hoveru", change: 'data-hover="scale"', where: "layout.tsx" },
                { prompt: "Aplikuj Editorial preset", change: "All 13 dimensions + fonts + colors", where: "lib/presets.ts" },
              ].map((row) => (
                <tr key={row.prompt}>
                  <td className="py-3 pr-4 text-[var(--sc-text-muted)] font-[family-name:var(--font-body)]">
                    &ldquo;{row.prompt}&rdquo;
                  </td>
                  <td className="py-3 pr-4">
                    <code className="text-[11px] text-[var(--color-accent-light)] bg-[var(--sc-pill-bg)] px-2 py-0.5 rounded font-mono">
                      {row.change}
                    </code>
                  </td>
                  <td className="py-3 text-[11px] text-[var(--sc-text-dim)] font-mono">
                    {row.where}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ══════════════ Design Presets ══════════════ */}
        <div className="mt-[var(--space-block)]">
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--sc-text)] font-[family-name:var(--font-heading)] mb-2">
            Design Presets
          </h3>
          <p className="text-[12px] text-[var(--sc-text-dim)] font-[family-name:var(--font-body)] mb-6 max-w-2xl leading-relaxed">
            Named combinations of all 13 concept dimensions + fonts + colors.
            Tell Claude &ldquo;Apply the Editorial preset&rdquo; to transform
            the entire site in one prompt.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--sc-border)]">
                  {columnHeaders.map((h) => (
                    <th
                      key={h}
                      className="pb-3 pr-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--sc-text-sub)] font-[family-name:var(--font-heading)] whitespace-nowrap"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--sc-border-divider)]">
                {presets.map((preset) => (
                  <tr key={preset.id}>
                    {/* Name */}
                    <td className="py-3 pr-3 font-bold text-[var(--sc-text)] font-[family-name:var(--font-heading)] tracking-tight whitespace-nowrap">
                      {preset.name}
                    </td>
                    {/* 13 dimensions */}
                    {dimensionColumns.map((col) => (
                      <td key={col} className="py-3 pr-3">
                        <code className="text-[10px] text-[var(--color-accent-light)] bg-[var(--sc-pill-bg)] px-1.5 py-0.5 rounded font-mono">
                          {preset.dimensions[col]}
                        </code>
                      </td>
                    ))}
                    {/* Fonts */}
                    <td className="py-3 pr-3 text-[10px] text-[var(--sc-text-muted)] font-[family-name:var(--font-body)] whitespace-nowrap">
                      {preset.fonts.heading}
                      {preset.fonts.heading !== preset.fonts.body && (
                        <> + {preset.fonts.body}</>
                      )}
                    </td>
                    {/* Colors summary */}
                    <td className="py-3 text-[10px] text-[var(--sc-text-muted)] whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5">
                        <span
                          className="inline-block w-3 h-3 rounded-full border border-[var(--sc-border)]"
                          style={{ backgroundColor: preset.colors.brand }}
                          aria-hidden="true"
                        />
                        <span
                          className="inline-block w-3 h-3 rounded-full border border-[var(--sc-border)]"
                          style={{ backgroundColor: preset.colors.accent }}
                          aria-hidden="true"
                        />
                        <span
                          className="inline-block w-3 h-3 rounded-full border border-[var(--sc-border)]"
                          style={{ backgroundColor: preset.colors.surface }}
                          aria-hidden="true"
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}
