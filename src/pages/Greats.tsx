import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, Award, BookOpen, Users, GraduationCap, Heart, 
  Building2, Globe, CheckCircle2, ArrowRight, Play,
  Star, Trophy, Lightbulb, Target, FileCheck, UserCheck,
  Database, BarChart3, Film, Newspaper, ChevronRight, Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const heroImages = [
  "/lovable-uploads/uniford-foundation-event.png",
  "/lovable-uploads/uniford-edutech-fair.png",
  "/lovable-uploads/uniford-art-display.png",
  "/lovable-uploads/uniford-flags.png",
  "/lovable-uploads/61438adf-d790-43aa-82d6-7d96b9e8f931.png"
];

const evaluationAreas = {
  safety: {
    title: "Safety",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    items: [
      { name: "Culture and Sensitisation (SS)", icon: Heart },
      { name: "Health and Safety", icon: Shield },
      { name: "Social Responsibility & Ethics", icon: Users }
    ]
  },
  standard: {
    title: "Standard",
    icon: Award,
    color: "from-amber-500 to-yellow-500",
    items: [
      { name: "Teaching & Learning", icon: BookOpen },
      { name: "Establishments", icon: Building2 },
      { name: "Academic Facilitator & Resources", icon: GraduationCap },
      { name: "Extracurricular Activities", icon: Star },
      { name: "Student Participation & Achievements", icon: Trophy },
      { name: "Life Skill & Professional Development (LP)", icon: Lightbulb }
    ]
  },
  global: {
    title: "Global & Residential Schools",
    subtitle: "(Special Case)",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    items: [
      { name: "Inclusion & Diversity", icon: Users },
      { name: "Residential Care", icon: Home },
      { name: "Pastoral Care", icon: Heart }
    ]
  }
};

const recognitionProcess = [
  {
    step: 1,
    title: "Institutional Connect & Candidate Onboarding",
    subtitle: "Point of Contact – POC",
    description: "UNIFORD initiates the process by formally connecting with the school's designated Point of Contact (POC). An orientation session is conducted to explain the I-GPTL framework, expectations, timelines, and evaluation philosophy.",
    note: "At this stage, the school enters the Candidate Phase",
    icon: UserCheck
  },
  {
    step: 2,
    title: "Eligibility Screening",
    subtitle: "Mandatory Governance Check",
    description: "The school is required to submit an Eligibility Criteria Format, focusing on mandatory compliance and governance readiness.",
    note: "Only schools meeting baseline safety and standards governance move forward for evaluation.",
    icon: FileCheck
  },
  {
    step: 3,
    title: "School-Submitted Data & Evidence Collection",
    subtitle: "Single-Source, Verified Submission",
    description: "All data is collected directly from the school, ensuring clarity and accountability. Data is securely handled and prepared for expert review.",
    icon: Database
  },
  {
    step: 4,
    title: "Expert Evaluation & Global Analysis",
    subtitle: "UNIFORD Analysis Partners & International Mentors",
    description: "The submitted data undergoes structured evaluation based on UNIFORD's Core Evaluation Parameters, supported by Education Analysts, Mentors & Advisors from Finland, Singapore & UAE, and Standards & Quality Experts.",
    note: "Each parameter is scored through a quantitative + qualitative lens, focusing on real-world implementation, not claims.",
    icon: BarChart3
  }
];

