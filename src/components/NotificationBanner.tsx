
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-gradient-to-r from-unifor-purple to-accent relative w-full py-3 px-4 md:px-6">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-white text-xl">⚡</span>
          <p className="text-white text-sm md:text-base">
            📢 Important Notice: Students with Uniford Memberships or ID Cards can now access premium content, scholar portals, and services at id.uniford.org.
          </p>
        </div>
        <div className="flex items-center gap-3 ml-auto">
          <a href="https://id.uniford.org" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="bg-white text-unifor-purple hover:bg-gray-100 hover:text-unifor-purple whitespace-nowrap">
              Go to Portal
            </Button>
          </a>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-white/80 hover:text-white transition-colors"
            aria-label="Close notification"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
