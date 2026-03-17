"use client";

import { useState } from "react";
import { Check, Copy, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

interface CodeTab {
  lang: string;
  label: string;
  code: string;
}

const tabs: CodeTab[] = [
  {
    lang: "typescript",
    label: "TypeScript",
    code: `import { Client } from '@acme/sdk';

const client = new Client({
  apiKey: process.env.ACME_API_KEY,
});

const result = await client.projects.create({
  name: 'My Website',
  preset: 'editorial',
  theme: {
    accent: '#f43f5e',
    radius: 'rounded',
  },
});

console.log(result.url);
// → https://my-website.acme.app`,
  },
  {
    lang: "python",
    label: "Python",
    code: `from acme import Client

client = Client(
    api_key=os.environ["ACME_API_KEY"]
)

result = client.projects.create(
    name="My Website",
    preset="editorial",
    theme={
        "accent": "#f43f5e",
        "radius": "rounded",
    },
)

print(result.url)
# → https://my-website.acme.app`,
  },
  {
    lang: "curl",
    label: "cURL",
    code: `curl -X POST https://api.acme.app/v1/projects \\
  -H "Authorization: Bearer $ACME_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "My Website",
    "preset": "editorial",
    "theme": {
      "accent": "#f43f5e",
      "radius": "rounded"
    }
  }'`,
  },
];

function CopyBtn({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* noop */ }
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? "Copied" : "Copy code"}
      className="
        p-1.5 rounded-[var(--radius-sm)]
        text-[var(--color-text-tertiary)] hover:text-[var(--color-cream)] hover:bg-white/10
        transition-colors duration-[var(--duration-fast)]
        cursor-pointer min-h-[44px] min-w-[44px]
        inline-flex items-center justify-center
        focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
      "
    >
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  );
}

export function ApiShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text side */}
        <div>
          <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-accent)] mb-4 font-[family-name:var(--font-heading)]">
            Developer API
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem]">
            Build with our{" "}
            <span className="text-[var(--color-accent)]">API</span>
          </h2>
          <p className="mt-4 text-base text-[var(--color-text-secondary)] leading-relaxed font-[family-name:var(--font-body)]">
            A RESTful API with SDKs for TypeScript, Python, and Go. Create
            projects, manage themes, and deploy — all programmatically.
          </p>
          <ul className="mt-6 space-y-2.5">
            {["RESTful JSON API", "Typed SDKs for 3 languages", "Webhook events for automation", "99.99% uptime SLA"].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-[var(--color-text-primary)] font-[family-name:var(--font-body)]">
                <Check size={14} className="text-[var(--color-accent)] flex-shrink-0" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Button>
              Read API docs
              <ArrowRight size={16} aria-hidden="true" />
            </Button>
          </div>
        </div>

        {/* Code panel */}
        <div className="rounded-[var(--card-radius)] overflow-hidden border border-[var(--color-border)] bg-[var(--color-brand)]">
          {/* Tab bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-4">
            <div className="flex" role="tablist">
              {tabs.map((tab, i) => (
                <button
                  key={tab.lang}
                  type="button"
                  role="tab"
                  aria-selected={activeTab === i}
                  onClick={() => setActiveTab(i)}
                  className={`
                    px-3 py-3 text-xs font-semibold font-[family-name:var(--font-heading)] tracking-wide
                    transition-colors duration-[var(--duration-fast)]
                    cursor-pointer border-b-2 -mb-px min-h-[44px]
                    focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:outline-none
                    ${
                      activeTab === i
                        ? "border-[var(--color-accent)] text-[var(--color-cream)]"
                        : "border-transparent text-[var(--color-cream)]/40 hover:text-[var(--color-cream)]/70"
                    }
                  `}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <CopyBtn text={tabs[activeTab].code} />
          </div>

          {/* Code */}
          <pre className="p-5 text-[13px] leading-relaxed text-[var(--color-text-inverse)] font-mono overflow-x-auto max-h-[360px]">
            <code>{tabs[activeTab].code}</code>
          </pre>
        </div>
      </Container>
    </section>
  );
}
