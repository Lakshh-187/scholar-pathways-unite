
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ShareLinkField from "./ShareLinkField";
import FormGuideCard from "./FormGuideCard";
import { FileText, Upload, Send } from "lucide-react";

const SubmissionForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Submission Received",
      description: "Your submission has been received successfully.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-green-600 p-3 rounded-full">
          <Upload size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">Project Submission Form</h2>
      </div>
      
      <FormGuideCard title="Submission Guidelines" type="info">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Ensure all project links are public and accessible without login</li>
          <li>For large files, use Google Drive or similar platforms and share the public link</li>
          <li>Include a brief description of your submission for proper evaluation</li>
          <li>All submissions will receive feedback within 7 business days</li>
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


        <div className="space-y-2">
          <Label htmlFor="projectCategory">
            Project Category <span className="text-red-500">*</span>
          </Label>
          <Input
            id="projectCategory"
            placeholder="E.g., Research, Innovation, Creative"
            {...register("projectCategory", { required: "Project category is required" })}
          />
          {errors.projectCategory && (
            <p className="text-sm text-red-500">{errors.projectCategory.message as string}</p>
          )}
        </div>
        
        <ShareLinkField 
          id="projectLink"
          label="Project Link"
          required={true}
          helpText="Share a link to your project files or documentation"
        />
        
        <ShareLinkField 
          id="presentationLink"
          label="Presentation Link"
          helpText="Share a link to your project presentation if applicable"
        />
        
        <div className="space-y-2">
          <Label htmlFor="projectDescription">
            Project Description <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="projectDescription"
            placeholder="Describe your project, its objectives, and outcomes..."
            className="min-h-[150px]"
            {...register("projectDescription", { required: "Project description is required" })}
          />
          {errors.projectDescription && (
            <p className="text-sm text-red-500">{errors.projectDescription.message as string}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-green-600 hover:bg-green-700"
        >
          <Send className="mr-2" />
          {isSubmitting ? "Submitting..." : "Submit Project"}
        </Button>
      </form>
    </div>
  );
};

export default SubmissionForm;
