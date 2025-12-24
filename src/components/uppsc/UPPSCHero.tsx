import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { School, ArrowRight, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const UPPSCHero = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Safety', 'Standard', 'Excellence', 'Innovation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white space-y-6">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-sm px-4 py-2">
              <School className="w-4 h-4 mr-2 inline" />
              UPPSC Initiative
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="block">Uttar Pradesh</span>
              <span className="block text-2xl md:text-3xl font-semibold text-yellow-200 mt-2">
                Progressive Schools Council
              </span>
            </h1>
            
            <div className="space-y-2">
              <p className="text-xl md:text-2xl text-amber-100/90">
                For <span className="text-yellow-400 font-bold">"Bringing International</span>
              </p>
              <p className="text-xl md:text-2xl text-amber-100/90">
                <span className="inline-block min-w-[160px] font-bold text-yellow-400 text-3xl">
                  {words[currentWordIndex]}
                </span>
                <span className="text-yellow-400 font-bold">"</span> Movement
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-yellow-500/20">
              <div className="flex items-center gap-3 mb-3">
                <img src="/uniford-logo.png" alt="Uniford" className="h-8 object-contain bg-white rounded p-1" />
                <img src="/uncif-logo.png" alt="UNCIF" className="h-8 object-contain bg-white rounded p-1" />
                <img src="/sssa-logo.png" alt="SSSA" className="h-8 object-contain bg-white rounded p-1" />
              </div>
              <p className="text-amber-100/80 text-base leading-relaxed">
                <span className="text-yellow-400 font-bold text-xl">1 Million</span> Safe & Standard Schools for{' '}
                <span className="text-yellow-400 font-bold text-xl">1 Billion</span> Frontliners
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/apply">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-6 text-lg" size="lg">
                  Join the Movement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold px-8 py-6 text-lg" size="lg" asChild>
                <a href="https://biss.uniford.org" target="_blank" rel="noopener noreferrer">
                  BISS Guide Book
                </a>
              </Button>
            </div>

            {/* Stats Strip */}
            <div className="flex flex-wrap gap-8 pt-6">
              {[
                { value: "1M+", label: "Schools Target" },
                { value: "1B+", label: "Frontliners" },
                { value: "50+", label: "Countries" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                  <div className="text-sm text-amber-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img 
                  src="/lovable-uploads/uniford-flags.png" 
                  alt="UPPSC Global Initiative" 
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-yellow-500/30"
                />
                <img 
                  src="/lovable-uploads/uniford-foundation-event.png" 
                  alt="UPPSC Event" 
                  className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img 
                  src="/lovable-uploads/uniford-edutech-fair.png" 
                  alt="EdTech Fair" 
                  className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                />
                <img 
                  src="/lovable-uploads/uniford-art-display.png" 
                  alt="Art Display" 
                  className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-orange-500/30"
                />
              </div>
            </div>
            
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-black p-4 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">1M+</div>
              <div className="text-sm font-medium">Schools Target</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-black/80 backdrop-blur-sm text-white p-4 rounded-xl shadow-xl border border-yellow-500/30">
              <Shield className="w-8 h-8 mb-1 text-yellow-400" />
              <div className="text-sm font-medium">Safety First</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPPSCHero;
