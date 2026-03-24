import type { PortableTextComponents } from "next-sanity";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

export const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mt-10 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl sm:text-2xl font-bold tracking-tight mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold tracking-tight mt-6 mb-2">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.7] mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-[3px] border-[var(--color-gold)] pl-5 my-6 italic text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-6 mb-4 space-y-1.5 text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.7]">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-6 mb-4 space-y-1.5 text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] leading-[1.7]">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-[var(--color-text-primary)]">{children}</strong>
    ),
    em: ({ children }) => <em>{children}</em>,
    code: ({ children }) => (
      <code className="text-[0.9em] px-1.5 py-0.5 rounded-[4px] bg-[var(--color-surface-sunken)] font-mono">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const href = value?.href ?? "#";
      const isExternal = value?.external || href.startsWith("http");
      return (
        <a
          href={href}
          className="text-[var(--color-forest-mid)] underline underline-offset-2 hover:text-[var(--color-forest)] transition-colors duration-[var(--duration-fast)]"
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlForImage(value).width(1200).fit("max").url();
      return (
        <figure className="my-8">
          <div className="rounded-[var(--radius-md)] overflow-hidden">
            <Image
              src={src}
              alt={value.alt || ""}
              width={1200}
              height={800}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 720px"
            />
          </div>
          {value.caption && (
            <figcaption className="mt-2 text-[13px] text-[var(--color-text-tertiary)] font-[family-name:var(--font-ui)]">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};
