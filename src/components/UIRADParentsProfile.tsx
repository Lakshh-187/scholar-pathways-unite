
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Briefcase, 
  Award, 
  FileBadge, 
  Lightbulb, 
  Rocket, 
  Globe,
  Users,
  BookOpen,
  Shield
} from 'lucide-react';
import { Network } from '@/components/ui/network-icon';

export const UIRADParentsProfile = () => {
  const [activeTab, setActiveTab] = useState('certification');
  
  const supportScenarios = [
    {
      id: 'certification',
      name: 'Certification & Recognition',
      icon: <FileBadge className="h-5 w-5" />,
      scenarios: [
        {
          scenario: "If you want recognition for your skills and talents",
          support: "We provide verified digital certificates, badging, and profile screening to highlight your capabilities to potential employers and institutions."
        },
        {
          scenario: "If you seek validation for your projects and innovations",
          support: "Your work can be published, featured in our platforms, and submitted for awards through Uni-Pitch."
        },
        {
          scenario: "If you want your achievements to be globally recognized",
          support: "We nominate deserving scholars for global awards, conferences, and feature them in various publications."
        }
      ]
    },
    {
      id: 'internship',
      name: 'Internships & Career',
      icon: <Briefcase className="h-5 w-5" />,
      scenarios: [
        {
          scenario: "If you're looking for internship opportunities",
          support: "We connect you with our network of industry partners through Social Internship program and provide references and recommendations."
        },
        {
          scenario: "If you need help with career guidance",
          support: "Our mentors provide personalized career counseling, resume building, and interview preparation through Uni-Talks and dedicated sessions."
        },
        {
          scenario: "If you want to enhance your employability",
          support: "The SEP-700 portal matches your profile with suitable opportunities and career enhancement programs."
        }
      ]
    },
    {
      id: 'projects',
      name: 'Projects & Innovation',
      icon: <Lightbulb className="h-5 w-5" />,
      scenarios: [
        {
          scenario: "If you have an innovative project idea",
          support: "Present it through Uni-Pitch to get funding, mentorship, and resources to turn your idea into reality."
        },
        {
          scenario: "If you need a platform to showcase your project",
          support: "Participate in our Project Expo events where industry experts, investors, and mentors can see your work."
        },
        {
          scenario: "If you're seeking grants for your projects",
          support: "Apply for Startup Grants or Social Welfare Grants through our platform for financial support."
        }
      ]
    },
    {
      id: 'global',
      name: 'Global Exposure',
      icon: <Globe className="h-5 w-5" />,
      scenarios: [
        {
          scenario: "If you want international exposure for your work",
          support: "UIRAD connects you with international conferences, summits, and exchange programs."
        },
        {
          scenario: "If you aim to collaborate with international students",
          support: "Join our global student organizations and societies facilitated through International Clubs & Societies initiatives."
        },
        {
          scenario: "If you wish to participate in global competitions",
          support: "We identify and sponsor deserving students for international hackathons, challenges, and competitions."
        }
      ]
    },
    {
      id: 'mentorship',
      name: 'Mentorship & Learning',
      icon: <GraduationCap className="h-5 w-5" />,
      scenarios: [
        {
          scenario: "If you need guidance from industry experts",
          support: "Connect with top mentors through our Mentorship programs and Uni-Talks sessions."
        },
        {
          scenario: "If you want to become a mentor yourself",
          support: "Join as a Mentor once you've gained expertise in your field and help nurture the next generation."
        },
        {
          scenario: "If you're looking for learning resources",
          support: "Access our extensive library of learning materials, workshops, and programs designed to enhance your skills."
        }
      ]
    },
    {
      id: 'community',
      name: 'Community & Support',
      icon: <Users className="h-5 w-5" />,
      scenarios: [
        {
          scenario: "If you want to contribute to social causes",
          support: "Participate in our Campaigns and join as a Volunteer for various social welfare initiatives."
        },
        {
          scenario: "If you need a community of like-minded individuals",
          support: "Connect with other scholars through our network, events, and community programs."
        },
        {
          scenario: "If you're facing challenges in your academic journey",
          support: "Our support team and resources are always available to help you overcome obstacles."
        }
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            UNIFORD AS PARENTS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            We're Always There For You
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>, as a <span className="font-bold text-unifor-dark-purple">non-profit organization</span>, is committed to supporting students throughout their journey by providing <span className="font-bold text-unifor-dark-purple">free opportunities</span> and resources for growth and development.
          </p>
        </div>

        <div className="flex flex-col space-y-8">
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 bg-unifor-light-purple/20 p-2 rounded-lg mb-8">
              {supportScenarios.map((scenario) => (
                <TabsTrigger 
                  key={scenario.id} 
                  value={scenario.id}
                  className={`flex items-center gap-2 ${
                    activeTab === scenario.id ? 'bg-white shadow-md' : 'hover:bg-white/50'
                  }`}
                >
                  {scenario.icon}
                  <span className="hidden md:inline">{scenario.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {supportScenarios.map((scenario) => (
              <TabsContent key={scenario.id} value={scenario.id}>
                <Card className="border-2 border-unifor-light-purple">
                  <CardContent className="pt-6">
                    <div className="mb-6 flex items-center gap-3">
                      <div className="bg-unifor-light-purple p-3 rounded-full">
                        {scenario.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-unifor-dark-purple">{scenario.name}</h3>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead className="bg-unifor-dark-purple text-white">
                          <tr>
                            <th className="p-4 text-left rounded-tl-lg">If You Are Looking For...</th>
                            <th className="p-4 text-left rounded-tr-lg">How <span className="font-bold">Uniford Foundation</span> Supports You</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          {scenario.scenarios.map((item, idx) => (
                            <tr key={idx} className="hover:bg-unifor-light-purple/10 transition-colors">
                              <td className="p-4 border-r border-gray-200 text-gray-800">{item.scenario}</td>
                              <td className="p-4 text-gray-700">{item.support}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
            <Network size={48} animated={true} className="mx-auto mb-4 text-unifor-purple" />
            <h3 className="text-xl font-bold mb-2 text-unifor-dark-purple">We're More Than Just a Platform</h3>
            <p className="text-gray-700 mb-6">
              At <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>, we strive to <span className="font-bold text-unifor-dark-purple">transform</span> educational journeys by providing students with resources and opportunities that <span className="font-bold text-unifor-dark-purple">match international standards</span>, without financial barriers.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge className="bg-unifor-light-purple/20 text-unifor-dark-purple px-3 py-1">
                <Shield className="h-4 w-4 mr-1" /> CSR Funded
              </Badge>
              <Badge className="bg-unifor-light-purple/20 text-unifor-dark-purple px-3 py-1">
                <Users className="h-4 w-4 mr-1" /> Alumni Donation
              </Badge>
              <Badge className="bg-unifor-light-purple/20 text-unifor-dark-purple px-3 py-1">
                <Rocket className="h-4 w-4 mr-1" /> Venture Funds
              </Badge>
              <Badge className="bg-unifor-light-purple/20 text-unifor-dark-purple px-3 py-1">
                <BookOpen className="h-4 w-4 mr-1" /> Free Opportunities
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UIRADParentsProfile;
