import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { PageShell, SectionEyebrow } from "@/components/PageShell";
import afitchImg from "@/assets/afitch.jpg";
import rainImg from "@/assets/rain.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Just One More Scroll — Erik Menchaca · PSYC-251" },
      {
        name: "description",
        content:
          "Literature review on social media addiction, academic procrastination, anxiety, and GPA in college students.",
      },
    ],
  }),
  component: Home,
});

const findings = [
  {
    stat: "r = .453",
    label: "BSMAS ↔ Procrastination",
    note: "Strongest link in the study (p < .001).",
  },
  {
    stat: "r = .326",
    label: "BSMAS ↔ Anxiety",
    note: "Higher addiction-like use, more anxiety (p = .003).",
  },
  {
    stat: "r = −.301",
    label: "Procrastination ↔ GPA",
    note: "Procrastination — not addiction — predicted grades (p = .005).",
  },
  {
    stat: "n.s.",
    label: "BSMAS ↔ GPA",
    note: "Social media addiction did not uniquely predict GPA.",
  },
];

const sections = [
  { to: "/abstract", n: "01", title: "Abstract", desc: "The 84-student study at a glance." },
  { to: "/literature", n: "02", title: "Literature Review", desc: "Addiction, procrastination, sleep, gender." },
  { to: "/methods", n: "03", title: "Methods", desc: "BSMAS, APS-S, GAD-7, and self-reported GPA." },
  { to: "/results", n: "04", title: "Results", desc: "Correlations, regressions, and figures." },
  { to: "/discussion", n: "05", title: "Discussion", desc: "What the numbers actually mean." },
  { to: "/acknowledgements", n: "06", title: "Acknowledgements", desc: "The people who made it possible." },
] as const;

function Home() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="border-b border-border pb-10 sm:pb-16">
        <SectionEyebrow>PSYC-251 · Spring 2026 · Literature Review</SectionEyebrow>
        <h1 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-7xl">
          From <em className="italic text-coral">"Just One More Scroll"</em> to{" "}
          <em className="italic">"Just One More Semester"</em>:
        </h1>
        <p className="mt-5 max-w-3xl font-serif text-lg leading-snug text-muted-foreground sm:mt-6 sm:text-xl md:text-2xl">
          Exploring the Relationship Between Social Media Addiction, Academic Procrastination, and
          GPA in College Students.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 text-sm md:grid-cols-3">
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Author</div>
            <div className="mt-1 font-medium text-ink">Erik Menchaca</div>
            <div className="text-muted-foreground">RIT · NTID</div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Teachers</div>
            <div className="mt-3 flex items-center gap-3">
              <img
                src={afitchImg}
                alt="Dr. Allison Fitch"
                className="h-12 w-12 rounded-full object-cover ring-1 ring-border"
                loading="lazy"
              />
              <div className="font-medium text-ink">Dr. Allison Fitch</div>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <img
                src={rainImg}
                alt="Dr. Rain G. Bosworth"

                className="h-12 w-12 rounded-full object-cover ring-1 ring-border"
                loading="lazy"
              />
              <div className="text-muted-foreground">Dr. Rain G. Bosworth</div>
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Sample</div>
            <div className="mt-1 font-medium text-ink">N = 84 undergraduates</div>
            <div className="text-muted-foreground">38 female · 46 male</div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/abstract"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Read the abstract →
          </Link>
          <Link
            to="/results"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-paper px-5 py-3 text-sm font-medium text-ink transition hover:bg-muted"
          >
            Jump to results
          </Link>
        </div>
      </section>

      {/* Key findings */}
      <section className="py-12 sm:py-16">
        <SectionEyebrow>Key Findings</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
          The headline numbers
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {findings.map((f) => (
            <div key={f.label} className="bg-paper p-7">
              <div className="font-mono text-3xl font-medium text-coral">{f.stat}</div>
              <div className="mt-3 font-serif text-lg font-semibold text-ink">{f.label}</div>
              <div className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.note}</div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          <span className="bg-highlight/60 px-1 text-ink">The takeaway:</span> procrastination — not
          social media addiction itself — is the more direct predictor of GPA. Social media
          addiction is more clearly tied to anxiety than to grades.
        </p>
      </section>

      {/* Section index */}
      <section className="py-10 sm:py-12">
        <SectionEyebrow>Contents</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl md:text-4xl">
          Read the paper, section by section
        </h2>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {sections.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group flex items-baseline gap-4 py-5 transition hover:bg-muted/40 sm:gap-6 sm:py-6"
            >
              <span className="font-mono text-xs text-muted-foreground">{s.n}</span>
              <div className="flex-1">
                <div className="font-serif text-xl font-semibold text-ink group-hover:text-coral sm:text-2xl">
                  {s.title}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{s.desc}</div>
              </div>
              <span className="text-coral opacity-0 transition group-hover:opacity-100">→</span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
