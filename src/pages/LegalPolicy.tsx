
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Shield, Info, Receipt, Database, Gavel, Copyright } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Legal = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Legal Information</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This page contains important legal information about Uniford Foundation, including our terms and conditions, 
            privacy policy, and other legal policies that govern your use of our platform.
          </p>
        </div>

        <Tabs defaultValue="terms" className="w-full">
          <TabsList className="grid grid-cols-3 sm:grid-cols-6 mb-8">
            <TabsTrigger value="terms" className="flex flex-col items-center gap-1 py-3 md:px-4">
              <Gavel className="h-5 w-5" />
              <span className="text-xs">Terms</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex flex-col items-center gap-1 py-3 md:px-4">
              <Shield className="h-5 w-5" />
              <span className="text-xs">Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="company" className="flex flex-col items-center gap-1 py-3 md:px-4">
              <Info className="h-5 w-5" />
              <span className="text-xs">Company</span>
            </TabsTrigger>
            <TabsTrigger value="refund" className="flex flex-col items-center gap-1 py-3 md:px-4">
              <Receipt className="h-5 w-5" />
              <span className="text-xs">Refunds</span>
            </TabsTrigger>
            <TabsTrigger value="data" className="flex flex-col items-center gap-1 py-3 md:px-4">
              <Database className="h-5 w-5" />
              <span className="text-xs">Data</span>
            </TabsTrigger>
            <TabsTrigger value="copyright" className="flex flex-col items-center gap-1 py-3 md:px-4">
              <Copyright className="h-5 w-5" />
              <span className="text-xs">Copyright</span>
            </TabsTrigger>
          </TabsList>

          <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
            <TabsContent value="terms" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-youth-purple flex items-center">
                  <Gavel className="mr-2 h-5 w-5" /> Terms and Conditions
                </h2>
                <Separator className="my-4" />
                <p className="text-gray-600 mb-4">
                  These Terms and Conditions govern your use of the Uniford Foundation platform and constitute a legally binding agreement between you and Uniford Foundation Stories.
                </p>
              </div>

              <ScrollArea className="h-[400px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">1. Acceptance of Terms</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        By accessing or using Uniford Foundation, you agree to be bound by these Terms and Conditions, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">2. User Registration</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Some portions of Uniford Foundation may require user registration. You agree to provide accurate and complete information when creating an account and to update such information to keep it accurate and current. You are responsible for maintaining the confidentiality of your account password and for all activities that occur under your account.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">3. Content Guidelines</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                      Uniford Foundation allows users to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content you post and its compliance with our community guidelines.
                      </p>
                      <p className="mb-4">
                        Prohibited content includes but is not limited to content that is illegal, harmful, threatening, abusive, harassing, tortious, defamatory, vulgar, obscene, libelous, invasive of another's privacy, or hateful.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">4. Intellectual Property</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        The content on Uniford Foundation, including without limitation, the text, graphics, photos, sounds, music, videos, interactive features and the like and the trademarks, service marks and logos contained therein, are owned by or licensed to Uniford Foundation, subject to copyright and other intellectual property rights under the law.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">5. Limitation of Liability</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                      Uniford Foundation shall not be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="privacy" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-youth-purple flex items-center">
                  <Shield className="mr-2 h-5 w-5" /> Privacy Policy
                </h2>
                <Separator className="my-4" />
                <p className="text-gray-600 mb-4">
                  At Uniford Foundation, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our platform.
                </p>
              </div>
              
              <ScrollArea className="h-[400px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">1. Information We Collect</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We may collect personal information that you voluntarily provide when using our platform, such as your name, email address, and other contact details. We may also automatically collect certain information about your device, including your IP address, browser type, and operating system.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">2. How We Use Your Information</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We may use the information we collect to provide, maintain, and improve our services, to communicate with you, to monitor and analyze usage and trends, and to personalize and enhance your experience with our platform.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">3. Information Sharing</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except as described in this Privacy Policy. This does not include trusted third parties who assist us in operating our platform, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">4. Cookies and Similar Technologies</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We may use cookies, web beacons, and similar technologies to collect information about your browsing activities and to enhance your experience on our platform. You can configure your browser to reject cookies, but this may limit your ability to use certain features of our platform.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">5. Your Rights and Choices</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        You have the right to access, correct, or delete your personal information. You can do this by accessing your account settings or by contacting us directly. You may also opt out of receiving promotional communications from us by following the unsubscribe instructions in those communications.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="company" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-youth-purple flex items-center">
                  <Info className="mr-2 h-5 w-5" /> Company Details
                </h2>
                <Separator className="my-4" />
                <p className="text-gray-600 mb-4">
                  Learn more about Uniford Foundation Stories, our mission, and how to get in touch with us.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">About Uniford Foundation</h3>
                  <p className="text-gray-700 mb-4">
                  Uniford Foundation is dedicated to transform Students & Institutes in International Standard covering culture, education, and the issues that shape their future. Founded in 2024, we've been dedicated to amplifying the voices of young people and providing them with relevant, engaging content.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Legal Entity</h3>
                  <p className="text-gray-700 mb-2">Uniford Foundation, Inc.</p>
                  <p className="text-gray-700 mb-2">Registration Number:  U85500HR2024NPL120586</p>
                  <p className="text-gray-700">Incorporated in Central, India</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                  <p className="text-gray-700 mb-2">CIA , Delhi Road , sre ,Delhi , India</p>
                  <p className="text-gray-700 mb-2">Email: info@uniford.org</p>
                  <p className="text-gray-700 mb-2">Phone: +917347099610</p>
                  <p className="text-gray-700">Business Hours: Monday to Friday, 9:00 AM - 5:00 PM PST</p>
                </div>
                
              
              </div>
            </TabsContent>

            <TabsContent value="refund" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-youth-purple flex items-center">
                  <Receipt className="mr-2 h-5 w-5" /> Refund Policy
                </h2>
                <Separator className="my-4" />
                <p className="text-gray-600 mb-4">
                  Our refund policy outlines the conditions under which refunds are issued for premium subscriptions and other paid services on Uniford Foundation.
                </p>
              </div>
              
              <ScrollArea className="h-[400px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">1. Subscription Refunds</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        If you are dissatisfied with your premium subscription, you may request a refund within 14 days of the initial purchase. Refunds will be processed to the original payment method used for the purchase. After the 14-day period, we do not provide refunds for partial subscription periods.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">2. Digital Content Purchases</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Due to the nature of digital content, all purchases of individual articles, guides, or other digital content are final and non-refundable unless required by applicable law. If you experience technical issues accessing purchased content, please contact our support team.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">3. Event Tickets</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Refunds for event tickets are available up to 72 hours before the scheduled event. After this time, tickets are non-refundable but may be transferred to another person. If an event is canceled or rescheduled by Uniford Foundation, you will be entitled to a full refund or the option to attend the rescheduled event.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">4. How to Request a Refund</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        To request a refund, please contact our support team at info@uniford.org with your order details and reason for the refund request. We aim to process all refund requests within 5-7 business days.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">5. Discretionary Refunds</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        In certain circumstances, we may issue discretionary refunds outside of our standard policy. These will be evaluated on a case-by-case basis. We reserve the right to modify this refund policy at any time, with changes taking effect when posted on this page.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="data" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-youth-purple flex items-center">
                  <Database className="mr-2 h-5 w-5" /> Data Policy
                </h2>
                <Separator className="my-4" />
                <p className="text-gray-600 mb-4">
                  Our Data Policy outlines how we collect, use, process, and store data on the Uniford Foundation platform.
                </p>
              </div>
              
              <ScrollArea className="h-[400px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">1. Data Collection and Usage</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We collect various types of data, including personal information provided during registration, usage data generated through interactions with our platform, and technical data such as IP addresses and device information. This data is used to provide, improve, and personalize our services, conduct analytics, and ensure the security of our platform.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">2. Data Storage and Security</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We implement appropriate technical and organizational measures to protect the data we collect. This includes encryption of sensitive information, regular security assessments, and restricted access to personal data. We store data on secure servers located in the India and maintain backup systems to prevent data loss.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">3. Data Retention</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We retain your personal data for as long as necessary to fulfill the purposes outlined in our Privacy Policy, unless a longer retention period is required or permitted by law. After this period, we will either delete or anonymize your information, or if this is not possible, securely store your information and isolate it from further use.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">4. Third-Party Data Processing</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        We may engage third-party service providers to perform functions on our behalf, such as hosting services, analytics, and customer support. These service providers have access to personal information needed to perform their functions but are obligated not to disclose or use it for other purposes. We ensure that all third-party processors comply with data protection regulations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">5. International Data Transfers</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction. If you are located outside the India and choose to provide information to us, please note that we transfer the data to the India and process it there.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </TabsContent>

            <TabsContent value="copyright" className="mt-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-youth-purple flex items-center">
                  <Copyright className="mr-2 h-5 w-5" /> Copyright Policy
                </h2>
                <Separator className="my-4" />
                <p className="text-gray-600 mb-4">
                  Our Copyright Policy outlines how we protect intellectual property rights on the Uniford Foundation platform and process copyright infringement claims.
                </p>
              </div>
              
              <ScrollArea className="h-[400px] pr-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg font-medium">1. Ownership of Content</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        All content published by Uniford Foundation, including articles, images, videos, graphics, logos, and design elements, is owned by Uniford Foundation or its content partners and is protected by copyright laws. Unauthorized use, reproduction, or distribution of this content is prohibited and may result in legal action.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg font-medium">2. User-Generated Content</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        When you submit content to Uniford Foundation, you retain ownership of your intellectual property rights. However, by submitting content, you grant Uniford Foundation a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, and distribute your content in any existing or future media formats.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg font-medium">3. Fair Use</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                      Uniford Foundation respects the principles of fair use, which allows limited use of copyrighted material without permission for purposes such as criticism, comment, news reporting, teaching, scholarship, or research. Any content used under fair use principles will be properly attributed to its original source.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg font-medium">4. DMCA Compliance</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                      Uniford Foundation complies with the Digital Millennium Copyright Act (DMCA). If you believe that your copyrighted work has been used in a way that constitutes copyright infringement, please submit a DMCA notification to our designated copyright agent at info@uniford.org.
                      </p>
                      <p className="mb-4">
                        Your notification must include: identification of the copyrighted work, identification of the allegedly infringing material, your contact information, a statement of good faith belief that the use is not authorized, a statement that the information in the notification is accurate, and your physical or electronic signature.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg font-medium">5. Counter-Notification</AccordionTrigger>
                    <AccordionContent>
                      <p className="mb-4">
                        If material you posted has been removed as a result of a DMCA notification and you believe the material was misidentified or removed in error, you may submit a counter-notification. Instructions for submitting a counter-notification will be included in the removal notice sent to you.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </ScrollArea>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Legal;
