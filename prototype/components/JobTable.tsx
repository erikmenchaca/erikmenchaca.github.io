import { Building2, Briefcase, Clock, DollarSign, MapPin, CircleDot } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

interface Job {
  name: string;
  category: string;
  jobType: string;
  amount: string;
  location: string;
  company: string;
}

interface JobTableProps {
  jobs: Job[];
}

export function JobTable({ jobs }: JobTableProps) {
  return (
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
                <CircleDot className="h-4 w-4 text-purple-500" />
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
              <div className="flex items-center gap-2 text-gray-600">
                <Clock className="h-4 w-4" />
                <span>{job.jobType}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2 text-gray-600">
                <DollarSign className="h-4 w-4" />
                <span>{job.amount}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>{job.location}</span>
              </div>
            </TableCell>
            <TableCell>
              <div className="flex items-center gap-2 text-gray-600">
                <Building2 className="h-4 w-4" />
                <span>{job.company}</span>
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
