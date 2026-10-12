import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageTitle, SectionEyebrow } from "@/components/PageShell";

export const Route = createFileRoute("/literature")({
  head: () => ({
    meta: [
      { title: "Literature Review — Just One More Scroll" },
      { name: "description", content: "Background on social media addiction, problematic smartphone use, procrastination, multitasking, and gender differences." },
      { property: "og:title", content: "Literature Review — Social Media Addiction & Academic Performance" },
      { property: "og:description", content: "Background on addiction-like social media use, sleep, multitasking, procrastination, and gender." },
    ],
  }),
  component: Literature,
});

const subs = [
  {
    eyebrow: "Behavioral addiction",
    title: "Social media addiction & problematic use",
    body: [
      "When social media use becomes hard to control and starts producing real harm — to mood, sleep, school, or relationships — researchers describe it as a behavioral addiction (Amirthalingam & Khera, 2024; Montag et al., 2024). It does not involve a substance, but it does involve strong urges, loss of control, and negative consequences.",
      "Six core symptoms recur across measures: salience, tolerance, mood modification, withdrawal, conflict, and relapse. The Bergen Social Media Addiction Scale (BSMAS) operationalizes these symptoms and has shown good reliability and validity in adolescents and young adults (Zarate et al., 2023).",
      "Shannon et al. (2022), reviewing 18 studies (N = 9,269), found low-to-moderate correlations between problematic social media use and depression (r = .273), anxiety (r = .348), and stress (r = .313). Anderson and Wood (2025) caution that high use ≠ addiction, and that the label should be reserved for cases with clear loss of control and harm.",
    ],
  },
  {
    eyebrow: "Phones, sleep, mood",
    title: "Problematic smartphone use, sleep, and emotional well-being",
    body: [
      "University students are among the heaviest smartphone users, frequently checking phones during class, lunch, and study (Amez & Baert, 2020). Heavy or dysregulated use has been linked to attention issues, anxiety, poor time management, and disrupted sleep (Amirthalingam & Khera, 2024; Arness & Ollis, 2022).",
      "Demirci et al. (2015) found that more severe smartphone use was associated with worse sleep and higher depression and anxiety. Reviews by Elhai et al. (2017) and Keles et al. (2020) report small-to-moderate associations between problematic phone/social media use and depression, anxiety, and psychological distress.",
      "Kim et al. (2016) showed in an ERP study that push notifications disrupt attention — especially for heavy smartphone users — suggesting a mechanism by which constant alerts feed compulsive checking.",
    ],
  },
  {
    eyebrow: "Self-regulation",
    title: "Social media addiction & academic procrastination",
    body: [
      "Academic procrastination is the voluntary delay of important academic tasks even when the student knows the delay will hurt (McCloskey, 2011, 2023). It reflects a self-regulation problem: difficulty resisting tempting alternatives, managing negative emotions, and sustaining goal-directed effort.",
      "Empirically, problematic technology use and procrastination travel together. Przepiorka, Blachnio, and Diaz-Morales (2016) found problematic Facebook use was positively associated with procrastination among university students. Rozgonjuk and Elhai (2019) reported that problematic smartphone use predicted procrastination even after controlling for self-control and anxiety.",
    ],
  },
  {
    eyebrow: "Multitasking & grades",
    title: "Social media use, academic performance & task outcomes",
    body: [
      "Modern phones offer constant low-effort alternatives to academic work. Heavy use has been linked to lower self-reported GPA (Lepp, Barkley, & Karpinski, 2014), fewer study hours and lower GPAs among Facebook users (Kirschner & Karpinski, 2010), and small-to-moderate negative effects on GPA, study hours, and exam scores in reviews (Amez & Baert, 2020).",
      "Junco and Cotten (2012) found that Facebook use and texting during class and study were associated with lower GPAs. Rosen, Carrier, and Cheever (2013) observed students studying for 15 minutes with phone access — frequent checkers studied longer and scored lower on a follow-up test. Frequent notifications can increase inattention and disrupt cognitive control (Kim et al., 2016; Kushlev et al., 2016).",
      "Crucially, Shannon et al. (2022) argue that addiction-like symptoms may matter more than raw usage time. This study uses BSMAS scores to test that idea against procrastination, anxiety, and self-reported academic outcomes.",
    ],
  },
  {
    eyebrow: "Gender",
    title: "Gender differences in problematic social media use",
    body: [
      "Overall prevalence of problematic phone use is often similar between male and female students, but the correlates can diverge. Chen et al. (2017), studying ~1,400 Chinese medical undergraduates, found nearly identical rates of smartphone addiction (males 30.3%, females 29.3%) — but for males the predictors were gaming, anxiety, and poor sleep, while for females they were multimedia/SNS use, depression, anxiety, and poor sleep.",
      "These divergent profiles motivated this study's tests of sex × BSMAS and sex × procrastination interactions on GPA and anxiety.",
    ],
  },
];

function Literature() {
  return (
    <PageShell>
      <PageTitle kicker="02 · Background & Review">
        What we already know about scrolling, school, and stress.
      </PageTitle>

      <div className="space-y-14 sm:space-y-20">
        {subs.map((s, i) => (
          <section key={s.title}>
            <SectionEyebrow>{`§ 2.${i + 1} · ${s.eyebrow}`}</SectionEyebrow>
            <h2 className="font-serif text-2xl font-semibold leading-tight text-ink sm:text-3xl md:text-4xl">
              {s.title}
            </h2>
            <div className="mt-6 space-y-5 text-[17px] leading-[1.75] text-foreground">
              {s.body.map((p, j) => (
                <p key={j}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
