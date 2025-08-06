
import React from 'react';
import Layout from '@/components/Layout';
import CredibilityCarousel from '@/components/CredibilityCarousel';
import { Button } from '@/components/ui/button';
import { Award, CheckCircle, Building, Users, Trophy, Mail, Star } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  return (
    <Layout>
      {/* Hero Section with 5-in-1 Image Frame */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              <span className="text-blue-600">Uniford Foundation</span>
              <br />
              <span className="text-purple-600">Transforming Education</span>
            </h1>
            
            {/* 5-in-1 Image Frame */}
            <div className="relative max-w-4xl mx-auto mb-12">
              <div className="grid grid-cols-5 gap-2 p-4 bg-white rounded-2xl shadow-2xl border-4 border-gold">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/4949b6b2-3040-4a7a-a474-5bd28a85a8b3.png" 
                    alt="UNCIF Network Image 1" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png" 
                    alt="UNCIF Network Image 2" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/ad360940-b29b-4c32-9666-1b858478ccd1.png" 
                    alt="UNCIF Network Image 3" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/e6b92560-9760-40ab-a35f-c80a1bbac855.png" 
                    alt="UNCIF Network Image 4" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img 
                    src="/lovable-uploads/be3517cc-e81e-4f61-a133-019267cf75c1.png" 
                    alt="UNCIF Network Image 5" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gold rounded-full"></div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gold rounded-full"></div>
              <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-gold rounded-full"></div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => window.location.href = '/certificate-awards'}
              >
                Explore Our Programs
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-purple-600 text-purple-700 hover:bg-purple-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Join Our Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Great Place to Learn Certification Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="flex items-center gap-3 mb-6">
                  <Trophy className="h-8 w-8 text-yellow-600" />
                  <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-lg font-semibold">
                    UNCIF Certified
                  </Badge>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Get Your School <span className="text-yellow-600">Certified</span> as a 
                  <span className="text-blue-600"> Great Place to Learn</span>
                </h2>
                
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Join the elite network of schools recognized by UNCIF for excellence in education. 
                  Our comprehensive certification program evaluates your institution based on infrastructure, 
                  frontline leadership, and innovative practices to ensure you're truly advancing modern education.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Prestigious Recognition</h4>
                      <p className="text-sm text-gray-600">UNCIF certified excellence</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Grade A++ Available</h4>
                      <p className="text-sm text-gray-600">Highest tier certification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Frontliner Focus</h4>
                      <p className="text-sm text-gray-600">Empowering change agents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                      <Building className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Infrastructure Excellence</h4>
                      <p className="text-sm text-gray-600">Modern learning environments</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg flex items-center gap-2"
                    onClick={() => window.location.href = '/certificate-awards'}
                  >
                    <Award className="h-5 w-5" />
                    Learn More About Certification
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-2 border-yellow-600 text-yellow-700 hover:bg-yellow-50 px-8 py-3 text-lg"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Apply Now
                  </Button>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl transform rotate-6"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-2xl">
                    <img 
                      src="/lovable-uploads/fcae1f06-c4cd-4738-8732-251649bd9ebb.png" 
                      alt="Great Place To Learn Certificate" 
                      className="w-full max-w-sm mx-auto mb-6"
                    />
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Great Place to Learn</h3>
                      <p className="text-gray-600">UNCIF Certification 2025</p>
                      <div className="flex justify-center mt-4">
                        <Badge className="bg-green-100 text-green-800 px-4 py-2">
                          <Star className="h-4 w-4 mr-1" />
                          Premium Recognition
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CredibilityCarousel />
    </Layout>
  );
};

export default Index;
