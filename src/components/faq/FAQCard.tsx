
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { 
  Info,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
  details?: string;
  icon: React.ReactNode;
  color: string;
}

const FAQCard = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<FAQ | null>(null);
  const { toast } = useToast();
  
  const faqs: FAQ[] = [
    {
      id: "id-card",
      category: "ID Card",
      question: "How do I apply for a Uniford ID Card?",
      answer: "You can apply for a Uniford ID Card through our online portal by submitting required documents and paying the registration fee.",
      details: "The Uniford ID Card application process involves several steps: First, create an account on our portal. Then, fill out the application form with your personal information. Upload required documents including a passport photo, proof of identity, and educational certificates. Pay the registration fee through our secure payment gateway. Once your application is verified, your ID card will be dispatched to your registered address within 15-30 working days.",
      icon: <Info className="h-6 w-6 text-blue-500" />,
      color: "bg-blue-100 text-blue-800",
    },
    {
      id: "social-internship",
      category: "Social Internship",
      question: "What are the eligibility criteria for Social Internship?",
      answer: "Any registered Uniford member can apply for our Social Internship program by choosing one of the available tasks.",
      details: "Our Social Internship program is designed to be accessible to all Uniford members. You must have an active Uniford membership or ID card. You need to commit to completing one of our predefined social impact tasks within the specified timeframe. Each task has different requirements and impact levels - some are easier (like donating items) while others require more commitment (like teaching or mentoring). Successful completion earns you certification and potential registration fee refunds.",
      icon: <HelpCircle className="h-6 w-6 text-green-500" />,
      color: "bg-green-100 text-green-800",
    },
    {
      id: "payments",
      category: "Payments",
      question: "How can I get a refund for my registration fee?",
      answer: "You can get your registration fee refunded by successfully completing a social internship task within the specified guidelines.",
      details: "Registration fee refunds are processed after successful verification of your social internship task completion. Make sure to follow all submission guidelines properly and provide the required documentation as evidence. Our verification team will review your submission, and if approved, the refund will be processed within 30-45 working days to your original payment method. Please note that partial completions or submissions that don't meet the guidelines are not eligible for refunds.",
      icon: <MessageSquare className="h-6 w-6 text-purple-500" />,
      color: "bg-purple-100 text-purple-800",
    },
    {
      id: "benefits",
      category: "Benefits",
      question: "What benefits do I get with a Uniford ID Card?",
      answer: "Uniford ID Card holders receive numerous benefits including access to premium content, scholar portals, workshops, and networking opportunities.",
      details: "Uniford ID Card holders enjoy a comprehensive range of benefits: Access to exclusive educational resources and premium content on our portal. Eligibility for scholarships and funding opportunities through our partner institutions. Invitations to specialized workshops, seminars, and networking events. Discounts on educational products and services from our partner organizations. Career development services including resume reviews and interview preparation. Global recognition of your academic credentials through our verified ID system.",
      icon: <BookOpen className="h-6 w-6 text-amber-500" />,
      color: "bg-amber-100 text-amber-800",
    },
    {
      id: "timeline",
      category: "Timeline",
      question: "How long does it take to process my ID Card application?",
      answer: "The typical processing time for ID Card applications is 15-30 working days after successful verification.",
      details: "The ID Card processing timeline includes several stages: Initial application review (2-3 working days), Document verification (5-7 working days), Approval process (3-5 working days), Card printing and quality check (3-5 working days), and Shipping and delivery (5-10 working days depending on your location). You can check your application status anytime through our online portal. If there are any issues with your application, our team will contact you within the first week of submission.",
      icon: <Info className="h-6 w-6 text-rose-500" />,
      color: "bg-rose-100 text-rose-800",
    },
    {
      id: "documents",
      category: "Documents",
      question: "What documents are required for ID Card application?",
      answer: "Required documents include proof of identity, educational certificates, passport-size photograph, and proof of address.",
      details: "For your ID Card application, please prepare the following documents: Government-issued ID proof (passport, driver's license, or national ID card), Educational certificates or enrollment proof from your institution, Recent passport-size photograph with white background (digital format, 300 DPI minimum), Proof of current address (utility bill or bank statement issued within last 3 months), and Professional credentials or certifications if applying for specialized categories. All documents should be clear scans or high-quality photos, and file size should not exceed 2MB per document.",
      icon: <HelpCircle className="h-6 w-6 text-teal-500" />,
      color: "bg-teal-100 text-teal-800",
    },
  ];

  const handleOpenDetails = (faq: FAQ) => {
    setSelectedFAQ(faq);
  };

  const handleCloseDetails = () => {
    setSelectedFAQ(null);
  };
  
  const handleInfo = (faq: FAQ) => {
    toast({
      title: faq.question,
      description: faq.answer,
    });
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Select any question card to view detailed information and answers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq) => (
              <Card key={faq.id} className="h-full transition-all hover:shadow-md hover:border-unifor-light-purple">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="bg-unifor-light-purple/20 p-3 rounded-lg">
                      {faq.icon}
                    </div>
                    <Badge className={faq.color}>{faq.category}</Badge>
                  </div>
                  <CardTitle className="mt-4 text-lg">{faq.question}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2 h-10">{faq.answer}</CardDescription>
                </CardHeader>
                <CardFooter className="flex gap-2 pt-2">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-10 p-0" 
                    onClick={() => handleInfo(faq)}
                  >
                    <Info className="h-4 w-4" />
                  </Button>
                  <Button 
                    className="flex-1 bg-unifor-purple hover:bg-unifor-dark-purple"
                    onClick={() => handleOpenDetails(faq)}
                  >
                    View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={selectedFAQ !== null} onOpenChange={handleCloseDetails}>
        {selectedFAQ && (
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className={selectedFAQ.color}>{selectedFAQ.category}</Badge>
              </div>
              <DialogTitle className="text-2xl">{selectedFAQ.question}</DialogTitle>
            </DialogHeader>
            
            <div className="py-4">
              <h4 className="font-semibold text-lg mb-2">Summary</h4>
              <p className="text-gray-700 mb-6">{selectedFAQ.answer}</p>
              
              <h4 className="font-semibold text-lg mb-2">Detailed Information</h4>
              <p className="text-gray-700">{selectedFAQ.details}</p>
            </div>
            
            <div className="flex justify-end gap-3 mt-4">
              <Button variant="outline" onClick={handleCloseDetails}>Close</Button>
              <Button 
                className="bg-unifor-purple hover:bg-unifor-dark-purple"
                onClick={() => window.open('https://uniford.org/contact', '_blank')}
              >
                Ask More Questions
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default FAQCard;
