import React, { useState, useRef } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Shield, Stamp, Mail, CheckCircle, Lock, Star, FileCheck, Download, Send, ExternalLink, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AuthenticationStamp from '@/components/AuthenticationStamp';

const DocumentAuthentication = () => {
  const [accessKey, setAccessKey] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('');
  const [senderEmail, setSenderEmail] = useState('info@uniford.org');
  const [emailMessage, setEmailMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedStamp, setSelectedStamp] = useState('');
  const [stampPosition, setStampPosition] = useState({ x: 0, y: 0 });
  const [showStampPreview, setShowStampPreview] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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
      setIsAuthenticated(false);
      setShowStampPreview(false);
      toast({
        title: "File Uploaded",
        description: `${file.name} has been uploaded successfully`,
      });
    }
  };

  const handleStampPosition = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setStampPosition({ x: Math.max(10, Math.min(90, x)), y: Math.max(10, Math.min(90, y)) });
  };

  const punchStampOnDocument = async () => {
    if (!uploadedFile || !selectedStamp || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create image from uploaded file
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      
      // Draw original document
      ctx.drawImage(img, 0, 0);
      
      // Calculate stamp position
      const stampX = (stampPosition.x / 100) * canvas.width;
      const stampY = (stampPosition.y / 100) * canvas.height;
      const stampSize = Math.min(canvas.width, canvas.height) * 0.15; // 15% of smaller dimension
      
      // Draw stamp background circle
      ctx.save();
      ctx.globalAlpha = 0.9;
      
      // Create gradient for stamp
      const gradient = ctx.createRadialGradient(stampX, stampY, 0, stampX, stampY, stampSize/2);
      gradient.addColorStop(0, '#3B82F6');
      gradient.addColorStop(1, '#1E40AF');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(stampX, stampY, stampSize/2, 0, 2 * Math.PI);
      ctx.fill();
      
      // Add stamp border
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Add inner dashed circle
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.arc(stampX, stampY, stampSize/2 - 10, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.setLineDash([]);
      
      // Add stamp text
      ctx.fillStyle = '#FFFFFF';
      ctx.font = `bold ${stampSize * 0.08}px Arial`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const selectedStampData = stampOptions.find(s => s.id === selectedStamp);
      const stampText = selectedStampData?.name.toUpperCase() || 'AUTHENTICATED';
      
      // Draw curved text around the circle
      const radius = stampSize/2 - 20;
      const textLength = stampText.length;
      const angleStep = (Math.PI * 1.5) / textLength;
      
      for (let i = 0; i < textLength; i++) {
        const angle = -Math.PI/2 - (angleStep * (i - textLength/2));
        const x = stampX + Math.cos(angle) * radius;
        const y = stampY + Math.sin(angle) * radius;
        
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle + Math.PI/2);
        ctx.fillText(stampText[i], 0, 0);
        ctx.restore();
      }
      
      // Add center text
      ctx.font = `bold ${stampSize * 0.06}px Arial`;
      ctx.fillText('VERIFIED', stampX, stampY - 5);
      ctx.font = `${stampSize * 0.04}px Arial`;
      ctx.fillText(new Date().toLocaleDateString(), stampX, stampY + 8);
      
      ctx.restore();
      
      // Convert canvas to blob and create new preview URL
      canvas.toBlob((blob) => {
        if (blob) {
          const stampedUrl = URL.createObjectURL(blob);
          setPreviewUrl(stampedUrl);
          setShowStampPreview(true);
        }
      });
    };
    
    img.src = previewUrl;
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
    
    // Simulate authentication process and punch stamp
    setTimeout(async () => {
      await punchStampOnDocument();
      setIsAuthenticated(true);
      setIsProcessing(false);
      const selectedStampData = stampOptions.find(stamp => stamp.id === selectedStamp);
      toast({
        title: "Document Authenticated",
        description: `${selectedStampData?.name} authentication stamp has been applied successfully`,
      });
    }, 2000);
  };

  const openEmailClient = () => {
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

    const selectedStampData = stampOptions.find(s => s.id === selectedStamp);
    const subject = encodeURIComponent(`Authenticated Document - ${uploadedFile?.name}`);
    const body = encodeURIComponent(`Dear Recipient,

Please find attached the authenticated document: ${uploadedFile?.name}

This document has been verified and authenticated with ${selectedStampData?.name} authentication seal (${selectedStampData?.details}).

${emailMessage ? `\nMessage: ${emailMessage}` : ''}

Best regards,
Uniford Foundation Authentication Portal`);

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}&from=${senderEmail}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Email Client Opened",
      description: `Email draft created for ${recipientEmail}`,
    });
  };

  const resetForm = () => {
    setUploadedFile(null);
    setPreviewUrl('');
    setIsAuthenticated(false);
    setRecipientEmail('');
    setEmailMessage('');
    setShowStampPreview(false);
    setStampPosition({ x: 0, y: 0 });
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
              High-security verification portal for authenticating and sharing official documents with stamp punching
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
                    Document Upload & Stamp Punching
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  {/* File Upload */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-gray-800">Upload Document</Label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 transition-colors">
                      <input
                        ref={fileInputRef}
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

                  {/* Document Preview with Stamp Position */}
                  {previewUrl && (
                    <div className="space-y-4">
                      <Label className="text-lg font-semibold text-gray-800">
                        Position Stamp (Click on document to place stamp)
                      </Label>
                      <div 
                        className="relative border rounded-lg overflow-hidden cursor-crosshair bg-gray-100"
                        onClick={handleStampPosition}
                      >
                        <img 
                          src={previewUrl} 
                          alt="Document Preview" 
                          className="w-full h-64 object-contain"
                        />
                        {!isAuthenticated && (
                          <div 
                            className="absolute w-8 h-8 border-2 border-blue-500 border-dashed rounded-full bg-blue-100/50 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ 
                              left: `${stampPosition.x}%`, 
                              top: `${stampPosition.y}%` 
                            }}
                          >
                            <Stamp className="h-4 w-4 text-blue-600" />
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Click anywhere on the document to position the authentication stamp
                      </p>
                    </div>
                  )}

                  {/* Stamp Selection with Preview */}
                  <div className="space-y-4">
                    <Label className="text-lg font-semibold text-gray-800">Select Authentication Stamp</Label>
                    <Select value={selectedStamp} onValueChange={setSelectedStamp}>
                      <SelectTrigger className="h-12 text-base">
                        <SelectValue placeholder="Choose authentication stamp" />
                      </SelectTrigger>
                      <SelectContent>
                        {stampOptions.map((stamp) => (
                          <SelectItem key={stamp.id} value={stamp.id}>
                            <div className="flex items-center gap-3">
                              <AuthenticationStamp stampType={stamp.id as any} size="small" applied={true} />
                              <div className="flex flex-col">
                                <span className="font-semibold">{stamp.name}</span>
                                <span className="text-sm text-gray-500">{stamp.details}</span>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {selectedStamp && (
                      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <AuthenticationStamp stampType={selectedStamp as any} size="medium" applied={true} />
                        <div>
                          <Alert className="border-blue-400 bg-transparent border-0 p-0">
                            <Stamp className="h-4 w-4 text-blue-600" />
                            <AlertDescription className="text-blue-800">
                              <strong>Selected Stamp:</strong> {stampOptions.find(s => s.id === selectedStamp)?.description}
                            </AlertDescription>
                          </Alert>
                        </div>
                      </div>
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
                          Punching Stamp on Document...
                        </>
                      ) : isAuthenticated ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Stamp Applied Successfully
                        </>
                      ) : (
                        <>
                          <Stamp className="mr-2 h-5 w-5" />
                          Punch Authentication Stamp
                        </>
                      )}
                    </Button>

                    {isAuthenticated && (
                      <Alert className="border-green-400 bg-green-50">
                        <Shield className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          <strong>Stamp Punched:</strong> Authentication stamp has been permanently applied to your document. The stamp is now visible on the document.
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
                      <Label htmlFor="senderEmail" className="text-lg font-semibold text-gray-800">
                        From (Sender Email)
                      </Label>
                      <Input
                        id="senderEmail"
                        type="email"
                        value={senderEmail}
                        onChange={(e) => setSenderEmail(e.target.value)}
                        className="text-lg py-3 bg-gray-50"
                        readOnly
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="recipientEmail" className="text-lg font-semibold text-gray-800">
                        To (Recipient Email Address)
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
                      onClick={openEmailClient}
                      disabled={!isAuthenticated || !recipientEmail}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 text-lg disabled:opacity-50"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Open Email Client
                    </Button>

                    {!isAuthenticated && (
                      <Alert className="border-orange-400 bg-orange-50">
                        <Shield className="h-4 w-4 text-orange-600" />
                        <AlertDescription className="text-orange-800">
                          Please punch the authentication stamp on your document first before sharing.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Document Preview with Stamp Verification */}
                  {previewUrl && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Label className="text-lg font-semibold text-gray-800">Document Status</Label>
                        {isAuthenticated && (
                          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            Stamp Visible
                          </Badge>
                        )}
                      </div>
                      <div className="border rounded-lg p-4 bg-gray-50 relative">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <FileCheck className="h-8 w-8 text-blue-600" />
                            <div>
                              <p className="font-semibold text-gray-800">{uploadedFile?.name}</p>
                              <p className="text-sm text-gray-600">
                                {isAuthenticated ? 'Document with Authentication Stamp' : 'Original Document'}
                              </p>
                            </div>
                          </div>
                          {isAuthenticated && selectedStamp && (
                            <div className="flex items-center gap-2">
                              <AuthenticationStamp stampType={selectedStamp as any} size="small" applied={true} />
                              <Badge className="bg-green-100 text-green-800">
                                Stamp Applied
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        {/* Stamped Document Preview */}
                        {showStampPreview && (
                          <div className="mt-4 p-3 bg-white rounded border border-green-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Eye className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-semibold text-green-800">Stamp Verification Preview</span>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded p-2">
                              <img 
                                src={previewUrl} 
                                alt="Document with Authentication Stamp" 
                                className="w-full h-32 object-contain rounded"
                              />
                            </div>
                            <p className="text-xs text-green-700 mt-2 text-center">
                              ✓ Authentication stamp successfully punched and visible on document
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Canvas for stamp processing (hidden) */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Document Preview Section with Before/After */}
            {uploadedFile && (
              <Card className="mt-8 shadow-2xl border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <FileCheck className="mr-3 h-6 w-6" />
                    Document Authentication Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before Authentication */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-gray-800">Before Authentication</h3>
                      </div>
                      <div className="border-2 border-dashed border-red-300 rounded-xl p-6 bg-red-50">
                        <div className="flex items-center gap-4 mb-4">
                          <FileCheck className="h-12 w-12 text-red-500" />
                          <div>
                            <p className="font-semibold text-gray-800">{uploadedFile.name}</p>
                            <p className="text-sm text-red-600">Unverified Document</p>
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-red-200 relative">
                          <p className="text-sm text-gray-600 mb-2">Status:</p>
                          <Badge variant="destructive" className="mb-3">
                            NOT AUTHENTICATED
                          </Badge>
                          <p className="text-xs text-gray-500 mb-4">
                            This document has not been verified by any official authority and may not be accepted for official purposes.
                          </p>
                          
                          {/* Empty stamp area */}
                          <div className="absolute bottom-4 right-4">
                            <AuthenticationStamp stampType="uniford" size="small" applied={false} />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* After Authentication */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-3 h-3 rounded-full ${isAuthenticated ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <h3 className="text-xl font-bold text-gray-800">After Authentication</h3>
                      </div>
                      <div className={`border-2 border-dashed rounded-xl p-6 ${isAuthenticated ? 'border-green-300 bg-green-50' : 'border-gray-300 bg-gray-50'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <FileCheck className={`h-12 w-12 ${isAuthenticated ? 'text-green-500' : 'text-gray-400'}`} />
                            {isAuthenticated && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Shield className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{uploadedFile.name}</p>
                            <p className={`text-sm ${isAuthenticated ? 'text-green-600' : 'text-gray-500'}`}>
                              {isAuthenticated ? 'Authenticated Document' : 'Pending Authentication'}
                            </p>
                          </div>
                        </div>
                        <div className={`p-4 rounded-lg border relative ${isAuthenticated ? 'bg-white border-green-200' : 'bg-gray-100 border-gray-200'}`}>
                          <p className="text-sm text-gray-600 mb-2">Status:</p>
                          <Badge className={isAuthenticated ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}>
                            {isAuthenticated ? 'AUTHENTICATED' : 'PENDING'}
                          </Badge>
                          {isAuthenticated && selectedStamp && (
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Stamp className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-800">Authentication Seal Applied</span>
                              </div>
                              <p className="text-xs text-blue-700">
                                <strong>{stampOptions.find(s => s.id === selectedStamp)?.name}</strong>
                              </p>
                              <p className="text-xs text-blue-600">
                                Verification ID: {stampOptions.find(s => s.id === selectedStamp)?.details}
                              </p>
                            </div>
                          )}
                          <p className={`text-xs mt-2 ${isAuthenticated ? 'text-green-600' : 'text-gray-500'}`}>
                            {isAuthenticated 
                              ? 'This document has been officially verified and authenticated. It is now valid for official purposes.'
                              : 'Document authentication is pending. Please complete the authentication process.'
                            }
                          </p>
                          
                          {/* Authentication stamp in bottom right */}
                          <div className="absolute bottom-4 right-4">
                            <AuthenticationStamp 
                              stampType={selectedStamp as any || 'uniford'} 
                              size="small" 
                              applied={isAuthenticated} 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default DocumentAuthentication;
