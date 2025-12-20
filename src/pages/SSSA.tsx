import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, BookOpen, Heart, Bus, Users, Headphones, Film, Lightbulb, GraduationCap, Cpu, Flower2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const movements = [
  {
    id: 1,
    title: "Safety Audits & Advocacy",
    subtitle: "Annual Report Publication",
    description: "Comprehensive safety audits to ensure schools meet international safety standards. We help publish annual safety reports that showcase compliance and continuous improvement.",
    image: "/sssa/safety-audit.png",
    icon: Shield,
    tags: ["Safety Checklists", "Audit Documents", "Compliance Checks"]
  },
  {
    id: 2,
    title: "Standard Audit & Advocacy",
    subtitle: "NEP-2020 Impact",
    description: "Evaluate and advocate for NEP-2020 implementation. Track progress, measure impact, and ensure schools align with national education policy frameworks.",
    image: "/sssa/standard-audit.png",
    icon: BookOpen,
    tags: ["NEP-2020 Framework", "Impact Analysis", "Quality Education"]
  },
  {
    id: 3,
    title: "Health Movement",
    subtitle: "with Satvik",
    description: "Promoting holistic health and wellness in schools through Satvik principles. Focus on nutrition, mental health, and physical well-being for students and staff.",
    image: "/sssa/osho-life.png",
    icon: Heart,
    tags: ["Nutrition", "Mental Health", "Physical Wellness"]
  },
  {
    id: 4,
    title: "Great School Tour",
    subtitle: "with Better India",
    description: "Partnering with Better India to showcase exemplary schools across the nation. Learn from best practices and implement proven educational strategies.",
    image: "/sssa/great-school-tour.png",
    icon: Bus,
    tags: ["Heritage Tours", "Best Practices", "Educational Excellence"]
  },
  {
    id: 5,
    title: "Governor-Advisor Appointment",
    subtitle: "Leadership Excellence",
    description: "Establish strong governance through qualified advisor appointments. Build leadership frameworks that drive institutional excellence and accountability.",
    image: "/sssa/designator-movement.png",
    icon: Users,
    tags: ["Governance", "Leadership", "Accountability"]
  },
  {
    id: 6,
    title: "Launch Helpdesk",
    subtitle: "for Schools",
    description: "Dedicated helpdesk support for schools navigating compliance, safety, and educational standards. Get expert guidance whenever you need it.",
    image: "/sssa/helpdesk-launch.png",
    icon: Headphones,
    tags: ["Instant Support", "Expert Guidance", "24/7 Assistance"]
  },
  {
    id: 7,
    title: "I-GPTL School Cinema",
    subtitle: "Visual Learning",
    description: "Transform education through visual storytelling. Curated educational films that inspire, educate, and engage students in meaningful learning experiences.",
    image: "/sssa/school-cinema.png",
    icon: Film,
    tags: ["Educational Films", "Visual Learning", "Storytelling"]
  },
  {
    id: 8,
    title: "Establish Incubation Cell",
    subtitle: "Nurturing Innovators",
    description: "Create entrepreneurial ecosystems within schools. Support young innovators with mentorship, resources, and platforms to launch their ideas.",
    image: "/sssa/incubation-cell.png",
    icon: Lightbulb,
    tags: ["Mentorship", "Startup Launchpad", "Young Innovators"]
  },
  {
    id: 9,
    title: "Teacher Training & Development Cell",
    subtitle: "Professional Growth",
    description: "Comprehensive professional development programs for educators. International collaborations, modern methodologies, and continuous skill enhancement.",
    image: "/sssa/teacher-training.png",
    icon: GraduationCap,
    tags: ["Professional Development", "International Training", "Modern Methods"]
  },
  {
    id: 10,
    title: "AI & Green Skills Movement",
    subtitle: "by 1M1B",
    description: "Preparing students for the future with AI literacy and sustainability skills. Partner with 1M1B to create tech-savvy, environmentally conscious learners.",
    image: "/sssa/ai-green-skills.png",
    icon: Cpu,
    tags: ["Technology", "Sustainability", "Future Ready"]
  },
  {
    id: 11,
    title: "OSHO Life Movement",
    subtitle: "Mindful Learning",
    description: "Integrate mindfulness and meditation into education. Create calm, focused learning environments that nurture emotional intelligence and creativity.",
    image: "/sssa/osho-life.png",
    icon: Flower2,
    tags: ["Meditation", "Mindfulness", "Emotional Intelligence"]
  },
  {
    id: 12,
    title: "Designator Movement",
    subtitle: "by UNCIF",
    description: "UNCIF's initiative to recognize and designate schools meeting international standards. Earn prestigious designations that reflect your commitment to excellence.",
    image: "/sssa/designator-movement.png",
    icon: Award,
    tags: ["Recognition", "International Standards", "Excellence"]
  },
  {
    id: 13,
    title: "Her-HaVa Movement",
    subtitle: "Empowering All",
    description: "Comprehensive movement for gender equality and inclusive education. Create safe, supportive environments where every student can thrive.",
    image: "/sssa/designator-movement.png",
    icon: Sparkles,
    tags: ["Inclusivity", "Gender Equality", "Empowerment"]
  }
];

