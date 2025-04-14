
import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { UIRADIntro } from '@/components/UIRADIntro';
import { UIRADInterrelation } from '@/components/UIRADInterrelation';
import { UIRADImpact } from '@/components/UIRADImpact';
import { UIRADTransformation } from '@/components/UIRADTransformation';
import UIRADParentsProfile from '@/components/UIRADParentsProfile';
import { Book, Globe, Layers, Database, Award, Rocket, School, Check, ArrowRight, Building, BookOpen, GraduationCap, Network } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Network as NetworkIcon } from '@/components/ui/network-icon';

const UIRAD = () => {
  const [activeTab, setActiveTab] = useState('intro');
  
  const tabs = [
    { id: 'intro', label: 'Introduction', icon: <Book className="h-4 w-4" /> },
    { id: 'interrelation', label: 'Interrelation', icon: <Network className="h-4 w-4" /> },
    { id: 'impact', label: 'Impact', icon: <Rocket className="h-4 w-4" /> },
  ];
  
  const successStories = [
    {
      institute: "University of Excellence",
      title: "From Regional to International Recognition",
      description: "Implemented UIRAD's comprehensive framework and saw a 40% increase in international student applications and research collaborations within just 18 months.",
      results: ["Ranked in top 500 global universities", "Established 12 new research partnerships", "40% increase in international applications"],
      color: "from-green-500 to-emerald-700"
    },
    {
      institute: "Technology Institute of Innovation",
      title: "Transforming Student Outcomes & Industry Relations",
      description: "UIRAD helped restructure curriculum and establish industry connections, leading to better placements and research opportunities.",
      results: ["93% placement rate (up from 78%)", "26 new industry partners", "14 patents filed by students"],
      color: "from-blue-500 to-indigo-700"
    },
    {
      institute: "Global Arts College",
      title: "Creating an International Arts Ecosystem",
      description: "Used UIRAD to establish global exchange programs and integrate international curriculum modules.",
      results: ["Student exchange programs with 9 countries", "International faculty workshops", "Global arts festivals with participation from 28 countries"],
      color: "from-purple-500 to-violet-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      <section className="py-16 px-4 bg-gradient-to-br from-unifor-dark to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
          <div className="absolute h-80 w-80 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              UIRAD
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              <span className="font-bold">Uniford</span> International Research & Academic Development
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Research-driven academic innovation hub that <span className="font-bold">transforms</span> institutes to <span className="font-bold">international standards</span>, 
              empowering students through <span className="font-bold">free opportunities</span>.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                Partner With UIRAD
                <Building className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Key Stats */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl max-w-4xl mx-auto mb-10 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Transforming Education Globally</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">50+</p>
                <p className="text-gray-300">Partner Institutes</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">18</p>
                <p className="text-gray-300">Countries</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">25k+</p>
                <p className="text-gray-300">Students Impacted</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">120+</p>
                <p className="text-gray-300">Research Publications</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto max-w-6xl px-4 py-10">
        {/* New IEP-X Transformation Section */}
        <UIRADTransformation />
        
        {/* Uniford as Parents Profile Section */}
        <UIRADParentsProfile />
        
        {/* Navigation Tabs */}
        <div className="flex overflow-x-auto space-x-1 bg-gray-100 rounded-lg p-1 mb-10 max-w-2xl mx-auto">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md whitespace-nowrap flex-1 transition-all ${
                activeTab === tab.id 
                  ? 'bg-white shadow-md text-unifor-dark-purple' 
                  : 'hover:bg-white/50 text-gray-600'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>
        
        {/* Content Sections */}
        <div className="transition-opacity duration-300">
          {activeTab === 'intro' && <UIRADIntro />}
          {activeTab === 'interrelation' && <UIRADInterrelation />}
          {activeTab === 'impact' && <UIRADImpact />}
        </div>
        
        {/* Success Stories */}
        <div className="my-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-3 bg-gradient-to-r ${story.color}`}></div>
                <CardContent className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{story.institute}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  <div className="border-t border-gray-100 pt-4">
                    <h4 className="font-medium text-unifor-dark-purple mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {story.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <Check className="h-4 w-4 text-green-500 mr-2 mt-1" />
                          <span className="text-gray-700 text-sm">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="my-20 bg-gradient-to-r from-unifor-dark-purple to-unifor-purple rounded-xl overflow-hidden shadow-xl">
          <div className="p-10 md:p-16 text-center text-white">
            <NetworkIcon size={56} animated={true} className="mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Institute?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join leading educational institutions worldwide in embracing the future of education with 
              <span className="font-bold"> Uniford Foundation</span>, a <span className="font-bold">non-profit organization</span> committed to
              <span className="font-bold"> transformation</span>.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300">
                Download Brochure
                <Book className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="my-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">What Academic Leaders Say</h2>
          <div className="relative bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-100">
            <div className="absolute -top-5 -left-5">
              <div className="text-6xl text-unifor-purple opacity-30">"</div>
            </div>
            <div className="text-center">
              <p className="text-xl text-gray-700 italic mb-6">
                <span className="font-bold text-unifor-dark-purple">UIRAD</span> has completely transformed how we approach 
                <span className="font-bold text-unifor-dark-purple"> international standards</span> and student development. The systematic approach to academic 
                enhancement coupled with the focus on <span className="font-bold text-unifor-dark-purple">global opportunities</span> has put our institution on the world map.
              </p>
              <div className="inline-flex items-center">
                <div className="w-12 h-12 bg-unifor-light-purple text-unifor-dark-purple rounded-full flex items-center justify-center font-bold text-xl mr-3">                  
                  LT
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-800">Lavish Tomar</div>
                  <div className="text-gray-500">Director, CIA Delhi Road</div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default UIRAD;
