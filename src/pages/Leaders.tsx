
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import LeadersHero from '@/components/leaders/LeadersHero';
import LeadersTabs from '@/components/leaders/LeadersTabs';
import LeadersGrid from '@/components/leaders/LeadersGrid';
import TeamSpotlight from '@/components/leaders/TeamSpotlight';
import LeadersMap from '@/components/leaders/LeadersMap';
import JoinCTA from '@/components/leaders/JoinCTA';
import OrganizationStructure from '@/components/leaders/OrganizationStructure';

const Leaders = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <Layout>
      <Helmet>
        <title>Leaders | Uniford</title>
      </Helmet>
      
      <div className="min-h-screen">
        <LeadersHero />
        <div className="container mx-auto px-4 py-12">
          <LeadersTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <LeadersGrid filter={activeTab} />
          <TeamSpotlight />
          <LeadersMap />
          <OrganizationStructure />
        </div>
        <JoinCTA />
      </div>
    </Layout>
  );
};

export default Leaders;
