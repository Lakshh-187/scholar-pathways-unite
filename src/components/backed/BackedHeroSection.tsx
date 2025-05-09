
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackedHeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-[#7E69AB] to-[#1A1F2C] text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-[#9b87f5] blur-3xl top-20 left-20 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-[#D3E4FD] blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-pulse">
              <span className="text-white font-semibold tracking-wider">Institute Transformation Initiative</span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
              Transform Your <span className="text-[#9b87f5]">Institute</span> With Uniford Backing
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We partner with institutes to elevate their standards through CSR grants and alumni donations, providing resources, infrastructure, and international opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white" size="lg" onClick={() => document.getElementById('backed-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="#journey">
                <Button className="bg-transparent border border-white hover:bg-white/10 text-white" size="lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border border-white/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold">1000+</h3>
                    <p className="text-sm text-gray-300">Institutes Target</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold">100K+</h3>
                    <p className="text-sm text-gray-300">Students Impact</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold">25+</h3>
                    <p className="text-sm text-gray-300">States Coverage</p>
                  </div>
                  <div className="bg-white/10 p-4 rounded-xl flex flex-col items-center text-center">
                    <h3 className="text-3xl lg:text-4xl font-bold">2026</h3>
                    <p className="text-sm text-gray-300">Target Year</p>
                  </div>
                </div>
                <div className="mt-6">
                  <div className="bg-[#9b87f5]/20 p-4 rounded-xl">
                    <h4 className="font-semibold mb-2">Why Partner With Uniford?</h4>
                    <p className="text-sm text-gray-300">Join our network of backed institutes and access exclusive CSR grants, resources, and international standards.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-8 -right-8 h-32 w-32 bg-[#9b87f5]/30 backdrop-blur-xl rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedHeroSection;
