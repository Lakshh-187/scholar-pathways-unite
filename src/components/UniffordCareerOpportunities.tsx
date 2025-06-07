
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, GraduationCap, DollarSign, Mail, 
  Building, Search, Users, Target 
} from "lucide-react";

const UniffordCareerOpportunities = () => {
  const opportunities = [
    { icon: <Briefcase className="h-5 w-5" />, title: "Paid Internships", color: "from-blue-500 to-blue-600" },
    { icon: <GraduationCap className="h-5 w-5" />, title: "Scholarships", color: "from-green-500 to-green-600" },
    { icon: <DollarSign className="h-5 w-5" />, title: "Grants", color: "from-purple-500 to-purple-600" },
    { icon: <Mail className="h-5 w-5" />, title: "Invitations", color: "from-orange-500 to-orange-600" },
    { icon: <Building className="h-5 w-5" />, title: "Placements", color: "from-red-500 to-red-600" },
    { icon: <Search className="h-5 w-5" />, title: "Profile Screening", color: "from-teal-500 to-teal-600" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            CAREER OPPORTUNITIES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-unifor-dark-purple">
            Uniford Scholar Career Opportunities
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Uniford Scholars get exclusive career opportunities through profile screening by 
            <span className="font-semibold text-unifor-purple"> Uniford Talent Hunt Alliance</span>
          </p>
        </div>

        {/* Talent Hunt Alliance Highlight */}
        <div className="bg-gradient-to-r from-unifor-dark-purple/5 to-unifor-purple/5 rounded-2xl p-8 mb-12 border border-unifor-purple/20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-unifor-purple to-unifor-light-purple mb-6">
              <Users className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-unifor-dark-purple mb-4">
              Uniford Talent Hunt Alliance
            </h3>
            <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              Our specialized talent screening process evaluates and matches scholars with the right opportunities 
              based on their skills, achievements, and career aspirations.
            </p>
            
            {/* Compact Opportunities Display */}
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {opportunities.map((opportunity, index) => (
                  <div key={index} className="group text-center p-3 bg-gray-50 rounded-xl hover:shadow-md transition-all duration-300 hover:scale-105">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${opportunity.color} flex items-center justify-center mx-auto mb-2 text-white shadow-md group-hover:scale-110 transition-transform`}>
                      {opportunity.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-gray-800 group-hover:text-unifor-purple transition-colors">
                      {opportunity.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center text-unifor-dark-purple mb-8">
            How It Works
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Complete Profile</h4>
              <p className="text-sm text-gray-600">Build your comprehensive scholar profile</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Profile Screening</h4>
              <p className="text-sm text-gray-600">UTHA evaluates your skills and achievements</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Opportunity Matching</h4>
              <p className="text-sm text-gray-600">Get matched with relevant opportunities</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-unifor-purple text-white flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h4 className="font-semibold text-unifor-dark-purple mb-2">Career Success</h4>
              <p className="text-sm text-gray-600">Start your journey with the right opportunity</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-block">
            <h3 className="text-xl font-bold text-unifor-dark-purple mb-4">Ready to Unlock Your Career Potential?</h3>
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 text-lg">
              Explore Career Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniffordCareerOpportunities;
