# File Structure Guide - Who Needs What? 📁

## For Participants (Testing Sessions)

### What Participants Need:
✅ **Access to the prototype** (running in browser)
✅ **PARTICIPANT_INSTRUCTIONS.md** (optional - can be verbal)

### What Participants DON'T Need:
❌ Any other documentation files
❌ Code files
❌ Research validation documents

**Keep it simple!** Participants only interact with the live prototype.

---

## For Facilitators (Running Tests)

### Essential Files:
1. **FACILITATOR_GUIDE.md** - Complete session protocol
2. **TESTING_MATERIALS.md** - All printable materials
3. **PARTICIPANT_INSTRUCTIONS.md** - Participant handout (optional)

### Reference Files:
4. **RESEARCH_VALIDATION.md** - Research questions & testing protocol
5. **RESEARCH_QUICK_REF.md** - Quick cheat sheet
6. **RESEARCH_IMPROVEMENTS.md** - Design rationale

---

## For Gate Review 2 Presentation

### Show/Reference These:
1. **README.md** - Project overview
2. **QUICK_START.md** - Demo walkthrough
3. **RESEARCH_VALIDATION.md** - Validation plan
4. **RESEARCH_IMPROVEMENTS.md** - Research-focused enhancements
5. **PROTOTYPE_GUIDE.md** - Complete feature documentation

---

## For Development/Coding

