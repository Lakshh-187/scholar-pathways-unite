
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, Award, Shield, Calendar, User, Building2, CheckCircle, Lock, Star, Medal } from 'lucide-react';
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
    <Card className="max-w-4xl mx-auto bg-white border-8 border-red-900 shadow-2xl overflow-hidden" id="certificate-achievement">
      <CardContent className="p-0 relative">
        {/* Elegant wine and white design */}
        <div className="relative h-[700px] bg-white overflow-hidden">
          {/* Decorative wine border pattern */}
          <div className="absolute inset-0 border-8 border-red-900">
            <div className="absolute inset-4 border-2 border-red-700"></div>
            <div className="absolute inset-8 border border-red-500"></div>
          </div>
          
          {/* Corner ornaments */}
          <div className="absolute top-4 left-4 w-16 h-16 bg-red-900 transform rotate-45"></div>
          <div className="absolute top-4 right-4 w-16 h-16 bg-red-900 transform rotate-45"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-red-900 transform rotate-45"></div>
          <div className="absolute bottom-4 right-4 w-16 h-16 bg-red-900 transform rotate-45"></div>
          
          {/* Certificate content */}
          <div className="relative z-10 p-16 h-full flex flex-col">
            {/* Header with prestigious logo */}
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center shadow-2xl border-4 border-yellow-400">
                    <Medal className="h-12 w-12 text-yellow-300" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                    <Star className="h-4 w-4 text-red-900" />
                  </div>
                </div>
                <div>
                  <h1 className="text-red-900 text-3xl font-bold tracking-wider">UNIFORD</h1>
                  <p className="text-red-700 text-lg font-semibold">FOUNDATION</p>
                  <p className="text-red-600 text-sm italic">Excellence in Education</p>
                </div>
              </div>
              <div className="text-right text-red-900 bg-red-50 p-4 rounded-lg border-2 border-red-200">
                <p className="text-sm font-semibold opacity-80">Certificate No.</p>
                <p className="font-mono text-xl font-bold">{formData.certificateNumber}</p>
                <div className="flex items-center justify-end mt-2 gap-1">
                  <Shield className="h-4 w-4 text-red-700" />
                  <p className="text-xs">Verified</p>
                </div>
              </div>
            </div>

            {/* Main certificate content */}
            <div className="flex-1 flex flex-col justify-center text-center">
              {/* Decorative medal at top */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 rounded-full flex items-center justify-center shadow-xl border-4 border-red-900">
                    <Award className="h-10 w-10 text-red-900" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-yellow-300 animate-pulse"></div>
                </div>
              </div>
              
              <h2 className="text-6xl font-bold mb-3 tracking-wider text-red-900" style={{ fontFamily: 'serif' }}>
                CERTIFICATE
              </h2>
              <p className="text-2xl text-red-700 mb-8 tracking-wide font-semibold">OF ACHIEVEMENT</p>
              
              <div className="w-32 h-1 bg-gradient-to-r from-red-900 via-yellow-500 to-red-900 mx-auto mb-8"></div>
              
              <p className="text-xl mb-6 text-red-800 font-medium">PROUDLY PRESENTED TO</p>
              
              <div className="bg-red-50 p-6 rounded-2xl border-2 border-red-200 mb-8 mx-8">
                <h3 className="text-5xl font-bold text-red-900 mb-2" style={{ fontFamily: 'serif' }}>
                  {formData.participantName}
                </h3>
                <div className="w-24 h-1 bg-red-700 mx-auto"></div>
              </div>
              
              <div className="max-w-3xl mx-auto mb-4 bg-white p-6 rounded-xl border border-red-200 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                  In recognition of outstanding achievement and exceptional performance in completing the{' '}
                  <strong className="text-red-900">{formData.category}</strong> program in{' '}
                  <strong className="text-red-900">{formData.domain}</strong>, demonstrating{' '}
                  <strong className="text-red-900">{formData.performanceLevel.toLowerCase()}</strong> excellence, 
                  dedication, and professional competence throughout the program duration.
                </p>
              </div>
              
              {/* Prominent Appreciation Section */}
              <div className="max-w-4xl mx-auto mb-6">
                <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-red-50 p-8 rounded-2xl border-2 border-red-200 shadow-xl">
                  <h4 className="text-lg font-bold text-red-900 mb-6 text-center">Special Recognition</h4>
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                      <p className="text-base text-red-800 italic leading-relaxed text-center">
                        "Your commitment to excellence in the <strong>{formData.domain}</strong> field through this <strong>{formData.category}</strong> reflects 
                        the highest standards of academic and professional achievement that UNIFORD Foundation champions."
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                      <p className="text-base text-red-800 italic leading-relaxed text-center">
                        "This certificate stands as a testament to your unwavering dedication, innovative thinking, and 
                        the transformative impact you've made throughout your journey with us."
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-xl border border-red-100 shadow-sm">
                      <p className="text-base text-red-800 italic leading-relaxed text-center">
                        "May this achievement serve as a stepping stone to greater heights in your professional endeavors 
                        and continue to inspire others in the <strong>{formData.domain}</strong> community."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center items-center gap-12 mb-8">
                <div className="text-center bg-red-50 p-4 rounded-lg border border-red-200">
                  <Calendar className="h-6 w-6 text-red-700 mx-auto mb-2" />
                  <p className="text-sm text-red-600 font-semibold">Date of Completion</p>
                  <p className="font-bold text-red-900">{getCurrentDate()}</p>
                </div>
                <div className="w-px h-16 bg-red-300"></div>
                <div className="text-center bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <Star className="h-6 w-6 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm text-yellow-700 font-semibold">Performance Level</p>
                  <p className="font-bold text-yellow-800">{formData.performanceLevel}</p>
                </div>
              </div>
            </div>

            {/* Footer with signature and seals */}
            <div className="flex justify-between items-end">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-red-700" />
                  <p className="text-sm text-red-600 font-semibold">Certificate Authentication</p>
                </div>
                <p className="font-mono text-red-900 font-bold">{formData.certificateNumber}</p>
                <p className="text-xs text-red-500">24UNF1002</p>
              </div>
              
              {/* Official seal */}
              <div className="text-center">
                <div className="w-24 h-24 bg-red-900 rounded-full flex items-center justify-center mb-2 mx-auto border-4 border-yellow-400">
                  <div className="text-yellow-300 text-center">
                    <Building2 className="h-8 w-8 mx-auto mb-1" />
                    <p className="text-xs font-bold">OFFICIAL</p>
                  </div>
                </div>
                <p className="text-xs text-red-600">Institutional Seal</p>
              </div>
              
              <div className="text-right">
                <div className="mb-3">
                  <div className="w-40 h-px bg-red-700 mb-2"></div>
                  <div className="text-right">
                    <p className="font-bold text-red-900 text-lg">VC Kahleer</p>
                    <p className="text-red-700 font-semibold">Managing Director</p>
                    <p className="text-red-600 text-sm">UNIFORD Foundation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderCompletionCertificate = () => (
    <Card className="max-w-4xl mx-auto bg-white border-4 border-gray-300 shadow-2xl overflow-hidden" id="certificate-completion">
      <CardContent className="p-0 relative">
        {/* Modern wine accent design */}
        <div className="relative h-[700px] bg-gradient-to-br from-gray-50 to-white overflow-hidden">
          {/* Wine ribbon accent */}
          <div className="absolute left-0 top-0 w-3 h-full bg-gradient-to-b from-red-800 via-red-900 to-red-800"></div>
          <div className="absolute right-0 top-0 w-3 h-full bg-gradient-to-b from-red-800 via-red-900 to-red-800"></div>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-5">
            <svg viewBox="0 0 800 700" className="absolute inset-0 w-full h-full">
              <circle cx="150" cy="150" r="80" fill="#7f1d1d" />
              <circle cx="650" cy="550" r="100" fill="#7f1d1d" />
              <polygon points="700,100 780,100 740,180" fill="#7f1d1d" />
              <polygon points="100,500 180,500 140,580" fill="#7f1d1d" />
            </svg>
          </div>
          
          <div className="relative z-10 p-16 h-full flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-10">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-28 h-28 bg-gradient-to-br from-red-800 via-red-900 to-red-800 rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                    <div className="text-center text-white">
                      <Medal className="h-10 w-10 mx-auto mb-1" />
                      <p className="text-xs font-bold">UNIFORD</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                    <CheckCircle className="h-5 w-5 text-red-900" />
                  </div>
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-red-900 tracking-wider">Uniwave</h1>
                  <p className="text-red-700 text-lg font-semibold">Professional Certification</p>
                  <p className="text-red-600 font-medium">Excellence • Innovation • Growth</p>
                </div>
              </div>
              <div className="text-right bg-red-50 p-6 rounded-xl border-2 border-red-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-5 w-5 text-red-700" />
                  <p className="text-sm font-semibold text-red-700">Certificate ID</p>
                </div>
                <p className="font-mono text-2xl text-red-900 font-bold">{formData.certificateNumber}</p>
                <div className="flex items-center justify-end mt-3 gap-1">
                  <Shield className="h-4 w-4 text-red-600" />
                  <p className="text-xs text-red-600 font-medium">Authenticated</p>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="flex-1 flex flex-col justify-center">
              <div className="text-center mb-10">
                {/* Decorative medal cluster */}
                <div className="flex justify-center items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-red-900">
                    <Star className="h-6 w-6 text-red-900" />
                  </div>
                  <div className="w-16 h-16 bg-gradient-to-br from-red-800 to-red-900 rounded-full flex items-center justify-center border-4 border-yellow-400">
                    <Medal className="h-8 w-8 text-yellow-300" />
                  </div>
                  <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-red-900">
                    <Award className="h-6 w-6 text-red-900" />
                  </div>
                </div>
                
                <h2 className="text-6xl font-bold text-red-900 mb-4 tracking-wider" style={{ fontFamily: 'serif' }}>
                  CERTIFICATE
                </h2>
                <p className="text-3xl text-red-700 tracking-wider font-semibold">OF COMPLETION</p>
                <div className="w-40 h-1 bg-gradient-to-r from-red-900 via-yellow-500 to-red-900 mx-auto mt-4"></div>
              </div>
              
              <div className="bg-white p-10 rounded-3xl shadow-2xl border-2 border-red-100 mb-8 mx-4">
                <p className="text-xl text-red-800 mb-6 text-center font-medium">This Certificate is Awarded to</p>
                
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
                  <h3 className="text-5xl font-bold text-center text-red-900 mb-4" style={{ fontFamily: 'serif' }}>
                    {formData.participantName}
                  </h3>
                  <div className="w-32 h-1 bg-red-800 mx-auto"></div>
                </div>
                
                <div className="max-w-3xl mx-auto text-center mb-4">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    In appreciation of your dedication and commitment to excellence in completing the{' '}
                    <strong className="text-red-900">{formData.category}</strong> program in{' '}
                    <strong className="text-red-900">{formData.domain}</strong>. Your perseverance and 
                    professional growth throughout this journey exemplify the highest standards of academic 
                    and professional achievement.
                  </p>
                </div>
                
                {/* Prominent Appreciation Section for Completion */}
                <div className="bg-gradient-to-r from-red-50 via-yellow-50 to-red-50 p-6 rounded-2xl border border-red-200 mb-6">
                  <h4 className="text-base font-bold text-red-900 mb-4 text-center">Words of Appreciation</h4>
                  <div className="space-y-3">
                    <p className="text-sm text-red-800 italic leading-relaxed text-center bg-white p-3 rounded-lg">
                      "Your successful completion of this <strong>{formData.category}</strong> in <strong>{formData.domain}</strong> demonstrates not only 
                      your technical competence but also your commitment to continuous learning and professional excellence."
                    </p>
                    <p className="text-sm text-red-800 italic leading-relaxed text-center bg-white p-3 rounded-lg">
                      "This achievement reflects your ability to adapt, innovate, and contribute meaningfully to the 
                      <strong>{formData.domain}</strong> field, setting a benchmark for future participants."
                    </p>
                    <p className="text-sm text-red-800 italic leading-relaxed text-center bg-white p-3 rounded-lg">
                      "We celebrate your accomplishment and look forward to witnessing the positive impact you will 
                      continue to make in your professional journey and the broader <strong>{formData.domain}</strong> community."
                    </p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-red-50 p-4 rounded-xl border border-red-200">
                    <Award className="h-6 w-6 text-red-700 mx-auto mb-2" />
                    <p className="text-red-700 font-bold">Program</p>
                    <p className="text-red-900 font-semibold">{formData.category}</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200">
                    <Building2 className="h-6 w-6 text-yellow-700 mx-auto mb-2" />
                    <p className="text-yellow-700 font-bold">Domain</p>
                    <p className="text-yellow-900 font-semibold">{formData.domain}</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-xl border border-green-200">
                    <Calendar className="h-6 w-6 text-green-700 mx-auto mb-2" />
                    <p className="text-green-700 font-bold">Duration</p>
                    <p className="text-green-900 font-semibold">{formData.duration || 'As per program'}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-end">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="h-5 w-5 text-red-700" />
                  <p className="text-red-700 font-semibold">Issued on {getCurrentDate()}</p>
                </div>
                <p className="text-red-600 font-mono text-sm">Ref: 24UNF1002</p>
              </div>
              
              {/* Institutional seal */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mb-2 mx-auto border-3 border-yellow-400">
                  <div className="text-yellow-300 text-center">
                    <Shield className="h-6 w-6 mx-auto mb-1" />
                    <p className="text-xs font-bold">SEAL</p>
                  </div>
                </div>
                <p className="text-xs text-red-600 font-medium">Official Seal</p>
              </div>
              
              <div className="text-right">
                <div className="mb-4">
                  <div className="w-44 h-px bg-red-700 mb-3"></div>
                  <div className="text-right">
                    <p className="font-bold text-red-900 text-xl">VC Kahleer</p>
                    <p className="text-red-700 font-semibold">Secretary</p>
                    <p className="text-red-600">UNIFORD Foundation</p>
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
