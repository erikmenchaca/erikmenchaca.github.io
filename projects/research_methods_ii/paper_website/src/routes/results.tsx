import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle, SectionEyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/results")({
  head: () => ({
    meta: [
      { title: "Results — Just One More Scroll" },
      { name: "description", content: "Descriptive statistics, correlations, and regression results." },
      { property: "og:title", content: "Results — Social Media Addiction & Academic Performance" },
      { property: "og:description", content: "Procrastination predicted GPA; social media addiction predicted anxiety; no sex interactions." },
    ],
  }),
  component: Results,
});

const desc = [
  { v: "Age", f: "20.21 (1.53)", m: "20.67 (1.81)" },
  { v: "Cum. GPA", f: "3.49 (0.59)", m: "3.40 (0.48)" },
  { v: "APS-S total", f: "76.00 (14.27)", m: "73.15 (12.69)" },
  { v: "GAD-7 total", f: "11.16 (6.08)", m: "6.39 (4.81)" },
  { v: "BSMAS total", f: "16.42 (5.34)", m: "15.48 (4.59)" },
];

const correlations: { label: string; r: string; p: string; sig: 0 | 1 | 2 | 3 }[] = [
  { label: "APS-S × GPA", r: "−0.301", p: ".005", sig: 2 },
  { label: "APS-S × GAD-7", r: "0.326", p: ".003", sig: 2 },
  { label: "APS-S × BSMAS", r: "0.453", p: "< .001", sig: 3 },
  { label: "BSMAS × GAD-7", r: "0.326", p: ".003", sig: 2 },
  { label: "BSMAS × GPA", r: "−0.092", p: ".404", sig: 0 },
  { label: "GAD-7 × GPA", r: "−0.162", p: ".142", sig: 0 },
  { label: "Age × GPA", r: "0.043", p: ".700", sig: 0 },
];

const sigLabel = ["n.s.", "p < .05", "p < .01", "p < .001"] as const;
const sigClass = [
  "bg-muted text-muted-foreground",
  "bg-sage/15 text-sage",
  "bg-coral/15 text-coral",
  "bg-coral text-paper",
];

function Results() {
  return (
    <PageShell>
      <PageTitle kicker="04 · Results">What the data showed.</PageTitle>

      {/* Descriptive */}
      <section className="mb-20">
        <SectionEyebrow>Table 1 · Descriptive Statistics</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">By sex</h2>
        <div className="mt-6 -mx-4 overflow-x-auto border-y border-border bg-paper sm:mx-0 sm:rounded-xl sm:border">
          <table className="w-full min-w-[480px] text-sm">
            <thead className="border-b border-border bg-muted/40">
              <tr className="text-left">
                <th className="px-4 py-3 font-medium text-muted-foreground sm:px-5">Variable</th>
                <th className="px-4 py-3 font-medium text-muted-foreground sm:px-5">Female · M (SD)</th>
                <th className="px-4 py-3 font-medium text-muted-foreground sm:px-5">Male · M (SD)</th>
              </tr>
            </thead>
            <tbody>
              {desc.map((row) => (
                <tr key={row.v} className="border-b border-border last:border-b-0">
                  <td className="px-4 py-3 font-serif font-medium text-ink sm:px-5">{row.v}</td>
                  <td className="px-4 py-3 font-mono text-foreground sm:px-5">{row.f}</td>
                  <td className="px-4 py-3 font-mono text-foreground sm:px-5">{row.m}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Female and male students had similar ages and cumulative GPAs. Female students reported
          notably higher GAD-7 anxiety. Sex differences in BSMAS and APS-S were small.
        </p>
      </section>

      {/* Correlations */}
      <section className="mb-20">
        <SectionEyebrow>Table 2 · Pearson correlations</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Where the variables actually move together
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {correlations.map((c) => (
            <div key={c.label} className="bg-paper p-5">
              <div className="flex items-baseline justify-between gap-3">
                <div className="font-serif text-base font-medium text-ink">{c.label}</div>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-[11px] font-medium ${sigClass[c.sig]}`}
                >
                  {sigLabel[c.sig]}
                </span>
              </div>
              <div className="mt-3 flex items-baseline gap-4">
                <div className="font-mono text-2xl font-semibold text-ink">r = {c.r}</div>
                <div className="font-mono text-xs text-muted-foreground">p = {c.p}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Regressions */}
      <section className="mb-20">
        <SectionEyebrow>Multiple linear regression</SectionEyebrow>
        <h2 className="font-serif text-2xl font-semibold text-ink sm:text-3xl">
          Models predicting GPA and anxiety
        </h2>

        <div className="mt-8 space-y-6">
          <RegressionCard
            title="GPA from APS-S, sex, and APS-S × Sex"
            equation="GPA = 4.65 − 0.015·APS − 0.55·G + 0.006·(APS·G)"
            takeaway="Procrastination significantly predicted lower GPA. The sex interaction was not significant."
          />
          <RegressionCard
            title="GPA from BSMAS, sex, and BSMAS × Sex"
            equation="GPA = 3.697 − 0.013·BSMAS − 0.162·G + 0.004·(BSMAS·G)"
            takeaway="BSMAS did not uniquely predict GPA. No significant sex interaction."
          />
          <RegressionCard
            title="Anxiety (GAD-7) from BSMAS, sex, and BSMAS × Sex"
            equation="GAD-7 = 7.15 + 0.24·BSMAS − 4.62·G − 0.01·(BSMAS·G)"
            takeaway="Higher BSMAS predicted higher anxiety. Female students reported higher anxiety overall. No significant interaction."
          />
        </div>
      </section>

      <div className="rounded-xl border border-coral/40 bg-coral/5 p-6">
        <SectionEyebrow>Bottom line</SectionEyebrow>
        <p className="font-serif text-xl leading-snug text-ink">
          Procrastination tracked GPA. Social media addiction tracked anxiety. No sex interactions
          reached significance.
        </p>
      </div>
    </PageShell>
  );
}

function RegressionCard({
  title,
  equation,
  takeaway,
}: {
  title: string;
  equation: string;
  takeaway: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-paper p-6">
      <div className="font-serif text-lg font-semibold text-ink">{title}</div>
      <pre className="mt-4 overflow-x-auto rounded-lg bg-ink p-4 font-mono text-[13px] leading-relaxed text-paper">
        {equation}
      </pre>
      <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">{takeaway}</p>
    </div>
  );
}
