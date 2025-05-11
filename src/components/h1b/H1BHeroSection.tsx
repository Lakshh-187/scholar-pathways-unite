
import React from 'react';
import { GraduationCap, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const H1BHeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unifor-purple/30 via-unifor-light-purple/20 to-white z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-unifor-light-purple/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-unifor-purple/30 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="bg-unifor-purple/10 p-5 rounded-full mb-6 animate-fade-in">
            <GraduationCap className="h-12 w-12 text-unifor-purple" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            H-1B Scholar Resources
          </h1>
          
          {/* Inspiring Heading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-unifor-purple mb-4 animate-fade-in">
            Built by Alumni. Empowering Students. One Resource at a Time.
          </h2>
          
          {/* Subheading */}
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in">
            Access guides, templates, referrals & mentorship support from real experiences.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button size="lg" className="bg-unifor-purple hover:bg-unifor-dark-purple">
              <FileText className="mr-2 h-5 w-5" />
              Explore Resources
            </Button>
            <Button size="lg" variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple/30">
              <Users className="mr-2 h-5 w-5" />
              Donate a Resource
            </Button>
            <Button size="lg" variant="secondary">
              Request Help
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default H1BHeroSection;
