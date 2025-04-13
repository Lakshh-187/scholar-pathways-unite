
import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  School, 
  Award, 
  CheckCircle, 
  Clock, 
  HelpCircle, 
  XCircle, 
  FileCheck,
  Lightbulb,
  User,
  Building,
  Map,
  Flag,
  BookOpen,
  Gift,
  Star,
  Calendar,
  CircleCheck,
  CircleX,
  Briefcase,
  Users,
  ArrowRight,
  ArrowDown
} from 'lucide-react';
import { Network as NetworkIcon } from '@/components/ui/network-icon';

const BackedByUniford = () => {
  const [activeTab, setActiveTab] = useState("overview");

  // Program steps data
  const journeySteps = [
    {
      id: 1,
      title: "Application & Eligibility Check",
      description: "Students can apply directly or with Uniford help desk assistance based on their marks and eligibility.",
      icon: <FileCheck className="h-6 w-6 text-unifor-purple" />,
      details: "We verify if you meet our eligibility criteria, including academic performance and institute tier requirements."
    },
    {
      id: 2,
      title: "Uniford Documentation",
      description: "Uniford Foundation provides official documentation and Uniford Scholar ID to attach with your application.",
      icon: <FileCheck className="h-6 w-6 text-unifor-purple" />,
      details: "These documents give you an edge in the admission process and officially mark you as being 'Backed by Uniford'."
    },
    {
      id: 3,
      title: "Institute Selection",
      description: "Select institutes on your own or with help from our help desk based on your eligibility and interests.",
      icon: <Building className="h-6 w-6 text-unifor-purple" />,
      details: "We focus on Tier 2 & 3 institutes where students often lack access to premium opportunities."
    },
    {
      id: 4,
      title: "Application Submission",
      description: "Your application is submitted with Uniford Foundation's backing and documentation.",
      icon: <Map className="h-6 w-6 text-unifor-purple" />,
      details: "This gives your application official backing from a non-profit organization focused on educational empowerment."
    },
    {
      id: 5,
      title: "Admission & Onboarding",
      description: "Once admitted, you're officially onboarded as a Uniford Scholar with access to all benefits.",
      icon: <Flag className="h-6 w-6 text-unifor-purple" />,
      details: "You'll receive your complete Uniford Scholar Kit and become part of our community."
    },
    {
      id: 6,
      title: "Access to Opportunities",
      description: "Gain access to the same premium opportunities as Tier-1 institute students.",
      icon: <Lightbulb className="h-6 w-6 text-unifor-purple" />,
      details: "This includes internships, mentorships, project expos, startup grants, and all Uniford platforms and portals."
    },
    {
      id: 7,
      title: "Ongoing Support",
      description: "Receive continuous support throughout your academic journey with regular check-ins and guidance.",
      icon: <Users className="h-6 w-6 text-unifor-purple" />,
      details: "Our goal is to ensure you reach international standards and aren't held back by your institute's tier."
    }
  ];

  // Program benefits
  const benefits = [
    {
      icon: <GraduationCap className="h-10 w-10 text-unifor-purple" />,
      title: "Equal Opportunity Access",
      description: "Get the same opportunities as Tier-1 institute students, breaking the barriers of educational hierarchy."
    },
    {
      icon: <Award className="h-10 w-10 text-unifor-purple" />,
      title: "Official Recognition",
      description: "Receive official Uniford Scholar recognition, adding credibility to your profile and applications."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-unifor-purple" />,
      title: "Premium Internships",
      description: "Access to exclusive internships otherwise reserved for top-tier institute students."
    },
    {
      icon: <NetworkIcon size={40} className="text-unifor-purple" animated={false} />,
      title: "Global Networking",
      description: "Connect with students, mentors, and professionals from around the world through Uniford's vast network."
    },
    {
      icon: <Star className="h-10 w-10 text-unifor-purple" />,
      title: "Scholar Kit & Goodies",
      description: "Receive a complete Uniford Scholar Kit with ID cards, badges, and exclusive merchandise."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-unifor-purple" />,
      title: "Free Resources",
      description: "Access to learning resources, workshops, and training programs at no additional cost."
    }
  ];

  // Eligibility criteria
  const eligibilityCriteria = [
    {
      title: "Institute Tier",
      criteria: "Students from Tier-2 and Tier-3 institutes only",
      icon: <School className="h-5 w-5 text-unifor-purple" />,
      eligible: true
    },
    {
      title: "Application Status",
      criteria: "Must apply through Uniford Foundation or with Uniford documentation",
      icon: <FileCheck className="h-5 w-5 text-unifor-purple" />,
      eligible: true
    },
    {
      title: "Academic Requirement",
      criteria: "Minimum 55% marks in the latest qualification",
      icon: <BookOpen className="h-5 w-5 text-unifor-purple" />,
      eligible: true
    },
    {
      title: "Age Limit",
      criteria: "Under 24 years of age (U-24)",
      icon: <User className="h-5 w-5 text-unifor-purple" />,
      eligible: true
    },
    {
      title: "Already Admitted Students",
      criteria: "Students who already received admission without Uniford backing",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      eligible: false
    },
    {
      title: "Tier-1 Institute Students",
      criteria: "Students from top-tier institutes",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      eligible: false
    }
  ];

  // Scholar kit contents
  const scholarKit = [
    {
      title: "Scholar ID Cards (2)",
      description: "Official identification for applying to various Uniford programs and platforms",
      icon: <Badge className="h-6 w-6 text-unifor-purple" />
    },
    {
      title: "Membership Card",
      description: "Access card for conferences, summits, festivals, and offline events",
      icon: <Gift className="h-6 w-6 text-unifor-purple" />
    },
    {
      title: "Scholar Badge",
      description: "Recognition badge that's verified after profile check and curriculum completion",
      icon: <Award className="h-6 w-6 text-unifor-purple" />
    },
    {
      title: "Welcome Kit",
      description: "Includes branded merchandise and program information materials",
      icon: <Gift className="h-6 w-6 text-unifor-purple" />
    }
  ];

  // Terms and conditions
  const termsConditions = [
    "Students must maintain minimum academic standards throughout the program",
    "Participation in at least one Uniford platform or program per semester is required",
    "Scholar ID must be used responsibly and not shared with others",
    "Violation of Uniford's code of conduct may result in revocation of Scholar status",
    "Students agree to provide feedback and participate in program improvement surveys",
    "If opportunities are received through this program, giving back through mentorship, network access, or alumni fund contribution is encouraged"
  ];

  // FAQ items
  const faqs = [
    {
      question: "Is there any fee for joining the 'Backed By Uniford' program?",
      answer: "No, this is a completely funded initiative by Uniford Foundation, a non-profit organization. Students don't pay any fees to be part of this program."
    },
    {
      question: "Can I join if I'm already admitted to an institute?",
      answer: "Unfortunately, the program only backs students who apply with Uniford ID card and documentation before admission. If you're already admitted, you can still apply for a regular Uniford Scholar ID card through other programs."
    },
    {
      question: "What kind of institutes are eligible?",
      answer: "This program is specifically designed for students from Tier-2 and Tier-3 institutes who typically don't have access to the same opportunities as Tier-1 institute students."
    },
    {
      question: "How long does the backing last?",
      answer: "Uniford backs students throughout their entire academic journey at the institute, provided they maintain the minimum required participation and academic standards."
    },
    {
      question: "What platforms and opportunities will I get access to?",
      answer: "As a Backed By Uniford scholar, you'll get access to internships, LORs, referrals, mentorship, programs, publishing opportunities, awards, networking, profile evaluation, career opportunities, project expos, Uni-Pitch, startup grants, and much more."
    }
  ];

  // Application steps
  const applicationSteps = [
    {
      title: "Complete Online Form",
      description: "Fill out the initial application form on our website with your basic details and academic information",
      icon: <FileCheck className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Document Verification",
      description: "Submit your academic documents for verification of eligibility criteria",
      icon: <CheckCircle className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Institute Selection",
      description: "Select your preferred institutes or get assistance from our help desk based on your eligibility",
      icon: <Building className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Receive Backing Documents",
      description: "Get your official Uniford backing documents and Scholar ID for your application",
      icon: <Award className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Application Submission",
      description: "Submit your application to your chosen institute with Uniford backing",
      icon: <Map className="h-8 w-8 text-unifor-purple" />
    }
  ];

  // Table for access and features
  const accessFeatures = [
    { category: "Internships & Opportunities", feature: "Premium internships from partner companies", access: true },
    { category: "Internships & Opportunities", feature: "Referrals to industry positions", access: true },
    { category: "Internships & Opportunities", feature: "Letters of Recommendation (LORs)", access: true },
    { category: "Learning & Development", feature: "Mentorship from industry professionals", access: true },
    { category: "Learning & Development", feature: "Access to exclusive workshops and training", access: true },
    { category: "Learning & Development", feature: "Resources and learning materials", access: true },
    { category: "Recognition & Publishing", feature: "Profile featured on Uniford platforms", access: true },
    { category: "Recognition & Publishing", feature: "Publishing opportunities", access: true },
    { category: "Recognition & Publishing", feature: "Awards and recognitions", access: true },
    { category: "Platforms & Programs", feature: "Project Expo participation", access: true },
    { category: "Platforms & Programs", feature: "Uni-Pitch platform access", access: true },
    { category: "Platforms & Programs", feature: "UIRAD program eligibility", access: true },
    { category: "Platforms & Programs", feature: "Social Internship opportunities", access: true },
    { category: "Funding & Support", feature: "Startup grant eligibility", access: true },
    { category: "Funding & Support", feature: "Social welfare grant access", access: true },
    { category: "Funding & Support", feature: "Campaign participation", access: true }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-4 bg-gradient-to-br from-unifor-dark to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
          <div className="absolute h-80 w-80 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-10 animate-fade-in">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              BACKED BY UNIFORD
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Bridging the Opportunity Gap
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Empowering students from Tier-2 & Tier-3 institutes with the same premium opportunities 
              as Tier-1 institutes through <span className="font-bold">Uniford Foundation</span>, 
              a <span className="font-bold">non-profit organization</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                Apply for Backing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
                Learn More
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Key Stats */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">The Transformation We Bring</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">150+</p>
                <p className="text-gray-300">Partnered Institutes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">5,000+</p>
                <p className="text-gray-300">Backed Students</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">100%</p>
                <p className="text-gray-300">Free Opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content with Tabs */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <Tabs 
          defaultValue="overview" 
          className="w-full" 
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8 gap-2 bg-transparent">
            <TabsTrigger 
              value="overview" 
              className={`${activeTab === "overview" ? "bg-unifor-purple text-white" : "bg-gray-100 text-gray-700"} rounded-md py-3 px-4 text-sm md:text-base`}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger 
              value="journey" 
              className={`${activeTab === "journey" ? "bg-unifor-purple text-white" : "bg-gray-100 text-gray-700"} rounded-md py-3 px-4 text-sm md:text-base`}
            >
              Journey
            </TabsTrigger>
            <TabsTrigger 
              value="eligibility" 
              className={`${activeTab === "eligibility" ? "bg-unifor-purple text-white" : "bg-gray-100 text-gray-700"} rounded-md py-3 px-4 text-sm md:text-base`}
            >
              Eligibility
            </TabsTrigger>
            <TabsTrigger 
              value="apply" 
              className={`${activeTab === "apply" ? "bg-unifor-purple text-white" : "bg-gray-100 text-gray-700"} rounded-md py-3 px-4 text-sm md:text-base`}
            >
              How to Apply
            </TabsTrigger>
          </TabsList>
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">What is 'Backed By Uniford'?</h2>
                <p className="text-gray-600 mb-4">
                  'Backed By Uniford' is a special initiative by <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>, 
                  a <span className="font-bold text-unifor-dark-purple">non-profit organization</span>, designed to bridge the opportunity gap 
                  between premier institutes and other educational institutions.
                </p>
                <p className="text-gray-600 mb-4">
                  We back students who are unable to secure admission to Tier-1 international institutes, 
                  ensuring they still have access to world-class opportunities, platforms, and career assistance.
                </p>
                <p className="text-gray-600">
                  Through CSR funding, alumni donations, and venture funds, we empower students 
                  to reach international standards without any financial burden.
                </p>
              </div>
              <div className="bg-gradient-to-br from-unifor-light-purple to-unifor-purple p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-white">Key Features</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Complete funding by Uniford Foundation (non-profit)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Free access to all platforms and opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Official backing during institute application</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Continuous support throughout academic journey</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-white mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-white">Special Scholar Kit with ID cards and merchandise</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Benefits Section */}
            <div className="my-16">
              <div className="text-center mb-10">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  BENEFITS
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">Why Choose 'Backed By Uniford'?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Our program offers comprehensive support to ensure that your institute's tier 
                  doesn't limit your access to world-class opportunities.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{benefit.icon}</div>
                      <CardTitle className="text-xl text-unifor-dark-purple">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base">
                        {benefit.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Scholar Kit Section */}
            <div className="my-16">
              <div className="text-center mb-10">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  SCHOLAR KIT
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">What's Included in Your Scholar Kit?</h2>
                <p className="text-gray-600 max-w-3xl mx-auto">
                  Once your application is approved and you secure admission with our backing, 
                  you'll receive a complete Uniford Scholar Kit.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {scholarKit.map((item, index) => (
                  <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <CardHeader className="pb-2">
                      <div className="mb-2">{item.icon}</div>
                      <CardTitle className="text-lg text-unifor-dark-purple">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-sm">
                        {item.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="my-16">
              <div className="text-center mb-10">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  FREQUENTLY ASKED QUESTIONS
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">Common Questions</h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="grid gap-4">
                  {faqs.map((faq, index) => (
                    <Card key={index} className="bg-white hover:shadow-lg transition-all duration-300 border border-gray-100">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg text-unifor-dark-purple flex items-start">
                          <HelpCircle className="h-5 w-5 text-unifor-purple mr-2 flex-shrink-0 mt-0.5" />
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Journey Tab */}
          <TabsContent value="journey" className="animate-fade-in">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                THE JOURNEY
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">Your Path with 'Backed By Uniford'</h2>
              <p className="text-gray-600">
                From application to graduation, we support you every step of the way. 
                Here's how the journey unfolds when you're backed by <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>.
              </p>
            </div>
            
            {/* Desktop view */}
            <div className="hidden md:block">
              <div className="relative mb-20">
                {/* Central timeline line */}
                <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-unifor-purple to-unifor-blue"></div>
                
                {/* Timeline steps */}
                <div className="relative">
                  {journeySteps.map((step, index) => (
                    <div 
                      key={step.id} 
                      className={`flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                    >
                      {/* Content for left-aligned items */}
                      {index % 2 === 0 && (
                        <div className="w-[calc(50%-32px)] pr-8 text-right">
                          <div className="glass-card p-6 hover:translate-y-[-8px] transition-all duration-300">
                            <h3 className="text-xl font-bold mb-2 text-unifor-dark-purple">{step.title}</h3>
                            <p className="text-gray-600 mb-2">{step.description}</p>
                            <p className="text-gray-500 text-sm">{step.details}</p>
                          </div>
                        </div>
                      )}
                      
                      {/* Timeline node */}
                      <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-unifor-light-purple">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-unifor-light-purple">
                          {step.icon}
                        </div>
                      </div>
                      
                      {/* Content for right-aligned items */}
                      {index % 2 !== 0 && (
                        <div className="w-[calc(50%-32px)] pl-8">
                          <div className="glass-card p-6 hover:translate-y-[-8px] transition-all duration-300">
                            <h3 className="text-xl font-bold mb-2 text-unifor-dark-purple">{step.title}</h3>
                            <p className="text-gray-600 mb-2">{step.description}</p>
                            <p className="text-gray-500 text-sm">{step.details}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile view */}
            <div className="md:hidden space-y-8 mb-16">
              {journeySteps.map((step) => (
                <div key={step.id} className="glass-card p-6 relative">
                  <div className="absolute -left-3 top-6 w-8 h-8 bg-unifor-light-purple rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{step.id}</span>
                  </div>
                  <div className="ml-4">
                    <div className="flex items-center gap-3 mb-3">
                      {step.icon}
                      <h3 className="text-lg font-bold text-unifor-dark-purple">{step.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-gray-500 text-sm">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Access & Features Table */}
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  ACCESS & FEATURES
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">What You Get Access To</h2>
                <p className="text-gray-600">
                  As a student backed by <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>, 
                  you gain access to a wide range of opportunities and features.
                </p>
              </div>
              
              <div className="overflow-hidden rounded-xl shadow-lg">
                <table className="w-full">
                  <thead className="bg-unifor-dark-purple text-white">
                    <tr>
                      <th className="py-4 px-6 text-left">Category</th>
                      <th className="py-4 px-6 text-left">Feature/Opportunity</th>
                      <th className="py-4 px-6 text-center">Access</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {accessFeatures.map((item, index) => (
                      <tr key={index} className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                        <td className="py-3 px-6 font-medium">{item.category}</td>
                        <td className="py-3 px-6">{item.feature}</td>
                        <td className="py-3 px-6 text-center">
                          {item.access ? (
                            <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="mb-16">
              <div className="text-center max-w-3xl mx-auto mb-10">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  TERMS & CONDITIONS
                </Badge>
                <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">Program Guidelines</h2>
                <p className="text-gray-600">
                  To ensure the program's success and maintain its integrity, we have established the following guidelines:
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
                <ul className="space-y-4">
                  {termsConditions.map((term, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{term}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          
          {/* Eligibility Tab */}
          <TabsContent value="eligibility" className="animate-fade-in">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                ELIGIBILITY
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">Who Can Apply?</h2>
              <p className="text-gray-600">
                The 'Backed By Uniford' program has specific eligibility criteria to ensure 
                it reaches students who need it most. Check if you qualify:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div>
                <h3 className="text-xl font-bold mb-6 text-unifor-dark-purple flex items-center">
                  <CircleCheck className="h-6 w-6 text-green-500 mr-2" />
                  Who's Eligible
                </h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <ul className="space-y-6">
                    {eligibilityCriteria.filter(item => item.eligible).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-gray-800">{item.title}</h4>
                          <p className="text-gray-600">{item.criteria}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-6 text-unifor-dark-purple flex items-center">
                  <CircleX className="h-6 w-6 text-red-500 mr-2" />
                  Who's Not Eligible
                </h3>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <ul className="space-y-6">
                    {eligibilityCriteria.filter(item => !item.eligible).map((item, index) => (
                      <li key={index} className="flex items-start">
                        <XCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-gray-800">{item.title}</h4>
                          <p className="text-gray-600">{item.criteria}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-unifor-light-purple/20 rounded-xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-unifor-dark-purple">Required Documents</h3>
                <p className="text-gray-600">Be ready with these documents when you apply for the program.</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-unifor-dark-purple flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-unifor-purple" />
                      Identity Proof
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Aadhar Card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>PAN Card</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Any Government ID</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-unifor-dark-purple flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-unifor-purple" />
                      Academic Documents
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Latest Academic Marksheet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Passing Certificate</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>School/College ID</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-unifor-dark-purple flex items-center gap-2">
                      <FileCheck className="h-5 w-5 text-unifor-purple" />
                      Additional Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="text-sm text-gray-600 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Recent Passport Size Photo</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Email ID & Mobile Number</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>Parent/Guardian Contact</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center mb-10">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                IMPORTANT NOTICE
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-unifor-dark-purple">Uniford's Non-Profit Commitment</h3>
              <p className="text-gray-600 max-w-3xl mx-auto">
                As a <span className="font-bold text-unifor-dark-purple">non-profit organization</span>, 
                <span className="font-bold text-unifor-dark-purple"> Uniford Foundation</span> is committed to providing 
                all opportunities completely free of charge. 
                Our funding comes through CSR initiatives, alumni donations, and venture funds.
              </p>
            </div>
          </TabsContent>
          
          {/* How to Apply Tab */}
          <TabsContent value="apply" className="animate-fade-in">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                APPLICATION PROCESS
              </Badge>
              <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">How to Get Backed By Uniford</h2>
              <p className="text-gray-600">
                Follow these simple steps to apply for the program and start your journey 
                towards accessing premium opportunities backed by <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>.
              </p>
            </div>
            
            <div className="mb-16">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8">
                {applicationSteps.map((step, index) => (
                  <div key={index} className="flex-1 relative">
                    <div className="bg-white rounded-xl shadow-md p-6 h-full transform hover:-translate-y-2 transition-all duration-300">
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-unifor-purple rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                        {index + 1}
                      </div>
                      <div className="flex flex-col items-center text-center mt-4">
                        {step.icon}
                        <h3 className="text-xl font-bold my-3 text-unifor-dark-purple">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                    {index < applicationSteps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                        <ArrowRight className="h-6 w-6 text-unifor-purple" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-unifor-purple p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Application Deadlines</h3>
                  <p className="text-gray-100">Mark these important dates in your calendar</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Early Application</span>
                        <span className="text-gray-600">3 months before desired admission date</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Regular Application</span>
                        <span className="text-gray-600">1-2 months before desired admission date</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Backing Document Processing</span>
                        <span className="text-gray-600">7-10 working days from application approval</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Calendar className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Scholar Kit Delivery</span>
                        <span className="text-gray-600">Within 15 days of admission confirmation</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-unifor-dark-purple p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Application Tips</h3>
                  <p className="text-gray-100">Maximize your chances of getting backed</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Apply Early</span>
                        <span className="text-gray-600">Early applications have higher chances of approval</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Complete All Fields</span>
                        <span className="text-gray-600">Ensure your application form is 100% complete</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Be Honest</span>
                        <span className="text-gray-600">Provide accurate information; all details are verified</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Lightbulb className="h-5 w-5 text-unifor-purple mr-3 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="block font-bold text-gray-800">Follow Up</span>
                        <span className="text-gray-600">Check your application status regularly through our portal</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-unifor-light-purple/20 rounded-xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-unifor-dark-purple">Help & Support</h3>
                <p className="text-gray-600">Need assistance with your application? We're here to help!</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-unifor-dark-purple">Contact Help Desk</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Our dedicated help desk is available to answer all your queries.</p>
                    <Button className="w-full bg-unifor-purple hover:bg-unifor-dark-purple">Contact Support</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-unifor-dark-purple">FAQs & Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Check our comprehensive knowledge base for quick answers.</p>
                    <Button variant="outline" className="w-full border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple">View Resources</Button>
                  </CardContent>
                </Card>
                
                <Card className="border-none shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-unifor-dark-purple">Application Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">Already applied? Check the status of your application.</p>
                    <Button variant="outline" className="w-full border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple">Check Status</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* CTA Section */}
            <div className="text-center mb-10">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                READY TO APPLY?
              </Badge>
              <h3 className="text-2xl font-bold mb-4 text-unifor-dark-purple">Start Your Journey Today</h3>
              <p className="text-gray-600 max-w-3xl mx-auto mb-8">
                Don't let your institute's tier limit your potential. Join <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>'s 
                initiative and access world-class opportunities completely free of charge.
              </p>
              <Button size="lg" className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl px-8 py-6 text-lg">
                Apply for Backing
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-unifor-purple to-unifor-blue py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Educational Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the 5,000+ students who have already broken free from educational limitations with
              the backing of <span className="font-bold">Uniford Foundation</span>, a <span className="font-bold">non-profit organization</span>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-white text-unifor-dark-purple hover:bg-gray-100 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300">
                Contact Help Desk
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BackedByUniford;
