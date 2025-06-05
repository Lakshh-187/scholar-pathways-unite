
import React from "react";
import { Target, Award, Briefcase, FileText, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TransformationProcess = () => {
  const transformationSteps = [
    {
      icon: <Target className="h-8 w-8 text-blue-500" />,
      title: "Build Credible Portfolio",
      description: "We help you create a portfolio with 2-3 internships, major projects, certifications, and Letters of Recommendation (LOR)",
      items: ["Multiple Internships", "Major Projects", "Industry Certifications", "LOR from Professionals"]
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-500" />,
      title: "Participate in Initiatives",
      description: "We provide platforms for competitions, problem-solving projects, and innovative initiatives to showcase your skills",
      items: ["Coding Competitions", "Innovation Projects", "Problem Solving", "Industry Challenges"]
    },
    {
      icon: <Award className="h-8 w-8 text-purple-500" />,
      title: "Get Stanburg Badge",
      description: "Based on your credible profile, you earn the prestigious 'Stanburg' badge for verified excellence",
      items: ["Profile Verification", "Skill Validation", "Achievement Recognition", "Industry Credibility"]
    },
    {
      icon: <Star className="h-8 w-8 text-orange-500" />,
      title: "Career Opportunities",
      description: "With Stanburg badge, apply through THA & CAF to get listed on our portal and receive referrals to partner organizations",
      items: ["Portal Listing", "Partner Referrals", "Paid Internships", "Job Placements"]
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 px-4 py-2 mb-4">
            TRANSFORMATION JOURNEY
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We Transform Our Francisco Scholars
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Step by step, we build your credible profile and connect you with amazing career opportunities. 
            Here's exactly how we do it:
          </p>
        </div>

        <div className="space-y-8">
          {transformationSteps.map((step, index) => (
            <Card key={index} className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-start gap-6">
                  <div className="h-16 w-16 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    {step.icon}
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="h-8 w-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </span>
                      <CardTitle className="text-xl">{step.title}</CardTitle>
                    </div>
                    <p className="text-gray-600 mb-4">{step.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 pl-22">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {step.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                      <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm font-medium text-blue-800">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">The Result: Complete Career Transformation!</h3>
            <p className="text-lg mb-6">
              With a credible profile and Stanburg badge, you'll get paid internships, job placements, 
              and amazing career opportunities through our partner network!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge className="bg-white/20 text-white px-4 py-2 text-lg">Credible Portfolio</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-lg">Stanburg Badge</Badge>
              <Badge className="bg-white/20 text-white px-4 py-2 text-lg">Career Opportunities</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationProcess;
