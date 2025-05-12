
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { Project } from '@/pages/S700';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200 h-full flex flex-col">
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{project.title}</CardTitle>
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
      </CardContent>
      <CardFooter className="flex justify-between gap-2 border-t pt-4">
        {project.demoUrl && (
          <Button asChild variant="outline" className="flex-1">
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          </Button>
        )}
        {project.githubUrl && (
          <Button asChild variant="outline" className="flex-1">
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-1" />
              Code
            </a>
          </Button>
        )}
        {project.pitchDeckUrl && (
          <Button asChild variant="outline" className="flex-1 bg-unifor-purple text-white hover:bg-unifor-dark-purple">
            <a href={project.pitchDeckUrl} target="_blank" rel="noopener noreferrer">
              Pitch
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
