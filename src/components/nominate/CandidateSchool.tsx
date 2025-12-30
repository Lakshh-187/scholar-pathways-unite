import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Rocket, Search, Map, Compass, TrendingUp,
  CheckCircle, ArrowRight, Users, Calendar, Target
} from "lucide-react";

interface CandidateFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: CandidateFeature[] = [
  {
    id: "gap-analysis",
    title: "Gap Analysis & School Diagnostics",
    description: "Comprehensive assessment of current school status against excellence parameters",
    icon: <Search className="w-5 h-5" />
  },
  {
    id: "roadmap",
    title: "Custom Architecture & Roadmap Design",
    description: "Tailored improvement plan based on school's unique strengths and challenges",
    icon: <Map className="w-5 h-5" />
  },
  {
    id: "mentoring",
    title: "Step-by-Step Mentoring & Support",
    description: "Continuous guidance and implementation support from expert mentors",
    icon: <Compass className="w-5 h-5" />
  },
  {
    id: "tracking",
    title: "Progress Tracking & Assessments",
    description: "Regular readiness assessments to measure growth and improvement",
    icon: <TrendingUp className="w-5 h-5" />
  }
];

const impactReturns = [
  {
    title: "Clear Direction",
    description: "Clear direction & improvement strategy",
    icon: <Target className="w-5 h-5" />
  },
  {
    title: "Capacity Building",
    description: "Capacity building for leadership & staff",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Gradual Transition",
    description: "Gradual transition into recognized categories",
    icon: <TrendingUp className="w-5 h-5" />
  },
  {
    title: "Sustainable Growth",
    description: "Sustainable, long-term growth",
    icon: <Calendar className="w-5 h-5" />
  }
];

const CandidateSchool = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, white 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-400 text-black border-none px-4 py-2">
            <Rocket className="w-4 h-4 mr-2" />
            Growth Pathway
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Candidate School
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            Not eligible yet? That's where the journey begins.
            <span className="block mt-2 text-yellow-400 font-semibold">
              The Candidate category is a structured growth pathway, not a rejection.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-lg font-bold text-yellow-400 mb-4 px-2">What We Do</h3>
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => setActiveFeature(index)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 ${
                  activeFeature === index
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  activeFeature === index 
                    ? "bg-black/20" 
                    : "bg-yellow-400/10"
                }`}>
                  {feature.icon}
                </div>
                <span className="font-medium text-sm">{feature.title}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 h-full">
              <div className="p-8">
                {/* Active Feature Detail */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-4 rounded-2xl bg-yellow-400">
                      {features[activeFeature].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {features[activeFeature].title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg">
                    {features[activeFeature].description}
                  </p>
                </div>

                {/* Impact Returns Grid */}
                <div className="mb-8">
                  <h4 className="font-bold text-yellow-400 mb-4 flex items-center gap-2">
                    <Target className="w-5 h-5" />
                    Impact Return
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {impactReturns.map((item, idx) => (
                      <div 
                        key={idx}
                        className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10"
                      >
                        <div className="p-2 rounded-lg bg-yellow-400/20 text-yellow-400">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="font-semibold text-white">{item.title}</h5>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Tagline */}
                <div className="p-6 bg-gradient-to-r from-yellow-400/20 to-amber-500/20 rounded-xl border border-yellow-400/30 text-center">
                  <p className="text-yellow-400 font-bold text-xl">
                    👉 Every great school was once a candidate.
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-8 text-center">
                  <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500 gap-2 px-8">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidateSchool;
