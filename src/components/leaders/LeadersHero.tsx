
import React from 'react';

const LeadersHero = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute h-64 w-64 rounded-full bg-purple-400 blur-3xl top-20 left-20 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-blue-400 blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight animate-fade-in">
              Meet the Faces Behind the Vision
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Explore the team of changemakers, innovators, and mentors powering our mission.
            </p>
            <p className="text-lg italic text-blue-200 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              "Each leader, a legacy. Each mentor, a movement."
            </p>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="grid grid-cols-3 gap-4 relative">
              {Array(9).fill(0).map((_, index) => (
                <div 
                  key={index}
                  className="aspect-square rounded-lg bg-white/20 backdrop-blur-sm overflow-hidden"
                  style={{ 
                    animationDelay: `${0.1 * index}s`,
                    transform: `translateY(${Math.sin(index * 0.8) * 20}px)`
                  }}
                >
                  <div className="h-full w-full bg-gradient-to-br from-blue-500/50 to-purple-500/50"></div>
                </div>
              ))}
            </div>
            <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-blue-500/30 backdrop-blur-xl rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadersHero;
