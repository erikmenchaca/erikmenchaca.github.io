# Cooply - AI-Powered Job Search Platform
## High-Fidelity Interactive Prototype Guide

### 🎯 Project Overview

**Cooply** is an AI-powered job search platform that incorporates agentic AI services to assist users across multiple subtasks in the job search journey. This prototype demonstrates how AI agents can reduce cognitive load and provide real-time conversational assistance throughout different phases of job seeking.

---

## 🤖 Four AI Agents

### 1. **Smart Match Agent** 
- **Purpose**: Intelligent job matching and recommendations
- **Features**:
  - AI-powered job recommendations based on user profile
  - Match score percentage for each job
  - Contextual search with location and role awareness
  - Real-time chat assistance for job searches
- **Access**: Dashboard, Job Search page, or Sidebar → Smart Match

### 2. **Application Tracker Agent**
- **Purpose**: Monitors applications and schedules interviews
- **Features**:
  - Visual application pipeline (Applied → Screening → Interview → Offer)
  - Status tracking for all applications
  - Interview scheduling and reminders
  - Timeline view of application progress
- **Access**: Sidebar → Applications or Application Tracker

### 3. **Interview Coach Agent**
- **Purpose**: Provides personalized interview preparation
- **Features**:
  - Practice questions (Behavioral, Technical, Situational)
  - STAR method guidance
  - Mock interview simulations
  - Performance scoring and feedback
  - Video practice with recording capabilities
- **Access**: Sidebar → Interview Coach

### 4. **Insight Agent**
- **Purpose**: Delivers market analytics and personalized recommendations
- **Features**:
  - Application success rate analytics
  - Market trends and insights
  - Visual dashboards with charts
  - Performance metrics
  - Data-driven recommendations
- **Access**: Sidebar → Insight Agent

---

## 📱 Complete Page Structure

### **Dashboard** (Default Landing Page)
- Welcome message with user greeting
- AI Agent quick access selector
- Key metrics cards:
  - Active Applications
  - Saved Jobs
  - Upcoming Interviews
  - Profile Views
- Recent activity feed
- Top job recommendations with match scores
- Quick action cards for Interview Prep, Market Insights, and Profile

### **Job Search**
- AI-powered search bar with Smart Match Agent
- Advanced filters (Job Type, Location, Salary Range, Experience Level)
- Job listings with:
  - Company logo and details
  - Match percentage
  - Location and salary information
  - Save and Apply buttons
- Sorting options (Match Score, Date, Salary)

### **Applications (Application Tracker)**
- Visual pipeline view (Timeline, Kanban, List)
- Application status cards
- Upcoming interviews section
- Application statistics
- AI chat for application tracking assistance

### **Saved Jobs**
- Grid view of saved positions
- Statistics dashboard:
  - Total saved
  - Average match score
  - Remote jobs count
  - Weekly activity
- Search and filter capabilities
- Quick apply and remove options

### **Interview Coach**
- Practice question sessions
- Mock interview simulator
- Video recording interface
- STAR method guidance
- Performance metrics
- Past interview history

### **Insight Agent**
- Application analytics dashboard
- Visual charts and graphs
- Success rate metrics
- Market trend analysis
- Application stage breakdown
- Job source performance

### **Profile**
- Personal information
- Work experience timeline
- Education history
- Skills and certifications
- Portfolio links
- Profile completion progress

### **Settings**
- **Notifications**: Email, Push, Job Alerts
- **Privacy**: Profile visibility, 2FA, Password
- **Preferences**: Job locations, salary, work type
- **Account**: Personal details, language, timezone

---

## 🎨 Design System

### Color Palette
- **Primary Purple**: `#9333ea` - Main brand color, CTA buttons
- **Blue**: `#3b82f6` - Application Tracker accent
- **Green**: `#22c55e` - Interview Coach, Success states
- **Orange**: `#f97316` - Insight Agent, Analytics
- **Gray Scale**: For text hierarchy and backgrounds

### Typography
- All typography is configured in `styles/globals.css`
- Consistent heading sizes without manual Tailwind classes
- Professional, readable font system

### Components
- **Cards**: Elevated surfaces with hover effects
- **Badges**: Color-coded status indicators
- **Buttons**: Primary (purple), Outline, Ghost variants
- **Icons**: Lucide React icon library

---

## 🚀 Key Features & Interactions

### AI Chat System
- **Location**: Floating AI button on most pages
- **Functionality**: 
  - Agent-specific responses based on context
  - Location and role-aware search assistance
  - Natural conversation flow
  - Auto-scrolling chat interface
  - Loading indicators
- **Test Queries**:
  - "San Francisco for UX Design"
  - "Remote software engineer positions"
  - "Help me prepare for my Google interview"
  - "What's my application status?"

### Smart Navigation
- **Persistent Sidebar**: Always accessible
- **Page Indicators**: Active page highlighted
- **Badge Notifications**: Application count, saved jobs count
- **User Profile**: Quick access at bottom of sidebar

### Responsive Design
- Desktop-optimized layout
- Grid systems adapt to screen size
- Card-based layouts for flexibility
- Scroll areas for content overflow

---

## 📊 Demonstration Scenarios

