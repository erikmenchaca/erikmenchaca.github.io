import { useState } from 'react';
import { WelcomePage } from './components/WelcomePage';
import { Sidebar } from './components/Sidebar';
import { DashboardPage } from './components/DashboardPage';
import { JobSearchPage } from './components/JobSearchPage';
import { ApplicationTrackerPage } from './components/ApplicationTrackerPage';
import { SavedJobsPage } from './components/SavedJobsPage';
import { InterviewCoachPage } from './components/InterviewCoachPage';
import { InsightAgent } from './components/InsightAgent';
import { ProfilePage } from './components/ProfilePage';
import { SettingsPage } from './components/SettingsPage';
import { JobDetailPage } from './components/JobDetailPage';

type Page = 
  | 'dashboard' 
  | 'job-search' 
  | 'applications' 
  | 'saved-jobs' 
  | 'smart-match' 
  | 'application-tracker' 
  | 'interview-coach' 
  | 'insights' 
  | 'profile' 
  | 'settings'
  | 'job-detail';

export default function App() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleViewJob = () => {
    setCurrentPage('job-detail');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} onViewJob={handleViewJob} />;
      
      case 'job-search':
        return <JobSearchPage onViewJob={handleViewJob} />;
      
      case 'applications':
      case 'application-tracker':
        return <ApplicationTrackerPage />;
      
      case 'saved-jobs':
        return <SavedJobsPage />;
      
      case 'smart-match':
        // Smart Match redirects to job search with AI assistant active
        return <JobSearchPage onViewJob={handleViewJob} />;
      
      case 'interview-coach':
        return <InterviewCoachPage />;
      
      case 'insights':
        return <InsightAgent />;
      
      case 'profile':
        return <ProfilePage />;
      
      case 'settings':
        return <SettingsPage />;
      
      case 'job-detail':
        return <JobDetailPage onBack={() => setCurrentPage('dashboard')} />;
      
      default:
        return <DashboardPage onNavigate={handleNavigate} onViewJob={handleViewJob} />;
    }
  };

  // Show welcome page first
  if (showWelcome) {
    return <WelcomePage onStart={() => setShowWelcome(false)} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activePage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}
