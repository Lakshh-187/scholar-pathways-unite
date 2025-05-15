
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScholarIDProcess from "@/components/scholar/ScholarIDProcess";
import StudentProblems from "@/components/scholar/StudentProblems";
import ProblemsSolutions from "@/components/scholar/ProblemsSolutions";
import ScholarTypes from "@/components/scholar/ScholarTypes";
import RelatedPages from "@/components/scholar/RelatedPages";
import IDCardBenefits from "@/components/IDCardBenefits";
import ScholarFAQs from "@/components/scholar/ScholarFAQs";
import IDCardApplicationForm from "@/components/idcard/IDCardApplicationForm";
import ScholarIDFeatures from "@/components/ScholarIDFeatures";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, ExternalLink } from "lucide-react";

const IDCard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://www.uniford.org/uniford-main/uniford1.jpg"
              alt="Students collaborating" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4 animate-pulse">
                <span className="text-white font-medium tracking-wider text-sm">Non-profit Organization</span>
              </div>
              <Badge className="bg-white text-unifor-purple mb-4">ACCESS KEY</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Uniford Scholar ID Card</h1>
              <p className="text-lg md:text-xl mb-8">
                Your gateway to internships, resources, and opportunities without individual fees
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#registration">
                  <Button className="bg-white text-unifor-purple hover:bg-gray-100">
                    <CreditCard className="mr-2" />
                    Apply Now
                  </Button>
                </a>
                <a 
                  href="https://forms.gle/VJJCWM2wzcZjT8YK8" 
                  target="_blank" 
                  rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white/10 w-full">
                    <ExternalLink className="mr-2" />
                    Apply via Time AID
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Interactive Buttons Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#registration">
                <Button 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white hover:from-blue-600 hover:to-purple-600 px-6 py-3">
                  <CreditCard className="mr-2" />
                  Fill ID card Form
                </Button>
              </a>
              <a href="https://wa.me/7347099610?text=Hello!%20I%20have%20a%20question." 
                target="_blank" 
                rel="noopener noreferrer">
                  <Button className="bg-gradient-to-r from-pink-500 to-purple-500 font-bold text-white hover:from-pink-600 hover:to-purple-600 px-6 py-3">
                    <ExternalLink className="mr-2" /> Have Query - Connect
                  </Button>
              </a>
              <a href="https://forms.gle/VJJCWM2wzcZjT8YK8" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white hover:from-blue-600 hover:to-pink-600 px-6 py-3"
                >
                  <ExternalLink className="mr-2" />
                  Appy via Time AID
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Current Problems & Solutions Section */}
        <StudentProblems />
        
        {/* Problems vs Solutions Comparison */}
        <ProblemsSolutions />
        
        {/* Scholar Types Section - NEW */}
        <ScholarTypes />
        
        {/* Scholar ID Process */}
        <ScholarIDProcess />
        
        {/* New Scholar ID Features Section */}
        <ScholarIDFeatures />
        
        {/* Benefits Section */}
        <IDCardBenefits />
        
        {/* Related Pages Navigation */}
        <RelatedPages />
       
        {/* ID Card Application Form Section */}
        <IDCardApplicationForm />
      </main>

      <Footer />
    </div>
  );
};

export default IDCard;
