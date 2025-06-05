
import React from "react";
import { Rocket, Users, Building2, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SolutionOverview = () => {
  const solutionSteps = [
    {
      step: "1",
      title: "Apply for Francisco Scholar ID",
      description: "Students apply for the special Francisco Scholar ID card through our simple application process.",
      icon: <Users className="h-6 w-6" />
    },
    {
      step: "2", 
      title: "Profile Review & Selection",
      description: "We review your profile based on eligibility criteria and select deserving candidates.",
      icon: <CheckCircle2 className="h-6 w-6" />
    },
    {
      step: "3",
      title: "Organization Takes Responsibility",
      description: "Once selected, Uniford Foundation takes COMPLETE responsibility for your career transformation!",
      icon: <Building2 className="h-6 w-6" />
    },
    {
      step: "4",
      title: "Complete Career Support",
      description: "We provide internships, resources, AI tools, portfolio website, projects - everything you need!",
      icon: <Rocket className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 px-4 py-2 mb-4">
            THE SOLUTION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
            Introducing "Campus to Corporate" Program
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We don't just give you opportunities - we take <strong>complete responsibility</strong> for your success! 
            Here's how Francisco Scholars program works:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {solutionSteps.map((step, index) => (
            <Card key={index} className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {step.step}
                  </div>
                  <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                    {step.icon}
                  </div>
                </div>
                <CardTitle className="text-xl text-green-800">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-green-900">What Makes Francisco Scholars Different?</h3>
            <p className="text-lg text-gray-700 mb-6">
              We don't just help you find opportunities - we become your <strong>career partner</strong> and take 
              complete responsibility for building your credible profile and securing your future!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="h-16 w-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-green-800">Complete Support</h4>
                <p className="text-sm text-gray-600">We arrange everything you need</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-blue-800">Organization Responsibility</h4>
                <p className="text-sm text-gray-600">We take ownership of your success</p>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 bg-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-3">
                  <Rocket className="h-8 w-8" />
                </div>
                <h4 className="font-bold text-purple-800">Guaranteed Results</h4>
                <p className="text-sm text-gray-600">Credible profile & career opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionOverview;
