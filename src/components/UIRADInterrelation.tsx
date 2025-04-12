
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Globe, Rocket, School, Users, BookOpen, Briefcase, Trophy } from 'lucide-react';

export const UIRADInterrelation = () => {
  const transformationFactors = [
    {
      factor: "International Recognition",
      icon: <Globe className="h-6 w-6 text-unifor-purple" />,
      uniPitch: "Organizes pitching events & showcases talent on a global platform",
      sep700: "Lists students in global hiring portals & scholarship networks",
      uirad: "Helps in publishing student research & achievements"
    },
    {
      factor: "Student-Centric Growth",
      icon: <Users className="h-6 w-6 text-unifor-purple" />,
      uniPitch: "Provides direct access to mentorship, funding, and awards",
      sep700: "AI-driven portal matches students to the best global programs",
      uirad: "Develops research-based models for academic growth"
    },
    {
      factor: "Career & Internship Opportunities",
      icon: <Briefcase className="h-6 w-6 text-unifor-purple" />,
      uniPitch: "Connects students with industry professionals & startup incubators",
      sep700: "Enables one-click applications to global internships & fellowships",
      uirad: "Enhances curriculum to include real-world corporate exposure"
    },
    {
      factor: "Innovation & Research",
      icon: <Rocket className="h-6 w-6 text-unifor-purple" />,
      uniPitch: "Encourages students to pitch ideas & get funded",
      sep700: "Provides access to global R&D and innovation platforms",
      uirad: "Establishes advanced research departments & partnerships"
    },
    {
      factor: "Institute Ranking & Credibility",
      icon: <Trophy className="h-6 w-6 text-unifor-purple" />,
      uniPitch: "Institutes get recognized for student achievements & pitch events",
      sep700: "Higher student participation in global events boosts institute rankings",
      uirad: "Aligns institute policies with international education frameworks"
    },
    {
      factor: "Global Networking & Collaboration",
      icon: <BookOpen className="h-6 w-6 text-unifor-purple" />,
      uniPitch: "Creates alliances with corporate leaders & investors",
      sep700: "Facilitates collaborations between institutes & industry experts",
      uirad: "Forms joint research partnerships with top universities"
    }
  ];

  return (
    <div className="my-20">
      <h2 className="text-3xl font-bold text-center mb-8 text-unifor-dark-purple">How They Work Together</h2>
      <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
        Each component plays a unique role, but together they enhance academic credibility, provide international exposure, and create a student-centric system that operates without financial barriers.
      </p>
      
      <div className="space-y-8">
        {transformationFactors.map((item, index) => (
          <Card key={index} className="shadow-md overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-unifor-light-purple to-unifor-light-blue pb-4">
              <CardTitle className="flex items-center gap-2 text-xl text-unifor-dark-purple">
                {item.icon}
                <span>{item.factor}</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x">
                <div className="p-4 bg-green-50">
                  <h4 className="font-medium text-green-700 mb-2 flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    Uni-Pitch
                  </h4>
                  <p className="text-sm text-gray-600">{item.uniPitch}</p>
                </div>
                <div className="p-4 bg-blue-50">
                  <h4 className="font-medium text-blue-700 mb-2 flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    SEP-700
                  </h4>
                  <p className="text-sm text-gray-600">{item.sep700}</p>
                </div>
                <div className="p-4 bg-yellow-50">
                  <h4 className="font-medium text-yellow-700 mb-2 flex items-center gap-1">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    UIRAD
                  </h4>
                  <p className="text-sm text-gray-600">{item.uirad}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
