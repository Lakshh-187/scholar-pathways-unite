
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  AlertTriangle, 
  Brain, 
  School, 
  DollarSign, 
  Users, 
  TrendingUp, 
  GraduationCap, 
  Building2, 
  LineChart, 
  Target, 
  ClipboardCheck,
  ArrowRight,
  BookOpen,
  Award,
  BarChart3,
  Clock,
  Network
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const StudentProblems = () => {
  const [activeTab, setActiveTab] = useState("problems");
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const problems = [
    {
      id: "fees",
      icon: <DollarSign className="h-6 w-6 text-red-500" />,
      title: "High Fees Barrier",
      description: "Students pay 5k-70k for internships and short programs",
      impact: "78% students never participate due to financial barriers",
      color: "bg-red-50 border-red-100"
    },
    {
      id: "potential",
      icon: <Brain className="h-6 w-6 text-orange-500" />,
      title: "Potential Drain",
      description: "Skilled students blocked by traditional filters like DSA and aptitude tests",
      impact: "Limited interview opportunities despite practical skills",
      color: "bg-orange-50 border-orange-100"
    },
    {
      id: "brain-drain",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
      title: "Brain Drain",
      description: "Deserving students miss opportunities due to lack of network and referrals",
      impact: "Talented students remain undiscovered and underemployed",
      color: "bg-yellow-50 border-yellow-100"
    },
    {
      id: "regional",
      icon: <Building2 className="h-6 w-6 text-green-500" />,
      title: "Regional Limitations",
      description: "90% students in regional institutes lack exposure to global standards",
      impact: "Academic focus without practical international exposure",
      color: "bg-green-50 border-green-100"
    },
    {
      id: "potential-waste",
      icon: <AlertTriangle className="h-6 w-6 text-purple-500" />,
      title: "Untapped Potential",
      description: "87% students with high potential lack platforms to showcase skills",
      impact: "Leads to underemployment and credibility issues",
      color: "bg-purple-50 border-purple-100"
    },
    {
      id: "curriculum-gap",
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "Outdated Curriculum",
      description: "AI revolution has changed job market demands",
      impact: "Students prepare with outdated methods irrelevant to future",
      color: "bg-blue-50 border-blue-100"
    }
  ];

  const solutions = [
    {
      id: "structure",
      icon: <LineChart className="h-6 w-6 text-blue-500" />,
      title: "Structured System",
      description: "Organizing resources, mentorship, and opportunities into one integrated ecosystem",
      details: "We provide a complete system where scholars can learn, perform, and connect with career opportunities based on profile screening.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      id: "caf",
      icon: <ClipboardCheck className="h-6 w-6 text-green-500" />,
      title: "Common Application Form (CAF)",
      description: "One form for multiple opportunities - eliminating repetitive applications",
      details: "Scholars fill out a single comprehensive form that connects them to multiple opportunities, saving time and reducing application fatigue.",
      color: "bg-green-50 border-green-100"
    },
    {
      id: "tha",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Talent Hunt Alliance (THA)",
      description: "Network of companies and organizations seeking qualified talent",
      details: "Our alliance of partner organizations provides internships, project opportunities, and placements based on scholar profile screening and recommendations.",
      color: "bg-purple-50 border-purple-100"
    },
    {
      id: "platforms",
      icon: <Network className="h-6 w-6 text-orange-500" />,
      title: "Performance Platforms",
      description: "Venues to showcase skills, projects and achievements",
      details: "From Uni-Pitch to project expos, competitions, and cohorts - we provide multiple platforms for scholars to demonstrate their abilities.",
      color: "bg-orange-50 border-orange-100"
    }
  ];

  const goals = [
    {
      icon: <Target className="h-6 w-6 text-red-500" />,
      title: "80% Top Placements",
      description: "Scholar placement in leading companies",
      details: "By 2026, we aim to have 80% of our scholars placed in top-tier companies and organizations worldwide.",
      color: "bg-red-50 border-red-100"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
      title: "International Standards",
      description: "Every scholar matches global benchmarks",
      details: "Ensuring all Uniford scholars meet or exceed international standards in their respective fields through proper guidance and exposure.",
      color: "bg-blue-50 border-blue-100"
    },
    {
      icon: <School className="h-6 w-6 text-green-500" />,
      title: "Uni-pitch Integration",
      description: "70% institutes implementing Uni-pitch model",
      details: "Our goal is to have 70% of educational institutes across the country integrate the Uni-pitch model to transform education.",
      color: "bg-green-50 border-green-100"
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-purple-500" />,
      title: "Zero Financial Barriers",
      description: "Eliminate fees as obstacle to opportunity",
      details: "Creating a system where financial constraints no longer prevent deserving students from accessing quality opportunities.",
      color: "bg-purple-50 border-purple-100"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-unifor-light-purple/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            Problem we Solved
          </Badge>
          <h2 className="section-title">Uniford Scholar ID card Solved ...</h2>
          <p className="text-gray-600 text-lg">
            Understanding the challenges in education and how Uniford Foundation is addressing them through systematic innovation.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Tabs 
            defaultValue="problems" 
            className="space-y-10"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-3 p-2 bg-unifor-light-purple/20 rounded-xl">
              <TabsTrigger 
                value="problems"
                className="text-sm md:text-base py-3 data-[state=active]:bg-white data-[state=active]:text-unifor-dark-purple"
              >
                Uniford Solved using Id Card
              </TabsTrigger>
              <TabsTrigger 
                value="solutions"
                className="text-sm md:text-base py-3 data-[state=active]:bg-white data-[state=active]:text-unifor-dark-purple"
              >
                Our Model
              </TabsTrigger>
              <TabsTrigger 
                value="goals"
                className="text-sm md:text-base py-3 data-[state=active]:bg-white data-[state=active]:text-unifor-dark-purple"
              >
                2026 Goals
              </TabsTrigger>
            </TabsList>

            <TabsContent value="problems" className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {problems.map((problem) => (
                  <motion.div key={problem.id} variants={fadeInUp}>
                    <Card className={`hover:shadow-lg transition-shadow border-2 ${problem.color}`}>
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="bg-white p-2 rounded-lg shadow">
                          {problem.icon}
                        </div>
                        <CardTitle className="text-lg">{problem.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-3">{problem.description}</p>
                        <div className="flex items-center gap-2 text-unifor-purple">
                          <AlertTriangle className="h-4 w-4" />
                          <p className="text-sm font-medium">{problem.impact}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="text-center mt-8">
                <Button 
                  onClick={() => setActiveTab("solutions")} 
                  className="bg-unifor-purple hover:bg-unifor-dark-purple"
                >
                  See How We Solve These <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-8">
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {solutions.map((solution) => (
                  <motion.div key={solution.id} variants={fadeInUp}>
                    <Card className={`hover:shadow-lg transition-shadow border-2 h-full ${solution.color}`}>
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="bg-white p-2 rounded-lg shadow">
                          {solution.icon}
                        </div>
                        <CardTitle className="text-lg">{solution.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 font-medium mb-3">{solution.description}</p>
                        <p className="text-gray-600 text-sm">{solution.details}</p>
                        
                        {solution.id === 'tha' && (
                          <Link to="/talent-hunt-alliance">
                            <Badge variant="outline" className="mt-4 bg-unifor-light-purple/10 text-unifor-dark-purple hover:bg-unifor-light-purple/30 cursor-pointer transition-colors inline-flex items-center">
                              Learn more about THA <ArrowRight className="ml-1 h-3 w-3" />
                            </Badge>
                          </Link>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="p-6 bg-unifor-light-purple/10 rounded-xl border border-unifor-light-purple/30">
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <div className="bg-white p-3 rounded-full">
                    <Award className="h-8 w-8 text-unifor-purple" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-lg font-semibold mb-1">Zero-Fee Access to Opportunities</h3>
                    <p className="text-gray-600">
                      Unlike traditional systems charging 5k-70k per opportunity, all Uniford Scholar opportunities come with zero application or participation fees.
                    </p>
                  </div>
                  <Link to="/id-card">
                    <Button className="bg-unifor-purple hover:bg-unifor-dark-purple whitespace-nowrap">
                      Apply for Scholar ID
                    </Button>
                  </Link>
                </div>
              </div>
              
              <div className="text-center">
                <Button 
                  onClick={() => setActiveTab("goals")} 
                  className="bg-unifor-purple hover:bg-unifor-dark-purple"
                >
                  Our Vision for 2026 <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-6">
              <motion.div 
                className="grid md:grid-cols-2 gap-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {goals.map((goal, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className={`hover:shadow-lg transition-shadow border-2 h-full ${goal.color}`}>
                      <CardHeader className="flex flex-row items-center gap-4 pb-2">
                        <div className="bg-white p-2 rounded-lg shadow">
                          {goal.icon}
                        </div>
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 font-medium mb-3">{goal.description}</p>
                        <p className="text-gray-600 text-sm">{goal.details}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
              
              <div className="bg-gradient-to-r from-unifor-dark-purple to-unifor-dark text-white p-8 rounded-xl shadow-xl">
                <div className="text-center max-w-3xl mx-auto">
                  <BookOpen className="h-12 w-12 mx-auto mb-4 text-unifor-light-purple" />
                  <h3 className="text-2xl font-bold mb-3">Join the Educational Revolution</h3>
                  <p className="text-gray-200 mb-6">
                    We're creating a new paradigm in education where practical skills, real-world exposure, and merit-based opportunities are accessible to all students.
                  </p>
                  <Link to="/id-card">
                    <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100">
                      Apply for Scholar ID
                    </Button>
                  </Link>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StudentProblems;
