
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import ShareLinkField from "./ShareLinkField";
import FormGuideCard from "./FormGuideCard";
import { FileText, Send } from "lucide-react";

const ApplicationForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Application Submitted",
      description: "We have received your application. Our team will review it soon.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-unifor-purple p-3 rounded-full">
          <FileText size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">General Application Form</h2>
      </div>
      
      <FormGuideCard title="Application Guidelines">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Complete all required fields marked with an asterisk (*)</li>
          <li>Ensure all shared links are public and accessible</li>
          <li>For resume and portfolio, use Google Drive or Dropbox public links</li>
          <li>Applications typically take 3-5 business days for review</li>
        </ul>
        </FormGuideCard>

<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {/* Full Name */}
    <div className="space-y-2">
      <Label htmlFor="fullName">
        Full Name <span className="text-red-500">*</span>
      </Label>
      <Input
        id="fullName"
        placeholder="Enter your full name"
        {...register("fullName", { required: "Full name is required" })}
      />
      {errors.fullName && (
        <p className="text-sm text-red-500">{errors.fullName.message as string}</p>
      )}
    </div>

    {/* Email Address */}
    <div className="space-y-2">
      <Label htmlFor="email">
        Email Address <span className="text-red-500">*</span>
      </Label>
      <Input
        id="email"
        type="email"
        placeholder="your.email@example.com"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {errors.email && (
        <p className="text-sm text-red-500">{errors.email.message as string}</p>
      )}
    </div>

    {/* Scholar ID */}
    <div className="space-y-2">
      <Label htmlFor="scholarId">
        Scholar ID <span className="text-red-500">*</span>
      </Label>
      <Input
        id="scholarId"
        placeholder="Enter your Scholar ID"
        {...register("scholarId", { required: "Scholar ID is required" })}
      />
      {errors.scholarId && (
        <p className="text-sm text-red-500">{errors.scholarId.message as string}</p>
      )}
    </div>
  </div>


        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="phone">Whatsapp Number</Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone")}
            />
          </div>

        
        
          <div className="space-y-2">
            <Label htmlFor="program">
              Applying For (eg. Internship , Project Expo ...) <span className="text-red-500">*</span>
            </Label>
            <Input
              id="program"
              placeholder="Enter the program name"
              {...register("program", { required: "Program is required" })}
            />
            {errors.program && (
              <p className="text-sm text-red-500">{errors.program.message as string}</p>
            )}
          </div>
        </div>
        
        
        <ShareLinkField 
          id="resume"
          label="Resume/LinkedIn / Profile Link"
          required={true}
          helpText="Share a Google Drive or Dropbox link to your resume"
        />
        
        <ShareLinkField 
          id="portfolio"
          label="Portfolio Website Link (Optional)"
          helpText="Share a link to your portfolio or work samples"
        />
        
        <div className="space-y-2">
          <Label htmlFor="coverLetter">Cover Letter / Statement of Purpose</Label>
          <Textarea
            id="coverLetter"
            placeholder="Write your cover letter or statement of purpose here..."
            className="min-h-[150px]"
            {...register("coverLetter")}
          />
        </div>
        
        <div className="flex items-start space-x-2 pt-2">
          <Checkbox id="terms" {...register("terms", { required: true })} />
          <div>
            <Label 
              htmlFor="terms" 
              className="text-sm font-normal cursor-pointer"
            >
              I agree to the processing of my personal data in accordance with Uniford's privacy policy
              <span className="text-red-500"> *</span>
            </Label>
            {errors.terms && (
              <p className="text-sm text-red-500">You must agree to the terms</p>
            )}
          </div>
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-unifor-purple hover:bg-unifor-dark-purple"
        >
          <Send className="mr-2" />
          {isSubmitting ? "Submitting..." : "Submit Application"}
        </Button>
      </form>
    </div>
  );
};

export default ApplicationForm;
