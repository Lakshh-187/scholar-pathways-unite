
import React from 'react';
import { BriefcaseBusiness, ArrowRight, LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CareerHeroSection = () => {
  const scrollToOpenRoles = () => {
    const element = document.getElementById('open-roles');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-unifor-purple/30 via-unifor-blue/20 to-white z-0"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-unifor-purple/30 blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="bg-unifor-blue/10 p-5 rounded-full mb-6 animate-fade-in">
            <BriefcaseBusiness className="h-12 w-12 text-unifor-blue" />
          </div>
          
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Explore Careers With Us
          </h1>
          
          {/* Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold text-unifor-blue mb-4 animate-fade-in">
            Find Your Next Role. Build a Career That Matters.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl animate-fade-in">
            View open roles, apply directly, and unlock your full potential with us.
          </p>
          
          {/* Animated Illustration */}
          <div className="w-full max-w-3xl mb-12 relative">
            <div className="aspect-video bg-white/80 rounded-xl shadow-lg p-6 flex items-center justify-center">
              <div className="flex items-end gap-4 h-40">
                <div className="w-12 bg-blue-100 rounded-t-md h-20 animate-pulse"></div>
                <div className="w-12 bg-blue-200 rounded-t-md h-32 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                <div className="w-12 bg-blue-300 rounded-t-md h-24 animate-pulse" style={{animationDelay: '0.4s'}}></div>
                <div className="w-12 bg-blue-400 rounded-t-md h-36 animate-pulse" style={{animationDelay: '0.6s'}}></div>
                <div className="w-12 bg-blue-500 rounded-t-md h-40 animate-pulse" style={{animationDelay: '0.8s'}}></div>
                <LineChart className="h-16 w-16 text-unifor-purple absolute top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
            <Button 
              size="lg" 
              className="bg-unifor-blue hover:bg-blue-700"
              onClick={scrollToOpenRoles}
            >
              View Open Roles
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-unifor-blue text-unifor-blue hover:bg-unifor-blue/10"
            >
              Submit Application
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerHeroSection;
