
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import FAQAccordion from '@/components/faq/FAQAccordion';
import QueryForm from '@/components/faq/QueryForm';
import LiveUpdates from '@/components/faq/LiveUpdates';

const FAQUpdates = () => {
  return (
    <Layout>
      <Helmet>
        <title>FAQ & Updates | Uniford</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Frequently Asked Questions
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find answers to common questions and stay updated with the latest announcements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <FAQAccordion />
            <QueryForm />
          </div>
          <div className="lg:col-span-1">
            <LiveUpdates />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQUpdates;
