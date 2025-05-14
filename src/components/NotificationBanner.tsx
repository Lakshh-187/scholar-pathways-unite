
import React, { useState } from 'react';
import { X, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#a344f8] relative w-full py-3 px-4 md:px-6 shadow-md">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-grow">
          <Zap className="h-5 w-5 text-white" />
          <p className="text-white text-sm md:text-base font-medium">
            📢 Important Notice: Students with Uniford Memberships or ID Cards can now access premium content, scholar portals, and services at id.uniford.org.
          </p>
        </div>
        <div className={cn("flex items-center gap-3", "md:ml-4")}>
          <a href="https://id.uniford.org" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="bg-white text-[#a344f8] hover:bg-gray-100 hover:text-[#a344f8] whitespace-nowrap font-medium">
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
