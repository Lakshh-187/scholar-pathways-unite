import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  FileText, Search, Award, Globe, 
  ArrowRight, CheckCircle, Star
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Nomination",
    description: "Fill out the nomination form with school details and achievements",
    icon: <FileText className="w-6 h-6" />,
    color: "bg-yellow-400"
  },
  {
    number: "02",
    title: "Assessment & Review",
    description: "Our team evaluates school practices across four excellence categories",
    icon: <Search className="w-6 h-6" />,
    color: "bg-yellow-500"
  },
  {
    number: "03",
    title: "Recognition & Badge",
    description: "Qualifying schools receive 'Great Place to Learn' certification",
    icon: <Award className="w-6 h-6" />,
    color: "bg-amber-500"
  },
  {
    number: "04",
    title: "Global Showcase",
    description: "Featured on TEDx, Better India & international platforms",
    icon: <Globe className="w-6 h-6" />,
    color: "bg-amber-600"
  }
];

const platforms = [
  "TEDx Events", "Better India", "Education Forums", 
  "International Conferences", "Media Features", "Annual Reports"
];

const NominateProcess = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Nomination Process
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A simple, transparent journey from nomination to global recognition
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => (
            <Card 
              key={step.number}
              className="relative p-6 bg-white border-gray-200 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-yellow-400" />
              )}
              
              <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center text-black mb-4 group-hover:scale-110 transition-transform`}>
                {step.icon}
              </div>
              
              <div className="text-4xl font-bold text-gray-200 mb-2">{step.number}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </Card>
          ))}
        </div>

        {/* Global Platforms */}
        <div className="bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-400 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Recognized Schools Get Featured On
            </h3>
            <p className="text-black/70">Global platforms to outshine your school's story</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {platforms.map((platform, idx) => (
              <Badge 
                key={idx}
                className="bg-white text-black px-4 py-2 text-sm font-medium shadow-sm"
              >
                <Star className="w-4 h-4 mr-2 text-yellow-600" />
                {platform}
              </Badge>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-black text-yellow-400 hover:bg-black/90 gap-2 px-8 py-6 text-lg">
              <Award className="w-5 h-5" />
              Nominate Your School
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NominateProcess;
