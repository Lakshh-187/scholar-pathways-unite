
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Badge } from '@/components/ui/badge';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, FileText, Upload, Download, Phone, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  name: z.string().min(2, { message: "Please enter your full name." }),
  scholarId: z.string().min(2, { message: "Scholar ID is required." }),
  leaveFor: z.string().min(2, { message: "Please mention your purpose (Internship, Project Expo, etc.)." }),
  whatsapp: z
    .string()
    .regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
  reason: z.string().min(2, { message: "Please mention a reason (e.g., UNSIP, Management)." }),
  termsAgreed: z.literal(true, {
    errorMap: () => ({ message: "You must agree to the terms to continue." }),
  }),
});
type FormValues = z.infer<typeof formSchema>;

const IDCardApplicationForm: React.FC = () => {
  const { toast } = useToast();
  const [signature, setSignature] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      scholarId: "",
      leaveFor: "",
      whatsapp: "",
      reason: "",
      termsAgreed: true,
    },
  });
  
  const onSubmit = (data: FormValues) => {
    console.log('ID Card Application Form submitted:', data);
    
    // Google Apps Script Web App URL for ID Card form
    const scriptUrl = 'https://script.google.com/macros/s/AKfycbytegnDDq9hpa_NgsC6a8QNA4lfaUcbjZ2nqNQ8Qw4OpCLM4ReEv__bNmPMl1kf-yRR/exec'; // Explicitly set the correct URL

    // Prepare data in URL-encoded format
    const formData = new URLSearchParams();
  formData.append("email", data.email);
  formData.append("name", data.name);
  formData.append("scholarId", data.scholarId);
  formData.append("leaveFor", data.leaveFor);
  formData.append("whatsapp", data.whatsapp);
  formData.append("reason", data.reason);
    // 'termsAgreed' is handled on the frontend and not being sent to the sheet in this example

    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors', // Required for sending data to Google Apps Script from frontend
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    })
    .then(response => {
      console.log('Data sent to Google Sheet');
      toast({
        title: "Application Submitted",
        description: "Your ID card application has been submitted successfully.",
      });
      form.reset();
    })
    .catch(error => {
      console.error('Error sending data to Google Sheet:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    });
  };

  return (
    <section id="registration" className="py-20 bg-gradient-to-b from-white to-[#f5f2ff]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            SCHOLAR REGISTRATION
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Leave & Request Form</h2>
          <p className="text-gray-600 text-lg">
            Complete this form to apply for.....
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email ID</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="scholarId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Scholar ID</FormLabel>
                      <FormControl>
                        <Input placeholder="Uniford Scholar ID ..25UF..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="leaveFor"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Leave  For (eg. Internship , Project Expo ...) *</FormLabel>
                        <FormControl>
                          <Input placeholder="Mention here" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  
            
            
                </div>

                <FormField
                  control={form.control}
                  name="whatsapp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Whatsapp Number</FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />


                <FormField
                  control={form.control}
                  name="reason"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Reason</FormLabel>
                      <FormControl>
                        <Input type="text" placeholder="UNSIP , Management , Innovation , Technical , Fresher ....ect" {...field} />
                      </FormControl>
                      <FormMessage className="text-xs">
                        
                      </FormMessage>
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="termsAgreed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <input
                          type="checkbox"
                          checked={field.value}
                          onChange={field.onChange}
                          className="h-4 w-4 rounded border-gray-300 text-unifor-purple focus:ring-unifor-purple"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          I agree to the terms of the Scholar Program and confirm that the information provided is accurate.
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-[#7E69AB] hover:bg-[#9b87f5]">
                  Submit ID Card Application
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-[#1A1F2C] text-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-6">Application Resources</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Important Documents</h4>
                <a 
                  href="https://www.uniford.org/official-documents" 
                  className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                >
                  <FileText className="h-5 w-5 text-[#9b87f5]" />
                  <span>Scholar Guidelines</span>
                  <Download className="h-4 w-4 ml-auto" />
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Schedule a Counseling</h4>
                <a 
                  href="https://web.whatsapp.com/send/?phone=7347099610&text=Hello%21+I+have+a+question.&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                >
                  <Calendar className="h-5 w-5 text-[#9b87f5]" />
                  <span>Book a Call</span>
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Contact Support</h4>
                <div className="space-y-2">
                  <a 
                    href="tel:+917347099610" 
                    className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#9b87f5]" />
                    <span>+917347099610</span>
                  </a>
                  
                  <a 
                    href="mailto:info@uniford.org" 
                    className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#9b87f5]" />
                    <span>info@uniford.org</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">WhatsApp Support</h4>
                <a 
                  href="https://web.whatsapp.com/send/?phone=7347099610&text=Hello%21+I+have+a+question.&type=phone_number&app_absent=0" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center space-x-3 p-3 bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
              
              <div className="pt-4 border-t border-[#3A3F4C]">
                <a 
                  href="https://forms.gle/VJJCWM2wzcZjT8YK8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-[#9b87f5] text-white p-3 rounded-lg text-center font-medium hover:bg-[#7E69AB] transition-colors"
                >
                  Apply via Google Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IDCardApplicationForm;
