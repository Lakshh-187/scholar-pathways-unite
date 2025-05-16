
import React from "react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ShareLinkField from "./ShareLinkField";
import FormGuideCard from "./FormGuideCard";
import { IdCard, Send } from "lucide-react";

const IDCardRequestForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  const { toast } = useToast();

  const onSubmit = async (data: any) => {
    console.log("Form submitted:", data);
    
    // Simulating form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "ID Card Request Submitted",
      description: "Your ID card request has been submitted. We will process it shortly.",
    });
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="mb-6 flex items-center gap-3">
        <div className="bg-purple-600 p-3 rounded-full">
          <IdCard size={24} className="text-white" />
        </div>
        <h2 className="text-2xl font-bold">ID Card Request Form</h2>
      </div>
      
      <FormGuideCard title="ID Card Guidelines">
        <ul className="list-disc pl-5 space-y-2 text-sm">
          <li>Please provide a clear, recent photograph with white background</li>
          <li>Ensure all personal details are accurate as they will appear on your ID card</li>
          <li>ID cards are typically processed within 7-10 business days</li>
          <li>Physical cards will be sent to the address provided</li>
          <li>A digital version will be emailed to you once processed</li>
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
            <Label htmlFor="scholarType">
              Scholar Type <span className="text-red-500">*</span>
            </Label>
            <select
              id="scholarType"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              {...register("scholarType", { required: "Scholar type is required" })}
            >
              <option value="">Select scholar type</option>
              <option value="Francisco">Francisco Scholar</option>
              <option value="Frontliner">Frontliner Scholar</option>
              <option value="Vintage">Vintage Scholar</option>
              <option value="YLC">YLC Scholar</option>
              <option value="Austin">Austin Scholar</option>
            </select>
            {errors.scholarType && (
              <p className="text-sm text-red-500">{errors.scholarType.message as string}</p>
            )}
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">
            Mailing Address <span className="text-red-500">*</span>
          </Label>
          <Textarea
            id="address"
            placeholder="Enter your complete mailing address"
            className="min-h-[100px]"
            {...register("address", { required: "Address is required" })}
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message as string}</p>
          )}
        </div>
        
        <ShareLinkField 
          id="photoLink"
          label="Photograph Link"
          required={true}
          helpText="Share a link to your recent passport size photograph with white background"
        />
        
        <ShareLinkField 
          id="idProofLink"
          label="ID Proof Link"
          required={true}
          helpText="Share a link to your government-issued ID proof"
        />
        
        <div className="space-y-2">
          <Label htmlFor="specialRequirements">Special Requirements</Label>
          <Textarea
            id="specialRequirements"
            placeholder="Any special requirements for your ID card..."
            {...register("specialRequirements")}
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="bg-purple-600 hover:bg-purple-700"
        >
          <Send className="mr-2" />
          {isSubmitting ? "Submitting..." : "Request ID Card"}
        </Button>
      </form>
    </div>
  );
};

export default IDCardRequestForm;
