
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Calendar, Download, Upload, FileText, Phone, Mail } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface FormValues {
  organizationName: string;
  contactPerson: string;
  email: string;
  phone: string;
  organizationType: string;
  partnershipInterest: string;
  termsAgreed: boolean;
  signature: File | null;
}

const PartnershipForm = () => {
  const { toast } = useToast();
  const [signature, setSignature] = useState<string | null>(null);
  
  const form = useForm<FormValues>({
    defaultValues: {
      organizationName: '',
      contactPerson: '',
      email: '',
      phone: '',
      organizationType: '',
      partnershipInterest: '',
      termsAgreed: false,
      signature: null,
    },
  });

  const handleSignatureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setSignature(e.target.result as string);
          form.setValue('signature', file);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    toast({
      title: "Partnership Request Submitted",
      description: "We'll get back to you soon to discuss next steps.",
    });
    
    form.reset();
    setSignature(null);
  };

  return (
    <section id="partnership-form" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            DIGITAL PARTNERSHIP
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Sign Digital Partnership Agreement</h2>
          <p className="text-gray-600 text-lg">
            Complete this form to initiate the partnership process with Uniford Foundation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="organizationName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your organization name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="contactPerson"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contact Person</FormLabel>
                        <FormControl>
                          <Input placeholder="Full name" {...field} />
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
                          <Input type="email" placeholder="your@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="organizationType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Organization Type</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Non-profit, Corporate, Educational" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="partnershipInterest"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Partnership Interest</FormLabel>
                        <FormControl>
                          <Input placeholder="Area of interest for partnership" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Digital Signature</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      {signature ? (
                        <div className="mb-4">
                          <img src={signature} alt="Signature" className="max-h-24 mx-auto" />
                        </div>
                      ) : (
                        <Upload className="mx-auto h-12 w-12 text-gray-400 mb-2" />
                      )}
                      
                      <p className="text-sm text-gray-500 mb-3">
                        {signature ? "Signature uploaded" : "Upload your signature image"}
                      </p>
                      
                      <div className="flex justify-center">
                        <label className="cursor-pointer">
                          <Input 
                            type="file" 
                            className="hidden" 
                            accept="image/*" 
                            onChange={handleSignatureUpload} 
                          />
                          <div className="bg-[#7E69AB] text-white px-4 py-2 rounded-md hover:bg-[#9b87f5] transition-colors">
                            {signature ? "Change Signature" : "Upload Signature"}
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="termsAgreed"
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
                            I agree to the terms of partnership and confirm that the information provided is accurate.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                </div>
                
                <Button type="submit" className="w-full bg-[#7E69AB] hover:bg-[#9b87f5]">
                  Submit Partnership Request
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="bg-[#1A1F2C] text-white rounded-xl shadow-lg p-8">
            <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-3">Additional Documents</h4>
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                >
                  <FileText className="h-5 w-5 text-[#9b87f5]" />
                  <span>Partnership Guidelines</span>
                  <Download className="h-4 w-4 ml-auto" />
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Schedule a Meeting</h4>
                <a 
                  href="https://calendly.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                >
                  <Calendar className="h-5 w-5 text-[#9b87f5]" />
                  <span>Book a Call</span>
                </a>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">Direct Contact</h4>
                <div className="space-y-2">
                  <a 
                    href="tel:+1234567890" 
                    className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                  >
                    <Phone className="h-5 w-5 text-[#9b87f5]" />
                    <span>+1 (234) 567-890</span>
                  </a>
                  
                  <a 
                    href="mailto:partnerships@uniford.org" 
                    className="flex items-center space-x-3 p-3 bg-[#2A2F3C] rounded-lg hover:bg-[#3A3F4C] transition-colors"
                  >
                    <Mail className="h-5 w-5 text-[#9b87f5]" />
                    <span>partnerships@uniford.org</span>
                  </a>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3">WhatsApp Support</h4>
                <a 
                  href="https://wa.me/1234567890" 
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
                  Complete Google Form
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipForm;
