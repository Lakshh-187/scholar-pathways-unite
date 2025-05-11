
import React from 'react';
import { MediaItem } from '@/types/memories';
import { Card, CardContent } from '@/components/ui/card';
import { Play, Newspaper, Image, Heart } from 'lucide-react';

interface MediaCardProps {
  media: MediaItem;
  onClick: () => void;
}

const MediaCard: React.FC<MediaCardProps> = ({ media, onClick }) => {
  const getMediaIcon = () => {
    switch (media.type) {
      case 'video':
        return <Play className="h-8 w-8" />;
      case 'news':
        return <Newspaper className="h-8 w-8" />;
      default:
        return <Image className="h-8 w-8" />;
    }
  };

  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-lg cursor-pointer group"
      onClick={onClick}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* Thumbnail image with blur-up loading */}
        <img 
          src={media.thumbnail}
          alt={media.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Media type indicator */}
        <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
          {getMediaIcon()}
        </div>

        {/* Featured badge if applicable */}
        {media.isFeatured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
            Featured
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity flex items-end p-4">
          <div className="text-white">
            <h3 className="font-bold text-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
              View Details
            </h3>
          </div>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg line-clamp-1">{media.title}</h3>
        <p className="text-gray-500 text-sm mt-1">{new Date(media.date).toLocaleDateString()}</p>
        <p className="mt-2 text-sm line-clamp-2 text-gray-700">{media.description}</p>
        
        <div className="flex items-center justify-between mt-3 text-sm">
          <div className="flex items-center text-gray-600">
            <Heart className="h-4 w-4 mr-1" />
            <span>{media.likes}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {media.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-700">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MediaCard;
