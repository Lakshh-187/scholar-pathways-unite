
import React, { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import OpportunityCard from '@/components/career/OpportunityCard';
import JobDetailModal from '@/components/career/JobDetailModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define job types
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

// Sample job data
const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: 'Frontend Developer',
    department: 'Tech',
    location: 'Remote',
    experience: 'Mid',
    status: 'Open',
    type: 'Full-Time',
    responsibilities: [
      'Build responsive user interfaces using React',
      'Collaborate with UX designers to implement designs',
      'Optimize applications for maximum speed and scalability',
      'Write clean, maintainable code with proper documentation'
    ],
    reportingTo: 'Engineering Manager',
    collaboration: 'Works closely with Product, Design, and Backend teams',
    salary: '$80,000 - $110,000',
    benefits: ['Health Insurance', 'Remote Work', 'Learning Budget', 'Flexible Hours']
  },
  {
    id: 2,
    title: 'Content Marketing Specialist',
    department: 'Marketing',
    location: 'In-Office',
    experience: 'Fresher',
    status: 'Open',
    type: 'Full-Time',
    responsibilities: [
      'Create engaging content for blogs, social media, and newsletters',
      'Analyze content performance metrics',
      'Research industry trends and competitor strategies',
      'Collaborate on marketing campaigns and initiatives'
    ],
    reportingTo: 'Marketing Director',
    collaboration: 'Works with social media team, designers, and product marketing',
    salary: '$50,000 - $65,000',
    benefits: ['Health Insurance', 'In-Office Perks', 'Training Programs']
  },
  {
    id: 3,
    title: 'HR Manager',
    department: 'HR',
    location: 'In-Office',
    experience: 'Lead',
    status: 'Open',
    type: 'Full-Time',
    responsibilities: [
      'Oversee recruitment and onboarding processes',
      'Manage employee relations and conflict resolution',
      'Develop and implement HR policies and procedures',
      'Lead performance management initiatives'
    ],
    reportingTo: 'Chief People Officer',
    collaboration: 'Works with all department heads and leadership team',
    salary: '$90,000 - $120,000',
    benefits: ['Health Insurance', 'Leadership Training', 'Stock Options', 'Wellness Programs']
  },
  {
    id: 4,
    title: 'Operations Coordinator',
    department: 'Operations',
    location: 'Remote',
    experience: 'Fresher',
    status: 'Open',
    type: 'Full-Time',
    responsibilities: [
      'Coordinate daily operational activities',
      'Maintain operational records and prepare reports',
      'Assist in process improvement initiatives',
      'Support team members with administrative tasks'
    ],
    reportingTo: 'Operations Manager',
    collaboration: 'Coordinates with all internal teams for operational support',
    salary: '$45,000 - $60,000',
    benefits: ['Remote Work', 'Flexible Hours', 'Learning Opportunities']
  },
  {
    id: 5,
    title: 'Backend Developer',
    department: 'Tech',
    location: 'Remote',
    experience: 'Mid',
    status: 'Open',
    type: 'Full-Time',
    responsibilities: [
      'Design and implement server-side applications',
      'Optimize database queries and performance',
      'Develop APIs and backend services',
      'Ensure data security and compliance'
    ],
    reportingTo: 'Engineering Manager',
    collaboration: 'Works with frontend developers, DevOps, and product managers',
    salary: '$85,000 - $115,000',
    benefits: ['Remote Work', 'Health Insurance', 'Stock Options', 'Conferences']
  },
  {
    id: 6,
    title: 'UX/UI Design Intern',
    department: 'Tech',
    location: 'In-Office',
    experience: 'Fresher',
    status: 'Open',
    type: 'Intern',
    responsibilities: [
      'Assist in user research and usability testing',
      'Create wireframes and prototypes',
      'Support the design team on various projects',
      'Learn design systems and processes'
    ],
    reportingTo: 'Senior Designer',
    collaboration: 'Works with the design team and product managers',
    salary: '$20-25/hour',
    benefits: ['Learning Opportunities', 'Mentorship', 'Portfolio Development']
  }
];

const OpportunityGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    department: 'all',
    location: 'all',
    experience: 'all'
  });
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Filter jobs based on search term and filters
  const filteredJobs = jobPositions.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDepartment = filters.department === 'all' || job.department === filters.department;
    const matchesLocation = filters.location === 'all' || job.location === filters.location;
    const matchesExperience = filters.experience === 'all' || job.experience === filters.experience;
    
    return matchesSearch && matchesDepartment && matchesLocation && matchesExperience;
  });
  
  const handleViewDetails = (job: JobPosition) => {
    setSelectedJob(job);
    setIsModalOpen(true);
  };
  
  const resetFilters = () => {
    setFilters({
      department: 'all',
      location: 'all',
      experience: 'all'
    });
    setSearchTerm('');
  };

  return (
    <section className="py-16 bg-gray-50" id="open-roles">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
        
        <div className="mb-8 flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-grow max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search by title or department..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={resetFilters}
            >
              <X size={16} />
              Reset
            </Button>
            
            <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-300">
              {filteredJobs.length} positions
            </Badge>
          </div>
        </div>
        
        <Tabs defaultValue="all" className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium flex items-center gap-2">
              <Filter size={18} />
              Filter by:
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <h4 className="font-medium mb-2 text-sm text-gray-600">Department</h4>
              <TabsList className="bg-gray-100 w-full justify-start flex-wrap">
                <TabsTrigger 
                  value="all"
                  onClick={() => setFilters({...filters, department: 'all'})}
                  className={filters.department === 'all' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="tech"
                  onClick={() => setFilters({...filters, department: 'Tech'})}
                  className={filters.department === 'Tech' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  Tech
                </TabsTrigger>
                <TabsTrigger 
                  value="marketing"
                  onClick={() => setFilters({...filters, department: 'Marketing'})}
                  className={filters.department === 'Marketing' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  Marketing
                </TabsTrigger>
                <TabsTrigger 
                  value="hr"
                  onClick={() => setFilters({...filters, department: 'HR'})}
                  className={filters.department === 'HR' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  HR
                </TabsTrigger>
                <TabsTrigger 
                  value="operations"
                  onClick={() => setFilters({...filters, department: 'Operations'})}
                  className={filters.department === 'Operations' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  Operations
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-sm text-gray-600">Location</h4>
              <TabsList className="bg-gray-100 w-full justify-start">
                <TabsTrigger 
                  value="all-locations"
                  onClick={() => setFilters({...filters, location: 'all'})}
                  className={filters.location === 'all' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="remote"
                  onClick={() => setFilters({...filters, location: 'Remote'})}
                  className={filters.location === 'Remote' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  Remote
                </TabsTrigger>
                <TabsTrigger 
                  value="in-office"
                  onClick={() => setFilters({...filters, location: 'In-Office'})}
                  className={filters.location === 'In-Office' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  In-Office
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div>
              <h4 className="font-medium mb-2 text-sm text-gray-600">Experience Level</h4>
              <TabsList className="bg-gray-100 w-full justify-start">
                <TabsTrigger 
                  value="all-exp"
                  onClick={() => setFilters({...filters, experience: 'all'})}
                  className={filters.experience === 'all' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  All
                </TabsTrigger>
                <TabsTrigger 
                  value="fresher"
                  onClick={() => setFilters({...filters, experience: 'Fresher'})}
                  className={filters.experience === 'Fresher' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  Fresher
                </TabsTrigger>
                <TabsTrigger 
                  value="mid"
                  onClick={() => setFilters({...filters, experience: 'Mid'})}
                  className={filters.experience === 'Mid' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  Mid-Level
                </TabsTrigger>
                <TabsTrigger 
                  value="lead"
                  onClick={() => setFilters({...filters, experience: 'Lead'})}
                  className={filters.experience === 'Lead' ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}
                >
                  Lead
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
        </Tabs>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map(job => (
              <OpportunityCard 
                key={job.id}
                job={job}
                onViewDetails={() => handleViewDetails(job)}
              />
            ))
          ) : (
            <div className="col-span-full p-8 text-center bg-white rounded-lg border border-gray-200">
              <p className="text-gray-500 mb-4">No positions match your current filters</p>
              <Button variant="outline" onClick={resetFilters}>Reset Filters</Button>
            </div>
          )}
        </div>
      </div>
      
      {selectedJob && (
        <JobDetailModal 
          job={selectedJob}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default OpportunityGrid;
