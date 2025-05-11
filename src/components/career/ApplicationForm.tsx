
import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from "react-hook-form";
import { useToast } from '@/hooks/use-toast';

interface ApplicationFormProps {
  jobTitle: string;
  onBack: () => void;
  onClose: () => void;
}

type FormValues = {
  fullName: string;
  email: string;
  portfolio: string;
  message: string;
  agreeToGuidelines: boolean;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ jobTitle, onBack, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();
  
  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Show success message
    toast({
      title: "Application Submitted!",
      description: "Thank you! We'll get back to you within 48 hours.",
    });
    
    setIsSubmitting(false);
    onClose();
  };
  
  const agreeToGuidelines = watch('agreeToGuidelines');

  return (
    <div>
      <div className="flex items-center mb-6">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h2 className="text-xl font-bold">Apply for: {jobTitle}</h2>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name <span className="text-red-500">*</span></Label>
            <Input
              id="fullName"
              placeholder="Enter your full name"
              {...register('fullName', { required: 'Full name is required' })}
            />
            {errors.fullName && (
              <p className="text-sm text-red-500">{errors.fullName.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address <span className="text-red-500">*</span></Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="portfolio">
              Portfolio Link <span className="text-red-500">*</span>
              <span className="text-xs text-muted-foreground ml-2">
                (See guide below for help)
              </span>
            </Label>
            <Input
              id="portfolio"
              placeholder="https://your-portfolio-link.com"
              {...register('portfolio', { required: 'Portfolio link is required' })}
            />
            {errors.portfolio && (
              <p className="text-sm text-red-500">{errors.portfolio.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message">Cover Letter / Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us why you're interested in this role and what makes you a great fit..."
              className="min-h-[120px]"
              {...register('message')}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="resume">Upload Resume (PDF, Max 5MB)</Label>
            <Input id="resume" type="file" accept=".pdf" />
            <p className="text-xs text-muted-foreground">
              PDF format only, 5MB maximum file size
            </p>
          </div>
          
          <div className="flex items-start space-x-2 pt-2">
            <Checkbox 
              id="agreeToGuidelines" 
              {...register('agreeToGuidelines', { 
                required: 'You must agree to the guidelines' 
              })}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="agreeToGuidelines"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I've read the guidelines to create a valid portfolio link
              </label>
              {errors.agreeToGuidelines && (
                <p className="text-sm text-red-500">{errors.agreeToGuidelines.message}</p>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onBack}
          >
            Back
          </Button>
          <Button 
            type="submit" 
            className="bg-unifor-blue hover:bg-blue-700" 
            disabled={isSubmitting || !agreeToGuidelines}
          >
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;
