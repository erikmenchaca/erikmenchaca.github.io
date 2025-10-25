import { useState } from 'react';
import { Calendar, Clock, MapPin, Building2, CheckCircle2, Circle, AlertCircle, ArrowUpRight, Filter } from 'lucide-react';
import { AIButton } from './AIButton';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

interface Application {
  id: string;
  company: string;
  position: string;
  location: string;
  salary: string;
  appliedDate: string;
  status: 'applied' | 'screening' | 'interview' | 'offer' | 'rejected';
  nextStep?: string;
  nextStepDate?: string;
  matchScore: number;
  logo: string;
}

export function ApplicationTrackerPage() {
  const [viewMode, setViewMode] = useState<'timeline' | 'kanban' | 'list'>('timeline');

  const applications: Application[] = [
    {
      id: '1',
      company: 'Google',
      position: 'Senior UX Designer',
      location: 'Mountain View, CA',
      salary: '$140k - $180k',
      appliedDate: '2024-10-15',
      status: 'interview',
      nextStep: 'Final Round Interview',
      nextStepDate: '2024-11-01',
      matchScore: 95,
      logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=100&h=100&fit=crop'
    },
    {
      id: '2',
      company: 'Microsoft',
      position: 'Product Designer',
      location: 'Redmond, WA',
      salary: '$130k - $170k',
      appliedDate: '2024-10-18',
      status: 'screening',
      nextStep: 'Technical Interview',
      nextStepDate: '2024-10-28',
      matchScore: 92,
      logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop'
    },
    {
      id: '3',
      company: 'Figma',
      position: 'Senior Product Designer',
      location: 'San Francisco, CA',
      salary: '$150k - $190k',
      appliedDate: '2024-10-20',
      status: 'applied',
      nextStep: 'Wait for recruiter response',
      matchScore: 98,
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&h=100&fit=crop'
    },
    {
      id: '4',
      company: 'Salesforce',
      position: 'UX Designer',
      location: 'San Francisco, CA',
      salary: '$120k - $160k',
      appliedDate: '2024-10-10',
      status: 'rejected',
      matchScore: 85,
      logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop'
    },
    {
      id: '5',
      company: 'Airbnb',
      position: 'Design Lead',
      location: 'Remote',
      salary: '$160k - $200k',
      appliedDate: '2024-10-22',
      status: 'offer',
      nextStep: 'Review offer letter',
      nextStepDate: '2024-10-30',
      matchScore: 94,
      logo: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=100&h=100&fit=crop'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'applied':
        return <Circle className="h-5 w-5 text-blue-500" />;
      case 'screening':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case 'interview':
        return <Calendar className="h-5 w-5 text-purple-500" />;
      case 'offer':
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Circle className="h-5 w-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      case 'screening':
        return 'bg-yellow-100 text-yellow-800';
      case 'interview':
        return 'bg-purple-100 text-purple-800';
      case 'offer':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const stats = {
    total: applications.length,
    active: applications.filter(a => !['rejected', 'offer'].includes(a.status)).length,
    interviews: applications.filter(a => a.status === 'interview').length,
    offers: applications.filter(a => a.status === 'offer').length,
    responseRate: Math.round((applications.filter(a => a.status !== 'applied').length / applications.length) * 100)
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl mb-2">Application Tracker</h1>
              <p className="text-gray-600">Monitor your job applications and stay on top of deadlines</p>
            </div>
            <AIButton activeAgent="application-tracker" />
          </div>

          {/* Success Feedback Banner */}
          {stats.offers > 0 && (
            <Card className="p-4 mt-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-300">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg">🎉 Congratulations! You have {stats.offers} job offer{stats.offers > 1 ? 's' : ''}!</h3>
                  <p className="text-gray-600 text-sm">You're doing great! Review your offers and make the best decision for your career.</p>
                </div>
              </div>
            </Card>
          )}

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">Total Applications</p>
              <p className="text-2xl">{stats.total}</p>
            </Card>
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">Active</p>
              <p className="text-2xl">{stats.active}</p>
            </Card>
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">Interviews</p>
              <p className="text-2xl text-purple-600">{stats.interviews}</p>
            </Card>
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">Offers</p>
              <p className="text-2xl text-green-600">{stats.offers}</p>
            </Card>
            <Card className="p-4">
              <p className="text-gray-600 text-sm mb-1">Response Rate</p>
              <div className="flex items-end gap-2">
                <p className="text-2xl">{stats.responseRate}%</p>
                <Progress value={stats.responseRate} className="h-2 flex-1" />
              </div>
            </Card>
          </div>
        </div>

        {/* View Controls */}
        <div className="flex items-center justify-between mb-6">
          <Tabs value={viewMode} onValueChange={(v) => setViewMode(v as any)}>
            <TabsList>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="kanban">Kanban</TabsTrigger>
              <TabsTrigger value="list">List</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
        </div>

        {/* Applications List */}
        <div className="space-y-4">
          {applications.map((app) => (
            <Card key={app.id} className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                {/* Company Logo */}
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                  <img src={app.logo} alt={app.company} className="w-full h-full object-cover" />
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-xl mb-1">{app.position}</h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building2 className="h-4 w-4" />
                          {app.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {app.location}
                        </span>
                        <span>{app.salary}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Match: {app.matchScore}%</Badge>
                      <Button variant="ghost" size="sm">
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Status and Timeline */}
                  <div className="flex items-center gap-6 mt-4 pt-4 border-t">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(app.status)}
                      <Badge className={getStatusColor(app.status)}>
                        {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      Applied {new Date(app.appliedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>

                    {app.nextStep && (
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-4 w-4 text-purple-600" />
                        <span className="text-purple-600">
                          {app.nextStep}
                          {app.nextStepDate && ` - ${new Date(app.nextStepDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* AI Insights Section */}
        <Card className="mt-8 p-6 bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
          <h3 className="text-xl mb-3">AI Insights & Recommendations</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                Your Google interview is in 7 days. Start preparing with Interview Coach for behavioral questions.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                You haven't followed up on your Figma application in 5 days. Consider sending a polite inquiry.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-gray-700">
                Your Airbnb offer expires in 6 days. Review the compensation package and benefits carefully.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
