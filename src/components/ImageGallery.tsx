import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Move } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import unifordInfographic from '@/assets/uniford-infographic.jpg';
import unifordPresentation from '@/assets/uniford-presentation.png';
import unifordMeeting from '@/assets/uniford-meeting.png';
import unifordStudent from '@/assets/uniford-student.png';

const images = [
  {
    src: unifordInfographic,
    alt: "Uniford Foundation Structure",
    title: "Organization Overview"
  },
  {
    src: unifordPresentation,
    alt: "Uniford Presentation",
    title: "Innovation in Action"
  },
  {
    src: unifordMeeting,
    alt: "Uniford Team Meeting",
    title: "Collaborative Excellence"
  },
  {
    src: unifordStudent,
    alt: "Uniford Student Achievement",
    title: "Student Success"
  }
];

const ImageGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragPosition, setDragPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - dragPosition.x,
      y: e.clientY - dragPosition.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setDragPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <>
      {/* Thumbnail Grid */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-4 animate-fade-in-right">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => {
                setCurrentImage(index);
                setIsOpen(true);
              }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 backdrop-blur-sm border border-white/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-32 md:h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-white text-xs font-medium truncate">{image.title}</p>
                  </div>
                </div>
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-1">
                    <Move className="h-3 w-3 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Floating Action Button */}
        <div className="absolute -bottom-4 -right-4">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-primary to-secondary text-white rounded-full p-3 shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <Move className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Modern Moveable Popup */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent 
          className="fixed max-w-4xl w-[90vw] h-[80vh] p-0 border-0 bg-black/95 backdrop-blur-xl rounded-2xl overflow-hidden"
          style={{
            transform: `translate(${dragPosition.x}px, ${dragPosition.y}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
          }}
        >
          {/* Draggable Header */}
          <div
            className="relative bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border-b border-white/10 p-4 cursor-move"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Move className="h-4 w-4 text-white/60" />
                <h3 className="text-white font-semibold">{images[currentImage].title}</h3>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Image Display */}
          <div className="relative flex-1 flex items-center justify-center p-4">
            <img
              src={images[currentImage].src}
              alt={images[currentImage].alt}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            
            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-2 transition-all duration-300"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Bottom Controls */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border-t border-white/10 p-4">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentImage ? 'bg-primary scale-125' : 'bg-white/30 hover:bg-white/50'
                    }`}
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm">
                {currentImage + 1} / {images.length}
              </span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;