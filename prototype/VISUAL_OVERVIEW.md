# 📊 Visual Overview - Cooply Testing Package

## The Big Picture

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                    YOUR COMPLETE SYSTEM                         │
│                                                                 │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    │
│  │   PROTOTYPE  │ ─> │   RESEARCH   │ ─> │   TESTING    │    │
│  │              │    │   QUESTIONS  │    │   PROTOCOL   │    │
│  └──────────────┘    └──────────────┘    └──────────────┘    │
│         │                     │                    │           │
│         │                     │                    │           │
│         v                     v                    v           │
│  8 Functional Pages    5 Clear Questions    5-8 Participants  │
│  4 AI Agents          Design Features       Success Criteria  │
│  Smart AI Chat        Validation Plan       Data Collection   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Research Question → Feature → Test Mapping

```
┌────────────────────────────────────────────────────────────────────────┐
│                                                                        │
│  Q1: Can users find jobs faster?                                      │
│  ├─ Feature: Time-saved indicator ("4.5 hrs saved")                   │
│  ├─ Feature: Quick Apply buttons                                      │
│  ├─ Feature: Match scores (95%, 92%)                                  │
│  └─ Test: Measure time to find 3 jobs (target: < 5 min)              │
│                                                                        │
│  Q2: Do users understand AI agents?                                   │
│  ├─ Feature: Agent descriptions in sidebar                            │
│  ├─ Feature: Color coding (purple, blue, green, orange)              │
│  ├─ Feature: Hover tooltips                                           │
│  └─ Test: Ask participants to explain each agent (target: 90%)       │
│                                                                        │
│  Q3: Is navigation easy?                                              │
│  ├─ Feature: Persistent sidebar (always visible)                      │
│  ├─ Feature: Active state highlighting (purple background)            │
│  ├─ Feature: Badge notifications (12 applications)                    │
│  └─ Test: SUS score + task completion (target: SUS > 75)             │
│                                                                        │
│  Q4: Do users trust AI?                                               │
│  ├─ Feature: "Why this match?" explanations                           │
│  ├─ Feature: Specific data ("18 positions in SF")                     │
│  ├─ Feature: Match score badges with reasoning                        │
│  └─ Test: Trust rating 1-10 (target: > 7/10)                         │
│                                                                        │
│  Q5: How do users feel?                                               │
│  ├─ Feature: Success celebration banners                              │
│  ├─ Feature: Progress indicators                                      │
│  ├─ Feature: Clear next steps                                         │
│  └─ Test: Emoji scale + confidence rating (target: 60% confident)    │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Testing Session Flow

```
┌───────────────────────────────────────────────────────────────┐
│                    45-MINUTE SESSION                          │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│  [0-5 min]   Introduction & Consent                          │
│              • Welcome participant                            │
│              • Get baseline data                             │
│              • Start recording                               │
│                                                               │
│  [5-8 min]   Prototype Introduction                          │
│              • Show interface                                │
│              • Give persona (Alex Chen)                      │
│              • Start think-aloud                             │
│                                                               │
│  [8-15 min]  TASK 1: Job Discovery                           │
│              → Tests: Q1 (Speed), Q4 (Trust)                 │
│              "Find and save 3 UX jobs in SF"                 │
│                                                               │
│  [15-20 min] TASK 2: Understanding Agents                    │
│              → Tests: Q2 (Understanding)                      │
│              "Use Interview Coach to prepare"                │
│                                                               │
│  [20-25 min] TASK 3: Application Tracking                    │
│              → Tests: Q3 (Navigation), Q5 (Emotion)          │
│              "Check Google application status"               │
│                                                               │
│  [25-32 min] TASK 4: AI Chat                                 │
│              → Tests: Q1 (Speed), Q4 (Trust)                 │
│              "Ask AI about jobs in other cities"             │
│                                                               │
│  [32-37 min] TASK 5: Free Exploration                        │
│              → Tests: All questions                          │
│              "Explore on your own"                           │
│                                                               │
│  [37-42 min] Discussion                                      │
│              • Emoji scale                                   │
│              • Open-ended questions                          │
│              • Overall impressions                           │
│                                                               │
│  [42-47 min] Questionnaires                                  │
│              • SUS (10 questions)                            │
│              • Custom research Qs (12 questions)             │
│                                                               │
│  [47-50 min] Wrap-up & Thank You                             │
│              • Compensate participant                        │
│              • Stop recording                                │
│              • Save files                                    │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

