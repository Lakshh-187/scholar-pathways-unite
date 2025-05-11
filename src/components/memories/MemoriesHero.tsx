
import React from 'react';
import { Search } from 'lucide-react';

interface MemoriesHeroProps {
  onSearch: (query: string) => void;
}

const MemoriesHero: React.FC<MemoriesHeroProps> = ({ onSearch }) => {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 to-blue-700 text-white">
      <div className="absolute inset-0 opacity-20 bg-[url('/lovable-uploads/417c6974-656e-4cc8-9b02-9500b11d325b.png')] bg-center bg-cover mix-blend-overlay"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Moments that Made Uniford</h1>
          <p className="text-xl mb-10 text-gray-100">
            Explore the timeless memories, achievements, and milestones of Uniford Foundation through galleries, videos, news articles, and student stories.
          </p>
          
          <div className="relative max-w-lg mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
              placeholder="Search #Uniford media..."
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoriesHero;
