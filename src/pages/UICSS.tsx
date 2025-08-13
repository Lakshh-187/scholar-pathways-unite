import React from "react";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import UICSSHero from "@/components/uicss/UICSSHero";
import UICSSBenefitsStrip from "@/components/uicss/UICSSBenefitsStrip";
import UICSSPrograms from "@/components/uicss/UICSSPrograms";
import UICSSMedia from "@/components/uicss/UICSSMedia";
import UICSSResources from "@/components/uicss/UICSSResources";
import UICSSToolkits from "@/components/uicss/UICSSToolkits";
import UICSSSafetyTopics from "@/components/uicss/UICSSSafetyTopics";
import UICSSMembership from "@/components/uicss/UICSSMembership";

const UICSS: React.FC = () => {
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/uicss` : 'https://uniford.org/uicss';

  const orgSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'UICSS - International Council for School Safety',
    url: canonical,
    parentOrganization: {
      '@type': 'Organization',
      name: 'Uniford Foundation',
    },
  };

  return (
    <Layout>
      <Helmet>
        <title>UICSS – International Council for School Safety</title>
        <meta name="description" content="UICSS by Uniford Foundation: safer schools through resources, certifications, workshops, and community engagement." />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
      </Helmet>

      <UICSSHero />
      <UICSSBenefitsStrip />
      <UICSSPrograms />
      <UICSSMedia />
      <UICSSSafetyTopics />
      <UICSSResources />
      <UICSSToolkits />
      <UICSSMembership />
    </Layout>
  );
};

export default UICSS;
