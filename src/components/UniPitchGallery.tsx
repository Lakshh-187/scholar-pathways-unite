
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Image,
  Rocket,
  Lightbulb,
  Award,
  Globe,
  ExternalLink
} from 'lucide-react';

const UniPitchGallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Student Pitch Sessions",
      description: "Students presenting their innovative ideas to industry experts",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80",
      tags: ["Pitch Events", "Student Innovation"]
    },
    {
      id: 2,
      title: "Global Recognition",
      description: "Students receiving awards for their exceptional pitches",
      image: "https://images.unsplash.com/photo-1546422904-90eab23c3d7e?auto=format&fit=crop&q=80",
      tags: ["Awards", "Recognition"]
    },
    {
      id: 3,
      title: "Industry Connections",
      description: "Networking opportunities with industry leaders and mentors",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80",
      tags: ["Networking", "Mentorship"]
    },
    {
      id: 4,
      title: "Project Exhibition",
      description: "Students showcasing their innovative projects to potential investors",
      image: "https://images.unsplash.com/photo-1582213782179-e0d4d3cce4e4?auto=format&fit=crop&q=80",
      tags: ["Project Expo", "Innovation"]
    },
    {
      id: 5,
      title: "Global Opportunities",
      description: "Students gaining access to international platforms and opportunities",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80",
      tags: ["Global Exposure", "Opportunities"]
    },
    {
      id: 6,
      title: "Success Stories",
      description: "Alumni who leveraged Uni-Pitch for remarkable career growth",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80",
      tags: ["Success", "Alumni"]
    }
  ];

  const pitchSuccessStories = [
    {
      name: "Arjun Sharma",
      institution: "Delhi Technical University",
      pitchType: "Tech Innovation",
      outcome: "Secured $50,000 funding for AI startup",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80"
    },
    {
      name: "Priya Malhotra",
      institution: "Bangalore Institute of Technology",
      pitchType: "Social Initiative",
      outcome: "Featured in Forbes 30 Under 30 list",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
    },
    {
      name: "Ahmed Khan",
      institution: "IIT Madras",
      pitchType: "Research Project",
      outcome: "Published in Nature journal with industry collaboration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            SUCCESS SHOWCASE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            Uni-Pitch Success Gallery
          </h2>
          <p className="text-lg text-gray-600">
            Explore the inspiring journeys and achievements of students who transformed their potential through Uni-Pitch.
          </p>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pitchSuccessStories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 text-white">
                  <h3 className="text-xl font-bold">{story.name}</h3>
                  <p className="text-sm text-gray-300">{story.institution}</p>
                </div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-unifor-purple text-white">{story.pitchType}</Badge>
                </div>
                <div className="flex items-start gap-2">
                  <Rocket className="h-5 w-5 text-unifor-purple mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{story.outcome}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="bg-unifor-light-purple/20 text-unifor-dark-purple">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Be Our Next Success Story?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Submit your pitch today and start your journey towards global recognition and unprecedented opportunities.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <a href="#" className="inline-flex items-center gap-2 bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 rounded-lg transition-colors">
              <Rocket className="h-5 w-5" />
              Submit Your Pitch
            </a>
            <a href="#" className="inline-flex items-center gap-2 border border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/20 px-8 py-3 rounded-lg transition-colors">
              <Award className="h-5 w-5" />
              Explore Success Stories
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniPitchGallery;
