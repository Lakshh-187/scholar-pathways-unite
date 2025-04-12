
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { UIRADIntro } from '@/components/UIRADIntro';
import { UIRADInterrelation } from '@/components/UIRADInterrelation';
import { UIRADImpact } from '@/components/UIRADImpact';
import { Book, Globe, Layers, Database, Award, Rocket, School } from 'lucide-react';

const UIRAD = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-20">
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              UIRAD
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-unifor-dark-purple">
              Uniford International Research & Academic Development
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Research-driven academic innovation hub that transforms institutes to international standards.
            </p>
          </div>
          
          <UIRADIntro />
          <UIRADInterrelation />
          <UIRADImpact />
        </div>
      </section>
    </div>
  );
};

export default UIRAD;
