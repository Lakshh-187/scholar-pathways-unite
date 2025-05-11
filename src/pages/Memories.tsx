
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import MemoriesHero from '@/components/memories/MemoriesHero';
import MemoriesTabs from '@/components/memories/MemoriesTabs';
import MemoriesGrid from '@/components/memories/MemoriesGrid';
import FeaturedCarousel from '@/components/memories/FeaturedCarousel';
import SEOBooster from '@/components/memories/SEOBooster';

const Memories = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <Helmet>
        <title>Uniford Foundation - Memories & Gallery | www.uniford.org</title>
        <meta 
          name="description" 
          content="Explore the timeless memories, achievements, and milestones of Uniford Foundation through galleries, videos, news articles, and student stories."
        />
        <meta property="og:title" content="Memories & Gallery | Uniford Foundation" />
        <meta property="og:description" content="View highlights of Uniford Foundation's global events, conferences, scholar programs, and leadership stories." />
        <meta property="og:image" content="https://www.uniford.org/uniford-main/gallery-cover.jpg" />
        <meta property="og:url" content="https://www.uniford.org/memories" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="keywords" content="Uniford, UnifordFoundation, gallery, memories, scholar achievements, foundation events" />
      </Helmet>
      
      <div className="min-h-screen">
        <MemoriesHero onSearch={setSearchQuery} />
        <div className="container mx-auto px-4 py-12">
          <MemoriesTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <FeaturedCarousel />
          <MemoriesGrid filter={activeTab} searchQuery={searchQuery} />
        </div>
        <SEOBooster />
      </div>
    </Layout>
  );
};

export default Memories;
