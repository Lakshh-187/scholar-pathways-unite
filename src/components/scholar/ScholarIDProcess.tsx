
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ScholarTimeline from './ScholarTimeline';
import ScholarPaymentSection from './ScholarPaymentSection';
import ScholarFAQs from './ScholarFAQs';
import { FileText, Users, Clock, HelpCircle } from 'lucide-react';
import WhatsAppHelpDesk from '../WhatsAppHelpDesk';

const ScholarIDProcess = () => {
  const [activeTab, setActiveTab] = useState("process");

  return (
    <section className="py-16 bg-gradient-to-b from-white to-unifor-light-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-unifor-dark-purple mb-4">
              Get Your Scholar ID Card
            </h1>
            <p className="text-lg text-gray-600">
              Your gateway to exclusive opportunities and resources
            </p>
          </div>

          <Tabs defaultValue="process" className="space-y-8" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="process" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Process</span>
              </TabsTrigger>
              <TabsTrigger value="internship" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>Social Internship</span>
              </TabsTrigger>
              <TabsTrigger value="timeaid" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Time Aid</span>
              </TabsTrigger>
              <TabsTrigger value="faq" className="flex items-center gap-2">
                <HelpCircle className="h-4 w-4" />
                <span>FAQs</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="process" className="space-y-8">
              <ScholarTimeline />
              <ScholarPaymentSection />
            </TabsContent>

            <TabsContent value="internship">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-4">Social Internship Program</h2>
                    <p className="text-gray-600">
                      Complete a social internship to get your registration fee refunded and gain valuable experience.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium mb-3">Benefits</h3>
                        <ul className="space-y-2 text-gray-600">
                          <li>• Get your ₹500 registration fee refunded</li>
                          <li>• Gain practical experience</li>
                          <li>• Earn a valuable certificate</li>
                          <li>• Build your network</li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-lg font-medium mb-3">How to Apply</h3>
                        <p className="text-gray-600 mb-4">
                          Apply for social internship opportunities through our platform.
                        </p>
                        <Button className="w-full bg-unifor-purple hover:bg-unifor-dark-purple">
                          View Internship Opportunities
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeaid">
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-6">
                    <h2 className="text-2xl font-semibold mb-4">Time Aid Policy</h2>
                    <div className="bg-unifor-light-purple/10 p-6 rounded-lg">
                      <h3 className="text-lg font-medium mb-4">Choose Your Path</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h4 className="font-medium mb-3">Option 1: Submit Certificate</h4>
                          <p className="text-gray-600 mb-4">
                            Submit your social internship certificate within 3 days of receiving your ID kit.
                          </p>
                          <a
  href="https://9000-idx-scholar-pathways-unitegit-1744946568054.cluster-ubrd2huk7jh6otbgyei4h62ope.cloudworkstations.dev/apply"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="sm" className="mt-2 border-amber-500 text-amber-600 hover:bg-amber-50">
   
    Apply Now
  </Button>
</a>

                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h4 className="font-medium mb-3">Option 2: Pay Fee</h4>
                          <p className="text-gray-600 mb-4">
                            Pay ₹500 within 3 days of receiving your ID kit.
                          </p>
                          <Button variant="outline" className="w-full">
                            Pay Fee
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="faq">
              <ScholarFAQs />
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <WhatsAppHelpDesk />
    </section>
  );
};

export default ScholarIDProcess;
