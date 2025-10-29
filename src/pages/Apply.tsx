
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, AlertTriangle } from "lucide-react";
import ApplyHero from "@/components/apply/ApplyHero";
import SDGRecognition from "@/components/apply/SDGRecognition";
import AccreditationLicense from "@/components/apply/AccreditationLicense";
import CouncilMember from "@/components/apply/CouncilMember";

const Apply = () => {
  return (
    <Layout>
      <Helmet>
        <title>Apply to Uniford Foundation | SDG Recognition, Accreditation & Council Membership</title>
        <meta name="description" content="Apply for UNCIF SDG Recognition & Certification, UIRAD Accreditation & Licensing, or Council Membership. Transform your school through comprehensive assessment frameworks with no hidden fees." />
        <meta name="keywords" content="SDG certification, school accreditation, UNCIF recognition, UIRAD license, council membership, sustainable development goals, school standards" />
        <meta property="og:title" content="Apply for SDG Recognition, Accreditation & Council Membership - UNCIF" />
        <meta property="og:description" content="Choose from 17 SDG categories, apply for comprehensive UIRAD-UNCIF Accreditation, or join our Council Member program." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org/apply" />
        <link rel="canonical" href="https://uniford.org/apply" />
      </Helmet>
      
      <ApplyHero />
      
      {/* Important Notice */}
      <div className="container mx-auto px-4 py-8">
        <Alert className="max-w-4xl mx-auto border-primary/50 bg-primary/5">
          <div className="flex gap-4">
            <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <AlertDescription className="text-base">
                <strong className="text-primary">Important Notice:</strong> Uniford has <strong>no membership or accreditation fees</strong>. This program is fully funded by our philanthropic network. Be safe from fraudsters who may ask for fees in our organization's name. All official communications come through verified channels only.
              </AlertDescription>
            </div>
            <AlertTriangle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          </div>
        </Alert>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="sdg" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-2xl mx-auto">
            <TabsTrigger value="sdg">SDG Recognition</TabsTrigger>
            <TabsTrigger value="accreditation">Accreditation & License</TabsTrigger>
            <TabsTrigger value="council">Council Member</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sdg">
            <SDGRecognition />
          </TabsContent>
          
          <TabsContent value="accreditation">
            <AccreditationLicense />
          </TabsContent>
          
          <TabsContent value="council">
            <CouncilMember />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Apply;
