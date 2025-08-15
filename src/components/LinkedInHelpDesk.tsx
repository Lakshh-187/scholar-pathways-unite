import React, { useState } from 'react';
import { Linkedin, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface LinkedInHelpDeskProps {
  position?: 'bottom-right' | 'bottom-left';
  showOnMobile?: boolean;
}

const LinkedInHelpDesk: React.FC<LinkedInHelpDeskProps> = ({
  position = 'bottom-left',
  showOnMobile = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const positionClasses = {
    'bottom-right': 'bottom-4 right-20',
    'bottom-left': 'bottom-4 left-20',
  };

  const handleOpenLinkedIn = (url: string, name: string) => {
    toast({
      title: "LinkedIn Opening",
      description: `Connecting you to ${name} on LinkedIn`,
    });
    
    setIsOpen(false);
    window.open(url, '_blank');
  };

  return (
    <>
      {/* LinkedIn Button */}
      <div 
        className={`fixed z-50 ${positionClasses[position]} ${!showOnMobile && 'hidden md:block'}`}
      >
        {isOpen ? (
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-64 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Connect with Us</h3>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-8 w-8 p-0" 
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Follow us on LinkedIn for updates and networking opportunities.
            </p>
            <div className="space-y-2">
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                onClick={() => handleOpenLinkedIn('https://www.linkedin.com/company/uicss', 'ICSS')}
              >
                <Linkedin className="h-5 w-5" />
                ICSS LinkedIn
              </Button>
              <Button 
                className="w-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2"
                onClick={() => handleOpenLinkedIn('https://www.linkedin.com/company/unifordfoundation', 'UNCIF')}
              >
                <Linkedin className="h-5 w-5" />
                UNCIF LinkedIn
              </Button>
            </div>
          </div>
        ) : (
          <Button
            className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <Linkedin className="h-6 w-6" />
          </Button>
        )}
      </div>
    </>
  );
};

export default LinkedInHelpDesk;