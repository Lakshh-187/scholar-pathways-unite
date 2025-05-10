import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
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

const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }),
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  latestExamGrade: z.string().min(1, { message: 'Please enter your latest exam percentage or grade.' }),
  stream: z.string().min(2, { message: 'Please enter your current stream.' }),
  classGrade: z.string().min(1, { message: 'Please enter your current class or grade.' }),
  contactNo: z.string().regex(/^\d{10}$/, { message: 'Invalid phone number format (10 digits).' }), // Basic 10 digit validation
  idCardType: z.enum(['Fransico Scholar', 'Frontliner Scholar'], {
    errorMap: () => ({ message: 'Please select an ID card type.' }),
  }),
  photo: z.string().url({ message: 'Please provide a valid URL for your photo.' }), // Validate as URL
});

type FormValues = z.infer<typeof formSchema>;

const IDCardApplicationForm: React.FC = () => {
  const [photo, setPhoto] = useState<File | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      name: '',
      latestExamGrade: '',
      stream: '',
      classGrade: '',
      contactNo: '',
      idCardType: undefined, // Use undefined for initial state of enum
    },
  });
  
  // Remove handlePhotoUpload as it's now a text input
  const onSubmit = (data: FormValues) => {
    console.log('ID Card Application Form submitted:', data);
    // Here you would typically send the data (including the photo) to your backend or Apps Script
    // For now, we'll just log it.
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">ID Card Application</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-lg mx-auto">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email ID (Use the same email as in membership activation)</FormLabel>
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
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="latestExamGrade"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Latest Exam Percentage or Grade</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., 90% or A Grade" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="stream"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Stream</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Science, Commerce" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="classGrade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Current Class/Grade</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 12th, B.A. 3rd Year" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="contactNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact No.</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="Your phone number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="idCardType"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>You want ID Card Type</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Fransico Scholar" />
                      </FormControl>
                      <FormLabel className="font-normal">Fransico Scholar (Campus To Corporate)</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Frontliner Scholar" />
                      </FormControl>
                      <FormLabel className="font-normal">Frontliner Scholar (Initiator & Leaders)</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="photo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Photo Link</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Paste link to your photo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full">Submit Application</Button>
        </form>
      </Form>
    </div>
  );
};

export default IDCardApplicationForm;