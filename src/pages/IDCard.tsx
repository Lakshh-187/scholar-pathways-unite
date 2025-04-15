import React, { useState } from "react";
import { 
  BadgeCheck, 
  BookOpen, 
  Calendar, 
  CreditCard, 
  Download, 
  GraduationCap, 
  HelpCircle, 
  Info, 
  Link as LinkIcon, 
  Mail, 
  MessageCircle, 
  Rocket, 
  Sparkles, 
  UserCheck
} from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import IDCardBenefits from "@/components/IDCardBenefits";
import OfficialDocuments from "./OfficialDocuments";
import NotFound from "./NotFound";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import ScholarIDProcess from "@/components/scholar/ScholarIDProcess";

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
                  Apply Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <ScholarIDProcess />
        
        {/* Add the Benefits Component */}
        <IDCardBenefits />
        
        {/* CTA Section */}
        <section className="py-16 bg-unifor-light-purple/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Scholar Journey?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Apply for your ID card today and begin accessing a world of opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-unifor-purple hover:bg-unifor-dark-purple" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" size="lg">
                  Learn About Social Internships
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default IDCard;
