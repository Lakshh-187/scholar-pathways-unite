
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileCheck, FileText, FormInput, MailCheck, CheckCircle2, Award, MessageSquare, Info } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  instituteName: z.string().min(2, {
    message: "Institute name must be at least 2 characters.",
  }),
  representativeName: z.string().min(2, {
    message: "Representative name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone number must be at least 10 digits.",
  }),
  consent1: z.boolean().refine(val => val === true, {
    message: "You must confirm this item.",
  }),
  consent2: z.boolean().refine(val => val === true, {
    message: "You must confirm this item.",
  }),
  consent3: z.boolean().refine(val => val === true, {
    message: "You must confirm this item.",
  }),
  consent4: z.boolean().refine(val => val === true, {
    message: "You must confirm this item.",
  }),
  additionalRemarks: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const LetterOfClearance = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instituteName: "",
      representativeName: "",
      email: "",
      phoneNumber: "",
      consent1: false,
      consent2: false,
      consent3: false,
      consent4: false,
      additionalRemarks: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Form submitted:", data);
    toast({
      title: "Letter of Clearance Submitted",
      description: "Thank you for providing clearance. A confirmation has been sent to your email.",
    });
    form.reset();
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-unifor-purple/80 to-purple-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-white blur-3xl top-20 left-20 animate-pulse-soft"></div>
          <div className="absolute h-96 w-96 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Award className="h-10 w-10 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Letter of Clearance & Appreciation
            </h1>
            <p className="text-xl md:text-2xl text-purple-100 mb-8">
              Your acknowledgment matters. Our responsibility fulfilled.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle2 className="h-5 w-5 text-green-300 mr-2" />
                <span>Transparent</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MessageSquare className="h-5 w-5 text-blue-300 mr-2" />
                <span>Clear Communication</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Info className="h-5 w-5 text-yellow-300 mr-2" />
                <span>Full Disclosure</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
            <path d="M0,96L60,80C120,64,240,32,360,32C480,32,600,64,720,69.3C840,75,960,53,1080,48C1200,43,1320,53,1380,58.7L1440,64L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Message Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-100 rounded-xl p-6 md:p-8 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-unifor-purple/10 p-4 rounded-full shrink-0">
                  <FileText className="h-8 w-8 text-unifor-purple" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                    A Message from the Uniford Foundation
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg">
                      Dear Partner,
                    </p>
                    <p>
                      Every opportunity begins with awareness. At Uniford Foundation, we believe in clear communication, 
                      responsible outreach, and transparent action. Our team — through volunteers, relation heads, or help desk — 
                      has taken every step to inform, guide, and support you or your institution regarding the initiative extended to you.
                    </p>
                    <p className="font-medium text-gray-800">
                      🎯 Whether it's a scholarship, fellowship, social impact initiative, student support, or event opportunity — 
                      our duty was to inform, not impose.
                    </p>
                    <div className="py-3 border-l-4 border-unifor-purple pl-4 my-6">
                      <p className="text-lg font-medium text-gray-800">
                        Today, we're not asking you to take action —<br />
                        We're simply asking you to acknowledge that we did.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-unifor-purple">
                    <CheckCircle2 className="h-5 w-5" />
                    Why This Page Exists
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>To document and validate that you've received full details</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>To offer you space to raise questions or confirm understanding</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>To allow our team to close this chapter with clarity and pride</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                      <span>To help us maintain audit-ready, transparent records for impact reporting</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-purple-100 shadow-md hover:shadow-lg transition-shadow bg-gradient-to-br from-white to-purple-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-unifor-purple">
                    <Award className="h-5 w-5" />
                    What This Letter Means
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p>By submitting this, you're confirming:</p>
                    <div className="bg-white/80 border border-purple-100 p-4 rounded-lg italic text-gray-700">
                      "Yes, we've been properly informed. We're aware of the opportunity. We have no remaining doubts. The responsibility now lies with us."
                    </div>
                    <p className="text-sm text-gray-600">
                      It's a simple gesture — but a powerful one.<br />
                      It helps us ensure our volunteers and help desks did what they promised.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="bg-purple-900 text-white rounded-xl p-6 md:p-8 mb-16 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-800 to-purple-900 opacity-50"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 -mt-32 -mr-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 -mb-32 -ml-32"></div>
              
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Info className="h-6 w-6 text-yellow-300" />
                  Final Note
                </h2>
                <div className="space-y-4">
                  <p>
                    As a non-profit, we operate on goodwill, clarity, and shared impact.
                    We've done our part. Now, it's your turn — either to apply, engage, or simply acknowledge that you've been empowered with the right knowledge.
                  </p>
                  <p className="font-medium">
                    Let this be a moment of mutual respect — an appreciation of communication done right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-block p-2 bg-unifor-purple/10 rounded-full mb-3">
              <FileCheck className="h-8 w-8 text-unifor-purple" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Digital Consent Form</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Please complete the form below to acknowledge receipt of all information and provide your clearance.
            </p>
          </div>

          <Card className="border-purple-100 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-unifor-purple/10 to-transparent">
              <CardTitle className="flex items-center gap-2 text-unifor-purple">
                <FormInput className="h-5 w-5" />
                Digital Consent Form
              </CardTitle>
              <CardDescription>
                Please fill out this form to confirm that you have been properly informed about all details and opportunities.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="instituteName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institute Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter institute name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="representativeName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Representative Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="Enter your email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-medium mb-4">Digital Consent Confirmation</h3>
                    
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="consent1"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I confirm that I have received comprehensive information about all the programs, opportunities, and initiatives offered by Unifor Scholar.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent2"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I acknowledge that Unifor Scholar's volunteer or relation head has fulfilled their duty by providing all necessary details, and I do not have any pending queries or doubts.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent3"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I understand that this Letter of Clearance is for external audit and reporting purposes to justify Unifor Scholar's role and responsibility in providing information.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="consent4"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                I am aware that I can apply for this clearance only once per year, and if I do not apply now, I will need to wait until next year to apply again.
                              </FormLabel>
                              <FormMessage />
                            </div>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="additionalRemarks"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Remarks (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any additional comments or specific details you'd like to add" 
                            className="min-h-[100px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full bg-unifor-purple hover:bg-unifor-purple/90">
                    <MailCheck className="mr-2 h-4 w-4" />
                    Submit Letter of Clearance
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 bg-gray-50 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-unifor-purple shrink-0 mt-1" />
                <p>
                  If you have any questions or need further clarification, please contact our help desk at{" "}
                  <a href="mailto:info@uniford.org" className="text-unifor-purple hover:underline">
                    info@uniford.org
                  </a>{" "}
                  or call us at{" "}
                  <a href="tel:+917347099610" className="text-unifor-purple hover:underline">
                    +917347099610
                  </a>
                </p>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default LetterOfClearance;
