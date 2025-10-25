import { useState } from 'react';
import { TrendingUp, Briefcase, Calendar, Target, ArrowUpRight, Sparkles, Clock, MapPin, Building2 } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { AIButton } from './AIButton';
import { AgentSelector } from './AgentSelector';

interface DashboardPageProps {
  onNavigate: (page: string) => void;
  onViewJob?: () => void;
}

export function DashboardPage({ onNavigate, onViewJob }: DashboardPageProps) {
  const [activeAgent, setActiveAgent] = useState('smart-match');

  const stats = [
    { label: 'Active Applications', value: '3', change: '+2 this week', icon: Briefcase, color: 'blue' },
    { label: 'Saved Jobs', value: '12', change: '+5 this week', icon: Target, color: 'purple' },
    { label: 'Upcoming Interviews', value: '2', change: 'Next: Oct 28', icon: Calendar, color: 'green' },
    { label: 'Profile Views', value: '47', change: '+12 this week', icon: TrendingUp, color: 'orange' },
  ];

  const recentActivity = [
    {
      type: 'application',
      company: 'Google',
      position: 'Senior UX Designer',
      action: 'Moved to Interview Stage',
      time: '2 hours ago',
      icon: Briefcase,
      color: 'green'
    },
    {
      type: 'recommendation',
      company: 'Figma',
      position: 'Product Designer',
      action: 'New job recommendation (95% match)',
      time: '5 hours ago',
      icon: Sparkles,
      color: 'purple'
    },
    {
      type: 'interview',
      company: 'Microsoft',
      position: 'UX Researcher',
      action: 'Interview scheduled for Oct 28',
      time: '1 day ago',
      icon: Calendar,
      color: 'blue'
    }
  ];

  const recommendedJobs = [
    {
      id: '1',
      company: 'Figma',
      position: 'Senior Product Designer',
      location: 'San Francisco, CA',
      salary: '$150k - $200k',
      matchScore: 95,
      postedDate: '2 days ago',
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop',
      tags: ['Remote', 'Design Systems', 'Full-time']
    },
    {
      id: '2',
      company: 'Airbnb',
      position: 'UX Design Lead',
      location: 'Remote',
      salary: '$160k - $210k',
      matchScore: 92,
      postedDate: '3 days ago',
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop',
      tags: ['Remote', 'Leadership', 'Full-time']
    },
    {
      id: '3',
      company: 'Adobe',
      position: 'Senior UX Designer',
      location: 'San Jose, CA',
      salary: '$140k - $180k',
      matchScore: 89,
      postedDate: '5 days ago',
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
      tags: ['Hybrid', 'Creative Cloud', 'Full-time']
    }
  ];

  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl mb-2">Welcome back, Alex! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your job search today</p>
        </div>

        {/* AI Agent Quick Access */}
        <Card className="p-6 mb-8 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl">AI Agents Ready to Help</h2>
                <p className="text-gray-600">Get personalized assistance with every step of your job search</p>
              </div>
            </div>
            {/* Time-Saving Indicator */}
            <div className="bg-white px-4 py-2 rounded-lg border border-purple-300">
              <p className="text-xs text-gray-500">AI Saved You</p>
              <p className="text-2xl text-purple-600">4.5 hrs</p>
              <p className="text-xs text-gray-500">this week</p>
            </div>
          </div>
          <AgentSelector activeAgent={activeAgent} onSelectAgent={setActiveAgent} />
          <div className="mt-4">
            <AIButton activeAgent={activeAgent} />
          </div>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const bgColors = {
              blue: 'bg-blue-100',
              purple: 'bg-purple-100',
              green: 'bg-green-100',
              orange: 'bg-orange-100'
            };
            const textColors = {
              blue: 'text-blue-600',
              purple: 'text-purple-600',
              green: 'text-green-600',
              orange: 'text-orange-600'
            };
            return (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${bgColors[stat.color as keyof typeof bgColors]} rounded-lg flex items-center justify-center`}>
                    <Icon className={`h-6 w-6 ${textColors[stat.color as keyof typeof textColors]}`} />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-gray-400" />
                </div>
                <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                <p className="text-3xl mb-2">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.change}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Recent Activity */}
          <div className="lg:col-span-1">
            <Card className="p-6">
              <h3 className="text-lg mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => {
                  const Icon = activity.icon;
                  const bgColors = {
                    green: 'bg-green-100',
                    purple: 'bg-purple-100',
                    blue: 'bg-blue-100'
                  };
                  const textColors = {
                    green: 'text-green-600',
                    purple: 'text-purple-600',
                    blue: 'text-blue-600'
                  };
                  return (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0 last:pb-0">
                      <div className={`w-10 h-10 ${bgColors[activity.color as keyof typeof bgColors]} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`h-5 w-5 ${textColors[activity.color as keyof typeof textColors]}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm mb-1">
                          <span className="font-medium">{activity.company}</span>
                          {' - '}
                          {activity.position}
                        </p>
                        <p className="text-sm text-gray-600 mb-1">{activity.action}</p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <Button variant="outline" className="w-full mt-4" onClick={() => onNavigate('applications')}>
                View All Activity
              </Button>
            </Card>
          </div>

          {/* Right Column - Recommended Jobs */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg">Top Recommendations for You</h3>
              <Button variant="link" onClick={() => onNavigate('job-search')}>View All</Button>
            </div>
            <div className="space-y-4">
              {recommendedJobs.map((job) => (
                <Card key={job.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={onViewJob}>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                      <img src={job.logo} alt={job.company} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-lg mb-1">{job.position}</h4>
                          <div className="flex items-center gap-2 text-gray-600 mb-2">
                            <Building2 className="h-4 w-4" />
                            <span>{job.company}</span>
                          </div>
                        </div>
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                          {job.matchScore}% Match
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{job.location}</span>
                        </div>
                        <span>•</span>
                        <span>{job.salary}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{job.postedDate}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        {job.tags.map((tag, idx) => (
                          <Badge key={idx} variant="secondary">{tag}</Badge>
                        ))}
                      </div>
                      {/* Trust Indicator: Why this match? */}
                      <div className="mb-3 p-2 bg-green-50 rounded-md border border-green-200">
                        <p className="text-xs text-green-800 flex items-start gap-1">
                          <Sparkles className="h-3 w-3 mt-0.5 flex-shrink-0" />
                          <span><strong>Why this match?</strong> Your UX design skills align with their Design Systems team, and you match 4/5 required qualifications.</span>
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">Save</Button>
                        <Button size="sm" className="bg-purple-600 hover:bg-purple-700">Quick Apply</Button>
                        <Button variant="ghost" size="sm" className="ml-auto">View Details</Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('interview-coach')}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <h4>Interview Prep</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">Prepare for your upcoming Microsoft interview</p>
            <Button variant="outline" className="w-full">Start Practicing</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('insights')}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-orange-600" />
              </div>
              <h4>Market Insights</h4>
            </div>
            <p className="text-gray-600 text-sm mb-4">View trends and analytics for UX Design roles</p>
            <Button variant="outline" className="w-full">View Insights</Button>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('profile')}>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Target className="h-6 w-6 text-purple-600" />
              </div>
              <h4>Profile Strength</h4>
            </div>
            <p className="text-gray-600 text-sm mb-2">Your profile is 85% complete</p>
            <Progress value={85} className="mb-4" />
            <Button variant="outline" className="w-full">Improve Profile</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
