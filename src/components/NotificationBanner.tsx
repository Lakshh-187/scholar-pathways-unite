
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NotificationBannerProps {
  className?: string;
}

const NotificationBanner: React.FC<NotificationBannerProps> = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className={cn(
      "bg-[#a349f3] fixed top-0 left-0 z-[1000] w-full h-12 flex items-center justify-center shadow-md transition-all duration-300 ease-in-out",
      className
    )}>
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Main content - centered */}
        <div className="flex-1 flex items-center justify-center">
          <p className="text-white text-sm font-medium text-center">
            Students with Uniford ID Cards can access premium services at{' '}
            <a href="https://id.uniford.org" className="text-white underline hover:no-underline">
              id.uniford.org
            </a>
          </p>
        </div>
        
        {/* Right side controls */}
        <div className="flex items-center gap-3 ml-4">
          <a 
            href="https://id.uniford.org" 
            className="bg-white text-[#a349f3] px-3 py-1 rounded text-sm font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Go to Portal
          </a>
          <button 
            onClick={() => setIsVisible(false)} 
            className="text-white/80 hover:text-white transition-colors p-1" 
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBanner;
