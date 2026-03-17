/* ================================================================
   FONT CONFIGURATION — Single source of truth for typography

   ANFILOV brand uses Averta Standard as the sole typeface.
   Local font files in /public/fonts/ (WOFF2, licensed).

   Font stack: 'Averta Standard', -apple-system, BlinkMacSystemFont, sans-serif
   ================================================================ */

import localFont from "next/font/local";

export const avertaStandard = localFont({
  variable: "--font-averta",
  display: "swap",
  src: [
    {
      path: "../public/fonts/Averta Standard Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Averta Standard Regular Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/Averta Standard Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Averta Standard Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/Averta Standard Bold Italic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

export const fontVariables = avertaStandard.variable;

/* ================================================================
   FONT METADATA — used by DSTypography to display font info.
   ================================================================ */
export const fontMeta = {
  heading: {
    name: "Averta Standard",
    weights: ["600", "700"],
    tracking: "-0.03em",
    weight: "700",
    lineHeight: "1.12",
  },
  body: {
    name: "Averta Standard",
    weights: ["400", "600"],
    styles: ["normal", "italic"],
    size: "18px",
    lineHeight: "1.70",
  },
} as const;
