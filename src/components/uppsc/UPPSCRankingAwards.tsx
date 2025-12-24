import { Badge } from '@/components/ui/badge';
import { Trophy, Users, Building, Star, GraduationCap } from 'lucide-react';

const rankingParameters = [
  { title: "In-house Student Placements", icon: Users },
  { title: "Achievements in Schools", icon: Trophy },
  { title: "Establishments", icon: Building },
  { title: "Teachers & Frontliners", icon: Star },
  { title: "Credible Student Profiles", icon: GraduationCap }
];

const UPPSCRankingAwards = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-yellow-400 text-black font-bold mb-4">
            <Trophy className="w-4 h-4 mr-2 inline" />
            Ranking & Awards
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Accreditation <span className="text-yellow-400">Parameters</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Comprehensive evaluation based on excellence in various domains
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {rankingParameters.map((param, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-colors border-2 border-gray-800 hover:border-yellow-400">
              <div className="bg-yellow-400 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <param.icon className="w-7 h-7 text-black" />
              </div>
              <p className="font-bold text-sm">{param.title}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-900 px-6 py-4 rounded-xl border-2 border-yellow-400">
            <img src="/uniford-logo.png" alt="Uniford" className="h-10 object-contain bg-white rounded p-1" />
            <div className="h-8 w-px bg-gray-700" />
            <img src="/uncif-logo.png" alt="UNCIF" className="h-10 object-contain bg-white rounded p-1" />
            <span className="text-lg font-bold ml-4">Backed by Uniford & UNCIF</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPPSCRankingAwards;