## File Organization Map

```
YOUR DOCUMENTATION
├── 📖 START HERE FIRST
│   ├── START_HERE.md ⭐⭐⭐ (Read this first!)
│   └── TESTING_READY.md (Overview of everything)
│
├── 🧪 TESTING ESSENTIALS
│   ├── FACILITATOR_GUIDE.md ⭐⭐ (Your session bible)
│   ├── TESTING_MATERIALS.md ⭐⭐ (Print these)
│   ├── PARTICIPANT_INSTRUCTIONS.md (Optional handout)
│   └── RESEARCH_QUICK_REF.md ⭐ (Cheat sheet)
│
├── 🎓 RESEARCH DOCUMENTATION
│   ├── RESEARCH_VALIDATION.md (Complete protocol)
│   ├── RESEARCH_IMPROVEMENTS.md (Design rationale)
│   └── FILE_GUIDE.md (File organization)
│
├── 📱 DEMO & PRESENTATION
│   ├── QUICK_START.md (Demo script)
│   ├── PROTOTYPE_GUIDE.md (Feature docs)
│   ├── NAVIGATION_GUIDE.md (Sidebar details)
│   └── PRESENTATION_GUIDE.md (How to present)
│
└── 💻 TECHNICAL (Don't need to read)
    ├── App.tsx
    ├── components/
    └── styles/

WHAT TO PRINT (from TESTING_MATERIALS.md):
├── Task Cards (5 per participant)
├── SUS Questionnaire (1 per participant)
├── Custom Questions (1 per participant)
├── Data Sheet (1 per participant)
├── Emoji Scale (1 copy, laminate)
└── Checklist (1 copy, post on wall)

Total: ~40-50 pages for 5 participants
```

---

## Success Criteria Dashboard

```
┌──────────────────────────────────────────────────────────────────┐
│              TRACK THESE METRICS AFTER EACH SESSION              │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Q1: SPEED & EFFICIENCY                                          │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Time to find 3 jobs:    [ ] < 5 min                        │ │
│  │ Noticed time-saved:     [ ] Yes  [ ] No                    │ │
│  │ Faster than traditional: 1  2  3  4  5  6  7 (5+ = pass)  │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  Q2: UNDERSTANDING                                               │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Explains Smart Match:        [ ] Correct  [ ] Incorrect    │ │
│  │ Explains App Tracker:        [ ] Correct  [ ] Incorrect    │ │
│  │ Explains Interview Coach:    [ ] Correct  [ ] Incorrect    │ │
│  │ Explains Insights:           [ ] Correct  [ ] Incorrect    │ │
│  │ Accuracy: ____% (target: 90%+)                             │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  Q3: NAVIGATION                                                  │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ SUS Score: _____ (target: > 75)                            │ │
│  │ Tasks completed unaided: ____/5 (target: 5/5)              │ │
│  │ Critical errors: _____ (target: 0)                         │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  Q4: TRUST                                                       │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Trust rating:  1  2  3  4  5  6  7  8  9  10 (7+ = pass)  │ │
│  │ Read "Why match?": [ ] Yes  [ ] No                         │ │
│  │ Would follow AI:   [ ] Yes  [ ] No  [ ] Maybe              │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
│  Q5: EMOTION                                                     │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │ Post-task feeling:                                         │ │
│  │    [ ] Confused  [ ] Neutral  [ ] Confident  [ ] Very Conf │ │
│  │ Confidence (1-10): Pre: ___ Post: ___ (Change: +___)      │ │
│  │ Noticed success elements: [ ] Yes  [ ] No                  │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

---

## Participant Journey Map

```
BEFORE SESSION               DURING SESSION                AFTER SESSION
     │                            │                             │
     │                            │                             │
     ▼                            ▼                             ▼
┌─────────┐                ┌──────────┐                 ┌──────────┐
│ Recruit │                │  Arrive  │                 │ Depart   │
│ 5-8     │                │          │                 │ with     │
│ people  │                │ Welcome  │                 │ gift     │
└─────────┘                └──────────┘                 └──────────┘
     │                            │                             │
     │                            │                             │
     ▼                            ▼                             ▼
