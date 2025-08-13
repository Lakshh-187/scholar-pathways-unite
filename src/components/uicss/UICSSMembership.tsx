import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { initializePayment } from "@/utils/razorpay";
import { toast } from "sonner";

const UICSSMembership: React.FC = () => {
  const handlePay = async () => {
    try {
      await initializePayment({
        amount: 13,
        name: "UICSS Membership",
        onSuccess: () => {
          toast.success("Application fee paid. Complete the membership form.");
          window.open("https://forms.gle/VJJCWM2wzcZjT8YK8", "_blank");
        },
      });
    } catch (e) {
      toast.error("Payment could not be initiated. Please try again.");
    }
  };

  return (
    <section id="membership" className="py-14 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Member of Council</h2>
            <p className="text-muted-foreground">
              Schools can apply for UICSS membership. Application form fee is <strong>₹13</strong>. If the organization team
              visits for audit, workshop, or conference, <strong>travel and stay</strong> are borne by the school. Otherwise, there is no additional fee.
            </p>
            <div className="flex gap-4">
              <Button onClick={handlePay}>Apply for Membership (₹13)</Button>
              <a href="https://forms.gle/VJJCWM2wzcZjT8YK8" target="_blank" rel="noopener noreferrer">
                <Button variant="outline">View Sample Form</Button>
              </a>
            </div>
          </div>
          <Card className="border-0 shadow-xl">
            <img src="/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png" alt="Council membership and audit" className="w-full h-64 object-cover" />
            <CardContent className="p-6">
              <ul className="list-disc ml-5 text-sm text-muted-foreground space-y-2">
                <li>Recognition as UICSS Member Institution</li>
                <li>Access to expert helpline and compliance support</li>
                <li>Priority for workshops, campaigns, and certification</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UICSSMembership;
