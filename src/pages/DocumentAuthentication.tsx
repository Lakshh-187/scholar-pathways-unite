import React, { useState, useRef } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Upload, Shield, Stamp, Mail, CheckCircle, Lock, Star, FileCheck, Download, Send, ExternalLink, Eye, Target, Scan } from 'lucide-react';
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
  const [stampPosition, setStampPosition] = useState({ x: 85, y: 15 }); // Default top-right corner
  const [showStampPreview, setShowStampPreview] = useState(false);
  const [documentType, setDocumentType] = useState<'offer-letter' | 'badge' | 'id-card' | 'unknown'>('unknown');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [optimalStampAreas, setOptimalStampAreas] = useState<Array<{x: number, y: number, confidence: number}>>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const analysisCanvasRef = useRef<HTMLCanvasElement>(null);
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

  // Analyze document type and detect optimal stamp areas
  const analyzeDocumentForStamping = async (imageUrl: string) => {
    setIsAnalyzing(true);
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = imageUrl;
      });

      const canvas = analysisCanvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);

      // Get image data for analysis
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Detect document type based on content analysis
      const detectedType = detectDocumentType(data, canvas.width, canvas.height);
      setDocumentType(detectedType);

      // Find optimal stamp areas based on document type
      const optimalAreas = findOptimalStampAreas(detectedType, canvas.width, canvas.height, data);
      setOptimalStampAreas(optimalAreas);

      // Set the best stamp position
      if (optimalAreas.length > 0) {
        const bestArea = optimalAreas[0];
        setStampPosition({ x: bestArea.x, y: bestArea.y });
      }

      toast({
        title: "Document Analyzed",
        description: `${detectedType.replace('-', ' ').toUpperCase()} detected. Optimal stamp position identified.`,
      });

    } catch (error) {
      console.error('Document analysis failed:', error);
      toast({
        title: "Analysis Warning",
        description: "Could not analyze document. Using default stamp position.",
        variant: "destructive"
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Detect document type based on image analysis
  const detectDocumentType = (imageData: Uint8ClampedArray, width: number, height: number): 'offer-letter' | 'badge' | 'id-card' | 'unknown' => {
    const fileName = uploadedFile?.name.toLowerCase() || '';
    
    // Simple filename-based detection first
    if (fileName.includes('offer') || fileName.includes('letter')) {
      return 'offer-letter';
    }
    if (fileName.includes('badge')) {
      return 'badge';
    }
    if (fileName.includes('id') || fileName.includes('card')) {
      return 'id-card';
    }

    // Analyze aspect ratio and layout patterns
    const aspectRatio = width / height;
    
    // Badge documents are usually square-ish or portrait
    if (aspectRatio >= 0.8 && aspectRatio <= 1.2) {
      return 'badge';
    }
    
    // ID cards are usually landscape with specific ratio
    if (aspectRatio >= 1.5 && aspectRatio <= 1.8) {
      return 'id-card';
    }
    
    // Offer letters are usually portrait documents
    if (aspectRatio >= 0.7 && aspectRatio <= 0.8) {
      return 'offer-letter';
    }

    return 'unknown';
  };

  // Find optimal stamp areas based on document type
  const findOptimalStampAreas = (docType: string, width: number, height: number, imageData: Uint8ClampedArray) => {
    const areas: Array<{x: number, y: number, confidence: number}> = [];

    switch (docType) {
      case 'offer-letter':
        // For offer letters, prefer top-right corner or bottom-right
        areas.push(
          { x: 80, y: 10, confidence: 0.9 }, // Top-right
          { x: 80, y: 85, confidence: 0.8 }, // Bottom-right
          { x: 15, y: 85, confidence: 0.6 }  // Bottom-left alternative
        );
        break;
        
      case 'badge':
        // For badges, avoid center, prefer corners
        areas.push(
          { x: 85, y: 8, confidence: 0.95 },  // Top-right corner
          { x: 8, y: 8, confidence: 0.7 },    // Top-left
          { x: 85, y: 85, confidence: 0.6 }   // Bottom-right
        );
        break;
        
      case 'id-card':
        // For ID cards, prefer top-right or bottom-right
        areas.push(
          { x: 88, y: 12, confidence: 0.9 },  // Top-right
          { x: 88, y: 80, confidence: 0.8 },  // Bottom-right
          { x: 12, y: 12, confidence: 0.6 }   // Top-left alternative
        );
        break;
        
      default:
        // Default safe positions
        areas.push(
          { x: 85, y: 15, confidence: 0.7 },  // Top-right default
          { x: 85, y: 80, confidence: 0.6 },  // Bottom-right
          { x: 15, y: 15, confidence: 0.5 }   // Top-left
        );
    }

    return areas.sort((a, b) => b.confidence - a.confidence);
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
      setIsAuthenticated(false);
      setShowStampPreview(false);
      
      // Analyze the document for optimal stamp placement
      await analyzeDocumentForStamping(url);
      
      toast({
        title: "File Uploaded & Analyzed",
        description: `${file.name} has been uploaded and analyzed for optimal stamp placement`,
      });
    }
  };

  const handleStampPosition = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setStampPosition({ x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) });
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
      
      // Calculate stamp position and size based on document type
      const stampX = (stampPosition.x / 100) * canvas.width;
      const stampY = (stampPosition.y / 100) * canvas.height;
      
      // Adjust stamp size based on document type
      let stampSize = Math.min(canvas.width, canvas.height) * 0.08; // Smaller default size
      
      switch (documentType) {
        case 'badge':
          stampSize = Math.min(canvas.width, canvas.height) * 0.06; // Very small for badges
          break;
        case 'id-card':
          stampSize = Math.min(canvas.width, canvas.height) * 0.07; // Small for ID cards
          break;
        case 'offer-letter':
          stampSize = Math.min(canvas.width, canvas.height) * 0.08; // Medium for letters
          break;
      }
      
      // Draw enhanced stamp
      ctx.save();
      ctx.globalAlpha = 0.85;
      
      // Create gradient for stamp
      const gradient = ctx.createRadialGradient(stampX, stampY, 0, stampX, stampY, stampSize/2);
      gradient.addColorStop(0, '#1E40AF');
      gradient.addColorStop(0.7, '#3B82F6');
      gradient.addColorStop(1, '#1E3A8A');
      
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(stampX, stampY, stampSize/2, 0, 2 * Math.PI);
      ctx.fill();
      
      // Add stamp border with shadow effect
      ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
      ctx.shadowBlur = 2;
      ctx.shadowOffsetX = 1;
      ctx.shadowOffsetY = 1;
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Reset shadow
      ctx.shadowColor = 'transparent';
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;
      
      // Add inner dashed circle
      ctx.setLineDash([3, 3]);
      ctx.beginPath();
      ctx.arc(stampX, stampY, stampSize/2 - 6, 0, 2 * Math.PI);
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
      const radius = stampSize/2 - 12;
      const textLength = stampText.length;
      const angleStep = (Math.PI * 1.4) / textLength;
      
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
      ctx.fillText('VERIFIED', stampX, stampY - 2);
      ctx.font = `${stampSize * 0.04}px Arial`;
      ctx.fillText(new Date().toLocaleDateString(), stampX, stampY + 6);
      
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
    setStampPosition({ x: 85, y: 15 });
    setDocumentType('unknown');
    setOptimalStampAreas([]);
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
              SMART AUTHENTICATION
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Intelligent <span className="text-blue-300">Document</span><br />
              <span className="text-purple-300">Authentication</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              AI-powered stamp positioning and document verification with automatic optimal placement detection
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
                    Smart Document Upload & Stamp Positioning
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
                          <div className="flex items-center justify-between">
                            <span><strong>File Ready:</strong> {uploadedFile.name}</span>
                            {isAnalyzing && (
                              <div className="flex items-center gap-2">
                                <Scan className="h-4 w-4 animate-spin" />
                                <span className="text-sm">Analyzing...</span>
                              </div>
                            )}
                          </div>
                        </AlertDescription>
                      </Alert>
                    )}

                    {/* Document Type Detection */}
                    {documentType !== 'unknown' && (
                      <Alert className="border-blue-400 bg-blue-50">
                        <Target className="h-4 w-4 text-blue-600" />
                        <AlertDescription className="text-blue-800">
                          <strong>Document Type Detected:</strong> {documentType.replace('-', ' ').toUpperCase()}
                          <br />
                          <span className="text-sm">Optimal stamp position calculated automatically</span>
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Document Preview with Smart Stamp Positioning */}
                  {previewUrl && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="text-lg font-semibold text-gray-800">
                          Smart Stamp Positioning
                        </Label>
                        {optimalStampAreas.length > 0 && (
                          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                            <Target className="h-3 w-3" />
                            {optimalStampAreas.length} optimal areas found
                          </Badge>
                        )}
                      </div>
                      <div 
                        className="relative border rounded-lg overflow-hidden cursor-crosshair bg-gray-100"
                        onClick={handleStampPosition}
                      >
                        <img 
                          src={previewUrl} 
                          alt="Document Preview" 
                          className="w-full h-64 object-contain"
                        />
                        
                        {/* Show current stamp position */}
                        {!isAuthenticated && (
                          <div 
                            className="absolute w-6 h-6 border-2 border-blue-500 border-dashed rounded-full bg-blue-100/80 flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ 
                              left: `${stampPosition.x}%`, 
                              top: `${stampPosition.y}%` 
                            }}
                          >
                            <Stamp className="h-3 w-3 text-blue-600" />
                          </div>
                        )}

                        {/* Show optimal stamp areas */}
                        {optimalStampAreas.map((area, index) => (
                          <div
                            key={index}
                            className={`absolute w-4 h-4 rounded-full border transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ${
                              index === 0 
                                ? 'border-green-500 bg-green-200/70' 
                                : 'border-yellow-500 bg-yellow-200/50'
                            }`}
                            style={{ 
                              left: `${area.x}%`, 
                              top: `${area.y}%` 
                            }}
                          >
                            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-xs font-bold">
                              {index === 0 ? '🎯' : '📍'}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm text-blue-800">
                          <strong>🎯 Green dot:</strong> Optimal stamp position (confidence: {optimalStampAreas[0]?.confidence ? Math.round(optimalStampAreas[0].confidence * 100) : 0}%)
                          <br />
                          <strong>📍 Yellow dots:</strong> Alternative positions
                          <br />
                          <strong>💡 Tip:</strong> Click anywhere to manually adjust stamp position
                        </p>
                      </div>
                    </div>
                  )}

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
                          Applying Smart Stamp...
                        </>
                      ) : isAuthenticated ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Smart Stamp Applied Successfully
                        </>
                      ) : (
                        <>
                          <Target className="mr-2 h-5 w-5" />
                          Apply Smart Authentication Stamp
                        </>
                      )}
                    </Button>

                    {isAuthenticated && (
                      <Alert className="border-green-400 bg-green-50">
                        <Shield className="h-4 w-4 text-green-600" />
                        <AlertDescription className="text-green-800">
                          <strong>Smart Stamp Applied:</strong> Authentication stamp has been intelligently positioned and permanently applied to your document based on {documentType.replace('-', ' ')} detection.
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
                          Please apply the smart authentication stamp on your document first before sharing.
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>

                  {/* Document Preview with Smart Stamp Verification */}
                  {previewUrl && (
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Label className="text-lg font-semibold text-gray-800">Document Status</Label>
                        {isAuthenticated && (
                          <Badge className="bg-green-100 text-green-800 flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            Smart Stamp Applied
                          </Badge>
                        )}
                        {documentType !== 'unknown' && (
                          <Badge className="bg-blue-100 text-blue-800 flex items-center gap-1">
                            <Target className="h-3 w-3" />
                            {documentType.replace('-', ' ').toUpperCase()}
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
                                {isAuthenticated ? 'Document with Smart Authentication Stamp' : 'Original Document'}
                              </p>
                            </div>
                          </div>
                          {isAuthenticated && selectedStamp && (
                            <div className="flex items-center gap-2">
                              <AuthenticationStamp stampType={selectedStamp as any} size="small" applied={true} />
                              <Badge className="bg-green-100 text-green-800">
                                Smart Positioned
                              </Badge>
                            </div>
                          )}
                        </div>
                        
                        {/* Stamped Document Preview */}
                        {showStampPreview && (
                          <div className="mt-4 p-3 bg-white rounded border border-green-200">
                            <div className="flex items-center gap-2 mb-2">
                              <Eye className="h-4 w-4 text-green-600" />
                              <span className="text-sm font-semibold text-green-800">Smart Stamp Verification Preview</span>
                            </div>
                            <div className="bg-green-50 border border-green-200 rounded p-2">
                              <img 
                                src={previewUrl} 
                                alt="Document with Smart Authentication Stamp" 
                                className="w-full h-32 object-contain rounded"
                              />
                            </div>
                            <p className="text-xs text-green-700 mt-2 text-center">
                              ✓ Smart authentication stamp intelligently positioned and visible on {documentType.replace('-', ' ')}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Hidden canvases for processing */}
            <canvas ref={canvasRef} className="hidden" />
            <canvas ref={analysisCanvasRef} className="hidden" />

            {/* Document Preview Section with Before/After */}
            {uploadedFile && (
              <Card className="mt-8 shadow-2xl border-0 bg-white">
                <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
                  <CardTitle className="text-2xl font-bold flex items-center">
                    <FileCheck className="mr-3 h-6 w-6" />
                    Smart Document Authentication Preview
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Before Authentication */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <h3 className="text-xl font-bold text-gray-800">Before Smart Authentication</h3>
                      </div>
                      <div className="border-2 border-dashed border-red-300 rounded-xl p-6 bg-red-50">
                        <div className="flex items-center gap-4 mb-4">
                          <FileCheck className="h-12 w-12 text-red-500" />
                          <div>
                            <p className="font-semibold text-gray-800">{uploadedFile.name}</p>
                            <p className="text-sm text-red-600">Unverified Document</p>
                            {documentType !== 'unknown' && (
                              <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">
                                Detected: {documentType.replace('-', ' ').toUpperCase()}
                              </Badge>
                            )}
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
                          
                          {/* Show optimal stamp areas */}
                          {optimalStampAreas.map((area, index) => (
                            <div
                              key={index}
                              className={`absolute w-3 h-3 rounded-full border transform -translate-x-1/2 -translate-y-1/2 ${
                                index === 0 
                                  ? 'border-green-400 bg-green-200/50' 
                                  : 'border-gray-400 bg-gray-200/50'
                              }`}
                              style={{ 
                                left: `${area.x}%`, 
                                top: `${area.y}%` 
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* After Authentication */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-3 h-3 rounded-full ${isAuthenticated ? 'bg-green-500' : 'bg-gray-300'}`}></div>
                        <h3 className="text-xl font-bold text-gray-800">After Smart Authentication</h3>
                      </div>
                      <div className={`border-2 border-dashed rounded-xl p-6 ${isAuthenticated ? 'border-green-300 bg-green-50' : 'border-gray-300 bg-gray-50'}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="relative">
                            <FileCheck className={`h-12 w-12 ${isAuthenticated ? 'text-green-500' : 'text-gray-400'}`} />
                            {isAuthenticated && (
                              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                <Target className="h-3 w-3 text-white" />
                              </div>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-gray-800">{uploadedFile.name}</p>
                            <p className={`text-sm ${isAuthenticated ? 'text-green-600' : 'text-gray-500'}`}>
                              {isAuthenticated ? 'Smart Authenticated Document' : 'Pending Smart Authentication'}
                            </p>
                            {documentType !== 'unknown' && (
                              <Badge className="bg-blue-100 text-blue-800 text-xs mt-1">
                                Optimized for: {documentType.replace('-', ' ').toUpperCase()}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <div className={`p-4 rounded-lg border relative ${isAuthenticated ? 'bg-white border-green-200' : 'bg-gray-100 border-gray-200'}`}>
                          <p className="text-sm text-gray-600 mb-2">Status:</p>
                          <Badge className={isAuthenticated ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}>
                            {isAuthenticated ? 'SMART AUTHENTICATED' : 'PENDING'}
                          </Badge>
                          {isAuthenticated && selectedStamp && (
                            <div className="mt-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                              <div className="flex items-center gap-2 mb-2">
                                <Target className="h-4 w-4 text-blue-600" />
                                <span className="text-sm font-semibold text-blue-800">Smart Authentication Seal Applied</span>
                              </div>
                              <p className="text-xs text-blue-700">
                                <strong>{stampOptions.find(s => s.id === selectedStamp)?.name}</strong>
                              </p>
                              <p className="text-xs text-blue-600">
                                Verification ID: {stampOptions.find(s => s.id === selectedStamp)?.details}
                              </p>
                              <p className="text-xs text-green-600 mt-1">
                                🎯 Intelligently positioned at optimal location ({Math.round(stampPosition.x)}%, {Math.round(stampPosition.y)}%)
                              </p>
                            </div>
                          )}
                          <p className={`text-xs mt-2 ${isAuthenticated ? 'text-green-600' : 'text-gray-500'}`}>
                            {isAuthenticated 
                              ? 'This document has been officially verified with smart positioning technology and authenticated. It is now valid for official purposes.'
                              : 'Document smart authentication is pending. Please complete the authentication process.'
                            }
                          </p>
                          
                          {/* Authentication stamp positioned intelligently */}
                          <div 
                            className="absolute"
                            style={{ 
                              right: `${100 - stampPosition.x}%`, 
                              top: `${stampPosition.y}%`,
                              transform: 'translate(50%, -50%)'
                            }}
                          >
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
