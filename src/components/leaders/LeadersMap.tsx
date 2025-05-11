
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { leaders } from '@/data/leadersData';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const LeadersMap: React.FC = () => {
  const leadersWithCoordinates = leaders.filter(leader => leader.coordinates);
  
  if (leadersWithCoordinates.length === 0) {
    return null;
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };
  
  return (
    <section className="py-16">
      <div className="flex items-center gap-3 mb-8">
        <MapPin className="h-7 w-7 text-blue-500" />
        <h2 className="text-3xl font-bold text-gray-800">Leader Map</h2>
      </div>
      
      <p className="text-lg text-gray-600 mb-10 max-w-3xl">
        Our leaders are making an impact across the globe. Explore their locations.
      </p>
      
      <div className="aspect-[16/9] bg-blue-50 rounded-lg overflow-hidden relative shadow-md">
        <div className="absolute inset-0 bg-blue-100 bg-opacity-50">
          <img 
            src="https://i.imgur.com/JXJ3Ae8.png" 
            alt="World Map" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        
        {leadersWithCoordinates.map((leader) => {
          // Convert lat/lng to relative positions (simplified approach)
          // In a real implementation, you'd use proper map projection
          const x = ((leader.coordinates?.lng || 0) + 180) / 360 * 100;
          const y = (90 - (leader.coordinates?.lat || 0)) / 180 * 100;
          
          return (
            <Popover key={leader.id}>
              <PopoverTrigger asChild>
                <button
                  className="absolute w-5 h-5 bg-red-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform z-10"
                  style={{ 
                    left: `${x}%`, 
                    top: `${y}%`,
                    boxShadow: '0 0 0 4px rgba(239, 68, 68, 0.3)' 
                  }}
                  aria-label={`${leader.name} location: ${leader.location}`}
                >
                  <span className="sr-only">{leader.name}</span>
                </button>
              </PopoverTrigger>
              <PopoverContent side="top" className="w-64 p-0 border-0 shadow-lg">
                <div className="flex gap-3 p-3 items-center bg-white rounded-t-lg border-b">
                  <Avatar className="h-10 w-10">
                    {leader.image ? (
                      <AvatarImage src={leader.image} alt={leader.name} />
                    ) : (
                      <AvatarFallback>
                        {getInitials(leader.name)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{leader.name}</h4>
                    <p className="text-sm text-gray-600">{leader.role}</p>
                  </div>
                </div>
                <div className="p-3 bg-gray-50 rounded-b-lg">
                  <div className="flex items-center text-sm text-gray-600 mb-1">
                    <MapPin size={14} className="mr-1" />
                    <span>{leader.location}</span>
                  </div>
                  <p className="text-xs text-gray-500 italic">"{leader.quote}"</p>
                </div>
              </PopoverContent>
            </Popover>
          );
        })}
      </div>
    </section>
  );
};

export default LeadersMap;
