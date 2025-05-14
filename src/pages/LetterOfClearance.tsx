
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FileCheck, FileText, FormInput, MailCheck } from "lucide-react";
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 text-center">
            <div className="inline-block p-2 bg-unifor-purple/10 rounded-full mb-3">
              <FileCheck className="h-8 w-8 text-unifor-purple" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Letter of Clearance & Appreciation</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              By submitting this form, you confirm that you have received all necessary information about our programs and have no further queries.
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
