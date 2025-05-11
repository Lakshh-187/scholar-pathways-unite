
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail, Send } from 'lucide-react';
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

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  uid: z.string().min(3, 'UID must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address'),
  query: z.string().min(10, 'Query must be at least 10 characters'),
});

type FormValues = z.infer<typeof formSchema>;

const QueryForm = () => {
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      uid: '',
      email: '',
      query: '',
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log('Form submitted:', data);
    
    // Show success toast
    toast({
      title: "Query Submitted",
      description: "We'll get back to you within 24 hours.",
      duration: 3000,
    });
    
    // Reset the form
    form.reset();
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-10 animate-fade-in">
      <div className="flex items-center gap-2 mb-6">
        <Mail className="h-5 w-5 text-unifor-purple" />
        <h2 className="text-2xl font-semibold text-unifor-purple">Ask Your Query</h2>
      </div>
      
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
            name="query"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Query</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Please describe your query in detail..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <div>
            <p className="text-sm text-muted-foreground mb-4 flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              You'll receive a response within 24 hours.
            </p>
            
            <Button type="submit" className="w-full sm:w-auto">
              Submit Query
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default QueryForm;
