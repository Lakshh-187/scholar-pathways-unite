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
  studentName: z.string().min(2, {
    message: "Student name must be at least 2 characters.",
  }),
  instituteName: z.string().min(2, {
    message: "Institute name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  programAccepted: z.string().min(2, {
    message: "Program name must be at least 2 characters.",
  }),
  consent1: z.boolean().refine(val => val === true, {
    message: "You must confirm your acceptance.",
  }),
  consent2: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
  additionalRemarks: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const LetterOfAcceptance = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      instituteName: "",
      email: "",
      programAccepted: "",
      consent1: false,
      consent2: false,
      additionalRemarks: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log("Acceptance form submitted:", data);
    toast({
      title: "Letter of Acceptance Submitted",
      description: "Thank you for accepting the offer. A confirmation has been sent to your email.",
    });
    form.reset();
  }

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600/80 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-white blur-3xl top-20 left-20 animate-pulse-soft"></div>
          <div className="absolute h-96 w-96 rounded-full bg-green-500 blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Award className="h-10 w-10 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Letter of Acceptance
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Confirm your acceptance and join us!
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <CheckCircle2 className="h-5 w-5 text-green-300 mr-2" />
                <span>Confirmation</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <MessageSquare className="h-5 w-5 text-blue-300 mr-2" />
                <span>Next Steps</span>
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Info className="h-5 w-5 text-yellow-300 mr-2" />
                <span>Important Details</span>
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
            <div className="bg-gradient-to-br from-green-50 to-white border border-green-100 rounded-xl p-6 md:p-8 shadow-lg mb-12">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="bg-green-600/10 p-4 rounded-full shrink-0">
                  <FileText className="h-8 w-8 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  A Message from the Uniford Foundation
                  </h2>
                  <div className="space-y-4 text-gray-600">
                    <p className="text-lg">
                      Dear Students ,
                    </p>
                    <p>
                    At Uniford Foundation, we believe no student should miss an opportunity because of fees, forms, or lack of guidance..
                    </p>
                    <p className="font-medium text-gray-800">
                      🎯 Every student deserves access to platforms, resources, exposure, and recognition — without unnecessary hurdles like registration fees, paid internships, or manual applications.
                    </p>
                    <p className="text-lg">
                    Over the past few weeks, our volunteers, help desk, and outreach heads have worked tirelessly to inform You...
                    </p>
                    <div className="py-3 border-l-4 border-green-600 pl-4 my-6">
                      <p className="text-lg font-medium text-gray-800">
                      Uni-Pitch – A place where you can pitch your challenges and tell us exactly what kind of resources, mentorship, or opportunities you need.
                      </p>

                      <p className="font-medium text-gray-800">
                      -
                    </p>
                      <p className="font-medium text-gray-800">
                      Pitchburg – A stage to showcase your talent, innovations, or ideas through Uni-Talks, Pitches, Projects, and more — with certificates, awards, goodies, and media recognition.
                    </p>
                    <p className="font-medium text-gray-800">
                      -
                    </p>
                    <p className="font-medium text-gray-800">
                    CAF (Common Application Form) – A modern tool that lets you apply once and reach multiple internships, programs, and events.
                    </p>
                    <p className="font-medium text-gray-800">
                     -
                    </p>
                    <p className="font-medium text-gray-800">
                    THA (Talent Hunt Alliance) – Our AI-powered system that scans your profile, offers referrals, recommendations, and lists you for partner opportunities.
                    </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            <div className="bg-green-800 text-white rounded-xl p-6 md:p-8 mb-16 shadow-lg relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-700 to-purple-800 opacity-50"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 -mt-32 -mr-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600 rounded-full filter blur-3xl opacity-20 -mb-32 -ml-32"></div>

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Info className="h-6 w-6 text-yellow-300" />
                  Important Information
                </h2>
                <div className="space-y-4">
                  <p>
                  As a non-profit, we operate on goodwill, clarity, and shared impact. We've done our part. Now, it's your turn — either to apply, engage, or simply acknowledge that you've been empowered with the right knowledge.

Let this be a moment of mutual respect — an appreciation of communication done right
                  </p>
                  <p className="font-medium">
                    We look forward to welcoming you to our community!
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
            <div className="inline-block p-2 bg-green-600/10 rounded-full mb-3">
              <FileCheck className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold mb-3">Letter of Clearance & Appreciation</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
             Thankyou
            </p>
          </div>

          <Card className="border-green-100 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-green-600/10 to-transparent">
              <CardTitle className="flex items-center gap-2 text-green-600">
                <FormInput className="h-5 w-5" />
                Acceptance Form
              </CardTitle>
              <CardDescription>
                Please fill out this form to confirm your acceptance of the program offer.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Institute Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                      control={form.control}
                      name="instituteName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel> Representative Name </FormLabel>
                          <FormControl>
                            <Input placeholder="Enter institute name" {...field} />
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
                      name="programAccepted"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter program name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-md">
                    <h3 className="font-medium mb-4">Acceptance Confirmation</h3>

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
                              I hereby confirm that I have received complete and clear information regarding all programs, platforms, and opportunities provided by Uniford Scholar.
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
                              I acknowledge that a representative — whether a volunteer, relation head, or help desk — has fulfilled their responsibility in guiding and informing me about the available initiatives.
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

                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700">
                    <MailCheck className="mr-2 h-4 w-4" />
                    Submit Letter of Acceptance
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 bg-gray-50 text-sm text-gray-600">
              <div className="flex items-start gap-2">
                <FileText className="h-4 w-4 text-green-600 shrink-0 mt-1" />
                <p>
                  If you have any questions or need mail at  {" "}
                  <a href="mailt:info@uniford.org" className="text-green-600 hover:underline">
                    info@uniford.org
                  </a>{" "}
                  or Whatsapp us{" "}
                  <a href="tel:+1234567890" className="text-green-600 hover:underline">
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

export default LetterOfAcceptance;