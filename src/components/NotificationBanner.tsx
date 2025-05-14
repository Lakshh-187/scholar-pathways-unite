
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#a344f8] relative w-full py-3 px-4 md:px-6 shadow-md">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-grow">
          <span className="text-white">⚡</span>
          <p className="text-white text-sm md:text-base font-medium">
            📢 Limited-time offer! Unlock a year of limitless creativity with all annual plans at 50% off.
          </p>
        </div>
        <div className={cn("flex items-center gap-3", "md:ml-4")}>
          <a href="https://id.uniford.org" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="bg-white text-[#a344f8] hover:bg-gray-100 hover:text-[#a344f8] whitespace-nowrap font-medium">
              View Plan
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
