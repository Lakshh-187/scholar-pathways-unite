
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { initializePayment } from '@/utils/razorpay';
import { CreditCard, ExternalLink, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const ScholarPaymentSection = () => {
  const [paymentComplete, setPaymentComplete] = useState(false);
  const { toast } = useToast();

  const handlePayment = async () => {
    try {
      await initializePayment({
        amount: 500,
        onSuccess: (response) => {
          setPaymentComplete(true);
          toast({
            title: "Payment Successful!",
            description: "You can now proceed to fill the ID Card Form.",
          });
        }
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "Please try again or contact support.",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="border-unifor-light-purple">
      <CardHeader>
        <CardTitle className="text-unifor-dark-purple">Scholar ID Card Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="bg-unifor-light-purple/10 p-6 rounded-lg">
            <h3 className="text-lg font-medium mb-2">Registration Fee</h3>
            <p className="text-gray-600 mb-4">₹500 (Refundable through Social Internship)</p>
            {!paymentComplete ? (
              <Button 
                onClick={handlePayment}
                className="w-full bg-unifor-purple hover:bg-unifor-dark-purple"
              >
                <CreditCard className="mr-2 h-5 w-5" />
                Pay Registration Fee
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                  Payment Successful!
                </div>
                <Button 
                  className="w-full bg-unifor-purple hover:bg-unifor-dark-purple"
                  onClick={() => window.open('https://forms.google.com/your-form-url', '_blank')}
                >
                  Fill ID Card Form
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full mt-2 border-unifor-purple text-unifor-dark-purple"
                  asChild
                >
                  <Link to="/social-internship">
                    <Users className="mr-2 h-5 w-5" />
                    Apply for Social Internship to Get Refund
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScholarPaymentSection;
