/**
 * Design Meta-Presets — Personality-driven design configurations.
 *
 * Each preset combines ALL 13 concept dimensions + suggested font pair + color palette.
 * Applying a preset transforms the entire site with a single action.
 *
 * Usage in DSControlPanel: import { presets } from "@/lib/presets"
 * Usage via prompt: "Apply the Editorial preset" → set all dimensions at once
 */

export interface DesignPreset {
  /** Unique slug */
  id: string;
  /** Display name */
  name: string;
  /** One-line description */
  description: string;

  /** All 13 concept dimension values */
  dimensions: {
    layout: "center" | "left";
    radius: "sharp" | "rounded" | "pill";
    density: "tight" | "balanced" | "airy";
    shadows: "flat" | "subtle" | "dramatic";
    motion: "none" | "subtle" | "playful";
    dividers: "none" | "subtle" | "bold";
    contrast: "low" | "medium" | "high";
    ornament: "none" | "minimal" | "decorative";
    texture: "clean" | "grain" | "glass";
    borderWeight: "hairline" | "normal" | "heavy";
    ink: "crisp" | "soft" | "muted";
    cardStyle: "minimal" | "elevated" | "outlined";
    hover: "lift" | "glow" | "scale";
  };

  /** Suggested Google Fonts pair */
  fonts: {
    heading: string;
    body: string;
  };

  /** Suggested color palette — key semantic tokens */
  colors: {
    brand: string;
    accent: string;
    surface: string;
    surfaceElevated: string;
    textPrimary: string;
    textSecondary: string;
    border: string;
  };
}

