
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScholarIDProcess from "@/components/scholar/ScholarIDProcess";
import StudentProblems from "@/components/scholar/StudentProblems";
import RelatedPages from "@/components/scholar/RelatedPages";
import IDCardBenefits from "@/components/IDCardBenefits";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, ExternalLink } from "lucide-react";

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
                <Button className="bg-white text-unifor-purple hover:bg-gray-100">
                  <CreditCard className="mr-2" />
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  <ExternalLink className="mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Current Problems & Solutions Section */}
        <StudentProblems />
        
        {/* Scholar ID Process */}
        <ScholarIDProcess />
        
        {/* Benefits Section */}
        <IDCardBenefits />
        
        {/* Related Pages Navigation */}
        <RelatedPages />
      </main>
      
      <Footer />
    </div>
  );
};

export default IDCard;
