
import React from 'react';
import { Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Leader } from '@/types/leaders';
import { Badge } from '@/components/ui/badge';

interface LeaderCardProps {
  leader: Leader;
  onViewProfile: () => void;
}

const LeaderCard: React.FC<LeaderCardProps> = ({ leader, onViewProfile }) => {
  const getTypeColor = (type: string) => {
    const colors = {
      volunteer: 'bg-green-100 text-green-800',
      team: 'bg-blue-100 text-blue-800',
      advisor: 'bg-purple-100 text-purple-800',
      mentor: 'bg-indigo-100 text-indigo-800',
      chairperson: 'bg-amber-100 text-amber-800',
      council: 'bg-red-100 text-red-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const downloadImpactReport = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Placeholder for download functionality
    alert(`Downloading impact report for ${leader.name}`);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg bg-white border border-gray-200 rounded-xl hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex items-center justify-center">
          {leader.image ? (
            <img 
              src={leader.image} 
              alt={leader.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-400 to-blue-500 flex items-center justify-center text-4xl font-bold text-white">
              {getInitials(leader.name)}
            </div>
          )}
        </div>
        
        {leader.isSpotlighted && (
          <div className="absolute top-3 left-3">
            <Badge className="bg-yellow-400 text-yellow-900 border-0">
              ✨ Spotlight
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="pt-5">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg line-clamp-1">{leader.name}</h3>
            <p className="text-sm text-gray-600">{leader.role}</p>
          </div>
          <Badge className={getTypeColor(leader.type)}>
            {leader.type.charAt(0).toUpperCase() + leader.type.slice(1)}
          </Badge>
        </div>
        
        <div className="mt-3">
          <p className="text-gray-600 text-sm italic line-clamp-2">"{leader.quote}"</p>
        </div>
        
        <div className="flex items-center mt-4 text-sm text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
          </svg>
          <span>{leader.location}</span>
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2 pt-0">
        <Button 
          variant="outline" 
          className="w-full" 
          onClick={onViewProfile}
        >
          View Profile
        </Button>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={downloadImpactReport}
          title="Download Impact Report"
        >
          <Download size={16} />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LeaderCard;
