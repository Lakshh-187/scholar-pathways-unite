import React from "react";
import { Shield, BookOpen, Rocket, Users, Hammer, FileText, GraduationCap, Mic } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  { icon: Shield, title: "Programs", desc: "Safety audits, readiness drills, certification" },
  { icon: BookOpen, title: "Resources", desc: "Policies, checklists, posters, SOPs" },
  { icon: Rocket, title: "Projects", desc: "Student-led impact projects at campus" },
  { icon: Users, title: "Workshops", desc: "Teacher & parent awareness sessions" },
  { icon: Hammer, title: "Compliance", desc: "Guidelines aligned with national policies" },
  { icon: FileText, title: "Reports", desc: "Assessment reports and action plans" },
  { icon: GraduationCap, title: "Capacity Building", desc: "Training for safety ambassadors" },
  { icon: Mic, title: "Campaigns", desc: "Podcast, media, and outreach drives" },
];

const UICSSPrograms: React.FC = () => {
  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">We Backed?</h2>
          <p className="text-muted-foreground mt-2">Programs, offerings, projects, resources, and workshops under UICSS</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <Card key={title} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <Icon />
                </div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UICSSPrograms;
