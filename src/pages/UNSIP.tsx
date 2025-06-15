
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Award, Users, Briefcase, BookOpen, Globe, Star, Download, FileText, Target } from 'lucide-react';

const UNSIP = () => {
  const [selectedDomain, setSelectedDomain] = useState('campus-to-corporate');

  const benefits = [
    {
      icon: <Award className="h-6 w-6 text-yellow-500" />,
      title: "UNSR Verified Certificates",
      description: "Get internationally recognized certificates for your achievements"
    },
    {
      icon: <Star className="h-6 w-6 text-purple-500" />,
      title: "Best Performer Goodies",
      description: "Top performers receive exclusive rewards and recognition"
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Career Opportunities via THA",
      description: "Access more career opportunities through Talent Hunt Alliance"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-green-500" />,
      title: "Referrals & Recommendations",
      description: "Get referrals for paid internships, scholarships using CAF"
    },
    {
      icon: <Globe className="h-6 w-6 text-red-500" />,
      title: "Talent Expo Opportunities",
      description: "Opens doors for internships & career opportunities"
    }
  ];

  const campusToCorporateTasks = [
    {
      id: 1,
      title: "Professional Resume & Portfolio Development",
      type: "Mandatory",
      description: "Create a comprehensive resume and professional portfolio showcasing your skills",
      guidelines: "Follow WEF standards for professional documentation"
    },
    {
      id: 2,
      title: "Industry Research & Market Analysis",
      type: "Optional",
      description: "Conduct research on your target industry and market trends",
      guidelines: "Minimum 2000 words with proper citations"
    },
    {
      id: 3,
      title: "Digital Marketing Campaign",
      type: "Optional",
      description: "Design and execute a digital marketing strategy for a product/service",
      guidelines: "Include analytics and performance metrics"
    },
    {
      id: 4,
      title: "Business Process Optimization",
      type: "Optional",
      description: "Identify and propose solutions for business process improvements",
      guidelines: "Use lean methodology and provide implementation plan"
    },
    {
      id: 5,
      title: "Leadership Case Study",
      type: "Optional",
      description: "Analyze successful leadership strategies and their implementation",
      guidelines: "Focus on 'What Matters' principles in leadership"
    },
    {
      id: 6,
      title: "Innovation Project Proposal",
      type: "Optional",
      description: "Develop a comprehensive proposal for an innovative solution",
      guidelines: "Address real-world problems with feasible solutions"
    }
  ];

  const frontlinersTasks = [
    {
      id: 1,
      title: "Community Impact Assessment",
      type: "Mandatory",
      description: "Assess and document community needs and propose intervention strategies",
      guidelines: "Follow WEF community development framework"
    },
    {
      id: 2,
      title: "Healthcare Access Initiative",
      type: "Optional",
      description: "Design a program to improve healthcare accessibility in underserved areas",
      guidelines: "Include stakeholder mapping and resource allocation"
    },
    {
      id: 3,
      title: "Educational Outreach Program",
      type: "Optional",
      description: "Develop and implement an educational program for community members",
      guidelines: "Measure impact through pre and post assessments"
    },
    {
      id: 4,
      title: "Emergency Response Plan",
      type: "Optional",
      description: "Create comprehensive emergency response strategies for communities",
      guidelines: "Include risk assessment and resource mobilization"
    },
    {
      id: 5,
      title: "Social Innovation Project",
      type: "Optional",
      description: "Design innovative solutions for social challenges",
      guidelines: "Focus on sustainability and scalability"
    },
    {
      id: 6,
      title: "Policy Research & Advocacy",
      type: "Optional",
      description: "Research policy gaps and propose advocacy strategies",
      guidelines: "Include stakeholder analysis and implementation roadmap"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-unifor-purple via-unifor-dark-purple to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-1 mb-4">
              UNSIP PROGRAM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-yellow-300">Uniford</span> Special <br />
              <span className="text-unifor-blue">Internship</span> Program
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
              Designed as per <span className="font-bold text-yellow-300">World Economic Forum</span> standards 
              and <span className="font-bold text-unifor-blue">"What Matters"</span> principles for comprehensive skill development
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg">
                Start Your Journey
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                Download Guidelines
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Complete Roadmap</h2>
            <p className="text-lg text-gray-600">From Application to Certification</p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Application", desc: "Submit your application" },
              { step: "2", title: "Domain Selection", desc: "Choose your specialization" },
              { step: "3", title: "Task Selection", desc: "Pick your tasks (1 mandatory + others)" },
              { step: "4", title: "Submission", desc: "Complete and submit your work" },
              { step: "5", title: "Certification", desc: "Receive UNSR verified certificate" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 rounded-full bg-unifor-purple text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Selection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Domain</h2>
            <p className="text-lg text-gray-600">Select the path that aligns with your career goals</p>
          </div>

          <Tabs value={selectedDomain} onValueChange={setSelectedDomain} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8">
              <TabsTrigger value="campus-to-corporate">Campus to Corporate</TabsTrigger>
              <TabsTrigger value="frontliners">Frontliners</TabsTrigger>
            </TabsList>

            <TabsContent value="campus-to-corporate">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-unifor-purple" />
                    Campus to Corporate Track
                  </CardTitle>
                  <p className="text-gray-600">Prepare for corporate careers with industry-relevant skills</p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {campusToCorporateTasks.map((task) => (
                      <Card key={task.id} className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-800">{task.title}</h3>
                            <Badge variant={task.type === 'Mandatory' ? 'destructive' : 'secondary'}>
                              {task.type}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{task.description}</p>
                          <p className="text-sm text-unifor-purple font-medium">{task.guidelines}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="frontliners">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-6 w-6 text-unifor-blue" />
                    Frontliners Track
                  </CardTitle>
                  <p className="text-gray-600">Focus on community impact and social innovation</p>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    {frontlinersTasks.map((task) => (
                      <Card key={task.id} className="border border-gray-200">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-800">{task.title}</h3>
                            <Badge variant={task.type === 'Mandatory' ? 'destructive' : 'secondary'}>
                              {task.type}
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-2">{task.description}</p>
                          <p className="text-sm text-unifor-blue font-medium">{task.guidelines}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Submission Guidelines */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Submission Guidelines</h2>
            <p className="text-lg text-gray-600">Follow these guidelines for successful submission</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-unifor-purple mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Documentation</h3>
                <p className="text-gray-600">All submissions must be well-documented with proper citations and references</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-unifor-blue mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quality Standards</h3>
                <p className="text-gray-600">Meet WEF quality standards and "What Matters" principles in all deliverables</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Originality</h3>
                <p className="text-gray-600">All work must be original with proper attribution to sources and collaborators</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 bg-gradient-to-r from-unifor-light-purple to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits & Perks</h2>
            <p className="text-lg text-gray-600">What you gain from UNSIP participation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-unifor-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your UNSIP Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have transformed their careers through our comprehensive internship program
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 text-lg">
              Apply Now
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              Download Program Guide
              <Download className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UNSIP;
