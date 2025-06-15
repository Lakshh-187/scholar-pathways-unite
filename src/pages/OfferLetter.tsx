
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, FileText, Shield, AlertTriangle, CheckCircle, User, Calendar, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const OfferLetter = () => {
  const [scholarId, setScholarId] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [offerData, setOfferData] = useState(null);
  const [showOffer, setShowOffer] = useState(false);
  const { toast } = useToast();

  // Mock scholar data - in real implementation, this would come from API
  const mockScholarData = {
    'UNF001': {
      name: 'John Smith',
      email: 'john.smith@email.com',
      program: 'Campus to Corporate Track',
      applicationDate: '2024-01-15',
      location: 'New York, USA',
      offerType: 'UNSIP Internship',
      validUntil: '2024-06-30'
    },
    'UNF002': {
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      program: 'Frontliners Track',
      applicationDate: '2024-01-20',
      location: 'California, USA',
      offerType: 'Social Internship',
      validUntil: '2024-07-15'
    }
  };

  const validateScholarId = async () => {
    if (!scholarId.startsWith('UNF')) {
      toast({
        title: "Invalid Scholar ID",
        description: "Scholar ID must start with 'UNF' followed by numbers",
        variant: "destructive"
      });
      return;
    }

    setIsValidating(true);
    
    // Simulate API call
    setTimeout(() => {
      const scholar = mockScholarData[scholarId];
      if (scholar) {
        setOfferData(scholar);
        setShowOffer(true);
        toast({
          title: "Scholar Verified",
          description: "Your offer letter has been generated successfully",
        });
      } else {
        toast({
          title: "Scholar Not Found",
          description: "No active application found for this Scholar ID",
          variant: "destructive"
        });
      }
      setIsValidating(false);
    }, 2000);
  };

  const downloadOfferLetter = () => {
    // This would typically generate and download a PDF
    console.log('Downloading offer letter PDF...');
    toast({
      title: "Download Started",
      description: "Your offer letter PDF is being downloaded",
    });
  };

  const resetForm = () => {
    setScholarId('');
    setOfferData(null);
    setShowOffer(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-unifor-purple via-unifor-dark-purple to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-1 mb-4">
              AUTOMATED OFFER SYSTEM
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Instant <span className="text-yellow-300">Offer Letter</span><br />
              <span className="text-unifor-blue">Generation</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
              Automated offer letter generation for verified <span className="font-bold text-yellow-300">Uniford Scholars</span> 
              with instant download capability
            </p>
          </div>
        </div>
      </section>

      {/* Main Application Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {!showOffer ? (
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                    Scholar Verification
                  </CardTitle>
                  <p className="text-lg text-gray-600">
                    Enter your Uniford Scholar ID to generate your offer letter
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="scholarId" className="block text-sm font-medium text-gray-700 mb-2">
                        Scholar ID
                      </label>
                      <Input
                        id="scholarId"
                        type="text"
                        placeholder="Enter your Scholar ID (e.g., UNF001)"
                        value={scholarId}
                        onChange={(e) => setScholarId(e.target.value)}
                        className="text-lg py-3"
                        disabled={isValidating}
                      />
                    </div>
                    
                    <Button 
                      onClick={validateScholarId}
                      disabled={!scholarId || isValidating}
                      className="w-full bg-unifor-purple hover:bg-unifor-dark-purple text-white py-3 text-lg"
                    >
                      {isValidating ? (
                        <>
                          <Shield className="mr-2 h-5 w-5 animate-spin" />
                          Validating Scholar ID...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Generate Offer Letter
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Important Notice */}
                  <Alert className="border-yellow-400 bg-yellow-50">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertDescription className="text-yellow-800">
                      <strong>Important:</strong> This offer letter is subject to verification during submission and evaluation. 
                      All details must be accurate as they will be audited during your pitch assessment.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>
            ) : (
              /* Offer Letter Display */
              <div className="space-y-8">
                <Card className="shadow-xl border-green-200">
                  <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50">
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                          <FileText className="mr-3 h-8 w-8 text-unifor-purple" />
                          Offer Letter Generated
                        </CardTitle>
                        <p className="text-gray-600 mt-2">Your application has been processed successfully</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 px-4 py-2">
                        VERIFIED
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-unifor-purple mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Scholar Name</p>
                            <p className="font-semibold">{offerData?.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-unifor-blue mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Program</p>
                            <p className="font-semibold">{offerData?.program}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Application Date</p>
                            <p className="font-semibold">{offerData?.applicationDate}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-red-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="font-semibold">{offerData?.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-purple-600 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Scholar ID</p>
                            <p className="font-semibold">{scholarId}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-orange-600 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Valid Until</p>
                            <p className="font-semibold">{offerData?.validUntil}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                      <Button 
                        onClick={downloadOfferLetter}
                        className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 text-lg"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Offer Letter PDF
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={resetForm}
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg"
                      >
                        Generate Another Letter
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Verification Notice */}
                <Alert className="border-blue-400 bg-blue-50">
                  <Shield className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Verification Process:</strong> This offer letter serves as an invitation to proceed. 
                    Final verification will be conducted during submission and evaluation phases. Ensure all information is accurate.
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Guidelines & Policy Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Guidelines & Policy</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-3 h-6 w-6 text-unifor-purple" />
                    Document Verification
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      All offer letters are audited during submission
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Information must match application details
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Subject to verification during evaluation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-unifor-blue" />
                    Security & Privacy
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Secure scholar ID validation system
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Encrypted document generation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Audit trail for all transactions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OfferLetter;
