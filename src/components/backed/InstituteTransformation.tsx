
import { Badge } from '@/components/ui/badge';
import { Award, Check, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const InstituteTransformation = () => {
  const transformations = [
    {
      title: "International Standards",
      description: "Transform your institute using our established programs and connect with AR/VR, International Clubs, UIRAD, UIEC, and Pitchburg.",
      icon: <Award className="h-10 w-10 text-[#7E69AB]" />
    },
    {
      title: "Technology Infrastructure",
      description: "Access websites, stores, software, portals, and complete Pitchburg setup backed by our technical expertise.",
      icon: <Rocket className="h-10 w-10 text-[#7E69AB]" />
    },
    {
      title: "CSR & Alumni Support",
      description: "Leverage CSR grants and alumni donations to fund transformative initiatives and infrastructure upgrades.",
      icon: <Check className="h-10 w-10 text-[#7E69AB]" />
    }
  ];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            INSTITUTE TRANSFORMATION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Transform Institutes</h2>
          <p className="text-gray-600 text-lg">
            Uniford Foundation is dedicated to transforming institutes to international standards using CSR grants and alumni donations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {transformations.map((item, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="h-16 w-16 bg-[#F3EAFD] rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#F3EAFD] to-[#E1EBFD] rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Milestone for 2026</h3>
              <p className="text-gray-600 mb-6">
                We aim to back 1000+ institutes, impact 100,000+ students, and expand to 25 states across the country by 2026 through our transformation initiatives.
              </p>
              <ul className="space-y-3">
                {[
                  "Establish Pitchburg centers in all backed institutes",
                  "Implement UIRAD curriculum across partner institutions",
                  "Connect all institutes to international platforms and resources",
                  "Create a self-sustainable model for long-term growth"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="bg-[#7E69AB] rounded-full p-1 mr-3">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="font-semibold">Institutes Backed</span>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold text-[#7E69AB]">1000+</span>
                    <span className="text-xs text-gray-500">Target by 2026</span>
                  </div>
                </div>
                <div className="flex items-center justify-between border-b pb-4">
                  <span className="font-semibold">Students Impacted</span>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold text-[#7E69AB]">100K+</span>
                    <span className="text-xs text-gray-500">Target by 2026</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">States Covered</span>
                  <div className="flex flex-col items-end">
                    <span className="text-2xl font-bold text-[#7E69AB]">25+</span>
                    <span className="text-xs text-gray-500">Target by 2026</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstituteTransformation;
