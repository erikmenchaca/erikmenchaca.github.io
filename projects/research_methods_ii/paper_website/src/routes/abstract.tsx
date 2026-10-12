import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle } from "@/components/PageShell";

export const Route = createFileRoute("/abstract")({
  head: () => ({
    meta: [
      { title: "Abstract — Just One More Scroll" },
      {
        name: "description",
        content:
          "Abstract of Erik Menchaca's literature review on social media addiction, procrastination, anxiety, and GPA.",
      },
      { property: "og:title", content: "Abstract — Social Media Addiction & Academic Performance" },
      { property: "og:description", content: "Procrastination predicted GPA more consistently than social media addiction in 84 college students." },
    ],
  }),
  component: Abstract,
});

function Abstract() {
  return (
    <PageShell>
      <PageTitle kicker="01 · Abstract">A study in 84 students.</PageTitle>

      <article className="prose-paper">
        <p className="font-serif text-xl leading-relaxed text-ink">
          College students frequently use social media, and problematic use has been linked to
          poorer academic performance, higher anxiety, and lower GPA. Less is known about how
          social media addiction relates to academic procrastination, anxiety, and GPA, or whether
          these patterns differ by sex.
        </p>

        <h2>What we did</h2>
        <p>
          Eighty-four traditional-age undergraduates who reported regular social media use and
          identified as male or female completed the <strong>Academic Procrastination Scale–Short
          Form (APS-S)</strong>, the <strong>Bergen Social Media Addiction Scale (BSMAS)</strong>,
          the <strong>Generalized Anxiety Disorder-7 (GAD-7)</strong> scale, and brief academic
          performance questions. Pearson correlations assessed bivariate relationships, and
          multiple linear regressions tested main effects and sex interactions.
        </p>

        <h2>What we found</h2>
        <p>
          Procrastination was positively associated with both anxiety and social media addiction,
          and was modestly but significantly negatively associated with GPA. Social media
          addiction was positively related to anxiety and procrastination, but was{" "}
          <strong>not significantly related to GPA</strong> and did not uniquely predict GPA or
          anxiety in regression models. <strong>No sex interactions were significant.</strong>
        </p>

        <h2>What it means</h2>
        <p>
          Procrastination was more consistently related to GPA than social media addiction. Social
          media addiction was more clearly associated with anxiety than with grades — highlighting
          academic procrastination as a stronger predictor of GPA than social media addiction
          itself.
        </p>

        <div className="mt-12 rounded-xl border border-border bg-paper p-6">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Keywords
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "social media addiction",
              "academic procrastination",
              "anxiety",
              "GPA",
              "college students",
              "BSMAS",
              "APS-S",
              "GAD-7",
            ].map((k) => (
              <span
                key={k}
                className="rounded-full border border-border bg-muted px-3 py-1 text-xs font-medium text-ink"
              >
                {k}
              </span>
            ))}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
