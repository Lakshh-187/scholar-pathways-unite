
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, TrendingUp, Globe, Zap, ExternalLink, ArrowRight, DollarSign, Code, Lightbulb } from 'lucide-react';

const GFTSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            GFT Program
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-unifor-dark-purple">
            Grants & Funds in <span className="text-yellow-500">Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Get 30-70% funding support for your tech projects including websites, AI solutions, 
            e-commerce platforms, and institutional software through our comprehensive funding program.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-unifor-dark-purple">How GFT Works</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-unifor-purple text-white flex items-center justify-center font-bold mr-4 mt-1">1</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Submit Your Tech Project</h4>
                  <p className="text-gray-600">Share your project details, requirements, and category for assessment.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-unifor-blue text-white flex items-center justify-center font-bold mr-4 mt-1">2</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Get Funding Approval</h4>
                  <p className="text-gray-600">Receive 30-70% funding based on your project category and impact potential.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold mr-4 mt-1">3</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Build & Launch</h4>
                  <p className="text-gray-600">Work with our partner tech companies to build and deploy your solution.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center font-bold mr-4 mt-1">4</div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Get UNCIF Certified</h4>
                  <p className="text-gray-600">Receive certification grades (A, A+, B, B+) for additional benefits and opportunities.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-unifor-purple to-unifor-dark-purple text-white">
              <CardContent className="p-6 text-center">
                <DollarSign className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">30-70%</h4>
                <p className="text-purple-100">Funding Support</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-unifor-blue to-blue-600 text-white">
              <CardContent className="p-6 text-center">
                <Code className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">Tech</h4>
                <p className="text-blue-100">Solutions Built</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500 to-emerald-600 text-white">
              <CardContent className="p-6 text-center">
                <Globe className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h4 className="text-xl font-bold mb-2">Global</h4>
                <p className="text-green-100">Opportunities</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-500 to-orange-500 text-white">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-white" />
                <h4 className="text-xl font-bold mb-2">Innovation</h4>
                <p className="text-yellow-100">Driven Projects</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Priority Categories */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12 border border-gray-200">
          <h3 className="text-2xl font-bold text-center mb-8 text-unifor-dark-purple">Priority Categories (A Category - Higher Funding)</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto mb-3 text-xl">🎓</div>
              <h4 className="font-semibold text-green-700">Education</h4>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mx-auto mb-3 text-xl">🏥</div>
              <h4 className="font-semibold text-blue-700">Health</h4>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center mx-auto mb-3 text-xl">💡</div>
              <h4 className="font-semibold text-purple-700">Innovation</h4>
            </div>
            <div className="text-center p-4 bg-emerald-50 rounded-lg">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-3 text-xl">🌱</div>
              <h4 className="font-semibold text-emerald-700">Environment</h4>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-unifor-purple to-unifor-dark-purple rounded-xl p-8 text-white text-center">
          <Rocket className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl font-bold mb-4">Ready to Fund Your Tech Project?</h3>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful projects that received funding through our GFT program. 
            Transform your tech ideas into reality with substantial financial support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/gft">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Explore GFT Program
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/gft">
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-semibold px-8 py-3 text-lg rounded-lg transition-all duration-300">
                View Success Stories
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GFTSection;