const Greats = () => {
  const [rotatingWord, setRotatingWord] = useState(0);
  const rotatingWords = ["Excellence", "Recognition", "Standards", "Innovation"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingWord((prev) => (prev + 1) % rotatingWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <Layout>
      <Helmet>
        <title>Greats - Uniford I-GPTL | Great Place to Learn Recognition</title>
        <meta name="description" content="Uniford I-GPTL is a national-to-global recognition framework built on Safety, Standards, Governance, and Learning Culture." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-sm px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                The Authority for Great Place to Learn
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Great Learning
                <span className="block text-yellow-400">Starts Here.</span>
              </h1>

              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-200">
                  Uniford I-GPTL®
                </h2>
                <p className="text-lg text-amber-100/90 leading-relaxed">
                  A national-to-global recognition framework built on{' '}
                  <span className="text-yellow-400 font-semibold">Safety, Standards, Governance, and Learning Culture</span>.
                </p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20">
                <p className="text-xl italic text-amber-100">
                  "From Good to Great. From Great to Appreciated."
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
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

              <div className="flex flex-wrap gap-4">
                <Link to="/sssa">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/uppsc">
                  <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                    Learn More
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <span className="text-amber-200 text-sm">Partner with:</span>
                <Link to="/uirad" className="text-yellow-400 hover:underline font-semibold">UIRAD</Link>
                <span className="text-amber-400">•</span>
                <Link to="/sssa" className="text-yellow-400 hover:underline font-semibold">SSSA</Link>
              </div>
            </div>

            {/* Right Carousel */}
            <div className="relative">
              <Carousel
                plugins={[autoplayPlugin.current]}
                className="w-full"
                opts={{ loop: true }}
              >
                <CarouselContent>
                  {heroImages.map((image, idx) => (
                    <CarouselItem key={idx}>
                      <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-yellow-500/30">
                        <img 
                          src={image} 
                          alt={`School Excellence ${idx + 1}`}
                          className="w-full h-[400px] md:h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 bg-yellow-500/80 hover:bg-yellow-400 border-0 text-black" />
                <CarouselNext className="right-4 bg-yellow-500/80 hover:bg-yellow-400 border-0 text-black" />
              </Carousel>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-4 shadow-2xl transform rotate-3">
                <div className="text-center text-black">
                  <div className="text-3xl font-bold">I-GPTL</div>
                  <div className="text-xs">Certified Schools</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Word */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-4 text-white/60">
            <span>Pursuing</span>
            <span className="text-2xl font-bold text-yellow-400 min-w-[150px] text-center transition-all duration-500">
              {rotatingWords[rotatingWord]}
            </span>
          </div>
        </div>
      </section>

      {/* Key Areas of Evaluation */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Evaluation Framework</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Key Areas of Evaluation for{' '}
              <span className="text-orange-600">School Excellence</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(evaluationAreas).map(([key, area]) => (
              <div 
                key={key}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6`}>
                  <area.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{area.title}</h3>
                {'subtitle' in area && area.subtitle && (
                  <p className="text-orange-600 text-sm mb-4">{area.subtitle}</p>
                )}

                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-4 h-4 text-orange-600" />
                      </div>
                      <span className="text-gray-700">{item.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Process */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 mb-4">
              Recognition Journey
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Uniford I-GPTL School{' '}
              <span className="text-yellow-400">Recognition Process</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-amber-500 hidden md:block" />

            <div className="space-y-12">
              {recognitionProcess.map((step, idx) => (
                <div 
                  key={step.step}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step Number */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-2xl font-bold text-black z-10 shadow-xl hidden md:flex">
                    {step.step}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${idx % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center md:hidden">
                          <span className="text-xl font-bold text-yellow-400">{step.step}</span>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                          <step.icon className="w-6 h-6 text-yellow-400" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">{step.title}</h3>
                          <p className="text-yellow-400 text-sm">{step.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-amber-100/80 mb-4">{step.description}</p>
                      {step.note && (
                        <div className="bg-yellow-500/10 rounded-lg p-3 border-l-4 border-yellow-500">
                          <p className="text-yellow-200 text-sm italic">{step.note}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Empty Space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Greats Cinema Section */}
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="/greats/greats-cinema.jpeg" 
            alt="Greats Cinema Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 mb-6">
              <Film className="w-4 h-4 mr-2" />
              Coming Soon
            </Badge>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Greats <span className="text-yellow-400">Cinema</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8">
              A Short Film on School Best Practices, Strengths & Unique Attributes
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-white">Publish Schools Best Practices in News & Media</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-white">Recommend to publish on Better India & TedX</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Award className="w-6 h-6 text-yellow-400" />
                </div>
                <span className="text-white">Feature in Educational News & Recognition</span>
              </div>
            </div>

            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
              <Play className="w-5 h-5 mr-2" /> Watch Trailer
            </Button>
          </div>
        </div>

        {/* Film Strip Effect */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-yellow-500/20 to-transparent hidden lg:block">
          <div className="h-full flex flex-col justify-around py-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-16 h-12 bg-black/50 border border-yellow-500/30 rounded" />
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Case Study</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Journey of <span className="text-orange-600">CIA School</span>
            </h2>
            <p className="text-xl text-gray-600">
              For Uniford I-GPTL Recognition & Ranking
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-orange-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="/greats/gptl-schools.jpeg" 
                    alt="I-GPTL Schools Recognition"
                    className="w-full rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">Recognition Achievements</h3>
                  
                  <div className="space-y-4">
                    {[
                      { level: 'PLATINUM', category: 'Teaching & Learning', color: 'bg-gradient-to-r from-gray-300 to-gray-100' },
                      { level: 'DIAMOND', category: 'Resources & Facilities', color: 'bg-gradient-to-r from-blue-200 to-blue-100' },
                      { level: 'DIAMOND', category: 'Social Responsibility', color: 'bg-gradient-to-r from-blue-200 to-blue-100' },
                      { level: 'GOLD', category: 'Sports Activities', color: 'bg-gradient-to-r from-yellow-400 to-yellow-300' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <Badge className={`${item.color} text-gray-800 font-bold px-4 py-1`}>
                          {item.level}
                        </Badge>
                        <span className="text-gray-700">{item.category}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/sssa">
                    <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white">
                      Start Your Journey <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 via-orange-600 to-yellow-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Become a Great Place to Learn?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Join the movement towards excellence in education. Apply for I-GPTL recognition today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/sssa">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-bold">
                Apply for SSSA <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/uppsc">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Explore UPPSC
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Greats;
