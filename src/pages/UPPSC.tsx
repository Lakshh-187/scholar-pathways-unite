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
  ChevronLeft, ChevronRight
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
      color: "bg-blue-500"
    },
    {
      title: "Free Safety Audit",
      description: "Comprehensive safety audit & compliance advocacy to ensure your school meets international standards.",
      icon: ClipboardCheck,
      color: "bg-green-500"
    },
    {
      title: "NEP-2020 Implementation",
      description: "Complete implementation guide & advocacy support for National Education Policy 2020 compliance.",
      icon: FileCheck,
      color: "bg-purple-500"
    },
    {
      title: "Teacher Training",
      description: "Professional development by International organizations & global collaborations for educators.",
      icon: UserCheck,
      color: "bg-orange-500"
    },
    {
      title: "Incubation & Programs",
      description: "Establishment of Incubation cells, Skill development programs & fully funded initiatives.",
      icon: Rocket,
      color: "bg-pink-500"
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

  return (
    <Layout>
      <Helmet>
        <title>UPPSC - Uttar Pradesh Progressive Schools Council | Uniford</title>
        <meta name="description" content="UPPSC - Bringing International Standard & Safety to schools. Backed by Uniford & UNCIF for 1 million safe schools." />
      </Helmet>

      {/* Hero Section - Like Main Page */}
      <section className="min-h-[90vh] flex items-center pt-20 bg-gradient-to-br from-unifor-dark to-black text-white overflow-hidden relative">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse"></div>
          <div className="absolute h-96 w-96 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute h-48 w-48 rounded-full bg-yellow-500 blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-2 animate-pulse">
                <span className="text-white font-semibold tracking-wider flex items-center gap-2">
                  <School className="w-4 h-4" />
                  UPPSC Initiative
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
                Uttar Pradesh Progressive Schools Council
              </h1>
              
              <div className="space-y-3 text-lg md:text-xl text-gray-200 leading-relaxed">
                <p className="text-2xl md:text-3xl">
                  For <span className="text-primary font-bold">"Bringing International</span>
                </p>
                <p className="text-2xl md:text-3xl">
                  <span className="inline-block min-w-[160px] text-accent font-bold animate-fade-in">
                    {words[currentWordIndex]}
                  </span>
                  <span className="text-primary font-bold">"</span> Movement
                </p>
              </div>

              {/* Mission Statement */}
              <div className="bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/30 rounded-xl p-5 mt-6">
                <div className="flex items-center gap-3 mb-3">
                  <img src="/uniford-logo.png" alt="Uniford" className="h-8 object-contain bg-white rounded p-1" />
                  <img src="/uncif-logo.png" alt="UNCIF" className="h-8 object-contain bg-white rounded p-1" />
                </div>
                <p className="text-gray-300 text-base leading-relaxed">
                  <span className="text-yellow-400 font-bold text-xl">1 Million</span> Safe & Standard Schools for{' '}
                  <span className="text-yellow-400 font-bold text-xl">1 Billion</span> Frontliners
                </p>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-primary hover:bg-primary/90 text-white" size="lg">
                  Join the Movement
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" size="lg" asChild>
                  <a href="https://biss.uniford.org" target="_blank" rel="noopener noreferrer">
                    BISS Guide Book
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in hidden lg:block">
              <div className="relative">
                <img 
                  src="/lovable-uploads/uniford-flags.png" 
                  alt="UPPSC Global Initiative" 
                  className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="text-sm font-medium">Schools Target</div>
                </div>
                <div className="absolute -top-6 -left-6 bg-primary text-white p-4 rounded-xl shadow-xl">
                  <Shield className="w-8 h-8 mb-1" />
                  <div className="text-sm font-medium">Safety First</div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 bg-unifor-blue/30 backdrop-blur-xl rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* For Member Schools Section */}
      <section className="py-20 bg-gradient-to-b from-unifor-dark to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary mb-4 px-6 py-2">
              <Users className="w-4 h-4 mr-2 inline" />
              For Member Schools
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Benefits for Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join UPPSC and unlock comprehensive support for your school's transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {memberBenefits.map((benefit, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 bg-card/80 backdrop-blur hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className={`${benefit.color} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Global Dialogues Carousel Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="bg-primary/20 text-primary mb-4 px-6 py-2">
              <Globe className="w-4 h-4 mr-2 inline" />
              Global Dialogues
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">International Conversations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  <Card className="group overflow-hidden h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={dialogue.image} 
                        alt={dialogue.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${dialogue.color} opacity-60`}></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <Badge className="bg-white/20 backdrop-blur text-white mb-2">
                          Dialogue {index + 1}
                        </Badge>
                        <h3 className="text-xl font-bold">{dialogue.title}</h3>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-primary font-semibold text-lg">{dialogue.person}</p>
                      <p className="text-muted-foreground text-sm mb-3">{dialogue.role}</p>
                      <p className="text-foreground/80 text-sm line-clamp-3">{dialogue.description}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4" />
            <CarouselNext className="hidden md:flex -right-4" />
          </Carousel>
        </div>
      </section>

      {/* Movements Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-500/20 text-green-600 mb-4">
              <Award className="w-4 h-4 mr-2 inline" />
              Great Place to Learn
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Movements for Schools</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building schools that are recognized as "Great Places to Learn"
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movements.map((movement, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={movement.image} 
                    alt={movement.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2 text-white">
                      <movement.icon className="w-5 h-5" />
                      <span className="font-semibold">{movement.title}</span>
                    </div>
                    <p className="text-white/80 text-sm">{movement.partners}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground text-sm mb-4">{movement.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {movement.features.map((feature, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Aid Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-500/20 text-yellow-600 mb-4">
              <GraduationCap className="w-4 h-4 mr-2 inline" />
              Financial Support
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Financial Aid to Students</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Free programs, establishments, CSR & philanthropist funded initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {financialAid.map((aid, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={aid.image} 
                    alt={aid.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="bg-white/20 p-3 rounded-full w-fit mb-3">
                      <aid.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold">{aid.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{aid.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking & Awards Section */}
      <section className="py-20 bg-gradient-to-b from-unifor-dark to-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-500/20 text-yellow-400 mb-4">
              <Trophy className="w-4 h-4 mr-2 inline" />
              Recognition
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ranking, Awards & Accreditation</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Based on comprehensive parameters for educational excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {rankingParameters.map((param, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="bg-yellow-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <param.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-semibold text-sm">{param.title}</h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <img src="/uniford-logo.png" alt="Uniford" className="h-12 object-contain bg-white rounded-lg p-2" />
              <div className="text-left">
                <p className="text-yellow-400 font-bold text-lg">Backed by Uniford & UNCIF</p>
                <p className="text-gray-300 text-sm">Building the future of education together</p>
              </div>
              <img src="/uncif-logo.png" alt="UNCIF" className="h-12 object-contain bg-white rounded-lg p-2" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your School?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Join UPPSC today and become part of the movement for international standards and safety in education.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2">
              Apply for Membership <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/backed-by-uniford">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UPPSC;
