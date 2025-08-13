import React from "react";
import { Shield, Bug, Cloud, Stethoscope, Building2, AlertTriangle, UserCheck, Brain, ClipboardList } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const topics = [
  { icon: UserCheck, title: "Bullying & Cyberbullying", subs: ["Cyberbullying", "Physical", "Verbal"] },
  { icon: Shield, title: "Child Protection", subs: ["Human Trafficking", "Online Exploitation"] },
  { icon: Cloud, title: "Cybersecurity", subs: ["Data Breach", "Phishing", "Ransomware"] },
  { icon: ClipboardList, title: "Emergency Planning", subs: ["Recovery", "Training & Drills"] },
  { icon: Stethoscope, title: "Public Health", subs: ["Distance Learning", "Sanitation", "Ventilation"] },
  { icon: Brain, title: "Mental Health", subs: ["At-risk", "Substance Use", "Suicide Mgmt"] },
  { icon: Building2, title: "School Climate", subs: ["Culture", "Equity", "Engagement"] },
  { icon: AlertTriangle, title: "Targeted Violence", subs: ["Prevention", "Security"] },
];

const UICSSSafetyTopics: React.FC = () => {
  return (
    <section className="py-14 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">School Safety Topics</h2>
          <p className="text-muted-foreground mt-2">Access guidance and resources to build a safer campus</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {topics.map((t) => (
            <Card key={t.title} className="hover:shadow-md transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center"><t.icon /></div>
                  <h3 className="font-semibold">{t.title}</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc ml-5">
                  {t.subs.map((s) => (<li key={s}>{s}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UICSSSafetyTopics;
