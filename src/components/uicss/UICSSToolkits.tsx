import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import AttachmentModal, { AttachmentItem } from "./AttachmentModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MemberDialog from "@/components/ui/member-dialog";
import { useToast } from "@/hooks/use-toast";

const quickItems: AttachmentItem[] = [
  { title: "Anti-Bullying Classroom Kit", href: "/placeholder.svg", size: "PDF • 320KB" },
  { title: "Safe Internet Day Activities", href: "/placeholder.svg", size: "PDF • 410KB" },
  { title: "Emergency Response Cards", href: "/placeholder.svg", size: "ZIP • 2.1MB" },
];

const moreItems: AttachmentItem[] = Array.from({ length: 15 }, (_, i) => ({
  title: `Toolkit #${i + 1}`,
  href: "/placeholder.svg",
  size: i % 3 === 0 ? "PDF" : "PPTX",
}));

const UICSSToolkits: React.FC = () => {
  const [isMemberDialogOpen, setIsMemberDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<AttachmentItem | null>(null);
  const { toast } = useToast();

  const handleMemberDownload = (item: AttachmentItem) => {
    setSelectedItem(item);
    setIsMemberDialogOpen(true);
  };

  const handleMemberIdSubmit = (memberId: string) => {
    if (selectedItem) {
      toast({
        title: "Access Granted",
        description: `Downloading ${selectedItem.title}`,
      });
      // Here you would typically validate the member ID and then download
      window.open(selectedItem.href, '_blank');
    }
  };

  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Literacy Toolkit</h2>
            <p className="text-muted-foreground mt-2">Educate, engage, and empower through ready-to-use toolkits</p>
          </div>
          <AttachmentModal title="Literacy Toolkits" items={moreItems} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickItems.map((i) => (
            <Card key={i.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{i.title}</h3>
                    <Badge variant="secondary" className="text-xs bg-primary/10 text-primary">
                      ICSS Members Only
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">{i.size}</p>
                </div>
                <Button size="sm" onClick={() => handleMemberDownload(i)}>
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      <MemberDialog
        isOpen={isMemberDialogOpen}
        onClose={() => setIsMemberDialogOpen(false)}
        onSubmit={handleMemberIdSubmit}
        title="ICSS Member Access"
        description="This toolkit is exclusive to ICSS members. Please enter your Member ID to access this resource."
      />
    </section>
  );
};

export default UICSSToolkits;