const SSSA: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const words = ['Safety', 'Standards', 'Excellence', 'Innovation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <Layout>
      <Helmet>
        <title>SSSA - BISS in Schools | Uniford Foundation</title>
        <meta name="description" content="Schools apply for the BISS movement - Bringing International Standards & Safety in Schools through comprehensive audits, advocacy, and transformative programs." />
      </Helmet>

      {/* Hero Section - Dark Yellow/Orange Theme like Greats */}
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
            <div className="text-white space-y-6">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-sm px-4 py-2">
                <Shield className="w-4 h-4 mr-2" />
                BISS Movement
              </Badge>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                SSSA
                <span className="block text-2xl md:text-3xl font-semibold text-yellow-200 mt-2">
                  School Safety & Standard Authority
                </span>
              </h1>

              <div className="space-y-4">
                <p className="text-xl text-amber-100/90 leading-relaxed">
                  Bringing <span className="text-yellow-400 font-bold">International Standards & Safety</span> in Schools
                </p>
                <p className="text-lg text-amber-200/80">
                  Transform your school with our comprehensive{' '}
                  <span className="inline-block min-w-[120px] font-bold text-yellow-400 transition-all duration-300">
                    {words[currentIndex]}
                  </span>{' '}
                  programs.
                </p>
              </div>

              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-yellow-500/20">
                <p className="text-amber-100 mb-2">Join the movement for educational excellence</p>
                <div className="flex flex-wrap gap-3">
                  {['13+ Movements', '500+ Schools', '50K+ Students'].map((stat, idx) => (
                    <Badge key={idx} className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30">
                      {stat}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/apply">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold">
                    Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Right - Hero Image Grid */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/sssa/safety-audit.png" 
                    alt="Safety Audit" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-yellow-500/30"
                  />
                  <img 
                    src="/sssa/incubation-cell.png" 
                    alt="Incubation Cell" 
                    className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/sssa/teacher-training.png" 
                    alt="Teacher Training" 
                    className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                  />
                  <img 
                    src="/sssa/school-cinema.png" 
                    alt="School Cinema" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-orange-500/30"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-4 shadow-2xl transform -rotate-3">
                <div className="text-center text-black">
                  <div className="text-2xl font-bold">FOR SCHOOLS</div>
                  <div className="text-xs">BISS Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movements Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-orange-100 text-orange-700 mb-4">Our Movements</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transform Your <span className="text-orange-600">School</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Schools apply for these comprehensive movements to achieve international standards and safety excellence
            </p>
          </div>

          <Carousel
            plugins={[autoplayPlugin.current]}
            className="w-full"
            opts={{ loop: true, align: "start" }}
          >
            <CarouselContent className="-ml-4">
              {movements.map((movement) => (
                <CarouselItem key={movement.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 h-full border border-orange-100">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={movement.image} 
                        alt={movement.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Icon Badge */}
                      <div className="absolute bottom-3 left-3 bg-yellow-500 p-2 rounded-lg">
                        <movement.icon className="w-5 h-5 text-black" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{movement.title}</h3>
                      <p className="text-orange-600 font-semibold text-sm mb-3">{movement.subtitle}</p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{movement.description}</p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {movement.tags.slice(0, 2).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-yellow-500 hover:bg-yellow-400 border-0 text-black" />
            <CarouselNext className="right-4 bg-yellow-500 hover:bg-yellow-400 border-0 text-black" />
          </Carousel>

          {/* View All Link */}
          <div className="text-center mt-10">
            <p className="text-gray-600 mb-4">Explore all 13+ movements designed to transform your school</p>
          </div>
        </div>
      </section>

      {/* Why Join BISS Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-amber-900 to-orange-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 mb-4">Why Join BISS?</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Become a <span className="text-yellow-400">Certified</span> BISS School
              </h2>
              <p className="text-amber-100/80 text-lg mb-8">
                Join the movement that's transforming education across the nation. Get access to comprehensive support, international collaborations, and recognition.
              </p>

              <div className="space-y-4">
                {[
                  "International Standards Compliance",
                  "Safety Audit & Annual Reports",
                  "Teacher Training Programs",
                  "Student Development Initiatives",
                  "Helpdesk & Continuous Support",
                  "Recognition & Accreditation"
                ].map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-lg text-amber-100">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/apply" className="inline-block mt-8">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-6 text-lg">
                  Apply for BISS Certification
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/sssa/designator-movement.png" 
                alt="BISS Certification"
                className="rounded-3xl shadow-2xl w-full border-4 border-yellow-500/30"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-black p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Schools Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
            Join the BISS movement today and become part of the global network of safe and standard schools.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-black hover:bg-gray-900 text-white font-bold px-8 py-6 text-lg shadow-xl">
                Apply Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/greats">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-6 text-lg">
                Explore Greats
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SSSA;
