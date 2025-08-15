import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

export type AttachmentItem = {
  title: string;
  href: string;
  size?: string;
  downloads?: number;
};

interface AttachmentModalProps {
  title: string;
  items: AttachmentItem[];
  triggerText?: string;
}

const AttachmentModal: React.FC<AttachmentModalProps> = ({ title, items, triggerText = "View more" }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="group hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
          <span className="mr-2">{triggerText}</span>
          <span className="group-hover:rotate-90 transition-transform duration-300">⚡</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="bg-muted/50 p-4 rounded-lg mb-4">
          <p className="text-sm text-muted-foreground">
            <strong>Disclaimer:</strong> These resources are shared for educational and reference purposes only. 
            We sincerely thank and acknowledge all the organizations that created these materials and made them publicly available. 
            Full credit belongs to the original creators.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <Card key={idx} className="border bg-card/50">
              <CardContent className="p-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {item.size && <p className="text-xs text-muted-foreground">{item.size}</p>}
                    {item.downloads && <span className="text-xs text-primary font-medium">↓{item.downloads}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${item.title}`} className="inline-flex">
                    <Button variant="ghost" size="icon"><ExternalLink /></Button>
                  </a>
                  <a href={item.href} download aria-label={`Download ${item.title}`} className="inline-flex">
                    <Button variant="ghost" size="icon"><Download /></Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AttachmentModal;
