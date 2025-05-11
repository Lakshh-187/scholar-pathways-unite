
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import CareerHeroSection from '@/components/career/CareerHeroSection';
import OpportunityGrid from '@/components/career/OpportunityGrid';
import CompanyPolicies from '@/components/career/CompanyPolicies';
import SupportSection from '@/components/career/SupportSection';

const Career = () => {
  return (
    <Layout>
      <Helmet>
        <title>Career Opportunities | Uniford</title>
      </Helmet>
      
      <div className="min-h-screen">
        <CareerHeroSection />
        <OpportunityGrid />
        <CompanyPolicies />
        <SupportSection />
      </div>
    </Layout>
  );
};

export default Career;
