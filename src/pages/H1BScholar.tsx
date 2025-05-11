
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import H1BHeroSection from '@/components/h1b/H1BHeroSection';
import ResourceExplorer from '@/components/h1b/ResourceExplorer';
import DonateResource from '@/components/h1b/DonateResource';
import RequestResource from '@/components/h1b/RequestResource';

const H1BScholar = () => {
  return (
    <Layout>
      <Helmet>
        <title>H-1B Scholar Resources | Uniford</title>
      </Helmet>
      
      <div className="min-h-screen">
        <H1BHeroSection />
        <ResourceExplorer />
        <DonateResource />
        <RequestResource />
      </div>
    </Layout>
  );
};

export default H1BScholar;
