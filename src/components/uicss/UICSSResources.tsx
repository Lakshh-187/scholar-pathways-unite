import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AttachmentModal, { AttachmentItem } from "./AttachmentModal";
import { Button } from "@/components/ui/button";

const quickItems: AttachmentItem[] = [
  { title: "School Safety Policy Template", href: "/placeholder.svg", size: "PDF • 240KB" },
  { title: "Emergency Drill Checklist", href: "/placeholder.svg", size: "PDF • 180KB" },
  { title: "Cyber Safety Poster Pack", href: "/placeholder.svg", size: "ZIP • 3.2MB" },
];

const moreItems: AttachmentItem[] = Array.from({ length: 12 }, (_, i) => ({
  title: `Resource #${i + 1}`,
  href: "/placeholder.svg",
  size: i % 2 === 0 ? "PDF" : "DOCX",
}));

const UICSSResources: React.FC = () => {
  return (
    <section id="resources" className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Download Resources</h2>
            <p className="text-muted-foreground mt-2">Templates, SOPs, posters and guides for quick adoption</p>
          </div>
          <AttachmentModal title="Download Resources" items={moreItems} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {quickItems.map((i) => (
            <Card key={i.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{i.title}</h3>
                  <p className="text-xs text-muted-foreground mt-1">{i.size}</p>
                </div>
                <a href={i.href} download>
                  <Button size="sm">Download</Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UICSSResources;
