import React from "react";
import { Helmet } from "react-helmet";
import Layout from "@/components/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Users, AlertTriangle } from "lucide-react";
import GetInvolvedHero from "@/components/get-involved/GetInvolvedHero";
import AdvisorsPage from "@/components/get-involved/AdvisorsPage";
import MentorsPage from "@/components/get-involved/MentorsPage";
import FrontlinersPage from "@/components/get-involved/FrontlinersPage";

const GetInvolved = () => {
  return (
    <Layout>
      <Helmet>
        <title>Get Involved - Join Our Mission | Uniford Foundation</title>
        <meta name="description" content="Join Uniford as an Advisor, Mentor, or Frontliner. Shape the future of education through strategic leadership, implementation, and grassroots impact." />
        <meta name="keywords" content="education advisor, school mentor, student ambassador, education volunteer, teaching opportunities, education leadership" />
        <meta property="og:title" content="Get Involved - Advisors, Mentors & Frontliners - Uniford" />
        <meta property="og:description" content="Choose from 3 impact pathways: Advisors (Leadership Council), Mentors (Implementation Leaders), or Frontliners (Impact Ambassadors)." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://uniford.org/get-involved" />
        <link rel="canonical" href="https://uniford.org/get-involved" />
      </Helmet>
      
      <GetInvolvedHero />
      
      {/* Important Notice */}
      <div className="container mx-auto px-4 py-8">
        <Alert className="max-w-4xl mx-auto border-primary/50 bg-primary/5">
          <div className="flex gap-4">
            <Users className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <AlertDescription className="text-base">
                <strong className="text-primary">Join Our Movement:</strong> All roles are <strong>volunteer-based positions</strong> focused on creating educational impact. We welcome passionate individuals committed to transforming schools and empowering students nationwide. Official communications come through verified channels only.
              </AlertDescription>
            </div>
            <AlertTriangle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
          </div>
        </Alert>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <Tabs defaultValue="advisors" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 max-w-2xl mx-auto">
            <TabsTrigger value="advisors">Advisors</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
            <TabsTrigger value="frontliners">Frontliners</TabsTrigger>
          </TabsList>
          
          <TabsContent value="advisors">
            <AdvisorsPage />
          </TabsContent>
          
          <TabsContent value="mentors">
            <MentorsPage />
          </TabsContent>
          
          <TabsContent value="frontliners">
            <FrontlinersPage />
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default GetInvolved;
