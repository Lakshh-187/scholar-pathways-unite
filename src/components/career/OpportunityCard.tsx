
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { BriefcaseBusiness, MapPin, BadgeCheck } from 'lucide-react';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  experience: string;
  status: 'Open' | 'Closed';
  type: string;
  responsibilities: string[];
  reportingTo: string;
  collaboration: string;
  salary: string;
  benefits: string[];
}

interface OpportunityCardProps {
  job: JobPosition;
  onViewDetails: () => void;
}

const OpportunityCard: React.FC<OpportunityCardProps> = ({ job, onViewDetails }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="mb-4">
          <Badge 
            variant={job.status === 'Open' ? 'default' : 'outline'}
            className={job.status === 'Open' ? 'bg-green-500' : 'text-gray-500 border-gray-300'}
          >
            {job.status}
          </Badge>
        </div>
        
        <h3 className="text-xl font-bold mb-2">{job.title}</h3>
        
        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <BriefcaseBusiness className="mr-2 h-4 w-4" />
            <span>{job.department} • {job.experience} • {job.type}</span>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4" />
            <span>{job.location}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between items-center">
        <div className="flex items-center text-sm font-medium">
          <BadgeCheck className="mr-1 h-4 w-4 text-unifor-blue" />
          <span>{job.benefits.length} benefits</span>
        </div>
        <Button 
          onClick={onViewDetails}
          variant="outline"
          className="border-unifor-blue text-unifor-blue hover:bg-unifor-blue/10"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default OpportunityCard;
