
import React from 'react';

const SEOBooster: React.FC = () => {
  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Explore Uniford's Journey</h2>
          <p className="text-gray-700 mb-4">
            Discover the rich history and impactful moments of Uniford Foundation through our comprehensive gallery. 
            From scholar achievements and global conferences to volunteer initiatives and educational innovations, 
            our gallery showcases the essence of our mission.
          </p>
          <p className="text-gray-700 mb-4">
            Each image, video, and story represents our commitment to transforming education and 
            empowering scholars worldwide. Follow our journey at <a href="https://www.uniford.org" 
            className="text-blue-600 hover:underline">www.uniford.org</a>.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">#Uniford</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">#UnifordFoundation</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">#EducationTransformation</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">#ScholarAchievements</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">#GlobalImpact</span>
          </div>
        </div>
      </div>
      
      {/* Hidden SEO content */}
      <div className="sr-only">
        <p>
          Explore the official gallery of Uniford Foundation. View Uniford's photos, videos, news stories, 
          conferences, achievements, and scholar journeys at <a href="https://www.uniford.org">www.uniford.org</a>. 
          Tagged with #Uniford #UnifordFoundation for global reach.
        </p>
        <p>
          Uniford Foundation gallery includes images from Delhi, Mumbai, Singapore, and global locations. 
          Our media archives showcase educational innovations, scholar achievements, volunteer work, 
          and impactful stories from around the world.
        </p>
        <p>
          Browse through our collection of moments from Uniford Scholar Meets, Leadership Summits, 
          Educational Conferences, and Community Initiatives spanning from 2020 to 2025.
        </p>
      </div>
    </div>
  );
};

export default SEOBooster;
