import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, CreditCard, Mail, User, Building2, QrCode, Shield, Star, Award, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { downloadBadgeAsImage, downloadBadgeAsPDF } from '@/utils/downloadUtils';

const BadgeID = () => {
  const [applicationType, setApplicationType] = useState<'badge' | 'id'>('badge');
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    domain: '',
    category: '',
    email: '',
    phone: ''
  });
  const [generatedUID, setGeneratedUID] = useState('');
  const [showCredentials, setShowCredentials] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
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
    const typePrefix = applicationType === 'badge' ? 'BDG' : 'IDC';
    return `${year}${typePrefix}${categoryCode}${randomNum}`;
  };

  const generateCredentials = () => {
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
    setShowCredentials(true);
    toast({
      title: `${applicationType === 'badge' ? 'Badge' : 'ID Card'} Generated`,
      description: `Your digital ${applicationType === 'badge' ? 'badge' : 'ID card'} has been generated successfully`,
    });
  };

  const downloadAs = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!showCredentials) return;
    
    setIsDownloading(true);
    const credentialType = applicationType === 'badge' ? 'Badge' : 'ID-Card';
    const filename = `uniford-${credentialType}-${generatedUID}`;
    const elementId = applicationType === 'badge' ? 'digital-badge' : 'digital-id-card';
    
    try {
      if (format === 'pdf') {
        await downloadBadgeAsPDF(elementId, filename);
      } else {
        await downloadBadgeAsImage(elementId, filename, format);
      }
      
      toast({
        title: "Download Successful",
        description: `Your ${credentialType} has been downloaded as ${format.toUpperCase()}`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading your credential. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
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
    setShowCredentials(false);
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
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Shield className="h-12 w-12 text-yellow-300" />
              </div>
            </div>
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-1 mb-4">
              DIGITAL CREDENTIALS
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional <span className="text-yellow-300">Digital Credentials</span><br />
              <span className="text-cyan-200">Badge & ID Cards</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
              Create stunning, professional digital badges and ID cards with advanced graphics and secure verification
            </p>
          </div>
        </div>
      </section>

      {/* Main Application Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {!showCredentials ? (
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader className="text-center pb-8 bg-gradient-to-r from-purple-50 to-blue-50">
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                    Apply for Digital Credentials
                  </CardTitle>
                  <p className="text-lg text-gray-600">
                    Choose your credential type and fill in your details
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  {/* Application Type Selection */}
                  <Tabs value={applicationType} onValueChange={(value) => setApplicationType(value as 'badge' | 'id')} className="mb-8">
                    <TabsList className="grid w-full grid-cols-2 h-16">
                      <TabsTrigger value="badge" className="text-lg py-3">
                        <Award className="mr-2 h-5 w-5" />
                        Digital Badge
                      </TabsTrigger>
                      <TabsTrigger value="id" className="text-lg py-3">
                        <CreditCard className="mr-2 h-5 w-5" />
                        ID Card
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="badge" className="mt-6">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-orange-800 mb-2">Digital Badge Application</h3>
                        <p className="text-orange-700">
                          Perfect for showcasing achievements, skills, and program completion. Digital badges are shareable credentials that verify your accomplishments.
                        </p>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="id" className="mt-6">
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-800 mb-2">ID Card Application</h3>
                        <p className="text-blue-700">
                          Professional identification cards for scholars, interns, and program participants. Includes QR code verification and institutional details.
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Form Fields */}
                  <div className="space-y-6">
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
                          className="text-lg py-3 border-2 focus:border-purple-500"
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
                          className="text-lg py-3 border-2 focus:border-purple-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="domain">Domain *</Label>
                        <Select onValueChange={(value) => handleSelectChange('domain', value)}>
                          <SelectTrigger className="text-lg py-3 border-2 focus:border-purple-500">
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
                          <SelectTrigger className="text-lg py-3 border-2 focus:border-purple-500">
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
                          className="text-lg py-3 border-2 focus:border-purple-500"
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
                          className="text-lg py-3 border-2 focus:border-purple-500"
                        />
                      </div>
                    </div>
                    
                    <Button 
                      onClick={generateCredentials}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg font-semibold shadow-lg"
                    >
                      <Sparkles className="mr-2 h-5 w-5" />
                      Generate {applicationType === 'badge' ? 'Digital Badge' : 'ID Card'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              /* Credentials Display */
              <div className="space-y-8">
                {/* Control Buttons */}
                <div className="flex justify-center gap-4 print:hidden">
                  <div className="flex gap-2">
                    <Button 
                      onClick={() => downloadAs('pdf')}
                      disabled={isDownloading}
                      className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 disabled:opacity-50"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isDownloading ? 'Downloading...' : 'PDF'}
                    </Button>
                    <Button 
                      onClick={() => downloadAs('png')}
                      disabled={isDownloading}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 disabled:opacity-50"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isDownloading ? 'Downloading...' : 'PNG'}
                    </Button>
                    <Button 
                      onClick={() => downloadAs('jpg')}
                      disabled={isDownloading}
                      className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 disabled:opacity-50"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      {isDownloading ? 'Downloading...' : 'JPG'}
                    </Button>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={resetForm}
                    className="px-6 py-3 border-2"
                    disabled={isDownloading}
                  >
                    Generate Another
                  </Button>
                </div>

                {applicationType === 'badge' ? (
                  /* Enhanced Digital Badge */
                  <div className="flex justify-center mb-8">
                    <div id="digital-badge" className="bg-white p-8 rounded-lg shadow-lg">
                      <Card className="w-96 h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white relative overflow-hidden shadow-2xl border-0">
                        {/* Background Graphics */}
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute top-4 left-4">
                          <Star className="h-4 w-4 text-yellow-300" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <Star className="h-4 w-4 text-yellow-300" />
                        </div>
                        <div className="absolute bottom-4 left-4">
                          <Star className="h-4 w-4 text-yellow-300" />
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Star className="h-4 w-4 text-yellow-300" />
                        </div>

                        <CardContent className="p-6 h-full flex flex-col justify-between relative z-10">
                          {/* Header */}
                          <div className="text-center">
                            <div className="flex items-center justify-center mb-2">
                              <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mr-2">
                                <Shield className="h-6 w-6 text-yellow-300" />
                              </div>
                              <span className="text-xl font-bold">UNIFORD</span>
                            </div>
                            <div className="text-xs opacity-90 mb-2 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 inline-block">
                              DIGITAL BADGE
                            </div>
                          </div>

                          {/* Main Content */}
                          <div className="text-center space-y-3 flex-grow flex flex-col justify-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                              <div className="text-2xl font-bold text-yellow-300 mb-2">{getCategoryTitle()}</div>
                              <div className="text-lg font-semibold">{formData.name}</div>
                              <div className="text-sm opacity-90 mt-2">{formData.domain}</div>
                              <div className="text-sm opacity-90">{formData.university}</div>
                            </div>
                          </div>

                          {/* Footer */}
                          <div className="text-center">
                            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2 mb-2">
                              <div className="text-xs font-semibold">Badge ID: {generatedUID}</div>
                            </div>
                            <div className="text-xs opacity-90">EST. 2024 • VERIFIED</div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ) : (
                  /* Enhanced ID Card */
                  <div id="digital-id-card" className="bg-white p-8 rounded-lg shadow-lg">
                    <Card className="max-w-4xl mx-auto shadow-2xl bg-gradient-to-r from-slate-900 to-blue-900 text-white border-0 overflow-hidden">
                      {/* Header Strip */}
                      <div className="h-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"></div>
                      
                      <CardContent className="p-8">
                        <div className="grid md:grid-cols-2 gap-8 items-center">
                          {/* Left Side - Scholar Info */}
                          <div className="space-y-6">
                            <div className="flex items-center mb-6">
                              <div className="bg-gradient-to-br from-orange-500 to-red-500 p-3 rounded-lg mr-4 shadow-lg">
                                <Shield className="h-8 w-8 text-white" />
                              </div>
                              <div>
                                <h2 className="text-3xl font-bold text-orange-400">UNIFORD</h2>
                                <p className="text-sm text-gray-300">Scholar Identification Card</p>
                              </div>
                            </div>

                            {/* Info Grid */}
                            <div className="grid grid-cols-1 gap-4">
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <p className="text-sm text-gray-400 mb-1">Full Name</p>
                                <p className="text-xl font-semibold">{formData.name}</p>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                  <p className="text-sm text-gray-400 mb-1">Scholar ID</p>
                                  <p className="text-lg font-bold text-orange-400">{generatedUID}</p>
                                </div>
                                
                                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                  <p className="text-sm text-gray-400 mb-1">Category</p>
                                  <p className="text-lg">{getCategoryTitle()}</p>
                                </div>
                              </div>
                              
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <p className="text-sm text-gray-400 mb-1">Domain</p>
                                <p className="text-lg">{formData.domain}</p>
                              </div>
                              
                              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                                <p className="text-sm text-gray-400 mb-1">Institution</p>
                                <p className="text-lg">{formData.university}</p>
                              </div>
                            </div>
                          </div>

                          {/* Right Side - QR Code & Verification */}
                          <div className="text-center space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-lg inline-block">
                              <QrCode className="h-32 w-32 text-gray-800" />
                            </div>
                            
                            <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-lg p-6">
                              <p className="text-orange-400 font-semibold mb-2 text-lg">SCAN FOR VERIFICATION</p>
                              <p className="text-sm text-gray-300 mb-4">
                                Scan to verify scholar credentials and access digital portfolio
                              </p>
                              
                              <div className="flex justify-center space-x-2 mb-4">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                              </div>
                              
                              <div className="text-xs text-gray-400">
                                <p>Issued: {new Date().toLocaleDateString()}</p>
                                <p>Valid for academic year 2024-25</p>
                                <p className="mt-2 text-green-400">✓ Verified Credential</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      
                      {/* Footer Strip */}
                      <div className="h-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-400"></div>
                    </Card>
                  </div>
                )}

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
