import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Shield, GraduationCap, Lightbulb, Zap, Droplet, Globe, Users, UserRound, Lock, Palette, Apple, Recycle, Cloud, Scale, Handshake } from "lucide-react";

const SDGRecognition = () => {
  const categories = [
    { icon: Leaf, name: "Green School", sdgs: "SDG 13, 15, 12", focus: "Environment, Climate Action, Waste Management", examples: "Tree plantation, zero-plastic campus, rainwater harvesting" },
    { icon: Heart, name: "Health & Wellness School", sdgs: "SDG 3", focus: "Physical & mental health, nutrition, hygiene", examples: "Health clubs, yoga, nutrition week, mental wellness workshops" },
    { icon: Shield, name: "Inclusive & Safe School", sdgs: "SDG 5, 10, 16", focus: "Gender equality, child safety, inclusion", examples: "POSH & POCSO compliance, inclusion of differently-abled students" },
    { icon: GraduationCap, name: "Quality Education School", sdgs: "SDG 4", focus: "NEP 2020, skill-based learning, teacher training", examples: "Experiential learning, life skills programs, AI literacy" },
    { icon: Lightbulb, name: "Innovation & Entrepreneurship School", sdgs: "SDG 8, 9", focus: "Startups, skill incubation, design thinking", examples: "Incubation lab, student enterprise projects, hackathons" },
    { icon: Zap, name: "Clean Energy & Green Technology School", sdgs: "SDG 7, 9", focus: "Renewable energy, digital transformation", examples: "Solar panels, e-waste management, digital classrooms" },
    { icon: Droplet, name: "Water Smart School", sdgs: "SDG 6", focus: "Water conservation, sanitation", examples: "Water audit, recycling grey water, sanitation programs" },
    { icon: Globe, name: "Peace & Global Citizenship School", sdgs: "SDG 16, 17", focus: "SDG awareness, global partnerships, peace education", examples: "SDG clubs, model UN, global exchange projects" },
    { icon: Users, name: "Community Partnership School", sdgs: "SDG 1, 2, 11, 17", focus: "CSR, volunteerism, local impact", examples: "Food donation drives, local heritage projects, rural outreach" },
    { icon: UserRound, name: "Gender Equality & Empowerment School", sdgs: "SDG 5", focus: "Women's leadership, equal opportunities", examples: "Girls in STEM, self-defense workshops, gender audit" },
    { icon: Lock, name: "Digital Safety & Cyber Awareness School", sdgs: "SDG 4, 9, 16", focus: "Data protection, digital literacy, safety", examples: "Cyber safety curriculum, DPDPA compliance, digital citizenship" },
    { icon: Palette, name: "Arts, Culture & Heritage School", sdgs: "SDG 11, 4", focus: "Cultural diversity, creativity, traditional knowledge", examples: "Local art preservation, cultural festivals, UNESCO heritage projects" },
    { icon: Apple, name: "Zero Hunger & Nutrition School", sdgs: "SDG 2, 3", focus: "Midday meal, nutrition awareness, kitchen garden", examples: "School gardens, healthy tiffin campaign" },
    { icon: Recycle, name: "Responsible Consumption School", sdgs: "SDG 12", focus: "Sustainable practices, eco products", examples: "Recycling drives, uniform reuse, green procurement" },
    { icon: Cloud, name: "Climate Action Champion School", sdgs: "SDG 13", focus: "Climate education, carbon footprint reduction", examples: "Carbon neutral plan, student-led climate clubs" },
    { icon: Scale, name: "Equality & Accessibility School", sdgs: "SDG 10", focus: "Inclusive infrastructure, equal opportunities", examples: "Ramps, assistive tech, diversity sensitization" },
    { icon: Handshake, name: "Partnership for SDGs School", sdgs: "SDG 17", focus: "Collaborations with NGOs, corporates, or universities", examples: "CSR-linked programs, SDG reporting with partners" },
  ];

  const applicationSteps = [
    { step: "Registration", action: "School fills online/offline registration form", purpose: "Create applicant profile" },
    { step: "Self-Assessment Checklist", action: "School completes a checklist for selected SDG categories", purpose: "Self-evaluation baseline" },
    { step: "Evidence Upload", action: "School uploads evidence (photos, circulars, reports, activity logs, videos)", purpose: "Proof of action" },
    { step: "SDG Action Plan", action: "School submits a short plan on future SDG goals (3–6 months)", purpose: "Shows intent for growth" },
    { step: "Review & Feedback", action: "Evaluation team reviews and gives feedback before final audit", purpose: "Capacity building" },
    { step: "On-site / Virtual Audit", action: "External evaluator verifies key parameters", purpose: "Quality assurance" },
    { step: "Certification & Recognition", action: "School receives certification (Bronze/Silver/Gold/Platinum)", purpose: "Recognition & publicity" },
    { step: "Annual Renewal", action: "School submits impact report next year", purpose: "Sustainability tracking" },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">🌱 SDG Recognition & Certification</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Transform your school into a recognized SDG Champion through our comprehensive certification framework
        </p>
      </div>

      {/* Categories Grid */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">17 SDG Certification Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{category.name}</CardTitle>
                      <Badge variant="secondary">{category.sdgs}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">{category.focus}</p>
                  <p className="text-sm text-muted-foreground">{category.examples}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Application Process */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">🏫 Application Process</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {applicationSteps.map((item, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{item.step}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{item.action}</p>
                    <p className="text-sm font-medium text-primary">{item.purpose}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Eligibility & Fee Policy */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">💼 Eligibility & Application Fee Policy</h2>
        <div className="max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">Category of School</th>
                      <th className="text-left py-3 px-4">Eligibility for Free Applications</th>
                      <th className="text-left py-3 px-4">Audit / Evaluation Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">UNCIF Candidate & Accredited Schools</td>
                      <td className="py-3 px-4">✅ All 17 SDG categories – Free of Cost</td>
                      <td className="py-3 px-4">No Fees Applicable</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Member Schools (Registered with UIRAD / SDG Alliance)</td>
                      <td className="py-3 px-4">✅ Any 2 SDG categories – free application</td>
                      <td className="py-3 px-4">Additional categories subject to Audit Fees (location-based)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Non-Member Schools</td>
                      <td className="py-3 px-4">✅ Any 1 SDG category – free application</td>
                      <td className="py-3 px-4">Additional categories subject to Audit Fees (location-based)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center space-y-4">
        <Button size="lg" className="text-lg px-8">
          Apply for SDG Certification
        </Button>
        <p className="text-sm text-muted-foreground">
          Start your journey towards becoming a recognized SDG Champion School
        </p>
      </div>
    </div>
  );
};

export default SDGRecognition;
