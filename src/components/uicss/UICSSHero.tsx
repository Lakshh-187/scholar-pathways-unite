import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const UICSSHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <Badge className="bg-primary text-primary-foreground">Powered by Uniford Foundation</Badge>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            International Council for School Safety (UICSS)
          </h1>
          <p className="text-muted-foreground text-lg">
            A national movement to make schools safer, smarter, and future-ready. Join educators, parents, and partners championing child safety across campuses.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#membership"><Button className="px-6">Join the Council</Button></a>
            <a href="#resources"><Button variant="outline" className="px-6">Explore Resources</Button></a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-2xl" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-secondary/20 rounded-full blur-2xl" />
          <div className="relative grid grid-cols-3 gap-4">
            <img src="/lovable-uploads/cf19831c-2c00-4761-8379-c6757b623d07.png" alt="Global safety goals infographic" loading="lazy" className="rounded-xl shadow-xl col-span-1 h-36 object-cover" />
            <img src="/lovable-uploads/e6b92560-9760-40ab-a35f-c80a1bbac855.png" alt="Chapters and councils across universities" loading="lazy" className="rounded-xl shadow-xl col-span-2 h-36 object-cover" />
            <img src="/lovable-uploads/be3517cc-e81e-4f61-a133-019267cf75c1.png" alt="Student-led initiatives and workshops" loading="lazy" className="rounded-xl shadow-xl col-span-2 h-36 object-cover" />
            <img src="/lovable-uploads/baf6c96d-a314-4745-ba69-67672aa9a098.png" alt="Audit and training in action" loading="lazy" className="rounded-xl shadow-xl col-span-1 h-36 object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UICSSHero;
