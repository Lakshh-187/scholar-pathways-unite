import React, { useState } from "react";
import { NavBar } from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import SocialInternshipTasks from "@/components/social-internship/SocialInternshipTasks";
import SocialInternshipPolicy from "@/components/social-internship/SocialInternshipPolicy";
import SocialInternshipSubmission from "@/components/social-internship/SocialInternshipSubmission";
import WhatsAppHelpDesk from "@/components/WhatsAppHelpDesk";
import { ExternalLink, FileText } from "lucide-react";

const SocialInternship = () => {
  const { toast } = useToast();
  
  const handleOpenForm = () => {
    window.open('https://forms.google.com/social-internship-form', '_blank');
    toast({
      title: "Opening Form",
      description: "Redirecting you to the Social Internship registration form",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge className="bg-white text-unifor-purple mb-4">MAKE AN IMPACT</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Social Internship Program</h1>
              <p className="text-lg md:text-xl mb-8">
                Complete meaningful tasks, make a difference in society, and get your registration fee refunded
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-unifor-purple hover:bg-gray-100" onClick={handleOpenForm}>
                  Register Now
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Tabs defaultValue="tasks" className="space-y-8">
                <TabsList className="grid grid-cols-3 w-full">
                  <TabsTrigger value="tasks">Available Tasks</TabsTrigger>
                  <TabsTrigger value="policy">Policies</TabsTrigger>
                  <TabsTrigger value="submission">Submission Guidelines</TabsTrigger>
                </TabsList>
                
                <TabsContent value="tasks">
                  <SocialInternshipTasks />
                </TabsContent>
                
                <TabsContent value="policy">
                  <SocialInternshipPolicy />
                </TabsContent>
                
                <TabsContent value="submission">
                  <SocialInternshipSubmission />
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-unifor-light-purple/20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Join our Social Internship Program today and be part of meaningful change while earning benefits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-unifor-purple hover:bg-unifor-dark-purple" size="lg" onClick={handleOpenForm}>
                  Register for Social Internship
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.location.href = "/official-documents"}
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Official Documents
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <WhatsAppHelpDesk 
        phoneNumber="7347099610"
        defaultMessage="Hello! I have a question about the Social Internship program."
      />
      <Footer />
    </div>
  );
};

export default SocialInternship;
