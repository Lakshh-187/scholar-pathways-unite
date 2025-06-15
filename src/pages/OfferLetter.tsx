
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, FileText, Shield, AlertTriangle, CheckCircle, User, Calendar, MapPin, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const OfferLetter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scholarId: '',
    program: '',
    location: ''
  });
  const [showOffer, setShowOffer] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateOfferLetter = () => {
    // Validate Scholar ID format
    if (!formData.scholarId.startsWith('UNF')) {
      toast({
        title: "Invalid Scholar ID",
        description: "Scholar ID must start with 'UNF' followed by numbers",
        variant: "destructive"
      });
      return;
    }

    // Validate all fields are filled
    if (!formData.name || !formData.email || !formData.scholarId || !formData.program || !formData.location) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setShowOffer(true);
    toast({
      title: "Offer Letter Generated",
      description: "Your offer letter has been generated successfully",
    });
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
    setFormData({
      name: '',
      email: '',
      scholarId: '',
      program: '',
      location: ''
    });
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
              Generate your offer letter instantly by filling in your scholar details below
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
                    Scholar Application Form
                  </CardTitle>
                  <p className="text-lg text-gray-600">
                    Fill in your details to generate your offer letter
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="scholarId">Scholar ID *</Label>
                      <Input
                        id="scholarId"
                        name="scholarId"
                        type="text"
                        placeholder="Enter your Scholar ID (e.g., UNF001)"
                        value={formData.scholarId}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="program">Program *</Label>
                      <Input
                        id="program"
                        name="program"
                        type="text"
                        placeholder="Enter your program (e.g., Campus to Corporate Track)"
                        value={formData.program}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="location">Location *</Label>
                      <Input
                        id="location"
                        name="location"
                        type="text"
                        placeholder="Enter your location (e.g., New York, USA)"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={generateOfferLetter}
                    className="w-full bg-unifor-purple hover:bg-unifor-dark-purple text-white py-3 text-lg"
                  >
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Generate Offer Letter
                  </Button>

                  {/* Important Notice */}
                  <Alert className="border-yellow-400 bg-yellow-50">
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                    <AlertDescription className="text-yellow-800">
                      <strong>Important:</strong> After downloading your offer letter, please email it to the organization 
                      for verification. All details will be verified during your application review process.
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
                        <p className="text-gray-600 mt-2">Your offer letter is ready for download</p>
                      </div>
                      <Badge className="bg-green-100 text-green-800 px-4 py-2">
                        GENERATED
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
                            <p className="font-semibold">{formData.name}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Mail className="h-5 w-5 text-unifor-blue mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Email</p>
                            <p className="font-semibold">{formData.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <FileText className="h-5 w-5 text-green-600 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Program</p>
                            <p className="font-semibold">{formData.program}</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-red-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Location</p>
                            <p className="font-semibold">{formData.location}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Shield className="h-5 w-5 text-purple-600 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Scholar ID</p>
                            <p className="font-semibold">{formData.scholarId}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-orange-600 mr-3" />
                          <div>
                            <p className="text-sm text-gray-600">Generated On</p>
                            <p className="font-semibold">{new Date().toLocaleDateString()}</p>
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

                {/* Email Instructions */}
                <Alert className="border-blue-400 bg-blue-50">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Next Steps:</strong> Please email your downloaded offer letter to <strong>verification@uniford.org</strong> 
                    with the subject line "Offer Letter Verification - {formData.scholarId}". The organization will verify your details 
                    and contact you with further instructions.
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
                      All offer letters are verified by the organization
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Information must be accurate and verifiable
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Email verification is mandatory for processing
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-3 h-6 w-6 text-unifor-blue" />
                    Important Notes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Offer letter is an invitation to proceed
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Final verification by organization required
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      Follow email format for submission
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
