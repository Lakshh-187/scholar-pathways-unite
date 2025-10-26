import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Settings, Leaf, Lightbulb, Handshake, Award, CheckCircle2 } from "lucide-react";

const AccreditationLicense = () => {
  const focusAreas = [
    { icon: Shield, title: "Safety & Protection", description: "Compliance with POSH, POCSO, Cyber Safety, Health, and Environmental norms" },
    { icon: Settings, title: "Standards & Systems", description: "Implementation of policies, governance structures, and operational quality" },
    { icon: Leaf, title: "Sustainability & SDGs", description: "Integration of UN Sustainable Development Goals across school culture and curriculum" },
    { icon: Lightbulb, title: "Innovation & Incubation", description: "Programs for entrepreneurship, talent development, and research collaboration" },
    { icon: Handshake, title: "Community & Partnership", description: "Engagement with parents, NGOs, and CSR programs for local/global impact" },
  ];

  const benefits = [
    { title: "UTHA – Uniford Talent Hunt Alliance", description: "Direct inclusion for student skill competitions, innovation, and talent programs" },
    { title: "UIRAD – International Research & Academic Development", description: "Participation in joint academic projects, case studies, and publications" },
    { title: "Funded Programs & Sessions", description: "Access to I-backed funded innovation programs, CSR-based grants, and training support" },
    { title: "Safety & Standard Pre-Audit", description: "Annual compliance audit and improvement report by UIRAD experts" },
    { title: "Free Application in All 17 SDG Categories", description: "Full eligibility for SDG School Certification under the New Wales Association" },
    { title: "Dedicated Helpdesk for School Program Leads", description: "Continuous advisory support for program implementation, reporting, and compliance" },
    { title: "Access to All Council Member Resources", description: "Includes all templates, policy formats, training sessions, and newsletters" },
    { title: "Eligibility for Global Awards & Excellence Listing", description: "Automatic nomination for International Safety & Standard Awards" },
  ];

  const stages = [
    {
      stage: "Stage 1 – Interest & Eligibility",
      process: "School submits Expression of Interest + initial compliance checklist",
      outcome: "Review for basic eligibility (must operate legally and have minimum 1-year academic record)"
    },
    {
      stage: "Stage 2 – Candidate for Accreditation",
      process: "School undergoes Self-Assessment and Mentor-led Pre-Audit using UIRAD Safety & Standard Framework",
      outcome: "School recognized as Candidate for Accreditation and begins guided improvement process"
    },
    {
      stage: "Stage 3 – Accreditation & Licensing",
      process: "On-site / virtual audit by expert evaluators, followed by Jury Review & Board Approval",
      outcome: "Grant of UIRAD–UNCIF Accreditation & License (valid for 3 years)"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">🏆 UNCIF Accreditation & Licensing Framework</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Inspired by Global Best Practices — Built for Indian & International Schools
        </p>
      </div>

      {/* Core Focus Areas */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">🧭 Core Focus Areas</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          Unlike traditional accreditations that evaluate only academics, the UIRAD–UNCIF Accreditation & License measures holistic readiness through 5 key domains
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Icon className="h-8 w-8 text-primary flex-shrink-0" />
                    <CardTitle className="text-lg">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Accreditation Benefits */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">🏫 Accreditation Benefits</h2>
        <p className="text-center text-muted-foreground mb-8">
          Accredited & Licensed Schools receive comprehensive recognition, access, and privileges
        </p>
        <div className="max-w-5xl mx-auto space-y-4">
          {benefits.map((benefit, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Accreditation Process */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">⚙️ Accreditation Process (Three-Stage Model)</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
          UIRAD–UNCIF Accreditation follows a voluntary, ongoing, improvement-based process inspired by international systems, but focused on Safety, Standard & SDG readiness
        </p>
        <div className="max-w-4xl mx-auto space-y-6">
          {stages.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <Badge className="text-lg px-4 py-2">Stage {index + 1}</Badge>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="font-bold text-xl">{item.stage}</h3>
                    <div className="space-y-2">
                      <div>
                        <span className="font-medium text-sm">Process:</span>
                        <p className="text-sm text-muted-foreground">{item.process}</p>
                      </div>
                      <div>
                        <span className="font-medium text-sm">Outcome:</span>
                        <p className="text-sm text-primary font-medium">{item.outcome}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center space-y-4">
        <Button size="lg" className="text-lg px-8">
          Apply for Accreditation & License
        </Button>
        <p className="text-sm text-muted-foreground">
          Begin your journey towards UIRAD–UNCIF Accreditation & Licensing
        </p>
      </div>
    </div>
  );
};

export default AccreditationLicense;
