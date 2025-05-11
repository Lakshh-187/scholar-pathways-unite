
import React, { useState } from 'react';
import { Heart, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger 
} from '@/components/ui/collapsible';

const DonateResource = () => {
  const [isOpen, setIsOpen] = useState(false);
  const googleFormUrl = "https://forms.gle/example123"; // Replace with actual Google Form URL

  return (
    <section className="py-16 bg-white" id="donate">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <div className="inline-block bg-red-50 p-3 rounded-full mb-4">
            <Heart className="h-8 w-8 text-red-500" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Alumni – Donate a Resource
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Your small input can unlock someone's big dream.
          </p>
          
          <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="border rounded-lg overflow-hidden"
          >
            <CollapsibleTrigger asChild>
              <Button 
                variant="default"
                className="w-full bg-unifor-purple hover:bg-unifor-dark-purple py-6 rounded-none flex justify-between items-center"
              >
                <span className="text-lg font-medium">Share Your Knowledge & Resources</span>
                {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </Button>
            </CollapsibleTrigger>
            
            <CollapsibleContent className="bg-white p-4">
              <div className="py-4">
                <p className="mb-6 text-muted-foreground">
                  Thank you for contributing to our community! Please fill out the form below 
                  to share your experience, templates, guides or offer mentorship.
                </p>
                
                <div className="bg-gray-50 border p-4 rounded-md text-center">
                  <p className="mb-4">
                    Click the button below to access our Google Form for resource submission:
                  </p>
                  
                  <Button 
                    className="bg-unifor-blue hover:bg-blue-700"
                    onClick={() => window.open(googleFormUrl, '_blank')}
                  >
                    Open Google Form
                  </Button>
                  
                  <p className="mt-4 text-sm text-muted-foreground">
                    You'll be redirected to a secure Google Form to complete your submission.
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>
    </section>
  );
};

export default DonateResource;
