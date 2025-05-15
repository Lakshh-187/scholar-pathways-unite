
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, Info } from "lucide-react";

interface FormGuideCardProps {
  title: string;
  children: React.ReactNode;
  type?: "info" | "warning";
}

const FormGuideCard: React.FC<FormGuideCardProps> = ({ 
  title, 
  children, 
  type = "info" 
}) => {
  const isInfo = type === "info";
  
  return (
    <Card className={`mb-6 ${isInfo ? "bg-blue-50" : "bg-amber-50"}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex items-center gap-2">
          {isInfo ? 
            <Info className="h-5 w-5 text-blue-500" /> : 
            <Bell className="h-5 w-5 text-amber-500" />
          }
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
};

export default FormGuideCard;
