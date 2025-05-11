
import React, { useState } from 'react';
import { memoriesData } from '@/data/memoriesData';
import { MediaItem } from '@/types/memories';
import MediaCard from '@/components/memories/MediaCard';
import MediaModal from '@/components/memories/MediaModal';

interface MemoriesGridProps {
  filter: string;
  searchQuery: string;
}

const MemoriesGrid: React.FC<MemoriesGridProps> = ({ filter, searchQuery }) => {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredData = memoriesData.filter(item => {
    // Filter by category
    if (filter !== 'all') {
      const filterMap: Record<string, string> = {
        'photos': 'photo',
        'videos': 'video',
        'news': 'news',
        'conferences': 'conference',
        'achievements': 'achievement',
        'stories': 'story',
        'competitions': 'competition'
      };
      
      if (item.type !== filterMap[filter]) return false;
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return (
        item.title.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.tags.some(tag => tag.toLowerCase().includes(query)) ||
        (item.location && item.location.toLowerCase().includes(query))
      );
    }
    
    return true;
  });

  const openModal = (media: MediaItem) => {
    setSelectedMedia(media);
    setShowModal(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length > 0 ? (
          filteredData.map(item => (
            <MediaCard key={item.id} media={item} onClick={() => openModal(item)} />
          ))
        ) : (
          <div className="col-span-full py-16 text-center">
            <h3 className="text-xl font-semibold text-gray-800">No items found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
          </div>
        )}
      </div>

      {filteredData.length > 0 && (
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-800 font-medium transition-colors">
            Load More
          </button>
        </div>
      )}

      {selectedMedia && (
        <MediaModal 
          media={selectedMedia} 
          isOpen={showModal} 
          onClose={() => setShowModal(false)} 
        />
      )}
    </>
  );
};

export default MemoriesGrid;
