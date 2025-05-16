
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
import { Users, Send } from "lucide-react";

const SocialInternshipForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Internship Application Submitted",
      description: "Your application for the Social Internship program has been received.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-amber-600 p-3 rounded-full">
          <Users size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">Social Internship Application</h2>
      </div>
      
      <FormGuideCard title="Social Internship Guidelines" type="warning">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Social Internships are 6-8 weeks long virtual or hybrid programs</li>
          <li>Applicants must be available for at least 10 hours per week</li>
          <li>Applications are evaluated based on skills, motivation, and social impact interest</li>
          <li>Selected interns will be notified within 15 days of application</li>
          <li>Certificates will be provided upon successful completion of the internship</li>
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
            <Label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </Label>
            <Input
              id="phone"
              placeholder="Enter your phone number"
              {...register("phone", { required: "Phone number is required" })}
            />
            {errors.phone && (
              <p className="text-sm text-red-500">{errors.phone.message as string}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="education">
              Educational Background <span className="text-red-500">*</span>
            </Label>
            <Input
              id="education"
              placeholder="E.g., Bachelor's in Computer Science"
              {...register("education", { required: "Education is required" })}
            />
            {errors.education && (
              <p className="text-sm text-red-500">{errors.education.message as string}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="internshipArea">
            Internship Area of Interest <span className="text-red-500">*</span>
          </Label>
          <select
            id="internshipArea"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            {...register("internshipArea", { required: "Internship area is required" })}
          >
            <option value="">Select area of interest</option>
            <option value="content">Content Creation & Management</option>
            <option value="social">Social Media Management</option>
            <option value="research">Research & Data Analysis</option>
            <option value="design">Graphic Design & Illustration</option>
            <option value="community">Community Management</option>
            <option value="project">Project Coordination</option>
          </select>
          {errors.internshipArea && (
            <p className="text-sm text-red-500">{errors.internshipArea.message as string}</p>
          )}
        </div>
        
        <ShareLinkField 
          id="resumeLink"
          label="Resume/CV Link"
          required={true}
          helpText="Share a link to your resume or CV"
        />
        
        <ShareLinkField 
          id="portfolioLink"
          label="Portfolio/Work Samples Link"
          helpText="Share a link to your portfolio or relevant work samples"
        />
        
        <div className="space-y-2">
          <Label htmlFor="motivation">
            Motivation Statement <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="motivation"
            placeholder="Why are you interested in this social internship? What impact do you hope to make?"
            className="min-h-[150px]"
            {...register("motivation", { required: "Motivation statement is required" })}
          />
          {errors.motivation && (
            <p className="text-sm text-red-500">{errors.motivation.message as string}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label>
            Availability <span className="text-red-500">*</span>
          </Label>
          <div className="grid grid-cols-2 gap-4 pt-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="availability_morning" {...register("availability_morning")} />
              <Label htmlFor="availability_morning" className="font-normal text-sm">Morning (9AM-12PM)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="availability_afternoon" {...register("availability_afternoon")} />
              <Label htmlFor="availability_afternoon" className="font-normal text-sm">Afternoon (12PM-5PM)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="availability_evening" {...register("availability_evening")} />
              <Label htmlFor="availability_evening" className="font-normal text-sm">Evening (5PM-9PM)</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="availability_weekend" {...register("availability_weekend")} />
              <Label htmlFor="availability_weekend" className="font-normal text-sm">Weekends</Label>
            </div>
          </div>
        </div>
        
        <div className="flex items-start space-x-2 pt-2">
          <Checkbox 
            id="terms" 
            {...register("terms", { required: true })}
          />
          <div>
            <Label 
              htmlFor="terms" 
              className="text-sm font-normal cursor-pointer"
            >
              I understand that this is an unpaid internship focused on social impact, and I commit to fulfilling the requirements
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
          className="bg-amber-600 hover:bg-amber-700"
        >
          <Send className="mr-2" />
          {isSubmitting ? "Submitting..." : "Apply for Internship"}
        </Button>
      </form>
    </div>
  );
};

export default SocialInternshipForm;
