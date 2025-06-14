
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Building, Users, Award, Globe, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const UNCIFSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            UNCIF NETWORK
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
            <span className="text-yellow-600">Uniford</span> National Council of <br />
            <span className="text-unifor-purple">Institutes</span> & <span className="text-unifor-blue">Frontliners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Empowering institutes and frontliners through grants, funds, and technology 
            to create worldwide opportunities and drive innovation across educational ecosystems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border border-green-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 mx-auto">
                    <Building className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Institute Development</h3>
                  <p className="text-gray-600 text-sm">Transform educational institutions to international standards</p>
                </CardContent>
              </Card>

              <Card className="border border-blue-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 mx-auto">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Frontliner Support</h3>
                  <p className="text-gray-600 text-sm">Backing frontliners with tech solutions and funding</p>
                </CardContent>
              </Card>

              <Card className="border border-yellow-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-4 mx-auto">
                    <Award className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">UNCIF Certification</h3>
                  <p className="text-gray-600 text-sm">Premium certifications with A, A+, B, B+ grades</p>
                </CardContent>
              </Card>

              <Card className="border border-purple-200 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-4 mx-auto">
                    <Globe className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="font-bold text-gray-800 mb-2">Global Network</h3>
                  <p className="text-gray-600 text-sm">Worldwide opportunities and partnerships</p>
                </CardContent>
              </Card>
            </div>

            {/* Key Features List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Grants and funding for educational transformation</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Technology integration and AI-powered platforms</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">International research and development programs</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">Student opportunity creation and global exposure</span>
              </div>
            </div>

            <Link to="/uirad">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                Explore UNCIF Programs
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Images Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://i.ibb.co/PvQTGvqQ/an-inspiring-photo-of-a-confident-student-with-a-m-y-LHo-SSq-KRg2-KX9z-L86db-YQ-5deos-Yky-SL20-r-N3a.jpg" 
                    alt="Uniford Scholar Achievers Meet 2024"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://i.ibb.co/jmdwCMS/a-vibrant-engaging-booth-for-uniford-with-a-modern-g-Uo5-Ae-Df-STe-HJx-Yvtyw00-Q-AMmpu-NKs-Sb-O8o9z.jpg" 
                    alt="Uniford Volunteer Impact"
                    className="w-full h-32 object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://i.ibb.co/Mx6K1nbj/a-photo-of-a-young-girl-wearing-a-uniford-shirt-wi-9-Hegk7-GWSBKHsu-H2i-He-Mn-Q-k-Ca-Tap-KZQf-GGdsvy.jpg" 
                    alt="International Conference on Educational Innovation"
                    className="w-full h-32 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://i.ibb.co/Pvv7psn6/a-social-media-image-of-a-lively-event-scene-with-lnrmn4u-DQ0-Cw-ZH-7k-WDUPg-Lq-NEDYIo-R3e-Ju-Fag-Ru.jpg" 
                    alt="Scholar Leadership Summit"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-unifor-purple">200+</div>
                <div className="text-sm text-gray-600">Certified Institutes</div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">Frontliners Supported</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-unifor-light-purple to-purple-50 rounded-xl p-8">
          <Shield className="h-12 w-12 text-unifor-purple mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Join the UNCIF Network</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Become part of a transformative network that's reshaping education through innovation, 
            funding, and global opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/uirad">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white">
                Learn More About UNCIF
              </Button>
            </Link>
            <Link to="/apply">
              <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple">
                Apply Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UNCIFSection;
