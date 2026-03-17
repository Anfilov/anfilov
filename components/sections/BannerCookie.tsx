"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function BannerCookie() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="
        relative
        bg-[var(--color-surface-elevated)] border-t border-[var(--color-border)]
        shadow-[var(--shadow-lg)]
        animate-fade-up
      "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          {/* Text */}
          <p className="flex-1 text-sm text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-relaxed">
            We use cookies to improve your experience and analyze site traffic.
            By continuing, you agree to our{" "}
            <a
              href="#"
              className="text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] underline underline-offset-2 cursor-pointer transition-colors duration-[var(--duration-fast)]"
            >
              Cookie Policy
            </a>
            .
          </p>

          {/* Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setDismissed(true)}
            >
              Manage preferences
            </Button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => setDismissed(true)}
            >
              Accept all
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
