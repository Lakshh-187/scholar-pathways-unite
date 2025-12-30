import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Leaf, GraduationCap, Star, Shield, Rocket,
  Heart, Globe, BookOpen, Users, Lightbulb,
  Award, Target, ArrowRight, Check
} from "lucide-react";

interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  description: string;
  lookLike: string[];
  impactReturn: string[];
  tagline: string;
}

const categories: Category[] = [
  {
    id: "social-impact",
    title: "Social Impact Return",
    subtitle: "Because schools don't just educate — they shape society",
    icon: <Leaf className="w-6 h-6" />,
    color: "text-green-600",
    bgColor: "bg-green-500",
    description: "Build measurable social responsibility directly into your school culture. Our Social Impact framework helps schools convert everyday actions into lifelong values.",
    lookLike: [
      "Angel Walls for clothes, books, shoes & essentials",
      "Green Banks to collect seeds, saplings, eco-packets & recyclables",
      "Green Birthdays & Eco-Celebrations replacing waste-heavy events",
      "Student-led donation & redistribution ecosystems"
    ],
    impactReturn: [
      "Students grow as responsible citizens",
      "School becomes a community impact hub",
      "Tangible contribution to SDGs & climate goals",
      "Documented social impact for annual reports & recognition"
    ],
    tagline: "Social impact becomes a habit, not a campaign."
  },
  {
    id: "education-impact",
    title: "School Education Impact Return (SIR)",
    subtitle: "Education beyond classrooms. Exposure beyond textbooks.",
    icon: <GraduationCap className="w-6 h-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-500",
    description: "SIR measures how well a school prepares students for the real world, not just exams. We focus on participation, exposure, leadership & purpose-driven learning.",
    lookLike: [
      "High student participation in programs, forums & initiatives",
      "Exposure to real-world roles: Entrepreneurs, Authors & researchers",
      "Activists & social leaders, Designers, innovators & frontliners",
      "Platforms for student voice, innovation & authorship"
    ],
    impactReturn: [
      "Students gain confidence, clarity & career direction",
      "School builds a future-ready education model",
      "Strong positioning as a progressive, global-minded institution"
    ],
    tagline: "Your students don't just learn — they lead."
  },
  {
    id: "great-practices",
    title: "Great Practices",
    subtitle: "Every great school has a story. We help the world see it.",
    icon: <Star className="w-6 h-6" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-500",
    description: "No two schools are the same — and that uniqueness deserves recognition. Great Practices capture and amplify what your school does best.",
    lookLike: [
      "Unique teaching methodologies",
      "Innovative leadership models",
      "Community-driven initiatives",
      "Student-led movements or clubs",
      "Cultural, artistic or sports excellence"
    ],
    impactReturn: [
      "School USP gets documented & showcased",
      "Best practices become replicable models",
      "National & global visibility through reports, forums & showcases",
      "Recognition without comparison or ranking pressure"
    ],
    tagline: "Your strengths become your signature."
  },
  {
    id: "safe-standard",
    title: "Safe & Standard School",
    subtitle: "Compliance builds safety. Culture builds trust.",
    icon: <Shield className="w-6 h-6" />,
    color: "text-red-600",
    bgColor: "bg-red-500",
    description: "A truly great school is safe, compliant, and emotionally secure. We help schools go beyond paperwork into a living safety culture.",
    lookLike: [
      "NEP 2020 implementation & reporting",
      "POSH compliance",
      "Child Safety & Protection policies",
      "Staff training & awareness programs",
      "Incident reporting & review systems"
    ],
    impactReturn: [
      "Safe, inclusive & respectful school environment",
      "Reduced risk, stronger governance",
      "Parent confidence & institutional credibility",
      "Policy compliance becomes daily practice"
    ],
    tagline: "Safety is not a checklist — it's a culture."
  }
];

const NominateCategories = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const active = categories[activeCategory];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 border-yellow-300">
            Recognition Categories
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Four Pillars of Excellence
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We evaluate schools across four comprehensive categories that define true educational excellence
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-3">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                className={`w-full text-left px-6 py-5 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                  activeCategory === index
                    ? "bg-yellow-400 text-black shadow-lg"
                    : "bg-gray-50 hover:bg-gray-100 text-gray-800 border border-gray-200"
                }`}
              >
                <div className={`p-3 rounded-xl ${
                  activeCategory === index 
                    ? "bg-black/10" 
                    : `${category.bgColor}/10 group-hover:${category.bgColor}/20`
                }`}>
                  <span className={activeCategory === index ? "text-black" : category.color}>
                    {category.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-base">{category.title}</h4>
                  <p className={`text-xs mt-1 ${
                    activeCategory === index ? "text-black/70" : "text-gray-500"
                  }`}>
                    {category.subtitle.substring(0, 40)}...
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <Card className="overflow-hidden bg-white border-gray-200 shadow-xl h-full">
              <div className="p-8">
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`p-4 rounded-2xl ${active.bgColor}`}>
                    <span className="text-white">{active.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {active.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{active.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {active.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* What This Looks Like */}
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-yellow-500" />
                      What This Looks Like
                    </h4>
                    <ul className="space-y-3">
                      {active.lookLike.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact Return */}
                  <div className="bg-yellow-50 rounded-xl p-6">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-yellow-600" />
                      Impact Return
                    </h4>
                    <ul className="space-y-3">
                      {active.impactReturn.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-sm text-gray-700">
                          <Award className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Tagline */}
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-xl text-center">
                  <p className="text-black font-bold text-lg">
                    👉 {active.tagline}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NominateCategories;
