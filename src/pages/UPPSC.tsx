import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Shield, Globe, Award, Users, Building, 
  Leaf, Heart, BookOpen, Lightbulb, Target,
  GraduationCap, Trophy, Star, CheckCircle,
  Sparkles, School, Zap, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UPPSC = () => {
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
      icon: Leaf,
      description: "Focus on solar energy, green campus, reusable resources, and innovation projects for environmental sustainability.",
      image: "/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png",
      features: ["Solar Energy", "Green Campus", "Resource Recycling"]
    }
  ];

  const challenges = [
    {
      title: "Resource Optimization",
      description: "Maximizing educational impact with sustainable resource management and innovative solutions.",
      image: "/lovable-uploads/a8ba3d0d-5673-469e-9ca5-ac2acaf279a4.png",
      icon: Target
    },
    {
      title: "Climate Action",
      description: "Integrating environmental consciousness into curriculum and school operations.",
      image: "/lovable-uploads/ad360940-b29b-4c32-9666-1b858478ccd1.png",
      icon: Leaf
    },
    {
      title: "Innovation Projects",
      description: "Student-led initiatives driving sustainable solutions for real-world environmental challenges.",
      image: "/lovable-uploads/b9961f6a-0380-4621-bae1-1258a852c51a.png",
      icon: Lightbulb
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-primary/20 text-primary mb-6 px-6 py-2 text-sm">
              <School className="w-4 h-4 mr-2 inline" />
              UPPSC Initiative
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
              Uttar Pradesh Progressive Schools Council
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              For <span className="text-primary font-semibold">"Bringing International Standard & Safety"</span> Movement
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                Join the Movement <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://biss.uniford.org" target="_blank" rel="noopener noreferrer">
                  BISS Guide Book
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Backed By Section */}
      <section className="py-16 bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-yellow-500/20 text-yellow-400 mb-4">Backed By</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Uniford & UNCIF
              </h2>
              <p className="text-xl text-blue-200 mb-8">
                <span className="text-yellow-400 font-bold text-3xl">1 Million</span> Safe & Standard Schools for{' '}
                <span className="text-yellow-400 font-bold text-3xl">1 Billion</span> Frontliners
              </p>
              <div className="flex gap-4">
                <img src="/uniford-logo.png" alt="Uniford" className="h-16 object-contain bg-white rounded-lg p-2" />
                <img src="/uncif-logo.png" alt="UNCIF" className="h-16 object-contain bg-white rounded-lg p-2" />
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/uniford-flags.png" 
                alt="Global Initiative" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-blue-900 p-4 rounded-xl shadow-xl">
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-sm">Schools Target</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dialogues Section */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-primary/20 text-primary mb-4">Global Dialogues</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">International Conversations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading discussions with global experts shaping the future of education
            </p>
          </div>

          <div className="space-y-16">
            {dialogues.map((dialogue, index) => (
              <div 
                key={index} 
                className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${dialogue.color} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                    <img 
                      src={dialogue.image} 
                      alt={dialogue.title}
                      className="relative rounded-2xl shadow-xl w-full h-80 object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <Badge className={`bg-gradient-to-r ${dialogue.color} text-white mb-4`}>
                    Dialogue {index + 1}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{dialogue.title}</h3>
                  <p className="text-primary font-semibold mb-2">{dialogue.person}</p>
                  <p className="text-muted-foreground text-sm mb-4">{dialogue.role}</p>
                  <p className="text-foreground/80">{dialogue.description}</p>
                </div>
              </div>
            ))}
          </div>
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

      {/* Sustainable Challenges Section */}
      <section className="py-20 bg-gradient-to-b from-green-900 to-green-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-green-400/20 text-green-300 mb-4">
              <Leaf className="w-4 h-4 mr-2 inline" />
              Sustainability Focus
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sustainable Movement Challenges</h2>
            <p className="text-green-200 max-w-2xl mx-auto">
              Addressing key challenges in building sustainable educational ecosystems
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-green-400/20 overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={challenge.image} 
                    alt={challenge.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 p-3 rounded-xl">
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <CardContent className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{challenge.title}</h3>
                  <p className="text-green-200">{challenge.description}</p>
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
      <section className="py-20 bg-gradient-to-b from-purple-900 to-indigo-950 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-yellow-500/20 text-yellow-400 mb-4">
              <Trophy className="w-4 h-4 mr-2 inline" />
              Recognition
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ranking, Awards & Accreditation</h2>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Comprehensive evaluation based on key performance parameters
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {rankingParameters.map((param, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur border-purple-400/20 text-center p-6 hover:bg-white/20 transition-all">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-full w-fit mx-auto mb-4">
                  <param.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white">{param.title}</h3>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl p-8">
              <img src="/lovable-uploads/great-place-badge.png" alt="Great Place to Learn" className="h-24 object-contain" />
              <div className="text-left">
                <h3 className="text-2xl font-bold">Great Place to Learn</h3>
                <p className="text-purple-200">Official Recognition Badge</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the UPPSC Movement</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of the revolution in bringing international standards and safety to schools across Uttar Pradesh
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="gap-2" asChild>
              <Link to="/backed-by-uniford">
                Get Backed <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10" asChild>
              <a href="https://biss.uniford.org" target="_blank" rel="noopener noreferrer">
                Download BISS Guide
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UPPSC;
