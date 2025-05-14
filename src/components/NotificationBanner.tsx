
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

const NotificationBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-[#a344f8] fixed top-0 left-0 z-[1000] w-full py-3 px-4 md:px-6 shadow-md">
      <div className="container mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        <div className="flex items-center gap-3 flex-grow">
          <p className="text-white text-sm md:text-base font-medium">
            Important Notice: Students with Uniford Memberships or ID Cards can now access premium content, scholar portals, and services at
            <a href="https://id.uniford.org" className="text-white underline">....id.uniford.org</a>.
          </p>
        </div>
        <div className={cn("flex items-center gap-3", "md:ml-4")}>
          <a href="https://id.uniford.org" className="bg-white text-[#a344f8] px-4 py-2 rounded-md no-underline font-semibold" target="_blank" rel="noopener noreferrer">
            Go to Portal
          </a>
          <button onClick={() => setIsVisible(false)} className="text-white/80 hover:text-white transition-colors" aria-label="Close notification">
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
