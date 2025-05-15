
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ShareLinkField from "./ShareLinkField";
import FormGuideCard from "./FormGuideCard";
import { Mail, Calendar, Send } from "lucide-react";

const LeaveRequestForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted",
      description: "Your leave request has been submitted successfully.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-blue-600 p-3 rounded-full">
          <Mail size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">Leave & Special Request Form</h2>
      </div>
      
      <FormGuideCard title="Request Guidelines" type="warning">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Submit leave requests at least 7 days before the intended leave period</li>
          <li>For emergency leave, please call the coordinator directly</li>
          <li>Supporting documents should be shared via links wherever applicable</li>
          <li>Leave requests are typically processed within 2 business days</li>
        </ul>
      </FormGuideCard>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="requestType">
            Request Type <span className="text-red-500">*</span>
          </Label>
          <select
            id="requestType"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            {...register("requestType", { required: "Request type is required" })}
          >
            <option value="">Select request type</option>
            <option value="leave">Leave Request</option>
            <option value="extension">Deadline Extension</option>
            <option value="special">Special Consideration</option>
            <option value="other">Other Request</option>
          </select>
          {errors.requestType && (
            <p className="text-sm text-red-500">{errors.requestType.message as string}</p>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="startDate">
              Start Date <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="startDate"
                type="date"
                className="pl-10"
                {...register("startDate", { required: "Start date is required" })}
              />
            </div>
            {errors.startDate && (
              <p className="text-sm text-red-500">{errors.startDate.message as string}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="endDate">
              End Date <span className="text-red-500">*</span>
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                id="endDate"
                type="date"
                className="pl-10"
                {...register("endDate", { required: "End date is required" })}
              />
            </div>
            {errors.endDate && (
              <p className="text-sm text-red-500">{errors.endDate.message as string}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="reason">
            Reason <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="reason"
            placeholder="Please provide detailed reason for your request..."
            className="min-h-[150px]"
            {...register("reason", { required: "Reason is required" })}
          />
          {errors.reason && (
            <p className="text-sm text-red-500">{errors.reason.message as string}</p>
          )}
        </div>
        
        <ShareLinkField 
          id="supportingDocs"
          label="Supporting Documents"
          helpText="Provide links to any supporting documents (medical certificates, etc.)"
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700"
        >
          <Send className="mr-2" />
          {isSubmitting ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
};

export default LeaveRequestForm;
