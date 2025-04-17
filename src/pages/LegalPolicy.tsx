
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Shield, Gavel, FileCheck } from "lucide-react";

const LegalPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-unifor-dark-purple">
            Legal Policies
          </h1>
          
          <Tabs defaultValue="terms" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="terms" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span className="hidden sm:inline">Terms & Conditions</span>
                <span className="sm:hidden">Terms</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span className="hidden sm:inline">Privacy Policy</span>
                <span className="sm:hidden">Privacy</span>
              </TabsTrigger>
              <TabsTrigger value="refund" className="flex items-center gap-2">
                <Gavel className="h-4 w-4" />
                <span className="hidden sm:inline">Refund Policy</span>
                <span className="sm:hidden">Refund</span>
              </TabsTrigger>
              <TabsTrigger value="compliance" className="flex items-center gap-2">
                <FileCheck className="h-4 w-4" />
                <span className="hidden sm:inline">Compliance</span>
                <span className="sm:hidden">Legal</span>
              </TabsTrigger>
            </TabsList>

            <Card className="mt-6">
              <CardContent className="p-6">
                <ScrollArea className="h-[500px] w-full rounded-md">
                  <TabsContent value="terms">
                    <h2 className="text-2xl font-bold mb-4">Terms & Conditions</h2>
                    <div className="space-y-4">
                      <p>Last updated: {new Date().toLocaleDateString()}</p>
                      {/* Add your terms and conditions content here */}
                      <p>Welcome to Uniford Foundation. By accessing our services, you agree to these terms...</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="privacy">
                    <h2 className="text-2xl font-bold mb-4">Privacy Policy</h2>
                    <div className="space-y-4">
                      <p>Last updated: {new Date().toLocaleDateString()}</p>
                      {/* Add your privacy policy content here */}
                      <p>Your privacy is important to us. This policy outlines how we collect and use data...</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="refund">
                    <h2 className="text-2xl font-bold mb-4">Refund Policy</h2>
                    <div className="space-y-4">
                      <p>Last updated: {new Date().toLocaleDateString()}</p>
                      {/* Add your refund policy content here */}
                      <p>Our refund policy ensures fair treatment of all scholars and participants...</p>
                    </div>
                  </TabsContent>

                  <TabsContent value="compliance">
                    <h2 className="text-2xl font-bold mb-4">Legal Compliance</h2>
                    <div className="space-y-4">
                      <p>Last updated: {new Date().toLocaleDateString()}</p>
                      {/* Add your compliance content here */}
                      <p>We maintain strict compliance with educational and non-profit regulations...</p>
                    </div>
                  </TabsContent>
                </ScrollArea>
              </CardContent>
            </Card>
          </Tabs>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPolicy;
