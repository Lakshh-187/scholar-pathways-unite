import React from "react";
import { Shield, Award, Users } from "lucide-react";

const ApplyHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Transform Your Institution</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Apply for <span className="text-primary">SDG Recognition</span> & Accreditation
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Join a global network of schools committed to excellence in safety, standards, and sustainable development goals.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">17 SDG Categories</div>
                  <div className="text-sm text-muted-foreground">Global Recognition</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">No Hidden Fees</div>
                  <div className="text-sm text-muted-foreground">Fully Funded Program</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/lovable-uploads/uniford-edutech-fair.png" 
              alt="Uniford Edutech Fair"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <img 
              src="/lovable-uploads/uniford-foundation-event.png" 
              alt="Uniford Foundation Event"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
            />
            <img 
              src="/lovable-uploads/uniford-art-display.png" 
              alt="Uniford Art Display"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 -mt-8"
            />
            <img 
              src="/lovable-uploads/uniford-flags.png" 
              alt="Uniford Flags"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      
      {/* SDG Logo Badge */}
      <div className="absolute top-4 right-4 opacity-10">
        <div className="text-9xl font-bold text-primary">SDG</div>
      </div>
    </div>
  );
};

export default ApplyHero;
