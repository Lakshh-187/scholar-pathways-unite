
import React from 'react';
import { Star } from 'lucide-react';
import { leaders } from '@/data/leadersData';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const TeamSpotlight: React.FC = () => {
  const spotlightedLeaders = leaders.filter(leader => leader.isSpotlighted);
  
  if (spotlightedLeaders.length === 0) {
    return null;
  }
  
  const currentMonth = new Date().toLocaleString('default', { month: 'long' });
  const currentYear = new Date().getFullYear();

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-3xl my-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 opacity-10">
        <svg width="400" height="400" viewBox="0 0 200 200">
          <path
            fill="#FFD700"
            d="M81.5,59.1 L100,25.8 L118.5,59.1 L156.6,65.2 L128.3,91.1 L136,128.8 L100,111 L64,128.8 L71.7,91.1 L43.4,65.2 Z"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <Star className="h-8 w-8 text-yellow-500 fill-yellow-500" />
          <h2 className="text-3xl font-bold text-gray-800">Team Spotlight of the Month</h2>
        </div>
        
        <p className="text-lg text-gray-600 mb-10 max-w-3xl">
          Celebrating exceptional contributors for {currentMonth} {currentYear} who have gone above and beyond in their roles.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {spotlightedLeaders.map((leader) => (
            <Card key={leader.id} className="overflow-hidden bg-white border-0 shadow-md hover:shadow-xl transition-shadow">
              <div className="h-2 bg-yellow-400"></div>
              <CardContent className="p-6">
                <div className="flex gap-4 items-center mb-4">
                  <Avatar className="h-16 w-16 border-2 border-yellow-200">
                    {leader.image ? (
                      <AvatarImage src={leader.image} alt={leader.name} />
                    ) : (
                      <AvatarFallback className="bg-gradient-to-br from-yellow-400 to-amber-500">
                        {getInitials(leader.name)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  
                  <div>
                    <h3 className="font-semibold text-xl">{leader.name}</h3>
                    <p className="text-gray-600">{leader.role}</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center text-yellow-800 font-medium mb-2">
                    <span className="mr-1">🏅</span>
                    <span>Top Contributor – {currentMonth} {currentYear}</span>
                  </div>
                  <p className="text-gray-700">{leader.spotlightReason}</p>
                </div>
                
                <p className="text-gray-600 italic">"{leader.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSpotlight;
