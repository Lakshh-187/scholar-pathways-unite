
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const WhatMattersPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              STUDENT SUCCESS FACTORS
            </Badge>
            <h2 className="section-title">What Really Matters?</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Understanding the true factors that determine student success according to the World Economic Forum
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Beyond Academics: What Employers Really Value</h3>
                <p className="text-gray-600 mb-6">
                  Discover why 76% of students never reach the interview stage and how a credible portfolio of real-world experience makes all the difference.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-unifor-light-purple flex items-center justify-center mt-0.5">
                      <span className="text-unifor-purple text-sm font-bold">1</span>
                    </div>
                    <p className="text-gray-700">Practical experience through internships and projects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-unifor-light-purple flex items-center justify-center mt-0.5">
                      <span className="text-unifor-purple text-sm font-bold">2</span>
                    </div>
                    <p className="text-gray-700">Problem-solving abilities demonstrated through real challenges</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-6 w-6 rounded-full bg-unifor-light-purple flex items-center justify-center mt-0.5">
                      <span className="text-unifor-purple text-sm font-bold">3</span>
                    </div>
                    <p className="text-gray-700">Collaboration and soft skills beyond technical knowledge</p>
                  </div>
                </div>
                
                <Link to="/what-matters">
                  <Button className="flex items-center gap-2 primary-btn">
                    Explore What Matters
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-unifor-dark to-unifor-dark-purple text-white p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6">Key Statistics</h3>
                <div className="space-y-6">
                  <div>
                    <p className="text-4xl font-bold text-unifor-purple mb-2">76%</p>
                    <p className="text-gray-300">students never reach the interview stage due to traditional filters</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-unifor-purple mb-2">4M+</p>
                    <p className="text-gray-300">graduates with degrees are considered unemployable, not unemployed</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-unifor-purple mb-2">90%</p>
                    <p className="text-gray-300">success rate for referral-based hiring that focuses on practical skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatMattersPreview;
