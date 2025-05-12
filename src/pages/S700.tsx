
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';
import ProjectCard from '@/components/s700/ProjectCard';
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

  return (
    <Layout>
      <div className="pt-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white min-h-screen">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">S-700 Project Portal</h1>
          <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-3xl">
            Discover innovative student projects, pitch decks, demos, and research from the brightest minds across institutions.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <div className="absolute inset-y-0 start-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-500" />
            </div>
            <Input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-unifor-purple focus:border-unifor-purple"
              placeholder="Search projects, technologies, or institutions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button className="absolute end-2.5 bottom-2.5 bg-unifor-purple hover:bg-unifor-dark-purple">
              Search
            </Button>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-1/4">
              <ProjectFilters 
                activeFilters={activeFilters}
                onFilterChange={handleFilterChange}
              />
            </div>
            
            {/* Main Content */}
            <div className="lg:w-3/4">
              {/* Featured Project */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Pitch of the Month</h2>
                <FeaturedProject project={featuredProjects[0]} />
              </section>
              
              {/* Featured Demos */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6 text-slate-900">Featured Demos</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {featuredProjects.slice(0, 2).map(project => (
                    <FeaturedProject key={project.id} project={project} compact />
                  ))}
                </div>
              </section>
              
              {/* All Projects */}
              <section>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">Top Student Projects</h2>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="bg-white">
                      {filteredProjects.length} projects
                    </Badge>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {filteredProjects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                  ))}
                </div>
                
                {filteredProjects.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-lg text-gray-500">No projects found matching your filters.</p>
                    <Button 
                      className="mt-4 bg-unifor-purple hover:bg-unifor-dark-purple"
                      onClick={() => {
                        setSearchQuery('');
                        setActiveFilters({
                          projectType: [],
                          techStack: [],
                          impactAreas: [],
                          institution: [],
                        });
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default S700;
