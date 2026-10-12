import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle, SectionEyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/discussion")({
  head: () => ({
    meta: [
      { title: "Discussion — Just One More Scroll" },
      { name: "description", content: "What the findings mean for students, advisors, and future research." },
      { property: "og:title", content: "Discussion — Social Media Addiction & Academic Performance" },
      { property: "og:description", content: "Procrastination — not addiction itself — most directly predicts GPA. Implications and limits." },
    ],
  }),
  component: Discussion,
});

function Discussion() {
  return (
    <PageShell>
      <PageTitle kicker="05 · Discussion">What it means.</PageTitle>

      <article className="prose-paper">
        <p className="font-serif text-xl leading-relaxed text-ink">
          The strongest, clearest story in these data is not that social media is destroying GPAs —
          it is that <strong>procrastination is</strong>, and that social media addiction sits
          alongside procrastination as part of a broader self-regulation picture that is more
          tightly bound to anxiety than to grades.
        </p>

        <h2>Procrastination is the more direct predictor of GPA</h2>
        <p>
          APS-S scores correlated negatively with cumulative GPA (r = −.301, p = .005) and
          remained a significant predictor in the regression model. BSMAS, by contrast, was not
          significantly related to GPA at the bivariate level (r = −.092) and did not uniquely
          predict GPA in regressions. This pattern is consistent with the view that{" "}
          <strong>self-regulation failures — not screen time per se — drive academic costs</strong>
          {" "}(Rozgonjuk & Elhai, 2019; Shannon et al., 2022).
        </p>

        <h2>Social media addiction is more about anxiety than grades</h2>
        <p>
          BSMAS correlated positively with GAD-7 (r = .326, p = .003) and with APS-S (r = .453, p
          &lt; .001). This aligns with prior work linking problematic phone and social media use to
          depression, anxiety, and distress (Demirci et al., 2015; Elhai et al., 2017; Keles et
          al., 2020). Mechanistically, this fits a picture in which addiction-like use, push
          notifications, and compulsive checking erode attention and emotional regulation (Kim et
          al., 2016) more reliably than they erode any specific exam score.
        </p>

        <h2>No significant sex interactions</h2>
        <p>
          Female students reported higher anxiety on the GAD-7 (M = 11.16 vs. 6.39), echoing
          general epidemiological patterns. But none of the BSMAS × sex or APS-S × sex
          interactions reached significance for GPA or anxiety. The associations between
          addiction-like social media use, procrastination, and outcomes were{" "}
          <strong>broadly similar across male and female students</strong> in this sample. This
          contrasts with Chen et al.'s (2017) finding of different predictors by gender, and may
          reflect the smaller sample, the U.S. undergraduate context, or the narrower range of
          predictors used here.
        </p>

        <h2>Limitations</h2>
        <ul className="mt-4 space-y-3 pl-5 list-disc text-[16px] leading-relaxed text-foreground">
          <li>
            <strong>Self-report and recall bias.</strong> All measures, including GPA, were
            self-reported.
          </li>
          <li>
            <strong>Cross-sectional design.</strong> The data cannot establish whether
            procrastination causes lower GPA, or whether struggling academically encourages
            procrastination.
          </li>
          <li>
            <strong>Sample size and composition.</strong> N = 84 limits power to detect small
            interactions; the binary male/female grouping excluded other gender identities.
          </li>
          <li>
            <strong>No behavioral data.</strong> Actual screen time, app use, and notification
            volume were not measured.
          </li>
        </ul>

        <h2>Implications</h2>
        <p>
          For students and advisors, the practical implication is that{" "}
          <span className="bg-highlight/60 px-1 text-ink">
            interventions targeting procrastination and self-regulation
          </span>{" "}
          may do more for GPA than blanket social media restrictions. For mental health, however,
          addressing addiction-like social media use is well-justified given its consistent link
          with anxiety in this and prior work. Future studies should pair self-report scales with
          passive sensing of phone use, span longer time windows, and include broader gender
          identities to test these patterns more rigorously.
        </p>
      </article>
    </PageShell>
  );
}
