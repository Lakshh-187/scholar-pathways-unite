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
            <h2 className="text-2xl font-bold">Offer Letter</h2>
            <p className="text-sm opacity-90">{getCurrentDate()}</p>
          </div>
        </div>

        <div className="p-8">
          {/* Company Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Uniford Foundation</h1>
            <p className="text-lg text-gray-600 font-medium">The Research & Development Company</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
              <span>Ref: {getReferenceNumber()}</span>
              <span>Guy Manuel Davidson</span>
              <span>44 Stonecast Drive, Atlanta</span>
            </div>
          </div>

          {/* Recipient */}
          <div className="mb-6">
            <p className="text-lg text-gray-700">Dear {formData.name},</p>
          </div>

          {/* Main Content */}
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              It is my pleasure to extend the following offer of employment to you on behalf of <strong>UNIFORD FOUNDATION</strong>. This offer is contingent upon your 
              passing our mandatory background check, our receipt of your acceptance, and any other contingencies you may wish to discuss.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Position Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-blue-600" />
                    Your Title: {getPositionTitle()}
                  </h3>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-purple-600" />
                    Reporting Relationship
                  </h3>
                  <p className="text-sm">The position will report to Task Expert, Research Department.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-green-600" />
                    The Position
                  </h3>
                  <p className="text-sm">Base Salary: Annual salary of $45,000 USD, subject to deductions for taxes and other withholdings as required by law or the policies of the company.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <FileText className="h-5 w-5 text-orange-600" />
                    Non-Compete Agreement
                  </h3>
                  <p className="text-sm">Our standard non-compete agreement must be signed and on file before your first day.</p>
                </div>
              </div>

              {/* Benefits & Details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    Benefits
                  </h3>
                  <p className="text-sm">The current standard company health, life, disability, and dental insurance coverage are generally supported for full-time employees. Training courses, certifications, and tuition reimbursement will generally take place per company policy. Employee contribution to the payment of benefit plans is determined annually.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-purple-600" />
                    Vacation and Personal Emergency Time Off
                  </h3>
                  <p className="text-sm">Vacation is accrued at x.xx hours per pay period, which is generally two weeks per an annual basis. Personal days are generally accrued at the company policy.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-green-600" />
                    Business/Travel Reimbursement
                  </h3>
                  <p className="text-sm">Normal and reasonable expenses will be reimbursed on a monthly basis per company policy. Filing of the appropriate expense request form.</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 my-6">
              <p className="text-blue-800">
                <strong>Your employment with [Company Name] is at-will and either party can terminate the relationship at any time with or without cause 
                and with or without notice.</strong> You acknowledge that this letter supersedes, cancel, and the final form of any referenced document(s), represents 
                the entire agreement between you and [Company Name] as to the specified terms and does not modify any verbal or written agreements, promises or representations that 
                are not specifically stated in this offer letter and are controlled by your Compensation Terms.
              </p>
            </div>

            <p>
              <strong>If you are in agreement with the above stated information, please sign below. This offer expires in 10 business days.</strong>
            </p>

            <p>
              We are excited to have you join our team and look forward to working with you!
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-8">
                    <div className="border-b-2 border-gray-300 w-48 mb-2"></div>
                    <p className="text-sm text-gray-600">Candidate's Name</p>
                    <p className="font-semibold">{formData.name}</p>
                  </div>
                </div>
                <div>
                  <div className="mb-8">
                    <div className="border-b-2 border-gray-300 w-32 mb-2"></div>
                    <p className="text-sm text-gray-600">Date</p>
                  </div>
                </div>
              </div>
              
              <div className="text-right mt-8">
                <p className="font-semibold">Sincerely,</p>
                <div className="mt-4 p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white inline-block">
                  <p className="font-bold text-lg">VC Kahleer</p>
                  <p className="text-sm text-blue-100">Managing Head</p>
                  <p className="text-xs text-blue-200">Uniford Foundation</p>
                </div>
              </div>
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
