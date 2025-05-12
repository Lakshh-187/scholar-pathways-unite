
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, ExternalLink, Star } from 'lucide-react';
import ProjectFilters from '@/components/s700/ProjectFilters';
import FeaturedProject from '@/components/s700/FeaturedProject';

// Type definitions for project data
export type ProjectType = 
  | 'web' 
  | 'mobile' 
  | 'ai' 
  | 'blockchain' 
  | 'iot' 
  | 'research';

export type TechStack = 
  | 'react' 
  | 'node' 
  | 'python' 
  | 'tensorflow' 
  | 'flutter' 
  | 'aws';

export type ImpactArea = 
  | 'education' 
  | 'healthcare' 
  | 'environment' 
  | 'social' 
  | 'finance';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  projectType: ProjectType[];
  techStack: TechStack[];
  impactAreas: ImpactArea[];
  institution: string;
  demoUrl?: string;
  githubUrl?: string;
  pitchDeckUrl?: string;
  featured: boolean;
  createdAt: string;
  rating?: number;
}

// Mock data for projects
const mockProjects: Project[] = [
  {
    id: '1',
    title: 'EduConnect - Classroom Management System',
    description: 'A comprehensive classroom management system with AI-powered student engagement tracking',
    thumbnail: 'https://placehold.co/600x400/9b87f5/FFFFFF?text=EduConnect',
    projectType: ['web', 'ai'],
    techStack: ['react', 'node', 'tensorflow'],
    impactAreas: ['education'],
    institution: 'MIT',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/educonnect',
    pitchDeckUrl: 'https://example.com/pitch',
    featured: true,
    createdAt: '2024-03-15',
    rating: 4.8,
  },
  {
    id: '2',
    title: 'MediTrack - Medical Records on Blockchain',
    description: 'Secure medical records management using blockchain technology with patient-controlled access',
    thumbnail: 'https://placehold.co/600x400/7E69AB/FFFFFF?text=MediTrack',
    projectType: ['blockchain', 'web'],
    techStack: ['react', 'node'],
    impactAreas: ['healthcare'],
    institution: 'Stanford',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/meditrack',
    featured: false,
    createdAt: '2024-02-10',
    rating: 4.7,
  },
  {
    id: '3',
    title: 'GreenSense - IoT Environmental Monitoring',
    description: 'IoT solution for monitoring environmental parameters in urban areas',
    thumbnail: 'https://placehold.co/600x400/6E59A5/FFFFFF?text=GreenSense',
    projectType: ['iot', 'mobile'],
    techStack: ['flutter', 'aws'],
    impactAreas: ['environment'],
    institution: 'Berkeley',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/greensense',
    pitchDeckUrl: 'https://example.com/pitch',
    featured: true,
    createdAt: '2024-01-21',
    rating: 4.5,
  },
  {
    id: '4',
    title: 'FinLit - Financial Literacy App',
    description: 'Mobile app teaching financial literacy to underserved communities',
    thumbnail: 'https://placehold.co/600x400/1EAEDB/FFFFFF?text=FinLit',
    projectType: ['mobile'],
    techStack: ['flutter', 'node'],
    impactAreas: ['finance', 'education', 'social'],
    institution: 'Harvard',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/finlit',
    featured: false,
    createdAt: '2024-03-05',
    rating: 4.9,
  },
  {
    id: '5',
    title: 'SmartFarm - AI-Powered Agricultural Solutions',
    description: 'Using machine learning to optimize crop yields and reduce resource usage',
    thumbnail: 'https://placehold.co/600x400/33C3F0/FFFFFF?text=SmartFarm',
    projectType: ['ai', 'iot'],
    techStack: ['python', 'tensorflow', 'aws'],
    impactAreas: ['environment'],
    institution: 'Cornell',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/smartfarm',
    pitchDeckUrl: 'https://example.com/pitch',
    featured: false,
    createdAt: '2024-02-18',
    rating: 3.9,
  },
  {
    id: '6',
    title: 'AccessLearn - Inclusive Education Platform',
    description: 'Web platform designed for students with disabilities to access educational resources',
    thumbnail: 'https://placehold.co/600x400/9b87f5/FFFFFF?text=AccessLearn',
    projectType: ['web'],
    techStack: ['react', 'node'],
    impactAreas: ['education', 'social'],
    institution: 'Uniford',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/accesslearn',
    featured: true,
    createdAt: '2024-03-10',
    rating: 4.6,
  },
  {
    id: '7',
    title: 'RetailBot AI Agent',
    description: 'Create humanized AI agents capable of empathetic and natural interactions',
    thumbnail: 'https://placehold.co/600x400/3498DB/FFFFFF?text=RetailBot',
    projectType: ['ai', 'web'],
    techStack: ['python', 'tensorflow'],
    impactAreas: ['finance'],
    institution: 'Princeton',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/retailbot',
    featured: false,
    createdAt: '2024-04-10',
    rating: 4.8,
  },
  {
    id: '8',
    title: 'Pipeline AI',
    description: 'Dedicated workspace generator for data model building with drag-and-drop functionality',
    thumbnail: 'https://placehold.co/600x400/2ECC71/FFFFFF?text=Pipeline',
    projectType: ['ai', 'web'],
    techStack: ['python', 'tensorflow'],
    impactAreas: ['education'],
    institution: 'Yale',
    demoUrl: 'https://example.com/demo',
    githubUrl: 'https://github.com/pipelineai',
    featured: false,
    createdAt: '2024-03-22',
    rating: 4.2,
  },
];

