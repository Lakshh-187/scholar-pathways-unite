import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Linkedin, Mail } from 'lucide-react';

const WelcomePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show popup after 1 second
    const timer = setTimeout(() => {
      setOpen(true);
    }, 1000);

    // Auto close after 4 seconds
    const autoCloseTimer = setTimeout(() => {
      setOpen(false);
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCloseTimer);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-unifor-purple to-unifor-dark-purple text-white border-0">
        <div className="relative text-center p-6">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 text-white/70 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          
          <div className="mb-4">
            <h2 className="text-2xl font-bold mb-2">Welcome to Uniford!</h2>
            <p className="text-lg font-medium text-yellow-300 mb-4">
              "Bringing International Standard in Indian Schools"
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-white/90 mb-6">
              Connect with us and be part of the educational revolution
            </p>
            
            <div className="flex flex-col gap-3">
              <a
                href="https://www.linkedin.com/company/unifordfoundation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Follow us on LinkedIn
                </Button>
              </a>
              
              <a
                href="mailto:info@uniford.org"
                className="w-full"
              >
                <Button variant="outline" className="w-full border-white text-white hover:bg-white hover:text-unifor-purple">
                  <Mail className="mr-2 h-4 w-4" />
                  Email us at info@uniford.org
                </Button>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WelcomePopup;