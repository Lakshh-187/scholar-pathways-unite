
import React from 'react';
import { Building, Users, Award, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const UCPISection = () => {
  const features = [
    {
      icon: <Building className="h-8 w-8 text-unifor-purple" />,
      title: "CSR Programs Integration",
      description: "Transform regional institutes through strategic CSR programs and establishment support"
    },
    {
      icon: <Users className="h-8 w-8 text-unifor-purple" />,
      title: "Venture Group Collaboration",
      description: "Partner with venture groups to enhance institutional infrastructure and capabilities"
    },
    {
      icon: <Award className="h-8 w-8 text-unifor-purple" />,
      title: "International Standards",
      description: "Elevate institutes to meet international education and facility standards"
    },
    {
      icon: <Rocket className="h-8 w-8 text-unifor-purple" />,
      title: "Transformative Growth",
      description: "Enable comprehensive institutional development through structured programs"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-unifor-dark-purple mb-4">
            Uniford Council of Private Institutes (UCPI)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transforming regional institutes to international standards through CSR programs, 
            establishments & venture group collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UCPISection;
