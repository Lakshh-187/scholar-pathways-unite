
import React from 'react';
import { Mail, MessageSquare, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const SupportSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Need Help with Your Application?</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Our team is ready to assist you with any questions about opportunities, 
          the application process, or technical support.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-unifor-blue" />
                Email Support
              </CardTitle>
              <CardDescription>Get a response within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-unifor-blue text-unifor-blue hover:bg-unifor-blue/10"
                onClick={() => window.location.href = "mailto:careers@uniford.org"}
              >
                careers@uniford.org
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-green-600" />
                WhatsApp
              </CardTitle>
              <CardDescription>Quick replies during business hours</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-green-600 text-green-600 hover:bg-green-600/10"
                onClick={() => window.open("https://wa.me/917347099610", "_blank")}
              >
                +91 7347099610
              </Button>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-unifor-purple" />
                Phone Support
              </CardTitle>
              <CardDescription>Available Mon-Fri, 9am-5pm IST</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="outline" 
                className="w-full border-unifor-purple text-unifor-purple hover:bg-unifor-purple/10"
                onClick={() => window.location.href = "tel:+917347099610"}
              >
                +91 7347099610
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
