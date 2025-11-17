import React from "react";
import { Users, Target, Award } from "lucide-react";

const GetInvolvedHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10 border-b">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Join Our Network</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Get Involved & <span className="text-primary">Make an Impact</span>
            </h1>
            
            <p className="text-lg text-muted-foreground">
              Shape the future of education as an Advisor, Mentor, or Frontliner. Choose your role and drive meaningful change across schools nationwide.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">3 Impact Pathways</div>
                  <div className="text-sm text-muted-foreground">Leadership & Action</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">National Reach</div>
                  <div className="text-sm text-muted-foreground">Transform Education</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="/lovable-uploads/great-place-badge.png" 
              alt="Great Place Badge"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 bg-white p-4"
            />
            <img 
              src="/lovable-uploads/school-bus-certification.jpeg" 
              alt="School Bus Certification"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 mt-8"
            />
            <img 
              src="/lovable-uploads/uniford-certificate.jpeg" 
              alt="Uniford Certificate"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 -mt-8"
            />
            <img 
              src="/lovable-uploads/biss-book.jpeg" 
              alt="BISS Book"
              className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
      
      {/* Background Badge */}
      <div className="absolute top-4 right-4 opacity-10">
        <div className="text-9xl font-bold text-primary">JOIN</div>
      </div>
    </div>
  );
};

export default GetInvolvedHero;
