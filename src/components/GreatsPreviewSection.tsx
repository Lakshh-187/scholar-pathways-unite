import { Award, ArrowRight, Star, Shield, Trophy, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const GreatsPreviewSection = () => {
  const features = [
    { icon: Shield, title: "Safety Excellence", desc: "Comprehensive safety protocols" },
    { icon: Award, title: "Standard Recognition", desc: "NEP-2020 compliance" },
    { icon: Trophy, title: "Prestigious Badge", desc: "Bronze to Platinum levels" },
    { icon: Star, title: "Global Standards", desc: "International benchmarks" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-sm px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              I-GPTL Recognition
            </Badge>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Uniford <span className="text-yellow-400">Greats</span>
            </h2>

            <p className="text-xl text-amber-100/90 leading-relaxed">
              The Authority for <span className="text-yellow-400 font-semibold">Great Place to Learn</span>. 
              A national-to-global recognition framework built on Safety, Standards, Governance, and Learning Culture.
            </p>

            <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-yellow-500/20">
              <p className="text-lg italic text-amber-100">
                "From Good to Great. From Great to Appreciated."
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {['Bronze', 'Silver', 'Gold', 'Platinum'].map((level, idx) => (
                  <Badge 
                    key={level}
                    className={`${
                      idx === 0 ? 'bg-amber-700/50 text-amber-200' :
                      idx === 1 ? 'bg-gray-400/50 text-gray-100' :
                      idx === 2 ? 'bg-yellow-500/50 text-yellow-100' :
                      'bg-gradient-to-r from-gray-300/50 to-gray-100/50 text-gray-800'
                    }`}
                  >
                    {level}
                  </Badge>
                ))}
              </div>
            </div>

            <Link to="/greats">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                Explore Greats <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>

          {/* Right Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{feature.title}</h3>
                <p className="text-amber-200/80 text-sm">{feature.desc}</p>
              </div>
            ))}

            {/* Stats Card */}
            <div className="col-span-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/30">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-3xl font-bold text-yellow-400">500+</div>
                  <div className="text-amber-200 text-sm">Schools Recognized</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">50+</div>
                  <div className="text-amber-200 text-sm">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-yellow-400">1M+</div>
                  <div className="text-amber-200 text-sm">Students Impacted</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreatsPreviewSection;
