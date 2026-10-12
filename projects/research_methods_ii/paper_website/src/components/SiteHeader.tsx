import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/abstract", label: "Abstract" },
  { to: "/literature", label: "Literature" },
  { to: "/methods", label: "Methods" },
  { to: "/results", label: "Results" },
  { to: "/discussion", label: "Discussion" },
  { to: "/acknowledgements", label: "Thanks" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-paper/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link to="/" className="group flex items-center gap-2 sm:gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground font-serif text-base font-semibold sm:h-9 sm:w-9 sm:text-lg">
            E
          </div>
          <div className="leading-tight">
            <div className="font-serif text-sm font-semibold text-ink sm:text-base">Erik Menchaca</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:text-[11px]">
              PSYC-251 · Lit Review
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-ink"
              activeProps={{ className: "rounded-md px-3 py-1.5 text-sm font-medium text-ink bg-muted" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-paper text-ink transition hover:bg-muted md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-paper md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition hover:bg-muted hover:text-ink"
                activeProps={{ className: "rounded-md px-3 py-3 text-base font-medium text-ink bg-muted" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
