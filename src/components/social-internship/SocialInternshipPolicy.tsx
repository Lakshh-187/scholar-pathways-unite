
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Clock, AlertTriangle, BadgeCheck, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SocialInternshipPolicy = () => {
  const policies = [
    {
      title: "ID Card Extension Policy",
      content: "Participants in the social internship program get a 1-year ID card extension, but no refund if their social internship is not verified and completed successfully."
    },
    {
      title: "Verification Before Parcel Sending",
      content: "Before sending parcels or performing social internship tasks, connect with our help desk or fill out the Google form for verification. This prevents common mistakes such as sending the wrong items, incorrect addresses, or unsuitable donations (e.g., men's hair, flower plants instead of fruit plants)."
    },
    {
      title: "Refund Policy",
      content: "Scholars who have successfully completed their social internship, following all guidelines properly, are eligible to receive a refund of their registration fee."
    },
    {
      title: "Communication Policy",
      content: "All participants must maintain regular communication with their assigned coordinator throughout the internship period. Any issues or delays must be promptly reported."
    },
    {
      title: "Documentation Requirements",
      content: "All activities must be properly documented with photographs, receipts, and written reports as specified in the submission guidelines."
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Internship Policies</CardTitle>
        <CardDescription>
          Important guidelines and policies for all participants in the Social Internship Program
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Alert className="border-yellow-500 bg-yellow-50">
          <AlertTriangle className="h-5 w-5 text-yellow-600" />
          <AlertTitle className="text-yellow-800">Important Notice</AlertTitle>
          <AlertDescription className="text-yellow-700">
            Make sure to read and understand all policies before applying for the social internship. 
            Failing to follow these guidelines may result in disqualification from benefits.
          </AlertDescription>
        </Alert>
      
        <Accordion type="single" collapsible className="w-full">
          {policies.map((policy, index) => (
            <AccordionItem key={index} value={`policy-${index}`}>
              <AccordionTrigger className="text-left hover:text-unifor-purple">
                {policy.title}
              </AccordionTrigger>
              <AccordionContent>
                {policy.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        <div className="bg-unifor-light-purple/10 p-6 rounded-lg mt-6">
          <div className="flex items-start gap-3 mb-4">
            <Clock className="h-5 w-5 text-unifor-purple shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium">Time Commitment Guidelines</h3>
              <p className="text-gray-600 text-sm mt-1">
                Each social internship task requires different time commitments. Please ensure you can dedicate the required time before applying.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <BadgeCheck className="h-5 w-5 text-unifor-purple shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-medium">Successful Completion Criteria</h3>
              <p className="text-gray-600 text-sm mt-1">
                For your social internship to be considered complete and verified, you must submit all required evidence and documentation as specified in the submission guidelines.
              </p>
            </div>
          </div>
        </div>
        
        <Button 
          className="w-full bg-unifor-purple hover:bg-unifor-dark-purple mt-4"
          onClick={() => window.open('https://forms.google.com/social-internship-policy-acknowledgement', '_blank')}
        >
          Acknowledge & Accept Policies
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SocialInternshipPolicy;
