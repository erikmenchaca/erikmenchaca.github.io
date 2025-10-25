import { useState } from 'react';
import { Search, MapPin, Briefcase, DollarSign, Filter, SlidersHorizontal, Sparkles, Heart, Building2, Clock } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { AIButton } from './AIButton';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';

interface JobSearchPageProps {
  onViewJob?: () => void;
}

export function JobSearchPage({ onViewJob }: JobSearchPageProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [salaryRange, setSalaryRange] = useState([80, 200]);

  const jobs = [
    {
      id: '1',
      company: 'Figma',
      position: 'Senior Product Designer',
      location: 'San Francisco, CA',
      salary: '$150k - $200k',
      matchScore: 95,
      postedDate: '2 days ago',
      applicants: '12 applicants',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
      tags: ['Remote', 'Design Systems', 'Full-time'],
      description: 'Lead design initiatives for Figma\'s core product features and design systems.',
      isRemote: true,
      jobType: 'Full-time'
    },
    {
      id: '2',
      company: 'Airbnb',
      position: 'UX Design Lead',
      location: 'Remote',
      salary: '$160k - $210k',
      matchScore: 92,
      postedDate: '3 days ago',
      applicants: '8 applicants',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop',
      tags: ['Remote', 'Leadership', 'Full-time'],
      description: 'Lead a team of designers creating world-class travel experiences.',
      isRemote: true,
      jobType: 'Full-time'
    },
    {
      id: '3',
      company: 'Adobe',
      position: 'Senior UX Designer',
      location: 'San Jose, CA',
      salary: '$140k - $180k',
      matchScore: 89,
      postedDate: '5 days ago',
      applicants: '15 applicants',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
      tags: ['Hybrid', 'Creative Cloud', 'Full-time'],
      description: 'Design innovative features for Adobe Creative Cloud applications.',
      isRemote: false,
      jobType: 'Full-time'
    },
    {
      id: '4',
      company: 'Stripe',
      position: 'Product Designer',
      location: 'San Francisco, CA',
      salary: '$135k - $175k',
      matchScore: 91,
      postedDate: '1 week ago',
      applicants: '20 applicants',
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop',
      tags: ['Hybrid', 'Fintech', 'Full-time'],
      description: 'Design payment experiences used by millions of businesses worldwide.',
      isRemote: false,
      jobType: 'Full-time'
    },
    {
      id: '5',
      company: 'Notion',
      position: 'Design Lead',
      location: 'San Francisco, CA',
      salary: '$150k - $200k',
      matchScore: 97,
      postedDate: '4 days ago',
      applicants: '10 applicants',
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop',
      tags: ['Hybrid', 'Productivity', 'Full-time'],
      description: 'Lead design for collaborative workspace tools used by millions.',
      isRemote: false,
      jobType: 'Full-time'
    },
    {
      id: '6',
      company: 'Meta',
      position: 'Senior UX Researcher',
      location: 'Menlo Park, CA',
      salary: '$145k - $190k',
      matchScore: 86,
      postedDate: '6 days ago',
      applicants: '18 applicants',
      logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=100&h=100&fit=crop',
      tags: ['On-site', 'Research', 'Full-time'],
      description: 'Conduct user research to inform product decisions for billions of users.',
      isRemote: false,
      jobType: 'Full-time'
    }
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl mb-2">Job Search</h1>
          <p className="text-gray-600">Find your next opportunity with AI-powered recommendations</p>
        </div>

        {/* AI Assistant */}
        <Card className="p-6 mb-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3>Smart Match AI</h3>
              <p className="text-sm text-gray-600">Get personalized job recommendations based on your profile</p>
            </div>
          </div>
          <AIButton activeAgent="smart-match" />
        </Card>

        {/* Search Bar */}
        <Card className="p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Job title, keywords, or company"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="City, state, or remote"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button className="flex-1 bg-purple-600 hover:bg-purple-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Filter Jobs</SheetTitle>
                    <SheetDescription>
                      Refine your search with advanced filters
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-6 space-y-6">
                    {/* Job Type */}
                    <div>
                      <h4 className="mb-3">Job Type</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="fulltime" />
                          <label htmlFor="fulltime" className="text-sm">Full-time</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="parttime" />
                          <label htmlFor="parttime" className="text-sm">Part-time</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="contract" />
                          <label htmlFor="contract" className="text-sm">Contract</label>
                        </div>
                      </div>
                    </div>

                    {/* Remote Options */}
                    <div>
                      <h4 className="mb-3">Work Location</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="remote" />
                          <label htmlFor="remote" className="text-sm">Remote</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hybrid" />
                          <label htmlFor="hybrid" className="text-sm">Hybrid</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="onsite" />
                          <label htmlFor="onsite" className="text-sm">On-site</label>
                        </div>
                      </div>
                    </div>

                    {/* Salary Range */}
                    <div>
                      <h4 className="mb-3">Salary Range (in thousands)</h4>
                      <div className="px-2">
                        <Slider
                          value={salaryRange}
                          onValueChange={setSalaryRange}
                          min={40}
                          max={250}
                          step={10}
                          className="mb-2"
                        />
                        <div className="flex justify-between text-sm text-gray-600">
                          <span>${salaryRange[0]}k</span>
                          <span>${salaryRange[1]}k</span>
                        </div>
                      </div>
                    </div>

                    {/* Experience Level */}
                    <div>
                      <h4 className="mb-3">Experience Level</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="entry" />
                          <label htmlFor="entry" className="text-sm">Entry Level</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="mid" />
                          <label htmlFor="mid" className="text-sm">Mid Level</label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="senior" />
                          <label htmlFor="senior" className="text-sm">Senior Level</label>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </Card>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-gray-600">{jobs.length} jobs found</p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <Button variant="ghost" size="sm">Match Score</Button>
            <Button variant="ghost" size="sm">Date Posted</Button>
            <Button variant="ghost" size="sm">Salary</Button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={onViewJob}>
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                </div>

                {/* Job Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="text-lg mb-1">{job.position}</h3>
                      <div className="flex items-center gap-2 text-gray-600 mb-2">
                        <Building2 className="h-4 w-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        {job.matchScore}% Match
                      </Badge>
                      <Button variant="ghost" size="sm">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-3">{job.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{job.postedDate}</span>
                    </div>
                    <span>•</span>
                    <span>{job.applicants}</span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    {job.tags.map((tag, idx) => (
                      <Badge key={idx} variant="secondary">{tag}</Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Apply Now</Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">Load More Jobs</Button>
        </div>
      </div>
    </div>
  );
}
