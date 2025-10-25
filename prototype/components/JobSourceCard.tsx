import { Card } from './ui/card';
import { Button } from './ui/button';
import { LucideIcon } from 'lucide-react';

interface JobSourceCardProps {
  icon: LucideIcon;
  title: string;
  count: string;
  jobType: string;
  description: string;
  color: 'blue' | 'yellow' | 'purple';
}

export function JobSourceCard({ 
  icon: Icon, 
  title, 
  count, 
  jobType, 
  description,
  color 
}: JobSourceCardProps) {
  const colorClasses = {
    blue: 'bg-blue-500',
    yellow: 'bg-yellow-400',
    purple: 'bg-purple-500'
  };

  return (
    <Card className={`${colorClasses[color]} text-white p-6`}>
      <div className="flex items-start justify-between mb-4">
        <Icon className="h-8 w-8" />
        <div className="text-right">
          <p className="text-2xl">{count}</p>
          <p className="text-sm opacity-90">{jobType}</p>
        </div>
      </div>
      
      <h3 className="text-lg mb-2">{title}</h3>
      <p className="text-sm opacity-90 mb-4">{description}</p>
      
      <Button variant="secondary" className="w-full bg-white text-gray-900 hover:bg-white/90">
        View More
      </Button>
    </Card>
  );
}