┌─────────┐                ┌──────────┐                 ┌──────────┐
│Schedule │                │ Introduce│                 │ You:     │
│sessions │                │ prototype│                 │ Analyze  │
│         │                │          │                 │ data     │
└─────────┘                └──────────┘                 └──────────┘
     │                            │                             │
     │                            │                             │
     ▼                            ▼                             ▼
┌─────────┐                ┌──────────┐                 ┌──────────┐
│ Prepare │                │ 5 Tasks  │                 │ Extract  │
│ space & │                │ (25 min) │                 │ quotes   │
│ materials│               │          │                 │ & themes │
└─────────┘                └──────────┘                 └──────────┘
     │                            │                             │
     │                            │                             │
     ▼                            ▼                             ▼
┌─────────┐                ┌──────────┐                 ┌──────────┐
│ Test    │                │Discussion│                 │ Write    │
│equipment│                │ & emoji  │                 │ findings │
│         │                │ scale    │                 │          │
└─────────┘                └──────────┘                 └──────────┘
     │                            │                             │
     │                            │                             │
     ▼                            ▼                             ▼
   Ready!                   Questionnaires                  Present!
```

---

## Data Flow Diagram

```
┌──────────────────────────────────────────────────────────────┐
│                    DATA COLLECTION                           │
└──────────────────────────────────────────────────────────────┘
                             │
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
   ┌─────────┐         ┌─────────┐         ┌─────────┐
   │  Video  │         │ Written │         │  Audio  │
   │Recording│         │  Notes  │         │Recording│
   └─────────┘         └─────────┘         └─────────┘
        │                    │                    │
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
              ┌──────────────────────────┐
              │   ORGANIZE BY SESSION    │
              │   P1, P2, P3, P4, P5    │
              └──────────────────────────┘
                             │
                             ▼
        ┌────────────────────┼────────────────────┐
        │                    │                    │
        ▼                    ▼                    ▼
   ┌─────────┐         ┌─────────┐         ┌─────────┐
   │Quantita-│         │Qualita- │         │Behavior │
   │  tive   │         │  tive   │         │  Data   │
   └─────────┘         └─────────┘         └─────────┘
   • SUS scores        • Quotes            • Time taken
   • Ratings 1-10      • Observations      • Clicks
   • Task completion   • Emotions          • Errors
   • % Accuracy        • Suggestions       • Path taken
        │                    │                    │
        └────────────────────┼────────────────────┘
                             │
                             ▼
              ┌──────────────────────────┐
              │    ANALYZE AGAINST       │
              │   SUCCESS CRITERIA       │
              └──────────────────────────┘
                             │
                             ▼
              ┌──────────────────────────┐
              │   ANSWER RESEARCH        │
              │      QUESTIONS           │
              └──────────────────────────┘
                             │
                             ▼
                      FINAL REPORT!
```

---

## Prototype Feature Locations

```
┌─────────────────────────────────────────────────────────────┐
│                    WHERE TO FIND FEATURES                   │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  SIDEBAR (Left Side - Always Visible)                      │
│  ├─ Agent descriptions (NEW!)                              │
│  ├─ Color coding: Purple, Blue, Green, Orange              │
│  ├─ Active page highlighting                               │
│  └─ Badge notifications ("12" on Applications)             │
│                                                             │
│  DASHBOARD (Landing Page)                                  │
│  ├─ Time-saved indicator (NEW!) "4.5 hrs this week"       │
│  ├─ AI agent selector                                      │
│  ├─ Job recommendations                                    │
│  └─ "Why this match?" green boxes (NEW!)                   │
│                                                             │
│  JOB SEARCH (Search Icon)                                  │
│  ├─ Smart search bar                                       │
│  ├─ Match scores (95%, 92%, 89%)                          │
│  ├─ Filter options                                         │
│  └─ Quick Apply buttons (NEW!)                             │
│                                                             │
│  APPLICATIONS (Briefcase Icon)                             │
│  ├─ Success celebration banner (NEW!)                      │
│  ├─ Visual pipeline (Applied → Interview → Offer)         │
│  ├─ Status badges                                          │
│  └─ AI insights panel                                      │
│                                                             │
│  INTERVIEW COACH (Message Icon)                            │
│  ├─ Practice questions                                     │
│  ├─ Tips & strategies                                      │
│  └─ Personalized feedback                                  │
│                                                             │
│  INSIGHTS (Chart Icon)                                     │
│  ├─ Salary trends                                          │
│  ├─ Market analytics                                       │
│  └─ Personalized recommendations                           │
│                                                             │
│  ALL PAGES                                                 │
│  └─ Purple AI chat button (bottom right)                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Your Timeline (Suggested)

