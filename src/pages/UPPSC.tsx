import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, Globe, Award, Users, Building, 
  Heart, BookOpen, Lightbulb, Target,
  GraduationCap, Trophy, Star, CheckCircle,
  Sparkles, School, Zap, ArrowRight, Phone,
  FileCheck, ClipboardCheck, UserCheck, Rocket,
  ChevronLeft, ChevronRight, CheckCircle2, Film,
  Cpu, Flower2, Headphones, Bus
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const UPPSC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Safety', 'Standard', 'Excellence', 'Innovation'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const dialogues = [
    {
      title: "Cyber & Physical Safety",
      person: "Scott Flower",
      role: "Co-founder CIISAC International, Singapore",
      description: "Leading conversations on comprehensive safety measures combining digital security with physical protection for educational institutions worldwide.",
      image: "/lovable-uploads/06d7a363-4fa0-4df2-8417-9267f42b3add.png",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "SDG Movement",
      person: "Dharmender Tomar",
      role: "Director CIA Group of Schools",
      description: "Championing sustainable development goals integration in education, creating a roadmap for schools to contribute to global sustainability.",
      image: "/lovable-uploads/uniford-foundation-event.png",
      color: "from-green-600 to-emerald-500"
    },
    {
      title: "School Safety",
      person: "Michelle Yao",
      role: "Co-founder Cyberlite",
      description: "Pioneering digital literacy and safety programs that empower students to navigate the online world safely and responsibly.",
      image: "/lovable-uploads/uniford-edutech-fair.png",
      color: "from-purple-600 to-pink-500"
    },
    {
      title: "International Board",
      person: "India - Australia Collaboration",
      role: "Cross-border Educational Initiative",
      description: "Building bridges between educational systems, fostering international standards and cultural exchange for holistic development.",
      image: "/lovable-uploads/uniford-flags.png",
      color: "from-orange-600 to-red-500"
    },
    {
      title: "AI for Education",
      person: "India - UAE Partnership",
      role: "EdTech Innovation Initiative",
      description: "Leveraging artificial intelligence to personalize learning, enhance teaching methodologies, and prepare students for the future.",
      image: "/lovable-uploads/uniford-art-display.png",
      color: "from-indigo-600 to-violet-500"
    }
  ];

  const memberBenefits = [
    {
      title: "Help Desk for Advocacy",
      description: "Expert guidance on safety & standard policies including Child Safety, POSH, POCSO, NEP-2020, NCF and more.",
      icon: Phone,
      color: "bg-yellow-400"
    },
    {
      title: "Free Safety Audit",
      description: "Comprehensive safety audit & compliance advocacy to ensure your school meets international standards.",
      icon: ClipboardCheck,
      color: "bg-black"
    },
    {
      title: "NEP-2020 Implementation",
      description: "Complete implementation guide & advocacy support for National Education Policy 2020 compliance.",
      icon: FileCheck,
      color: "bg-yellow-400"
    },
    {
      title: "Teacher Training",
      description: "Professional development by International organizations & global collaborations for educators.",
      icon: UserCheck,
      color: "bg-black"
    },
    {
      title: "Incubation & Programs",
      description: "Establishment of Incubation cells, Skill development programs & fully funded initiatives.",
      icon: Rocket,
      color: "bg-yellow-400"
    }
  ];

  const movements = [
    {
      title: "AI for Education",
      partners: "Singapore, UAE & Taiwan",
      icon: Sparkles,
      description: "Integrating cutting-edge AI technologies to revolutionize classroom experiences and personalized learning paths.",
      image: "/lovable-uploads/12e0d927-7467-47ca-a0f5-cc9461f77ee8.png",
      features: ["Smart Learning Systems", "Adaptive Curriculum", "AI Teaching Assistants"]
    },
    {
      title: "Health & Wellness",
      partners: "Satvic & Type-1 Better Canada",
      icon: Heart,
      description: "Promoting holistic well-being through nutrition education, mental health support, and physical fitness programs.",
      image: "/lovable-uploads/7cdd624e-8f94-4d4c-822d-305853985de3.png",
      features: ["Mental Health Programs", "Nutrition Education", "Physical Wellness"]
    },
    {
      title: "Safe Schools",
      partners: "Singapore & UAE",
      icon: Shield,
      description: "Audit-based advocacy implementing comprehensive policies and culture of safety through international collaboration.",
      image: "/lovable-uploads/83320e27-0b79-43f5-8e30-6e45043a85a9.png",
      features: ["Safety Audits", "Policy Implementation", "Cultural Transformation"]
    },
    {
      title: "Standard Schools",
      partners: "NEP-2020 & NCF",
      icon: Award,
      description: "Focus on NEP-2020, NCF implementation, establishing incubation cells, and building global collaborations.",
      image: "/lovable-uploads/91162f53-55de-48bf-b2f0-bf0d7a1ddb2a.png",
      features: ["NEP-2020 Compliance", "Incubation Cells", "Global Partnerships"]
    },
    {
      title: "Sustainable Schools",
      partners: "Green Initiative",
      icon: Lightbulb,
      description: "Focus on solar energy, green campus, reusable resources, and innovation projects for environmental sustainability.",
      image: "/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png",
      features: ["Solar Energy", "Green Campus", "Resource Recycling"]
    }
  ];

  const financialAid = [
    {
      title: "Free Programs",
      description: "Comprehensive free educational programs and establishment support for underprivileged schools.",
      image: "/lovable-uploads/baf6c96d-a314-4745-ba69-67672aa9a098.png",
      icon: GraduationCap
    },
    {
      title: "CSR Funded",
      description: "Corporate Social Responsibility backed programs enabling quality education access.",
      image: "/lovable-uploads/be3517cc-e81e-4f61-a133-019267cf75c1.png",
      icon: Building
    },
    {
      title: "Philanthropist Projects",
      description: "Methodology-driven initiatives supported by educational philanthropists worldwide.",
      image: "/lovable-uploads/cf19831c-2c00-4761-8379-c6757b623d07.png",
      icon: Heart
    }
  ];

  const rankingParameters = [
    { title: "In-house Student Placements", icon: Users },
    { title: "Achievements in Schools", icon: Trophy },
    { title: "Establishments", icon: Building },
    { title: "Teachers & Frontliners", icon: Star },
    { title: "Credible Student Profiles", icon: GraduationCap }
  ];

  const sssaMovements = [
    { title: "Safety Audits", icon: Shield, image: "/sssa/safety-audit.png" },
    { title: "Standard Audit", icon: BookOpen, image: "/sssa/standard-audit.png" },
    { title: "Teacher Training", icon: GraduationCap, image: "/sssa/teacher-training.png" },
    { title: "Incubation Cell", icon: Lightbulb, image: "/sssa/incubation-cell.png" },
    { title: "AI & Green Skills", icon: Cpu, image: "/sssa/ai-green-skills.png" },
    { title: "School Cinema", icon: Film, image: "/sssa/school-cinema.png" },
  ];

  return (
    <Layout>
      <Helmet>
        <title>UPPSC - Uttar Pradesh Progressive Schools Council | Uniford</title>
        <meta name="description" content="UPPSC - Bringing International Standard & Safety to schools. Backed by Uniford & UNCIF for 1 million safe schools." />
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="text-white space-y-6">
              <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-400/30 text-sm px-4 py-2">
                <School className="w-4 h-4 mr-2 inline" />
                UPPSC Initiative
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block">Uttar Pradesh</span>
                <span className="block text-2xl md:text-3xl font-semibold text-yellow-200 mt-2">
                  Progressive Schools Council
                </span>
              </h1>
              
              <div className="space-y-2">
                <p className="text-xl md:text-2xl text-amber-100/90">
                  For <span className="text-yellow-400 font-bold">"Bringing International</span>
                </p>
                <p className="text-xl md:text-2xl text-amber-100/90">
                  <span className="inline-block min-w-[160px] font-bold text-yellow-400 text-3xl">
                    {words[currentWordIndex]}
                  </span>
                  <span className="text-yellow-400 font-bold">"</span> Movement
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-5 border border-yellow-500/20">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/uniford-logo.png" alt="Uniford" className="h-8 object-contain bg-white rounded p-1" />
                  <img src="/uncif-logo.png" alt="UNCIF" className="h-8 object-contain bg-white rounded p-1" />
                </div>
                <p className="text-amber-100/80 text-base leading-relaxed">
                  <span className="text-yellow-400 font-bold text-xl">1 Million</span> Safe & Standard Schools for{' '}
                  <span className="text-yellow-400 font-bold text-xl">1 Billion</span> Frontliners
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-6 text-lg" size="lg">
                  Join the Movement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 font-bold px-8 py-6 text-lg" size="lg" asChild>
                  <a href="https://biss.uniford.org" target="_blank" rel="noopener noreferrer">
                    BISS Guide Book
                  </a>
                </Button>
              </div>

              {/* Stats Strip */}
              <div className="flex flex-wrap gap-8 pt-6">
                {[
                  { value: "1M+", label: "Schools Target" },
                  { value: "1B+", label: "Frontliners" },
                  { value: "50+", label: "Countries" }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl font-bold text-yellow-400">{stat.value}</div>
                    <div className="text-sm text-amber-200">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="/lovable-uploads/uniford-flags.png" 
                    alt="UPPSC Global Initiative" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-yellow-500/30"
                  />
                  <img 
                    src="/lovable-uploads/uniford-foundation-event.png" 
                    alt="UPPSC Event" 
                    className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="/lovable-uploads/uniford-edutech-fair.png" 
                    alt="EdTech Fair" 
                    className="rounded-2xl shadow-2xl w-full h-56 object-cover"
                  />
                  <img 
                    src="/lovable-uploads/uniford-art-display.png" 
                    alt="Art Display" 
                    className="rounded-2xl shadow-2xl w-full h-48 object-cover border-4 border-orange-500/30"
                  />
                </div>
              </div>
              
              {/* Floating Badges */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-yellow-500 to-orange-500 text-black p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-sm font-medium">Schools Target</div>
              </div>
              <div className="absolute -top-6 -left-6 bg-black/80 backdrop-blur-sm text-white p-4 rounded-xl shadow-xl border border-yellow-500/30">
                <Shield className="w-8 h-8 mb-1 text-yellow-400" />
                <div className="text-sm font-medium">Safety First</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SSSA Invitation Section */}
      <section className="py-16 bg-black text-white relative overflow-hidden">
        {/* Yellow Accent */}
        <div className="absolute top-0 left-0 w-1/4 h-full bg-yellow-400 transform -skew-x-12 -translate-x-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-400 text-black font-bold mb-4 px-6 py-2">
              <Shield className="w-4 h-4 mr-2 inline" />
              Join SSSA Movement
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Bring <span className="text-yellow-400">International Standards & Safety</span> to Your School
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Apply for the SSSA movements and transform your institution with world-class safety protocols and educational standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {sssaMovements.map((movement, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 hover:bg-gray-800 transition-all duration-300">
                <div className="relative h-40 overflow-hidden">
                  <img 
                    src={movement.image} 
                    alt={movement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <div className="bg-yellow-400 p-2 rounded-lg">
                      <movement.icon className="w-5 h-5 text-black" />
                    </div>
                    <span className="font-bold text-white">{movement.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/sssa">
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-6 text-lg shadow-xl">
                Explore All SSSA Movements
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* For Member Schools Section */}
      <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-black text-white mb-4 px-6 py-2">
              <Users className="w-4 h-4 mr-2 inline" />
              For Member Schools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              Exclusive <span className="bg-yellow-400 px-2">Benefits</span> for Members
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Join UPPSC and unlock comprehensive support for your school's transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {memberBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-yellow-400 bg-white hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <benefit.icon className={`w-8 h-8 ${benefit.color === 'bg-yellow-400' ? 'text-black' : 'text-yellow-400'}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-black">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Dialogues Carousel Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 right-1/4 grid grid-cols-12 gap-4">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-black rounded-full" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-yellow-400 text-black font-bold mb-4 px-6 py-2">
              <Globe className="w-4 h-4 mr-2 inline" />
              Global Dialogues
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              International <span className="bg-yellow-400 px-2">Conversations</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading discussions with global experts shaping the future of education
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {dialogues.map((dialogue, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="group overflow-hidden h-full border-2 border-gray-100 hover:border-yellow-400 shadow-lg hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={dialogue.image} 
                        alt={dialogue.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <Badge className="bg-yellow-400 text-black font-bold mb-2">
                          Dialogue {index + 1}
                        </Badge>
                        <h3 className="text-xl font-bold">{dialogue.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6 bg-white">
                      <p className="text-black font-bold text-lg">{dialogue.person}</p>
                      <p className="text-gray-500 text-sm mb-3">{dialogue.role}</p>
                      <p className="text-gray-600 text-sm line-clamp-3">{dialogue.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-yellow-400 text-black border-0 hover:bg-yellow-500" />
            <CarouselNext className="hidden md:flex -right-4 bg-yellow-400 text-black border-0 hover:bg-yellow-500" />
          </Carousel>
        </div>
      </section>

      {/* Movements Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-black text-yellow-400 font-bold mb-4">
              <Award className="w-4 h-4 mr-2 inline" />
              Great Place to Learn
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              Movements for <span className="bg-yellow-400 px-2">Schools</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Building schools that are recognized as "Great Places to Learn"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-yellow-400 bg-white">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={movement.image} 
                    alt={movement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-yellow-400 text-black font-bold">
                      {movement.partners}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4 bg-black p-2 rounded-lg">
                    <movement.icon className="w-5 h-5 text-yellow-400" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-black mb-2">{movement.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{movement.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {movement.features.map((feature, idx) => (
                      <span key={idx} className="bg-yellow-400/20 text-black text-xs font-semibold px-3 py-1 rounded-full">
                        {feature}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-black text-yellow-400 font-bold mb-4">
              <Heart className="w-4 h-4 mr-2 inline" />
              Financial Aid to Students
            </Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
              Free Programs & Methodology
            </h2>
            <p className="text-black/70 max-w-2xl mx-auto">
              Comprehensive financial aid programs through CSR & philanthropist funded initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {financialAid.map((program, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-yellow-400 p-3 rounded-full">
                      <program.icon className="w-6 h-6 text-black" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl text-black mb-2">{program.title}</h3>
                  <p className="text-gray-600">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking & Awards Section */}
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

      {/* CTA Section */}
      <section className="py-20 bg-yellow-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6">
            Ready to Join the Movement?
          </h2>
          <p className="text-black/70 text-lg max-w-2xl mx-auto mb-8">
            Transform your school with international standards and safety protocols. Join UPPSC today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/apply">
              <Button className="bg-black hover:bg-gray-900 text-white font-bold px-10 py-6 text-lg shadow-xl">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/sssa">
              <Button variant="outline" className="border-2 border-black text-black hover:bg-black hover:text-white font-bold px-10 py-6 text-lg">
                Explore SSSA
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UPPSC;
