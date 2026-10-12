import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle, SectionEyebrow } from "@/components/PageShell";
import afitchImg from "@/assets/afitch.jpg";
import rainImg from "@/assets/rain.jpg";

export const Route = createFileRoute("/acknowledgements")({
  head: () => ({
    meta: [
      { title: "Acknowledgements — Just One More Scroll" },
      { name: "description", content: "Gratitude to the mentors, family, and supporters behind this research." },
      { property: "og:title", content: "Acknowledgements — Erik Menchaca" },
      { property: "og:description", content: "Thank you to Dr. Fitch, Dr. Bosworth, Bonnie, Song Hoa Choi, and Mom." },
    ],
  }),
  component: Ack,
});

const people = [
  {
    name: "Dr. Allison \"Ali\" Fitch, Ph.D.",
    role: "Course instructor · PSYC-251",
    note: "For the office hours, the patience, the cheerfulness in class, and the careful guidance through hypotheses, multiple linear regression, ANOVA, and every paper draft along the way.",
    image: afitchImg,
  },
  {
    name: "Dr. Rain G. Bosworth, Ph.D.",
    role: "Mentor · since Spring 2024",
    note: "For weekly mentorship across PSYC 250 and 251, for the Gallaudet REU recommendation, and for trusting my goals and consistently encouraging me to build confidence as a researcher.",
    image: rainImg,
  },
  {
    name: "Bonnie",
    role: "Speech-language pathologist · 6 years",
    note: "For being more than a writing coach — for the check-ins on mental health, the encouragement during difficult moments, and the steady empathy that made the long stretches of this work possible.",
  },
  {
    name: "Song Hoa Choi",
    role: "Statistics instructor",
    note: "For clear teaching and one-on-one support that turned statistics from confusing into a tool I can actually use to draw meaningful conclusions.",
  },
  {
    name: "Mom",
    role: "The foundation",
    note: "For the quiet sacrifices, the perseverance, and for speaking the language of hard work and resilience even when she didn't speak the language of regression coefficients. This project is built on what she has lived and passed on.",
  },
];

function Ack() {
  return (
    <PageShell>
      <PageTitle kicker="06 · Acknowledgements">The people behind the paper.</PageTitle>

      <p className="max-w-2xl font-serif text-xl leading-relaxed text-muted-foreground">
        No paper is written alone. This one is built on years of mentorship, late-night check-ins,
        statistics tutoring, and a mother's quiet, daily perseverance.
      </p>

      <div className="mt-12 divide-y divide-border overflow-hidden rounded-xl border border-border bg-paper">
        {people.map((p) => (
          <article key={p.name} className="bg-paper p-7 md:p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
              {"image" in p && p.image ? (
                <img
                  src={p.image as string}
                  alt={p.name}
                  className="h-20 w-20 shrink-0 rounded-full object-cover ring-1 ring-border md:h-24 md:w-24"
                  loading="lazy"
                />
              ) : null}
              <div className="flex-1">
                <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="font-serif text-2xl font-semibold text-ink">{p.name}</h2>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-coral">{p.role}</div>
                </div>
                <p className="mt-3 text-[16px] leading-relaxed text-foreground">{p.note}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 rounded-xl border-2 border-dashed border-coral/40 bg-paper p-8 text-center">
        <SectionEyebrow>Dedication</SectionEyebrow>
        <p className="font-serif text-2xl italic leading-snug text-ink">
          "Ali and Rain — you are the sun."
        </p>
        <p className="mt-4 font-serif text-lg leading-snug text-muted-foreground">
          And to Mom — everything I have achieved, and everything I hope to become, is rooted in
          your love.
        </p>
      </section>
    </PageShell>
  );
}
