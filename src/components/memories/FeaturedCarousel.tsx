
import React, { useRef, useEffect } from 'react';
import { memoriesData } from '@/data/memoriesData';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const featuredItems = memoriesData.filter(item => item.isFeatured);
  
  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const { current: container } = scrollContainerRef;
    const scrollAmount = container.clientWidth * 0.75;
    
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (featuredItems.length === 0) return null;

  return (
    <div className="my-12 relative">
      <h2 className="text-2xl font-bold mb-6">Featured Highlights</h2>
      
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-6 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {featuredItems.map((item) => (
            <div key={item.id} className="min-w-[300px] sm:min-w-[400px] snap-start">
              <Card className="overflow-hidden h-full">
                <div className="relative aspect-video">
                  <img 
                    src={item.thumbnail} 
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                    <p className="text-white/80 text-sm">{item.type === 'video' ? 'Watch video' : 'View details'}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-500">
                    Celebrating milestones with #Uniford | www.uniford.org
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
