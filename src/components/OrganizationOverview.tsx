import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Lightbulb, ArrowRight } from "lucide-react";

const OrganizationOverview = () => {
  const pillars = [
    {
      title: "For Institutes",
      subtitle: "Safety & Standards",
      description: "ICSS, UIRAD",
      icon: Shield,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600"
    },
    {
      title: "For Frontliners", 
      subtitle: "Empowerment & Incubation",
      description: "Her-HaVa, Incubation Cell",
      icon: Users,
      color: "from-green-500 to-green-600", 
      bgColor: "bg-green-50",
      textColor: "text-green-600"
    },
    {
      title: "For Impact",
      subtitle: "CSR, Donations & Uniford Billions Fund",
      description: "Sustainable Growth Solutions",
      icon: Lightbulb,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50", 
      textColor: "text-purple-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-6">
          <div className="flex justify-center items-center gap-4 mb-6">
            <img 
              src="/uncif-logo.png" 
              alt="UNCIF Logo" 
              className="h-16 w-auto"
            />
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-unifor-dark-purple">
                Uniford Foundation
              </h2>
              <p className="text-lg text-gray-600 font-medium mt-1">
                Safer Institutes. Stronger Frontliners. Sustainable Impact.
              </p>
            </div>
          </div>
          
          <Badge className="bg-unifor-purple text-white px-6 py-2 text-sm font-semibold rounded-full">
            Three Pillars of Transformation
          </Badge>
        </div>

        {/* Three Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const IconComponent = pillar.icon;
            return (
              <div key={index} className="relative">
                {/* Arrow between cards (hidden on mobile) */}
                {index < pillars.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <div className="bg-white rounded-full p-2 shadow-lg border-2 border-gray-100">
                      <ArrowRight className="h-6 w-6 text-unifor-purple" />
                    </div>
                  </div>
                )}
                
                <Card className="h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${pillar.color} p-6 text-white relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4">
                      <div className="w-20 h-20 bg-white/10 rounded-full"></div>
                    </div>
                    <div className="relative z-10">
                      <IconComponent className="h-12 w-12 mb-4" />
                      <h3 className="text-xl font-bold mb-2">{pillar.title}</h3>
                      <p className="text-sm opacity-90 font-medium">{pillar.subtitle}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <CardContent className={`p-6 ${pillar.bgColor} h-32 flex flex-col justify-center`}>
                    <div className="text-center">
                      <p className={`font-semibold text-lg ${pillar.textColor} mb-2`}>
                        {pillar.description}
                      </p>
                      <div className={`w-12 h-1 ${pillar.color.replace('from-', 'bg-').replace(' to-blue-600', '').replace(' to-green-600', '').replace(' to-purple-600', '')} mx-auto rounded-full`}></div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto border border-gray-100">
            <h3 className="text-2xl font-bold text-unifor-dark-purple mb-4">
              Building Tomorrow's Educational Ecosystem
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Through our comprehensive approach, we create lasting impact across institutes, 
              frontliners, and communities - fostering growth, safety, and innovation at every level.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="text-blue-600 border-blue-200">Safety First</Badge>
              <Badge variant="outline" className="text-green-600 border-green-200">Empowerment Focused</Badge>
              <Badge variant="outline" className="text-purple-600 border-purple-200">Impact Driven</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganizationOverview;