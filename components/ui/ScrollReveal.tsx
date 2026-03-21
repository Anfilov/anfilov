"use client";

import { useEffect, useRef } from "react";

/**
 * Initializes scroll-reveal on mount.
 * Observes all `.reveal` elements and adds `.is-visible` when they enter viewport.
 * Place this component once in the layout or page.
 */
export function ScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Respect reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((el) => {
        el.classList.add("is-visible");
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );

    // Observe existing elements
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Observe dynamically added elements
    const mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            if (node.classList.contains("reveal")) observer.observe(node);
            node.querySelectorAll?.(".reveal").forEach((el) => observer.observe(el));
          }
        });
      });
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