### Scenario 1: New Job Search
1. Start on **Dashboard**
2. Click **AI Agent selector** → Choose "Smart Match"
3. Open **AI Chat** → Ask: "UX Design jobs in San Francisco"
4. Navigate to **Job Search** page
5. View recommended jobs with match scores
6. Click **View Details** on a job
7. Save or Apply to the position

### Scenario 2: Application Tracking
1. Navigate to **Applications** via sidebar
2. View application pipeline
3. See upcoming interviews
4. Click **AI Chat** → Ask: "When is my next interview?"
5. Get real-time status updates

### Scenario 3: Interview Preparation
1. Navigate to **Interview Coach** via sidebar
2. View upcoming interview (e.g., Microsoft)
3. Start practice session
4. Answer behavioral questions with STAR method
5. Review AI feedback and scoring
6. Access tips and improvement suggestions

### Scenario 4: Analytics & Insights
1. Navigate to **Insight Agent** via sidebar
2. Review application success metrics
3. View visual charts of application stages
4. Analyze job source performance
5. Get data-driven recommendations

---

## 🎬 Gate Review 2 Presentation Tips

### Highlight These Key Points:

1. **Agentic AI Integration**
   - Show how each of the 4 AI agents serves a specific purpose
   - Demonstrate the AI chat interface
   - Emphasize contextual, intelligent responses

2. **Reduced Cognitive Load**
   - Dashboard consolidates all important information
   - AI proactively suggests next actions
   - Visual progress tracking reduces mental overhead
   - Smart notifications keep users informed

3. **High Fidelity**
   - Professional, polished UI
   - Consistent design system
   - Real-world company logos and data
   - Smooth interactions and transitions

4. **Comprehensive Functionality**
   - Complete job search workflow
   - Application tracking pipeline
   - Interview preparation tools
   - Analytics and insights

5. **Usability Considerations**
   - Clear navigation structure
   - Consistent interaction patterns
   - Helpful empty states
   - Contextual help via AI chat

### Demo Flow Suggestion:
1. **Dashboard** (30 sec) - Overview of user's job search status
2. **AI Chat** (45 sec) - Demonstrate Smart Match Agent with queries
3. **Job Search** (45 sec) - Show intelligent matching and filtering
4. **Application Tracker** (30 sec) - Visual pipeline and status
5. **Interview Coach** (45 sec) - Practice questions and feedback
6. **Insight Agent** (30 sec) - Analytics and recommendations

---

## 🔧 Technical Details

### Stack
- **React** with TypeScript
- **Tailwind CSS** v4.0
- **Shadcn/ui** components
- **Lucide React** icons
- **Recharts** for analytics visualizations

### File Structure
```
/components
  ├── DashboardPage.tsx          ← Main landing page
  ├── JobSearchPage.tsx          ← Job search with AI
  ├── ApplicationTrackerPage.tsx ← Application tracking
  ├── SavedJobsPage.tsx          ← Saved jobs
  ├── InterviewCoachPage.tsx     ← Interview prep
  ├── InsightAgent.tsx           ← Analytics dashboard
  ├── ProfilePage.tsx            ← User profile
  ├── SettingsPage.tsx           ← Settings
  ├── Sidebar.tsx                ← Main navigation
  ├── AIButton.tsx               ← AI chat interface
  ├── AgentSelector.tsx          ← Agent switcher
  └── ui/                        ← Reusable components

/lib
  └── ai-service.ts              ← AI response logic

/styles
  └── globals.css                ← Design system
```

### AI Service
- Mock AI responses with contextual awareness
- Pattern matching for location/role queries
- Agent-specific personality and responses
- Extensible for real AI API integration

---

## 📝 Usability Evaluation Plan

### Key Metrics to Test
1. **Task Completion Rate**: Can users find and apply to jobs?
2. **Time to Complete**: How long does each task take?
3. **Error Rate**: Do users navigate to wrong pages?
4. **Satisfaction Score**: Post-task questionnaire
5. **AI Helpfulness**: Did the AI agent reduce confusion?

### Test Scenarios
1. Find a remote UX design job in San Francisco
2. Track the status of an existing application
3. Prepare for an upcoming interview
4. View job search analytics

### Target Users
- Recent graduates seeking first job
- Mid-career professionals switching industries
- Active job seekers managing multiple applications

---

## 🎓 Educational Context

This prototype was created for a UX design assignment demonstrating:
- **Concept Exploration**: Agentic AI in job search
- **Prototype Fidelity**: High-fidelity interactive React prototype
- **Functionality**: Complete workflow from search to interview prep
- **Usability**: User-centered design with AI assistance

**Assignment**: Phase 2 - High-Fidelity Interactive Prototype for Gate Review 2

---

## 💡 Next Steps (Future Enhancements)

- Real AI integration with OpenAI API (setup instructions in AI_SETUP.md)
- User authentication and personalization
- Resume parsing and profile auto-fill
- Calendar integration for interviews
- Email notifications for application updates
- Mobile responsive design
- Accessibility improvements (ARIA labels, keyboard navigation)
- Multi-language support
- Dark mode theme

---

## 📞 Support

For questions about this prototype:
1. Review this guide
2. Check AI_SETUP.md for AI integration
3. See guidelines/Guidelines.md for design principles
4. Review individual component files for implementation details

---

**Last Updated**: October 24, 2024
**Version**: 2.0 - Comprehensive Prototype
**Status**: Ready for Gate Review 2 Presentation ✅
