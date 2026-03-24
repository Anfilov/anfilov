"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--color-surface)]">
      <Container>
        <div className="max-w-[480px]">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Něco se pokazilo
          </h1>
          <p className="text-[var(--color-text-secondary)] font-[family-name:var(--font-body)] mb-8">
            Omlouváme se za potíže. Zkuste to prosím znovu.
          </p>
          <Button onClick={reset}>Zkusit znovu</Button>
        </div>
      </Container>
    </main>
  );
}
