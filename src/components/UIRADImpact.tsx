
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Rocket, School, Globe, Users } from 'lucide-react';

export const UIRADImpact = () => {
  const impacts = [
    {
      title: "Transforms Institutes into Global Hubs of Excellence",
      icon: <Globe className="h-10 w-10 text-unifor-purple" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Increases Institute Ranking & Reputation",
      icon: <Award className="h-10 w-10 text-unifor-purple" />,
      color: "bg-indigo-50 border-indigo-200"
    },
    {
      title: "Attracts More Students & Industry Collaborations",
      icon: <Users className="h-10 w-10 text-unifor-purple" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Boosts Placements, Internships & Career Growth for Students",
      icon: <Rocket className="h-10 w-10 text-unifor-purple" />,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Creates a Sustainable Student-Centric Ecosystem",
      icon: <School className="h-10 w-10 text-unifor-purple" />,
      color: "bg-yellow-50 border-yellow-200"
    }
  ];

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-8 text-unifor-dark-purple">The Ultimate Impact on Institutes</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {impacts.map((impact, index) => (
          <Card key={index} className={`border-2 shadow-md hover:shadow-lg transition-all duration-300 ${impact.color}`}>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="mb-4">
                {impact.icon}
              </div>
              <p className="font-medium text-gray-800">{impact.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold text-unifor-dark-purple mb-4">Ready to Transform Your Institute?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Connect with Uniford Foundation to bring the power of Uni-Pitch, SEP-700, and UIRAD to your educational institution.
        </p>
        <button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 rounded-lg font-medium transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
};
