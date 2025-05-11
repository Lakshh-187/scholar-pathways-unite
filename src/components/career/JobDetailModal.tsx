
import React, { useState } from 'react';
import { X, Building, Users, GitBranch, DollarSign, Briefcase, Check } from 'lucide-react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ApplicationForm from '@/components/career/ApplicationForm';
import PortfolioGuide from '@/components/career/PortfolioGuide';

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

interface JobDetailModalProps {
  job: JobPosition;
  isOpen: boolean;
  onClose: () => void;
}

const JobDetailModal: React.FC<JobDetailModalProps> = ({ job, isOpen, onClose }) => {
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[85vh] overflow-y-auto">
        {!showApplicationForm ? (
          <>
            <DialogHeader>
              <div className="flex justify-between items-start">
                <div>
                  <DialogTitle className="text-2xl font-bold">{job.title}</DialogTitle>
                  <DialogDescription className="flex items-center mt-1">
                    <Badge className="mr-2 bg-unifor-blue">{job.type}</Badge>
                    <span className="text-muted-foreground">{job.department} • {job.location}</span>
                  </DialogDescription>
                </div>
                <Button variant="ghost" size="icon" onClick={onClose} className="mt-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </DialogHeader>
            
            <div className="space-y-6 py-4">
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Briefcase className="mr-2 h-5 w-5 text-unifor-blue" />
                  Roles & Responsibilities
                </h3>
                <ul className="space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <GitBranch className="mr-2 h-5 w-5 text-unifor-blue" />
                    Reporting Structure
                  </h3>
                  <p className="text-muted-foreground">{job.reportingTo}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-unifor-blue" />
                    Team Collaboration
                  </h3>
                  <p className="text-muted-foreground">{job.collaboration}</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-unifor-blue" />
                  Salary & Incentives
                </h3>
                <p className="text-muted-foreground">{job.salary}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Building className="mr-2 h-5 w-5 text-unifor-blue" />
                  Company Benefits
                </h3>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map((benefit, index) => (
                    <Badge key={index} variant="outline" className="bg-gray-50">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <PortfolioGuide />
            </div>
            
            <DialogFooter>
              <Button
                onClick={() => setShowApplicationForm(true)}
                className="bg-unifor-blue hover:bg-blue-700"
              >
                Apply for this position
              </Button>
            </DialogFooter>
          </>
        ) : (
          <ApplicationForm 
            jobTitle={job.title} 
            onBack={() => setShowApplicationForm(false)}
            onClose={onClose}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default JobDetailModal;
