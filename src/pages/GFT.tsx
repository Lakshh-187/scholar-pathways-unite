
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import GFTHero from '@/components/gft/GFTHero';
import GFTModel from '@/components/gft/GFTModel';
import CategoryFunding from '@/components/gft/CategoryFunding';
import UNCIFCertification from '@/components/gft/UNCIFCertification';
import FundingExamples from '@/components/gft/FundingExamples';
import PartnerNetwork from '@/components/gft/PartnerNetwork';
import ProjectShowcase from '@/components/gft/ProjectShowcase';
import ApplicationProcess from '@/components/gft/ApplicationProcess';

const GFT = () => {
  return (
    <Layout>
      <Helmet>
        <title>GFT - Grant Funding Technology | UNCIF Certified Funding Solutions</title>
        <meta name="description" content="GFT by Uniford Foundation - Access grant funding through UNCIF certified technology platform. Get funding for educational projects, research, and institutional development." />
        <meta name="keywords" content="GFT, grant funding, UNCIF funding, educational grants, Uniford Foundation, project funding, research grants, institutional funding" />
        <meta property="og:title" content="GFT - Grant Funding Technology Platform" />
        <meta property="og:description" content="Revolutionary funding platform by Uniford Foundation. Access grants through UNCIF certified technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org/gft" />
        <link rel="canonical" href="https://uniford.org/gft" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-b from-unifor-light-purple/20 to-white">
        <GFTHero />
        <GFTModel />
        <CategoryFunding />
        <FundingExamples />
        <ProjectShowcase />
        <UNCIFCertification />
        <PartnerNetwork />
        <ApplicationProcess />
      </div>
    </Layout>
  );
};

export default GFT;
