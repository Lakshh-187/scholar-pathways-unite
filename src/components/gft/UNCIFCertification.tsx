
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Building2, FileText, Globe } from 'lucide-react';

const UNCIFCertification = () => {
  const certificationLevels = [
    {
      grade: "A+",
      color: "bg-yellow-500",
      textColor: "text-yellow-700",
      bgColor: "bg-yellow-50",
      benefits: ["Premium Tenders Access", "International Projects", "Government Incubation", "Physical Office Support", "Priority Recommendations"]
    },
    {
      grade: "A",
      color: "bg-green-500",
      textColor: "text-green-700",
      bgColor: "bg-green-50",
      benefits: ["Major Tenders Access", "Regional Projects", "Startup Incubation", "Co-working Spaces", "Professional Networks"]
    },
    {
      grade: "B+",
      color: "bg-blue-500",
      textColor: "text-blue-700",
      bgColor: "bg-blue-50",
      benefits: ["Local Tenders", "Community Projects", "Mentorship Programs", "Resource Access", "Skill Development"]
    },
    {
      grade: "B",
      color: "bg-purple-500",
      textColor: "text-purple-700",
      bgColor: "bg-purple-50",
      benefits: ["Basic Tenders", "Small Projects", "Training Programs", "Network Access", "Certificate Recognition"]
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-unifor-purple rounded-full p-3">
              <Award className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">UNCIF Certification Benefits</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Registered institutes & frontliners get UNCIF certificates that unlock numerous opportunities and support systems
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {certificationLevels.map((cert, index) => (
            <Card key={index} className={`h-full border-l-4 border-l-${cert.color.replace('bg-', '')}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`${cert.color} text-white font-bold text-xl px-4 py-2 rounded-lg`}>
                    {cert.grade}
                  </div>
                  <CardTitle className="text-xl">Grade {cert.grade} Certificate</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent>
                <h4 className="font-semibold mb-3 text-gray-800">Benefits & Opportunities:</h4>
                <div className="space-y-2">
                  {cert.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className={`${cert.bgColor} p-2 rounded-md`}>
                      <p className={`text-sm font-medium ${cert.textColor}`}>• {benefit}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-unifor-purple" />
                Certification Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="bg-unifor-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold">Profile Screening</h4>
                    <p className="text-sm text-gray-600">Comprehensive evaluation of your organization and initiatives</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-unifor-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold">Category Assessment</h4>
                    <p className="text-sm text-gray-600">Classification based on domain and social impact</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-unifor-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold">Vision Alignment</h4>
                    <p className="text-sm text-gray-600">Evaluation of your mission alignment with our values</p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="bg-unifor-purple text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold">Grade Assignment</h4>
                    <p className="text-sm text-gray-600">Final certification grade based on all assessments</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-unifor-purple" />
                Priority Domains
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                These domains receive priority consideration for higher grades:
              </p>
              
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Education", "Health", "Innovation", "Sustainability", 
                  "Environment", "Eco-friendly", "Non-profits", "Social Activism"
                ].map((domain, index) => (
                  <Badge key={index} className="bg-unifor-light-purple text-unifor-dark-purple justify-center">
                    {domain}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-unifor-light-purple/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <Globe className="h-5 w-5 text-unifor-purple flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Global Recognition</h4>
                    <p className="text-sm text-gray-600">
                      UNCIF certificates are recognized by international organizations and can open doors to global opportunities
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UNCIFCertification;
