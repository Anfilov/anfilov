import Link from "next/link";
import { Navbar, Footer } from "@/components/sections";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[60vh] flex items-center bg-[var(--color-surface)]">
        <Container>
          <div className="max-w-[480px]">
            <p className="text-[12px] font-semibold tracking-[3px] uppercase text-[var(--color-gold)] mb-3 font-[family-name:var(--font-ui)]">
              404
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
              Stránka nenalezena
            </h1>
            <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-8">
              Hledaná stránka neexistuje nebo byla přesunuta.
            </p>
            <Link
              href="/"
              className="
                inline-flex items-center justify-center gap-2
                font-semibold font-[family-name:var(--font-ui)]
                tracking-[0.01em] text-[14px]
                rounded-[var(--btn-radius)]
                px-[var(--btn-padding-x)] py-[var(--btn-padding-y)] min-h-[44px]
                bg-[var(--btn-primary-bg)] text-[var(--btn-primary-text)]
                hover:bg-[var(--btn-primary-hover)]
                transition-[background-color,transform] duration-[var(--duration-normal)]
                no-underline
              "
            >
              Zpět na úvodní stránku
            </Link>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
