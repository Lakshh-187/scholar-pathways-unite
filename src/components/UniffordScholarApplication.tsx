
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Lightbulb, Users, Trophy, Briefcase, Handshake, Award, 
  BookOpen, Rocket, Heart, Target, Medal, Building 
} from "lucide-react";

const UniffordScholarApplication = () => {
  const opportunities = [
    { icon: <Lightbulb className="h-5 w-5" />, title: "Initiatives" },
    { icon: <Users className="h-5 w-5" />, title: "Participations" },
    { icon: <Trophy className="h-5 w-5" />, title: "Achievements" },
    { icon: <Target className="h-5 w-5" />, title: "Projects" },
    { icon: <Handshake className="h-5 w-5" />, title: "Collaborations" },
    { icon: <Award className="h-5 w-5" />, title: "Innovations" },
    { icon: <Medal className="h-5 w-5" />, title: "Certification" },
    { icon: <BookOpen className="h-5 w-5" />, title: "Books Writing" },
    { icon: <Rocket className="h-5 w-5" />, title: "My Startup" },
    { icon: <Heart className="h-5 w-5" />, title: "Social Welfare" },
    { icon: <Trophy className="h-5 w-5" />, title: "Sports" },
    { icon: <Briefcase className="h-5 w-5" />, title: "Internships" }
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

        {/* Compact Organization Responsibility */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-unifor-dark-purple mb-8">
            Organization's Responsibility: Connect & Provide Opportunities
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            It's our responsibility to connect and provide platforms and opportunities so that scholars can achieve their full potential
          </p>
          
          {/* Compact Grid Display */}
          <div className="bg-gradient-to-r from-unifor-dark-purple/5 to-unifor-purple/5 rounded-3xl p-8 border border-unifor-purple/20">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
              {opportunities.map((opportunity, index) => (
                <div key={index} className="group text-center p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-unifor-purple to-unifor-light-purple flex items-center justify-center mx-auto mb-3 text-white shadow-md group-hover:scale-110 transition-transform">
                    {opportunity.icon}
                  </div>
                  <h4 className="text-sm font-semibold text-unifor-dark-purple group-hover:text-unifor-purple transition-colors">
                    {opportunity.title}
                  </h4>
                </div>
              ))}
            </div>
            
            {/* Highlighted Features */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/70 rounded-xl p-4">
                <Award className="h-6 w-6 text-unifor-purple mx-auto mb-2" />
                <p className="text-sm text-gray-700"><strong>Problem-solving</strong> & creative solutions</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4">
                <Medal className="h-6 w-6 text-unifor-purple mx-auto mb-2" />
                <p className="text-sm text-gray-700"><strong>Health & medical</strong> literacy programs</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4">
                <Briefcase className="h-6 w-6 text-unifor-purple mx-auto mb-2" />
                <p className="text-sm text-gray-700"><strong>AI, Domain-specific,</strong> Management, Social welfare</p>
              </div>
            </div>
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
