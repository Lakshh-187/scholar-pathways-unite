import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Target, GraduationCap, ClipboardCheck, Users, BookOpen, Award, Briefcase } from "lucide-react";

const MentorsPage = () => {
  const responsibilities = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Deliver Expert Sessions",
      description: "Conduct masterclasses, teacher training, parent sessions and student leadership programs."
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Represent in Conferences & Workshops",
      description: "Participate as speakers, moderators, or resource persons at national and regional summits."
    },
    {
      icon: <ClipboardCheck className="h-5 w-5" />,
      title: "Inspection & School Evaluation",
      description: "Engage as Inspection Officers for standards, safety, classroom practices, compliance and quality benchmarking."
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Lead Assessments & Academic Audits",
      description: "Contribute to evaluation, certification rubrics, school readiness audits and NEP-2020 implementation scoring."
    },
    {
      icon: <Target className="h-5 w-5" />,
      title: "Mentor School Leadership Teams",
      description: "Guide principals, coordinators and committees in academic strategy, innovation, school safety and student well-being."
    },
    {
      icon: <Briefcase className="h-5 w-5" />,
      title: "Join Professional Committees",
      description: "Become part of the School Standard Council, Academic Committee, Incubation Cell and Teacher Development Committee."
    },
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "Develop Training Frameworks",
      description: "Help us create progressive modules, toolkits and 21st-century capacity-building programs."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Role Overview */}
      <Card className="mb-8 border-2 border-primary/20">
        <CardHeader className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white">
              <Target className="h-6 w-6" />
            </div>
            <div>
              <Badge className="mb-2 bg-blue-500/20 text-blue-700 border-blue-300">
                MENTORS
              </Badge>
              <CardTitle className="text-3xl">Impact & Implementation Leaders</CardTitle>
            </div>
          </div>
          <CardDescription className="text-base mt-4">
            You will actively mentor educators, coordinators & school teams across programs, lead training, assessments & structured improvement journeys, support quality assurance, reporting & school transformation planning, and guide students & teachers in skill development, SEL & future-ready learning.
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Responsibilities Grid */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Target className="h-6 w-6 text-primary" />
          Your Role & Career-Building Opportunities
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          {responsibilities.map((resp, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:border-primary/50">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white flex-shrink-0">
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
        <h3 className="text-2xl font-bold mb-6">Mentors Making a Difference</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/lovable-uploads/school-bus-certification.jpeg" alt="Certification" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/biss-book.jpeg" alt="Training" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png" alt="Education" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
          <img src="/lovable-uploads/uniford-certificate.jpeg" alt="Achievement" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
        </div>
      </div>

      {/* CTA Card */}
      <Card className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-2 border-primary/30">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Guide & Transform?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Send your CV with the subject "Mentor Application – [Your Name]" to become an Impact & Implementation Leader.
          </p>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:opacity-90"
            onClick={() => window.location.href = 'mailto:info@uniford.org?subject=Mentor Application – [Your Name]'}
          >
            <Mail className="h-5 w-5 mr-2" />
            Apply as Mentor
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default MentorsPage;
