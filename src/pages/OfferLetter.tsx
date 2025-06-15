
import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Download, FileText, Mail, Calendar, MapPin, User, Building2, GraduationCap, Tag } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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

  const downloadOfferLetter = () => {
    window.print();
    toast({
      title: "Download Started",
      description: "Your offer letter is ready for download",
    });
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
              /* Offer Letter Template */
              <div className="space-y-8">
                {/* Control Buttons */}
                <div className="flex justify-center gap-4 print:hidden">
                  <Button 
                    onClick={downloadOfferLetter}
                    className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download PDF
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={resetForm}
                    className="px-8 py-3"
                  >
                    Generate Another
                  </Button>
                </div>

                {/* Offer Letter Document */}
                <Card className="shadow-2xl bg-white max-w-4xl mx-auto" id="offer-letter">
                  <CardContent className="p-12">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h1 className="text-3xl font-bold text-green-600 mb-2">{getCategoryTitle()}</h1>
                        <h2 className="text-3xl font-bold text-green-600">Offer Letter</h2>
                      </div>
                      <div className="text-right">
                        <h2 className="text-2xl font-bold text-gray-800">UNIFORD</h2>
                        <p className="text-lg text-gray-600">FOUNDATION</p>
                      </div>
                    </div>

                    {/* Reference and Date */}
                    <div className="flex justify-between mb-8">
                      <div>
                        <p className="text-sm text-gray-600">Reference No - {getReferenceNumber()}</p>
                        <p className="text-sm text-gray-600">{getCurrentDate()}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Private & confidential</p>
                      </div>
                    </div>

                    {/* Addressee */}
                    <div className="mb-8">
                      <p className="text-gray-800">To,</p>
                      <p className="font-semibold text-gray-800">{formData.name}</p>
                      <p className="text-gray-800">{formData.university}</p>
                      {formData.address && <p className="text-gray-800">{formData.address}</p>}
                    </div>

                    {/* Main Content */}
                    <div className="space-y-4 mb-8 text-gray-800 leading-relaxed">
                      <p className="font-semibold">
                        Subject: Offer for {getCategoryTitle()} Position - {getPositionTitle()}
                      </p>
                      
                      <p>Dear {formData.name.split(' ')[0]},</p>
                      
                      <p>
                        We are delighted to extend this offer to you for the position of <strong>{getPositionTitle()}</strong> at 
                        Uniford Foundation, effective from <strong>{formatApplicationDate()}</strong>.
                      </p>
                      
                      <p>
                        This opportunity is part of our comprehensive {getCategoryTitle()} program designed to provide 
                        hands-on experience, professional development, and meaningful contribution to our organization's mission. 
                        Your application has been carefully reviewed, and we believe your skills and enthusiasm align perfectly 
                        with our program objectives.
                      </p>
                      
                      <p>
                        <strong>Program Details:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>Position: {getPositionTitle()}</li>
                        <li>Domain: {formData.domain}</li>
                        <li>Category: {getCategoryTitle()}</li>
                        <li>Scholar ID: {formData.uid}</li>
                        <li>Start Date: {formatApplicationDate()}</li>
                        <li>Institution: {formData.university}</li>
                      </ul>
                      
                      <p>
                        Your participation in this program will contribute to our mission of empowering scholars and 
                        creating positive impact in communities. We are committed to providing you with a supportive 
                        learning environment that will enhance your professional growth and development.
                      </p>
                      
                      <p>
                        This offer is contingent upon the accuracy of the information provided in your application. 
                        Should there be any discrepancies in the documents or certificates submitted, we reserve the 
                        right to review and modify this offer accordingly.
                      </p>
                      
                      <p className="font-semibold">
                        Please confirm your acceptance by signing and returning a copy of this letter to our office.
                      </p>
                      
                      <p>
                        We congratulate you on this achievement and look forward to your valuable contributions to our 
                        organization. We are confident that this experience will be mutually beneficial and contribute 
                        to your professional journey.
                      </p>
                      
                      <p>
                        Welcome to the Uniford Foundation family!
                      </p>
                    </div>

                    {/* Closing */}
                    <div className="mb-12">
                      <p className="text-gray-800">Sincerely,</p>
                      <p className="text-gray-800">For and on behalf of the Uniford Foundation,</p>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                      <div className="space-y-2">
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2 text-green-600" />
                          +91 73470-99610
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Mail className="h-4 w-4 mr-2 text-green-600" />
                          info@uniford.org
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <FileText className="h-4 w-4 mr-2 text-green-600" />
                          www.uniford.org
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-gray-800">Sincerely,</p>
                        <div className="mt-8">
                          <p className="font-bold text-gray-800">VC Kahleer</p>
                          <p className="text-sm text-gray-600 italic">(Managing Head)</p>
                        </div>
                      </div>
                    </div>

                    {/* Agreement Acceptance */}
                    <div className="border-t pt-6">
                      <p className="text-sm text-gray-600 italic mb-6">
                        "I hereby accept this offer and confirm that I agree with the privacy policies and program guidelines of Uniford Foundation."
                      </p>
                      
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm text-gray-600">Signature: _______________</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Date: ___________</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Instructions */}
                <Alert className="border-blue-400 bg-blue-50 print:hidden">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800">
                    <strong>Next Steps:</strong> Please email your downloaded offer letter to{' '}
                    <strong>info@uniford.org</strong> with the subject line{' '}
                    "Offer Letter Verification - {formData.uid}". The organization will verify your details{' '}
                    and contact you with further instructions.
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
