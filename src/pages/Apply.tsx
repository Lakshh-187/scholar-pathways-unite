
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SDGRecognition from "@/components/apply/SDGRecognition";
import AccreditationLicense from "@/components/apply/AccreditationLicense";

const Apply = () => {
  return (
    <Layout>
      <Helmet>
        <title>Apply to Uniford Foundation | SDG Recognition & Accreditation</title>
        <meta name="description" content="Apply for UNCIF SDG Recognition & Certification or UIRAD Accreditation & Licensing. Transform your school through comprehensive assessment frameworks." />
        <meta name="keywords" content="SDG certification, school accreditation, UNCIF recognition, UIRAD license, sustainable development goals, school standards" />
        <meta property="og:title" content="Apply for SDG Recognition & Accreditation - UNCIF" />
        <meta property="og:description" content="Choose from 17 SDG categories or apply for comprehensive UIRAD-UNCIF Accreditation & Licensing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org/apply" />
        <link rel="canonical" href="https://uniford.org/apply" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="sdg" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
            <TabsTrigger value="sdg">SDG Recognition</TabsTrigger>
            <TabsTrigger value="accreditation">Accreditation & License</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sdg">
            <SDGRecognition />
          </TabsContent>
          
          <TabsContent value="accreditation">
            <AccreditationLicense />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Apply;
