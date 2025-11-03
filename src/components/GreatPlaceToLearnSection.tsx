import { Award, Star, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const GreatPlaceToLearnSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="/lovable-uploads/uniford-foundation-event.png" 
              alt="Great Place to Learn - Safety & Standard Recognition"
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <Badge className="bg-green-100 text-green-700 mb-4">RECOGNITION & CERTIFICATION</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Great Place to Learn
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Safety & Standard Audit-Based Recognition & Certification
            </p>
            
            <div className="space-y-4">
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Award className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Comprehensive Audit</h3>
                      <p className="text-gray-600">Thorough evaluation of safety protocols, standards compliance, and learning environment quality.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Star className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Official Recognition</h3>
                      <p className="text-gray-600">Internationally recognized certification as a safe and standard learning institution.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <Building className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Excellence Badge</h3>
                      <p className="text-gray-600">Display your commitment to student safety and educational excellence.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreatPlaceToLearnSection;
