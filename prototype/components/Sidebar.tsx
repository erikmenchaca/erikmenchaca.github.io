import { 
  LayoutDashboard, 
  Search, 
  FileText, 
  MessageSquare, 
  BarChart3, 
  Bookmark, 
  User, 
  Settings,
  Sparkles,
  BriefcaseBusiness,
  Calendar,
  Target
} from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { cn } from './ui/utils';

interface SidebarProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export function Sidebar({ activePage, onNavigate }: SidebarProps) {
  const mainMenuItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: LayoutDashboard,
      description: 'Your job search overview'
    },
    { 
      id: 'job-search', 
      label: 'Job Search', 
      icon: Search,
      description: 'Discover opportunities'
    },
    { 
      id: 'applications', 
      label: 'Applications', 
      icon: FileText,
      description: 'Track your submissions',
      badge: '12'
    },
    { 
      id: 'saved-jobs', 
      label: 'Saved Jobs', 
      icon: Bookmark,
      description: 'Your bookmarked positions'
    },
  ];

  const aiAgentsItems = [
    { 
      id: 'smart-match', 
      label: 'Smart Match', 
      icon: Sparkles,
      description: 'AI job matching',
      color: 'text-purple-600'
    },
    { 
      id: 'application-tracker', 
      label: 'Application Tracker', 
      icon: Target,
      description: 'Monitor progress',
      color: 'text-blue-600'
    },
    { 
      id: 'interview-coach', 
      label: 'Interview Coach', 
      icon: MessageSquare,
      description: 'Preparation & practice',
      color: 'text-green-600'
    },
    { 
      id: 'insights', 
      label: 'Insights', 
      icon: BarChart3,
      description: 'Analytics & trends',
      color: 'text-orange-600'
    },
  ];

  const accountItems = [
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: User,
      description: 'Your information'
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Settings,
      description: 'Preferences & privacy'
    },
  ];

  const MenuItem = ({ item, showBadge = false, showDescription = false }: { item: typeof mainMenuItems[0], showBadge?: boolean, showDescription?: boolean }) => {
    const Icon = item.icon;
    const isActive = activePage === item.id;
    
    return (
      <button
        onClick={() => onNavigate(item.id)}
        className={cn(
          "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group",
          isActive 
            ? "bg-purple-50 text-purple-700" 
            : "text-gray-700 hover:bg-gray-100"
        )}
        title={item.description} // Tooltip on hover
      >
        <Icon 
          className={cn(
            "h-5 w-5 flex-shrink-0",
            isActive ? "text-purple-600" : "text-gray-500 group-hover:text-gray-700",
            item.color
          )} 
        />
        <div className="flex-1 text-left min-w-0">
          <div className="flex items-center justify-between">
            <span className={cn(
              "text-sm",
              isActive ? "" : ""
            )}>
              {item.label}
            </span>
            {showBadge && item.badge && (
              <span className="bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </div>
          {showDescription && item.description && (
            <p className="text-xs text-gray-500 mt-0.5 truncate">
              {item.description}
            </p>
          )}
        </div>
      </button>
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col sticky top-0">
      {/* Logo/Brand */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <BriefcaseBusiness className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl tracking-tight">Cooply</h2>
        </div>
        <p className="text-xs text-gray-500 mt-1">AI-Powered Job Search</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
        {/* Main Menu */}
        <div>
          <h3 className="px-3 text-xs text-gray-500 mb-2 tracking-wide uppercase">
            Main Menu
          </h3>
          <div className="space-y-1">
            {mainMenuItems.map((item) => (
              <MenuItem key={item.id} item={item} showBadge />
            ))}
          </div>
        </div>

        <Separator />

        {/* AI Agents */}
        <div>
          <h3 className="px-3 text-xs text-gray-500 mb-2 tracking-wide uppercase flex items-center gap-1">
            <Sparkles className="h-3 w-3" />
            AI Agents
          </h3>
          <div className="space-y-1">
            {aiAgentsItems.map((item) => (
              <MenuItem key={item.id} item={item} showDescription={true} />
            ))}
          </div>
        </div>

        <Separator />

        {/* Account */}
        <div>
          <h3 className="px-3 text-xs text-gray-500 mb-2 tracking-wide uppercase">
            Account
          </h3>
          <div className="space-y-1">
            {accountItems.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </nav>

      {/* Footer - User Info */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm truncate">Job Seeker</p>
            <p className="text-xs text-gray-500 truncate">jobseeker@email.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
