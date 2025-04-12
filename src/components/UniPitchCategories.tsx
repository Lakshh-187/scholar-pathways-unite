
import React, { useState } from 'react';
import { 
  Briefcase, 
  Award, 
  FileText, 
  DollarSign, 
  Megaphone, 
  Link,
  Star,
  Lightbulb,
  GraduationCap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const UniPitchCategories = () => {
  const problemSolvingPitches = [
    {
      need: "I need a mentor for placements",
      support: "Connects you with industry mentors via Uni-Talks, IEP, CFA, and UIRAD programs.",
      icon: <GraduationCap className="h-5 w-5 text-unifor-purple" />
    },
    {
      need: "I'm struggling to find an internship",
      support: "Get direct internship referrals from partnered organizations.",
      icon: <Briefcase className="h-5 w-5 text-unifor-purple" />
    },
    {
      need: "I need a Letter of Recommendation (LOR)",
      support: "Get a verified UNSR-backed LOR based on your work.",
      icon: <FileText className="h-5 w-5 text-unifor-purple" />
    },
    {
      need: "I need financial support or grants",
      support: "Gain access to startup grants, social welfare funds, and innovation scholarships.",
      icon: <DollarSign className="h-5 w-5 text-unifor-purple" />
    },
    {
      need: "I want to get published or featured",
      support: "Get your articles, research, or achievements published in top magazines and platforms.",
      icon: <Megaphone className="h-5 w-5 text-unifor-purple" />
    },
    {
      need: "I want to build my network & get referrals",
      support: "Connect with companies, hiring managers, and referral networks.",
      icon: <Link className="h-5 w-5 text-unifor-purple" />
    }
  ];

  const potentialPitches = [
    {
      talent: "An innovative project, MVP, or prototype",
      elevation: "Access to Project Expo, startup funding, mentorship, and incubation support.",
      icon: <Lightbulb className="h-5 w-5 text-unifor-purple" />
    },
    {
      talent: "A startup idea or business model",
      elevation: "Pitch to investors, apply for startup grants, and join Uni-Venture programs.",
      icon: <Star className="h-5 w-5 text-unifor-purple" />
    },
    {
      talent: "An achievement (sports, academics, social work)",
      elevation: "Get featured in news, magazines, and leadership forums.",
      icon: <Award className="h-5 w-5 text-unifor-purple" />
    },
    {
      talent: "A skill (coding, design, writing, etc.)",
      elevation: "Get freelance gigs, scholarships, and professional growth programs.",
      icon: <Star className="h-5 w-5 text-unifor-purple" />
    },
    {
      talent: "A research paper or publication idea",
      elevation: "Publish your work in recognized journals & magazines.",
      icon: <FileText className="h-5 w-5 text-unifor-purple" />
    }
  ];

  return (
    <div className="mt-24">
      <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Two Categories of Uni-Pitch</h2>
      
      <Tabs defaultValue="problem-solving" className="w-full">
        <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
          <TabsTrigger value="problem-solving">Problem-Solving Pitch</TabsTrigger>
          <TabsTrigger value="potential">Potential Pitch</TabsTrigger>
        </TabsList>
        
        <TabsContent value="problem-solving">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problemSolvingPitches.map((pitch, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {pitch.icon}
                    <span>{pitch.need}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{pitch.support}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 text-gray-500 italic">
            <p>And many more problem-solving pitches to help you overcome obstacles in your educational journey!</p>
          </div>
        </TabsContent>
        
        <TabsContent value="potential">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {potentialPitches.map((pitch, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {pitch.icon}
                    <span>{pitch.talent}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{pitch.elevation}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-6 text-gray-500 italic">
            <p>Show us your talent and potential, and we'll help you elevate it to new heights!</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
