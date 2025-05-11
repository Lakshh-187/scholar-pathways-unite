
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LightbulbIcon } from 'lucide-react';

const PortfolioGuide = () => {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="portfolio-guide" className="border-none">
          <AccordionTrigger className="py-2 hover:no-underline">
            <div className="flex items-center text-amber-800">
              <LightbulbIcon className="h-5 w-5 mr-2 text-amber-600" />
              <span className="font-semibold">How to Create a Portfolio Link</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-amber-900 pt-2">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <span className="font-semibold">Use popular tools:</span> Notion, Google Drive (public view), 
                  Behance, or personal website builders like Carrd.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <span className="font-semibold">Check permissions:</span> Make sure your link is viewable to anyone with the link.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <span className="font-semibold">Include key elements:</span> Resume, past projects, certificates,
                  testimonials, and achievements.
                </span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">•</span>
                <span>
                  <span className="font-semibold">Bonus tip:</span> Add an intro video of yourself for a strong first impression!
                </span>
              </li>
              <li className="mt-3 text-amber-800 italic">
                Need help? Contact our support team at careers@uniford.org
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PortfolioGuide;
