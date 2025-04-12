
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Book, Globe, Layers, Database } from 'lucide-react';

export const UIRADIntro = () => {
  const components = [
    {
      title: "Uni-Pitch",
      subtitle: "Global Student Connector",
      color: "bg-green-100 text-green-700",
      icon: <Layers className="h-8 w-8 text-green-600" />,
      description: "Bridges the gap between students and global opportunities by allowing them to pitch queries, skills, and projects."
    },
    {
      title: "SEP-700",
      subtitle: "Student Opportunity Portal",
      color: "bg-blue-100 text-blue-700",
      icon: <Database className="h-8 w-8 text-blue-600" />,
      description: "AI-powered one-stop portal that connects students to scholarships, global internships, competitions, and career programs."
    },
    {
      title: "UIRAD",
      subtitle: "Uniford International Research & Academic Development",
      color: "bg-yellow-100 text-yellow-700",
      icon: <Globe className="h-8 w-8 text-yellow-600" />,
      description: "Research-driven academic innovation hub that focuses on upgrading institutes with international curriculum, research, and engagement programs."
    }
  ];

  return (
    <div className="mb-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-unifor-dark-purple">Transforming Institutes to International Standards</h2>
      <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
        The collaboration of Uni-Pitch, SEP-700, and UIRAD creates a powerful ecosystem that connects students and institutes with world-class opportunities, research, and platforms, making institutes globally recognized.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6">
        {components.map((component, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-all duration-300">
            <CardHeader className={`rounded-t-lg ${component.color} pb-4`}>
              <div className="flex justify-center items-center mb-2">
                {component.icon}
              </div>
              <CardTitle className="text-xl text-center">
                {component.title}
                <span className="block text-sm font-normal mt-1">{component.subtitle}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5">
              <p className="text-gray-600">{component.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
