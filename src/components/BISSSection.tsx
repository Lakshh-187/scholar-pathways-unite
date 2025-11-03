import { Shield, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BISSSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="bg-blue-100 text-blue-700 mb-4">SAFETY & STANDARDS</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              BISS - Bringing International Standard & Safety
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="text-lg">
                Transforming educational institutions through comprehensive safety protocols and international standards implementation.
              </p>
              
              <Card className="border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Global safety standards compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>POSH & POCSO implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Cyber safety & digital protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span>Environmental & health standards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/lovable-uploads/uniford-flags.png" 
                alt="BISS - International Standards and Safety"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BISSSection;
