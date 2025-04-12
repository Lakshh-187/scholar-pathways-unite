
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-unifor-dark to-black text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="hero-text tracking-tight">
              Empowering <span className="text-unifor-purple">Scholars</span> For Tomorrow's World
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A complete ecosystem where scholars learn, perform, and connect with opportunities through the Talent Hunt Alliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="primary-btn" size="lg">
                Apply for ID Card
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button className="secondary-btn" size="lg">
                Explore Programs
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-gray-400">Trusted by leading institutions and organizations</p>
              <div className="flex flex-wrap gap-8 items-center mt-4">
                <div className="h-8 w-20 bg-white/10 rounded"></div>
                <div className="h-8 w-24 bg-white/10 rounded"></div>
                <div className="h-8 w-20 bg-white/10 rounded"></div>
                <div className="h-8 w-28 bg-white/10 rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="glass-card p-8 bg-white/5 border-white/10 max-w-md mx-auto">
              <div className="absolute -top-5 -right-5 h-20 w-20 bg-gradient-to-br from-unifor-magenta to-unifor-purple rounded-lg rotate-12"></div>
              <div className="relative z-10">
                <div className="w-full h-10 bg-white/10 rounded-md mb-4"></div>
                <div className="w-3/4 h-6 bg-white/10 rounded-md mb-10"></div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-unifor-purple flex items-center justify-center text-white font-bold">1</div>
                    <div className="flex-1">
                      <div className="w-full h-6 bg-white/10 rounded-md"></div>
                      <div className="w-3/4 h-4 bg-white/10 rounded-md mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-unifor-purple/70 flex items-center justify-center text-white font-bold">2</div>
                    <div className="flex-1">
                      <div className="w-full h-6 bg-white/10 rounded-md"></div>
                      <div className="w-3/4 h-4 bg-white/10 rounded-md mt-2"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-unifor-purple/50 flex items-center justify-center text-white font-bold">3</div>
                    <div className="flex-1">
                      <div className="w-full h-6 bg-white/10 rounded-md"></div>
                      <div className="w-3/4 h-4 bg-white/10 rounded-md mt-2"></div>
                    </div>
                  </div>
                </div>
                
                <div className="w-full h-12 bg-unifor-purple/80 rounded-md mt-10 flex items-center justify-center">
                  <div className="w-3/4 h-4 bg-white/20 rounded-md"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-unifor-blue/30 backdrop-blur-xl rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
