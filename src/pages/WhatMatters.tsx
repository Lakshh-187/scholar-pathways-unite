
import { useState } from "react";
import { 
  BadgeCheck, 
  BookOpen, 
  Brain, 
  Briefcase, 
  ChevronRight, 
  Compass, 
  DollarSign, 
  FileBarChart, 
  GraduationCap, 
  LineChart, 
  Lightbulb, 
  School, 
  Sparkles, 
  Users, 
  X, 
  BarChart3,
  Clock as ClockIcon // Import the Clock icon and rename it to ClockIcon
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const WhatMatters = () => {
  const [openIllusion, setOpenIllusion] = useState<number | null>(null);
  
  const toggleIllusion = (index: number) => {
    setOpenIllusion(openIllusion === index ? null : index);
  };
  
  const illusions = [
    {
      title: "Paid training internships are more valuable",
      reality: "Most valuable internships and resources are actually free. Students pay due to lack of awareness.",
      icon: <DollarSign className="h-6 w-6 text-red-500" />
    },
    {
      title: "Balancing academics and internships is impossible",
      reality: "With proper planning and resource utilization, students can successfully manage both.",
      icon: <BookOpen className="h-6 w-6 text-red-500" />
    },
    {
      title: "Practical experience is only for later years",
      reality: "Starting early with real-world exposure builds stronger foundations and more competitive profiles.",
      icon: <ClockIcon className="h-6 w-6 text-red-500" /> // Use ClockIcon instead of Clock
    },
    {
      title: "Degrees guarantee employment",
      reality: "4 million degree holders are unemployable (not unemployed) because degrees alone don't ensure readiness.",
      icon: <GraduationCap className="h-6 w-6 text-red-500" />
    },
    {
      title: "Top institute graduates always succeed",
      reality: "49% of IITians struggle with placement due to lack of practical skills beyond academics.",
      icon: <School className="h-6 w-6 text-red-500" />
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-unifor-dark to-black text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="bg-unifor-light-purple text-white px-4 py-1 mb-4">
                STUDENT SUCCESS FACTORS
              </Badge>
              <h1 className="hero-text mb-6">What Really <span className="text-unifor-purple">Matters?</span></h1>
              <p className="text-xl text-gray-300 mb-10">
                Understanding the true factors that determine student success in today's rapidly changing world
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <Card className="bg-white/10 border-white/20">
                  <CardHeader className="pb-2">
                    <Briefcase className="h-10 w-10 text-unifor-purple mb-2" />
                    <CardTitle className="text-white">Credible Portfolio</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">What employers and investors truly value in students</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20">
                  <CardHeader className="pb-2">
                    <X className="h-10 w-10 text-red-400 mb-2" />
                    <CardTitle className="text-white">Common Illusions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">Misconceptions that hinder student growth and development</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 border-white/20">
                  <CardHeader className="pb-2">
                    <Lightbulb className="h-10 w-10 text-yellow-400 mb-2" />
                    <CardTitle className="text-white">Uniford Solution</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">How we're bridging the gap between education and opportunity</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Key Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <p className="text-5xl font-bold text-red-500 mb-2">76%</p>
                  <p className="text-gray-700">students never reach the interview stage due to filtering processes</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <p className="text-5xl font-bold text-red-500 mb-2">4M</p>
                  <p className="text-gray-700">degree holders are unemployable despite completing education</p>
                </div>
                
                <div className="bg-white p-8 rounded-xl shadow-md text-center">
                  <p className="text-5xl font-bold text-green-500 mb-2">90%</p>
                  <p className="text-gray-700">success rate for referral-based hiring that bypasses traditional filters</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Credible Portfolio Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  STUDENT SUCCESS
                </Badge>
                <h2 className="section-title">Building a Credible Portfolio</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  According to World Economic Forum reports and industry surveys, these are the factors that truly matter for student success
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-2">
                      <Briefcase className="h-6 w-6 text-unifor-purple" />
                    </div>
                    <CardTitle>Internships</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Real-world experience through quality internships in relevant fields</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-unifor-purple" />
                    </div>
                    <CardTitle>Active Participation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Engagement in competitions, hackathons, and collaborative projects</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-2">
                      <Lightbulb className="h-6 w-6 text-unifor-purple" />
                    </div>
                    <CardTitle>Personal Initiatives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Self-driven projects and ventures showcasing motivation and creativity</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-2">
                      <Brain className="h-6 w-6 text-unifor-purple" />
                    </div>
                    <CardTitle>Problem-Solving Projects</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Demonstrated ability to identify and solve real-world challenges</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-2">
                      <Users className="h-6 w-6 text-unifor-purple" />
                    </div>
                    <CardTitle>Collaborative Work</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Experience working in teams on projects that demonstrate soft skills</p>
                  </CardContent>
                </Card>
                
                <Card className="hover:shadow-lg transition-all">
                  <CardHeader className="pb-2">
                    <div className="h-12 w-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-2">
                      <FileBarChart className="h-6 w-6 text-unifor-purple" />
                    </div>
                    <CardTitle>Quantifiable Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Concrete achievements and metrics that demonstrate impact</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-unifor-light-purple p-8 rounded-xl mt-12">
                <p className="text-unifor-dark-purple text-lg font-medium text-center">
                  Students should aim to complete 5-8 substantial problem-solving projects through internships, project expositions, competitions, and other platforms to build competitive profiles.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Common Illusions Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  MISCONCEPTIONS
                </Badge>
                <h2 className="section-title">Common Illusions Among Students</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Many students operate under misconceptions that limit their potential and growth
                </p>
              </div>
              
              <div className="space-y-4">
                {illusions.map((illusion, index) => (
                  <Collapsible 
                    key={index} 
                    open={openIllusion === index} 
                    onOpenChange={() => toggleIllusion(index)}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <CollapsibleTrigger className="w-full">
                      <div className={`flex items-center justify-between p-6 hover:bg-gray-100 transition-all cursor-pointer ${openIllusion === index ? 'bg-gray-100' : 'bg-white'}`}>
                        <div className="flex items-center gap-4">
                          {illusion.icon}
                          <h3 className="text-xl font-medium">{illusion.title}</h3>
                        </div>
                        <ChevronRight className={`h-5 w-5 transition-transform duration-200 ${openIllusion === index ? 'rotate-90' : ''}`} />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="p-6 pt-0 bg-white">
                        <p className="text-gray-600">{illusion.reality}</p>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-red-500" />
                      Market Reality
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>AI & automation are rapidly changing the job market requirements</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Outdated curricula are creating a widening skills gap</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                      <span>Traditional filtering processes (DSA, aptitude tests) eliminate 76% of candidates before interviews</span>
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-green-50 border-green-200">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BadgeCheck className="h-5 w-5 text-green-600" />
                      Emerging Solutions
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="flex items-start gap-2">
                      <BadgeCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Referral-based hiring has a 90% success rate compared to traditional methods</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <BadgeCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Project-based assessment provides more accurate evaluation of capabilities</span>
                    </p>
                    <p className="flex items-start gap-2">
                      <BadgeCheck className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Platforms that connect students directly to opportunities based on demonstrated skills</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Model Comparison Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  EDUCATION MODELS
                </Badge>
                <h2 className="section-title">Traditional vs. Uniford Model</h2>
                <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                  Compare the different approaches to education and student development
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[250px]">Aspect</TableHead>
                      <TableHead className="text-center">Traditional Model</TableHead>
                      <TableHead className="text-center">Uniford Model</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Focus</TableCell>
                      <TableCell className="bg-gray-50">Theoretical knowledge, grades, exams</TableCell>
                      <TableCell className="bg-unifor-light-purple/20">Practical skills, real-world projects, exposure</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Opportunities</TableCell>
                      <TableCell className="bg-gray-50">Limited by institute reputation, location</TableCell>
                      <TableCell className="bg-unifor-light-purple/20">AI-matched based on skills, not institution</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Application Process</TableCell>
                      <TableCell className="bg-gray-50">Separate applications for each opportunity</TableCell>
                      <TableCell className="bg-unifor-light-purple/20">Common Application Form (CAF) for multiple opportunities</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Selection Criteria</TableCell>
                      <TableCell className="bg-gray-50">DSA, aptitude tests, CGPA filters</TableCell>
                      <TableCell className="bg-unifor-light-purple/20">Practical skills, projects, demonstrated abilities</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Support System</TableCell>
                      <TableCell className="bg-gray-50">Generic career services, limited exposure</TableCell>
                      <TableCell className="bg-unifor-light-purple/20">Talent Hunt Alliance, AI profile screening, referrals</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Success Metrics</TableCell>
                      <TableCell className="bg-gray-50">Academic performance, placement statistics</TableCell>
                      <TableCell className="bg-unifor-light-purple/20">Portfolio quality, practical capabilities, industry readiness</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </section>
        
        {/* The Uniford Solution Section */}
        <section className="py-20 bg-unifor-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <Badge variant="outline" className="bg-unifor-light-purple text-white px-4 py-1 mb-4">
                  THE SOLUTION
                </Badge>
                <h2 className="section-title">How Uniford Addresses These Challenges</h2>
                <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                  Uniford's innovative RPO (Resources, Platform, Opportunities) model creates a comprehensive ecosystem for student success
                </p>
              </div>
              
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid grid-cols-4 mb-8">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="caf">CAF System</TabsTrigger>
                  <TabsTrigger value="alliance">Talent Hunt Alliance</TabsTrigger>
                  <TabsTrigger value="platforms">Platforms</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="animate-fade-in">
                  <Card className="bg-white/10 border-white/20">
                    <CardHeader>
                      <CardTitle>The RPO Model</CardTitle>
                      <CardDescription className="text-gray-300">
                        A comprehensive approach to student development and success
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-unifor-purple/30 flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-5 w-5 text-unifor-purple" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2">Resources to Learn</h3>
                          <p className="text-gray-300">
                            Access to quality learning materials, mentorship, and guidance to develop relevant skills
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-unifor-purple/30 flex items-center justify-center flex-shrink-0">
                          <Compass className="h-5 w-5 text-unifor-purple" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2">Platform to Perform</h3>
                          <p className="text-gray-300">
                            Opportunities for internships, projects, competitions, and real-world application of skills
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="h-10 w-10 rounded-full bg-unifor-purple/30 flex items-center justify-center flex-shrink-0">
                          <Sparkles className="h-5 w-5 text-unifor-purple" />
                        </div>
                        <div>
                          <h3 className="text-xl font-medium mb-2">Opportunities for Growth</h3>
                          <p className="text-gray-300">
                            Connection with real opportunities through AI profile screening and the Talent Hunt Alliance
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="caf" className="animate-fade-in">
                  <Card className="bg-white/10 border-white/20">
                    <CardHeader>
                      <CardTitle>Common Application Form (CAF)</CardTitle>
                      <CardDescription className="text-gray-300">
                        Streamlining the application process for multiple opportunities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        The CAF system allows students to fill out a single comprehensive form that connects them to multiple opportunities, eliminating the need to apply separately for each one.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                        <div className="bg-white/5 p-6 rounded-lg">
                          <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                            <X className="h-5 w-5 text-red-400" />
                            Traditional Process
                          </h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span>Fill out repetitive forms for each opportunity</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span>High rejection rates due to preliminary filters</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
                              <span>Limited visibility of opportunities</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-unifor-purple/20 p-6 rounded-lg">
                          <h4 className="text-lg font-medium mb-3 flex items-center gap-2">
                            <BadgeCheck className="h-5 w-5 text-green-400" />
                            CAF System
                          </h4>
                          <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-unifor-purple mt-0.5 flex-shrink-0" />
                              <span>One comprehensive form for multiple opportunities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-unifor-purple mt-0.5 flex-shrink-0" />
                              <span>AI-powered matching based on skills and interests</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <ChevronRight className="h-5 w-5 text-unifor-purple mt-0.5 flex-shrink-0" />
                              <span>Access to a wider range of relevant opportunities</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="alliance" className="animate-fade-in">
                  <Card className="bg-white/10 border-white/20">
                    <CardHeader>
                      <CardTitle>Talent Hunt Alliance</CardTitle>
                      <CardDescription className="text-gray-300">
                        A network connecting worthy students with real opportunities
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        The Talent Hunt Alliance is a network of companies, organizations, and institutions that connect with students based on their practical skills and demonstrated abilities.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <Card className="bg-white/5 border-white/10">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Brain className="h-5 w-5 text-unifor-purple" />
                              AI Profile Screening
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">
                              Advanced AI analyzes student profiles and matches them with suitable opportunities
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-white/5 border-white/10">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <Users className="h-5 w-5 text-unifor-purple" />
                              Referral System
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">
                              Direct referrals to companies and opportunities, bypassing traditional filters
                            </p>
                          </CardContent>
                        </Card>
                        
                        <Card className="bg-white/5 border-white/10">
                          <CardHeader className="pb-2">
                            <CardTitle className="text-lg flex items-center gap-2">
                              <LineChart className="h-5 w-5 text-unifor-purple" />
                              Skill-Based Matching
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-300">
                              Opportunities based on demonstrated skills rather than traditional credentials
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="platforms" className="animate-fade-in">
                  <Card className="bg-white/10 border-white/20">
                    <CardHeader>
                      <CardTitle>Platforms for Practical Exposure</CardTitle>
                      <CardDescription className="text-gray-300">
                        Environments for students to demonstrate and develop their skills
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white/5 p-6 rounded-lg">
                          <h4 className="text-lg font-medium mb-3">Guaranteed Internships</h4>
                          <p className="text-gray-300 mb-3">
                            Access to quality internships without the typical barriers of selection
                          </p>
                          <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-purple/20">
                            Learn More
                          </Button>
                        </div>
                        
                        <div className="bg-white/5 p-6 rounded-lg">
                          <h4 className="text-lg font-medium mb-3">Project Expo</h4>
                          <p className="text-gray-300 mb-3">
                            Showcase projects to industry partners and potential employers
                          </p>
                          <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-purple/20">
                            Learn More
                          </Button>
                        </div>
                        
                        <div className="bg-white/5 p-6 rounded-lg">
                          <h4 className="text-lg font-medium mb-3">Uni-Pitch</h4>
                          <p className="text-gray-300 mb-3">
                            Platform for students to pitch their achievements and capabilities
                          </p>
                          <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-purple/20">
                            Learn More
                          </Button>
                        </div>
                        
                        <div className="bg-white/5 p-6 rounded-lg">
                          <h4 className="text-lg font-medium mb-3">Competitions & Challenges</h4>
                          <p className="text-gray-300 mb-3">
                            Participate in industry-relevant challenges and competitions
                          </p>
                          <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-purple/20">
                            Learn More
                          </Button>
                        </div>
                      </div>
                      
                      <div className="bg-unifor-purple/20 p-6 rounded-lg mt-6">
                        <p className="text-white text-center">
                          All platforms are accessible to Uniford Scholars through their ID card with no additional fees or barriers
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-unifor-dark-purple to-unifor-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build What Really Matters?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Join Uniford Scholar and start building a portfolio that truly matters in today's competitive environment.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-white text-unifor-dark-purple hover:bg-gray-100">
                  Apply for Scholar ID
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Explore Programs
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WhatMatters;
