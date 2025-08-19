import React, { useState } from "react";
import Layout from "@/components/Layout";
import { Helmet } from "react-helmet";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  FileText, 
  CheckSquare, 
  ClipboardList, 
  Download,
  Eye,
  Crown,
  Shield,
  BookOpen,
  AlertTriangle
} from "lucide-react";

const policyTemplates = [
  { name: "Child Protection Policy", type: "PDF", mandatory: true, description: "Mandatory under POCSO Act, 2012 & CBSE guidelines" },
  { name: "Anti-Bullying Policy", type: "PDF", mandatory: true, description: "Zero tolerance, disciplinary actions framework" },
  { name: "Code of Conduct for Staff", type: "PDF", mandatory: true, description: "Professional ethics, boundaries with students, reporting duties" },
  { name: "Digital Safety & Cyberbullying Policy", type: "PDF", mandatory: false, description: "Safe internet usage, parental awareness, filtering harmful content" },
  { name: "School Safety & Security Policy", type: "PDF", mandatory: true, description: "Building entry, emergency drills, security staff guidelines" },
  { name: "Visitor Management Policy", type: "PDF", mandatory: false, description: "ID checks, gate pass system, parent authorization" },
  { name: "Transportation Safety Policy", type: "PDF", mandatory: false, description: "GPS, CCTV, driver verification, speed control" },
  { name: "Emergency Response Policy", type: "PDF", mandatory: true, description: "Fire, earthquake, lockdown, medical emergencies" },
  { name: "First Aid & Health Policy", type: "PDF", mandatory: false, description: "Trained staff, medical tie-ups, student health records" },
  { name: "Confidentiality & Data Protection Policy", type: "PDF", mandatory: true, description: "Student records, photos, personal info security" }
];

const complianceChecklists = [
  { name: "Daily/Weekly Playground Safety Checklist", type: "PDF", description: "Equipment inspection, surface safety, boundary checks" },
  { name: "Classroom Safety Checklist", type: "PDF", description: "Furniture, electrical, ventilation, CCTV functioning" },
  { name: "Transport Vehicle Safety Checklist", type: "PDF", description: "Fitness certificate, driver ID, first aid box" },
  { name: "Fire Safety Equipment Checklist", type: "PDF", description: "Extinguishers refilled, alarms tested" },
  { name: "CCTV Monitoring Checklist", type: "PDF", description: "Coverage, recording backup, blind spot checks" },
  { name: "School Building Maintenance & Safety Checklist", type: "PDF", description: "Stairs, exits, railings, signage" },
  { name: "Child Protection Audit Checklist", type: "PDF", description: "Staff police verification, awareness workshops conducted" }
];

const formsRegisters = [
  { name: "Incident/Accident Report Form", type: "PDF", description: "Injuries, response action taken" },
  { name: "Bullying Complaint Form", type: "PDF", description: "Student/parent report, investigation notes" },
  { name: "Visitor Entry Register", type: "PDF", description: "Date, ID proof, purpose, in/out time" },
  { name: "Student Travel Permission Form", type: "PDF", description: "School trips, excursions" },
  { name: "Medical Emergency Consent Form", type: "PDF", description: "Parent authorization for first-aid/hospital treatment" },
  { name: "Staff Background Verification Form", type: "PDF", description: "Police clearance attached" },
  { name: "Lost & Found Register", type: "PDF", description: "Student belongings tracking" }
];

const Elite: React.FC = () => {
  const [activeTab, setActiveTab] = useState("policies");
  
  const canonical = typeof window !== 'undefined' ? `${window.location.origin}/elite` : 'https://uniford.org/elite';

  const handleComingSoon = () => {
    // Toast notification would go here
    console.log("Coming soon!");
  };

  const DocumentCard = ({ doc, showMandatory = false }: { doc: any, showMandatory?: boolean }) => (
    <Card className="hover:shadow-md transition-all duration-300">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg leading-tight">{doc.name}</CardTitle>
            {showMandatory && doc.mandatory && (
              <Badge variant="destructive" className="mt-2">
                <AlertTriangle className="w-3 h-3 mr-1" />
                Mandatory
              </Badge>
            )}
          </div>
          <Badge variant="secondary" className="ml-2">{doc.type}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
        <div className="flex gap-2">
          <Button size="sm" variant="outline" onClick={handleComingSoon} className="flex-1">
            <Eye className="w-4 h-4 mr-1" />
            View
          </Button>
          <Button size="sm" onClick={handleComingSoon} className="flex-1">
            <Download className="w-4 h-4 mr-1" />
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <Layout>
      <Helmet>
        <title>Elite Portal - NCSS School Safety Compliance Toolkit</title>
        <meta name="description" content="Comprehensive school safety compliance toolkit with templates, checklists, forms and training materials for educational institutions." />
        <link rel="canonical" href={canonical} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="h-12 w-12 text-yellow-500" />
            <h1 className="text-5xl font-bold">Elite Portal</h1>
            <Crown className="h-12 w-12 text-yellow-500" />
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold text-primary">NCSS School Safety Compliance Toolkit</h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Your comprehensive resource for school safety compliance. Access policy templates, checklists, 
            forms, and training materials designed to ensure the highest safety standards.
          </p>
          <div className="flex items-center justify-center gap-4 mb-8">
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
              <Shield className="w-4 h-4 mr-2" />
              Compliance Ready
            </Badge>
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
              Ready-to-Use
            </Badge>
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 px-4 py-2">
              Customizable
            </Badge>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:grid-cols-3 mb-8">
              <TabsTrigger value="policies" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Policy Templates
              </TabsTrigger>
              <TabsTrigger value="checklists" className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4" />
                Checklists
              </TabsTrigger>
              <TabsTrigger value="forms" className="flex items-center gap-2">
                <ClipboardList className="w-4 h-4" />
                Forms & Registers
              </TabsTrigger>
            </TabsList>

            <TabsContent value="policies" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Policy Templates</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Ready-to-use documents that schools can adapt & customize for their context. 
                  Includes mandatory compliance policies and recommended safety frameworks.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {policyTemplates.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} showMandatory={true} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="checklists" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Compliance Checklists</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Tick-box formats for administrators & safety officers to regularly track compliance. 
                  Designed for quick audits and systematic safety monitoring.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {complianceChecklists.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="forms" className="space-y-6">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4">Forms & Registers</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Documentation templates that help schools maintain evidence of compliance 
                  during inspections and provide structured record-keeping.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {formsRegisters.map((doc, index) => (
                  <DocumentCard key={index} doc={doc} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8">
              <div className="flex items-center justify-center mb-4">
                <Crown className="h-8 w-8 text-yellow-600 mr-2" />
                <h3 className="text-2xl font-bold text-yellow-800">Elite Portal Under Development</h3>
              </div>
              <p className="text-yellow-700 mb-6">
                We're perfecting the Elite Portal experience with enhanced features, better organization, 
                and improved download capabilities. Stay tuned for the full launch!
              </p>
              <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                Coming Soon
              </Badge>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Elite;