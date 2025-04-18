import React, { useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScholarIDProcess from "@/components/scholar/ScholarIDProcess";
import StudentProblems from "@/components/scholar/StudentProblems";
import RelatedPages from "@/components/scholar/RelatedPages";
import IDCardBenefits from "@/components/IDCardBenefits";
import WhatMattersPreview from "@/components/WhatMattersPreview";
import ScholarFAQs from "@/components/scholar/ScholarFAQs";
import ScholarImageCarousel from "@/components/ScholarImageCarousel";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonProps } from "@/components/ui/button";
import { CreditCard, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";import { Link } from "react-router-dom";

const IDCard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-white text-unifor-purple mb-4">ACCESS KEY</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Uniford Scholar ID Card</h1>
              <p className="text-lg md:text-xl mb-8">
                Your gateway to internships, resources, and opportunities without individual fees
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://www.uniford.org/donation" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-white text-unifor-purple hover:bg-gray-100">
                    <CreditCard className="mr-2" />
                    Apply Now
                  </Button>
                </a>
                <a href="https://forms.gle/ZgQnS2xBsdo4YX9L8">
                  <Button variant="outline" className="border-white text-white :bg-white/10 w-full">
                    <ExternalLink className="mr-2" />
                    Apply via Time AID
                  </Button>
                </a>
                  <a href="#registration">
                    <Button variant="outline" className="border-white text-white :bg-white/10 w-full">
                      Go to Registration
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
             <a href="https://forms.gle/VJJCWM2wzcZjT8YK8" target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 font-bold text-white hover:from-blue-600 hover:to-purple-600 px-6 py-3">
              <ExternalLink className="mr-2" />
              Fill ID card Form
            </Button>
          </a>
          <a href="https://wa.me/7347099610?text=Hello!%20I%20have%20a%20question." target="_blank" rel="noopener noreferrer">
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 font-bold text-white hover:from-pink-600 hover:to-purple-600 px-6 py-3"><ExternalLink className="mr-2" /> Have Query - Connect</Button>
          </a>
              <a href="#scholar-journey">
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
        
        {/* Scholar ID Process */}
        <ScholarIDProcess />
        
        {/* Benefits Section */}
        <IDCardBenefits />
        
        {/* Scholar Image Carousel */}
        <ScholarImageCarousel />
        
        {/* What Matters Preview */}
        <WhatMattersPreview />
        
        {/* Related Pages Navigation */}
        <RelatedPages />
       
      </main>
      
      <Footer />
    </div>
  );
};

export default IDCard;
