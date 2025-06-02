
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Target, 
  CheckCircle2, 
  Rocket, 
  Brain, 
  Globe, 
  Award, 
  Lightbulb,
  Code,
  Cpu,
  Briefcase,
  GraduationCap,
  Star,
  Shield,
  HelpCircle,
  Plus,
  Minus
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const CAF = () => {
  const internshipDomains = [
    {
      title: "Management Internships",
      description: "Leadership and business management internship opportunities",
      icon: <Briefcase className="h-6 w-6" />,
      color: "bg-blue-500",
      opportunities: ["Project Management Intern", "Team Leadership Intern", "Strategic Planning Intern"]
    },
    {
      title: "Computer Science Internships",
      description: "Software development and programming internships",
      icon: <Code className="h-6 w-6" />,
      color: "bg-purple-500",
      opportunities: ["Web Development Intern", "Mobile App Development", "Database Management Intern"]
    },
    {
      title: "Electronics Internships",
      description: "Hardware and electronics engineering internship roles",
      icon: <Cpu className="h-6 w-6" />,
      color: "bg-green-500",
      opportunities: ["Circuit Design Intern", "IoT Development Intern", "Embedded Systems Intern"]
    },
    {
      title: "Freshers - Special Foundational Internships",
      description: "Entry-level internships for new graduates with no experience",
      icon: <GraduationCap className="h-6 w-6" />,
      color: "bg-orange-500",
      opportunities: ["Basic Training Intern", "Mentorship Programs", "Skill Development Intern"]
    },
    {
      title: "AI & Automation Internships",
      description: "Artificial intelligence and automation internship projects",
      icon: <Brain className="h-6 w-6" />,
      color: "bg-red-500",
      opportunities: ["Machine Learning Intern", "Process Automation Intern", "Data Analysis Intern"]
    },
    {
      title: "Modern Tools & Software Internships",
      description: "Latest technology and software development internships",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-yellow-500",
      opportunities: ["DevOps Intern", "Cloud Computing Intern", "Software Testing Intern"]
    },
    {
      title: "Students 9th to 12th Internships",
      description: "Special internship programs for high school students",
      icon: <Star className="h-6 w-6" />,
      color: "bg-pink-500",
      opportunities: ["Research Project Intern", "Science Fair Participant", "Coding Bootcamp Intern"]
    },
    {
      title: "Frontliner Internships",
      description: "Future leaders and innovators internship program",
      icon: <Rocket className="h-6 w-6" />,
      color: "bg-indigo-500",
      opportunities: ["Startup Incubation Intern", "Innovation Lab Intern", "Leadership Training Intern"]
    }
  ];

  const faqs = [
    {
      question: "What is CAF and how does it help me find internships?",
      answer: "CAF (Common Application Form) is an AI-powered platform where students can apply once and get matched with multiple internship opportunities based on their profile, eliminating the need for individual internship applications."
    },
    {
      question: "Do I need to be a Uniford Scholar to apply for internships?",
      answer: "Yes, you need to apply for a Scholar ID card first to become a Uniford Scholar, which then gives you access to CAF and all internship opportunities."
    },
    {
      question: "Is there any fee for applying for internships through CAF?",
      answer: "No, CAF is completely free for all Uniford Scholars. We believe in removing financial barriers to internship opportunities."
    },
    {
      question: "What if I'm a complete fresher with no internship experience?",
      answer: "No problem! We have special foundational internships and partner with organizations like UNSIP and YLC to provide internship opportunities specifically for freshers."
    },
    {
      question: "How many internships can I apply for at once?",
      answer: "Through CAF, you can apply once and be matched with multiple relevant internship opportunities based on your profile and preferences."
    },
    {
      question: "What internship domains are currently available in Phase 1?",
      answer: "We currently offer internships in Management, Computer Science, Electronics, AI & Automation, Modern Tools, Special programs for 9th-12th students, Frontliner, and various managerial roles."
    },
    {
      question: "How does the AI matching system work for internships?",
      answer: "Our AI analyzes your profile, skills, interests, and career goals to match you with the most suitable internship opportunities from our partner organizations."
    },
    {
      question: "What are the benefits of each internship?",
      answer: "Each internship comes with unique perks including certificates, stipends, mentorship, skill development, networking opportunities, and potential job placements."
    },
    {
      question: "Can I switch between different internship domains?",
      answer: "Yes, you can explore multiple domains and update your preferences. Our system will re-match you with new internship opportunities accordingly."
    },
    {
      question: "How long does the internship matching process take?",
      answer: "Once you submit your application through CAF, our AI system typically provides internship matches within 24-48 hours, and you'll be notified of all suitable opportunities."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-unifor-dark-purple via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute h-64 w-64 rounded-full bg-blue-500 blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 px-6 py-2 mb-6 text-lg">
              INTERNSHIP REVOLUTION
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              CAF - Common Application Form
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 mb-4">
              One Application, Multiple Internship Opportunities
            </p>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Modern AI-based model that connects students with internship opportunities without manual hurdles, 
              eliminating barriers and unlocking internship potential for every scholar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/apply">
                <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 text-lg px-8 py-6">
                  Find Internships Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="bg-red-50 text-red-600 border-red-200 px-4 py-2 mb-4">
              INTERNSHIP CHALLENGES SOLVED
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Breaking Down Barriers to Internship Opportunities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-red-100 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-red-600">Manual Internship Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Students waste time applying one-by-one to different organizations for internships with repetitive forms and processes.</p>
              </CardContent>
            </Card>

            <Card className="border-orange-100 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-orange-600">Internship Barriers & Filters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Conditions, fees, and strict requirements prevent talented students from accessing quality internship opportunities.</p>
              </CardContent>
            </Card>

            <Card className="border-purple-100 shadow-lg">
              <CardHeader>
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-purple-600">Talent Drain in Internships</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Potential talent is lost due to lack of proper platforms and guidance for finding meaningful internships.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 px-4 py-2 mb-4">
              INTERNSHIP CONNECTION SOLUTION
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How CAF Connects You with Internships
            </h2>
            <p className="text-gray-600 text-lg">
              Our AI-powered system revolutionizes how students connect with internship opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Profile Verification</h3>
              <p className="text-gray-600">Students submit their profile and get verified as Uniford Scholars to access internships.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI Internship Matching</h3>
              <p className="text-gray-600">Our AI analyzes profiles and matches students with suitable internship opportunities.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Partner Network</h3>
              <p className="text-gray-600">Connect with internships through our partners like UNSIP, YLC, and more organizations.</p>
            </div>

            <div className="text-center">
              <div className="h-16 w-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant Internship Results</h3>
              <p className="text-gray-600">Get matched with multiple internship opportunities within 24-48 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internship Domains Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-2 mb-4">
              PHASE 1 INTERNSHIP DOMAINS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Available Internship Opportunities
            </h2>
            <p className="text-gray-600 text-lg">
              Explore diverse internship domains with opportunities tailored to your skills and interests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internshipDomains.map((domain, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-l-4" style={{ borderLeftColor: domain.color.replace('bg-', '#') }}>
                <CardHeader>
                  <div className={`h-12 w-12 ${domain.color} rounded-lg flex items-center justify-center text-white mb-4`}>
                    {domain.icon}
                  </div>
                  <CardTitle className="text-xl">{domain.title}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-700">Key Internship Roles:</p>
                    {domain.opportunities.map((opp, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-gray-600">{opp}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Internship Programs */}
      <section className="py-16 bg-gradient-to-r from-unifor-light-purple to-purple-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-unifor-dark-purple">
              Special Internship Programs
            </h2>
            <p className="text-gray-700 text-lg">
              Unique internship opportunities designed to shape future leaders and innovators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-indigo-600">Frontliner Internship Program</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Prepare students for future leadership roles through startup, innovation, and entrepreneurship internships.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="h-4 w-4 text-yellow-500" />
                    <span className="text-sm">Innovation & Startup Internships</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Author & Content Creation Internships</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Leadership Development Internships</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-600">Management Role Internships</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Specialized internships in various management and coordination roles.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">Relation Manager Internship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Business Manager Internship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-orange-500" />
                    <span className="text-sm">Invigilator & Managing Head Internships</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 px-4 py-2 mb-4">
                INTERNSHIP APPLICATION PROCESS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How Students Can Apply for Internships
              </h2>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Check Eligibility</h3>
                  <p className="text-gray-600">Review the eligibility criteria for Uniford Scholar program and ensure you meet the requirements for internships.</p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Apply for Scholar ID</h3>
                  <p className="text-gray-600">Submit your application for Scholar ID card to become an official Uniford Scholar and access internships.</p>
                </div>

                <div className="text-center">
                  <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">Access CAF for Internships</h3>
                  <p className="text-gray-600">Use your Scholar ID to access CAF and get matched with multiple internship opportunities instantly.</p>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link to="/id-card">
                  <Button className="bg-unifor-purple hover:bg-unifor-dark-purple px-8 py-6 text-lg">
                    Apply for Scholar ID <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Commitment to Every Scholar's Internship Journey
            </h2>
            <p className="text-gray-600 text-lg">
              Uniford Foundation is committed to providing internship opportunities to every Uniford Scholar based on their profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-green-50 border-green-200">
              <CardHeader>
                <CheckCircle2 className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle className="text-green-800">For Fresher Interns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-700">Special foundational internship programs and partner opportunities through UNSIP, YLC, and other alliances.</p>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <Target className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle className="text-blue-800">For Beginner Interns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700">Skill development internship programs and mentorship opportunities to build professional competence.</p>
              </CardContent>
            </Card>

            <Card className="bg-purple-50 border-purple-200">
              <CardHeader>
                <Award className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle className="text-purple-800">For Advanced Interns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-purple-700">Leadership internship roles, specialized projects, and opportunities to mentor other scholar interns.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-2 mb-4">
                INTERNSHIP FAQS
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Got Questions About Internships? We've Got Answers
              </h2>
              <p className="text-gray-600 text-lg">
                Everything you need to know about CAF and the internship application process.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 text-unifor-purple shrink-0" />
                      <span className="font-medium">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Internship Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of scholars who have found their perfect internship opportunities through CAF.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/id-card">
                <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 px-8 py-6 text-lg">
                  Get Scholar ID
                </Button>
              </Link>
              <Link to="/apply">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Apply for Internships Through CAF
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CAF;
