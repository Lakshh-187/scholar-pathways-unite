
import React from 'react';
import Layout from '@/components/Layout';
import GFTHero from '@/components/gft/GFTHero';
import GFTModel from '@/components/gft/GFTModel';
import CategoryFunding from '@/components/gft/CategoryFunding';
import UNCIFCertification from '@/components/gft/UNCIFCertification';
import FundingExamples from '@/components/gft/FundingExamples';
import PartnerNetwork from '@/components/gft/PartnerNetwork';
import ApplicationProcess from '@/components/gft/ApplicationProcess';

const GFT = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-unifor-light-purple/20 to-white">
        <GFTHero />
        <GFTModel />
        <CategoryFunding />
        <FundingExamples />
        <UNCIFCertification />
        <PartnerNetwork />
        <ApplicationProcess />
      </div>
    </Layout>
  );
};

export default GFT;
