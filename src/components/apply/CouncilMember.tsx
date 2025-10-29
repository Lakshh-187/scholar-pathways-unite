import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, BookOpen, Users, Newspaper, Globe, Trophy, Megaphone, HeadphonesIcon, Lightbulb, Medal } from "lucide-react";

const CouncilMember = () => {
  const benefits = [
    {
      icon: Award,
      title: "Council Recognition & Certification",
      description: "Official certificate of membership (Hard Copy & Digital) – Recognized by UNCIF & UIRAD as a School of Safety & Standards Excellence."
    },
    {
      icon: BookOpen,
      title: "Safety & Standard Compendium (Manual + Templates)",
      description: "Access to a complete implementation toolkit including policy drafts (POSH, POCSO, DPDPA, Cyber Safety, NEP Alignment), safety & standard audit checklists, committee constitution formats, and communication templates for staff, parents & visitors."
    },
    {
      icon: Users,
      title: "Leadership & Capacity Building",
      description: "Exclusive access to live training sessions & webinars by experts, certification for Safety Coordinators, Committee Members & Teachers, and Leadership Roundtables on School Governance, NEP & ESG."
    },
    {
      icon: Newspaper,
      title: "Quarterly 'School Standards' Digest",
      description: "An exclusive publication sharing updates on laws, audits, and compliance, global school benchmarking & SDG initiatives, and best practices from leading institutions."
    },
    {
      icon: Globe,
      title: "SDG Certification & Collaboration",
      description: "Council members are automatically eligible for all 17 SDG Certification Categories, in association with the New Wales Association (NWA). Also includes 2 complimentary SDG category applications per year and visibility on the UNCIF Global School Network Portal."
    },
    {
      icon: Trophy,
      title: "Awards & Accreditations Eligibility",
      description: "Automatic eligibility for National Safe School Awards, UNCIF Leadership & Innovation Accreditations, and UIRAD Global Recognition License."
    },
    {
      icon: Megaphone,
      title: "Advocacy & Representation",
      description: "UNCIF represents council member schools in national-level forums and safety consultations, international education & SDG policy discussions, and joint publications & case studies."
    },
    {
      icon: HeadphonesIcon,
      title: "Dedicated Helpdesk & Advisory Support",
      description: "24×7 access to compliance documentation assistance, audit preparation guidance, and expert consultation (POSH, POCSO, Cyber Safety, NEP, etc.)."
    },
    {
      icon: Lightbulb,
      title: "Incubation & Funded Opportunities",
      description: "Priority access to CSR-backed and innovation-based school programs, grants, scholarships & incubation partnerships under Uniford I-Backed Fund."
    },
    {
      icon: Medal,
      title: "Recognition Collateral Kit",
      description: "Each member school receives hard copy certificate with holographic seal, council member badge & digital emblem for website/socials, and printable posters: 'We Are a UNCIF Certified Council Member'."
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge className="text-lg px-6 py-2" variant="default">
          🏅 Exclusive Membership Program
        </Badge>
        <h1 className="text-4xl font-bold">UNCIF Council Member Benefits</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join an elite network of schools committed to safety, standards, and sustainable development
        </p>
      </div>

      {/* Benefits Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Comprehensive Member Benefits</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Key Highlights */}
      <section className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">What Sets Council Membership Apart?</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">100%</div>
            <div className="text-sm text-muted-foreground">Free Access to All Resources</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">17</div>
            <div className="text-sm text-muted-foreground">SDG Categories Covered</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support Available</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center space-y-4">
        <Button size="lg" className="text-lg px-8">
          Apply for Council Membership
        </Button>
        <p className="text-sm text-muted-foreground">
          Transform your institution with comprehensive support and recognition
        </p>
      </div>
    </div>
  );
};

export default CouncilMember;
