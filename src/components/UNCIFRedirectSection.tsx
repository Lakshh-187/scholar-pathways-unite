import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, Globe, GraduationCap, Award } from 'lucide-react';

const UNCIFRedirectSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-700 px-6 py-2 mb-6 text-lg font-bold">
              PRESTIGIOUS COUNCIL
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
              Join UNCIF Council
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto mb-8">
              Uniford National Council of Institutes & Frontliners - Where excellence meets opportunity 
              through verified credentials and global networking.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">Official Verification</h3>
                    <p className="text-gray-600">Get verified credentials and build your credibility through official UNCIF programs</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">Global Opportunities</h3>
                    <p className="text-gray-600">Access worldwide internships, scholarships, and research opportunities</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">Elite Programs</h3>
                    <p className="text-gray-600">Participate in UNSIP, Uni-Pitch, and exclusive educational initiatives</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-900 mb-2">Recognition & Growth</h3>
                    <p className="text-gray-600">Build your profile through competitions, achievements, and verified accomplishments</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/uncif">
                  <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4 rounded-lg shadow-lg">
                    Explore UNCIF
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg px-8 py-4 rounded-lg"
                  asChild
                >
                  <a href="https://uncif.uniford.org/" target="_blank" rel="noopener noreferrer">
                    Visit UNCIF Portal
                    <Globe className="ml-2 h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-gradient-to-br from-red-600 to-red-700 text-white">
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                    <div className="text-3xl font-bold mb-2">500+</div>
                    <div className="text-red-100">Verified Members</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white">
                  <CardContent className="p-6 text-center">
                    <Globe className="h-12 w-12 mx-auto mb-4 text-red-900" />
                    <div className="text-3xl font-bold mb-2">25+</div>
                    <div className="text-yellow-100">Countries</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
                  <CardContent className="p-6 text-center">
                    <GraduationCap className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                    <div className="text-3xl font-bold mb-2">1200+</div>
                    <div className="text-blue-100">Opportunities</div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-600 to-green-700 text-white">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                    <div className="text-3xl font-bold mb-2">95%</div>
                    <div className="text-green-100">Success Rate</div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-600 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Join the Elite Council?</h3>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Apply for your UNCIF ID card and become part of a prestigious network that opens doors to global opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/id-card">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold text-lg px-8 py-4">
                  Apply for ID Card
                  <Shield className="ml-2 h-6 w-6" />
                </Button>
              </Link>
              <Link to="/uncif">
                <Button 
                  variant="outline" 
                  className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-red-900 font-bold text-lg px-8 py-4"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UNCIFRedirectSection;