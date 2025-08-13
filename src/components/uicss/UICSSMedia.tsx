import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    key: "podcasts",
    title: "Podcasts",
    data: [
      { title: "Safe Schools Ep.01", img: "/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png" },
      { title: "Leaders Talk", img: "/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png" },
      { title: "Student Voices", img: "/lovable-uploads/83320e27-0b79-43f5-8e30-6e45043a85a9.png" },
    ],
  },
  {
    key: "campaigns",
    title: "Campaigns",
    data: [
      { title: "Anti-Bullying Week", img: "/lovable-uploads/417c6974-656e-4cc8-9b02-9500b11d325b.png" },
      { title: "Cyber Safety Month", img: "/lovable-uploads/4949b6b2-3040-4a7a-a474-5bd28a85a8b3.png" },
      { title: "Emergency Readiness", img: "/lovable-uploads/61438adf-d790-43aa-82d6-7d96b9e8f931.png" },
    ],
  },
  {
    key: "episodes",
    title: "Episodes",
    data: [
      { title: "Fire Drill 101", img: "/lovable-uploads/7cdd624e-8f94-4d4c-822d-305853985de3.png" },
      { title: "Mental Health First Aid", img: "/lovable-uploads/ad360940-b29b-4c32-9666-1b858478ccd1.png" },
      { title: "Child Protection", img: "/lovable-uploads/06d7a363-4fa0-4df2-8417-9267f42b3add.png" },
    ],
  },
];

const UICSSMedia: React.FC = () => {
  return (
    <section className="py-14 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Podcast, Campaign & Episodes</h2>
          <p className="text-muted-foreground mt-2">Upcoming drops — listen, watch, and engage</p>
        </div>
        <Tabs defaultValue="podcasts" className="w-full">
          <TabsList className="mx-auto flex max-w-xl">
            {items.map((tab) => (
              <TabsTrigger key={tab.key} value={tab.key} className="flex-1">{tab.title}</TabsTrigger>
            ))}
          </TabsList>
          {items.map((tab) => (
            <TabsContent value={tab.key} key={tab.key}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {tab.data.map((i) => (
                  <Card key={i.title} className="overflow-hidden hover:shadow-xl transition-shadow">
                    <img src={i.img} alt={`${i.title} cover`} loading="lazy" className="w-full h-44 object-cover" />
                    <CardContent className="p-4">
                      <h3 className="font-semibold">{i.title}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UICSSMedia;
