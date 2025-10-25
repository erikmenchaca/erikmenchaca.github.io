import { ArrowRight, Check } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

interface JobCardProps {
  company: string;
  image: string;
  isApplied?: boolean;
  onClick?: () => void;
}

export function JobCard({ company, image, isApplied, onClick }: JobCardProps) {
  return (
    <Card className="relative overflow-hidden group cursor-pointer" onClick={onClick}>
      <div className="aspect-[4/3] relative">
        <img
          src={image}
          alt={company}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <div className="absolute bottom-3 left-3 text-white">
          <p className="text-sm opacity-90">{company}</p>
        </div>

        {isApplied && (
          <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1.5">
            <Check className="h-4 w-4" />
          </div>
        )}
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="absolute bottom-3 right-3 bg-white rounded-full hover:bg-white/90"
      >
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Card>
  );
}
