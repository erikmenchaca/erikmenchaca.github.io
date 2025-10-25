import { MoreVertical, LayoutGrid, Share2, FileText, CheckCircle2, XCircle, Eye, Video } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function InsightAgent() {
  const applicationStages = [
    {
      title: 'Submit',
      count: 3,
      icon: FileText,
      color: 'bg-purple-100',
      textColor: 'text-purple-600',
      status: 'apply',
      statusColor: 'bg-purple-500'
    },
    {
      title: 'Confirmation',
      count: 2,
      icon: CheckCircle2,
      color: 'bg-green-100',
      textColor: 'text-green-600',
      status: 'Success',
      statusColor: 'bg-green-500'
    },
    {
      title: 'Decline',
      count: 2,
      icon: XCircle,
      color: 'bg-red-100',
      textColor: 'text-red-600',
      status: 'Fail',
      statusColor: 'bg-red-500'
    },
    {
      title: 'Review',
      count: 3,
      icon: Eye,
      color: 'bg-pink-100',
      textColor: 'text-pink-600',
      status: 'View',
      statusColor: 'bg-pink-500'
    },
    {
      title: 'Virtual Interview',
      count: 1,
      icon: Video,
      color: 'bg-blue-100',
      textColor: 'text-blue-600',
      status: 'Case study',
      statusColor: 'bg-blue-500'
    }
  ];

  const jobs = [
    { name: 'Google Jobs', category: 'Financial services', jobType: 'Full time', amount: '$45000-$48000', location: 'Boston, USA', company: 'Google' },
    { name: 'Nvidia Jobs', category: 'Financial services', jobType: 'Full time', amount: '$45000-$48000', location: 'Boston, USA', company: 'Google' },
    { name: 'Meta Jobs', category: 'Financial services', jobType: 'Full time', amount: '$45000-$48000', location: 'Boston, USA', company: 'Google' },
    { name: 'Microsoft Jobs', category: 'Financial services', jobType: 'Full time', amount: '$45000-$48000', location: 'Boston, USA', company: 'Google' },
  ];

  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>All Files</span>
            <span>/</span>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <LayoutGrid className="mr-2 h-4 w-4" />
                  Board
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Board View</DropdownMenuItem>
                <DropdownMenuItem>List View</DropdownMenuItem>
                <DropdownMenuItem>Table View</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
        <h1 className="text-4xl">Insight Agent</h1>
      </div>

      {/* Application Status Cards */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Button variant="secondary" size="sm">
            Application
          </Button>
          <Badge variant="secondary" className="rounded-full">2</Badge>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-8">
          {applicationStages.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <Card key={index} className={`${stage.color} border-0 p-4`}>
                <div className="flex items-start justify-between mb-4">
                  <Icon className={`h-6 w-6 ${stage.textColor}`} />
                  <span className="text-2xl">{stage.count}</span>
                </div>
                <h3 className={`mb-2 ${stage.textColor}`}>{stage.title}</h3>
                <Badge className={`${stage.statusColor} text-white hover:${stage.statusColor}/90`}>
                  {stage.status}
                </Badge>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Jobs Table */}
      <div className="bg-white rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Job Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Job type</TableHead>
              <TableHead>Ammount</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>company</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {jobs.map((job, index) => (
              <TableRow key={index} className="cursor-pointer hover:bg-gray-50">
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      index === 0 ? 'bg-purple-100 text-purple-600' : 
                      index === 1 ? 'bg-purple-100 text-purple-600' : 
                      index === 2 ? 'bg-purple-100 text-purple-600' : 
                      'bg-purple-100 text-purple-600'
                    }`}>
                      <FileText className="h-4 w-4" />
                    </div>
                    <span>{job.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-purple-600">
                    <Briefcase className="h-4 w-4" />
                    <span>{job.category}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-purple-600">
                    <Clock className="h-4 w-4" />
                    <span>{job.jobType}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-purple-600">
                    <DollarSign className="h-4 w-4" />
                    <span>{job.amount}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-purple-600">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-purple-600">
                    <Building2 className="h-4 w-4" />
                    <span>{job.company}</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// Import missing icons
import { Briefcase, Clock, DollarSign, MapPin, Building2 } from 'lucide-react';
