import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle, Award, Users, Briefcase, BookOpen, Globe, Star, Download, FileText, Target, Brain, Heart, PenTool, Search, Lightbulb, Rocket, Paperclip } from 'lucide-react';

const UNSIP = () => {
  const [selectedDomain, setSelectedDomain] = useState('problem-solving');

  const themes = [
    {
      id: 'problem-solving',
      icon: <Brain className="h-8 w-8" />,
      title: "Problem Solving & Innovation",
      description: "Tackle real-world challenges with creative solutions",
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 'social-initiative',
      icon: <Heart className="h-8 w-8" />,
      title: "Social Initiative & Awareness",
      description: "Drive social change and community awareness",
      color: "from-pink-500 to-red-600"
    },
    {
      id: 'collaboration',
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration & Open Source",
      description: "Build together through collaborative projects",
      color: "from-green-500 to-teal-600"
    },
    {
      id: 'authorship',
      icon: <PenTool className="h-8 w-8" />,
      title: "Authorship / Public Policy",
      description: "Shape policy and create meaningful content",
      color: "from-orange-500 to-yellow-600"
    }
  ];

  const phases = [
    {
      phase: "1",
      title: "Research & Analyze",
      icon: <Search className="h-6 w-6" />,
      description: "Screen profiles of inspiring individuals, organizations, or movements that align with your chosen domain",
      details: ["Analyze their work, models, and strategies", "Draw inspiration to define your own challenge or idea"]
    },
    {
      phase: "2",
      title: "AI-Powered Creation",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "Use free AI tools to convert your idea into a prototype or plan",
      details: ["Campaign model", "Policy draft", "Product or website wireframe", "Community engagement toolkit"]
    },
    {
      phase: "3",
      title: "Execute the Prototype",
      icon: <Rocket className="h-6 w-6" />,
      description: "Put your plan into action through real-world implementation",
      details: ["Team Meetings & Strategic Collaboration", "Social Campaigns or Awareness Drives", "Public Engagement or Educational Outreach", "Policy Advocacy or Open-Source Contributions"]
    }
  ];

  const handleDownloadResource = (type: string, domain: string) => {
    console.log(`Downloading ${type} for ${domain}...`);
    // Placeholder for actual download functionality
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-700 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.1\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"2\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-2 mb-6 text-lg">
              🌟 FRONTLINER INITIATIVE
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              <span className="text-yellow-300">Frontliner</span><br />
              <span className="bg-gradient-to-r from-pink-300 to-blue-300 bg-clip-text text-transparent">
                Special Initiative
              </span><br />
              <span className="text-white">Internship</span>
            </h1>
            <p className="text-2xl text-white/90 max-w-4xl mx-auto mb-4 font-light">
              Transforming Passion into Real-World Impact
            </p>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-10">
              Do you want to solve real problems, collaborate with changemakers, and build a portfolio of impact?
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-4 text-xl rounded-full shadow-2xl transform hover:scale-105 transition-all">
                🚀 Start Your Journey
              </Button>
              <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-4 text-lg rounded-full">
                📋 Program Guide
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Selection */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🎯 Your Mission: Pick the Card</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Choose ONE theme that resonates most with you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {themes.map((theme) => (
              <Card 
                key={theme.id} 
                className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2 ${
                  selectedDomain === theme.id ? 'border-blue-500 shadow-xl' : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedDomain(theme.id)}
              >
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r ${theme.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {theme.icon}
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-4 leading-tight">{theme.title}</h3>
                  <p className="text-gray-600 flex-grow">{theme.description}</p>
                  {selectedDomain === theme.id && (
                    <Badge className="mt-4 bg-blue-500 text-white">Selected ✓</Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Your Journey Phases</h2>
            <p className="text-xl text-gray-600">Three powerful phases to transform your ideas into impact</p>
          </div>

          <div className="max-w-6xl mx-auto">
            {phases.map((phase, index) => (
              <div key={phase.phase} className="flex flex-col md:flex-row items-center mb-16 last:mb-0">
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-2'}`}>
                  <Card className="border-2 border-gray-100 hover:shadow-xl transition-all">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl">
                          {phase.phase}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800">{phase.title}</h3>
                          <div className="flex items-center text-blue-600 mt-1">
                            {phase.icon}
                            <span className="ml-2 font-medium">Phase {phase.phase}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{phase.description}</p>
                      <div className="space-y-3">
                        {phase.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-gray-600">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className={`md:w-1/2 mt-8 md:mt-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white mb-4">
                      <div className="text-6xl">{phase.icon}</div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-700">Phase {phase.phase}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PBL Sections */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">📚 Problem-Based Learning Resources</h2>
            <p className="text-xl text-gray-600">Domain-wise inspiration, hints, examples, and resources</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* PBL-15 */}
            <Card className="border-2 border-purple-200 hover:shadow-2xl transition-all">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <BookOpen className="h-8 w-8" />
                  PBL-15: Foundation Resources
                </CardTitle>
                <p className="text-purple-100">Essential guides and inspiration for beginners</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="border-purple-300 text-purple-700 hover:bg-purple-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('inspiration-guides', 'pbl-15')}
                    >
                      <Paperclip className="h-4 w-4" />
                      Inspiration Guides
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('examples', 'pbl-15')}
                    >
                      <Paperclip className="h-4 w-4" />
                      Examples
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-green-300 text-green-700 hover:bg-green-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('hints', 'pbl-15')}
                    >
                      <Paperclip className="h-4 w-4" />
                      Project Hints
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-orange-300 text-orange-700 hover:bg-orange-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('faq', 'pbl-15')}
                    >
                      <Paperclip className="h-4 w-4" />
                      FAQ
                    </Button>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">What's Included:</h4>
                    <ul className="text-purple-700 space-y-1 text-sm">
                      <li>• Domain-wise case studies</li>
                      <li>• Step-by-step project templates</li>
                      <li>• Success stories from past participants</li>
                      <li>• Common challenges and solutions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* PBL-18 */}
            <Card className="border-2 border-blue-200 hover:shadow-2xl transition-all">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-teal-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl font-bold flex items-center gap-3">
                  <Target className="h-8 w-8" />
                  PBL-18: Advanced Resources
                </CardTitle>
                <p className="text-blue-100">Advanced tools and methodologies for experienced learners</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      variant="outline" 
                      className="border-blue-300 text-blue-700 hover:bg-blue-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('advanced-frameworks', 'pbl-18')}
                    >
                      <Paperclip className="h-4 w-4" />
                      Frameworks
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-teal-300 text-teal-700 hover:bg-teal-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('research-methods', 'pbl-18')}
                    >
                      <Paperclip className="h-4 w-4" />
                      Research Methods
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-indigo-300 text-indigo-700 hover:bg-indigo-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('implementation-guides', 'pbl-18')}
                    >
                      <Paperclip className="h-4 w-4" />
                      Implementation
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-purple-300 text-purple-700 hover:bg-purple-50 flex items-center gap-2"
                      onClick={() => handleDownloadResource('assessment-rubrics', 'pbl-18')}
                    >
                      <Paperclip className="h-4 w-4" />
                      Assessments
                    </Button>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">What's Included:</h4>
                    <ul className="text-blue-700 space-y-1 text-sm">
                      <li>• Advanced analytical frameworks</li>
                      <li>• Industry partnership guidelines</li>
                      <li>• Impact measurement tools</li>
                      <li>• Scaling and sustainability strategies</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final Submission */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">📩 Final Submission: Show Your Impact</h2>
            <p className="text-xl text-green-100 mb-10 leading-relaxed">
              Document your journey, showcase your prototype, and demonstrate the real-world impact 
              you've created. Your submission becomes part of your professional portfolio and opens 
              doors to incredible opportunities.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Button className="bg-white text-green-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-full shadow-lg">
                📤 Submit Your Project
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
                📋 Submission Guidelines
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Become a Frontliner?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join the movement of young changemakers who are solving real problems and creating lasting impact. 
            Your journey to transform passion into purpose starts here.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <Button className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-bold px-10 py-4 text-xl rounded-full shadow-2xl">
              🚀 Begin Your Journey
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-4 text-lg rounded-full">
              💬 Connect with Mentors
              <Heart className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UNSIP;
