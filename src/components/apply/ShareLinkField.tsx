
import React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link2, Info } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ShareLinkFieldProps {
  id: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  helpText?: string;
}

const ShareLinkField: React.FC<ShareLinkFieldProps> = ({
  id,
  label,
  placeholder = "Paste your public share link here",
  required = false,
  helpText,
}) => {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor={id} className="font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
        {helpText && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info size={16} className="text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs">
                <p>{helpText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <div className="flex gap-2">
        <div className="relative flex-grow">
          <Input
            id={id}
            placeholder={placeholder}
            className="pl-10"
            required={required}
          />
          <Link2
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
          />
        </div>
        <Button
          type="button"
          variant="outline"
          className="whitespace-nowrap"
          onClick={() => window.open("https://drive.google.com", "_blank")}
        >
          Create Link
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Share link must be publicly accessible
      </p>
    </div>
  );
};

export default ShareLinkField;
