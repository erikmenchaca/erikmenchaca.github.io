# 📚 Cooply Prototype - File Index

Quick reference for all files in this project.

---

## 📄 Documentation (For Participants)

### **Main Files:**

1. **[README.md](./README.md)** ⭐ **START HERE**
   - Overview of Cooply
   - What it is and how to use it
   - Key features to explore
   - Study information
   - **Purpose:** Main landing page for participants

2. **[PARTICIPANT_INSTRUCTIONS.md](./PARTICIPANT_INSTRUCTIONS.md)** ⭐
   - Detailed study guide
   - What to expect during the session
   - Your role as a participant
   - Tips for testing
   - **Purpose:** Comprehensive participant guide

3. **[ABOUT.md](./ABOUT.md)**
   - Research goals and questions
   - Study details (duration, format, dates)
   - About the 4 AI agents
   - What happens to your feedback
   - Researcher contact information
   - **Purpose:** Study context and background

4. **[Attributions.md](./Attributions.md)**
   - Image credits
   - Content sources
   - Legal attributions
   - **Purpose:** Proper crediting of resources

---

## 💻 Prototype Application

### **Main App:**

- **[App.tsx](./App.tsx)**
  - Main application file
  - Shows welcome page first
  - Handles page navigation
  - Routes to different pages

### **Components:**

#### **Welcome & Navigation:**
- **WelcomePage.tsx** ⭐ - Landing page participants see first
- **Sidebar.tsx** - Left navigation menu
- **Header.tsx** - Page headers
- **AIButton.tsx** - Floating AI chat button
- **AgentSelector.tsx** - Select different AI agents

#### **Main Pages (8 total):**
1. **DashboardPage.tsx** - Overview and activity
2. **JobSearchPage.tsx** - Search and browse jobs
3. **JobDetailPage.tsx** - Detailed job view
4. **SavedJobsPage.tsx** - Bookmarked jobs
5. **ApplicationTrackerPage.tsx** - Track applications
6. **InterviewCoachPage.tsx** - Interview preparation
7. **ProfilePage.tsx** - User profile
8. **SettingsPage.tsx** - App settings

#### **AI Features:**
- **InsightAgent.tsx** - AI insights and analytics

#### **Reusable Components:**
- **JobCard.tsx** - Job listing cards
- **JobTable.tsx** - Application table
- **JobSourceCard.tsx** - Job source badges
- **SearchWithAutocomplete.tsx** - Smart search

#### **UI Components:**
- **components/ui/** - ShadCN UI components (buttons, cards, etc.)
- **components/figma/ImageWithFallback.tsx** - Image handler

---

## 🎨 Styles & Assets

- **styles/globals.css** - Global styles and Tailwind setup
- **lib/ai-service.ts** - AI service utilities

---

## 📁 Project Structure

```
Cooply Prototype/
│
├── 📚 DOCUMENTATION (4 files)
│   ├── README.md ⭐
│   ├── ABOUT.md
│   ├── PARTICIPANT_INSTRUCTIONS.md
│   └── Attributions.md
│
├── 💻 APPLICATION
│   ├── App.tsx (Main app)
│   │
│   ├── 🎨 components/
│   │   ├── WelcomePage.tsx ⭐
│   │   ├── Pages (8 files)
│   │   ├── Navigation (3 files)
│   │   ├── AI Features (3 files)
│   │   ├── Job Components (4 files)
│   │   └── ui/ (ShadCN components)
│   │
│   ├── 🎨 styles/
│   │   └── globals.css
│   │
│   └── 📚 lib/
│       └── ai-service.ts
│
└── 📖 PROJECT INFO
    ├── INDEX.md (This file)
    └── PUBLISHING_READY.md
```

---

## 🎯 Quick Navigation

### **For Participants:**
- Want to know what this is? → [README.md](./README.md)
- Need study instructions? → [PARTICIPANT_INSTRUCTIONS.md](./PARTICIPANT_INSTRUCTIONS.md)
- Want study details? → [ABOUT.md](./ABOUT.md)

### **For Researchers/Developers:**
- Publishing checklist? → [PUBLISHING_READY.md](./PUBLISHING_READY.md)
- Code structure? → See `/components` folder
- Main app logic? → [App.tsx](./App.tsx)

---

## 📊 File Count

- **Documentation:** 4 files
- **Application Code:** ~30 component files
- **UI Library:** ~40 ShadCN components
- **Total:** Clean, focused, participant-ready!

---

## 🔗 Important Links

**Researcher Contact:**
- Email: erik@mail.rit.edu
- Phone: 770-876-0212
- Discord: erikthefuturephd

**Study Info:**
- Duration: 45 minutes
- Institution: RIT
- Course: UX Design
- Deadline: November 3, 2025

---

## ✅ Status

**Project Status:** ✅ Ready for Publishing

**What's Ready:**
- ✅ Clean documentation structure
- ✅ Professional welcome page
- ✅ Full interactive prototype
- ✅ All participant-facing materials
- ✅ No recruitment clutter
- ✅ Clear navigation and instructions

**Next Step:** Publish and share with participants!

---

*File Index | Cooply Prototype | Last Updated: October 26, 2025*
