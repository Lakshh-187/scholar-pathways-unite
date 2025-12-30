import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Shield, Globe, Users, BookOpen, Lightbulb, Heart, Star, Trophy, Target } from "lucide-react";

interface CredibilityItem {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  icon: React.ReactNode;
  features: string[];
}

const credibilityItems: CredibilityItem[] = [
  {
    id: 1,
    title: "Great Place to Learn",
    description: "Certified schools maintaining international standards in safety and education excellence. Our rigorous certification process ensures schools meet global benchmarks.",
    image: "/lovable-uploads/great-place-badge.png",
    category: "Certification",
    icon: <Award className="w-5 h-5" />,
    features: ["International Standards", "Safety Compliance", "Quality Education", "Recognition Badge"]
  },
  {
    id: 2,
    title: "SDG Recognition",
    description: "Aligned with UN Sustainable Development Goals for transformative education. Schools contribute to global sustainability while educating future leaders.",
    image: "/lovable-uploads/sdg-badge.png",
    category: "UN SDG",
    icon: <Globe className="w-5 h-5" />,
    features: ["UN Alignment", "Sustainability Focus", "Global Impact", "SDG Certification"]
  },
  {
    id: 3,
    title: "Official Certification",
    description: "Recognized institutions maintaining international standards in safety and education. Comprehensive evaluation ensures excellence across all parameters.",
    image: "/lovable-uploads/uniford-certificate.jpeg",
    category: "Recognition",
    icon: <Trophy className="w-5 h-5" />,
    features: ["Official Recognition", "Quality Assurance", "Standards Compliance", "Excellence Award"]
  },
  {
    id: 4,
    title: "School Safety Standards",
    description: "Certified safe and standard schools across the globe ensuring student wellbeing. Comprehensive safety audits and compliance verification.",
    image: "/lovable-uploads/school-bus-certification.jpeg",
    category: "Safety",
    icon: <Shield className="w-5 h-5" />,
    features: ["Safety Protocols", "Regular Audits", "Compliance Checks", "Wellbeing Focus"]
  },
  {
    id: 5,
    title: "BISS Initiative",
    description: "1 Million Safe & Standard Schools for 1 Billion Frontliners program. Transforming education infrastructure worldwide through systematic improvement.",
    image: "/lovable-uploads/biss-book.jpeg",
    category: "Initiative",
    icon: <Target className="w-5 h-5" />,
    features: ["1M1B Model", "Global Reach", "Systematic Approach", "Impact Driven"]
  },
  {
    id: 6,
    title: "Global Network",
    description: "International partnerships strengthening educational standards worldwide. Connecting schools across continents for shared learning.",
    image: "/lovable-uploads/uniford-flags.png",
    category: "Network",
    icon: <Users className="w-5 h-5" />,
    features: ["25+ Countries", "Partner Schools", "Knowledge Sharing", "Global Community"]
  },
  {
    id: 7,
    title: "Educational Innovation",
    description: "Showcasing innovative educational technology solutions for modern learning. Cutting-edge approaches to teaching and learning.",
    image: "/lovable-uploads/uniford-edutech-fair.png",
    category: "Innovation",
    icon: <Lightbulb className="w-5 h-5" />,
    features: ["EdTech Solutions", "Modern Learning", "Innovation Hub", "Future Ready"]
  },
  {
    id: 8,
    title: "Community Impact",
    description: "Community gathering promoting educational excellence and safety standards. Building stronger communities through education.",
    image: "/lovable-uploads/uniford-foundation-event.png",
    category: "Impact",
    icon: <Heart className="w-5 h-5" />,
    features: ["Community Building", "Social Impact", "Outreach Programs", "Grassroots Change"]
  }
];

const CredibilityCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = credibilityItems[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-accent/5 to-background relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, currentColor 2px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Trusted Worldwide
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Credibility & Impact
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Recognized globally for excellence in educational transformation and safety standards
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {credibilityItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                  activeIndex === index
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card hover:bg-accent/50 text-foreground border border-border/50"
                }`}
              >
                <div className={`p-2 rounded-lg ${
                  activeIndex === index 
                    ? "bg-primary-foreground/20" 
                    : "bg-primary/10 group-hover:bg-primary/20"
                }`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className={`text-xs mt-0.5 ${
                    activeIndex === index ? "text-primary-foreground/70" : "text-muted-foreground"
                  }`}>
                    {item.category}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <Card className="overflow-hidden bg-card border-border/50 shadow-xl h-full">
              <div className="grid md:grid-cols-2 h-full">
                {/* Image Section */}
                <div className="relative aspect-square md:aspect-auto overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                    {activeItem.category}
                  </Badge>
                </div>

                {/* Text Content */}
                <div className="p-8 flex flex-col justify-center">
                  <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
                    {activeItem.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {activeItem.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {activeItem.description}
                  </p>
                  
                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {activeItem.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 text-primary" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {credibilityItems.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex 
                  ? "w-8 bg-primary" 
                  : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to item ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilityCarousel;
