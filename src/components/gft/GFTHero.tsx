
import React from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Globe, TrendingUp } from 'lucide-react';

const GFTHero = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-unifor-purple via-unifor-dark-purple to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
              <Rocket className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Grants & Funds in <span className="text-yellow-300">Tech</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-4 text-purple-100">
            Uniford National Council of Institutes & Frontliner (UNCIF)
          </p>
          
          <p className="text-lg mb-8 text-purple-200 max-w-3xl mx-auto leading-relaxed">
            Dedicated to backing & supporting all individuals through our "Grants & Funds in Tech" program 
            that helps everyone grow and access worldwide opportunities
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Apply for Funding
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-unifor-purple">
              Learn More
            </Button>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <Globe className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <h3 className="font-semibold mb-1">Worldwide Reach</h3>
              <p className="text-purple-200 text-sm">Global opportunities & partnerships</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <h3 className="font-semibold mb-1">30-70% Funding</h3>
              <p className="text-purple-200 text-sm">Substantial financial support</p>
            </div>
            <div className="text-center">
              <Rocket className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
              <h3 className="font-semibold mb-1">UNCIF Certified</h3>
              <p className="text-purple-200 text-sm">Premium certification benefits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GFTHero;
