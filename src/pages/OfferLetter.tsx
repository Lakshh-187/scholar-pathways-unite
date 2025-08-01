import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, FileText, Mail, Calendar, MapPin, User, Building2, GraduationCap, Tag, Award, CheckCircle, Briefcase, Clock, DollarSign } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { downloadBadgeAsImage, downloadBadgeAsPDF } from '@/utils/downloadUtils';
import AuthenticationStamp from '@/components/AuthenticationStamp';

const OfferLetter = () => {
  const [formData, setFormData] = useState({
    name: '',
    university: '',
    domain: '',
    category: '',
    uid: '',
    email: '',
    phone: '',
    address: '',
    applicationDate: ''
  });
  const [showOffer, setShowOffer] = useState(false);
  const [offerFormat, setOfferFormat] = useState<'compact' | 'detailed'>('compact');
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

  const generateOfferLetter = () => {
    // Validate UID format
    if (!formData.uid.startsWith('UNF')) {
      toast({
        title: "Invalid UID",
        description: "UID must start with 'UNF' followed by numbers",
        variant: "destructive"
      });
      return;
    }

    // Validate all required fields
    if (!formData.name || !formData.university || !formData.domain || !formData.category || !formData.uid || !formData.email || !formData.applicationDate) {
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

  const downloadAs = async (format: 'pdf' | 'png' | 'jpg') => {
    if (!showOffer) return;
    
    setIsDownloading(true);
    const filename = `uniford-offer-letter-${offerFormat}-${formData.uid}`;
    const elementId = `offer-letter-${offerFormat}`;
    
    try {
      if (format === 'pdf') {
        await downloadBadgeAsPDF(elementId, filename);
      } else {
        await downloadBadgeAsImage(elementId, filename, format);
      }
      
      toast({
        title: "Download Successful",
        description: `Your ${offerFormat} offer letter has been downloaded as ${format.toUpperCase()}`,
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "There was an error downloading your offer letter. Please try again.",
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
      uid: '',
      email: '',
      phone: '',
      address: '',
      applicationDate: ''
    });
    setShowOffer(false);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatApplicationDate = () => {
    if (!formData.applicationDate) return '';
    const date = new Date(formData.applicationDate);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getReferenceNumber = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `SI/HR/${year}-${month}/${day}/${Math.floor(Math.random() * 1000)}`;
  };

  const getCategoryTitle = () => {
    switch (formData.category) {
      case 'internship':
        return 'Internship';
      case 'fellowship':
        return 'Fellowship';
      case 'project':
        return 'Project';
      case 'research':
        return 'Research Program';
      case 'uni-pitch':
        return 'Uni-Pitch Program';
      case 'badge':
        return 'Badge Program';
      case 'certification':
        return 'Certification Program';
      default:
        return 'Program';
    }
  };

  const getPositionTitle = () => {
    const categoryTitle = getCategoryTitle();
    if (formData.category === 'internship') {
      return `${formData.domain} Intern`;
    } else if (formData.category === 'fellowship') {
      return `${formData.domain} Fellow`;
    } else if (formData.category === 'project') {
      return `${formData.domain} Project Associate`;
    } else if (formData.category === 'research') {
      return `${formData.domain} Research Scholar`;
    } else if (formData.category === 'uni-pitch') {
      return `Uni-Pitch ${formData.domain} Participant`;
    } else if (formData.category === 'badge') {
      return `${formData.domain} Badge Holder`;
    } else if (formData.category === 'certification') {
      return `${formData.domain} Certification Candidate`;
    }
    return `${formData.domain} ${categoryTitle} Participant`;
  };

  const renderCompactOfferLetter = () => (
    <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-blue-50 border-0 shadow-none overflow-hidden" id="offer-letter-compact">
      <CardContent className="p-8 relative">
        {/* Modern Header with Gradient Background */}
        <div className="relative mb-8 p-6 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 rounded-2xl text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Award className="h-8 w-8 text-yellow-300" />
                <h1 className="text-3xl font-bold">{getCategoryTitle()}</h1>
              </div>
              <h2 className="text-2xl font-semibold text-blue-100">OFFER LETTER</h2>
            </div>
            <div className="text-right">
              <h2 className="text-3xl font-bold tracking-wider">UNIFORD</h2>
              <p className="text-lg text-blue-100 font-medium">FOUNDATION</p>
              <div className="mt-2 px-3 py-1 bg-white/20 rounded-full text-sm">
                Est. 2024
              </div>
            </div>
          </div>
        </div>

        {/* Reference Info in Modern Cards */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <FileText className="h-4 w-4 text-blue-600" />
              <span>Ref: {getReferenceNumber()}</span>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Calendar className="h-4 w-4 text-purple-600" />
              <span>{getCurrentDate()}</span>
            </div>
          </div>
        </div>

        {/* Scholar Info Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
              {formData.name.charAt(0)}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-1">{formData.name}</h3>
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Building2 className="h-4 w-4" />
                <span className="text-sm">{formData.university}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Tag className="h-4 w-4" />
                <span className="text-sm font-medium text-blue-600">{formData.uid}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-4 mb-6 text-gray-700">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-xl">
            <p className="font-semibold text-green-800 flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Congratulations! You've been selected for {getPositionTitle()}
            </p>
          </div>
          
          <p className="text-gray-700 leading-relaxed">
            We're excited to welcome you to <strong>Uniford Foundation</strong> as our new <strong>{getPositionTitle()}</strong>. 
            Your journey begins on <strong>{formatApplicationDate()}</strong>, and we believe your skills will make a significant impact.
          </p>
          
          {/* Program Details in Modern Grid */}
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-2">
                <GraduationCap className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-800">Position</span>
              </div>
              <p className="text-gray-700">{getPositionTitle()}</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 mb-2">
                <Tag className="h-5 w-5 text-purple-600" />
                <span className="font-semibold text-purple-800">Domain</span>
              </div>
              <p className="text-gray-700">{formData.domain}</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl border border-green-100">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">Start Date</span>
              </div>
              <p className="text-gray-700">{formatApplicationDate()}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
              <div className="flex items-center gap-2 mb-2">
                <User className="h-5 w-5 text-orange-600" />
                <span className="font-semibold text-orange-800">Scholar ID</span>
              </div>
              <p className="text-gray-700">{formData.uid}</p>
            </div>
          </div>
        </div>

        {/* Footer with Contact and Signature */}
        <div className="grid md:grid-cols-2 gap-6 mt-8 pt-6 border-t border-gray-200">
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 mb-3">Contact Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>+91 73470-99610</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4 text-blue-600" />
                <span>info@uniford.org</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <FileText className="h-4 w-4 text-blue-600" />
                <span>www.uniford.org</span>
              </div>
            </div>
          </div>
          
          <div className="text-right">
            <div className="mb-4">
              <p className="text-gray-700 font-medium">Best Regards,</p>
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
                <p className="font-bold text-lg">VC Kahleer</p>
                <p className="text-sm text-blue-100">Managing Head</p>
                <p className="text-xs text-blue-200 mt-1">Uniford Foundation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Acceptance Section */}
        <div className="mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <p className="text-sm text-gray-600 mb-4 italic text-center">
            "I accept this offer and agree to the terms, privacy policies, and program guidelines of Uniford Foundation."
          </p>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <div className="border-b-2 border-gray-300 w-32 mb-1"></div>
              <p className="text-xs text-gray-500">Signature</p>
            </div>
            <div className="text-center">
              <div className="border-b-2 border-gray-300 w-24 mb-1"></div>
              <p className="text-xs text-gray-500">Date</p>
            </div>
          </div>
        </div>

        {/* Authentication Stamp Area */}
        <div className="absolute bottom-8 right-8">
          <div className="bg-white/80 p-2 rounded-lg border border-gray-200 shadow-sm">
            <p className="text-xs text-gray-500 text-center mb-2">Verification Stamp</p>
            <AuthenticationStamp stampType="uniford" size="medium" applied={false} />
            <p className="text-xs text-gray-400 text-center mt-1">Awaiting Authentication</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const renderDetailedOfferLetter = () => (
    <Card className="max-w-4xl mx-auto bg-white border-0 shadow-none overflow-hidden" id="offer-letter-detailed">
      <CardContent className="p-0 relative">
        {/* Modern Colorful Header inspired by reference */}
        <div className="relative h-32 bg-gradient-to-r from-yellow-400 via-pink-500 via-purple-500 to-blue-500 overflow-hidden">
          <div className="absolute inset-0" style={{
            background: 'radial-gradient(circle at 20% 80%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)',
          }}></div>
          <div className="absolute top-4 right-6 text-right text-white">
            <h2 className="text-2xl font-bold">Official Offer Letter</h2>
            <p className="text-sm opacity-90">{getCurrentDate()}</p>
          </div>
        </div>

        <div className="p-8">
          {/* Company Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Uniford Foundation</h1>
            <p className="text-lg text-gray-600 font-medium">Excellence in Research, Innovation & Development</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span>Ref: {getReferenceNumber()}</span>
              <span>VC Kahleer, Managing Head</span>
              <span>info@uniford.org | +91 73470-99610</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg text-gray-700">Dear <strong>{formData.name}</strong>,</p>
            
            <p>
              On behalf of <strong>Uniford Foundation</strong>, I am delighted to extend this formal offer for your participation in our esteemed 
              <strong> {getCategoryTitle()}</strong> program. This offer represents our confidence in your potential and commitment to academic 
              and professional excellence.
            </p>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-6">
              <h3 className="font-bold text-blue-800 text-lg mb-3 flex items-center gap-2">
                <Award className="h-5 w-5" />
                Program Details & Appointment
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-2"><strong>Position:</strong> {getPositionTitle()}</p>
                  <p className="mb-2"><strong>Program Type:</strong> {getCategoryTitle()}</p>
                  <p className="mb-2"><strong>Domain Focus:</strong> {formData.domain}</p>
                  <p className="mb-2"><strong>Scholar ID:</strong> {formData.uid}</p>
                </div>
                <div>
                  <p className="mb-2"><strong>Commencement Date:</strong> {formatApplicationDate()}</p>
                  <p className="mb-2"><strong>Institution:</strong> {formData.university}</p>
                  <p className="mb-2"><strong>Program Duration:</strong> As per category guidelines</p>
                  <p className="mb-2"><strong>Status:</strong> Active Scholar</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                Terms of Engagement
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">Program Benefits</h4>
                    <ul className="text-sm space-y-1 text-green-700">
                      <li>• Official certification and credentials</li>
                      <li>• Access to exclusive resources and mentorship</li>
                      <li>• Professional networking opportunities</li>
                      <li>• Skill development and training programs</li>
                      <li>• Portfolio enhancement support</li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-800 mb-2">Learning & Development</h4>
                    <ul className="text-sm space-y-1 text-purple-700">
                      <li>• Industry-standard project assignments</li>
                      <li>• Regular feedback and evaluation sessions</li>
                      <li>• Access to digital learning platforms</li>
                      <li>• Participation in webinars and workshops</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2">Scholar Responsibilities</h4>
                    <ul className="text-sm space-y-1 text-orange-700">
                      <li>• Maintain high standards of professionalism</li>
                      <li>• Complete assigned tasks within deadlines</li>
                      <li>• Participate actively in program activities</li>
                      <li>• Adhere to organizational policies and ethics</li>
                      <li>• Contribute positively to team objectives</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">Support & Resources</h4>
                    <ul className="text-sm space-y-1 text-blue-700">
                      <li>• Dedicated program coordinator assistance</li>
                      <li>• Technical support and guidance</li>
                      <li>• Regular progress monitoring</li>
                      <li>• Career counseling and placement support</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 my-6">
              <h3 className="font-semibold text-yellow-800 text-lg mb-3 flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Important Terms & Conditions
              </h3>
              <div className="text-sm text-yellow-800 space-y-2">
                <p>• This appointment is subject to satisfactory completion of program requirements and adherence to organizational policies.</p>
                <p>• All intellectual property created during the program belongs to Uniford Foundation unless otherwise specified.</p>
                <p>• Participants must maintain confidentiality regarding internal processes and sensitive information.</p>
                <p>• The organization reserves the right to modify program structure based on industry requirements and organizational needs.</p>
                <p>• Successful completion will result in official certification and may lead to extended opportunities within our network.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800 text-lg">Program Commencement & Next Steps</h3>
              <p>
                Your program is scheduled to commence on <strong>{formatApplicationDate()}</strong>. Prior to your start date, you will receive 
                detailed program guidelines, access credentials, and orientation materials via your registered email address.
              </p>
              <p>
                We encourage you to prepare by familiarizing yourself with industry trends in <strong>{formData.domain}</strong> and reviewing 
                any preparatory materials that will be shared with you.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl my-6">
              <p className="text-center font-medium">
                <strong>Acceptance Deadline:</strong> Please confirm your acceptance within 10 business days from the date of this letter. 
                Failure to respond within the stipulated timeframe may result in the offer being withdrawn.
              </p>
            </div>

            <p className="text-center text-lg font-medium text-gray-800">
              We are excited to welcome you to the Uniford Foundation family and look forward to your valuable contributions 
              to our mission of fostering innovation and excellence.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 mb-4">Scholar Acceptance:</p>
                    <div className="border-b-2 border-gray-300 w-48 mb-2"></div>
                    <p className="text-sm text-gray-600">Signature</p>
                    <p className="font-semibold">{formData.name}</p>
                    <p className="text-sm text-gray-500 mt-2">Scholar ID: {formData.uid}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-8">
                    <p className="text-sm text-gray-600 mb-4">Date of Acceptance:</p>
                    <div className="border-b-2 border-gray-300 w-32 mb-2"></div>
                    <p className="text-sm text-gray-600">DD/MM/YYYY</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right mt-8">
                <p className="font-semibold text-gray-700 mb-4">Warm Regards,</p>
                <div className="inline-block">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white text-center">
                    <p className="font-bold text-lg">VC Kahleer</p>
                    <p className="text-sm text-blue-100">Managing Head</p>
                    <p className="text-xs text-blue-200">Uniford Foundation</p>
                  </div>
                  <div className="mt-4 text-center text-sm text-gray-600">
                    <p>Email: info@uniford.org</p>
                    <p>Phone: +91 73470-99610</p>
                    <p>Website: www.uniford.org</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Authentication Stamp Area for Detailed Format */}
          <div className="absolute bottom-8 right-8">
            <div className="bg-white p-3 rounded-lg border-2 border-gray-200 shadow-lg">
              <p className="text-xs text-gray-600 text-center mb-2 font-semibold">OFFICIAL VERIFICATION</p>
              <AuthenticationStamp stampType="uniford" size="large" applied={false} />
              <p className="text-xs text-gray-500 text-center mt-2">For Authentication Contact:</p>
              <p className="text-xs text-blue-600 text-center font-mono">info@uniford.org</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

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
              Official <span className="text-yellow-300">Offer Letter</span><br />
              <span className="text-unifor-blue">Generator</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-4xl mx-auto mb-8">
              Generate your official offer letter for any program instantly
            </p>
          </div>
        </div>
      </section>

      {/* Main Application Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
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
                      <Label htmlFor="uid">Scholar UID *</Label>
                      <Input
                        id="uid"
                        name="uid"
                        type="text"
                        placeholder="Enter your UID (e.g., UNF001)"
                        value={formData.uid}
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
                      <Label htmlFor="applicationDate">Date of Application *</Label>
                      <Input
                        id="applicationDate"
                        name="applicationDate"
                        type="date"
                        value={formData.applicationDate}
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

                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        type="text"
                        placeholder="Enter your address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="text-lg py-3"
                      />
                    </div>
                  </div>
                  
                  <Button 
                    onClick={generateOfferLetter}
                    className="w-full bg-unifor-purple hover:bg-unifor-dark-purple text-white py-3 text-lg"
                  >
                    <FileText className="mr-2 h-5 w-5" />
                    Generate Offer Letter
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-8">
                {/* Format Selection */}
                <div className="flex justify-center gap-4 print:hidden">
                  <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
                    <Button 
                      onClick={() => setOfferFormat('compact')}
                      variant={offerFormat === 'compact' ? 'default' : 'ghost'}
                      className="px-6"
                    >
                      Compact Format
                    </Button>
                    <Button 
                      onClick={() => setOfferFormat('detailed')}
                      variant={offerFormat === 'detailed' ? 'default' : 'ghost'}
                      className="px-6"
                    >
                      Detailed Format
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

                {/* Offer Letter Document */}
                <div className="flex justify-center">
                  <div className="bg-white p-4 rounded-xl shadow-2xl">
                    {offerFormat === 'compact' ? renderCompactOfferLetter() : renderDetailedOfferLetter()}
                  </div>
                </div>

                {/* Instructions */}
                <Alert className="border-blue-400 bg-blue-50 print:hidden">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Next Steps:</strong> Email your downloaded offer letter to{' '}
                    <strong>info@uniford.org</strong> with subject line{' '}
                    "Offer Letter Verification - {formData.uid}" for verification and further instructions.
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

export default OfferLetter;
