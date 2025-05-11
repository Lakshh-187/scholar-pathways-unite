
import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Leader } from '@/types/leaders';
import { Download } from 'lucide-react';

interface LeaderModalProps {
  leader: Leader;
  isOpen: boolean;
  onClose: () => void;
}

const LeaderModal: React.FC<LeaderModalProps> = ({ leader, isOpen, onClose }) => {
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const downloadImpactReport = () => {
    // Placeholder for download functionality
    alert(`Downloading impact report for ${leader.name}`);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto p-0">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32 relative">
          <div className="absolute -bottom-16 left-6">
            <Avatar className="h-32 w-32 border-4 border-white">
              {leader.image ? (
                <AvatarImage src={leader.image} alt={leader.name} />
              ) : (
                <AvatarFallback className="text-3xl bg-gradient-to-br from-purple-400 to-blue-500">
                  {getInitials(leader.name)}
                </AvatarFallback>
              )}
            </Avatar>
          </div>
        </div>
        
        <div className="pt-20 px-6">
          <DialogHeader className="text-left">
            <DialogTitle className="text-2xl">{leader.name}</DialogTitle>
            <DialogDescription className="text-base font-medium text-foreground">
              {leader.role} • {leader.department}
            </DialogDescription>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="mr-1" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
              </svg>
              <span>{leader.location}</span>
            </div>
          </DialogHeader>
          
          <div className="mt-6 space-y-6">
            <section>
              <h3 className="text-lg font-semibold mb-2">Biography</h3>
              <p className="text-gray-700">{leader.bio}</p>
            </section>
            
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <p className="text-gray-700">{leader.education}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Experience</h3>
                <p className="text-gray-700">{leader.experience}</p>
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-2">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {leader.expertise.map((item, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
            
            <section>
              <h3 className="text-lg font-semibold mb-2">Notable Achievements</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                {leader.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </section>
            
            {(leader.linkedin || leader.website || leader.email) && (
              <section>
                <h3 className="text-lg font-semibold mb-2">Connect</h3>
                <div className="flex flex-wrap gap-3">
                  {leader.linkedin && (
                    <a 
                      href={leader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      LinkedIn
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                  
                  {leader.website && (
                    <a 
                      href={leader.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Website
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                  
                  {leader.email && (
                    <a 
                      href={`mailto:${leader.email}`} 
                      className="inline-flex items-center text-blue-600 hover:text-blue-800"
                    >
                      Email
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
        
        <DialogFooter className="p-6 bg-gray-50 rounded-b-lg">
          <Button 
            variant="default" 
            className="gap-2"
            onClick={downloadImpactReport}
          >
            <Download size={16} />
            Download Impact Report
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LeaderModal;
