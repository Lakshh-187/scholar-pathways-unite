import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UNCIFSDGSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="bg-purple-100 text-purple-700 mb-4">SUSTAINABLE DEVELOPMENT</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              UNCIF SDG Certification
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Join the global movement for sustainable development. Get recognized for your commitment to UN Sustainable Development Goals.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Globe className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">17 SDG Categories</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Heart className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">Free Certification</p>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <CardContent className="p-4 text-center">
                    <Leaf className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <p className="font-semibold">Global Recognition</p>
                  </CardContent>
                </Card>
              </div>
              
              <Link to="/apply">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg mt-6">
                  Apply for SDG Certification
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-8">
              <img 
                src="/sdg-logo.png" 
                alt="UN Sustainable Development Goals"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UNCIFSDGSection;