### Technical Documentation:
- **AI_SETUP.md** - AI integration
- **NAVIGATION_GUIDE.md** - Sidebar navigation
- **components/** folder - All React components
- **styles/globals.css** - Styling

---

## Complete File Inventory

### 📚 Documentation (Your Reference)

#### Research & Testing
- `RESEARCH_VALIDATION.md` - Complete testing protocol with success criteria
- `RESEARCH_IMPROVEMENTS.md` - Detailed explanation of research-focused features
- `RESEARCH_QUICK_REF.md` - Quick reference cheat sheet
- `FACILITATOR_GUIDE.md` - Session facilitation protocol
- `TESTING_MATERIALS.md` - All printable testing materials
- `PARTICIPANT_INSTRUCTIONS.md` - Participant handout

#### Prototype Documentation
- `README.md` - Project overview and setup
- `QUICK_START.md` - 60-second demo guide
- `PROTOTYPE_GUIDE.md` - Complete feature documentation
- `NAVIGATION_GUIDE.md` - Sidebar navigation details
- `AI_SETUP.md` - AI integration details
- `PRESENTATION_GUIDE.md` - How to present the prototype
- `FEATURES.md` - Feature list
- `WHATS_NEW.md` - Recent updates
- `SUMMARY.md` - Project summary
- `COMPLETE.md` - Completion notes

#### Other
- `Attributions.md` - Credits and attributions
- `guidelines/Guidelines.md` - Design principles

---

### 💻 Code Files (Technical)

#### Main Application
- `App.tsx` - Main application component
- `styles/globals.css` - Global styling

#### Page Components
- `components/DashboardPage.tsx` - Dashboard with AI agents
- `components/JobSearchPage.tsx` - Job search interface
- `components/ApplicationTrackerPage.tsx` - Application tracking
- `components/SavedJobsPage.tsx` - Saved jobs list
- `components/InterviewCoachPage.tsx` - Interview preparation
- `components/InsightAgent.tsx` - Analytics and insights
- `components/ProfilePage.tsx` - User profile
- `components/SettingsPage.tsx` - Settings

#### UI Components
- `components/Sidebar.tsx` - Navigation sidebar
- `components/Header.tsx` - Page header
- `components/AIButton.tsx` - AI chat button
- `components/AgentSelector.tsx` - Agent selection UI
- `components/JobCard.tsx` - Job card component
- `components/JobDetailPage.tsx` - Job details view
- `components/JobTable.tsx` - Job listings table
- `components/JobSourceCard.tsx` - Job source cards
- `components/SearchWithAutocomplete.tsx` - Search component

#### Shadcn UI Components (35 components in `components/ui/`)
- All reusable UI components (buttons, cards, dialogs, etc.)

#### Services
- `lib/ai-service.ts` - AI interaction service

---

## What to Print for Testing

### Print Before Testing Sessions:

From **TESTING_MATERIALS.md**:
- [ ] Task Scenario Cards (5 cards per session)
- [ ] Emoji Rating Scale (1 per session, or laminate 1 copy)
- [ ] SUS Questionnaire (1 per participant)
- [ ] Custom Research Questions (1 per participant)
- [ ] Data Recording Sheet (1 per participant)
- [ ] Participant Persona Card (1 per participant)
- [ ] Facilitator Script Cards (1 set, laminate for reuse)
- [ ] Session Checklist (1 copy, post on wall)
- [ ] Success Criteria Reference (1 copy, keep visible)

### How Many Copies?

**For 5 participants:**
- 5× all participant materials (questionnaires, persona cards)
- 5× data recording sheets (facilitator use)
- 1× reference materials (laminate for reuse)

**Total pages to print:** ~40-50 pages for 5 participants

---

## Digital vs. Print

### Keep Digital (on laptop):
- ✅ FACILITATOR_GUIDE.md - Easy to scroll during session
- ✅ RESEARCH_VALIDATION.md - Reference document
- ✅ RESEARCH_QUICK_REF.md - Quick lookups
- ✅ Notes/observations - Type directly

### Print:
- ✅ Task cards - Hand to participants physically
- ✅ Questionnaires - Participants fill out on paper
- ✅ Data recording sheet - Write observations by hand
- ✅ Emoji scale - Point to physical sheet
- ✅ Session checklist - Post on wall as reminder

---

## Folder Organization Suggestion

Create these folders for your testing:

```
Cooply Testing/
├── Session Materials/
│   ├── Task_Cards.pdf
│   ├── Emoji_Scale.pdf
│   ├── SUS_Questionnaire.pdf
│   ├── Research_Questions.pdf
│   └── Persona_Card.pdf
│
├── Facilitator Reference/
│   ├── FACILITATOR_GUIDE.md
│   ├── RESEARCH_QUICK_REF.md
│   └── Session_Checklist.pdf
│
├── Participant Data/
│   ├── P1_Recording.mp4
│   ├── P1_DataSheet.pdf
│   ├── P1_Questionnaire.pdf
│   ├── P2_Recording.mp4
│   └── ... (for each participant)
│
└── Analysis/
    ├── Raw_Notes.docx
    ├── Patterns.xlsx
    └── Quotes.docx
```

---

## Quick Decision Tree

### "Which file do I need?"

**Want to run a testing session?**
→ FACILITATOR_GUIDE.md + TESTING_MATERIALS.md

**Want to explain research approach?**
→ RESEARCH_VALIDATION.md

**Want to demo the prototype?**
→ QUICK_START.md

**Want to understand design decisions?**
→ RESEARCH_IMPROVEMENTS.md

**Want complete feature list?**
→ PROTOTYPE_GUIDE.md

**Want to present at Gate Review?**
→ PRESENTATION_GUIDE.md + RESEARCH_VALIDATION.md

**Want to give participant instructions?**
→ PARTICIPANT_INSTRUCTIONS.md (or explain verbally)

**Want technical details about AI?**
→ AI_SETUP.md

**Want navigation structure info?**
→ NAVIGATION_GUIDE.md

---

## File Size Reference

Approximate reading/prep times:

| File | Pages | Time to Read |
|------|-------|--------------|
| PARTICIPANT_INSTRUCTIONS.md | 3 | 5 min |
| FACILITATOR_GUIDE.md | 15 | 30-45 min |
| TESTING_MATERIALS.md | 12 | 15 min (to print) |
| RESEARCH_VALIDATION.md | 20 | 45-60 min |
| RESEARCH_IMPROVEMENTS.md | 10 | 20 min |
| RESEARCH_QUICK_REF.md | 4 | 10 min |
| PROTOTYPE_GUIDE.md | 8 | 20 min |
| QUICK_START.md | 2 | 5 min |

**Total prep time:** ~3 hours to read everything (not necessary!)

**Minimum to run tests:** 1 hour (FACILITATOR_GUIDE + printing materials)

---

## What Participants See vs. What You See

### Participant's View:
```
Opens browser
    ↓
Sees Cooply prototype
    ↓
Follows your instructions
    ↓
Completes tasks
    ↓
Fills out questionnaires
    ↓
Done!
```

### Your View:
```
Read FACILITATOR_GUIDE.md
    ↓
Print TESTING_MATERIALS.md
    ↓
Prepare prototype
    ↓
Run session (follow guide)
    ↓
Record observations
    ↓
Analyze data (RESEARCH_VALIDATION.md)
    ↓
Present findings
```

---

## Cleanup After Testing

### Delete These Later (If Desired):
- Technical documentation (if not presenting code)
- Multiple README variants (keep main README.md)
- Development notes (WHATS_NEW.md, COMPLETE.md)

### Keep These Forever:
- ✅ RESEARCH_VALIDATION.md - Your testing protocol
- ✅ RESEARCH_IMPROVEMENTS.md - Design rationale
- ✅ FACILITATOR_GUIDE.md - Session protocol
- ✅ TESTING_MATERIALS.md - Testing materials
- ✅ PROTOTYPE_GUIDE.md - Feature documentation
- ✅ All participant data files
- ✅ Analysis documents

---

## For Your Final Report

### Reference These Files:
1. **Methods Section**: RESEARCH_VALIDATION.md, FACILITATOR_GUIDE.md
2. **Design Section**: RESEARCH_IMPROVEMENTS.md, PROTOTYPE_GUIDE.md
3. **Results Section**: Your collected participant data
4. **Discussion Section**: RESEARCH_VALIDATION.md (success criteria)

### Include These Appendices:
- Appendix A: Task scenarios (from TESTING_MATERIALS.md)
- Appendix B: Questionnaires (from TESTING_MATERIALS.md)
- Appendix C: Success criteria (from RESEARCH_VALIDATION.md)
- Appendix D: Consent form (if used)

---

## Summary Table

| File | Participant | Facilitator | Presentation | Report |
|------|-------------|-------------|--------------|--------|
| PARTICIPANT_INSTRUCTIONS.md | ✅ | ✅ | ❌ | Maybe |
| FACILITATOR_GUIDE.md | ❌ | ✅ | ❌ | ✅ |
| TESTING_MATERIALS.md | ❌ | ✅ | ❌ | ✅ |
| RESEARCH_VALIDATION.md | ❌ | ✅ | ✅ | ✅ |
| RESEARCH_IMPROVEMENTS.md | ❌ | Maybe | ✅ | ✅ |
| RESEARCH_QUICK_REF.md | ❌ | ✅ | Maybe | ❌ |
| PROTOTYPE_GUIDE.md | ❌ | Maybe | ✅ | Maybe |
| QUICK_START.md | ❌ | ✅ | ✅ | ❌ |
| README.md | ❌ | Maybe | ✅ | ❌ |

---

## You're Organized! 📋

Everything is categorized and ready. Focus on:
1. **FACILITATOR_GUIDE.md** - Your session bible
2. **TESTING_MATERIALS.md** - Print these
3. **RESEARCH_VALIDATION.md** - Your research framework

**The rest is reference material - use as needed!**

---

*File Guide v1.0 | Last Updated: October 25, 2024*
