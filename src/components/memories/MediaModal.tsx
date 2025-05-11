
import React from 'react';
import { 
  Dialog, DialogContent, DialogHeader, 
  DialogTitle, DialogDescription 
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { MediaItem } from '@/types/memories';
import { Download, Heart, Share2 } from 'lucide-react';

interface MediaModalProps {
  media: MediaItem;
  isOpen: boolean;
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalProps> = ({ media, isOpen, onClose }) => {
  const renderMedia = () => {
    switch (media.type) {
      case 'video':
        return (
          <div className="aspect-video w-full">
            <iframe
              src={media.videoUrl}
              title={media.title}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        );
      case 'news':
        return (
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Article Preview</h3>
            <p className="mb-4">{media.description}</p>
            <a 
              href={media.contentUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Read full article →
            </a>
          </div>
        );
      default:
        return (
          <div className="relative">
            <img
              src={media.thumbnail}
              alt={media.alt}
              className="w-full rounded-lg"
            />
          </div>
        );
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{media.title}</DialogTitle>
          <DialogDescription className="flex items-center text-sm">
            <span className="text-gray-500">{new Date(media.date).toLocaleDateString()}</span>
            {media.location && (
              <span className="ml-2 px-2 py-0.5 bg-gray-100 rounded-full text-gray-700 text-xs">
                {media.location}
              </span>
            )}
          </DialogDescription>
        </DialogHeader>
        
        <div className="my-4">
          {renderMedia()}
        </div>
        
        <div className="mt-4 space-y-4">
          <p className="text-gray-700">{media.description}</p>
          
          <div className="flex flex-wrap gap-2 pt-2">
            {media.tags.map((tag, index) => (
              <span key={index} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">
                #{tag}
              </span>
            ))}
            <a 
              href="https://www.uniford.org" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
            >
              www.uniford.org
            </a>
          </div>
          
          <div className="flex items-center text-sm text-gray-600 pt-2">
            <Heart className="h-4 w-4 mr-1 text-red-500" />
            <span>Loved by {media.likes}+ scholars</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-4 mt-2 border-t">
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            {media.downloadUrl && (
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Download className="h-4 w-4" />
                Download
              </Button>
            )}
          </div>
          <div>
            <Button variant="default" size="sm" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MediaModal;
