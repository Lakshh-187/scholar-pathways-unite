import React from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Download, ExternalLink } from "lucide-react";

export type AttachmentItem = {
  title: string;
  href: string;
  size?: string;
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
        <Button variant="outline" className="hover-scale">{triggerText}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, idx) => (
            <Card key={idx} className="border bg-card/50">
              <CardContent className="p-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  {item.size && <p className="text-xs text-muted-foreground mt-1">{item.size}</p>}
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
