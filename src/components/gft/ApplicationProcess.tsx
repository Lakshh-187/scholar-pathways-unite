
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, Users, CheckCircle, Rocket } from 'lucide-react';

const ApplicationProcess = () => {
  const steps = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Submit Application",
      description: "Complete our detailed application form with your project details and requirements"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Profile Screening",
      description: "Our team reviews your profile, category, and alignment with our mission"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Approval & Funding",
      description: "Get approved with your funding percentage and UNCIF certification grade"
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Development Begins",
      description: "Connect with our partner network and start building your tech solution"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-unifor-purple via-unifor-dark-purple to-purple-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Join thousands of organizations that have transformed their tech capabilities with our support
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white h-full">
                <CardContent className="p-6 text-center">
                  <div className="bg-yellow-500 rounded-full p-3 w-12 h-12 mx-auto mb-4">
                    {step.icon}
                  </div>
                  <h3 className="font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-purple-100">{step.description}</p>
                </CardContent>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="h-6 w-6 text-yellow-300" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Tech?</h3>
            <p className="text-purple-100 mb-6">
              Join the UNCIF community and get the funding and support you need to build world-class technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Apply for Funding Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-unifor-purple">
                Schedule Consultation
              </Button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">48hrs</div>
              <p className="text-sm text-purple-200">Application Review</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">30-70%</div>
              <p className="text-sm text-purple-200">Funding Support</p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-300 mb-1">100%</div>
              <p className="text-sm text-purple-200">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApplicationProcess;
