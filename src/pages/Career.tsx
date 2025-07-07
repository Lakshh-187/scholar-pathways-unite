
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
        <title>Career Opportunities at Uniford Foundation | UNCIF Network Jobs</title>
        <meta name="description" content="Explore career opportunities at Uniford Foundation and through UNCIF network partners. Join our mission to transform education globally with meaningful career paths." />
        <meta name="keywords" content="Uniford careers, UNCIF jobs, educational careers, Uniford Foundation jobs, non-profit careers, education sector opportunities" />
        <meta property="og:title" content="Career Opportunities - Uniford Foundation" />
        <meta property="og:description" content="Build your career with Uniford Foundation. Join our global mission to transform education through innovative programs." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org/career" />
        <link rel="canonical" href="https://uniford.org/career" />
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
