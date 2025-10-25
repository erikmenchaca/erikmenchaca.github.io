# Cooply - AI-Powered Job Search Platform

<div align="center">

![Cooply Logo](https://img.shields.io/badge/Cooply-AI%20Job%20Search-9333ea?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

**An intelligent job search platform powered by 4 specialized AI agents**

[Quick Start](#-quick-start) • [Features](#-features) • [Demo Guide](#-demo-guide) • [Documentation](#-documentation)

</div>

---

## 📖 Overview

**Cooply** is a high-fidelity interactive prototype that demonstrates how **agentic AI services** can transform the job search experience. The platform incorporates 4 specialized AI agents that assist users across every phase of their job search journey, from discovery to interview preparation.

### 🎯 Purpose

Created for a UX Design assignment (Phase 2 - Gate Review 2), this prototype showcases:
- How AI agents can reduce cognitive load during job searching
- Real-time conversational assistance across multiple subtasks
- Complete job search workflow integration
- High-fidelity design with professional UI/UX

---

## 🤖 The Four AI Agents

### 1. 🟣 Smart Match Agent
**Intelligent Job Matching & Recommendations**
- AI-powered job discovery based on your profile
- Match score percentage for each position
- Location and role-aware search assistance
- Personalized recommendations

### 2. 🔵 Application Tracker Agent
**Application Monitoring & Interview Scheduling**
- Visual pipeline tracking (Applied → Screening → Interview → Offer)
- Automatic status updates
- Interview scheduling and reminders
- Follow-up suggestions

### 3. 🟢 Interview Coach Agent
**Personalized Interview Preparation**
- Practice questions (Behavioral, Technical, Situational)
- STAR method guidance
- Mock interview simulations
- Performance scoring and feedback
- Video practice capabilities

### 4. 🟠 Insight Agent
**Market Analytics & Recommendations**
- Application success rate metrics
- Market trend analysis
- Visual dashboards with charts
- Data-driven career recommendations
- Job source performance tracking

---

## ✨ Features

### Complete Job Search Workflow
- 🔍 **Smart Job Discovery** - AI-powered search with match scoring
- 💾 **Save & Organize** - Bookmark interesting positions
- 📝 **Application Tracking** - Visual pipeline of all applications
- 📅 **Interview Management** - Scheduling and preparation
- 📊 **Analytics Dashboard** - Track your job search performance
- 👤 **Profile Management** - Professional profile with experience and skills

### AI-Powered Assistance
- 💬 **Conversational Interface** - Chat with AI agents anytime
- 🎯 **Contextual Responses** - Intelligent answers based on your query
- 📍 **Location-Aware** - Understands city and remote preferences
- 🏢 **Role-Specific** - Tailored to your target positions
- ⚡ **Real-Time Help** - Instant assistance when you need it

### Professional UI/UX
- 🎨 **Consistent Design System** - Polished, professional interface
- 🧭 **Intuitive Navigation** - Persistent sidebar with clear structure
- 📱 **Responsive Layout** - Optimized for desktop experience
- 🔔 **Smart Notifications** - Badge indicators for important updates
- ⚡ **Smooth Interactions** - Hover effects and transitions

---

## 🚀 Quick Start

### For Your Demo Presentation

1. **Open the application** - You'll land on the Dashboard
2. **Explore the sidebar** - All pages accessible from left navigation
3. **Try the AI chat** - Click the purple sparkle button
4. **Ask a question** - Try: "San Francisco for UX Design"
5. **Navigate pages** - Click any sidebar item to explore

### Best Demo Flow (5 minutes)
1. **Dashboard** (1 min) → Show overview and AI agent selector
2. **AI Chat** (1 min) → Demonstrate intelligent responses
3. **Job Search** (1 min) → Show matching and filtering
4. **Applications** (1 min) → Visual pipeline tracking
5. **Interview Coach + Insights** (1 min) → Show specialized agents

📘 **See [QUICK_START.md](./QUICK_START.md) for detailed demo script**

---

## 📱 Pages & Navigation

### Main Pages
| Page | Icon | Purpose |
|------|------|---------|
| **Dashboard** | 🏠 Home | Overview of job search status |
| **Job Search** | 🔍 Search | Find and filter opportunities |
| **Applications** | 💼 Briefcase | Track application progress |
| **Saved Jobs** | 🔖 Bookmark | View bookmarked positions |

### AI Agent Pages
| Agent | Icon | Purpose |
|-------|------|---------|
| **Smart Match** | ✨ Sparkles | Job recommendations |
| **Application Tracker** | 📊 Chart | Application monitoring |
| **Interview Coach** | 💬 Message | Interview preparation |
| **Insight Agent** | 📈 Trending | Analytics & insights |

### Other Pages
- **Profile** - User information and experience
- **Settings** - Notifications, privacy, preferences

---

## 💬 Try These AI Queries

### Smart Match Agent
```
"San Francisco for UX Design"
"Remote software engineer positions"
"Product manager jobs in Boston"
"Show me companies hiring designers"
```

### Application Tracker Agent
```
"When is my next interview?"
"What's my application status?"
"Send me a reminder for follow-up"
```

### Interview Coach Agent
```
"Help me prepare for behavioral questions"
"Give me a practice question"
"How do I use the STAR method?"
```

### Insight Agent
```
"Show my application success rate"
"What are UX design market trends?"
"Which job sources work best?"
```

---

## 🎨 Design System

### Color Palette
- **Purple** `#9333ea` - Primary brand, CTAs, AI agents
- **Blue** `#3b82f6` - Application Tracker
- **Green** `#22c55e` - Interview Coach, Success
- **Orange** `#f97316` - Insight Agent, Analytics
- **Gray Scale** - Text hierarchy and backgrounds

### Typography
Configured in `styles/globals.css` with consistent heading sizes

### Components
Built with **Shadcn/ui** component library:
- Cards, Buttons, Badges, Dialogs
- Tables, Tabs, Progress bars
- Forms, Inputs, Selects
- All styled with Tailwind CSS

---

## 🔧 Technical Stack

### Core Technologies
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4.0** - Styling
- **Vite** - Build tool

### Libraries
- **Shadcn/ui** - Component library
- **Lucide React** - Icon system
- **Recharts** - Data visualization
- **Motion/React** - Animations

### Project Structure
```
cooply/
├── components/           # React components
│   ├── DashboardPage.tsx
│   ├── JobSearchPage.tsx
│   ├── ApplicationTrackerPage.tsx
│   ├── SavedJobsPage.tsx
│   ├── InterviewCoachPage.tsx
│   ├── InsightAgent.tsx
│   ├── ProfilePage.tsx
│   ├── SettingsPage.tsx
│   ├── Sidebar.tsx
│   ├── AIButton.tsx
│   ├── AgentSelector.tsx
│   └── ui/              # Shadcn components
├── lib/
│   └── ai-service.ts    # AI response logic
├── styles/
│   └── globals.css      # Design tokens
├── App.tsx              # Main app with routing
└── README.md
```

---

## 📚 Documentation

### 🎯 **NEW: Preparing for Testing?**
**[START_HERE.md](./START_HERE.md)** - ⭐⭐⭐ Your complete testing preparation guide

---

### For Your Assignment

#### 🎓 Research & Validation
- **[RESEARCH_VALIDATION.md](./RESEARCH_VALIDATION.md)** - ⭐ Complete testing protocol & success criteria
- **[RESEARCH_IMPROVEMENTS.md](./RESEARCH_IMPROVEMENTS.md)** - ⭐ Design enhancements explained
- **[RESEARCH_QUICK_REF.md](./RESEARCH_QUICK_REF.md)** - Quick reference cheat sheet

#### 🧪 Usability Testing
- **[FACILITATOR_GUIDE.md](./FACILITATOR_GUIDE.md)** - ⭐ Session facilitation protocol
- **[TESTING_MATERIALS.md](./TESTING_MATERIALS.md)** - ⭐ All printable testing materials
- **[PARTICIPANT_INSTRUCTIONS.md](./PARTICIPANT_INSTRUCTIONS.md)** - Participant handout
- **[FILE_GUIDE.md](./FILE_GUIDE.md)** - File organization guide

#### 📚 Documentation
- **[QUICK_START.md](./QUICK_START.md)** - 60-second demo setup
- **[PROTOTYPE_GUIDE.md](./PROTOTYPE_GUIDE.md)** - Complete feature documentation
- **[NAVIGATION_GUIDE.md](./NAVIGATION_GUIDE.md)** - Sidebar navigation details
- **[AI_SETUP.md](./AI_SETUP.md)** - AI integration details
- **[guidelines/Guidelines.md](./guidelines/Guidelines.md)** - Design principles

### Key Documentation Sections
1. **Prototype Overview** - What it demonstrates
2. **AI Agents** - Detailed agent descriptions
3. **Page Structure** - Complete page breakdown
4. **Demo Scenarios** - Walkthrough examples
5. **Presentation Tips** - Gate Review 2 guidance
6. **Usability Plan** - Testing framework

---

## 🎓 Assignment Context

### Gate Review 2 Requirements

✅ **Concept Exploration**
- Agentic AI services in job search
- 4 specialized AI agents with distinct purposes
- Real-time conversational assistance

✅ **Prototype Fidelity & Functionality**
- High-fidelity React prototype
- Complete job search workflow
- Interactive AI chat system
- Professional UI/UX design

✅ **Usability Evaluation Plan**
- Target user scenarios documented
- Key metrics defined
- Test cases prepared
- Success criteria established

✅ **Comprehensive Documentation**
- Complete guides and README
- Demo scripts and presentation tips
- Technical documentation
- Design system specifications

---

## 🎬 Presentation Highlights

### Key Points to Emphasize

1. **Agentic AI Integration**
   - 4 specialized agents vs. one generic AI
   - Each agent optimized for specific tasks
   - Contextual, intelligent responses

2. **Reduced Cognitive Load**
   - AI proactively assists at each step
   - Visual progress tracking
   - Consolidated information dashboard
   - Smart recommendations reduce decision fatigue

3. **Complete Workflow**
   - End-to-end job search journey
   - From discovery to interview preparation
   - All stages seamlessly connected

4. **High Fidelity**
   - Professional, polished interface
   - Consistent design system
   - Production-quality components
   - Realistic data and interactions

---

## 🚦 Demo Checkpoints

### Before Your Presentation
- [ ] Review QUICK_START.md demo script
- [ ] Practice AI chat queries
- [ ] Know sidebar navigation
- [ ] Can explain each AI agent
- [ ] Prepared talking points for design decisions

### During Demo
- [ ] Start on Dashboard for overview
- [ ] Demonstrate AI chat with 2-3 queries
- [ ] Show job matching with percentage scores
- [ ] Navigate application pipeline
- [ ] Highlight one agent in detail (recommend Interview Coach)

### After Demo
- [ ] Be ready to explain agent specialization
- [ ] Discuss cognitive load reduction
- [ ] Answer questions about usability testing
- [ ] Share future enhancement ideas

---

## 🔮 Future Enhancements

### Technical Improvements
- Real OpenAI API integration
- User authentication system
- Database for persistent data
- Calendar integration
- Email notifications

### Feature Additions
- Resume parsing and auto-fill
- Salary negotiation assistant
- Company culture matching
- Networking recommendations
- Career path suggestions

### UX Improvements
- Mobile responsive design
- Dark mode theme
- Accessibility enhancements
- Multi-language support
- Advanced customization

---

## 📞 Support & Resources

### Getting Help
1. **Quick Start** - See QUICK_START.md
2. **Full Guide** - See PROTOTYPE_GUIDE.md
3. **AI Setup** - See AI_SETUP.md
4. **Design** - See guidelines/Guidelines.md

### Understanding the Code
- All components are documented with comments
- AI service logic in `/lib/ai-service.ts`
- Design tokens in `/styles/globals.css`
- Component library docs at [shadcn/ui](https://ui.shadcn.com)

---

## 🏆 Project Goals Achieved

✨ **Demonstrate Agentic AI** - 4 specialized AI agents working together  
✨ **Reduce Cognitive Load** - AI assistance at every step  
✨ **Complete Workflow** - End-to-end job search journey  
✨ **High Fidelity** - Production-quality UI/UX  
✨ **Interactive Prototype** - Fully functional React application  
✨ **Professional Documentation** - Comprehensive guides and README  

---

## 📄 License & Attribution

### Images
All images sourced from Unsplash. See [Attributions.md](./Attributions.md) for credits.

### Code
This is a prototype created for educational purposes as part of a UX design assignment.

### Libraries
Built with open-source libraries. See package dependencies for full list.

---

## 🎯 Summary

**Cooply** showcases how **agentic AI services** can revolutionize the job search experience by:
- Providing **specialized assistance** for different tasks
- **Reducing cognitive load** through intelligent automation
- Offering **real-time conversational help** when users need it
- Creating a **seamless, integrated workflow** from search to hire

This prototype demonstrates both the **technical feasibility** and **user experience benefits** of incorporating AI agents into job search platforms.

---

<div align="center">

**Ready for Gate Review 2** ✅

Made with ❤️ for UX Design Assignment  
Phase 2 - High-Fidelity Interactive Prototype

[Quick Start Guide](./QUICK_START.md) • [Full Documentation](./PROTOTYPE_GUIDE.md)

</div>
