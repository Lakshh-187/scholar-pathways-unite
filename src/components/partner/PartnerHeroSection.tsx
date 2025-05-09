
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PartnerHeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-[#7E69AB] to-[#1A1F2C] text-white overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-[#9b87f5] blur-3xl top-20 left-20 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-[#D3E4FD] blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        <img 
          src="https://www.uniford.org/uniford-main/temp.jpg" 
          alt="Background Partnership Pattern"
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
              Join Forces With <span className="text-[#9b87f5]">Uniford</span> To Create Impact
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              We connect the best opportunities, programs, and initiatives with our student community and backed institutes. Partner with us to make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="primary-btn" size="lg" onClick={() => document.getElementById('partnership-form')?.scrollIntoView({ behavior: 'smooth' })}>
                Become a Partner
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <a href="#benefits">
                <Button className="secondary-btn" size="lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="relative mx-auto">
              <img 
                src="https://www.uniford.org/uniford-main/temp.jpg" 
                alt="Uniford Partnership" 
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
            </div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-[#D3E4FD]/30 backdrop-blur-xl rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerHeroSection;
