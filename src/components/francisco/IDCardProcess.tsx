
import React from "react";
import { FileText, CheckCircle2, CreditCard, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IDCardProcess = () => {
  const processSteps = [
    {
      step: "1",
      icon: <FileText className="h-8 w-8 text-blue-500" />,
      title: "Apply for Scholar ID Card",
      description: "Fill out the simple application form with your details and submit required documents.",
      action: "Complete Application Form",
      color: "blue"
    },
    {
      step: "2", 
      icon: <CheckCircle2 className="h-8 w-8 text-green-500" />,
      title: "Profile Review & Confirmation",
      description: "Our team reviews your profile based on eligibility criteria and sends confirmation if selected.",
      action: "Wait for Confirmation Email",
      color: "green"
    },
    {
      step: "3",
      icon: <CreditCard className="h-8 w-8 text-purple-500" />,
      title: "Receive & Activate ID Card",
      description: "Once confirmed, you'll receive your Francisco Scholar ID card. Submit your ID number to activate it.",
      action: "Activate Your Scholar ID",
      color: "purple"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-2 mb-4">
              APPLICATION PROCESS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How to Get Your Francisco Scholar ID Card
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Getting your Francisco Scholar ID is super simple! Just follow these 3 easy steps 
              and start your career transformation journey.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            {processSteps.map((step, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-6">
                    <div className={`h-20 w-20 bg-${step.color}-100 rounded-2xl flex items-center justify-center`}>
                      {step.icon}
                    </div>
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`h-10 w-10 bg-${step.color}-600 text-white rounded-full flex items-center justify-center font-bold`}>
                          {step.step}
                        </div>
                        <CardTitle className="text-2xl">{step.title}</CardTitle>
                      </div>
                      <p className="text-gray-600 text-lg mb-4">{step.description}</p>
                      <Badge className={`bg-${step.color}-100 text-${step.color}-800 px-4 py-2`}>
                        {step.action}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Simple Steps Visualization */}
          <div className="bg-gradient-to-r from-unifor-light-purple to-purple-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-center mb-8 text-unifor-dark-purple">
              Super Simple Process! 
            </h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="h-20 w-20 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="font-bold text-blue-800">Apply</h4>
                <p className="text-sm">Submit your application</p>
              </div>
              
              <ArrowRight className="h-8 w-8 text-gray-400 rotate-90 md:rotate-0" />
              
              <div className="text-center">
                <div className="h-20 w-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="font-bold text-green-800">Get Selected</h4>
                <p className="text-sm">Profile review & approval</p>
              </div>
              
              <ArrowRight className="h-8 w-8 text-gray-400 rotate-90 md:rotate-0" />
              
              <div className="text-center">
                <div className="h-20 w-20 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="font-bold text-purple-800">Activate</h4>
                <p className="text-sm">Get & activate ID card</p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/id-card">
                <Button className="bg-unifor-dark-purple hover:bg-purple-900 px-8 py-6 text-lg">
                  Apply for Francisco Scholar ID Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDCardProcess;