```
┌──────────────────────────────────────────────────────────────┐
│                    2-WEEK TIMELINE                           │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  WEEK 1                                                      │
│  ├─ Day 1-2: Read documentation (3-4 hours)                 │
│  │           • START_HERE.md                                │
│  │           • FACILITATOR_GUIDE.md                         │
│  │           • TESTING_MATERIALS.md                         │
│  │                                                           │
│  ├─ Day 3-4: Prepare materials (2-3 hours)                  │
│  │           • Print all materials                          │
│  │           • Set up recording equipment                   │
│  │           • Test prototype                               │
│  │                                                           │
│  └─ Day 5-7: Recruit & schedule (ongoing)                   │
│              • Post recruitment messages                     │
│              • Schedule 5-8 participants                     │
│              • Confirm attendance                            │
│                                                              │
│  WEEK 2                                                      │
│  ├─ Day 1: Practice (2 hours)                               │
│  │         • Run mock session with friend                   │
│  │         • Time yourself                                  │
│  │         • Refine approach                                │
│  │                                                           │
│  ├─ Day 2-6: Testing sessions (5 days × 1 hour each)       │
│  │           • Run 1 session per day                        │
│  │           • Debrief after each                           │
│  │           • Organize data immediately                    │
│  │                                                           │
│  └─ Day 7: Initial analysis (3-4 hours)                     │
│            • Calculate scores                                │
│            • Extract quotes                                  │
│            • Identify patterns                               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Print This Page!

```
╔════════════════════════════════════════════════════════════╗
║                   QUICK REFERENCE CARD                     ║
║                   (Cut out and laminate)                   ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  BEFORE PARTICIPANT:                                       ║
║  □ Prototype loaded     □ Recording tested                ║
║  □ Materials ready      □ Water for participant           ║
║                                                            ║
║  5 TASKS:                                                  ║
║  1. Find 3 jobs (Q1, Q4)                                  ║
║  2. Use Interview Coach (Q2)                              ║
║  3. Check application (Q3, Q5)                            ║
║  4. Ask AI about cities (Q1, Q4)                          ║
║  5. Free exploration (All)                                ║
║                                                            ║
║  SUCCESS TARGETS:                                          ║
║  Q1: < 5 min, 70%+ notice time-saved                      ║
║  Q2: 90%+ explain correctly                               ║
║  Q3: SUS > 75, 95%+ complete unaided                      ║
║  Q4: Trust 7+/10, 80%+ read "Why match?"                  ║
║  Q5: 60%+ confident, <10% confused                        ║
║                                                            ║
║  FACILITATOR MANTRA:                                       ║
║  • Stay neutral                                            ║
║  • Think aloud reminder                                    ║
║  • Wait before helping                                     ║
║  • Capture quotes                                          ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## Your Presentation Slide Outline

```
SLIDE 1: Title
├─ Cooply: AI-Powered Job Search
└─ Your Name | Gate Review 2

SLIDE 2: Research Questions
├─ Q1: Can users find jobs faster?
├─ Q2: Do users understand AI agents?
├─ Q3: Is navigation easy?
├─ Q4: Do users trust AI?
└─ Q5: How do users feel?

SLIDE 3: The Solution
├─ 4 specialized AI agents
├─ Each handles specific subtask
└─ [Show agent icons & descriptions]

SLIDE 4: Design → Research Mapping
├─ Table: Feature | Question | Test Method
└─ [Show RESEARCH_IMPROVEMENTS.md table]

SLIDE 5: Live Demo
├─ Dashboard: Time-saved, Why this match?
├─ Sidebar: Agent descriptions
└─ Applications: Success banner

SLIDE 6: Validation Plan
├─ 5-8 participants, 45 min each
├─ Think-aloud protocol
└─ SUS + custom questionnaires

SLIDE 7: Success Criteria
├─ Quantitative targets
└─ Qualitative indicators

SLIDE 8: Expected Outcomes
├─ What we'll learn
└─ How we'll iterate

SLIDE 9: Q&A
└─ Questions?
```

---

**You're Ready to Ace This!** 🚀

Use this visual overview as your quick reference guide.

---

*Visual Overview v1.0 | Last Updated: October 25, 2024*
