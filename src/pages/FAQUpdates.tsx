
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import FAQAccordion from '@/components/faq/FAQAccordion';
import QueryForm from '@/components/faq/QueryForm';
import LiveUpdates from '@/components/faq/LiveUpdates';
import FAQCard from '@/components/faq/FAQCard';
import { ExternalLink } from 'lucide-react';

const FAQUpdates = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQ & Updates | Uniford</title>
      </Helmet>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="bg-white text-unifor-purple mb-4">INFORMATION CENTER</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-lg md:text-xl mb-8">
              Find answers to common questions and stay updated with the latest announcements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-unifor-purple hover:bg-gray-100">
                Submit a Question
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Browse Updates
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="faq" className="space-y-8">
              <TabsList className="grid grid-cols-3 w-full">
                <TabsTrigger value="faq">FAQ Cards</TabsTrigger>
                <TabsTrigger value="accordion">FAQ Accordion</TabsTrigger>
                <TabsTrigger value="updates">Latest Updates</TabsTrigger>
              </TabsList>
              
              <TabsContent value="faq">
                <FAQCard />
              </TabsContent>
              
              <TabsContent value="accordion">
                <FAQAccordion />
                <QueryForm />
              </TabsContent>
              
              <TabsContent value="updates">
                <LiveUpdates />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-unifor-light-purple/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Our support team is ready to help. Reach out to us with any questions you may have.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple" size="lg">
                Contact Support
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Browse Documentation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FAQUpdates;
