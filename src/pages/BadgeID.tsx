
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, CreditCard, Mail, User, Building2, QrCode, Shield } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BadgeID = () => {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    domain: '',
    category: '',
    email: '',
    phone: ''
  });
  const [generatedUID, setGeneratedUID] = useState('');
  const [showBadge, setShowBadge] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const generateUID = () => {
    const year = new Date().getFullYear().toString().slice(-2);
    const categoryCode = formData.category.toUpperCase().slice(0, 3);
    const randomNum = Math.floor(Math.random() * 9000) + 1000;
    return `${year}${categoryCode}${randomNum}`;
  };

  const generateBadgeID = () => {
    // Validate all required fields
    if (!formData.name || !formData.university || !formData.domain || !formData.category || !formData.email) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const uid = generateUID();
    setGeneratedUID(uid);
    setShowBadge(true);
    toast({
      title: "Badge & ID Generated",
      description: "Your digital badge and ID card have been generated successfully",
    });
  };

  const downloadBadge = () => {
    window.print();
    toast({
      title: "Download Started",
      description: "Your badge and ID card are ready for download",
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      university: '',
      domain: '',
      category: '',
      email: '',
      phone: ''
    });
    setGeneratedUID('');
    setShowBadge(false);
  };

  const getCategoryTitle = () => {
    switch (formData.category) {
      case 'internship':
        return 'INTERN';
      case 'fellowship':
        return 'FELLOW';
      case 'project':
        return 'PROJECT MEMBER';
      case 'research':
        return 'RESEARCHER';
      case 'uni-pitch':
        return 'UNI-PITCH';
      case 'badge':
        return 'BADGE HOLDER';
      case 'certification':
        return 'CERTIFIED';
      default:
        return 'SCHOLAR';
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-1 mb-4">
              DIGITAL CREDENTIALS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Generate Your <span className="text-yellow-300">Digital Badge</span><br />
              <span className="text-orange-200">& ID Card</span>
            </h1>
            <p className="text-xl text-orange-100 max-w-4xl mx-auto mb-8">
              Create professional digital credentials instantly with your scholar information
            </p>
          </div>
        </div>
      </section>

      {/* Main Application Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {!showBadge ? (
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                    Scholar Credential Application
                  </CardTitle>
                  <p className="text-lg text-gray-600">
                    Fill in your details to generate your digital badge and ID card
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
                      <Label htmlFor="university">University/School *</Label>
                      <Input
                        id="university"
                        name="university"
                        type="text"
                        placeholder="Enter your university/school name"
                        value={formData.university}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="domain">Domain *</Label>
                      <Select onValueChange={(value) => handleSelectChange('domain', value)}>
                        <SelectTrigger className="text-lg py-3">
                          <SelectValue placeholder="Select your domain" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Video Editing">Video Editing</SelectItem>
                          <SelectItem value="Content Writing">Content Writing</SelectItem>
                          <SelectItem value="Graphic Design">Graphic Design</SelectItem>
                          <SelectItem value="Web Development">Web Development</SelectItem>
                          <SelectItem value="Digital Marketing">Digital Marketing</SelectItem>
                          <SelectItem value="Research & Analysis">Research & Analysis</SelectItem>
                          <SelectItem value="Social Media Management">Social Media Management</SelectItem>
                          <SelectItem value="Data Science">Data Science</SelectItem>
                          <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                          <SelectItem value="Business Development">Business Development</SelectItem>
                          <SelectItem value="Project Management">Project Management</SelectItem>
                          <SelectItem value="Public Relations">Public Relations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select onValueChange={(value) => handleSelectChange('category', value)}>
                        <SelectTrigger className="text-lg py-3">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="internship">Internship</SelectItem>
                          <SelectItem value="fellowship">Fellowship</SelectItem>
                          <SelectItem value="project">Project Based</SelectItem>
                          <SelectItem value="research">Research Program</SelectItem>
                          <SelectItem value="uni-pitch">Uni-Pitch Program</SelectItem>
                          <SelectItem value="badge">Badge Program</SelectItem>
                          <SelectItem value="certification">Certification Program</SelectItem>
                        </SelectContent>
                      </Select>
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
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={generateBadgeID}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg"
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Generate Badge & ID Card
                  </Button>
                </CardContent>
              </Card>
            ) : (
              /* Badge and ID Card Display */
              <div className="space-y-8">
                {/* Control Buttons */}
                <div className="flex justify-center gap-4 print:hidden">
                  <Button 
                    onClick={downloadBadge}
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Credentials
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetForm}
                    className="px-8 py-3"
                  >
                    Generate Another
                  </Button>
                </div>

                {/* Digital Badge */}
                <div className="flex justify-center mb-8">
                  <Card className="w-80 h-96 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                    <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                      {/* Header */}
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Shield className="h-6 w-6 text-yellow-300 mr-2" />
                          <span className="text-lg font-bold">UNIFORD</span>
                        </div>
                        <div className="text-xs opacity-90 mb-4">DIGITAL BADGE</div>
                      </div>

                      {/* Main Content */}
                      <div className="text-center space-y-3 flex-grow flex flex-col justify-center">
                        <div className="text-2xl font-bold text-yellow-300">{getCategoryTitle()}</div>
                        <div className="text-lg font-semibold">{formData.name}</div>
                        <div className="text-sm opacity-90">{formData.domain}</div>
                        <div className="text-sm opacity-90">{formData.university}</div>
                      </div>

                      {/* Footer */}
                      <div className="text-center">
                        <div className="text-xs opacity-90 mb-1">UID: {generatedUID}</div>
                        <div className="text-xs opacity-90">EST. 2024</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* ID Card */}
                <Card className="max-w-4xl mx-auto shadow-2xl bg-gradient-to-r from-gray-800 to-gray-900 text-white">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Left Side - Scholar Info */}
                      <div className="space-y-4">
                        <div className="flex items-center mb-6">
                          <div className="bg-orange-500 p-2 rounded-lg mr-3">
                            <User className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-orange-400">UNIFORD</h2>
                            <p className="text-sm text-gray-300">Scholar ID Card</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div>
                            <p className="text-sm text-gray-400">Full Name</p>
                            <p className="text-lg font-semibold">{formData.name}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-400">Scholar ID</p>
                            <p className="text-lg font-bold text-orange-400">{generatedUID}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-400">Category</p>
                            <p className="text-lg">{getCategoryTitle()}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-400">Domain</p>
                            <p className="text-lg">{formData.domain}</p>
                          </div>
                          
                          <div>
                            <p className="text-sm text-gray-400">Institution</p>
                            <p className="text-lg">{formData.university}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Side - QR Code & Verification */}
                      <div className="text-center space-y-6">
                        <div className="bg-white p-4 rounded-lg inline-block">
                          <QrCode className="h-24 w-24 text-gray-800" />
                        </div>
                        
                        <div>
                          <p className="text-orange-400 font-semibold mb-2">SCAN FOR VERIFICATION</p>
                          <p className="text-sm text-gray-400">
                            Scan to verify scholar credentials
                          </p>
                        </div>
                        
                        <div className="text-xs text-gray-500">
                          <p>Issued: {new Date().toLocaleDateString()}</p>
                          <p>Valid for academic year 2024-25</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instructions */}
                <Alert className="border-orange-400 bg-orange-50 print:hidden">
                  <Mail className="h-4 w-4 text-orange-600" />
                  <AlertDescription className="text-orange-800">
                    <strong>Next Steps:</strong> Please email your downloaded credentials to{' '}
                    <strong>info@uniford.org</strong> with the subject line{' '}
                    "Digital Credentials Verification - {generatedUID}". The organization will verify your details{' '}
                    and activate your credentials.
                  </AlertDescription>
                </Alert>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BadgeID;
