
import React, { useState } from 'react';
import { leaders } from '@/data/leadersData';
import LeaderCard from './LeaderCard';
import LeaderModal from './LeaderModal';
import { Leader } from '@/types/leaders';

interface LeadersGridProps {
  filter: string;
}

const LeadersGrid: React.FC<LeadersGridProps> = ({ filter }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredLeaders = filter === 'all' 
    ? leaders 
    : leaders.filter(leader => leader.type === filter);

  const openModal = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalOpen(true);
  };

  return (
    <section className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredLeaders.map((leader) => (
          <LeaderCard 
            key={leader.id} 
            leader={leader}
            onViewProfile={() => openModal(leader)}
          />
        ))}
      </div>
      
      {filteredLeaders.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <h3 className="text-2xl font-semibold text-gray-700">No leaders found</h3>
          <p className="mt-2 text-gray-500">Try selecting a different category</p>
        </div>
      )}
      
      {selectedLeader && (
        <LeaderModal 
          leader={selectedLeader}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
};

export default LeadersGrid;
