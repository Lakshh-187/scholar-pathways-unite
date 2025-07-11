
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApplicationForm from "@/components/apply/ApplicationForm";
import SubmissionForm from "@/components/apply/SubmissionForm";
import LeaveRequestForm from "@/components/apply/LeaveRequestForm";
import IDCardRequestForm from "@/components/apply/IDCardRequestForm";
import SocialInternshipForm from "@/components/apply/SocialInternshipForm";
import ApplyHero from "@/components/apply/ApplyHero";

const Apply = () => {
  return (
    <Layout>
      <Helmet>
        <title>Apply to Uniford Foundation | Scholar Programs | UNCIF Opportunities</title>
        <meta name="description" content="Apply for Uniford Foundation scholarships and programs. Access ID card services, social internships, and UNCIF network opportunities. Start your journey today." />
        <meta name="keywords" content="Uniford application, scholar program, UNCIF opportunities, student application, Uniford Foundation, scholarships, internships" />
        <meta property="og:title" content="Apply to Uniford Foundation - Start Your Journey" />
        <meta property="og:description" content="Join thousands of scholars worldwide. Apply for Uniford programs and unlock global opportunities through UNCIF network." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org/apply" />
        <link rel="canonical" href="https://uniford.org/apply" />
      </Helmet>
      <ApplyHero />
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="application" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="application">Application</TabsTrigger>
            <TabsTrigger value="submission">Submission</TabsTrigger>
            <TabsTrigger value="leave">Leave & Request</TabsTrigger>
            <TabsTrigger value="idcard">ID Card Request</TabsTrigger>
            <TabsTrigger value="internship">Social Internship</TabsTrigger>
          </TabsList>
          
          <TabsContent value="application">
            <ApplicationForm />
          </TabsContent>
          
          <TabsContent value="submission">
            <SubmissionForm />
          </TabsContent>
          
          <TabsContent value="leave">
            <LeaveRequestForm />
          </TabsContent>
          
          <TabsContent value="idcard">
            <IDCardRequestForm />
          </TabsContent>
          
          <TabsContent value="internship">
            <SocialInternshipForm />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default Apply;
