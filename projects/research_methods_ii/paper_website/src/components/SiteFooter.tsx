export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-paper/50">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-muted-foreground">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-serif text-base text-ink">
              From "Just One More Scroll" to "Just One More Semester"
            </div>
            <div className="mt-1">
              Erik Menchaca · Rochester Institute of Technology · NTID
            </div>
          </div>
          <div className="text-xs">
            PSYC-251-01 · Research Methods II · Teachers: Dr. Allison Fitch & Dr. Rain G. Bosworth
          </div>
        </div>
      </div>
    </footer>
  );
}
