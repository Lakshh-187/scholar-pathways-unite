
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Building, CreditCard, Lightbulb, Rocket, Trophy, Users } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ScholarJourney from "@/components/ScholarJourney";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Opportunity from "@/components/Opportunity";
import TalentHuntAlliance from "@/components/TalentHuntAlliance";
import WhatMattersPreview from "@/components/WhatMattersPreview";

const Index = () => {
  const opportunities = [
    {
      title: "Internships & Jobs",
      description: "Access top-tier internships and job opportunities with partner companies.",
      icon: <Briefcase className="h-8 w-8 text-unifor-purple" />,
    },
    {
      title: "Scholarships & Grants",
      description: "Get financial support for education through merit-based scholarships.",
      icon: <Trophy className="h-8 w-8 text-unifor-purple" />,
    },
    {
      title: "Media Features",
      description: "Get featured in publications and media for your achievements.",
      icon: <Building className="h-8 w-8 text-unifor-purple" />,
    },
    {
      title: "Networking Events",
      description: "Join exclusive networking events with industry leaders.",
      icon: <Users className="h-8 w-8 text-unifor-purple" />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        
        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  ABOUT UNIFOR SCHOLAR
                </Badge>
                <h2 className="section-title">Transforming Education Through Practical Exposure</h2>
                <p className="text-gray-600 mb-6">
                  Unifor Scholar addresses the critical problems of brain drain and potential drain by providing a comprehensive ecosystem that nurtures talent through practical exposure.
                </p>
                <p className="text-gray-600 mb-6">
                  We believe in the power of practical skills over traditional filters like DSA and aptitude tests. Our platform enables students to showcase their real capabilities and connect with opportunities aligned with their strengths.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                      <Rocket className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Resources to Learn</h3>
                      <p className="text-sm text-gray-600">Curated learning materials and mentorship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                      <Lightbulb className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Platform to Perform</h3>
                      <p className="text-sm text-gray-600">Showcase skills through real projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                      <Building className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Talent Hunt Alliance</h3>
                      <p className="text-sm text-gray-600">Network of companies and organizations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Zero-Fee Access</h3>
                      <p className="text-sm text-gray-600">No fees for applications or screening</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="aspect-square max-w-md mx-auto relative">
                  <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-unifor-purple/20 rounded-2xl"></div>
                  <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-unifor-blue/20 rounded-2xl"></div>
                  <div className="absolute inset-0 m-auto w-5/6 h-5/6 glass-card bg-white flex items-center justify-center p-6">
                    <img src="https://via.placeholder.com/400x400" alt="Students collaborating" className="rounded-xl" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <ScholarJourney />
        
        {/* What Matters Section */}
        <WhatMattersPreview />
        
        {/* Talent Hunt Alliance Section */}
        <TalentHuntAlliance />
        
        {/* Opportunities Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                OPPORTUNITIES
              </Badge>
              <h2 className="section-title">What You Can Access</h2>
              <p className="text-gray-600 text-lg">
                Through the Talent Hunt Alliance network, qualified scholars gain access to a variety of opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {opportunities.map((opportunity, index) => (
                <Opportunity 
                  key={index}
                  title={opportunity.title}
                  description={opportunity.description}
                  icon={opportunity.icon}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/programs">
                <Button size="lg" className="primary-btn">
                  Explore All Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-unifor-dark-purple to-unifor-dark text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Scholar Journey?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Apply for your ID card today and begin your path to success with Unifor Scholar.
              </p>
              <Button size="lg" className="bg-white text-unifor-dark-purple hover:bg-gray-100">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
