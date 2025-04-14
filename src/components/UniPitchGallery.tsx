
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket } from "lucide-react";

const UniPitchGallery = () => {
  const pitchSuccessStories = [
    {
      name: "Arjun Sharma",
      institution: "Delhi Technical University",
      pitchType: "Tech Innovation",
      outcome: "Secured $50,000 funding for AI startup",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&q=80",
    },
    {
      name: "Priya Malhotra",
      institution: "Bangalore Institute of Technology",
      pitchType: "Social Initiative",
      outcome: "Featured in Forbes 30 Under 30 list",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
    },
    {
      name: "Ahmed Khan",
      institution: "IIT Madras",
      pitchType: "Research Project",
      outcome: "Published in Nature journal with industry collaboration",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
    },
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            SUCCESS SHOWCASE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">Uni-Pitch Success Gallery</h2>
          <p className="text-lg text-gray-600">Explore the inspiring journeys and achievements of students who transformed their potential through Uni-Pitch.</p>
        </div>

        {/* Success Stories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pitchSuccessStories.map((story, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
              <div className="relative h-64 overflow-hidden">
                <img src={story.image} alt={story.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
      </div>
    </div>
  );
}; 

export default UniPitchGallery;
