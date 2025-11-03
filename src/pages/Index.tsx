import React from "react";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import WelcomePopup from "@/components/WelcomePopup";
import CredibilityCarousel from "@/components/CredibilityCarousel";
import BISSSection from "@/components/BISSSection";
import GreatPlaceToLearnSection from "@/components/GreatPlaceToLearnSection";
import UNCIFSDGSection from "@/components/UNCIFSDGSection";
import OneMillionOneBillionSection from "@/components/OneMillionOneBillionSection";
import BackedOrganizationsCarousel from "@/components/BackedOrganizationsCarousel";
import ProgramsInMotionCarousel from "@/components/ProgramsInMotionCarousel";

const Index = () => {
  return (
    <Layout>
      <WelcomePopup />
      <Helmet>
        <title>Uniford Foundation - Transforming Education Through UNCIF Network | Educational Innovation</title>
        <meta name="description" content="Uniford Foundation: Leading educational transformation through UNCIF Network. Empowering students with scholarships, research opportunities, and global connections. Join 50,000+ scholars worldwide." />
        <meta name="keywords" content="Uniford, UNCIF, education, scholarship, Uniford Foundation, student opportunities, educational transformation, research, global network, academic excellence" />
        <meta property="og:title" content="Uniford Foundation - Transforming Education Through UNCIF Network" />
        <meta property="og:description" content="Join the Uniford movement transforming education worldwide. Access scholarships, research opportunities, and global connections through our UNCIF Network." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Uniford Foundation - Educational Transformation" />
        <meta name="twitter:description" content="Transforming education through UNCIF Network. Join 50,000+ scholars in our global educational revolution." />
        <link rel="canonical" href="https://uniford.org" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection />

      {/* BISS - Bringing International Standard & Safety */}
      <BISSSection />

      {/* Great Place to Learn */}
      <GreatPlaceToLearnSection />

      {/* UNCIF SDG Certification */}
      <UNCIFSDGSection />

      {/* 1M 1B Mission */}
      <OneMillionOneBillionSection />

      {/* Our Backed Organizations - Auto Swapping */}
      <BackedOrganizationsCarousel />

      {/* Programs in Motion - Auto Swapping */}
      <ProgramsInMotionCarousel />

      {/* Credibility Carousel */}
      <CredibilityCarousel />
    </Layout>
  );
};

export default Index;
