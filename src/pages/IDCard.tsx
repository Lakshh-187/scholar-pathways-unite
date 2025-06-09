import React from 'react';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScholarIDFeatures from "@/components/ScholarIDFeatures";
import IDCardBenefits from "@/components/IDCardBenefits";
import ScholarIDCardProgram from "@/components/ScholarIDCardProgram";
import ScholarPaymentSection from "@/components/scholar/ScholarPaymentSection";
import ScholarTimeline from "@/components/scholar/ScholarTimeline";
import ScholarFAQs from "@/components/scholar/ScholarFAQs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  ExternalLink, 
  CreditCard
} from "lucide-react";
import { Link } from "react-router-dom";

const IDCard = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white text-unifor-purple mb-4">SCHOLAR ORIENTATION</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Scholar ID Card Orientation</h1>
            <p className="text-lg md:text-xl mb-8">
              Your gateway to global opportunities and exclusive scholar benefits
            </p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unifor-dark-purple mb-4">How to Get Your Scholar ID</h2>
              <p className="text-gray-600">Follow these simple steps to become a verified Uniford Scholar</p>
            </div>
            <ScholarTimeline />
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScholarPaymentSection />
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-unifor-dark-purple mb-4">Quick Actions</h2>
              <p className="text-gray-600">Get started with our programs and opportunities</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-gradient-to-br from-unifor-purple to-unifor-dark-purple text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    Social Internship Program
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    Complete meaningful social work and get your ₹500 registration fee refunded
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-white/80">
                    Join our Social Internship program to make a positive impact while earning your fee refund through community service.
                  </p>
                  <Button 
                    className="w-full bg-white text-unifor-purple hover:bg-gray-100 font-semibold"
                    asChild
                  >
                    <Link to="/social-internship">
                      Join Social Internship
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-unifor-blue to-unifor-purple text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <CreditCard className="h-6 w-6" />
                    Apply for Programs
                  </CardTitle>
                  <CardDescription className="text-white/90">
                    Explore and apply for various Uniford programs and opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-white/80">
                    Discover amazing opportunities including research programs, career development, and more.
                  </p>
                  <Button 
                    className="w-full bg-white text-unifor-blue hover:bg-gray-100 font-semibold"
                    asChild
                  >
                    <Link to="/apply">
                      Explore Applications
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScholarFAQs />
          </div>
        </div>
      </section>

      {/* Existing Components */}
      <ScholarIDFeatures />
      <IDCardBenefits />
      <ScholarIDCardProgram />
      
      <Footer />
    </div>
  );
};

export default IDCard;
