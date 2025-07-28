import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import UNCIFSection from "@/components/UNCIFSection";
import UNCIF2026Milestones from "@/components/UNCIF2026Milestones";
import UISSection from "@/components/UISSection";
import WelcomePopup from "@/components/WelcomePopup";
import CredibilityCarousel from "@/components/CredibilityCarousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { 
  ArrowRight, 
  Award, 
  Building, 
  DollarSign, 
  GraduationCap, 
  Globe, 
  Heart, 
  Rocket, 
  Users,
  Milestone,
  Cpu,
  Target,
  Lightbulb,
  TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <Layout>
      <WelcomePopup />
      <Helmet>
        <title>Uniford Foundation - Transforming Education Through UNCIF Network | Educational Innovation</title>
        <meta name="description" content="Uniford Foundation: Leading educational transformation through UNCIF Network. Empowering students with scholarships, research opportunities, and global connections. Join 50,000+ scholars worldwide." />
        <meta name="keywords" content="Uniford, UNCIF, education, scholarship, Uniford Foundation, student opportunities, educational transformation, research, global network, academic excellence" />
        <meta property="og:title" content="Uniford Foundation - Transforming Education Through UNCIF Network" />
        <meta property="og:description" content="Join the Uniford movement transforming education worldwide. Access scholarships, research opportunities, and global connections through our UNCIF Network." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uniford Foundation - Educational Transformation" />
        <meta name="twitter:description" content="Transforming education through UNCIF Network. Join 50,000+ scholars in our global educational revolution." />
        <link rel="canonical" href="https://uniford.org" />
      </Helmet>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white text-unifor-dark light-purple  px-4 py-1.5">
                TRANSFORMING EDUCATION
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold white ">
                Transforming Students & Institutes Through <span className="text-yellow-300">CSR Grants</span>
              </h1>
              <p className="text-xl text-gray-200">
                Building a future where quality education is accessible to all through 
                alumni donations, modern AI platforms, and zero-fee opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/apply">
                  <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 text-lg px-6 py-6">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="outline" className="border-white text-white :bg-white/10 text-lg px-6 py-6">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/20 rounded-full blur-xl"></div>
              <div className="relative z-10">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="bg-white p-4 rounded-xl shadow-2xl">
                        <img 
                          src="https://i.ibb.co/Lzm5hQPn/a-professional-photo-of-a-young-woman-wearing-a-un-MYMPk0-FYS9u-Ryz-X-ksf-Di-Q-rz2-Fq-R4s-Qgm-Tdu5-H.jpg" 
                          alt="Students at Uniford"
                          className="w-full h-[300px] object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-white p-4 rounded-xl shadow-2xl">
                        <img 
                          src="/lovable-uploads/cf19831c-2c00-4761-8379-c6757b623d07.png" 
                          alt="Sustainable Development Goals - We Support & Execute"
                          className="w-full h-[300px] object-contain rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-white p-4 rounded-xl shadow-2xl">
                        <img 
                          src="/lovable-uploads/ad360940-b29b-4c32-9666-1b858478ccd1.png" 
                          alt="OUR Free Workshops & Chapters - Uniford Foundation Programs"
                          className="w-full h-[300px] object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-white p-4 rounded-xl shadow-2xl">
                        <img 
                          src="/lovable-uploads/e6b92560-9760-40ab-a35f-c80a1bbac855.png" 
                          alt="Our Scholars & UF'26 Chapters from Global Universities"
                          className="w-full h-[300px] object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="bg-white p-4 rounded-xl shadow-2xl">
                        <img 
                          src="/lovable-uploads/be3517cc-e81e-4f61-a133-019267cf75c1.png" 
                          alt="Scholar Program - Uniford Foundation Success Stories"
                          className="w-full h-[300px] object-cover rounded-lg"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-2 bg-white/90 hover:bg-white" />
                  <CarouselNext className="right-2 bg-white/90 hover:bg-white" />
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New UNCIF Section */}
      <UNCIFSection />

      {/* UNCIF 2026 Milestones */}
      <UNCIF2026Milestones />

      {/* New UIS Section */}
      <UISSection />

      {/* Credibility Carousel */}
      <CredibilityCarousel />

      {/* Organization Message Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-r from-red-50 to-orange-50">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-8">
                  <Badge variant="outline" className="bg-red-100 text-red-700 px-4 py-2 mb-4 text-lg">
                    THE HARD TRUTH
                  </Badge>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Breaking the Privilege Cycle Trap
                  </h2>
                </div>
                
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="text-lg md:text-xl mb-6 font-medium text-center">
                    Brain drain, potential drain, 67% youths are unemployed, not credible, crime rates high, depression, procrastination are the terms we heard daily. You know why?
                  </p>
                  
                  <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
                    <p className="text-lg mb-4 font-semibold text-gray-800">Listen -</p>
                    <p className="text-base mb-4">
                      🚪 One student walks into rooms filled with mentors, hackathons, internships, and open opportunities.
                    </p>
                    <p className="text-base mb-4">
                      Another stands outside a locked door, armed only with textbooks and exam stress.
                    </p>
                    <p className="text-base mb-4">
                      💔 Not because they aren't bright — but because the system never handed them the key.
                    </p>
                    <p className="text-base mb-4 font-semibold text-red-600">
                      🔐 That's the Privilege Cycle Trap.
                    </p>
                    <p className="text-lg font-bold text-center text-gray-800">
                      It's not just about what you know — it's about who lets you in
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-sm text-gray-600 italic">
                      by - LC Kahleer (Director)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Six Main Programs Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              OUR INITIATIVES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transformative Programs Breaking Barriers
            </h2>
            <p className="text-gray-600 text-lg">
              Six powerful initiatives designed to unlock potential and create opportunities for every student.
            </p>
          </div>

          <div className="space-y-16">
            {/* Uniford Scholar */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="bg-blue-100 text-blue-700 mb-4">SCHOLAR PROGRAM</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Uniford Scholar</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium">🎯 The Reality:</p>
                  <p>Traditional education leaves students with degrees but no direction. They graduate knowing theory but lack practical exposure to real opportunities.</p>
                  
                  <p className="text-lg font-medium text-blue-700">💡 Our Solution:</p>
                  <p>We adopt students as scholars and connect them with worldwide opportunities through:</p>
                  
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Frontliner Program</strong> - Leadership development through real initiatives</li>
                    <li><strong>Campus to Corporate Program</strong> - Bridge the gap between academics and industry</li>
                    <li><strong>Global Opportunities Network</strong> - Access to internships, mentorships worldwide</li>
                    <li><strong>Skill Enhancement Modules</strong> - Beyond textbooks, real-world capabilities</li>
                  </ul>
                  
                  <p className="text-sm italic text-gray-500">Breaking the cycle of unemployed graduates</p>
                </div>
                <Link to="/id-card">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 mt-6">
                    Become a Scholar <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/baf6c96d-a314-4745-ba69-67672aa9a098.png" 
                  alt="Uniford Scholar Program - Student Presentation"
                  className="w-full h-80 object-cover"
                />
              </div>
              </div>
            </div>

            {/* UIEP */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/7cdd624e-8f94-4d4c-822d-305853985de3.png" 
                  alt="UIEP Institute Transformation - Uniford Foundation Campus"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div>
                <Badge className="bg-green-100 text-green-700 mb-4">INSTITUTE TRANSFORMATION</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">UIEP</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium">🏫 The Challenge:</p>
                  <p>Most institutes operate with outdated infrastructure, limited resources, and no international exposure - keeping students trapped in mediocrity.</p>
                  
                  <p className="text-lg font-medium text-green-700">🚀 Our Transformation:</p>
                  <p>We transform institutes to international standards using:</p>
                  
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>UIRAD Integration</strong> - Research & development capabilities</li>
                    <li><strong>CSR & Venture Funds</strong> - Financial backing for infrastructure</li>
                    <li><strong>Uniford Billion Funds</strong> - Large-scale transformation projects</li>
                    <li><strong>Scholar Programs</strong> - Student-centric development initiatives</li>
                  </ul>
                  
                  <p className="text-sm italic text-gray-500">From local colleges to global standards</p>
                </div>
                <Link to="/backed-by-uniford">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 mt-6">
                    Transform Your Institute <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Frontliner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="bg-purple-100 text-purple-700 mb-4">LEADERSHIP DEVELOPMENT</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Frontliner</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium">😔 The Problem:</p>
                  <p>Students become followers, not leaders. They wait for opportunities instead of creating them. Depression and procrastination become their companions.</p>
                  
                  <p className="text-lg font-medium text-purple-700">⚡ Our Approach:</p>
                  <p>Every student becomes an initiator with their own initiative that develops:</p>
                  
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Leadership Mindset</strong> - From follower to frontrunner</li>
                    <li><strong>Personality Development</strong> - Confidence, communication, charisma</li>
                    <li><strong>Global Exposure</strong> - International perspectives and networks</li>
                    <li><strong>Positive Attitude</strong> - Solution-focused thinking patterns</li>
                  </ul>
                  
                  <p className="text-sm italic text-gray-500">Creating leaders, not just graduates</p>
                </div>
                <Link to="/programs">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 mt-6">
                    Start Your Initiative <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/01f46edd-8f21-4683-8a5a-d39d95b6d35c.png" 
                    alt="Frontliner Leadership Program - Student Innovation"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Pitchburg */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/06d7a363-4fa0-4df2-8417-9267f42b3add.png" 
                  alt="Pitchburg Innovation Platform - Modern Uniford Office"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div>
                <Badge className="bg-orange-100 text-orange-700 mb-4">INNOVATION PLATFORM</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Pitchburg</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium">💡 The Gap:</p>
                  <p>Brilliant ideas die in notebooks. Young innovators lack platforms to showcase their potential and connect with industry leaders.</p>
                  
                  <p className="text-lg font-medium text-orange-700">🎯 Our Platform:</p>
                  <p>A revolutionary space where innovators, initiators, and achievers converge:</p>
                  
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Pitch Competitions</strong> - Present ideas to industry experts</li>
                    <li><strong>Stanburg Award</strong> - Youth-oriented recognition program</li>
                    <li><strong>Career Opportunities</strong> - Direct pathways to employment</li>
                    <li><strong>Grants & Funding</strong> - Financial support for promising ideas</li>
                    <li><strong>Exclusive Invitations</strong> - Access to elite networking events</li>
                  </ul>
                  
                  <p className="text-sm italic text-gray-500">Where ideas meet opportunities</p>
                </div>
                <Link to="/uni-pitch">
                  <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 mt-6">
                    Pitch Your Idea <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* UIRAD */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge className="bg-teal-100 text-teal-700 mb-4">RESEARCH & DEVELOPMENT</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">UIRAD</h3>
                <p className="text-lg text-gray-500 mb-4">(Uniford International Research & Development)</p>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium">🔬 The Issue:</p>
                  <p>Academic research remains in papers. Real-world problems persist unsolved while students study theoretical solutions.</p>
                  
                  <p className="text-lg font-medium text-teal-700">🛠️ Our Mission:</p>
                  <p>Bridge the gap between research and real-world impact through:</p>
                  
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>Innovation Implementation</strong> - Turn ideas into reality</li>
                    <li><strong>Real-life Challenge Solutions</strong> - Address actual industry problems</li>
                    <li><strong>New Activity Initiation</strong> - Pioneer fresh approaches</li>
                    <li><strong>Strategic Establishments</strong> - Create lasting institutional changes</li>
                  </ul>
                  
                  <p className="text-sm italic text-gray-500">Research that changes lives</p>
                </div>
                <Link to="/uirad">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 mt-6">
                    Join Research <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="order-1 lg:order-2">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/4949b6b2-3040-4a7a-a474-5bd28a85a8b3.png" 
                    alt="UIRAD Research Program - Uniford Foundation Collaboration"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* We Backed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop" 
                  alt="We Backed Transformation"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div>
                <Badge className="bg-indigo-100 text-indigo-700 mb-4">INSTITUTIONAL BACKING</Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">We Backed</h3>
                <div className="space-y-4 text-gray-600">
                  <p className="text-lg font-medium">💸 The Reality:</p>
                  <p>Promising initiatives fail due to lack of funding. Great ideas remain dreams because institutions can't access proper financial support.</p>
                  
                  <p className="text-lg font-medium text-indigo-700">🤝 Our Support:</p>
                  <p>Transform and standardize institutions by connecting them with:</p>
                  
                  <ul className="list-disc ml-6 space-y-2">
                    <li><strong>CSR Funds</strong> - Corporate social responsibility backing</li>
                    <li><strong>Venture Capital</strong> - Investment for growth initiatives</li>
                    <li><strong>Program Development</strong> - Structured educational improvements</li>
                    <li><strong>Project Implementation</strong> - End-to-end execution support</li>
                    <li><strong>Strategic Establishments</strong> - Long-term institutional partnerships</li>
                  </ul>
                  
                  <p className="text-sm italic text-gray-500">Funding dreams, building futures</p>
                </div>
                <Link to="/we-backed">
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 mt-6">
                    Get Backed <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                OUR APPROACH
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Transform Educational Ecosystems
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in a comprehensive transformation that addresses both student potential and institutional capabilities through our unique approach.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-unifor-light-purple rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-unifor-dark-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Students Transformation</h3>
                    <p className="text-gray-600">
                      We empower students with practical skills, real-world exposure, and international opportunities that traditional education often misses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-unifor-light-purple rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-unifor-dark-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Institutes Transformation</h3>
                    <p className="text-gray-600">
                      We help institutions reach international standards through CSR grants, infrastructure upgrades, and cutting-edge curriculum integration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-unifor-light-purple rounded-full flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-unifor-dark-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI-Powered Platforms</h3>
                    <p className="text-gray-600">
                      Our modern AI portals connect resources, opportunities, and people across the educational ecosystem for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co/d48n7Y5n/a-photo-of-a-spacious-school-auditorium-with-a-bri-VH1z-VAR4-Teu-Akjbdzzb2-Cg-Nx5-JNYwx-RLy-XAUu7-Cb.jpg" 
                  alt="Educational Transformation"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              OUR PROGRAMS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flagship Initiatives Driving Change
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our diverse programs designed to transform education and create opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ID Card Program",
                description: "Official scholar recognition with verified credentials and exclusive benefits.",
                link: "/id-card",
                color: "bg-gradient-to-r from-blue-500 to-purple-600"
              },
              {
                title: "Uni-Pitch",
                description: "Platform for students to pitch innovations and ideas to industry experts.",
                link: "/uni-pitch",
                color: "bg-gradient-to-r from-green-500 to-teal-600"
              },
              {
                title: "UIRAD",
                description: "Research, analysis and development program connecting academia with industry.",
                link: "/uirad",
                color: "bg-gradient-to-r from-orange-500 to-red-600"
              },
              {
                title: "Talent Hunt Alliance",
                description: "Network of companies seeking exceptional talent from our scholar pool.",
                link: "/talent-hunt-alliance",
                color: "bg-gradient-to-r from-purple-500 to-pink-600"
              },
              {
                title: "Social Internship",
                description: "Impact-focused internships that develop skills while serving communities.",
                link: "/social-internship",
                color: "bg-gradient-to-r from-yellow-500 to-amber-600"
              },
              {
                title: "Backed By Uniford",
                description: "Institute transformation program bringing international standards to campuses.",
                link: "/backed-by-uniford",
                color: "bg-gradient-to-r from-teal-500 to-cyan-600"
              }
            ].map((program, index) => (
              <Link key={index} to={program.link} className="group">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-3 w-full ${program.color}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-unifor-purple transition-colors">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="flex items-center text-unifor-purple font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/programs">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple px-8 py-6 text-lg">
                View All Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              OUR MILESTONES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact & Achievements
            </h2>
            <p className="text-gray-600 text-lg">
              Tracking our progress in transforming education across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "Institutes Backed",
                description: "Educational institutions transformed through our programs",
                icon: <Building className="h-6 w-6 text-blue-600" />
              },
              {
                number: "50,000+",
                label: "Students Impacted",
                description: "Lives changed through opportunities and resources",
                icon: <Users className="h-6 w-6 text-green-600" />
              },
              {
                number: "₹20Cr+",
                label: "CSR Grants Facilitated",
                description: "Funds directed to educational transformation",
                icon: <DollarSign className="h-6 w-6 text-amber-600" />
              },
              {
                number: "25+",
                label: "States Reached",
                description: "Geographic spread across the country",
                icon: <Globe className="h-6 w-6 text-purple-600" />
              }
            ].map((milestone, index) => (
              <Card key={index} className="text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    {milestone.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-unifor-dark-purple mb-2">{milestone.number}</h3>
                  <h4 className="text-lg font-semibold mb-2">{milestone.label}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Milestone className="h-8 w-8 text-yellow-300" />
                  <h2 className="text-2xl md:text-3xl font-bold">Vision 2030</h2>
                </div>
                
                <p className="text-lg text-gray-200 mb-6">
                  Our ambitious roadmap to transform education across India, making quality learning accessible to all regardless of financial constraints.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Building className="h-4 w-4 text-white" />
                    </div>
                    <span>10,000+ institutes transformed to international standards</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span>1 million+ students with access to quality resources</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <span>Present in all states and union territories</span>
                  </div>
                </div>
                
                <Link to="/we-invite">
                  <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100">
                    Join Our Mission
                  </Button>
                </Link>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://i.ibb.co/Z6TrqkS0/a-confrence-hall-having-three-young-proffesors-con-TGMWs3-Ma-TPKpk-L6-Qug-Ph-Og-cfv9yv2-OQNC9-UNZ1-G.jpg" 
                  alt="Vision 2030" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Part of the Transformation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a student looking for opportunities, an institute seeking transformation, or a company wanting to join our alliance, we have a pathway for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/apply">
                <Button className="bg-unifor-purple hover:bg-unifor-dark-purple px-6 py-6 text-lg">
                  Apply as Scholar
                </Button>
              </Link>
              <Link to="/backed-by-uniford">
                <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple px-6 py-6 text-lg">
                  Institute Partnership
                </Button>
              </Link>
              <Link to="/talent-hunt-alliance">
                <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple px-6 py-6 text-lg">
                  Join Talent Alliance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
