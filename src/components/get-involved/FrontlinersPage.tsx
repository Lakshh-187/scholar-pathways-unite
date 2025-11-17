import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Rocket, Users, MessageSquare, UserCheck, Trophy, Heart, MapPin } from "lucide-react";

const FrontlinersPage = () => {
  const responsibilities = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Mentor Students",
      description: "Work closely with student groups as guides, role models and skill-development coaches."
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Serve as Speaker & Story Sharer",
      description: "Engage in school events, youth gatherings, webinars and leadership forums."
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Student Advisory & Counselling Support",
      description: "Help create youth-led ideas, feedback systems and student advisory panels."
    },
    {
      icon: <Trophy className="h-5 w-5" />,
      title: "Join Leadership Tracks",
      description: "Become Ambassadors, Presidents, Council Members or Chapter Leads for different regions."
    },
    {
      icon: <Heart className="h-5 w-5" />,
      title: "Support Awareness Campaigns",
      description: "Participate in safety, standards, mental health, environment and social impact campaigns."
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Represent Your Region",
      description: "Drive our mission in schools, colleges and communities as the local representative of our organization."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Role Overview */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white">
              <Rocket className="h-6 w-6" />
            </div>
            <div>
              <Badge className="mb-2 bg-orange-500/20 text-orange-700 border-orange-300">
                FRONTLINERS
              </Badge>
              <CardTitle className="text-3xl">Student & School Impact Ambassadors</CardTitle>
            </div>
          </div>
          <CardDescription className="text-base mt-4">
            You will actively guide students in learning, leadership & life skills, support school engagement, outreach & implementation tasks, represent our campaigns, programs & youth initiatives nationally, and collaborate with Mentors & Advisors to drive impact on ground.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Responsibilities Grid */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          Your Role & Leadership Opportunities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {responsibilities.map((resp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white flex-shrink-0">
                    {resp.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg mb-2">{index + 1}. {resp.title}</CardTitle>
                    <CardDescription className="text-sm">{resp.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      {/* Image Gallery */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6">Frontliners in Action</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/lovable-uploads/great-place-badge.png" alt="Badge" className="rounded-lg shadow-md hover:scale-105 transition-transform bg-white p-2" />
          <img src="/lovable-uploads/sdg-badge.png" alt="SDG" className="rounded-lg shadow-md hover:scale-105 transition-transform bg-white p-2" />
          <img src="/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png" alt="Youth" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png" alt="Community" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        </div>
      </div>

      {/* CTA Card */}
      <Card className="bg-gradient-to-r from-orange-500/10 to-red-500/10 border-2 border-primary/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Drive Grassroots Change?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Send your details with the subject "Frontliner Application – [Your Name]" to become a Student & School Impact Ambassador.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90"
            onClick={() => window.location.href = 'mailto:info@uniford.org?subject=Frontliner Application – [Your Name]'}
          >
            <Mail className="h-5 w-5 mr-2" />
            Apply as Frontliner
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default FrontlinersPage;
