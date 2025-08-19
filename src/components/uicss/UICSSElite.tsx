import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { 
  FileText, 
  CheckSquare, 
  ClipboardList, 
  BookOpen, 
  Crown,
  ExternalLink
} from "lucide-react";

const eliteFeatures = [
  {
    icon: FileText,
    title: "Policy Templates",
    description: "Ready-to-use documents for child protection, anti-bullying, and safety policies",
    count: "10+ Templates",
    color: "bg-blue-500"
  },
  {
    icon: CheckSquare,
    title: "Compliance Checklists",
    description: "Tick-box audits for daily safety, transport, and building maintenance",
    count: "7+ Checklists",
    color: "bg-green-500"
  },
  {
    icon: ClipboardList,
    title: "Forms & Registers",
    description: "Documentation forms for incidents, visitors, and emergency consent",
    count: "7+ Forms",
    color: "bg-purple-500"
  },
  {
    icon: BookOpen,
    title: "Training Materials",
    description: "Comprehensive guides for staff training and safety procedures",
    count: "Coming Soon",
    color: "bg-orange-500"
  }
];

const UICSSElite: React.FC = () => {
  const { toast } = useToast();

  const handleElitePortal = () => {
    toast({
      title: "Elite Portal",
      description: "Coming soon! The Elite portal is under development and will be available shortly.",
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Crown className="h-8 w-8 text-yellow-500" />
            <h2 className="text-4xl font-bold">ICSS - Elite</h2>
            <Crown className="h-8 w-8 text-yellow-500" />
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive school safety compliance toolkit with templates, checklists, and training materials
          </p>
          <Badge variant="secondary" className="mt-4 bg-yellow-100 text-yellow-800 border-yellow-300">
            Premium Collection
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {eliteFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                  <Badge variant="outline" className="bg-muted">
                    {feature.count}
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Access the Elite Portal</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Get access to our comprehensive NCSS School Safety Compliance Toolkit with perfectly organized sections, 
            download options, and interactive viewing capabilities.
          </p>
          <Button 
            size="lg" 
            onClick={handleElitePortal}
            className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            Enter Elite Portal
          </Button>
          <div className="mt-4">
            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
              Portal Coming Soon
            </Badge>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-2">Policy Templates</h4>
              <p className="text-sm text-muted-foreground">Child Protection, Anti-Bullying, Digital Safety, Emergency Response & more</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckSquare className="h-6 w-6 text-green-600" />
              </div>
              <h4 className="font-semibold mb-2">Compliance Checklists</h4>
              <p className="text-sm text-muted-foreground">Daily safety audits, transport checks, building maintenance & CCTV monitoring</p>
            </CardContent>
          </Card>
          
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ClipboardList className="h-6 w-6 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-2">Forms & Registers</h4>
              <p className="text-sm text-muted-foreground">Incident reports, visitor logs, medical consent & background verification</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UICSSElite;