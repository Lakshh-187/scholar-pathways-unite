import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, FileText, Users, Award, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import icssSchoolImage from "@/assets/icss-school.jpg";

const ICSSLegalCompliance = () => {
  const [isOpen, setIsOpen] = useState(false);

  const services = [
    {
      icon: Shield,
      title: "Child Protection Policy Development",
      description: "Tailored policies aligned with POCSO & NCPCR guidelines to prevent abuse and establish a safe school environment."
    },
    {
      icon: BookOpen,
      title: "POCSO Legal Compliance Training",
      description: "Workshops for educators and leaders on reporting obligations, accountability, and compliance strategies."
    },
    {
      icon: Users,
      title: "Sexual Harassment Policy (POSH)",
      description: "Development of gender-neutral POSH policies in line with the 2013 Act to address harassment and ensure equality."
    },
    {
      icon: Award,
      title: "POSH Awareness Training",
      description: "Interactive staff training to recognize, address, and prevent harassment, fostering inclusive learning spaces."
    },
    {
      icon: FileText,
      title: "Annual School Safety Audit",
      description: "Comprehensive safety audits of policies, infrastructure, and processes to identify risks and ensure compliance."
    },
    {
      icon: CheckCircle,
      title: "Ongoing Advisory Services",
      description: "Year-round legal and compliance support to help schools manage regulations with confidence."
    }
  ];

  const benefits = [
    "School Safety Compliance Manual (Hard Copy)",
    "National School Safety Compliance Helpline access",
    "Certificate of Membership (Hard Copy)",
    "School Safety Awareness Posters (Hard Copy)",
    "Safety Compliance Monthly Activity Calendar",
    "Live Webinars by Subject Matter Experts",
    "Monthly Newsletters on School Safety",
    "Discounts on School Safety Solutions",
    "Eligibility for National Safe School Awards"
  ];

  const whySchoolsNeed = [
    "Stay legally compliant",
    "Ensure safeguarding policies",
    "Train staff to address abuse",
    "Maintain a safe and positive environment"
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and Badge */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={icssSchoolImage}
                  alt="ICSS Safe & Standard School - Modern Indian School with Safety Certification"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* ICSS Badge Overlay */}
                <div className="absolute top-6 left-6 right-6 flex justify-center">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full shadow-xl border-4 border-white/20">
                    <div className="flex items-center gap-2">
                      <Shield className="h-6 w-6" />
                      <span className="font-bold text-lg">ICSS CERTIFIED</span>
                    </div>
                  </div>
                </div>
                
                {/* Bottom Badge */}
                <div className="absolute bottom-6 left-6 right-6">
                  <Badge className="bg-white text-blue-800 px-4 py-2 text-base font-semibold shadow-lg">
                    SAFE & STANDARD SCHOOL
                  </Badge>
                </div>
              </div>
            </div>

            {/* Right side - Content */}
            <div className="space-y-6">
              <div>
                <Badge className="bg-blue-100 text-blue-700 mb-4">LEGAL COMPLIANCE</Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Legal Compliance for Schools – ICSS
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Schools in India are legally mandated to adopt robust child protection measures under laws such as the POCSO Act, 2012, NCPCR Guidelines, and the POSH Act, 2013.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg shadow-lg">
                      Learn More About ICSS
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </DialogTrigger>
                  
                  <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-blue-800 flex items-center gap-2">
                        <Shield className="h-6 w-6" />
                        Legal Compliance for Schools – ICSS
                      </DialogTitle>
                      <DialogDescription className="text-lg text-gray-600 leading-relaxed">
                        At ICSS, we empower schools to stay compliant with regulations while building a safe, structured, and accountable educational environment.
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-8 mt-6">
                      {/* Why Partner with ICSS */}
                      <Card>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-4 text-blue-800">Why Partner with ICSS?</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>Exclusive access to India's 1st School Safety Network</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>A structured compliance & certification pathway for schools</span>
                              </div>
                            </div>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>Practical tools to turn policies into everyday practice</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>National recognition as a leader in child protection & safety compliance</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Services Offered */}
                      <div>
                        <h3 className="text-xl font-bold mb-6 text-blue-800">Services Offered</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {services.map((service, index) => (
                            <Card key={index} className="hover:shadow-lg transition-shadow">
                              <CardContent className="p-4">
                                <div className="flex items-start gap-3">
                                  <service.icon className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                                  <div>
                                    <h4 className="font-semibold text-sm mb-2">{service.title}</h4>
                                    <p className="text-gray-600 text-xs leading-relaxed">{service.description}</p>
                                  </div>
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>

                      {/* Why Schools Need This */}
                      <Card className="bg-green-50">
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold mb-4 text-green-800">Why Schools Need This</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {whySchoolsNeed.map((need, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-green-600" />
                                <span>{need}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      {/* ICSS Membership Benefits */}
                      <div>
                        <h3 className="text-xl font-bold mb-6 text-blue-800">ICSS Membership Benefits</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <CheckCircle className="h-5 w-5 text-blue-600" />
                              <span className="text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center pt-6">
                        <Button onClick={() => setIsOpen(false)} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                          Join ICSS Today
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg">
                  Get Compliance Audit
                </Button>
              </div>

              {/* Quick highlights */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Legal Compliance</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">24/7</div>
                  <div className="text-sm text-gray-600">Helpline Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ICSSLegalCompliance;