
import React, { useState } from 'react';
import { Search, FileText, Video, Book, Users, FileCheck } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Resource types and their corresponding icons
const resourceTypes = [
  { id: 'visa-guide', label: 'Visa Guide', icon: FileText },
  { id: 'resume', label: 'Resume Templates', icon: FileCheck },
  { id: 'videos', label: 'Experience Videos', icon: Video },
  { id: 'ebooks', label: 'eBooks/Docs', icon: Book },
  { id: 'mentorship', label: 'Mentorship Contacts', icon: Users },
];

// Sample resources data
const resources = [
  {
    id: 1,
    title: 'Complete H-1B Filing Guide 2025',
    type: 'visa-guide',
    uploader: 'Jane Smith',
    isAlumni: true,
    description: 'Step-by-step guide to filing H-1B petitions with updated 2025 regulations and tips.',
  },
  {
    id: 2,
    title: 'Tech Resume Template - FAANG Approved',
    type: 'resume',
    uploader: 'Mike Johnson',
    isAlumni: true,
    description: 'Resume template optimized for tech roles that helped 20+ alumni land jobs at top companies.',
  },
  {
    id: 3,
    title: 'My H-1B Interview Experience',
    type: 'videos',
    uploader: 'Sarah Chen',
    isAlumni: true,
    description: 'Watch my detailed experience with the visa interview process and preparation tips.',
  },
  {
    id: 4,
    title: 'Job Search Strategies for International Students',
    type: 'ebooks',
    uploader: 'Raj Patel',
    isAlumni: false,
    description: 'Comprehensive guide on finding jobs that sponsor visas in the current market.',
  },
  {
    id: 5,
    title: 'H-1B Mentorship Network',
    type: 'mentorship',
    uploader: 'H-1B Alumni Group',
    isAlumni: true,
    description: 'Connect with alumni who have successfully navigated the H-1B process.',
  },
  {
    id: 6,
    title: 'OPT to H-1B Transition Guide',
    type: 'visa-guide',
    uploader: 'Carlos Rodriguez',
    isAlumni: true,
    description: 'Learn how to successfully transition from OPT to H-1B status with timeline and checklist.',
  },
];

const ResourceExplorer = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredResources = resources.filter(resource => {
    const matchesType = selectedType === null || resource.type === selectedType;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const getIconForType = (type: string) => {
    const resourceType = resourceTypes.find(t => t.id === type);
    const Icon = resourceType?.icon || FileText;
    return <Icon className="h-5 w-5" />;
  };

  return (
    <section className="py-16 bg-gray-50" id="explore-resources">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Explore Donated Resources
        </h2>
        
        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search resources..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge 
              variant={selectedType === null ? "default" : "outline"}
              className="cursor-pointer text-sm py-2 px-3"
              onClick={() => setSelectedType(null)}
            >
              All Resources
            </Badge>
            
            {resourceTypes.map((type) => (
              <Badge
                key={type.id}
                variant={selectedType === type.id ? "default" : "outline"}
                className="cursor-pointer text-sm py-2 px-3"
                onClick={() => setSelectedType(type.id === selectedType ? null : type.id)}
              >
                <type.icon className="h-4 w-4 mr-1" />
                {type.label}
              </Badge>
            ))}
          </div>
        </div>
        
        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <Card key={resource.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <Badge className="bg-unifor-light-purple text-unifor-dark-purple">
                    {getIconForType(resource.type)}
                    <span className="ml-1">
                      {resourceTypes.find(t => t.id === resource.type)?.label}
                    </span>
                  </Badge>
                  {resource.isAlumni && (
                    <Badge variant="outline" className="border-unifor-dark-purple text-unifor-dark-purple">
                      Alumni
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {resource.description}
                </p>
                <p className="text-sm text-gray-500">
                  Shared by: {resource.uploader}
                </p>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              No resources found. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResourceExplorer;
