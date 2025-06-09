
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from '@/hooks/use-toast';
import { initializePayment } from '@/utils/razorpay';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ScholarTimeline from "@/components/scholar/ScholarTimeline";
import ScholarPaymentSection from "@/components/scholar/ScholarPaymentSection";
import ScholarFAQs from "@/components/scholar/ScholarFAQs";
import { 
  CreditCard, 
  Upload, 
  Heart, 
  Building, 
  Clock, 
  CheckCircle,
  Users,
  Award,
  Shield,
  Coins,
  FileText,
  HelpCircle,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

const IDCardServices = () => {
  const [activeTab, setActiveTab] = useState("id-card");
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [donationAmount, setDonationAmount] = useState("");
  const [membershipFee, setMembershipFee] = useState("");
  const { toast } = useToast();

  const handleIDCardPayment = async () => {
    try {
      await initializePayment({
        amount: 500,
        name: "Scholar ID Card",
        onSuccess: (response) => {
          setPaymentComplete(true);
          toast({
            title: "Payment Successful!",
            description: "Your ID Card registration fee has been paid. Payment ID: " + response.razorpay_payment_id,
          });
        }
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  };

  const handleDonationPayment = async (amount: number) => {
    try {
      await initializePayment({
        amount: amount,
        name: "Uniford Council Donation",
        onSuccess: (response) => {
          toast({
            title: "Donation Successful!",
            description: `Thank you for your ₹${amount} donation! Payment ID: ${response.razorpay_payment_id}`,
          });
        }
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  };

  const handleUIECPayment = async () => {
    const amount = parseInt(membershipFee);
    if (!amount || amount < 13) {
      toast({
        title: "Invalid Amount",
        description: "Minimum fee is ₹13",
        variant: "destructive"
      });
      return;
    }

    try {
      await initializePayment({
        amount: amount,
        name: "UIEC Membership",
        onSuccess: (response) => {
          toast({
            title: "UIEC Membership Successful!",
            description: `Your institution is now a UIEC member! Payment ID: ${response.razorpay_payment_id}`,
          });
        }
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  };

  const donationTiers = [
    { amount: 13, title: "Supporter", benefits: "Digital Certificate" },
    { amount: 130, title: "Contributor", benefits: "Certificate + Updates" },
    { amount: 1300, title: "Patron", benefits: "All above + Recognition" },
    { amount: 13000, title: "Champion", benefits: "All above + Special Access" },
    { amount: 130000, title: "Founder", benefits: "All above + Board Recognition" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="bg-white text-unifor-purple mb-4">COMPREHENSIVE SERVICES</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Scholar ID Card & Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Complete platform for Scholar ID Cards, Donations, and Institutional Memberships
              </p>
            </div>
          </div>
        </section>

        {/* Main Content - 3 in 1 Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="id-card" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
              <TabsList className="grid grid-cols-3 w-full mb-8">
                <TabsTrigger value="id-card" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  <span>Scholar ID Card</span>
                </TabsTrigger>
                <TabsTrigger value="donation" className="flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  <span>Donations</span>
                </TabsTrigger>
                <TabsTrigger value="uiec" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>UIEC Membership</span>
                </TabsTrigger>
              </TabsList>

              {/* Scholar ID Card Tab */}
              <TabsContent value="id-card" className="space-y-8">
                {/* Scholar ID Process Tabs */}
                <Tabs defaultValue="process" className="space-y-8">
                  <TabsList className="grid grid-cols-4 w-full">
                    <TabsTrigger value="process" className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      <span>Process</span>
                    </TabsTrigger>
                    <TabsTrigger value="internship" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Social Internship</span>
                    </TabsTrigger>
                    <TabsTrigger value="timeaid" className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Time Aid</span>
                    </TabsTrigger>
                    <TabsTrigger value="faq" className="flex items-center gap-2">
                      <HelpCircle className="h-4 w-4" />
                      <span>FAQs</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="process" className="space-y-8">
                    <ScholarTimeline />
                    <ScholarPaymentSection />
                    
                    {/* Quick Actions Section */}
                    <div className="grid md:grid-cols-2 gap-8 mt-8">
                      <Card className="bg-gradient-to-br from-unifor-purple to-unifor-dark-purple text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <Users className="h-6 w-6" />
                            Social Internship Program
                          </CardTitle>
                          <CardDescription className="text-white/90">
                            Complete meaningful social work and get your ₹500 registration fee refunded
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-6 text-white/80">
                            Join our Social Internship program to make a positive impact while earning your fee refund through community service.
                          </p>
                          <Button 
                            className="w-full bg-white text-unifor-purple hover:bg-gray-100 font-semibold"
                            asChild
                          >
                            <Link to="/social-internship">
                              Join Social Internship
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="bg-gradient-to-br from-unifor-blue to-unifor-purple text-white border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <CreditCard className="h-6 w-6" />
                            Apply for Programs
                          </CardTitle>
                          <CardDescription className="text-white/90">
                            Explore and apply for various Uniford programs and opportunities
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-6 text-white/80">
                            Discover amazing opportunities including research programs, career development, and more.
                          </p>
                          <Button 
                            className="w-full bg-white text-unifor-blue hover:bg-gray-100 font-semibold"
                            asChild
                          >
                            <Link to="/apply">
                              Explore Applications
                              <ExternalLink className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="internship">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <h2 className="text-2xl font-semibold mb-4">Social Internship Program</h2>
                          <p className="text-gray-600">
                            Complete a social internship to get your registration fee refunded and gain valuable experience.
                          </p>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="text-lg font-medium mb-3">Benefits</h3>
                              <ul className="space-y-2 text-gray-600">
                                <li>• Get your ₹500 registration fee refunded</li>
                                <li>• Gain practical experience</li>
                                <li>• Earn a valuable certificate with Certificate ID</li>
                                <li>• Build your network</li>
                              </ul>
                            </div>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="text-lg font-medium mb-3">How to Apply</h3>
                              <p className="text-gray-600 mb-4">
                                Apply for social internship opportunities through our platform.
                              </p>
                              <Button 
                                className="w-full bg-unifor-purple hover:bg-unifor-dark-purple"
                                asChild
                              >
                                <Link to="/social-internship">
                                  View Internship Opportunities
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="timeaid">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <h2 className="text-2xl font-semibold mb-4">Time Aid Policy</h2>
                          <div className="bg-unifor-light-purple/10 p-6 rounded-lg">
                            <h3 className="text-lg font-medium mb-4">Choose Your Path</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-medium mb-3">Option 1: Submit Certificate</h4>
                                <p className="text-gray-600 mb-4">
                                  Submit your social internship certificate with Certificate ID within 3 days of receiving your ID kit.
                                </p>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="mt-2 border-amber-500 text-amber-600 hover:bg-amber-50"
                                  asChild
                                >
                                  <Link to="/apply">
                                    Apply Now
                                  </Link>
                                </Button>
                              </div>
                              <div className="bg-white p-6 rounded-lg shadow-md">
                                <h4 className="font-medium mb-3">Option 2: Pay Fee</h4>
                                <p className="text-gray-600 mb-4">
                                  Pay ₹500 within 3 days of receiving your ID kit.
                                </p>
                                <Button 
                                  variant="outline" 
                                  size="sm" 
                                  className="mt-2 border-amber-500 text-amber-600 hover:bg-amber-50"
                                  onClick={handleIDCardPayment}
                                >
                                  Pay Fee
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="faq">
                    <ScholarFAQs />
                  </TabsContent>
                </Tabs>
              </TabsContent>

              {/* Donation Tab */}
              <TabsContent value="donation" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Heart className="h-6 w-6 text-red-500" />
                      Support Uniford Council
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">
                      Your donations help us continue our mission of empowering scholars and building a better universe.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                      {donationTiers.map((tier) => (
                        <Card key={tier.amount} className="border-2 hover:border-unifor-purple transition-colors">
                          <CardContent className="p-6 text-center">
                            <Coins className="h-8 w-8 text-unifor-purple mx-auto mb-3" />
                            <h3 className="text-xl font-bold text-unifor-dark-purple mb-2">₹{tier.amount}</h3>
                            <Badge className="mb-3">{tier.title}</Badge>
                            <p className="text-sm text-gray-600 mb-4">{tier.benefits}</p>
                            <Button 
                              onClick={() => handleDonationPayment(tier.amount)}
                              className="w-full bg-unifor-purple hover:bg-unifor-dark-purple"
                            >
                              Donate ₹{tier.amount}
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Card className="bg-unifor-light-purple/10">
                      <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-4">Custom Donation Amount</h3>
                        <div className="flex gap-4">
                          <Input
                            type="number"
                            placeholder="Enter amount"
                            value={donationAmount}
                            onChange={(e) => setDonationAmount(e.target.value)}
                            className="flex-1"
                          />
                          <Button 
                            onClick={() => handleDonationPayment(parseInt(donationAmount))}
                            disabled={!donationAmount || parseInt(donationAmount) < 1}
                            className="bg-unifor-purple hover:bg-unifor-dark-purple"
                          >
                            Donate
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* UIEC Tab */}
              <TabsContent value="uiec" className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building className="h-6 w-6 text-blue-600" />
                      Uniford Institutional Educational Council (UIEC)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-3">Join UIEC Network</h3>
                      <p className="text-gray-600 mb-4">
                        Connect your institution with our global network of educational excellence.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium mb-2">Benefits Include:</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Global institutional network access</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Educational resource sharing</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Collaborative programs</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                              <span>Priority support</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <Label htmlFor="membershipFee" className="text-sm font-medium">
                            Membership Fee (Minimum ₹13)
                          </Label>
                          <Input
                            id="membershipFee"
                            type="number"
                            placeholder="Enter amount (min ₹13)"
                            value={membershipFee}
                            onChange={(e) => setMembershipFee(e.target.value)}
                            className="mb-4"
                          />
                          <Button 
                            onClick={handleUIECPayment}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                            disabled={!membershipFee || parseInt(membershipFee) < 13}
                          >
                            <Building className="mr-2 h-4 w-4" />
                            Join UIEC Network
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default IDCardServices;
