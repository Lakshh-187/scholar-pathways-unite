
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  Upload, 
  CheckSquare, 
  MessageCircle,
  Camera,
  Package,
  Users,
  Heart,
  Droplet,
  Gift,
  Lightbulb,
  Leaf,
  GraduationCap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';

const SocialInternshipSubmission = () => {
  const { toast } = useToast();
  
  const handleOpenSubmissionForm = () => {
    window.open('https://forms.google.com/social-internship-submission', '_blank');
    toast({
      title: "Opening Submission Form",
      description: "Redirecting you to the submission form page",
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Submission Guidelines</CardTitle>
        <CardDescription>
          Learn how to properly document and submit your social internship work for verification
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="bg-unifor-light-purple/10 p-6 rounded-lg">
          <h3 className="text-lg font-medium mb-4">General Submission Requirements</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <CheckSquare className="h-5 w-5 text-unifor-purple shrink-0 mt-0.5" />
              <span>Submit proof of completion, including photographs, videos, or documents as specified for your chosen task</span>
            </li>
            <li className="flex items-start gap-3">
              <Upload className="h-5 w-5 text-unifor-purple shrink-0 mt-0.5" />
              <span>For parcel-based tasks, provide the parcel slip and tracking ID along with details of the parcel contents</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-unifor-purple shrink-0 mt-0.5" />
              <span>Complete and submit the official internship completion form with all required information</span>
            </li>
            <li className="flex items-start gap-3">
              <Camera className="h-5 w-5 text-unifor-purple shrink-0 mt-0.5" />
              <span>Include clear, high-quality photographic evidence of your participation and completion</span>
            </li>
            <li className="flex items-start gap-3">
              <MessageCircle className="h-5 w-5 text-unifor-purple shrink-0 mt-0.5" />
              <span>Be available for a verification call if required by our team</span>
            </li>
            <li className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
              <span className="font-medium text-orange-700">
                <strong>Important:</strong> Submit your Social Internship Certificate with the Certificate ID mentioned on it for verification
              </span>
            </li>
          </ul>
        </div>
        
        <Separator />
        
        {/* Certificate ID Requirement Alert */}
        <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <FileText className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-orange-800 mb-2">Certificate ID Requirement</h4>
              <p className="text-orange-700 text-sm">
                When submitting your Social Internship Certificate, ensure that the Certificate ID is clearly visible and mentioned. 
                This unique ID is essential for verification and fee refund processing.
              </p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="talent-hunter">
          <TabsList className="grid grid-cols-3 md:grid-cols-4 mb-4">
            <TabsTrigger value="talent-hunter">Talent Hunter</TabsTrigger>
            <TabsTrigger value="go-green">Go Green</TabsTrigger>
            <TabsTrigger value="mentor">Mentor</TabsTrigger>
            <TabsTrigger value="other-tasks">Other Tasks</TabsTrigger>
          </TabsList>
          
          <TabsContent value="talent-hunter" className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-unifor-light-purple p-3 rounded-lg">
                <Users className="h-6 w-6 text-unifor-purple" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Campaign - Potential Hunter Submission</h3>
                <p className="text-gray-600 mt-1">
                  Submit a comprehensive list of students who successfully obtained their ID cards through your campaign.
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Provide each student's name, contact information, and application date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Include a brief assessment of why each student was chosen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Submit photos from any campaign events or meetings you organized</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="go-green" className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-unifor-light-purple p-3 rounded-lg">
                <Leaf className="h-6 w-6 text-unifor-purple" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Go Green Planet Campaign Submission</h3>
                <p className="text-gray-600 mt-1">
                  Document your donation of fruit plants and farming tools.
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Provide the parcel tracking number and shipping receipt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Include photographs of the plants and tools before shipping</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Submit a detailed list of all items included in the parcel</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Package className="h-4 w-4 text-orange-600 shrink-0 mt-0.5" />
                    <span className="text-orange-700 font-medium">Important: Verify address before sending parcel</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="mentor" className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-unifor-light-purple p-3 rounded-lg">
                <GraduationCap className="h-6 w-6 text-unifor-purple" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Social Welfare Mentor Submission</h3>
                <p className="text-gray-600 mt-1">
                  Document your teaching experience at Uniford Council affiliated schools.
                </p>
                <ul className="mt-3 space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Provide a letter from the school confirming your teaching dates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Include photographs of your teaching activities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Submit a detailed report of what you taught and how it benefited students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                    <span>Include student feedback if available</span>
                  </li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="other-tasks" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="bg-unifor-light-purple p-2 rounded-lg">
                  <Heart className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Cancer Patient Collection</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Submit photos of hair collection, weight evidence, and donation receipt
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-unifor-light-purple p-2 rounded-lg">
                  <Droplet className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Blood Donation Drive</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Provide donation certificate, volunteer confirmation, and event photos
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-unifor-light-purple p-2 rounded-lg">
                  <Gift className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">STEM Kit Donation</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Submit parcel tracking, kit photos, and contents list
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-unifor-light-purple p-2 rounded-lg">
                  <Lightbulb className="h-5 w-5 text-unifor-purple" />
                </div>
                <div>
                  <h3 className="font-medium">Innovation Donation</h3>
                  <p className="text-xs text-gray-600 mt-1">
                    Provide innovation details, usage documentation, and impact assessment
                  </p>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-600 mt-4">
              For detailed submission guidelines for any specific task, please contact our support team 
              through the WhatsApp Help Desk or refer to the official documentation.
            </p>
          </TabsContent>
        </Tabs>
        
        <Button 
          className="w-full bg-unifor-purple hover:bg-unifor-dark-purple mt-4"
          onClick={handleOpenSubmissionForm}
        >
          Submit Your Internship Work
          <Upload className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default SocialInternshipSubmission;
