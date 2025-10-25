import { Sparkles, FileText, MessageCircle, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';

interface AgentSelectorProps {
  activeAgent: string;
  onSelectAgent: (agent: string) => void;
}

export function AgentSelector({ activeAgent, onSelectAgent }: AgentSelectorProps) {
  const agents = [
    {
      id: 'smart-match',
      label: 'Smart Match agent',
      icon: Sparkles,
      description: 'AI-powered job matching based on your profile'
    },
    {
      id: 'application-tracker',
      label: 'Application Tracker Agent',
      icon: FileText,
      description: 'Track and manage your applications'
    },
    {
      id: 'interview-coach',
      label: 'Interview Coach Agent',
      icon: MessageCircle,
      description: 'Prepare for interviews with AI coaching'
    },
    {
      id: 'insight',
      label: 'Insight Agent',
      icon: BarChart3,
      description: 'Get insights about your job search'
    }
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {agents.map((agent) => {
        const Icon = agent.icon;
        const isActive = activeAgent === agent.id;
        
        return (
          <Button
            key={agent.id}
            variant={isActive ? 'default' : 'outline'}
            className={isActive ? 'bg-black text-white hover:bg-black/90' : ''}
            onClick={() => onSelectAgent(agent.id)}
          >
            <Icon className="mr-2 h-4 w-4" />
            {agent.label}
          </Button>
        );
      })}
    </div>
  );
}
