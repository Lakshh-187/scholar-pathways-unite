
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in the Scholar ID Kit?",
    answer: "The Scholar ID Kit includes 2 Scholar ID Cards, 1 Membership Card, and 1 Scholar Badge. These items provide access to various programs, internships, and exclusive opportunities."
  },
  {
    question: "How can I get my registration fee refunded?",
    answer: "Complete a social internship and submit your certificate to info@uniford.org. Our team will verify and process your refund."
  },
  {
    question: "What is the Time Aid Policy?",
    answer: "The Time Aid Policy requires you to either submit your internship certificate or pay ₹500 within 3 days of receiving your ID kit."
  },
  {
    question: "What opportunities do I get with the Scholar ID?",
    answer: "Access internships, project expos, career opportunities, and participate in global summits and fests without individual fees."
  },
  {
    question: "What are the eligibility criteria?",
    answer: "You need minimum 55% marks in your latest qualification and should be under 24 years of age (U-24)."
  }
];

const ScholarFAQs = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left hover:text-unifor-purple">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default ScholarFAQs;
