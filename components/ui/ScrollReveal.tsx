"use client";

import { useEffect, useRef } from "react";

/**
 * Initializes scroll-reveal on mount.
 * Adds `.reveal-ready` to <html> so CSS knows JS is active, then observes
 * all `.reveal` elements and adds `.is-visible` when they enter viewport.
 *
 * Without JS (or if this component fails to mount), `.reveal` elements
 * remain fully visible — progressive enhancement.
 */
export function ScrollReveal() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Signal to CSS that JS-driven reveal is ready
    document.documentElement.classList.add("reveal-ready");

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
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );

    // Observe existing elements
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Observe elements added after hydration (React may replace DOM nodes)
    const mutationObserver = new MutationObserver((mutations) => {
      for (const m of mutations) {
        for (const node of m.addedNodes) {
          if (!(node instanceof HTMLElement)) continue;
          if (node.classList.contains("reveal")) observer.observe(node);
          for (const child of node.querySelectorAll(".reveal")) {
            observer.observe(child);
          }
        }
      }
    });
    mutationObserver.observe(document.getElementById("main") ?? document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
