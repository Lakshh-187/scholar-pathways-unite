
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Building, Globe, Award, Users, ArrowRight, Shield, CheckCircle } from 'lucide-react';

const UNCIFHero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-unifor-dark to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
        <div className="absolute h-80 w-80 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            UNCIF
          </Badge>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-6">
            <span className="text-yellow-300">Uniford</span> National Council of <br />
            <span className="text-unifor-purple">Institutes</span> & <span className="text-unifor-blue">Frontliners</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
            Empowering institutes and frontliners through <span className="font-bold text-yellow-300">grants, funds, and technology</span> 
            to create worldwide opportunities and drive innovation.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
              Join UNCIF Network
              <Shield className="ml-2 h-5 w-5 group-hover:animate-pulse" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Key Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-4 mx-auto">
              <Building className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Institute Development</h3>
            <p className="text-gray-300">Transform educational institutions to international standards</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="w-16 h-16 rounded-full bg-unifor-blue/30 flex items-center justify-center mb-4 mx-auto">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontliner Support</h3>
            <p className="text-gray-300">Backing frontliners with tech solutions and funding</p>
          </div>
          
          <div className="text-center p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
            <div className="w-16 h-16 rounded-full bg-yellow-500/30 flex items-center justify-center mb-4 mx-auto">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">UNCIF Certification</h3>
            <p className="text-gray-300">Premium certifications with A, A+, B, B+ grades</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 shadow-xl">
          <h2 className="text-2xl font-bold text-center mb-8">UNCIF Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-300 mb-2">200+</div>
              <p className="text-gray-300">Certified Institutes</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-unifor-purple mb-2">500+</div>
              <p className="text-gray-300">Frontliners Supported</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-unifor-blue mb-2">₹50Cr+</div>
              <p className="text-gray-300">Funding Provided</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">25</div>
              <p className="text-gray-300">Countries Reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UNCIFHero;
