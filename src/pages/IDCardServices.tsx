
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from '@/hooks/use-toast';
import { initializePayment } from '@/utils/razorpay';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
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
  Coins
} from 'lucide-react';

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">ID Card & Membership Services</h1>
              <p className="text-lg md:text-xl mb-8">
                Complete platform for Scholar ID Cards, Donations, and Institutional Memberships
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
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
                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="h-6 w-6 text-unifor-purple" />
                        Pay Registration Fee
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-unifor-light-purple/10 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Registration Fee: ₹500</h3>
                        <p className="text-gray-600 mb-4">
                          Pay after receiving your ID card kit. This fee is refundable through social internship.
                        </p>
                        {!paymentComplete ? (
                          <Button 
                            onClick={handleIDCardPayment}
                            className="w-full bg-unifor-purple hover:bg-unifor-dark-purple"
                          >
                            Pay ₹500 Registration Fee
                          </Button>
                        ) : (
                          <div className="text-center">
                            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
                            <p className="text-green-600 font-medium">Payment Successful!</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Upload className="h-6 w-6 text-green-600" />
                        Submit Internship Certificate
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Alternative: Social Internship</h3>
                        <p className="text-gray-600 mb-4">
                          Submit your Uniford Social Internship certificate to waive the ₹500 fee.
                        </p>
                        <Input type="file" accept=".pdf,.jpg,.png" className="mb-4" />
                        <Button className="w-full bg-green-600 hover:bg-green-700">
                          Submit Certificate
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Time Aid Policy */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-6 w-6 text-amber-600" />
                      Time Aid Policy
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-amber-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold mb-4">Important Timeline</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="bg-amber-100">Step 1</Badge>
                          <p>Receive your Scholar ID card kit</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="bg-amber-100">Step 2</Badge>
                          <p>Within 3 days: Either pay ₹500 OR submit social internship certificate</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <Badge variant="outline" className="bg-amber-100">Step 3</Badge>
                          <p>Your Scholar ID becomes active and ready to use</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
