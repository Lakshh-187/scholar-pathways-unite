import React from 'react';
import { Globe, Calendar, Building2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const UCISSection = () => {
  const chapters = [
    { country: 'UAE', flag: '🇦🇪' },
    { country: 'Singapore', flag: '🇸🇬' },
    { country: 'Nigeria', flag: '🇳🇬' },
    { country: 'Australia', flag: '🇦🇺' },
    { country: 'Canada', flag: '🇨🇦' },
    { country: 'America', flag: '🇺🇸' },
    { country: 'Ireland', flag: '🇮🇪' },
    { country: 'China', flag: '🇨🇳' },
    { country: 'India', flag: '🇮🇳' },
  ];

  const conferences = [
    'SDG-26',
    'Child Safety',
    'AI in Education',
    'ARVR in Pre-schools',
    'LLM-s',
    'P-models'
  ];

  const establishments = [
    'Frontliner',
    'Pitchburg',
    'Stanburg',
    'Uniford Literacy Club'
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            GLOBAL NETWORK
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            UCIS
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uniford Council of International Schools
          </p>
          <p className="text-2xl font-semibold text-primary mt-2">
            "Bringing International Standard in Schools"
          </p>
        </div>

        {/* Chapters Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Globe className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-foreground">Our Chapters</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {chapters.map((chapter, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{chapter.flag}</div>
                  <h4 className="font-semibold text-foreground">{chapter.country}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Conferences Section */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Calendar className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-foreground">Conferences</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {conferences.map((conference, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground">{conference}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Establishments Section */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <Building2 className="text-primary" size={28} />
            <h3 className="text-2xl font-bold text-foreground">Establishments</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {establishments.map((establishment, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/50">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Building2 className="text-primary" size={24} />
                  </div>
                  <h4 className="font-semibold text-foreground">{establishment}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground">
            Join our global network of educational excellence
          </p>
        </div>
      </div>
    </section>
  );
};

export default UCISSection;