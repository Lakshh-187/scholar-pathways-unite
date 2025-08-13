import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import AttachmentModal, { AttachmentItem } from "./AttachmentModal";
import { Button } from "@/components/ui/button";

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

export default UICSSToolkits;
