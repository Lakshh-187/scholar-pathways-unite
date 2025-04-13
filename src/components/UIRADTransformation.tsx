
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Building,
  Globe,
  Award,
  Users,
  Rocket,
  BookOpen,
  GraduationCap,
  Coins
} from 'lucide-react';

export const UIRADTransformation = () => {
  const transformationAreas = [
    {
      icon: <Coins className="h-6 w-6 text-yellow-600" />,
      title: "CSR Grants & Funding",
      description: "Connect institutes with corporate grants & funded projects to boost infrastructure & innovation.",
      emoji: "💰"
    },
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: "International Clubs & Societies",
      description: "Help institutes establish global student organizations & programs on campus.",
      emoji: "🌍"
    },
    {
      icon: <Award className="h-6 w-6 text-purple-600" />,
      title: "TEDx, Awards & Conferences",
      description: "Recommend institutions for TEDx, global awards, and prestigious conferences.",
      emoji: "🏆"
    },
    {
      icon: <Users className="h-6 w-6 text-green-600" />,
      title: "Connect with Philanthropists & Scholars",
      description: "Bring top industry experts & scholars to conduct workshops and mentorship sessions.",
      emoji: "👥"
    },
    {
      icon: <Rocket className="h-6 w-6 text-red-600" />,
      title: "Implement Hackathon & Challenge Innovations",
      description: "Support institutions in executing winning projects from hackathons & competitions.",
      emoji: "🚀"
    },
    {
      icon: <Globe className="h-6 w-6 text-teal-600" />,
      title: "Student International Collaboration",
      description: "Facilitate cross-border collaboration with international students for projects & activities.",
      emoji: "🌐"
    },
    {
      icon: <Award className="h-6 w-6 text-amber-600" />,
      title: "Highlighting Achievements",
      description: "Showcase institutional innovations, achievements & impact to attract global opportunities.",
      emoji: "🏅"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-600" />,
      title: "SEP-700 Program for Students",
      description: "Special institutional programs designed to empower students & build credibility.",
      emoji: "🎓"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            IEP-X TRANSFORMATION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            How IEP-X Transforms Institutions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our Institutional Enhancement Program (IEP-X) helps educational institutions 
            <span className="font-bold text-unifor-dark-purple"> transform</span> and reach
            <span className="font-bold text-unifor-dark-purple"> international standards</span> through
            comprehensive support and resources.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-unifor-dark-purple text-white p-6 flex items-center justify-center">
              <h3 className="text-2xl font-bold">Key Areas <span className="text-yellow-300">💡</span></h3>
            </div>
            <div className="bg-unifor-dark-purple text-white p-6 flex items-center justify-center">
              <h3 className="text-2xl font-bold">How We Empower Institutes? <span className="text-yellow-300">💪</span></h3>
            </div>
          </div>

          {transformationAreas.map((area, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
              <div className="p-5 flex items-center gap-4 bg-gray-50 border-r border-gray-200">
                <div className="text-2xl">{area.emoji}</div>
                <div className="font-medium text-gray-800">{area.title}</div>
              </div>
              <div className="p-5 bg-white">
                <p className="text-gray-700">{area.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto border-2 border-unifor-light-purple">
            <CardContent className="pt-6">
              <Building className="h-12 w-12 text-unifor-purple mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3 text-unifor-dark-purple">Transform Your Institution Today</h3>
              <p className="text-gray-600 mb-6">
                Join the growing network of educational institutions that have achieved 
                <span className="font-bold text-unifor-dark-purple"> international recognition</span> through our 
                <span className="font-bold text-unifor-dark-purple"> transformation</span> programs, all without
                financial barriers.
              </p>
              <div className="flex justify-center">
                <button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center gap-2">
                  <Building className="h-5 w-5" />
                  Partner With Uniford
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UIRADTransformation;
