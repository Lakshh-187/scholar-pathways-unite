import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Heart, 
  Sparkles, 
  Users, 
  Trophy, 
  BookOpen, 
  GraduationCap, 
  Globe,
  Star,
  Crown,
  Flower2,
  Gift,
  MapPin,
  UserPlus,
  HandHeart,
  Building2,
  ArrowRight,
  Lightbulb,
  Target,
  Award,
  School,
  Briefcase,
  DollarSign,
  Rocket,
  CheckCircle2
} from 'lucide-react';

const HerHaVa = () => {
  const [activeBackingIndex, setActiveBackingIndex] = useState(0);

  const backingSupports = [
    {
      title: "Free Certifications",
      description: "Professional certifications in emerging technologies, leadership, and specialized domains - completely free for deserving girls.",
      icon: Award,
      image: "https://i.ibb.co/Mx6K1nbj/a-photo-of-a-young-girl-wearing-a-uniford-shirt-wi-9-Hegk7-GWSBKHsu-H2i-He-Mn-Q-k-Ca-Tap-KZQf-GGdsvy.jpg"
    },
    {
      title: "Diplomas & Degrees",
      description: "Access to accredited diploma and degree programs from recognized institutions worldwide with full financial support.",
      icon: GraduationCap,
      image: "https://i.ibb.co/gZVppTts/a-photo-of-a-smiling-student-holding-a-large-white-P6-M3q-Vy-VT-i2-BQm-APn-Xvpg-rv-ELP3-CVRIi-X-k-HF.jpg"
    },
    {
      title: "Internships & Placements",
      description: "Guaranteed internships with global organizations and direct placement opportunities in leading companies.",
      icon: Briefcase,
      image: "https://i.ibb.co/Pvv7psn6/a-social-media-image-of-a-lively-event-scene-with-lnrmn4u-DQ0-Cw-ZH-7k-WDUPg-Lq-NEDYIo-R3e-Ju-Fag-Ru.jpg"
    },
    {
      title: "Scholarships & Grants",
      description: "Full financial aid for education, research projects, and startup funding to remove financial barriers completely.",
      icon: DollarSign,
      image: "https://i.ibb.co/PvQTGvqQ/an-inspiring-photo-of-a-confident-student-with-a-m-y-LHo-SSq-KRg2-KX9z-L86db-YQ-5deos-Yky-SL20-r-N3a.jpg"
    },
    {
      title: "Counselling & Mentorship",
      description: "One-on-one mentorship from industry experts and counselling support for personal and professional growth.",
      icon: Users,
      image: "https://i.ibb.co/jmdwCMS/a-vibrant-engaging-booth-for-uniford-with-a-modern-g-Uo5-Ae-Df-STe-HJx-Yvtyw00-Q-AMmpu-NKs-Sb-O8o9z.jpg"
    },
    {
      title: "Literacy & Skill Development",
      description: "Comprehensive literacy programs and skill development workshops to build strong foundations for success.",
      icon: BookOpen,
      image: "https://i.ibb.co/Pvv7psn6/a-social-media-image-of-a-lively-event-scene-with-lnrmn4u-DQ0-Cw-ZH-7k-WDUPg-Lq-NEDYIo-R3e-Ju-Fag-Ru.jpg"
    }
  ];

  const activeSupport = backingSupports[activeBackingIndex];
  const ActiveIcon = activeSupport.icon;

  return (
    <Layout>
      <Helmet>
        <title>Her-HaVa - Empowering Girls Through Innovation | Uniford Foundation</title>
        <meta name="description" content="Her-HaVa: Revolutionary incubation platform empowering young girls with free certifications, scholarships, internships, and mentorship. Building future women leaders." />
        <meta name="keywords" content="Her-HaVa, girl empowerment, women leadership, scholarships for girls, free certification, mentorship program, education for girls" />
        <meta property="og:title" content="Her-HaVa - Empowering Girls Through Innovation" />
        <meta property="og:description" content="Join Her-HaVa's revolutionary platform empowering young girls with free education, certifications, and leadership opportunities." />
        <link rel="canonical" href="https://uniford.org/her-hava" />
      </Helmet>

      {/* Hero Section - Pink Theme */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-pink-900 via-pink-800 to-purple-900 text-white">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-pink-400 blur-3xl top-20 left-20 animate-pulse-soft"></div>
          <div className="absolute h-96 w-96 rounded-full bg-purple-400 blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-2">
                <span className="text-white font-semibold tracking-wider flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  EMPOWERMENT INITIATIVE
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span className="text-pink-200">Her-HaVa</span>
                <br />
                <span className="text-white">Girl Innovators Program</span>
              </h1>

              {/* Key Message Lines */}
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-pink-500/30 to-purple-500/30 backdrop-blur-sm border border-pink-400/30 rounded-xl p-4">
                  <p className="text-2xl font-bold text-pink-200">
                    Beyond The Classroom
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/30 to-pink-500/30 backdrop-blur-sm border border-purple-400/30 rounded-xl p-4">
                  <p className="text-xl font-semibold text-white">
                    Transforming Education into Employability
                  </p>
                </div>
              </div>
              
              <p className="text-lg text-pink-100 italic">
                "Hasdi Rah Sada, Vadsi Reh Sada" - Keep Smiling, Keep Growing
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                Revolutionary incubation & empowerment platform for young girls who aspire to innovate, 
                lead, and create social & technological impact.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/apply">
                  <Button size="lg" className="bg-pink-500 hover:bg-pink-400 text-white font-bold">
                    <Heart className="mr-2 h-5 w-5" />
                    Join Her-HaVa
                  </Button>
                </Link>
                <Link to="/her-hava-manual">
                  <Button size="lg" variant="outline" className="border-pink-300 text-pink-200 hover:bg-pink-500/20">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Explore Manual
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-pink-300/30">
                <img 
                  src="https://i.ibb.co/Mx6K1nbj/a-photo-of-a-young-girl-wearing-a-uniford-shirt-wi-9-Hegk7-GWSBKHsu-H2i-He-Mn-Q-k-Ca-Tap-KZQf-GGdsvy.jpg"
                  alt="Confident young girl representing Her-HaVa empowerment program"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2">
                  <Crown className="h-8 w-8 text-pink-500" />
                  <div>
                    <p className="text-lg font-bold text-gray-800">Future Leaders</p>
                    <p className="text-sm text-gray-600">Growing Strong</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Back Section - Tab-based UI */}
      <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
              OUR BACKING INITIATIVE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How We Back Girls for Success
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive support to remove every barrier standing between girls and their dreams.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-5 space-y-2">
              {backingSupports.map((support, index) => {
                const IconComp = support.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveBackingIndex(index)}
                    className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                      activeBackingIndex === index
                        ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                        : "bg-white hover:bg-pink-50 text-gray-800 border border-pink-100"
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${
                      activeBackingIndex === index 
                        ? "bg-white/20" 
                        : "bg-pink-100 group-hover:bg-pink-200"
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{support.title}</h4>
                      <p className={`text-xs mt-0.5 ${
                        activeBackingIndex === index ? "text-white/70" : "text-gray-500"
                      }`}>
                        {index + 1} of {backingSupports.length}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Big Image Content */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
                <img
                  src={activeSupport.image}
                  alt={activeSupport.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                      <ActiveIcon className="h-6 w-6 text-white" />
                    </div>
                    <Badge className="bg-pink-500 text-white">
                      {activeBackingIndex + 1} OF {backingSupports.length}
                    </Badge>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {activeSupport.title}
                  </h3>
                  <p className="text-white/90 text-sm md:text-base max-w-xl">
                    {activeSupport.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Connection Section */}
      <section className="py-20 bg-gradient-to-r from-pink-100 to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-pink-200 text-pink-800 border-pink-300">
                CAREER PATHWAYS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Connecting Girls with Career Opportunities
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We bridge the gap between education and employment by connecting our girls with partnered schools and organizations.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200">
                  <School className="h-12 w-12 text-pink-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Partnered Schools Network</h3>
                  <p className="text-gray-600 mb-6">
                    Our extensive network of partnered educational institutions provides girls with teaching opportunities, 
                    conducting sessions, and becoming mentors to younger students.
                  </p>
                  <div className="space-y-3">
                    {["Teaching opportunities in schools", "Conducting specialized sessions", "Mentorship programs", "Educational consultancy roles"].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-pink-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://i.ibb.co/Pvv7psn6/a-social-media-image-of-a-lively-event-scene-with-lnrmn4u-DQ0-Cw-ZH-7k-WDUPg-Lq-NEDYIo-R3e-Ju-Fag-Ru.jpg"
                    alt="Girls participating in educational sessions and career development"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Direct Placements", desc: "Direct job placements in partnered organizations with competitive packages.", color: "pink" },
                { icon: Target, title: "Skill-Based Matching", desc: "AI-powered matching system connects girls with aligned opportunities.", color: "rose" },
                { icon: Lightbulb, title: "Innovation Projects", desc: "Lead innovation projects in schools, creating real impact.", color: "pink" }
              ].map((item, idx) => (
                <Card key={idx} className="bg-white border-pink-100 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${item.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                    </div>
                    <CardTitle className="text-pink-800">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-100 text-pink-700 border-pink-200">
              JOIN THE MOVEMENT
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Multiple Ways to Get Involved
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Whether you're a girl looking for opportunities, a contributor wanting to help, or an organization seeking to make impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Heart, title: "For Girls", badges: ["Scholarships", "Mentorship", "Internships"], gradient: "from-pink-500 to-rose-500" },
              { icon: Users, title: "Contributors", badges: ["Mentoring", "Teaching", "Guiding"], gradient: "from-purple-500 to-pink-500" },
              { icon: HandHeart, title: "Sponsors", badges: ["Funding", "Partnership", "CSR"], gradient: "from-orange-500 to-pink-500" },
              { icon: MapPin, title: "Ambassadors", badges: ["Campus Rep", "Events", "Leadership"], gradient: "from-teal-500 to-pink-500" }
            ].map((item, idx) => (
              <Card key={idx} className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-white border-pink-100 overflow-hidden">
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-pink-800 text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2 mb-4">
                    {item.badges.map((badge, i) => (
                      <Badge key={i} className="bg-pink-100 text-pink-700 text-xs mx-1">{badge}</Badge>
                    ))}
                  </div>
                  <Button size="sm" className={`w-full bg-gradient-to-r ${item.gradient} text-white`}>
                    Join Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories & Impact */}
      <section className="py-20 bg-gradient-to-r from-pink-100 via-white to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-pink-200 text-pink-800 border-pink-300">
                SUCCESS STORIES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Transforming Lives, Building Leaders
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Real stories from girls whose lives have been transformed through Her-HaVa's comprehensive support system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <div className="bg-white rounded-3xl p-8 shadow-xl border border-pink-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
                      <Star className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800">Backed By Excellence</h3>
                      <p className="text-gray-600">Unified Talent Hunt Alliance (UTHA)</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 text-gray-700">
                    <p className="font-semibold text-pink-800 text-lg">Supported by Uniford Foundation & Startup Pool</p>
                    <p className="leading-relaxed">
                      Her-HaVa is powered by a network of industry leaders, educational institutions, and successful women entrepreneurs 
                      committed to breaking barriers and creating opportunities for the next generation of female leaders.
                    </p>
                    <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-xl">
                      <p className="text-lg font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                        "Empowering girls to innovate, create & lead globally"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://i.ibb.co/PvQTGvqQ/an-inspiring-photo-of-a-confident-student-with-a-m-y-LHo-SSq-KRg2-KX9z-L86db-YQ-5deos-Yky-SL20-r-N3a.jpg"
                    alt="Confident female student representing success through Her-HaVa"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { value: "100%", label: "Free Support", sub: "All services at zero cost" },
                  { value: "24/7", label: "Mentorship", sub: "Continuous guidance" },
                  { value: "Global", label: "Opportunities", sub: "Worldwide network" }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                    <div className="text-3xl font-bold text-pink-600 mb-2">{stat.value}</div>
                    <p className="text-gray-700 font-medium">{stat.label}</p>
                    <p className="text-sm text-gray-600">{stat.sub}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                    <Heart className="mr-2 h-5 w-5" />
                    Join Her-HaVa Movement
                  </Button>
                </Link>
                <Link to="/her-hava-manual">
                  <Button variant="outline" size="lg" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Download Brochure
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HerHaVa;
