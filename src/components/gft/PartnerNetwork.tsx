
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Network, Code2, Zap, Shield } from 'lucide-react';

const PartnerNetwork = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-unifor-purple rounded-full p-3">
              <Network className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">Our Technology Partner Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've partnered with leading tech companies and groups to deliver world-class solutions
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-blue-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Code2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Development Partners</h3>
              <p className="text-gray-600 mb-4">
                Leading software development companies specializing in custom solutions
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Full-Stack Development</Badge>
                <Badge variant="outline">Mobile Apps</Badge>
                <Badge variant="outline">Web Platforms</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-purple-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI & Innovation Partners</h3>
              <p className="text-gray-600 mb-4">
                Cutting-edge AI companies providing intelligent solutions and automation
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">AI Integration</Badge>
                <Badge variant="outline">Automation</Badge>
                <Badge variant="outline">Analytics</Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="bg-green-500 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">Security & Infrastructure</h3>
              <p className="text-gray-600 mb-4">
                Trusted partners for secure hosting, cloud solutions, and cybersecurity
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="outline">Cloud Hosting</Badge>
                <Badge variant="outline">Security</Badge>
                <Badge variant="outline">DevOps</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Why Our Partnership Model Works</h3>
            <p className="text-gray-300">We've built a network that ensures quality, reliability, and innovation</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50+</div>
              <p className="text-sm text-gray-300">Tech Partners</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100%</div>
              <p className="text-sm text-gray-300">Quality Guarantee</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <p className="text-sm text-gray-300">Support Available</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">Global</div>
              <p className="text-sm text-gray-300">Reach & Scale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerNetwork;
