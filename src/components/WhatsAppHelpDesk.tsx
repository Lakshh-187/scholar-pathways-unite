
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

interface WhatsAppHelpDeskProps {
  phoneNumber?: string;
  defaultMessage?: string;
  position?: 'bottom-right' | 'bottom-left';
  showOnMobile?: boolean;
}

const WhatsAppHelpDesk: React.FC<WhatsAppHelpDeskProps> = ({
  phoneNumber = '7347099610',
  defaultMessage = 'Hello! I have a question.',
  position = 'bottom-right',
  showOnMobile = true,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const positionClasses = {
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
  };

  const handleOpenWhatsApp = () => {
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "WhatsApp Opening",
      description: "Connecting you to our help desk via WhatsApp",
    });
    
    setIsOpen(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div 
        className={`fixed z-50 ${positionClasses[position]} ${!showOnMobile && 'hidden md:block'}`}
      >
        {isOpen ? (
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-64 animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-medium">Uniford Help Desk</h3>
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
              Have questions? Chat with our support team on WhatsApp for immediate assistance.
            </p>
            <Button 
              className="w-full bg-green-500 hover:bg-green-600 flex items-center justify-center gap-2"
              onClick={handleOpenWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
        ) : (
          <Button
            className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 shadow-lg flex items-center justify-center"
            onClick={() => setIsOpen(true)}
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
        )}
      </div>
    </>
  );
};

export default WhatsAppHelpDesk;
