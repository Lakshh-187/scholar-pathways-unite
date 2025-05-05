
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-unifor-dark to-black text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <img 
          src="https://www.uniford.org/uniford-main/temp.jpg" 
          alt="Background Scholar Pattern"
          className="w-full h-full object-cover mix-blend-overlay opacity-30"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4 animate-pulse">
              <span className="text-white font-semibold tracking-wider">Non-profit Organization</span>
            </div>
            <h1 className="hero-text tracking-tight">
              Empowering <span className="text-unifor-purple">Scholars</span> For Tomorrow's World
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A complete ecosystem where scholars learn, perform, and connect with opportunities through the Talent Hunt Alliance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/id-card">
                <Button className="primary-btn" size="lg">
                  Apply for ID Card
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/programs">
                <Button className="secondary-btn" size="lg">
                  Explore Programs
                </Button>
              </Link>
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
            <div className="relative mx-auto">
              <img 
                src="https://www.uniford.org/uniford-main/temp.jpg" 
                alt="Uniford Scholars" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
            </div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-unifor-blue/30 backdrop-blur-xl rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
