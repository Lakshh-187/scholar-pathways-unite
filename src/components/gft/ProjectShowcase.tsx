
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Play, Github, Calendar } from 'lucide-react';

const ProjectShowcase = () => {
  const portfolioProjects = [
    {
      id: 1,
      title: "EduTech AI Portal",
      category: "Education",
      description: "Complete institutional software with AI-powered learning management system for universities.",
      image: "/placeholder.svg",
      videoUrl: "https://example.com/video1",
      liveUrl: "https://example.com/project1",
      githubUrl: "https://github.com/example/project1",
      technologies: ["React", "Node.js", "AI/ML", "PostgreSQL"],
      fundingSupport: "65%",
      completionDate: "2024",
      grade: "A+"
    },
    {
      id: 2,
      title: "HealthCare Management System",
      category: "Healthcare",
      description: "Comprehensive healthcare portal with patient management, appointment booking, and telemedicine features.",
      image: "/placeholder.svg",
      videoUrl: "https://example.com/video2",
      liveUrl: "https://example.com/project2",
      technologies: ["Vue.js", "Python", "MongoDB", "WebRTC"],
      fundingSupport: "70%",
      completionDate: "2024",
      grade: "A"
    },
    {
      id: 3,
      title: "Sustainable E-commerce Platform",
      category: "Environment",
      description: "Eco-friendly marketplace connecting sustainable brands with conscious consumers.",
      image: "/placeholder.svg",
      liveUrl: "https://example.com/project3",
      githubUrl: "https://github.com/example/project3",
      technologies: ["Next.js", "Stripe", "Firebase", "Shopify API"],
      fundingSupport: "60%",
      completionDate: "2023",
      grade: "A"
    },
    {
      id: 4,
      title: "NGO Impact Tracker",
      category: "Social Impact",
      description: "Digital platform for non-profits to track and showcase their social impact metrics.",
      image: "/placeholder.svg",
      videoUrl: "https://example.com/video4",
      liveUrl: "https://example.com/project4",
      technologies: ["Angular", "Node.js", "Chart.js", "MySQL"],
      fundingSupport: "75%",
      completionDate: "2023",
      grade: "A+"
    }
  ];

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case 'A+': return 'bg-green-500';
      case 'A': return 'bg-blue-500';
      case 'B+': return 'bg-orange-500';
      case 'B': return 'bg-gray-500';
      default: return 'bg-gray-400';
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">Our Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore the innovative tech solutions we've funded and supported through our GFT program
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {portfolioProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex gap-2">
                    <Badge className={`${getGradeColor(project.grade)} text-white`}>
                      {project.grade}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                </div>
                <p className="text-gray-600">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Funding Support:</span>
                      <p className="font-semibold text-unifor-purple">{project.fundingSupport}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Completed:</span>
                      <p className="font-semibold">{project.completionDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    {project.videoUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="h-4 w-4 mr-1" />
                          Watch Demo
                        </a>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-1" />
                          Live Site
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-1" />
                          Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-unifor-purple rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            These are just a few examples of the innovative projects we've supported. Your tech solution could be next!
          </p>
          <div className="grid md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-yellow-300">150+</div>
              <p className="text-sm text-purple-200">Projects Funded</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">₹2.5Cr+</div>
              <p className="text-sm text-purple-200">Total Funding</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">95%</div>
              <p className="text-sm text-purple-200">Success Rate</p>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-300">50+</div>
              <p className="text-sm text-purple-200">Partner Companies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
