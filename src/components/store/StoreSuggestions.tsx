
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const StoreSuggestions = () => {
  return (
    <Card className="bg-unifor-light-purple/10">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Have a Suggestion?</h3>
            <p className="text-gray-600">
              Help us improve our store by sharing your ideas and feedback
            </p>
          </div>
          <Button 
            onClick={() => window.open('https://forms.google.com/your-form-id', '_blank')}
            className="flex items-center gap-2"
          >
            <MessageSquare className="h-5 w-5" />
            Share Feedback
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default StoreSuggestions;
