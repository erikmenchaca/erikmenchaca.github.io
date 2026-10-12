import type { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative z-10 min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 md:py-16">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-coral">
      <span className="h-px w-8 bg-coral/50" />
      {children}
    </div>
  );
}

export function PageTitle({ children, kicker }: { children: ReactNode; kicker?: string }) {
  return (
    <header className="mb-8 border-b border-border pb-6 sm:mb-12 sm:pb-10">
      {kicker && <SectionEyebrow>{kicker}</SectionEyebrow>}
      <h1 className="font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
        {children}
      </h1>
    </header>
  );
}
