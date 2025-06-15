
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, Award, Shield, Calendar, User, Building2, CheckCircle, Lock, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { downloadBadgeAsImage, downloadBadgeAsPDF } from '@/utils/downloadUtils';

const CertificateGenerator = () => {
  const [accessKey, setAccessKey] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [formData, setFormData] = useState({
    participantName: '',
    domain: '',
    category: '',
    duration: '',
    startDate: '',
    endDate: '',
    certificateNumber: '',
    performanceLevel: 'Excellent'
  });
  const [showCertificate, setShowCertificate] = useState(false);
  const [certificateType, setCertificateType] = useState<'achievement' | 'completion'>('achievement');
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleAccessKeySubmit = () => {
    if (accessKey === 'UNF10187') {
      setIsAuthorized(true);
      toast({
        title: "Access Granted",
        description: "Welcome to the Certificate Generation Portal",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid access key. Please contact administration.",
        variant: "destructive"
      });
    }
  };

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

  const generateCertificate = () => {
    if (!formData.participantName || !formData.domain || !formData.category || !formData.certificateNumber) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    setShowCertificate(true);
    toast({
      title: "Certificate Generated",
      description: `${certificateType === 'achievement' ? 'Achievement' : 'Completion'} certificate has been generated successfully`,
    });
  };

  const downloadAs = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!showCertificate) return;
    
    setIsDownloading(true);
    const filename = `uniford-certificate-${certificateType}-${formData.certificateNumber}`;
    const elementId = `certificate-${certificateType}`;
    
    try {
      if (format === 'pdf') {
        await downloadBadgeAsPDF(elementId, filename);
      } else {
        await downloadBadgeAsImage(elementId, filename, format);
      }
      
      toast({
        title: "Download Successful",
        description: `Certificate has been downloaded as ${format.toUpperCase()}`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading the certificate. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      participantName: '',
      domain: '',
      category: '',
      duration: '',
      startDate: '',
      endDate: '',
      certificateNumber: '',
      performanceLevel: 'Excellent'
    });
    setShowCertificate(false);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const renderAchievementCertificate = () => (
    <Card className="max-w-4xl mx-auto bg-white border-0 shadow-none overflow-hidden" id="certificate-achievement">
      <CardContent className="p-0 relative">
        {/* Elegant curved background with gold accents */}
        <div className="relative h-[600px] bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
          {/* Decorative curves */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full">
              <path d="M0,0 Q200,100 400,50 T800,0 L800,200 Q600,150 400,200 T0,200 Z" fill="rgba(255,215,0,0.1)" />
              <path d="M0,400 Q200,350 400,400 T800,400 L800,600 L0,600 Z" fill="rgba(255,215,0,0.05)" />
            </svg>
          </div>
          
          {/* Certificate content */}
          <div className="relative z-10 p-12 h-full flex flex-col">
            {/* Header with logo and title */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-300 rounded-full flex items-center justify-center">
                    <Star className="h-3 w-3 text-yellow-700" />
                  </div>
                </div>
                <div>
                  <h1 className="text-white text-xl font-bold">UNIFORD</h1>
                  <p className="text-blue-200 text-sm">FOUNDATION</p>
                </div>
              </div>
              <div className="text-right text-white">
                <p className="text-sm opacity-80">Certificate No.</p>
                <p className="font-mono text-lg">{formData.certificateNumber}</p>
              </div>
            </div>

            {/* Main certificate content */}
            <div className="flex-1 flex flex-col justify-center text-center text-white">
              <h2 className="text-5xl font-bold mb-2 tracking-wider">CERTIFICATE</h2>
              <p className="text-xl text-blue-200 mb-8 tracking-wide">OF ACHIEVEMENT</p>
              
              <p className="text-lg mb-4 text-blue-100">PROUDLY PRESENTED TO</p>
              
              <h3 className="text-4xl font-bold mb-8 text-yellow-300" style={{ fontFamily: 'serif' }}>
                {formData.participantName}
              </h3>
              
              <div className="max-w-2xl mx-auto mb-8">
                <p className="text-lg leading-relaxed text-blue-100">
                  for successfully completing an {formData.category.toLowerCase()} in {formData.domain} and 
                  demonstrating {formData.performanceLevel.toLowerCase()} performance, dedication, and 
                  professional excellence throughout the program duration.
                </p>
              </div>
              
              <div className="flex justify-center items-center gap-8 mb-6">
                <div className="text-center">
                  <p className="text-sm text-blue-200">Date of Completion</p>
                  <p className="font-semibold">{getCurrentDate()}</p>
                </div>
                <div className="w-px h-8 bg-blue-400"></div>
                <div className="text-center">
                  <p className="text-sm text-blue-200">Performance Level</p>
                  <p className="font-semibold text-yellow-300">{formData.performanceLevel}</p>
                </div>
              </div>
            </div>

            {/* Footer with signature */}
            <div className="flex justify-between items-end">
              <div className="text-left text-sm text-blue-200">
                <p>For certificate authentication</p>
                <p className="font-mono">{formData.certificateNumber}</p>
              </div>
              <div className="text-right">
                <div className="mb-2">
                  <div className="w-32 h-px bg-blue-300 mb-1"></div>
                  <p className="text-sm text-blue-200">Authorized Signature</p>
                </div>
                <p className="text-white font-semibold">VC Kahleer</p>
                <p className="text-blue-200 text-sm">Managing Director</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderCompletionCertificate = () => (
    <Card className="max-w-4xl mx-auto bg-white border-0 shadow-none overflow-hidden" id="certificate-completion">
      <CardContent className="p-0 relative">
        {/* Modern geometric design with gold ribbon */}
        <div className="relative h-[600px] bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 800 600" className="absolute inset-0 w-full h-full opacity-10">
              <circle cx="100" cy="100" r="50" fill="#f59e0b" />
              <circle cx="700" cy="500" r="80" fill="#3b82f6" />
              <polygon points="650,50 750,50 700,150" fill="#8b5cf6" />
            </svg>
          </div>
          
          {/* Gold ribbon accent */}
          <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600"></div>
          
          <div className="relative z-10 p-12 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl">
                    <span className="text-white font-bold text-2xl">U</span>
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-800">Uniwave</h1>
                  <p className="text-gray-600">Professional Certification</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Certificate ID</p>
                <p className="font-mono text-lg text-gray-800">{formData.certificateNumber}</p>
                <p className="text-xs text-gray-500 mt-1">For certificate authentication</p>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-center mb-8">
                <h2 className="text-6xl font-bold text-gray-800 mb-3">CERTIFICATE</h2>
                <p className="text-2xl text-gray-600 tracking-wider">OF COMPLETION</p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 mb-8">
                <p className="text-lg text-gray-600 mb-4 text-center">This Certificate is Awarded to</p>
                
                <h3 className="text-4xl font-bold text-center mb-6 text-gray-800" style={{ fontFamily: 'serif' }}>
                  {formData.participantName}
                </h3>
                
                <div className="max-w-2xl mx-auto text-center">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Thank you for your dedication and hard work in completing the{' '}
                    <strong>{formData.category}</strong> program in <strong>{formData.domain}</strong>.
                    Your commitment to excellence and professional growth has been exemplary.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <p className="text-blue-600 font-semibold">Program</p>
                      <p className="text-gray-700">{formData.category}</p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <p className="text-purple-600 font-semibold">Domain</p>
                      <p className="text-gray-700">{formData.domain}</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-600 font-semibold">Duration</p>
                      <p className="text-gray-700">{formData.duration || 'As per program'}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end">
              <div className="text-left">
                <p className="text-sm text-gray-500 mb-1">Issued on {getCurrentDate()}</p>
                <p className="text-xs text-gray-400">24UNF1002</p>
              </div>
              <div className="text-right">
                <div className="mb-3">
                  <div className="w-36 h-px bg-gray-400 mb-2"></div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">VC Kahleer</p>
                    <p className="text-sm text-gray-600">Secretary</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  if (!isAuthorized) {
    return (
      <Layout>
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-md mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                      <Lock className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white mb-2">
                    Certificate Generation Portal
                  </CardTitle>
                  <p className="text-blue-200">
                    Enter your access key to generate certificates
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="accessKey" className="text-white">Access Key</Label>
                    <Input
                      id="accessKey"
                      type="password"
                      placeholder="Enter access key"
                      value={accessKey}
                      onChange={(e) => setAccessKey(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50"
                      onKeyPress={(e) => e.key === 'Enter' && handleAccessKeySubmit()}
                    />
                  </div>
                  <Button 
                    onClick={handleAccessKeySubmit}
                    className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-semibold"
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Access Portal
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-1 mb-4">
              AUTHORIZED PERSONNEL ONLY
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certificate <span className="text-yellow-300">Generation</span><br />
              <span className="text-blue-300">Portal</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Generate professional certificates for program participants
            </p>
          </div>
        </div>
      </section>

      {/* Main Application Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {!showCertificate ? (
              <Card className="shadow-xl">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                    Certificate Generation Form
                  </CardTitle>
                  <p className="text-lg text-gray-600">
                    Fill in participant details to generate certificate
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="participantName">Participant Name *</Label>
                      <Input
                        id="participantName"
                        name="participantName"
                        type="text"
                        placeholder="Enter participant's full name"
                        value={formData.participantName}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="certificateNumber">Certificate Number *</Label>
                      <Input
                        id="certificateNumber"
                        name="certificateNumber"
                        type="text"
                        placeholder="e.g., CN-24UNF1002"
                        value={formData.certificateNumber}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="domain">Domain *</Label>
                      <Select onValueChange={(value) => handleSelectChange('domain', value)}>
                        <SelectTrigger className="text-lg py-3">
                          <SelectValue placeholder="Select domain" />
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
                          <SelectItem value="Internship">Internship</SelectItem>
                          <SelectItem value="Fellowship">Fellowship</SelectItem>
                          <SelectItem value="Project">Project Based</SelectItem>
                          <SelectItem value="Research Program">Research Program</SelectItem>
                          <SelectItem value="Uni-Pitch Program">Uni-Pitch Program</SelectItem>
                          <SelectItem value="Badge Program">Badge Program</SelectItem>
                          <SelectItem value="Certification Program">Certification Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="duration">Duration</Label>
                      <Input
                        id="duration"
                        name="duration"
                        type="text"
                        placeholder="e.g., 3 months, 6 weeks"
                        value={formData.duration}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="performanceLevel">Performance Level</Label>
                      <Select onValueChange={(value) => handleSelectChange('performanceLevel', value)}>
                        <SelectTrigger className="text-lg py-3">
                          <SelectValue placeholder="Select performance level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Outstanding">Outstanding</SelectItem>
                          <SelectItem value="Excellent">Excellent</SelectItem>
                          <SelectItem value="Good">Good</SelectItem>
                          <SelectItem value="Satisfactory">Satisfactory</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label>Certificate Type</Label>
                    <div className="flex gap-4">
                      <Button 
                        onClick={() => setCertificateType('achievement')}
                        variant={certificateType === 'achievement' ? 'default' : 'outline'}
                        className="flex-1"
                      >
                        <Award className="mr-2 h-4 w-4" />
                        Achievement Certificate
                      </Button>
                      <Button 
                        onClick={() => setCertificateType('completion')}
                        variant={certificateType === 'completion' ? 'default' : 'outline'}
                        className="flex-1"
                      >
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Completion Certificate
                      </Button>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={generateCertificate}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg"
                  >
                    <Award className="mr-2 h-5 w-5" />
                    Generate Certificate
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {/* Certificate Type Selection */}
                <div className="flex justify-center gap-4 print:hidden">
                  <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <Button 
                      onClick={() => setCertificateType('achievement')}
                      variant={certificateType === 'achievement' ? 'default' : 'ghost'}
                      className="px-6"
                    >
                      <Award className="mr-2 h-4 w-4" />
                      Achievement
                    </Button>
                    <Button 
                      onClick={() => setCertificateType('completion')}
                      variant={certificateType === 'completion' ? 'default' : 'ghost'}
                      className="px-6"
                    >
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Completion
                    </Button>
                  </div>
                </div>

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

                {/* Certificate Document */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-2xl">
                    {certificateType === 'achievement' ? renderAchievementCertificate() : renderCompletionCertificate()}
                  </div>
                </div>

                {/* Instructions */}
                <Alert className="border-blue-400 bg-blue-50 print:hidden">
                  <Award className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Certificate Generated:</strong> The {certificateType} certificate has been created for{' '}
                    <strong>{formData.participantName}</strong>. Download and share with the participant.
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

export default CertificateGenerator;
