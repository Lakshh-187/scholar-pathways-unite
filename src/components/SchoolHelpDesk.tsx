import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface Message {
  text: string;
  isBot: boolean;
}

interface UserData {
  category?: string;
  designation?: string;
  website?: string;
  country?: string;
  whatsapp?: string;
  email?: string;
}

const categories = [
  { id: '1', name: 'NEP-2020' },
  { id: '2', name: 'Safety' },
  { id: '3', name: 'Standard' },
  { id: '4', name: 'SDG Certification' },
  { id: '5', name: 'Incubation Cell' },
  { id: '6', name: 'School Cinema' },
  { id: '7', name: 'UIRAD' },
  { id: '8', name: 'UTHA' },
];

const designations = [
  { id: '1', name: 'Director' },
  { id: '2', name: 'Principal' },
  { id: '3', name: 'Program Lead' },
  { id: '4', name: 'Officer' },
];

const SchoolHelpDesk = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Welcome to UNIFORD School Help Desk 👋\n\nHow may we support you today?\n\nPlease choose a category:\n1️⃣ NEP-2020\n2️⃣ Safety\n3️⃣ Standard\n4️⃣ SDG Certification\n5️⃣ Incubation Cell\n6️⃣ School Cinema\n7️⃣ UIRAD\n8️⃣ UTHA\n\nReply with the number.",
      isBot: true,
    },
  ]);
  const [currentStep, setCurrentStep] = useState<'category' | 'designation' | 'details' | 'urgent' | 'callback'>('category');
  const [userData, setUserData] = useState<UserData>({});
  const [inputValue, setInputValue] = useState('');

  const addMessage = (text: string, isBot: boolean) => {
    setMessages(prev => [...prev, { text, isBot }]);
  };

  const handleCategorySelection = (number: string) => {
    const category = categories.find(c => c.id === number);
    if (category) {
      setUserData(prev => ({ ...prev, category: category.name }));
      addMessage(number, false);
      addMessage(
        "Thank you!\n\nPlease choose your designation:\n\n1️⃣ Director\n2️⃣ Principal\n3️⃣ Program Lead\n4️⃣ Officer\n\nReply with the number.",
        true
      );
      setCurrentStep('designation');
    }
  };

  const handleDesignationSelection = (number: string) => {
    const designation = designations.find(d => d.id === number);
    if (designation) {
      setUserData(prev => ({ ...prev, designation: designation.name }));
      addMessage(number, false);
      addMessage(
        "Please share the following details in one message:\n\n1. School Website\n2. Country\n3. WhatsApp Number\n4. Email ID\n\nFormat example:\nWebsite: www.greenvalleyschool.org\nCountry: India\nWhatsApp: +91XXXXXXXXXX\nEmail: school@example.com",
        true
      );
      setCurrentStep('details');
    }
  };

  const parseDetails = (text: string) => {
    const lines = text.split('\n');
    const details: Partial<UserData> = {};
    
    lines.forEach(line => {
      const lower = line.toLowerCase();
      if (lower.includes('website:')) {
        details.website = line.split(':')[1]?.trim();
      } else if (lower.includes('country:')) {
        details.country = line.split(':')[1]?.trim();
      } else if (lower.includes('whatsapp:')) {
        details.whatsapp = line.split(':')[1]?.trim();
      } else if (lower.includes('email:')) {
        details.email = line.split(':')[1]?.trim();
      }
    });
    
    return details;
  };

  const handleDetailsSubmission = (text: string) => {
    const details = parseDetails(text);
    setUserData(prev => ({ ...prev, ...details }));
    addMessage(text, false);
    addMessage(
      "Thank you! Your information has been registered with UNIFORD.\n\nIf your issue is urgent, please send your query in the format below 👇\n\nURGENT QUERY\nSchool Name:\nCategory:\nIssue:\nSend to: +917347099610",
      true
    );
    addMessage(
      "Would you like UNIFORD team to call you back?\n\nReply YES for callback support.\n(We respond within 24 hours, max 48 hours.)",
      true
    );
    setCurrentStep('callback');
  };

  const handleCallbackRequest = (text: string) => {
    if (text.toLowerCase() === 'yes') {
      addMessage(text, false);
      
      // Prepare WhatsApp message
      const message = `*New School Help Desk Request*

*Category:* ${userData.category}
*Designation:* ${userData.designation}
*School Website:* ${userData.website}
*Country:* ${userData.country}
*WhatsApp:* ${userData.whatsapp}
*Email:* ${userData.email}

*Callback Requested:* Yes

_Please contact within 24-48 hours_`;

      const whatsappUrl = `https://wa.me/917347099610?text=${encodeURIComponent(message)}`;
      
      addMessage(
        "Your callback request has been submitted.\n\nOur team will contact you within 24 hours (max 48 hours).\n\nThank you for connecting with UNIFORD.\n\nClick the button below to send your request:",
        true
      );
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1000);
    } else {
      addMessage(text, false);
      addMessage(
        "Thank you for connecting with UNIFORD. If you need any assistance, feel free to reach out anytime!",
        true
      );
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const message = inputValue.trim();
    
    if (currentStep === 'category') {
      handleCategorySelection(message);
    } else if (currentStep === 'designation') {
      handleDesignationSelection(message);
    } else if (currentStep === 'details') {
      handleDetailsSubmission(message);
    } else if (currentStep === 'callback') {
      handleCallbackRequest(message);
    }

    setInputValue('');
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="Open Help Desk"
        >
          <MessageCircle size={28} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle size={24} />
              <div>
                <h3 className="font-semibold">UNIFORD Help Desk</h3>
                <p className="text-xs opacity-90">First Safety & Standard</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 rounded-full p-1 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg whitespace-pre-line ${
                    msg.isBot
                      ? 'bg-white text-gray-800 shadow-sm'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-white rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};

export default SchoolHelpDesk;
