import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Shield, BookOpen, Heart, Bus, Users, Headphones, Film, Lightbulb, GraduationCap, Cpu, Flower2, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

  return (
    <Layout>
      <Helmet>
        <title>SSSA - BISS in Schools | Uniford Foundation</title>
        <meta name="description" content="Schools apply for the BISS movement - Bringing International Standards & Safety in Schools through comprehensive audits, advocacy, and transformative programs." />
      </Helmet>

      {/* Hero Section - Yellow-White-Black Theme */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-gray-100">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-black transform skew-x-[-12deg] translate-x-20 hidden lg:block" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-1/4 w-48 h-48 bg-yellow-400/30 rounded-full blur-3xl" />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 grid grid-cols-8 gap-2">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-black rounded-full" />
            ))}
          </div>
          <div className="absolute bottom-1/4 left-1/4 grid grid-cols-8 gap-2">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-1 h-1 bg-black rounded-full" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-yellow-400 text-black font-bold px-4 py-2 text-sm">
                BISS Movement
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-black leading-tight text-black">
                <span className="block">SSSA</span>
                <span className="block text-2xl md:text-3xl font-bold mt-2 text-gray-700">
                  Bringing International
                </span>
                <span className="inline-block bg-yellow-400 px-4 py-1 mt-2 text-black">
                  Standards & Safety
                </span>
                <span className="block text-2xl md:text-3xl font-bold mt-2 text-gray-700">
                  in Schools
                </span>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl">
                Transform your school with our comprehensive{' '}
                <span className="inline-block min-w-[120px] font-bold text-yellow-600 transition-all duration-300">
                  {words[currentIndex]}
                </span>{' '}
                programs. Join the movement for educational excellence.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/apply">
                  <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                    Apply Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>

              {/* Stats Strip */}
              <div className="flex flex-wrap gap-6 pt-6">
                {[
                  { value: "13+", label: "Movements" },
                  { value: "500+", label: "Schools" },
                  { value: "50K+", label: "Students" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-black text-black">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Images Grid */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/sssa/safety-audit.png" 
                    alt="Safety Audit" 
                    className="rounded-xl shadow-2xl w-full h-48 object-cover border-4 border-yellow-400"
                  />
                  <img 
                    src="/sssa/incubation-cell.png" 
                    alt="Incubation Cell" 
                    className="rounded-xl shadow-2xl w-full h-56 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/sssa/teacher-training.png" 
                    alt="Teacher Training" 
                    className="rounded-xl shadow-2xl w-full h-56 object-cover"
                  />
                  <img 
                    src="/sssa/school-cinema.png" 
                    alt="School Cinema" 
                    className="rounded-xl shadow-2xl w-full h-48 object-cover border-4 border-black"
                  />
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 bg-black text-white px-6 py-3 rounded-lg shadow-xl">
                <span className="font-bold">FOR SCHOOLS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Movements Grid Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-black text-white mb-4">Our Movements</Badge>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
              Transform Your <span className="bg-yellow-400 px-2">School</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Schools apply for these comprehensive movements to achieve international standards and safety excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <div 
                key={movement.id}
                className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-[1.02] ${
                  index % 3 === 0 ? 'lg:row-span-2' : ''
                }`}
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white" />
                
                {/* Black Accent Corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-black transform rotate-45 translate-x-12 -translate-y-12 group-hover:bg-yellow-400 transition-colors duration-300" />
                
                <div className="relative p-6 h-full flex flex-col">
                  {/* Image */}
                  <div className={`relative overflow-hidden rounded-xl mb-4 ${index % 3 === 0 ? 'h-64' : 'h-48'}`}>
                    <img 
                      src={movement.image} 
                      alt={movement.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute bottom-3 left-3 bg-yellow-400 p-2 rounded-lg">
                      <movement.icon className="w-5 h-5 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-black mb-1">{movement.title}</h3>
                    <p className="text-yellow-600 font-semibold text-sm mb-3">{movement.subtitle}</p>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{movement.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {movement.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-yellow-400/20 text-black text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dot Pattern Decoration */}
                <div className="absolute bottom-4 right-4 grid grid-cols-4 gap-1 opacity-20">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-black rounded-full" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join BISS Section */}
      <section className="py-20 bg-black text-white relative overflow-hidden">
        {/* Yellow Accent */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-yellow-400 transform -skew-x-12 -translate-x-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-400 text-black mb-4">Why Join BISS?</Badge>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                Become a <span className="text-yellow-400">Certified</span> BISS School
              </h2>
              <p className="text-gray-300 text-lg mb-8">
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
                    <span className="text-lg">{benefit}</span>
                  </div>
                ))}
              </div>

              <Link to="/apply" className="inline-block mt-8">
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg">
                  Apply for BISS Certification
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img 
                src="/sssa/designator-movement.png" 
                alt="BISS Certification"
                className="rounded-2xl shadow-2xl w-full border-4 border-yellow-400"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-black">500+</div>
                <div className="text-sm text-gray-600">Schools Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Ready to Transform Your School?
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
            Join the BISS movement today and take the first step towards international standards and safety excellence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-6 text-lg">
                Apply Now
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/uppsc">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-8 py-6 text-lg">
                Explore UPPSC
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SSSA;
