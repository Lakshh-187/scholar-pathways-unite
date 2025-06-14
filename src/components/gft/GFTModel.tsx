
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Code, Building, ArrowRight } from 'lucide-react';

const GFTModel = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">How Our Model Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with different tech companies & groups to help you build your technology solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="border-l-4 border-l-unifor-purple">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-unifor-purple rounded-full p-2 flex-shrink-0">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Partnership Network</h3>
                    <p className="text-gray-600">
                      We've partnered with different tech companies & groups to provide comprehensive tech solutions
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Tech Solutions We Support</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>• Institutional Software & AI Portals</p>
                      <p>• Business Websites & E-commerce Stores</p>
                      <p>• Blogs & Digital Platforms</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-500 rounded-full p-2 flex-shrink-0">
                    <Building className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Additional Benefits</h3>
                    <p className="text-gray-600">
                      12A & 80G tax benefits help with tax assumptions, plus UNCIF certification for additional opportunities
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-gradient-to-br from-unifor-light-purple to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-unifor-dark-purple">Funding Structure</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Organization Funds</span>
                  <span className="text-2xl font-bold text-unifor-purple">30-70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-unifor-purple h-3 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Your Contribution</span>
                  <span className="text-2xl font-bold text-gray-600">30-70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-gray-400 h-3 rounded-full" style={{width: '30%'}}></div>
                </div>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-sm text-gray-600">
                  Funding percentage depends on business category & initiative type
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GFTModel;
