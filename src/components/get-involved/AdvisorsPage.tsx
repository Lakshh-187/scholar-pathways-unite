import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Award, Users, Globe, BookOpen, Target, Lightbulb } from "lucide-react";

const AdvisorsPage = () => {
  const responsibilities = [
    {
      icon: <Users className="h-5 w-5" />,
      title: "Serve as Jury Member",
      description: "Take part in evaluating national-level school programs, campaigns and awards—your expertise shapes the future of education."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Appear as Guest of Honour",
      description: "Be invited to prestigious award ceremonies, school events, global observances and national conferences."
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "Lead High-Impact Conferences",
      description: "Represent us as a keynote speaker, panel member or moderator at national & international summits."
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Contribute to School Cinema",
      description: "Support storytelling-led learning, review episodes, and guide the direction of our signature School Cinema initiative."
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Advisor for Global Campaigns",
      description: "Participate in international safety, well-being and standardisation campaigns supported by our organization."
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Strategic Think Tank Member",
      description: "Participate in quarterly advisory circles that shape policies, frameworks and institutional programs."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Role Overview */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-purple-500/10 to-pink-500/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <Badge className="mb-2 bg-purple-500/20 text-purple-700 border-purple-300">
                ADVISORS
              </Badge>
              <CardTitle className="text-3xl">Leadership Council</CardTitle>
            </div>
          </div>
          <CardDescription className="text-base mt-4">
            As an Advisor, you will play a strategic role in shaping national-level school transformation. You will actively guide our leadership team on policy, innovation & expansion, participate in high-level reviews of initiatives, standards & accreditation models, lend your expertise to strengthen credibility, governance and impact, and represent the organization across key forums, campaigns & partnerships.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Responsibilities Grid */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Your Role & Opportunities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {responsibilities.map((resp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white flex-shrink-0">
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
        <h3 className="text-2xl font-bold mb-6">Our Advisors in Action</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/lovable-uploads/uniford-edutech-fair.png" alt="Event" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/uniford-flags.png" alt="Global" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/uniford-foundation-event.png" alt="Foundation" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png" alt="Impact" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        </div>
      </div>

      {/* CTA Card */}
      <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-2 border-primary/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Lead Change?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Send your profile with the subject "Advisor Application – [Your Name]" to join our Leadership Council.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90"
            onClick={() => window.location.href = 'mailto:info@uniford.org?subject=Advisor Application – [Your Name]'}
          >
            <Mail className="h-5 w-5 mr-2" />
            Apply as Advisor
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default AdvisorsPage;
