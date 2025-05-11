
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const requestTags = [
  { value: 'guide', label: 'Guide' },
  { value: 'resources', label: 'Resources' },
  { value: 'query', label: 'Query' },
  { value: 'template', label: 'Template' },
  { value: 'mentorship', label: 'Mentorship' },
];

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  uid: z.string().min(3, 'UID must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  request: z.string().min(10, 'Request must be at least 10 characters'),
  tag: z.string().min(1, 'Please select a tag'),
});

type FormValues = z.infer<typeof formSchema>;

const RequestResource = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      uid: '',
      email: '',
      request: '',
      tag: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    // Show success toast
    toast({
      title: "Request Submitted",
      description: "We'll get back to you within 24 hours.",
      duration: 3000,
    });
    
    // Show success state
    setIsSubmitted(true);
    
    // Reset the form
    form.reset();
  };

  return (
    <section className="py-16 bg-gray-50" id="request-resource">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-block bg-blue-50 p-3 rounded-full mb-4">
              <Mail className="h-8 w-8 text-unifor-blue" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Request a Resource or Guide
            </h2>
            
            <p className="text-lg text-muted-foreground">
              Can't find what you need? Let us know and our alumni community will help.
            </p>
          </div>
          
          {isSubmitted ? (
            <div className="bg-white p-8 rounded-lg shadow-md text-center animate-fade-in">
              <div className="mb-6 flex justify-center">
                <div className="bg-green-100 p-4 rounded-full">
                  <CheckCircle className="h-12 w-12 text-green-600" />
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4">
                Your request has been received!
              </h3>
              
              <p className="text-muted-foreground mb-6">
                You'll hear from us within 24 hours. We'll connect you with the right resources or alumni.
              </p>
              
              <Button onClick={() => setIsSubmitted(false)}>
                Submit Another Request
              </Button>
            </div>
          ) : (
            <div className="bg-white p-8 rounded-lg shadow-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your full name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="uid"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>UID Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your UID" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="request"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What do you need help with?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please describe what resource or guide you're looking for..."
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="tag"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tag</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a tag" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {requestTags.map((tag) => (
                              <SelectItem key={tag.value} value={tag.value}>
                                {tag.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div>
                    <p className="text-sm text-muted-foreground mb-4 flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      You'll receive a response within 24 hours.
                    </p>
                    
                    <Button type="submit" className="w-full sm:w-auto bg-unifor-blue hover:bg-blue-700">
                      Submit Request
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RequestResource;
