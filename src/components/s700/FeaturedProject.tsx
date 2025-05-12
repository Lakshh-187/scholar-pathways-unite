
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '@/pages/S700';

interface FeaturedProjectProps {
  project: Project;
  compact?: boolean;
}

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ project, compact = false }) => {
  if (!project) return null;
  
  return (
    <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 ${compact ? '' : 'md:flex'}`}>
      <div className={`${compact ? 'aspect-video' : 'md:w-2/5'} overflow-hidden`}>
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className={`${compact ? '' : 'md:w-3/5'} flex flex-col`}>
        <CardHeader className="pb-2">
          <CardTitle className={`${compact ? 'text-xl' : 'text-2xl'}`}>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.projectType.map(type => (
              <Badge key={type} className="bg-violet-100 text-violet-800 hover:bg-violet-200 border-0">
                {type}
              </Badge>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1">{project.institution} • {new Date(project.createdAt).toLocaleDateString()}</p>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-gray-700">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-1 mt-3">
            {project.techStack.map(tech => (
              <Badge key={tech} variant="outline" className="text-gray-600">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-1 mt-3">
            {project.impactAreas.map(area => (
              <Badge key={area} variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-0">
                {area}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between gap-2 border-t pt-4">
          {project.demoUrl && (
            <Button asChild className="flex-1 bg-unifor-purple hover:bg-unifor-dark-purple">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-1" />
                View Demo
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button asChild variant="outline" className="flex-1">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} className="mr-1" />
                View Code
              </a>
            </Button>
          )}
          {project.pitchDeckUrl && (
            <Button asChild variant="outline" className="flex-1">
              <a href={project.pitchDeckUrl} target="_blank" rel="noopener noreferrer">
                View Pitch Deck
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};

export default FeaturedProject;
