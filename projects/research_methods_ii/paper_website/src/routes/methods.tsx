import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle, SectionEyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/methods")({
  head: () => ({
    meta: [
      { title: "Methods — Just One More Scroll" },
      { name: "description", content: "Sample, measures (BSMAS, APS-S, GAD-7), and analysis plan." },
      { property: "og:title", content: "Methods — Social Media Addiction & Academic Performance" },
      { property: "og:description", content: "84 undergraduates, validated scales, Pearson correlations and multiple linear regressions." },
    ],
  }),
  component: Methods,
});

const measures = [
  {
    code: "BSMAS",
    name: "Bergen Social Media Addiction Scale",
    desc: "Six items measuring addiction-like social media use across the symptoms of salience, tolerance, mood modification, withdrawal, conflict, and relapse.",
    range: "Score range: 6–30",
  },
  {
    code: "APS-S",
    name: "Academic Procrastination Scale — Short Form",
    desc: "Self-report measure of how often students delay academic tasks despite knowing the delay will be costly.",
    range: "Higher score = more procrastination",
  },
  {
    code: "GAD-7",
    name: "Generalized Anxiety Disorder — 7",
    desc: "Seven-item screen for generalized anxiety symptoms in the past two weeks.",
    range: "Score range: 0–21",
  },
  {
    code: "GPA",
    name: "Self-reported academic performance",
    desc: "Cumulative GPA range, satisfaction with recent progress, perceived delays in coursework, and on-time submission frequency.",
    range: "Brief custom items",
  },
];

function Methods() {
  return (
    <PageShell>
      <PageTitle kicker="03 · Methods">How the study was run.</PageTitle>

      <section className="mb-16">
        <SectionEyebrow>Participants</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Sample</h2>
        <div className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-4">
          {[
            { v: "84", l: "Undergraduates" },
            { v: "38", l: "Female" },
            { v: "46", l: "Male" },
            { v: "~20.5", l: "Mean age (yrs)" },
          ].map((s) => (
            <div key={s.l} className="bg-paper p-6">
              <div className="font-serif text-2xl font-semibold text-ink sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.l}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-[17px] leading-relaxed text-foreground">
          Traditional-age undergraduate students who reported regular social media use and
          identified as male or female. Participants completed all measures in a single session.
        </p>
      </section>

      <section className="mb-16">
        <SectionEyebrow>Instruments</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">Measures</h2>
        <div className="mt-8 space-y-4">
          {measures.map((m) => (
            <div
              key={m.code}
              className="grid grid-cols-1 gap-4 rounded-xl border border-border bg-paper p-6 md:grid-cols-[120px_1fr]"
            >
              <div>
                <div className="font-mono text-sm font-semibold text-coral">{m.code}</div>
                <div className="mt-1 text-xs text-muted-foreground">{m.range}</div>
              </div>
              <div>
                <div className="font-serif text-lg font-semibold text-ink">{m.name}</div>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <SectionEyebrow>Analysis plan</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">How the data were analyzed</h2>
        <ol className="mt-6 space-y-4">
          {[
            "Descriptive statistics (M, SD, SEM, median, 95% CI) computed separately by sex.",
            "Pearson product-moment correlations among all key continuous variables (GPA, age, APS-S, GAD-7, BSMAS).",
            "Multiple linear regressions predicting GPA and GAD-7 from BSMAS, APS-S, sex, and their interactions.",
            "Significance evaluated at α = .05; effect sizes reported with each model.",
          ].map((step, i) => (
            <li key={i} className="flex gap-4 rounded-lg border-l-2 border-coral bg-paper p-4">
              <span className="font-mono text-sm text-coral">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[16px] leading-relaxed text-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </section>
    </PageShell>
  );
}
