import { Users, School, Target, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const OneMillionOneBillionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/uniford-edutech-fair.png" 
              alt="1M 1B - One Million Safe Schools"
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <Badge className="bg-indigo-100 text-indigo-700 mb-4">GLOBAL MISSION</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              1M 1B Mission
            </h2>
            <p className="text-xl text-indigo-900 font-semibold mb-6">
              1 Million Safe & Standard Schools for 1 Billion Frontliners
            </p>
            
            <div className="space-y-4">
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-indigo-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <School className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-indigo-900">1,000,000</h3>
                      <p className="text-gray-600">Safe & Standard Schools</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-indigo-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-indigo-100 p-3 rounded-full">
                      <Users className="h-8 w-8 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-2xl text-indigo-900">1,000,000,000</h3>
                      <p className="text-gray-600">Empowered Frontliners</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                  <CardContent className="p-4 text-center">
                    <Target className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-semibold">2030 Goal</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white">
                  <CardContent className="p-4 text-center">
                    <TrendingUp className="h-6 w-6 mx-auto mb-2" />
                    <p className="font-semibold">Global Impact</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneMillionOneBillionSection;