const S700 = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<{
    projectType: ProjectType[],
    techStack: TechStack[],
    impactAreas: ImpactArea[],
    institution: string[],
  }>({
    projectType: [],
    techStack: [],
    impactAreas: [],
    institution: [],
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter projects based on search query and active filters
  const filteredProjects = mockProjects.filter(project => {
    // Search filter
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Project type filter
    const matchesProjectType = activeFilters.projectType.length === 0 || 
      project.projectType.some(type => activeFilters.projectType.includes(type));
    
    // Tech stack filter
    const matchesTechStack = activeFilters.techStack.length === 0 || 
      project.techStack.some(tech => activeFilters.techStack.includes(tech));
    
    // Impact areas filter
    const matchesImpactAreas = activeFilters.impactAreas.length === 0 || 
      project.impactAreas.some(area => activeFilters.impactAreas.includes(area));
    
    // Institution filter
    const matchesInstitution = activeFilters.institution.length === 0 || 
      activeFilters.institution.includes(project.institution);
    
    return matchesSearch && matchesProjectType && matchesTechStack && matchesImpactAreas && matchesInstitution;
  });

  // Get featured projects
  const featuredProjects = mockProjects.filter(project => project.featured);

  // Function to handle filter changes
  const handleFilterChange = (filterType: keyof typeof activeFilters, values: any[]) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: values
    }));
  };

  const ProjectCard = ({ project }: { project: Project }) => {
    // Function to render stars based on rating
    const renderRating = (rating: number = 0) => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating - fullStars >= 0.5;
      
      for (let i = 0; i < fullStars; i++) {
        stars.push(<Star key={`full-${i}`} className="w-4 h-4 text-yellow-400 fill-yellow-400" />);
      }
      
      if (hasHalfStar) {
        stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-yellow-400 opacity-50" />);
      }
      
      const remainingStars = 5 - stars.length;
      for (let i = 0; i < remainingStars; i++) {
        stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
      }
      
      return stars;
    };
    
    return (
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardHeader className="p-0">
          <div className="relative h-48 bg-gray-100">
            <img 
              src={project.thumbnail} 
              alt={project.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <Badge variant="outline" className="bg-white/80 backdrop-blur-sm">
                {project.projectType[0]}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex items-center mb-2">
            <div className="flex">{renderRating(project.rating)}</div>
            <span className="text-xs text-gray-500 ml-2">
              {project.rating?.toFixed(1)}
            </span>
            <Badge variant="outline" className="ml-auto text-xs">
              {project.institution}
            </Badge>
          </div>
          <h3 className="font-bold text-lg line-clamp-1">{project.title}</h3>
          <p className="text-sm text-gray-500 line-clamp-2 mt-1 h-10">
            {project.description}
          </p>
        </CardContent>
        <CardFooter className="border-t pt-3 flex justify-between">
          <Button variant="outline" size="sm">
            Details
          </Button>
          <Button size="sm" className="bg-unifor-purple hover:bg-unifor-dark-purple">
            <ExternalLink className="w-4 h-4 mr-1" />
            Visit
          </Button>
        </CardFooter>
      </Card>
    );
  };

  return (
    <Layout>
      <div className="py-8 px-4 md:px-6 lg:px-8 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 text-blue-800 rounded-full p-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">New AI tools</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Latest and new AI tools available for automating processes and improving customer experiences
            </p>
          </div>

          {/* Search and Filter Row */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <Input
                type="search"
                className="pl-10"
                placeholder="Search AI tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="flex gap-4">
              <select 
                className="border rounded-md px-3 py-2 bg-white text-gray-800"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">-- Select a category --</option>
                <option value="ai">AI</option>
                <option value="web">Web</option>
                <option value="mobile">Mobile</option>
              </select>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                  Verified
                </Button>
                <Button variant="outline" size="sm">
                  Free
                </Button>
                <Button variant="outline" size="sm">
                  Premium
                </Button>
                <Button variant="outline" size="sm">
                  Paid
                </Button>
              </div>
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-2 mt-8">
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 flex items-center justify-center bg-blue-600 text-white">
              1
            </Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 flex items-center justify-center">
              2
            </Button>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 flex items-center justify-center">
              3
            </Button>
            <span className="flex items-center px-2">...</span>
            <Button variant="outline" size="sm" className="w-10 h-10 p-0 flex items-center justify-center">
              20
            </Button>
            <Button variant="outline" size="sm" className="w-auto px-3 h-10 flex items-center justify-center">
              Next →
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default S700;
