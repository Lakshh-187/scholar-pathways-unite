
import React from 'react';
import { 
  Award, 
  FileText, 
  DollarSign, 
  Briefcase, 
  Star, 
  GraduationCap,
  Handshake,
  Users,
  Medal
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

export const UniPitchBenefits = () => {
  const perks = [
    {
      title: "Certification Kit",
      description: "Verified Uni-Pitch certification for participation & recognition.",
      icon: <FileText className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Awards & Goodies",
      description: "Exclusive awards, vouchers, and gifts based on your pitch performance.",
      icon: <Award className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Feature in News & Magazines",
      description: "Get featured in national & global platforms for visibility.",
      icon: <Star className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Career Referrals & Recommendations",
      description: "Direct referrals to companies, internships, and hiring managers.",
      icon: <Briefcase className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Grant & Funding Access",
      description: "Connect with startup grants, social impact funding, and scholarships.",
      icon: <DollarSign className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Get Hired Portal Listing",
      description: "Your profile is listed on the hiring portal for better job opportunities.",
      icon: <Briefcase className="h-5 w-5 text-unifor-purple" />
    }
  ];

  const exclusivePerks = [
    {
      title: "Profile Listing",
      description: "Your profile is listed on professional hiring & recognition platforms.",
      icon: <FileText className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Access to CAF & Portals",
      description: "Direct access to career opportunity portals & networks.",
      icon: <Briefcase className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Referrals & Recommendations",
      description: "Direct recommendations to hiring managers & professionals.",
      icon: <Handshake className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "News & Magazine Feature",
      description: "Get published & recognized in media.",
      icon: <Star className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Chance to Join the Uniford Board Team",
      description: "Selected scholars can apply for leadership roles in Uniford.",
      icon: <Users className="h-5 w-5 text-unifor-purple" />
    },
    {
      title: "Networking with Partnered Alliances",
      description: "Build a strong network with industry mentors & professionals.",
      icon: <Handshake className="h-5 w-5 text-unifor-purple" />
    }
  ];

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mt-24 mb-16">
      <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Benefits & Perks</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {perks.map((perk, index) => (
          <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                {perk.icon}
                <span>{perk.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">{perk.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
        <div className="flex justify-center mb-8">
          <CollapsibleTrigger asChild>
            <Button variant="outline" className="px-8 border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/20">
              {isOpen ? "Show Less" : "See Exclusive Perks for Verified Scholars"}
            </Button>
          </CollapsibleTrigger>
        </div>
        
        <CollapsibleContent>
          <h3 className="text-2xl font-bold text-center mb-8 text-unifor-dark-purple">
            Verified & Selected Scholars Get Exclusive Perks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exclusivePerks.map((perk, index) => (
              <Card key={index} className="bg-white shadow-md border-unifor-light-purple hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg flex items-center gap-2">
                    {perk.icon}
                    <span>{perk.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
