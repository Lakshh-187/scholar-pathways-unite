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
import ScholarIDCardProgram from "@/components/ScholarIDCardProgram";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

const IDCard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  const eligibilityItems = [
    { label: "Minimum Marks Required", value: "58% in the last appeared exam" },
    { label: "Total Seats Available", value: "1,780 (Region-wise)" },
    { label: "Additional Requirement", value: "Potential to explore & participate" },
  ];
  
  const applicationMethods = [
    {
      title: "Submit a Social Internship Certificate",
      description: "If you've completed a Uniford Social Internship (USIC), you can use the certificate to apply for your Scholar ID Card.",
      icon: <GraduationCap className="h-8 w-8 text-unifor-purple" />
    },
    {
      title: "Pay a Refundable Fee",
      description: "Pay ₹500 which includes your ID card, membership card, and portal access. This fee is refundable after completing a social internship.",
      icon: <CreditCard className="h-8 w-8 text-unifor-purple" />
    }
  ];
  
  const applicationSteps = [
    {
      title: "Visit the Membership Page",
      description: "Read all details, terms & conditions carefully before proceeding.",
      icon: <BookOpen className="h-6 w-6 text-unifor-purple" />,
      action: <Button className="mt-2" size="sm">Visit Page</Button>
    },
    {
      title: "Pay the Refundable Fee & Fill the ID Card Form",
      description: "Amount: ₹500 (Refundable through Social Internship). Submit all required details in the form.",
      icon: <CreditCard className="h-6 w-6 text-unifor-purple" />,
      action: <Button className="mt-2" size="sm">Pay & Apply</Button>
    },
    {
      title: "Receive Your Scholar ID Card",
      description: "Within a week, you'll get your ID Card, Onboarding Attachments, and Official Calendar.",
      icon: <Calendar className="h-6 w-6 text-unifor-purple" />,
      action: null
    }
  ];

  const benefitsItems = [
    {
      title: "Campus to Corporate Program",
      description: "Designed for Management & Engineering Students. Provides Internships, Project Expo, Career Opportunities. Access through CAF & Referrals.",
      icon: <Rocket className="h-6 w-6 text-unifor-purple" />
    },
    {
      title: "Frontliner Program",
      description: "For Entrepreneurs, Social Activists, Authors, and Skilled Students. Empowers students with Leadership & Initiative Roles.",
      icon: <Sparkles className="h-6 w-6 text-unifor-purple" />
    }
  ];

  const faqs = [
    {
      question: "What is a Scholar ID Card?",
      answer: "The Scholar ID Card is your access key to all Uniford programs, platforms, and resources. It enables you to participate in internships, cohorts, project expos, and more without individual fees."
    },
    {
      question: "Why is there a fee or social internship requirement?",
      answer: "Many students take their ID card for granted if given without effort. To ensure commitment, students must complete a social internship before/after the course or pay a small refundable fee."
    },
    {
      question: "What does 'Verified Scholar' mean?",
      answer: "A Verified Scholar status is earned after completing profile verification by submitting UNSIP, Project Expo, participation score & earned certificates. This badge unlocks publishing opportunities, CAF, and exclusive career referrals."
    },
    {
      question: "How can I get my membership fee refunded?",
      answer: "To get your membership fee refunded, submit your Social Internship Certificate via email to info@uniford.org. The department will connect with you for verification."
    },
    {
      question: "How long is the Scholar ID Card valid?",
      answer: "The Scholar ID Card is valid throughout your academic journey and can be renewed annually to maintain access to all Uniford programs and platforms."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24">
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
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Tabs Navigation */}
              <Tabs defaultValue="overview" className="mb-12">
                <TabsList className="w-full justify-start mb-8 overflow-x-auto">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="how-to-apply">How to Apply</TabsTrigger>
                  <TabsTrigger value="benefits">Benefits</TabsTrigger>
                  <TabsTrigger value="faqs">FAQs</TabsTrigger>
                </TabsList>
                
                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Info className="h-5 w-5 text-unifor-purple" />
                          What Makes It Unique?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 mb-4">
                          Normal students struggle to find internships, resources, and platforms. When they do, they often pay individually for each opportunity.
                        </p>
                        <p className="text-gray-600 mb-4">
                          With a Uniford Scholar ID Card, you can:
                        </p>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>Access all platforms and programs without individual fees</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>Get recommended for opportunities via Talent Hunt Alliance</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span>Receive profile screening and personalized referrals</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <UserCheck className="h-5 w-5 text-unifor-purple" />
                          Eligibility Criteria
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-4">
                          {eligibilityItems.map((item, index) => (
                            <li key={index} className="border-b pb-3 last:border-0 last:pb-0">
                              <p className="text-sm text-gray-500">{item.label}</p>
                              <p className="font-medium">{item.value}</p>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Application Methods</CardTitle>
                      <CardDescription>
                        Choose one of the following methods to apply for your Scholar ID Card
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {applicationMethods.map((method, index) => (
                          <div key={index} className="border rounded-lg p-5 hover:border-unifor-purple hover:shadow-md transition-all">
                            <div className="flex flex-col items-center text-center gap-4">
                              <div className="w-16 h-16 rounded-full bg-unifor-light-purple/30 flex items-center justify-center">
                                {method.icon}
                              </div>
                              <h3 className="text-lg font-medium">{method.title}</h3>
                              <p className="text-gray-600">{method.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="text-center">
                    <Button className="bg-unifor-purple hover:bg-unifor-dark-purple" size="lg">
                      Apply for Scholar ID
                    </Button>
                  </div>
                </TabsContent>
                
                {/* How to Apply Tab */}
                <TabsContent value="how-to-apply" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Step-by-Step Application Process</CardTitle>
                      <CardDescription>
                        Follow these steps to get your Scholar ID Card and start accessing opportunities
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        <div className="absolute left-5 top-0 h-full w-0.5 bg-unifor-light-purple/50"></div>
                        <div className="space-y-8">
                          {applicationSteps.map((step, index) => (
                            <div key={index} className="relative pl-12">
                              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-unifor-purple text-white flex items-center justify-center">
                                {index + 1}
                              </div>
                              <div>
                                <h3 className="text-lg font-medium flex items-center gap-2">
                                  {step.icon}
                                  <span>{step.title}</span>
                                </h3>
                                <p className="mt-2 text-gray-600">{step.description}</p>
                                {step.action}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col items-start">
                      <p className="text-sm text-gray-500 mb-2">Need assistance with your application?</p>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">WhatsApp Help Desk</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="h-4 w-4 text-unifor-purple" />
                          <span className="text-sm">info@uniford.org</span>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>How to Get Your Membership Fee Refunded</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ol className="list-decimal pl-5 space-y-3">
                        <li>Submit your Social Internship Certificate via email to <span className="text-unifor-purple font-medium">info@uniford.org</span></li>
                        <li>Our department will connect with you for verification</li>
                        <li>Once verified, the fee will be refunded to your account</li>
                      </ol>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                {/* Benefits Tab */}
                <TabsContent value="benefits" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>What Can You Access with the Scholar ID Card?</CardTitle>
                      <CardDescription>
                        Enjoy these programs and benefits as a Uniford Scholar
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {benefitsItems.map((item, index) => (
                          <div key={index} className="p-5 border rounded-lg hover:border-unifor-purple hover:shadow-md transition-all">
                            <div className="flex items-start gap-4">
                              <div className="w-12 h-12 rounded-full bg-unifor-light-purple/30 flex items-center justify-center flex-shrink-0">
                                {item.icon}
                              </div>
                              <div>
                                <h3 className="text-lg font-medium">{item.title}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-8 p-5 border border-unifor-light-purple rounded-lg bg-unifor-light-purple/10">
                        <h3 className="text-lg font-medium flex items-center gap-2 mb-4">
                          <BadgeCheck className="h-5 w-5 text-unifor-purple" />
                          What Does "Verified Scholar" Mean?
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Students must complete profile verification by submitting UNSIP, Project Expo, Participation Score & Earned Certificates.
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            <BadgeCheck className="h-4 w-4 mr-1" /> Verified Scholar
                          </Badge>
                          <span className="text-sm text-gray-600">Unlocks publishing opportunities, CAF, and exclusive career referrals</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Apply for Programs</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Use your Scholar ID Card to apply for various programs through Uniwave platform.</p>
                        <Button className="w-full">
                          Visit Uniwave.in
                          <LinkIcon className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>How to Apply for Social Internship</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">Complete a social internship to get your membership fee refunded and enhance your profile.</p>
                        <Button variant="outline" className="w-full">
                          View Attachments & Apply
                          <Download className="ml-2 h-4 w-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                {/* FAQs Tab */}
                <TabsContent value="faqs" className="space-y-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Frequently Asked Questions</CardTitle>
                      <CardDescription>
                        Find answers to common questions about the Scholar ID Card program
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">
                              <div className="flex items-center gap-2">
                                <HelpCircle className="h-5 w-5 text-unifor-purple" />
                                <span>{faq.question}</span>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-7">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                    <CardFooter>
                      <div className="w-full p-4 bg-gray-50 rounded-lg">
                        <p className="text-center text-gray-600">
                          Have more questions? Contact our support team at{" "}
                          <a href="mailto:info@uniford.org" className="text-unifor-purple font-medium">
                            info@uniford.org
                          </a>
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                  
                  <div className="text-center">
                    <Button className="bg-unifor-purple hover:bg-unifor-dark-purple">
                      Download Resources & FAQs
                      <Download className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
        
        {/* Add the new Benefits Component */}
        <IDCardBenefits />
        
        {/* Add the Scholar ID Card Program Component */}
        <ScholarIDCardProgram />
        
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
