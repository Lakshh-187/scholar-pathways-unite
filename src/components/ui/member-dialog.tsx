import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface MemberDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (memberId: string) => void;
  title?: string;
  description?: string;
}

const MemberDialog: React.FC<MemberDialogProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title = "Member Access Required",
  description = "Please enter your Member ID to access this resource."
}) => {
  const [memberId, setMemberId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!memberId.trim()) {
      toast({
        title: "Error",
        description: "Please enter your Member ID",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate verification (in real app, this would be an API call)
    setTimeout(() => {
      onSubmit(memberId);
      setIsLoading(false);
      setMemberId("");
      onClose();
    }, 1000);
  };

  const handleClose = () => {
    setMemberId("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">
            {description}
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="memberId">Member ID</Label>
              <Input
                id="memberId"
                type="text"
                placeholder="Enter your Member ID"
                value={memberId}
                onChange={(e) => setMemberId(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex gap-2 justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                className="min-w-[80px]"
              >
                {isLoading ? "Verifying..." : "Access"}
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberDialog;