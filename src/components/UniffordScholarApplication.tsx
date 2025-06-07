
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, Users, Trophy, Briefcase, Handshake, Award, 
  BookOpen, Rocket, Heart, Target, Medal, Building 
} from "lucide-react";

const UniffordScholarApplication = () => {
  const opportunities = [
    { icon: <Lightbulb className="h-6 w-6" />, title: "Initiatives", description: "Lead innovative projects and initiatives" },
    { icon: <Users className="h-6 w-6" />, title: "Participations", description: "Engage in diverse programs and events" },
    { icon: <Trophy className="h-6 w-6" />, title: "Achievements", description: "Earn recognition and awards" },
    { icon: <Target className="h-6 w-6" />, title: "Projects", description: "Work on impactful real-world projects" },
    { icon: <Handshake className="h-6 w-6" />, title: "Collaborations", description: "Partner with peers and organizations" },
    { icon: <Award className="h-6 w-6" />, title: "Innovations", description: "Problem-solving and creative solutions" },
    { icon: <Medal className="h-6 w-6" />, title: "Certification", description: "Health and medical literacy programs" },
    { icon: <BookOpen className="h-6 w-6" />, title: "Books Writing", description: "Author program and publications" },
    { icon: <Rocket className="h-6 w-6" />, title: "My Startup", description: "Entrepreneurship support and incubation" },
    { icon: <Heart className="h-6 w-6" />, title: "Social Welfare", description: "Community impact initiatives" },
    { icon: <Trophy className="h-6 w-6" />, title: "Sports Participation", description: "Athletic programs and competitions" },
    { icon: <Briefcase className="h-6 w-6" />, title: "Internships", description: "AI, Domain-specific, Management, Social welfare" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-unifor-light-purple/10 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            UNIFORD SCHOLAR APPLICATION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-unifor-dark-purple">
            Become a Uniford Scholar
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Organization gives 70% seats to students who have Uniford Badges and 30% seats are specially offered to students directly
          </p>
          
          {/* Seat Distribution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-gradient-to-r from-unifor-purple/20 to-unifor-light-purple/20 border-unifor-purple/30">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-unifor-purple flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">70%</span>
                </div>
                <CardTitle className="text-unifor-dark-purple">Uniford Badge Holders</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Reserved seats for students with Uniford Badges</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-r from-gray-100 to-gray-50 border-gray-300">
              <CardHeader className="text-center">
                <div className="w-20 h-20 rounded-full bg-gray-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">30%</span>
                </div>
                <CardTitle className="text-gray-700">Direct Application</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">Special seats offered directly to students</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Organization Responsibility */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-unifor-dark-purple mb-8">
            Organization's Responsibility: Connect & Provide Opportunities
          </h3>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            It's our responsibility to connect and provide platforms and opportunities so that scholars can achieve their full potential
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {opportunities.map((opportunity, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 hover:border-unifor-purple/30">
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-unifor-purple to-unifor-light-purple flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform">
                    {opportunity.icon}
                  </div>
                  <CardTitle className="text-lg text-unifor-dark-purple">{opportunity.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <p className="text-sm text-gray-600">{opportunity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple rounded-2xl p-8 text-white inline-block">
            <h3 className="text-2xl font-bold mb-4">Ready to Become a Scholar?</h3>
            <p className="text-gray-200 mb-6">Join thousands of students building their future with Uniford</p>
            <Button className="bg-white text-unifor-purple hover:bg-gray-100 font-semibold px-8 py-3">
              Apply for Scholar Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniffordScholarApplication;
