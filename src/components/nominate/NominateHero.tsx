import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Star, ArrowRight, Trophy, Film } from "lucide-react";
import { Link } from "react-router-dom";

const NominateHero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, black 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-black/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-black text-yellow-400 border-none px-4 py-2 text-sm font-medium">
            <Film className="w-4 h-4 mr-2" />
            Great School Cinema
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-black">
            Nominate Your School for
            <span className="block mt-2 text-white drop-shadow-lg">
              Global Recognition
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-black/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Cinema" is a stage to appreciate schools' best practices, achievements & stories. 
            We recommend schools for recognition, accreditation, awards, TEDx & global platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button size="lg" className="bg-black text-yellow-400 hover:bg-black/90 gap-2 px-8 py-6 text-lg">
              <Trophy className="w-5 h-5" />
              Nominate Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-black text-black hover:bg-black/10 gap-2 px-8 py-6 text-lg"
              asChild
            >
              <Link to="/greats">
                <Award className="w-5 h-5" />
                Explore Greats
              </Link>
            </Button>
          </div>

          {/* Achievement Badge */}
          <div className="inline-flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                <Star className="w-6 h-6 text-black" />
              </div>
              <div className="w-12 h-12 rounded-full bg-black border-2 border-white flex items-center justify-center">
                <Award className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="w-12 h-12 rounded-full bg-yellow-400 border-2 border-white flex items-center justify-center">
                <Trophy className="w-6 h-6 text-black" />
              </div>
            </div>
            <div className="text-left">
              <p className="font-bold text-black text-lg">Best Schools Get Recognized</p>
              <p className="text-black/70 text-sm">As "Great Place to Learn"</p>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default NominateHero;
