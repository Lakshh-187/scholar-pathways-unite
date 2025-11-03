import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Rocket, Film, Heart, Star, Globe, Building } from 'lucide-react';

const programs = [
  { name: 'Uniford Incubation Cell', icon: Rocket, color: 'from-blue-500 to-cyan-500', description: 'Nurturing innovation and entrepreneurship' },
  { name: 'School Cinema', icon: Film, color: 'from-purple-500 to-pink-500', description: 'Transforming education through visual storytelling' },
  { name: 'Her - Hava', icon: Heart, color: 'from-pink-500 to-rose-500', description: 'Empowering women in education' },
  { name: 'Stanburg', icon: Star, color: 'from-yellow-500 to-orange-500', description: 'Excellence in academic recognition' },
  { name: 'SDG Movement', icon: Globe, color: 'from-green-500 to-emerald-500', description: 'Driving sustainable development goals' },
  { name: '1 Million Safe & Standard Schools', icon: Building, color: 'from-indigo-500 to-purple-500', description: 'Creating secure learning environments' },
];

const ProgramsInMotionCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % programs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const getVisiblePrograms = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(programs[(currentIndex + i) % programs.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-96 w-96 rounded-full bg-blue-500 blur-3xl top-10 left-10 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-2 mb-4 text-lg">
            ACTIVE INITIATIVES
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programs in Motion
          </h2>
          <p className="text-gray-300 text-lg">
            Live programs creating real impact across the educational landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {getVisiblePrograms().map((program, index) => {
            const Icon = program.icon;
            return (
              <Card 
                key={`${program.name}-${index}`}
                className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-white/40 animate-fade-in"
              >
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-white">{program.name}</h3>
                    <p className="text-gray-300 text-sm">{program.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {programs.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsInMotionCarousel;