export const presets: DesignPreset[] = [
  {
    id: "brutalist",
    name: "Brutalist",
    description:
      "Raw, unapologetic, anti-design. Heavy borders, no decoration, monospace accents.",
    dimensions: {
      layout: "left",
      radius: "sharp",
      density: "tight",
      shadows: "flat",
      motion: "none",
      dividers: "bold",
      contrast: "high",
      ornament: "none",
      texture: "clean",
      borderWeight: "heavy",
      ink: "crisp",
      cardStyle: "outlined",
      hover: "scale",
    },
    fonts: { heading: "Space Grotesk", body: "JetBrains Mono" },
    colors: {
      brand: "#000000",
      accent: "#ff0000",
      surface: "#ffffff",
      surfaceElevated: "#ffffff",
      textPrimary: "#000000",
      textSecondary: "#333333",
      border: "#000000",
    },
  },
  {
    id: "editorial",
    name: "Editorial",
    description:
      "Magazine-inspired elegance with serif headings, warm tones, and refined spacing.",
    dimensions: {
      layout: "left",
      radius: "rounded",
      density: "balanced",
      shadows: "subtle",
      motion: "subtle",
      dividers: "bold",
      contrast: "medium",
      ornament: "minimal",
      texture: "grain",
      borderWeight: "hairline",
      ink: "soft",
      cardStyle: "minimal",
      hover: "lift",
    },
    fonts: { heading: "Playfair Display", body: "Source Sans 3" },
    colors: {
      brand: "#1a1a1a",
      accent: "#c9432b",
      surface: "#faf8f5",
      surfaceElevated: "#ffffff",
      textPrimary: "#1a1a1a",
      textSecondary: "#6b6b6b",
      border: "#e8e4df",
    },
  },
  {
    id: "saas",
    name: "SaaS",
    description:
      "Energetic, modern product marketing. Rounded pills, playful motion, vivid accents.",
    dimensions: {
      layout: "center",
      radius: "pill",
      density: "airy",
      shadows: "dramatic",
      motion: "playful",
      dividers: "none",
      contrast: "low",
      ornament: "decorative",
      texture: "clean",
      borderWeight: "normal",
      ink: "soft",
      cardStyle: "elevated",
      hover: "lift",
    },
    fonts: { heading: "Outfit", body: "DM Sans" },
    colors: {
      brand: "#0f172a",
      accent: "#e63328",
      surface: "#fafafa",
      surfaceElevated: "#ffffff",
      textPrimary: "#0f172a",
      textSecondary: "#64748b",
      border: "#e2e8f0",
    },
  },
  {
    id: "corporate",
    name: "Corporate",
    description:
      "ANFILOV Warm Signature — warm neutrals, forest green CTA, gold accents, Averta Standard.",
    dimensions: {
      layout: "center",
      radius: "rounded",
      density: "balanced",
      shadows: "subtle",
      motion: "subtle",
      dividers: "subtle",
      contrast: "medium",
      ornament: "minimal",
      texture: "clean",
      borderWeight: "normal",
      ink: "soft",
      cardStyle: "outlined",
      hover: "lift",
    },
    fonts: { heading: "Averta Standard", body: "Averta Standard" },
    colors: {
      brand: "#1C1C1C",
      accent: "#C8A84E",
      surface: "#FAF8F4",
      surfaceElevated: "#FFFFFF",
      textPrimary: "#1C1C1C",
      textSecondary: "#6B6050",
      border: "#E8E0D0",
    },
  },
  {
    id: "organic",
    name: "Organic",
    description:
      "Earthy, approachable, human. Soft shapes, warm palette, natural textures.",
    dimensions: {
      layout: "center",
      radius: "pill",
      density: "airy",
      shadows: "subtle",
      motion: "subtle",
      dividers: "none",
      contrast: "low",
      ornament: "minimal",
      texture: "grain",
      borderWeight: "hairline",
      ink: "muted",
      cardStyle: "minimal",
      hover: "glow",
    },
    fonts: { heading: "Fraunces", body: "DM Sans" },
    colors: {
      brand: "#2d2016",
      accent: "#d4764e",
      surface: "#fdf8f3",
      surfaceElevated: "#fffcf8",
      textPrimary: "#2d2016",
      textSecondary: "#8a7560",
      border: "#e8ddd0",
    },
  },
  {
    id: "digital",
    name: "Digital",
    description:
      "Dark-first, high-tech, neon accents. Glowing edges, sharp geometry, monospace details.",
    dimensions: {
      layout: "left",
      radius: "sharp",
      density: "tight",
      shadows: "dramatic",
      motion: "playful",
      dividers: "subtle",
      contrast: "high",
      ornament: "decorative",
      texture: "glass",
      borderWeight: "hairline",
      ink: "crisp",
      cardStyle: "outlined",
      hover: "glow",
    },
    fonts: { heading: "Bricolage Grotesque", body: "JetBrains Mono" },
    colors: {
      brand: "#e0e0e0",
      accent: "#00ff88",
      surface: "#0a0a0a",
      surfaceElevated: "#141414",
      textPrimary: "#e0e0e0",
      textSecondary: "#888888",
      border: "#2a2a2a",
    },
  },
  {
    id: "swiss",
    name: "Swiss",
    description:
      "Maximum restraint. Grid-perfect, type-driven, every pixel justified.",
    dimensions: {
      layout: "left",
      radius: "sharp",
      density: "balanced",
      shadows: "flat",
      motion: "none",
      dividers: "subtle",
      contrast: "medium",
      ornament: "none",
      texture: "clean",
      borderWeight: "normal",
      ink: "crisp",
      cardStyle: "outlined",
      hover: "lift",
    },
    fonts: { heading: "Instrument Sans", body: "IBM Plex Sans" },
    colors: {
      brand: "#111111",
      accent: "#e63328",
      surface: "#fafafa",
      surfaceElevated: "#ffffff",
      textPrimary: "#111111",
      textSecondary: "#555555",
      border: "#e0e0e0",
    },
  },
  {
    id: "luxury",
    name: "Luxury",
    description:
      "Refined editorial with generous white space, champagne accents, and tactile grain texture.",
    dimensions: {
      layout: "center",
      radius: "rounded",
      density: "airy",
      shadows: "subtle",
      motion: "subtle",
      dividers: "bold",
      contrast: "high",
      ornament: "minimal",
      texture: "grain",
      borderWeight: "hairline",
      ink: "muted",
      cardStyle: "minimal",
      hover: "lift",
    },
    fonts: { heading: "Cormorant Garamond", body: "Jost" },
    colors: {
      brand: "#1c1917",
      accent: "#a08c6a",
      surface: "#faf9f6",
      surfaceElevated: "#ffffff",
      textPrimary: "#1c1917",
      textSecondary: "#87807a",
      border: "#e7e4de",
    },
  },
];

/** Dimension key → data-attribute mapping for applying presets to <html> */
export const dimensionToAttribute: Record<string, string> = {
  layout: "data-layout",
  radius: "data-radius",
  density: "data-density",
  shadows: "data-shadows",
  motion: "data-motion",
  dividers: "data-dividers",
  contrast: "data-contrast",
  ornament: "data-ornament",
  texture: "data-texture",
  borderWeight: "data-border-weight",
  ink: "data-ink",
  cardStyle: "data-card-style",
  hover: "data-hover",
};
