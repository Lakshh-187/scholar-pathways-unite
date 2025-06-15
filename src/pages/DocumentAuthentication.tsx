import React, { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Shield, Stamp, Mail, CheckCircle, Lock, Star, FileCheck, Download, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const DocumentAuthentication = () => {
  const [accessKey, setAccessKey] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [selectedStamp, setSelectedStamp] = useState('');
  const { toast } = useToast();

  const stampOptions = [
    {
      id: 'uniford',
      name: 'Uniford Foundation',
      details: 'U85500HR2024NPL120586',
      description: 'Official Uniford Foundation Authentication'
    },
    {
      id: 'uncif',
      name: 'UNCIF',
      details: 'UNCIF-AUTH-2024',
      description: 'UNCIF Department Verification'
    },
    {
      id: 'scholar',
      name: 'Scholar Department',
      details: 'SCHOLAR-DEPT-VERIFIED',
      description: 'Scholar Department Authentication'
    }
  ];

  const handleAccessKeySubmit = () => {
    if (accessKey === 'UNF10188') {
      setIsAuthorized(true);
      toast({
        title: "Access Granted",
        description: "Welcome to Document Authentication Portal",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Invalid authentication key. Please contact administration.",
        variant: "destructive"
      });
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded successfully`,
      });
    }
  };

  const authenticateDocument = () => {
    if (!uploadedFile) {
      toast({
        title: "No Document",
        description: "Please upload a document first",
        variant: "destructive"
      });
      return;
    }

    if (!selectedStamp) {
      toast({
        title: "No Stamp Selected",
        description: "Please select an authentication stamp",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate authentication process
    setTimeout(() => {
      setIsAuthenticated(true);
      setIsProcessing(false);
      const selectedStampData = stampOptions.find(stamp => stamp.id === selectedStamp);
      toast({
        title: "Document Authenticated",
        description: `${selectedStampData?.name} authentication stamp has been applied successfully`,
      });
    }, 2000);
  };

  const sendEmail = () => {
    if (!recipientEmail) {
      toast({
        title: "Email Required",
        description: "Please enter recipient email address",
        variant: "destructive"
      });
      return;
    }

    if (!isAuthenticated) {
      toast({
        title: "Document Not Authenticated",
        description: "Please authenticate the document first",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);
    
    // Simulate email sending
    setTimeout(() => {
      setIsSending(false);
      toast({
        title: "Email Sent Successfully",
        description: `Authenticated document sent to ${recipientEmail}`,
      });
      setRecipientEmail('');
      setEmailMessage('');
    }, 1500);
  };

  const resetForm = () => {
    setUploadedFile(null);
    setPreviewUrl('');
    setIsAuthenticated(false);
    setRecipientEmail('');
    setEmailMessage('');
  };

  if (!isAuthorized) {
    return (
      <Layout>
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-md mx-auto">
              <Card className="bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                        <Shield className="h-10 w-10 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                        <Lock className="h-4 w-4 text-gray-900" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold text-white mb-2">
                    Document Authentication Portal
                  </CardTitle>
                  <p className="text-blue-200">
                    Secure verification system for official documents
                  </p>
                  <Badge variant="outline" className="bg-yellow-400/20 text-yellow-300 border-yellow-400/30 mt-4">
                    HIGH SECURITY ACCESS
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="accessKey" className="text-white font-semibold">Authentication Key</Label>
                    <Input
                      id="accessKey"
                      type="password"
                      placeholder="Enter your authentication key"
                      value={accessKey}
                      onChange={(e) => setAccessKey(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/50 h-12"
                      onKeyPress={(e) => e.key === 'Enter' && handleAccessKeySubmit()}
                    />
                  </div>
                  <Button 
                    onClick={handleAccessKeySubmit}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold h-12 text-lg"
                  >
                    <Shield className="mr-2 h-5 w-5" />
                    Authenticate Access
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
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* High-tech animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Stamp className="h-12 w-12 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center border-2 border-white">
                  <Star className="h-5 w-5 text-gray-900" />
                </div>
              </div>
            </div>
            <Badge variant="outline" className="bg-white/20 text-white border-white/30 px-4 py-1 mb-4">
              AUTHENTICATED PORTAL
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Document <span className="text-blue-300">Authentication</span><br />
              <span className="text-purple-300">System</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              High-security verification portal for authenticating and sharing official documents
            </p>
          </div>
        </div>
      </section>

      {/* Main Authentication Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload and Authentication Panel */}
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Upload className="mr-3 h-6 w-6" />
                    Document Upload & Authentication
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* File Upload */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-gray-800">Upload Document</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={handleFileUpload}
                        className="hidden"
                        id="fileUpload"
                      />
                      <label htmlFor="fileUpload" className="cursor-pointer">
                        <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 text-lg">
                          Click to upload document
                        </p>
                        <p className="text-gray-400 text-sm mt-2">
                          Supports PDF, JPG, PNG files
                        </p>
                      </label>
                    </div>
                    
                    {uploadedFile && (
                      <Alert className="border-green-400 bg-green-50">
                        <FileCheck className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          <strong>File Ready:</strong> {uploadedFile.name}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Stamp Selection */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-gray-800">Select Authentication Stamp</Label>
                    <Select value={selectedStamp} onValueChange={setSelectedStamp}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Choose authentication stamp" />
                      </SelectTrigger>
                      <SelectContent>
                        {stampOptions.map((stamp) => (
                          <SelectItem key={stamp.id} value={stamp.id}>
                            <div className="flex flex-col">
                              <span className="font-semibold">{stamp.name}</span>
                              <span className="text-sm text-gray-500">{stamp.details}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {selectedStamp && (
                      <Alert className="border-blue-400 bg-blue-50">
                        <Stamp className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-blue-800">
                          <strong>Selected Stamp:</strong> {stampOptions.find(s => s.id === selectedStamp)?.description}
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Authentication Button */}
                  <div className="space-y-4">
                    <Button
                      onClick={authenticateDocument}
                      disabled={!uploadedFile || !selectedStamp || isAuthenticated || isProcessing}
                      className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white py-4 text-lg disabled:opacity-50"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing Authentication...
                        </>
                      ) : isAuthenticated ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Document Authenticated
                        </>
                      ) : (
                        <>
                          <Stamp className="mr-2 h-5 w-5" />
                          Apply Authentication Stamp
                        </>
                      )}
                    </Button>

                    {isAuthenticated && (
                      <Alert className="border-green-400 bg-green-50">
                        <Shield className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          <strong>Authentication Complete:</strong> Document has been verified and stamped with {stampOptions.find(s => s.id === selectedStamp)?.name} authentication seal.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Reset Button */}
                  <Button
                    variant="outline"
                    onClick={() => {
                      resetForm();
                      setSelectedStamp('');
                    }}
                    className="w-full border-2 border-gray-300 hover:border-gray-400"
                  >
                    Reset & Upload New Document
                  </Button>
                </CardContent>
              </Card>

              {/* Email Sharing Panel */}
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <Mail className="mr-3 h-6 w-6" />
                    Share Authenticated Document
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="recipientEmail" className="text-lg font-semibold text-gray-800">
                        Recipient Email Address
                      </Label>
                      <Input
                        id="recipientEmail"
                        type="email"
                        placeholder="Enter recipient's email"
                        value={recipientEmail}
                        onChange={(e) => setRecipientEmail(e.target.value)}
                        className="text-lg py-3"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="emailMessage" className="text-lg font-semibold text-gray-800">
                        Email Message (Optional)
                      </Label>
                      <Textarea
                        id="emailMessage"
                        placeholder="Add a personal message..."
                        value={emailMessage}
                        onChange={(e) => setEmailMessage(e.target.value)}
                        className="min-h-24"
                      />
                    </div>

                    <Button
                      onClick={sendEmail}
                      disabled={!isAuthenticated || !recipientEmail || isSending}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg disabled:opacity-50"
                    >
                      {isSending ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending Email...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Authenticated Document
                        </>
                      )}
                    </Button>

                    {!isAuthenticated && (
                      <Alert className="border-orange-400 bg-orange-50">
                        <Shield className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-orange-800">
                          Please authenticate a document first before sharing.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Document Preview */}
                  {previewUrl && (
                    <div className="space-y-2">
                      <Label className="text-lg font-semibold text-gray-800">Document Preview</Label>
                      <div className="border rounded-lg p-4 bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <FileCheck className="h-8 w-8 text-blue-600" />
                            <div>
                              <p className="font-semibold text-gray-800">{uploadedFile?.name}</p>
                              <p className="text-sm text-gray-600">
                                {isAuthenticated ? 'Authenticated Document' : 'Pending Authentication'}
                              </p>
                            </div>
                          </div>
                          {isAuthenticated && (
                            <div className="flex items-center gap-2">
                              <Shield className="h-5 w-5 text-green-600" />
                              <Badge className="bg-green-100 text-green-800">
                                Verified
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentAuthentication;
