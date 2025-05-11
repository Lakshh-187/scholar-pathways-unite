
import React, { useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Lightbulb, Book, User, Calendar, CheckCircle, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// FAQs data with detailed content
const faqCategories = [
  {
    title: "Onboarding FAQs for Students",
    icon: <User className="h-5 w-5 text-unifor-purple" />,
    items: [
      {
        question: "What pages should I visit first as a new student?",
        answer: (
          <div className="space-y-4">
            <h3 className="font-medium text-unifor-purple">Important Pages to Visit:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>
                  <span className="font-medium">Official Documents:</span> Contains all foundational details including processes and requirements.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>
                  <span className="font-medium">ID Card Application:</span> Apply after selecting your program.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>
                  <span className="font-medium">Updates Page:</span> Find all announcements, deadlines, and submission details.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>
                  <span className="font-medium">Pitchburg:</span> Platform to showcase your innovations, ideas, and achievements.
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm" variant="outline">
                <Link to="/official-documents">
                  Official Documents
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/id-card">
                  ID Card Application
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        )
      },
      {
        question: "How do I get a verified badge?",
        answer: (
          <div className="space-y-4">
            <h3 className="font-medium text-unifor-purple">To receive a verified badge:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Submit your Foundational Profile.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Follow the instructions listed on the Official Documents page.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Need help? Contact the Help Desk for 24×7 assistance.</div>
              </li>
            </ul>
          </div>
        )
      },
      {
        question: "How does profile screening work via THA?",
        answer: (
          <div className="space-y-4">
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Submit all three-phase certifications for profile screening.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>While applying for the ID card, you must choose your program.</div>
              </li>
            </ul>
            <h3 className="font-medium text-unifor-purple mt-4">Once selected, you get access to exclusive opportunities like:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Internships</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Uni-Pitch</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>ARS (Advanced Research & Strategy)</div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm" variant="outline">
                <Link to="/talent-hunt-alliance">
                  Talent Hunt Alliance
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: "Programs & Opportunities",
    icon: <Book className="h-5 w-5 text-unifor-purple" />,
    items: [
      {
        question: "How do I complete a Social Internship?",
        answer: (
          <div className="space-y-4">
            <ol className="list-decimal list-inside space-y-2">
              <li>Visit the Social Internship Page.</li>
              <li>Choose any task listed.</li>
              <li>Apply directly using the provided link.</li>
            </ol>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm" variant="outline">
                <Link to="/social-internship">
                  Social Internship
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        )
      },
      {
        question: "What programs can I choose?",
        answer: (
          <div className="space-y-4">
            <h3 className="font-medium text-unifor-purple">Before applying for your ID card, choose your program:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>🧑‍💼 Campus to Corporate</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>🛡️ Frontliner</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>📘 Others listed on the website</div>
              </li>
            </ul>
            <p>All program details are available on:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>The Program Page</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>The Official Documents Page</div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm" variant="outline">
                <Link to="/programs">
                  Programs
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
              <Button asChild size="sm" variant="outline">
                <Link to="/official-documents">
                  Official Documents
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        )
      },
      {
        question: "How can I pitch my ideas through Pitchburg?",
        answer: (
          <div className="space-y-4">
            <h3 className="font-medium text-unifor-purple">Students can:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Participate in Pitchburg</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Pitch their ideas/projects for The Stanburg Award</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Unlock new career opportunities</div>
              </li>
            </ul>
            <p>Full details are mentioned on the Pitchburg Page on the website.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm" variant="outline">
                <Link to="/uni-pitch">
                  Pitchburg
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        )
      }
    ]
  },
  {
    title: "Support & Resources",
    icon: <Lightbulb className="h-5 w-5 text-unifor-purple" />,
    items: [
      {
        question: "What support does Uniford offer to scholars?",
        answer: (
          <div className="space-y-4">
            <h3 className="font-medium text-unifor-purple">Our scholars can request:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Internships</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Certifications</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Letters of Recommendation (LOR)</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Mentorship & Guidance</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Educational Resources</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Referrals</div>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Access to Portals</div>
              </div>
            </div>
            <p className="italic">Just reach out via the Help Desk anytime.</p>
          </div>
        )
      },
      {
        question: "Where can I find information about application processes?",
        answer: (
          <div className="space-y-4">
            <h3 className="font-medium text-unifor-purple">For any details related to:</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Application openings</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Task submission & evaluation</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Result announcements</div>
              </li>
            </ul>
            <p>Check:</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Updates Page</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Official Documents Page</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Or connect directly with the Help Desk</div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild size="sm" variant="outline">
                <Link to="/official-documents">
                  Official Documents
                  <ExternalLink className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        )
      },
      {
        question: "How does the 24×7 Help Desk support work?",
        answer: (
          <div className="space-y-4">
            <p>We provide round-the-clock assistance via WhatsApp Help Desk.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Share your UID and ask any query or doubt.</div>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-unifor-purple mt-0.5" />
                <div>Our team is here to assist you at any time.</div>
              </li>
            </ul>
          </div>
        )
      }
    ]
  }
];

const FAQAccordion = () => {
  const [selectedFAQ, setSelectedFAQ] = useState<{
    question: string;
    answer: React.ReactNode;
  } | null>(null);

  return (
    <>
      <div className="bg-white shadow-md rounded-lg p-6 mb-10 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6 text-unifor-purple">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqCategories.map((category, categoryIndex) => (
            <AccordionItem key={categoryIndex} value={`category-${categoryIndex}`} className="border-b border-muted">
              <AccordionTrigger className="py-4 flex items-center">
                <div className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pl-7 py-2 space-y-2">
                  {category.items.map((item, index) => (
                    <div 
                      key={index} 
                      className="py-2 px-3 hover:bg-muted rounded-md cursor-pointer transition-colors flex items-center justify-between"
                      onClick={() => setSelectedFAQ(item)}
                    >
                      <span className="font-medium">{item.question}</span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <Dialog open={!!selectedFAQ} onOpenChange={() => setSelectedFAQ(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-unifor-purple">
              {selectedFAQ?.question}
            </DialogTitle>
            <DialogDescription>
              <div className="mt-4 text-foreground">
                {selectedFAQ?.answer}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default FAQAccordion;
