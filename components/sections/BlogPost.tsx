import Image from "next/image";
import { ArrowLeft, Clock, Calendar, Share2, Bookmark, Twitter, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";

/* ----------------------------------------------------------------
   Dummy article content — in production this comes from Sanity.
   ---------------------------------------------------------------- */
const article = {
  title: "Building a Token-Driven Design System That Actually Scales",
  excerpt:
    "How we replaced 2,000 lines of ad-hoc Tailwind with a 3-layer token architecture — and why every design decision now lives in one file.",
  date: "Mar 8, 2025",
  readTime: "8 min read",
  category: "Design Systems",
  author: {
    name: "Simon Novotný",
    role: "Design Engineer",
    avatar: "https://placehold.co/96x96/111111/e63328.png?text=SN",
  },
  coverImage: "https://placehold.co/1200x600/111111/e63328.png?text=Cover",
  tags: ["Tokens", "CSS Variables", "Tailwind", "Architecture"],
};

const relatedPosts = [
  {
    title: "Dark Mode Without Dark Classes",
    date: "Feb 20, 2025",
    category: "Engineering",
    image: "https://placehold.co/400x260/1a1a1a/f25c54.png?text=Related+1",
  },
  {
    title: "Mobile-First: More Than a Buzzword",
    date: "Feb 12, 2025",
    category: "Design",
    image: "https://placehold.co/400x260/111111/999999.png?text=Related+2",
  },
  {
    title: "Typography Pairing for the Web",
    date: "Jan 30, 2025",
    category: "Typography",
    image: "https://placehold.co/400x260/333333/e63328.png?text=Related+3",
  },
];

/* ----------------------------------------------------------------
   Sidebar column — metadata, author, related posts
   ---------------------------------------------------------------- */
function Sidebar() {
  return (
    <aside className="flex flex-col gap-8 lg:sticky lg:top-[calc(var(--nav-height)+24px)] lg:self-start">
      {/* Author card */}
      <div className="bg-[var(--color-surface-elevated)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5">
        <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--color-text-tertiary)] mb-4 font-[family-name:var(--font-heading)]">
          Written by
        </p>
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={article.author.avatar}
            alt={article.author.name}
            width={48}
            height={48}
            className="rounded-[var(--avatar-radius)] object-cover"
          />
          <div>
            <p className="text-sm font-bold font-[family-name:var(--font-heading)] text-[var(--color-text-primary)]">
              {article.author.name}
            </p>
            <p className="text-xs text-[var(--color-text-tertiary)] font-[family-name:var(--font-body)]">
              {article.author.role}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)] font-[family-name:var(--font-body)]">
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} aria-hidden="true" className="text-[var(--color-text-tertiary)]" />
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} aria-hidden="true" className="text-[var(--color-text-tertiary)]" />
            {article.readTime}
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="bg-[var(--color-surface-elevated)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5">
        <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--color-text-tertiary)] mb-3 font-[family-name:var(--font-heading)]">
          Tags
        </p>
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </div>

      {/* Share */}
      <div className="bg-[var(--color-surface-elevated)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5">
        <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--color-text-tertiary)] mb-3 font-[family-name:var(--font-heading)]">
          Share
        </p>
        <div className="flex gap-2">
          {[
            { icon: Twitter, label: "Share on Twitter" },
            { icon: Linkedin, label: "Share on LinkedIn" },
            { icon: Share2, label: "Copy link" },
            { icon: Bookmark, label: "Bookmark" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              aria-label={label}
              className="
                min-h-[44px] min-w-[44px]
                flex items-center justify-center
                rounded-[var(--btn-radius)]
                border border-[var(--color-border)]
                bg-[var(--color-surface)]
                text-[var(--color-text-secondary)]
                hover:bg-[var(--color-surface-sunken)]
                hover:text-[var(--color-text-primary)]
                active:scale-95
                transition-[background-color,color,border-color,transform] duration-[var(--duration-fast)]
                cursor-pointer
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
              "
            >
              <Icon size={16} />
            </button>
          ))}
        </div>
      </div>

      {/* Related posts */}
      <div className="bg-[var(--color-surface-elevated)] rounded-[var(--card-radius)] border border-[var(--color-border)] p-5">
        <p className="text-[12px] font-bold tracking-[0.15em] uppercase text-[var(--color-text-tertiary)] mb-4 font-[family-name:var(--font-heading)]">
          Related articles
        </p>
        <div className="flex flex-col gap-4">
          {relatedPosts.map((post) => (
            <a
              key={post.title}
              href="#"
              className="
                group flex gap-3 cursor-pointer
                focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
                rounded-[var(--radius-sm)]
              "
            >
              <div className="relative w-20 h-14 flex-shrink-0 rounded-[var(--radius-md)] overflow-hidden bg-[var(--color-surface-sunken)]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-[var(--duration-normal)] group-hover:scale-105"
                  sizes="80px"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[var(--color-text-primary)] line-clamp-2 group-hover:text-[var(--color-text-accent)] transition-colors duration-[var(--duration-fast)] font-[family-name:var(--font-heading)]">
                  {post.title}
                </p>
                <p className="text-xs text-[var(--color-text-tertiary)] mt-1 font-[family-name:var(--font-body)]">
                  {post.date}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}

/* ----------------------------------------------------------------
   Article body — structured prose content
   ---------------------------------------------------------------- */
function ArticleBody() {
  return (
    <div className="prose-container">
      {/* Back link */}
      <a
        href="#"
        className="
          inline-flex items-center gap-1.5 text-sm font-medium
          text-[var(--color-text-secondary)]
          hover:text-[var(--color-text-accent)]
          transition-colors duration-[var(--duration-fast)]
          mb-8 cursor-pointer
          focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:outline-none
          rounded-[var(--radius-sm)]
        "
      >
        <ArrowLeft size={14} aria-hidden="true" />
        Back to blog
      </a>

      {/* Category + title */}
      <div className="mb-5">
        <Badge variant="accent">{article.category}</Badge>
      </div>
      <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] mb-4">
        {article.title}
      </h1>
      <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed mb-8 font-[family-name:var(--font-body)]">
        {article.excerpt}
      </p>

      {/* Cover image */}
      <figure className="relative aspect-[2/1] rounded-[var(--card-radius)] overflow-hidden mb-10 bg-[var(--color-surface-sunken)]">
        <Image
          src={article.coverImage}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
          priority
        />
      </figure>

      {/* Article prose */}
      <article className="
        font-[family-name:var(--font-body)]
        text-[var(--color-text-primary)]
        text-[17px] leading-[1.8]
        [&_h2]:font-[family-name:var(--font-heading)]
        [&_h2]:text-2xl [&_h2]:sm:text-3xl
        [&_h2]:mt-12 [&_h2]:mb-4
        [&_h3]:font-[family-name:var(--font-heading)]
        [&_h3]:text-xl [&_h3]:sm:text-2xl
        [&_h3]:mt-10 [&_h3]:mb-3
        [&_p]:mb-5 [&_p]:text-[var(--color-text-secondary)]
        [&_p:first-child]:text-[var(--color-text-primary)]
        [&_strong]:text-[var(--color-text-primary)] [&_strong]:font-semibold
        [&_a]:text-[var(--color-text-accent)] [&_a]:underline [&_a]:underline-offset-2
        [&_a:hover]:text-[var(--color-accent-hover)]
        [&_ul]:mb-5 [&_ul]:pl-5 [&_ul]:list-disc
        [&_ul_li]:mb-2 [&_ul_li]:text-[var(--color-text-secondary)]
        [&_ol]:mb-5 [&_ol]:pl-5 [&_ol]:list-decimal
        [&_ol_li]:mb-2 [&_ol_li]:text-[var(--color-text-secondary)]
        [&_blockquote]:relative [&_blockquote]:my-10
        [&_blockquote]:rounded-[var(--card-radius)]
        [&_blockquote]:border [&_blockquote]:border-[var(--color-border)]
        [&_blockquote]:bg-[var(--color-surface-elevated)]
        [&_blockquote]:px-6 [&_blockquote]:py-6 [&_blockquote]:sm:px-8 [&_blockquote]:sm:py-7
        [&_blockquote]:shadow-[var(--shadow-sm)]
        [&_blockquote_p]:text-[var(--color-text-primary)]
        [&_blockquote_p]:text-base [&_blockquote_p]:sm:text-lg
        [&_blockquote_p]:leading-relaxed [&_blockquote_p]:italic
        [&_blockquote_p]:font-[family-name:var(--font-heading)]
        [&_blockquote_p]:pl-6
        [&_blockquote_p]:mb-0
        [&_blockquote]:before:content-['\201C'] [&_blockquote]:before:absolute
        [&_blockquote]:before:top-5 [&_blockquote]:before:left-5 [&_blockquote]:sm:before:left-7
        [&_blockquote]:before:text-4xl [&_blockquote]:before:leading-none
        [&_blockquote]:before:font-[family-name:var(--font-heading)]
        [&_blockquote]:before:text-[var(--color-accent)] [&_blockquote]:before:font-bold
        [&_code]:bg-[var(--color-surface-sunken)] [&_code]:px-1.5 [&_code]:py-0.5
        [&_code]:rounded-[var(--radius-sm)] [&_code]:text-sm [&_code]:font-mono
        [&_code]:text-[var(--color-text-accent)]
        [&_pre]:bg-[var(--color-surface-dark)] [&_pre]:text-[var(--color-text-inverse)]
        [&_pre]:p-5 [&_pre]:rounded-[var(--card-radius)]
        [&_pre]:overflow-x-auto [&_pre]:mb-6 [&_pre]:text-sm [&_pre]:leading-relaxed
        [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_pre_code]:text-inherit
        [&_hr]:border-[var(--color-border)] [&_hr]:my-10
        [&_figure]:my-8
        [&_figcaption]:text-center [&_figcaption]:text-sm
        [&_figcaption]:text-[var(--color-text-tertiary)] [&_figcaption]:mt-3
      ">
        <h2>The problem with ad-hoc design</h2>
        <p>
          Every component had its own color values. Every section picked spacing on a whim.
          <strong>The result was 2,000 lines of Tailwind</strong> that looked consistent from a
          distance but crumbled under scrutiny. Changing the brand color meant a find-and-replace
          across 47 files.
        </p>
        <p>
          We needed a system where <strong>one change cascades everywhere</strong> — not just
          colors, but spacing, radii, shadows, and typography. The answer was a 3-layer token
          architecture.
        </p>

        <h2>The 3-layer token model</h2>
        <p>
          Think of tokens as a pipeline: raw values flow through semantic meaning into
          component-specific decisions.
        </p>
        <ol>
          <li>
            <strong>Primitive tokens</strong> — the raw palette. <code>--color-slate-900</code>,
            <code>--color-teal-500</code>. These never appear in components directly.
          </li>
          <li>
            <strong>Semantic tokens</strong> — intent-based aliases. <code>--color-brand</code>,
            <code>--color-accent</code>, <code>--color-surface</code>. Components use these.
          </li>
          <li>
            <strong>Component tokens</strong> — scoped overrides. <code>--card-radius</code>,
            <code>--btn-shadow</code>. Change a concept token and every card in the system updates.
          </li>
        </ol>

        <blockquote>
          <p>
            A design system isn&apos;t a component library — it&apos;s the set of decisions that make
            a component library coherent.
          </p>
        </blockquote>

        <h2>Implementation with CSS custom properties</h2>
        <p>
          We define all tokens in a single <code>globals.css</code> file using Tailwind v4&apos;s
          <code>@theme</code> directive. This makes every token available as a Tailwind utility
          automatically — <code>bg-[var(--color-surface)]</code> just works.
        </p>
        <pre><code>{`:root {
  --color-brand: #0c1220;
  --color-accent: #0d9488;
  --color-surface: #f7f6f3;

  --card-radius: var(--radius-xl);
  --card-padding: calc(var(--space-unit) * 3.5);
}`}</code></pre>
        <p>
          The real power comes from <strong>concept tokens</strong>. A single
          <code>data-radius=&quot;sharp&quot;</code> attribute on <code>&lt;html&gt;</code> cascades
          to buttons, cards, inputs, and badges simultaneously. No component changes needed.
        </p>

        <h3>Results</h3>
        <p>
          After the migration, our CSS dropped from 2,000 to 800 lines. More importantly, a
          complete rebrand — new colors, new radii, new spacing — now takes <strong>under 10
          minutes</strong> instead of two days.
        </p>
        <ul>
          <li>47 files with hardcoded colors → 1 file with semantic tokens</li>
          <li>Brand color change: 10 minutes instead of 2 days</li>
          <li>New concept (sharp corners): 30 seconds via one data attribute</li>
          <li>Dark mode: automatic via token layer, zero component changes</li>
        </ul>

        <hr />

        <p>
          The takeaway is simple: <strong>invest in the system, not the components</strong>. When
          your tokens are right, every new component you build inherits quality for free.
        </p>
      </article>
    </div>
  );
}

/* ----------------------------------------------------------------
   Main export — two-column layout: sidebar left, article right
   ---------------------------------------------------------------- */
export function BlogPost() {
  return (
    <section className="bg-[var(--color-surface)] py-[var(--section-padding-y)]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-[var(--space-grid-lg)]">
          {/* Sidebar — on mobile, shows after article */}
          <div className="order-2 lg:order-1">
            <Sidebar />
          </div>

          {/* Article content */}
          <div className="order-1 lg:order-2">
            <ArticleBody />
          </div>
        </div>
      </Container>
    </section>
  );
}
