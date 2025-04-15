
import React from 'react';
import { 
  Laptop, 
  Flask, 
  Robot, 
  BookOpen, 
  Database,
  Store,
  Building,
  PresentationScreen,
  Microscope
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UGIEPSection = () => {
  const stages = [
    {
      title: "Stage 1: Digital Foundation",
      description: "Implementing core digital infrastructure",
      features: [
        { icon: <Laptop className="h-6 w-6" />, text: "AI Integration" },
        { icon: <Database className="h-6 w-6" />, text: "Digital Infrastructure" },
        { icon: <Store className="h-6 w-6" />, text: "Digital Store & Portals" }
      ]
    },
    {
      title: "Stage 2: Program Implementation",
      description: "Establishing educational programs and initiatives",
      features: [
        { icon: <PresentationScreen className="h-6 w-6" />, text: "Uni-talks & Uni-pitch" },
        { icon: <Flask className="h-6 w-6" />, text: "STEM Labs" },
        { icon: <Building className="h-6 w-6" />, text: "Training Programs" }
      ]
    },
    {
      title: "Stage 3: Advanced Infrastructure",
      description: "Creating specialized learning environments",
      features: [
        { icon: <Robot className="h-6 w-6" />, text: "Robotics Labs" },
        { icon: <Microscope className="h-6 w-6" />, text: "Innovation Labs" },
        { icon: <BookOpen className="h-6 w-6" />, text: "Modern Library" }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-unifor-dark-purple mb-4">
            Uniford Grants for Institutional Empowerment Program (UGIEP)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive three-stage transformation program to establish modern 
            educational infrastructure and empower institutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stages.map((stage, index) => (
            <Card key={index} className="relative overflow-hidden border-2 border-unifor-light-purple">
              <div className="absolute top-0 right-0 m-4">
                <Badge variant="secondary">Stage {index + 1}</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-unifor-dark-purple">
                  {stage.title}
                </CardTitle>
                <p className="text-gray-600">{stage.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {stage.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <div className="p-2 bg-unifor-light-purple/20 rounded-lg text-unifor-purple">
                        {feature.icon}
                      </div>
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UGIEPSection;
