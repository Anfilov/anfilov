"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          fontFamily: "var(--font-body), system-ui, sans-serif",
          color: "var(--color-text-secondary)",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h1 style={{ fontSize: "1.5rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
            Sanity Studio
          </h1>
          <p style={{ marginTop: "0.5rem" }}>
            Not configured. Add Sanity environment variables to{" "}
            <code
              style={{
                background: "var(--color-surface-sunken)",
                padding: "2px 6px",
                borderRadius: 4,
              }}
            >
              .env.local
            </code>{" "}
            to enable.
          </p>
          <p style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
            Run{" "}
            <code
              style={{
                background: "var(--color-surface-sunken)",
                padding: "2px 6px",
                borderRadius: 4,
              }}
            >
              npx sanity@latest init --env
            </code>{" "}
            to set up a Sanity project.
          </p>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
