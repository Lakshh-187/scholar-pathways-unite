import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { 
  Heart, 
  Sparkles, 
  Users, 
  Trophy, 
  BookOpen, 
  Code, 
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
  DollarSign
} from 'lucide-react';

const HerHaVa = () => {
  const [selectedApplication, setSelectedApplication] = useState<string | null>(null);

  const backingSupports = [
    {
      title: "Free Certifications",
      description: "Professional certifications in emerging technologies, leadership, and specialized domains - completely free for deserving girls.",
      icon: Award,
      color: "from-pink-400 to-rose-300",
      image: "https://i.ibb.co/Mx6K1nbj/a-photo-of-a-young-girl-wearing-a-uniford-shirt-wi-9-Hegk7-GWSBKHsu-H2i-He-Mn-Q-k-Ca-Tap-KZQf-GGdsvy.jpg"
    },
    {
      title: "Diplomas & Degrees",
      description: "Access to accredited diploma and degree programs from recognized institutions worldwide with full financial support.",
      icon: GraduationCap,
      color: "from-rose-400 to-pink-300",
      image: "https://i.ibb.co/gZVppTts/a-photo-of-a-smiling-student-holding-a-large-white-P6-M3q-Vy-VT-i2-BQm-APn-Xvpg-rv-ELP3-CVRIi-X-k-HF.jpg"
    },
    {
      title: "Internships & Placements",
      description: "Guaranteed internships with global organizations and direct placement opportunities in leading companies.",
      icon: Briefcase,
      color: "from-pink-300 to-rose-400",
      image: "https://i.ibb.co/Pvv7psn6/a-social-media-image-of-a-lively-event-scene-with-lnrmn4u-DQ0-Cw-ZH-7k-WDUPg-Lq-NEDYIo-R3e-Ju-Fag-Ru.jpg"
    },
    {
      title: "Scholarships & Grants",
      description: "Full financial aid for education, research projects, and startup funding to remove financial barriers completely.",
      icon: DollarSign,
      color: "from-rose-300 to-pink-400",
      image: "https://i.ibb.co/PvQTGvqQ/an-inspiring-photo-of-a-confident-student-with-a-m-y-LHo-SSq-KRg2-KX9z-L86db-YQ-5deos-Yky-SL20-r-N3a.jpg"
    },
    {
      title: "Counselling & Mentorship",
      description: "One-on-one mentorship from industry experts and counselling support for personal and professional growth.",
      icon: Users,
      color: "from-pink-400 to-rose-300",
      image: "https://i.ibb.co/jmdwCMS/a-vibrant-engaging-booth-for-uniford-with-a-modern-g-Uo5-Ae-Df-STe-HJx-Yvtyw00-Q-AMmpu-NKs-Sb-O8o9z.jpg"
    },
    {
      title: "Literacy & Skill Development",
      description: "Comprehensive literacy programs and skill development workshops to build strong foundations for success.",
      icon: BookOpen,
      color: "from-rose-400 to-pink-300",
      image: "https://i.ibb.co/Pvv7psn6/a-social-media-image-of-a-lively-event-scene-with-lnrmn4u-DQ0-Cw-ZH-7k-WDUPg-Lq-NEDYIo-R3e-Ju-Fag-Ru.jpg"
    }
  ];

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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-50 via-white to-rose-50 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="h-10 w-10 text-pink-500" />
                <Badge className="bg-pink-100 text-pink-700 border-pink-200 text-sm px-3 py-1">
                  EMPOWERMENT INITIATIVE
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                  Her-HaVa
                </span>
                <br />
                <span className="text-gray-800">Girl Innovators Program</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-4 italic">
                "Hasdi Rah Sada, Vadsi Reh Sada" - Keep Smiling, Keep Growing
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Revolutionary incubation & empowerment platform for young girls who aspire to innovate, 
                lead, and create social & technological impact. Building future women leaders through 
                world-class opportunities, mentorship, and financial support — at zero cost.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/apply">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                    <Heart className="mr-2 h-5 w-5" />
                    Join Her-HaVa
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.ibb.co/Mx6K1nbj/a-photo-of-a-young-girl-wearing-a-uniford-shirt-wi-9-Hegk7-GWSBKHsu-H2i-He-Mn-Q-k-Ca-Tap-KZQf-GGdsvy.jpg"
                    alt="Confident young girl representing Her-HaVa empowerment program"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg border border-pink-100">
                  <div className="flex items-center gap-2">
                    <Crown className="h-6 w-6 text-pink-500" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Future Leaders</p>
                      <p className="text-xs text-gray-600">Growing Strong</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Back Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="bg-pink-100 text-pink-700 px-4 py-1 mb-4">
              OUR BACKING INITIATIVE
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Back Girls for Success
            </h2>
            <p className="text-gray-600 text-lg">
              We provide comprehensive support to remove every barrier standing between girls and their dreams.
            </p>
          </div>

          <div className="space-y-16">
            {backingSupports.map((support, index) => {
              const IconComponent = support.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`${!isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}`}>
                    <div className="rounded-2xl overflow-hidden shadow-xl">
                      <img 
                        src={support.image}
                        alt={support.title}
                        className="w-full h-80 object-cover"
                      />
                    </div>
                  </div>
                  <div className={`${!isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${support.color}`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <Badge className="bg-pink-100 text-pink-700">{index + 1} OF 6</Badge>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">{support.title}</h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {support.description}
                    </p>
                    <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                      Learn More <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Career Connection Section */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="bg-pink-100 text-pink-700 px-4 py-1 mb-4">
                CAREER PATHWAYS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Connecting Girls with Career Opportunities
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                We bridge the gap between education and employment by connecting our girls with partnered schools and organizations for teaching, sessions, and career opportunities.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200">
                  <School className="h-12 w-12 text-pink-600 mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Partnered Schools Network</h3>
                  <p className="text-gray-600 mb-6">
                    Our extensive network of partnered educational institutions provides girls with teaching opportunities, 
                    conducting sessions, and becoming mentors to younger students.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">Teaching opportunities in schools</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span className="text-gray-700">Conducting specialized sessions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      <span className="text-gray-700">Mentorship programs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-rose-500 rounded-full"></div>
                      <span className="text-gray-700">Educational consultancy roles</span>
                    </div>
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
              <Card className="bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-pink-800">Direct Placements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Direct job placements in partnered organizations with competitive packages and growth opportunities.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-rose-100 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-rose-600" />
                  </div>
                  <CardTitle className="text-rose-800">Skill-Based Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    AI-powered matching system connects girls with opportunities that align with their skills and interests.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/80 backdrop-blur-sm border-pink-100 hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mb-4">
                    <Lightbulb className="h-6 w-6 text-pink-600" />
                  </div>
                  <CardTitle className="text-pink-800">Innovation Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">
                    Lead innovation projects in schools and organizations, creating real impact while building experience.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-pink-100 text-pink-700 px-4 py-1 mb-4">
              JOIN THE MOVEMENT
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Multiple Ways to Get Involved
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Whether you're a girl looking for opportunities, a contributor wanting to help, or an organization seeking to make impact - there's a place for you in Her-HaVa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-100 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-pink-800 text-lg">For Girls</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <Badge className="bg-pink-100 text-pink-700 text-xs">Scholarships</Badge>
                  <Badge className="bg-rose-100 text-rose-700 text-xs">Mentorship</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">Internships</Badge>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white">
                  Apply Now
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-purple-800 text-lg">Contributors</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Mentoring</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">Teaching</Badge>
                  <Badge className="bg-purple-100 text-purple-700 text-xs">Guiding</Badge>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  Contribute
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-pink-50 border-orange-100 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <HandHeart className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-orange-800 text-lg">Sponsors</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <Badge className="bg-orange-100 text-orange-700 text-xs">Funding</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">Partnership</Badge>
                  <Badge className="bg-orange-100 text-orange-700 text-xs">CSR</Badge>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                  Partner
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-teal-50 to-pink-50 border-teal-100 overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-teal-400 to-pink-400 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-teal-800 text-lg">Ambassadors</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-2 mb-4">
                  <Badge className="bg-teal-100 text-teal-700 text-xs">Campus Rep</Badge>
                  <Badge className="bg-pink-100 text-pink-700 text-xs">Events</Badge>
                  <Badge className="bg-teal-100 text-teal-700 text-xs">Leadership</Badge>
                </div>
                <Button size="sm" className="w-full bg-gradient-to-r from-teal-500 to-pink-500 text-white">
                  Represent
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories & Impact */}
      <section className="py-20 bg-gradient-to-r from-pink-50 via-white to-rose-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge variant="outline" className="bg-pink-100 text-pink-700 px-4 py-1 mb-4">
                SUCCESS STORIES
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transforming Lives, Building Leaders
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Real stories from girls whose lives have been transformed through Her-HaVa's comprehensive support system.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="order-2 md:order-1">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-pink-200">
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
                      who are committed to breaking barriers and creating opportunities for the next generation of female leaders.
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
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                  <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                  <p className="text-gray-700 font-medium">Free Support</p>
                  <p className="text-sm text-gray-600">All services at zero cost</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-rose-100">
                  <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
                  <p className="text-gray-700 font-medium">Mentorship</p>
                  <p className="text-sm text-gray-600">Continuous guidance</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-pink-100">
                  <div className="text-3xl font-bold text-pink-600 mb-2">Global</div>
                  <p className="text-gray-700 font-medium">Opportunities</p>
                  <p className="text-sm text-gray-600">Worldwide network</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apply">
                  <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white">
                    <Heart className="mr-2 h-5 w-5" />
                    Join Her-HaVa Movement
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-pink-300 text-pink-700 hover:bg-pink-50">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HerHaVa;