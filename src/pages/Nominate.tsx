import React from "react";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import NominateHero from "@/components/nominate/NominateHero";
import NominateCategories from "@/components/nominate/NominateCategories";
import CandidateSchool from "@/components/nominate/CandidateSchool";
import NominateProcess from "@/components/nominate/NominateProcess";
import NominateCTA from "@/components/nominate/NominateCTA";

const Nominate = () => {
  return (
    <Layout>
      <Helmet>
        <title>Nominate Your School | Great School Cinema - SSSA Recognition</title>
        <meta 
          name="description" 
          content="Nominate your school for global recognition through Great School Cinema. Get certified as a Great Place to Learn and featured on TEDx, Better India & international platforms." 
        />
        <meta 
          name="keywords" 
          content="school nomination, Great Place to Learn, SSSA, school recognition, education excellence, TEDx schools, Better India schools" 
        />
        <link rel="canonical" href="https://uniford.org/nominate" />
      </Helmet>

      <NominateHero />
      <NominateCategories />
      <CandidateSchool />
      <NominateProcess />
      <NominateCTA />
    </Layout>
  );
};

export default Nominate;
