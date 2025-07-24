import React from 'react';
import { Helmet } from 'react-helmet';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Building, 
  Users, 
  Award, 
  Globe, 
  ArrowRight, 
  Shield, 
  CheckCircle,
  BookOpen,
  Trophy,
  Lightbulb,
  Target,
  Rocket,
  Brain,
  Star,
  Handshake
} from 'lucide-react';
import { Link } from 'react-router-dom';

const UNCIF = () => {
  return (
    <>
      <Helmet>
        <title>UNCIF - Uniford National Council of Institutes & Frontliners | Global Educational Transformation</title>
        <meta name="description" content="Join UNCIF (Uniford National Council of Institutes & Frontliners) - India's largest educational transformation organization. Get globally recognized curriculum, certifications, grants, and AI-powered learning platforms." />
        <meta name="keywords" content="UNCIF, Uniford National Council, educational transformation, global curriculum, institute certification, educational grants, AI learning, NEP 2020, frontliners, educational accreditation" />
        <meta property="og:title" content="UNCIF - Global Educational Transformation | Uniford" />
        <meta property="og:description" content="Transform your institute with UNCIF's globally recognized curriculum, certifications, grants, and AI-powered platforms. Join India's largest educational transformation network." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.com/uncif" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UNCIF - Global Educational Transformation" />
        <meta name="twitter:description" content="Join UNCIF for globally recognized curriculum, certifications, and educational transformation programs." />
        <link rel="canonical" href="https://uniford.com/uncif" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute h-64 w-64 rounded-full bg-accent blur-3xl top-20 left-20 animate-pulse"></div>
            <div className="absolute h-80 w-80 rounded-full bg-secondary blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 animate-fade-in">
                <Badge variant="outline" className="bg-background/10 text-primary-foreground border-primary-foreground/20 px-4 py-2">
                  UNCIF GLOBAL NETWORK
                </Badge>
                <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                  <span className="text-accent-foreground">Bringing UNCIF</span><br />
                  <span className="text-secondary-foreground">Globally Recognized</span><br />
                  <span className="text-primary-foreground">Curriculum to Schools</span>
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/80 leading-relaxed">
                  Join the <span className="font-bold text-accent-foreground">Uniford National Council of Institutes & Frontliners</span> - 
                  India's first and largest educational transformation organization.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="secondary" className="font-semibold">
                    <Shield className="mr-2 h-5 w-5" />
                    Join UNCIF Network
                  </Button>
                  <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Explore Programs
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/20">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="UNCIF Educational Transformation"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-background rounded-xl shadow-xl p-4 border">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Institutes Transformed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: UNCIF Curriculum */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="UNCIF Practical Learning"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-primary rounded-xl shadow-xl p-4 text-primary-foreground">
                  <BookOpen className="h-8 w-8" />
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  INNOVATIVE CURRICULUM
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  UNCIF Curriculum Focused on <span className="text-primary">Practical Exposure</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our curriculum emphasizes hands-on learning through UNSR Programs, gamified education, 
                  initiative-taking, high participation, and collaborative projects that prepare students for real-world challenges.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">UNSR Programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Gamified Learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Initiative Taking</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Collaboration Projects</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Certification & Awards */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                  RECOGNITION EXCELLENCE
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-secondary">Certification & Awards</span> in Multiple Categories
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Earn globally recognized certifications and awards across various educational categories. 
                  Our comprehensive recognition system validates excellence in teaching, learning, and institutional development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Card className="border-secondary/20">
                    <CardContent className="p-4 text-center">
                      <Trophy className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Excellence Awards</h3>
                      <p className="text-sm text-muted-foreground">Multiple categories</p>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/20">
                    <CardContent className="p-4 text-center">
                      <Award className="h-8 w-8 text-secondary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Global Certification</h3>
                      <p className="text-sm text-muted-foreground">International standards</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="UNCIF Awards Ceremony"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary rounded-xl shadow-xl p-4 text-secondary-foreground">
                  <Star className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Accreditation */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="UNCIF Accreditation Process"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-accent rounded-xl shadow-xl p-4 text-accent-foreground">
                  <Shield className="h-8 w-8" />
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                  INSTITUTIONAL RECOGNITION
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-accent">Accreditation</span> for Excellence
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Institutes with 3+ years of partnership with UNCIF receive official accreditation, 
                  marking their commitment to educational excellence and continuous improvement.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-accent font-bold text-sm">3+</span>
                    </div>
                    <span className="text-foreground">Years of UNCIF Partnership Required</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">Comprehensive Quality Assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">International Recognition Standards</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Grants */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  INFRASTRUCTURE SUPPORT
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-primary">Grants</span> for Modern Learning Infrastructure
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive funding support for establishing cutting-edge learning environments including 
                  AR/VR labs, AI labs, STEM & Robotics facilities, libraries, and international competition preparations.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-primary/20">
                    <CardContent className="p-4">
                      <Lightbulb className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">AR/VR Labs</h3>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4">
                      <Brain className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">AI Labs</h3>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4">
                      <Target className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">STEM & Robotics</h3>
                    </CardContent>
                  </Card>
                  <Card className="border-primary/20">
                    <CardContent className="p-4">
                      <BookOpen className="h-6 w-6 text-primary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">Modern Libraries</h3>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Modern Learning Lab"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary rounded-xl shadow-xl p-4 text-primary-foreground">
                  <Rocket className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Programs */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="UNCIF Programs"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-secondary rounded-xl shadow-xl p-4 text-secondary-foreground">
                  <Users className="h-8 w-8" />
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                  COMPREHENSIVE PROGRAMS
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-secondary">Programs</span> from Campus to Corporate
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive educational programs covering campus to corporate transitions, 
                  frontliner development, and digital literacy initiatives for holistic growth.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Campus to Corporate Bridge Programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Frontliner Development Initiatives</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Digital Literacy Programs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="text-foreground">Professional Skill Development</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Platforms */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                  INNOVATION PLATFORMS
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-accent">Platforms</span> for Innovation & Growth
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Access our premier platforms Uni-Pitch and Pitch-Burg for showcasing innovations, 
                  connecting with mentors, and accelerating entrepreneurial journeys.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-accent/20 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                        <Rocket className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">Uni-Pitch</h3>
                      <p className="text-muted-foreground text-sm">Student innovation showcase platform</p>
                    </CardContent>
                  </Card>
                  <Card className="border-accent/20 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4 mx-auto">
                        <Building className="h-6 w-6 text-accent" />
                      </div>
                      <h3 className="font-bold text-foreground mb-2">Pitch-Burg</h3>
                      <p className="text-muted-foreground text-sm">Professional networking & mentorship</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Innovation Platforms"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent rounded-xl shadow-xl p-4 text-accent-foreground">
                  <Globe className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Fellowship */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="YLC Fellowship"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-primary rounded-xl shadow-xl p-4 text-primary-foreground">
                  <Star className="h-8 w-8" />
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  LEADERSHIP DEVELOPMENT
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-primary">Fellowship</span> - YLC Program
                </h2>
                <h3 className="text-xl font-semibold text-foreground">Youth Leads the Change</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Empowering young leaders through our YLC (Youth Leads the Change) fellowship program. 
                  Develop leadership skills, drive social impact, and become catalysts for positive transformation.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Leadership Skill Development</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Social Impact Projects</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Mentorship & Guidance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 8: AI & Automation */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="bg-secondary/10 text-secondary-foreground border-secondary/20">
                  FUTURE-READY EDUCATION
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-secondary">AI & Automation</span> with NEP-2020
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive training for teachers combining AI and automation technologies with 
                  standard NEP-2020 guidelines to create future-ready educational environments.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-secondary/20">
                    <CardContent className="p-4">
                      <Brain className="h-6 w-6 text-secondary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">AI Integration</h3>
                      <p className="text-xs text-muted-foreground">Smart learning systems</p>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/20">
                    <CardContent className="p-4">
                      <Target className="h-6 w-6 text-secondary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">NEP-2020 Alignment</h3>
                      <p className="text-xs text-muted-foreground">Policy compliance</p>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/20">
                    <CardContent className="p-4">
                      <Users className="h-6 w-6 text-secondary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">Teacher Training</h3>
                      <p className="text-xs text-muted-foreground">Professional development</p>
                    </CardContent>
                  </Card>
                  <Card className="border-secondary/20">
                    <CardContent className="p-4">
                      <Rocket className="h-6 w-6 text-secondary mb-2" />
                      <h3 className="font-semibold text-foreground text-sm">Automation Tools</h3>
                      <p className="text-xs text-muted-foreground">Efficiency enhancement</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="AI in Education"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary rounded-xl shadow-xl p-4 text-secondary-foreground">
                  <Brain className="h-8 w-8" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 9: Backed Institutes */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                    alt="Competition Success"
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="absolute -top-6 -left-6 bg-accent rounded-xl shadow-xl p-4 text-accent-foreground">
                  <Handshake className="h-8 w-8" />
                </div>
              </div>
              
              <div className="space-y-6 order-1 lg:order-2">
                <Badge variant="outline" className="bg-accent/10 text-accent-foreground border-accent/20">
                  COMPETITIVE EXCELLENCE
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  <span className="text-accent">Backed Institutes</span> for Global Competitions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Comprehensive support for institutes participating in national and international competitions. 
                  Get backing, resources, and mentorship to excel on global platforms.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">National Competition Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">International Platform Access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">Resource & Funding Support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent" />
                    <span className="text-foreground">Expert Mentorship</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Institute?
            </h2>
            <p className="text-xl mb-8 text-primary-foreground/80">
              Join the UNCIF network and be part of India's largest educational transformation movement
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/apply">
                <Button size="lg" variant="secondary" className="font-semibold">
                  <Shield className="mr-2 h-5 w-5" />
                  Apply for UNCIF Membership
                </Button>
              </Link>
              <Link to="/uirad">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Explore More Programs
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default UNCIF;