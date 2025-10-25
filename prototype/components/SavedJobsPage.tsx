import { useState } from 'react';
import { Heart, MapPin, Building2, Clock, Trash2, ExternalLink, Filter, Search } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface SavedJob {
  id: string;
  company: string;
  position: string;
  location: string;
  salary: string;
  savedDate: string;
  matchScore: number;
  logo: string;
  jobType: string;
  description: string;
}

export function SavedJobsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const savedJobs: SavedJob[] = [
    {
      id: '1',
      company: 'Adobe',
      position: 'Senior UX Designer',
      location: 'San Francisco, CA',
      salary: '$130k - $170k',
      savedDate: '2024-10-23',
      matchScore: 96,
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
      jobType: 'Full-time',
      description: 'Lead design initiatives for Creative Cloud products'
    },
    {
      id: '2',
      company: 'Stripe',
      position: 'Product Designer',
      location: 'Remote',
      salary: '$140k - $180k',
      savedDate: '2024-10-22',
      matchScore: 93,
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop',
      jobType: 'Full-time',
      description: 'Design payment experiences for millions of businesses'
    },
    {
      id: '3',
      company: 'Notion',
      position: 'Design Lead',
      location: 'San Francisco, CA',
      salary: '$150k - $200k',
      savedDate: '2024-10-21',
      matchScore: 97,
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
      jobType: 'Full-time',
      description: 'Lead a team designing collaborative workspace tools'
    },
    {
      id: '4',
      company: 'Shopify',
      position: 'UX Designer',
      location: 'Toronto, Canada',
      salary: '$110k - $150k',
      savedDate: '2024-10-20',
      matchScore: 89,
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop',
      jobType: 'Full-time',
      description: 'Design e-commerce experiences for merchants worldwide'
    },
    {
      id: '5',
      company: 'Meta',
      position: 'Senior Product Designer',
      location: 'Menlo Park, CA',
      salary: '$160k - $210k',
      savedDate: '2024-10-19',
      matchScore: 91,
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop',
      jobType: 'Full-time',
      description: 'Design social experiences connecting billions of people'
    },
    {
      id: '6',
      company: 'Uber',
      position: 'Product Designer',
      location: 'San Francisco, CA',
      salary: '$125k - $165k',
      savedDate: '2024-10-18',
      matchScore: 88,
      logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=100&h=100&fit=crop',
      jobType: 'Full-time',
      description: 'Design rider and driver experiences for mobility platform'
    }
  ];

  const handleRemoveSaved = (jobId: string) => {
    console.log('Remove job:', jobId);
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Saved Jobs</h1>
          <p className="text-gray-600">Jobs you've bookmarked for later review</p>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-3 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search saved jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <p className="text-gray-600 text-sm mb-1">Total Saved</p>
            <p className="text-2xl">{savedJobs.length}</p>
          </Card>
          <Card className="p-4">
            <p className="text-gray-600 text-sm mb-1">Avg. Match Score</p>
            <p className="text-2xl text-green-600">
              {Math.round(savedJobs.reduce((acc, job) => acc + job.matchScore, 0) / savedJobs.length)}%
            </p>
          </Card>
          <Card className="p-4">
            <p className="text-gray-600 text-sm mb-1">Remote Jobs</p>
            <p className="text-2xl">{savedJobs.filter(j => j.location === 'Remote').length}</p>
          </Card>
          <Card className="p-4">
            <p className="text-gray-600 text-sm mb-1">This Week</p>
            <p className="text-2xl">
              {savedJobs.filter(j => {
                const diff = Date.now() - new Date(j.savedDate).getTime();
                return diff < 7 * 24 * 60 * 60 * 1000;
              }).length}
            </p>
          </Card>
        </div>

        {/* Saved Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {savedJobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg mb-1">{job.position}</h3>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Building2 className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={() => handleRemoveSaved(job.id)}
                >
                  <Heart className="h-5 w-5 fill-current" />
                </Button>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{job.location}</span>
                </div>
                <p className="text-gray-700">{job.description}</p>
              </div>

              {/* Badges */}
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary">{job.jobType}</Badge>
                <Badge className="bg-green-100 text-green-800">
                  {job.matchScore}% Match
                </Badge>
                <Badge variant="outline">{job.salary}</Badge>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex items-center gap-1 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  Saved {new Date(job.savedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="gap-2">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </Button>
                  <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                    Apply Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State (if no saved jobs) */}
        {savedJobs.length === 0 && (
          <Card className="p-12 text-center">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl mb-2">No Saved Jobs Yet</h3>
            <p className="text-gray-600 mb-4">
              Start exploring jobs and save the ones you're interested in
            </p>
            <Button>Browse Jobs</Button>
          </Card>
        )}
      </div>
    </div>
  );
}
