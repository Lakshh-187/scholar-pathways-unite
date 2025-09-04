import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Target, 
  Search, 
  Rocket, 
  Building, 
  Sprout,
  Download,
  FileText,
  Users,
  Globe,
  ArrowRight,
  CheckCircle,
  Star
} from "lucide-react";

const Frontliner = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const roadmapData = {
    stages: [
      {
        id: 1,
        title: "Stage 1 — Idea Submission",
        icon: <Brain className="w-8 h-8" />,
        description: "Before execution, scholars must select and analyze their initiative carefully.",
        color: "from-blue-500 to-purple-600",
        steps: [
          {
            id: 1,
            title: "Select Your Initiative",
            icon: <Target className="w-6 h-6" />,
            emoji: "🎯",
            description: "Your initiative should deeply resonate with you. This is the foundation of your journey.",
            details: {
              parameters: [
                "Choose something that motivates you to work even in harsh, starving, and challenging conditions.",
                "Do not select based on friends, trends, or peer influence — your initiative should define YOU.",
                "It's not a marriage — you can change your initiative until you find your break-even point."
              ],
              examples: [
                "An animal welfare initiative like PETA",
                "A climate activism campaign", 
                "A youth mental health movement",
                "A tech-based education accessibility project"
              ],
              tip: "Passion > Popularity. Select what keeps you driven, not what looks cool."
            }
          },
          {
            id: 2,
            title: "Analyze & Research Your Initiative",
            icon: <Search className="w-6 h-6" />,
            emoji: "🔍",
            description: "Once you choose your initiative, study the ecosystem around it.",
            details: {
              tasks: [
                "Research 100+ Similar Profiles - Individuals, startups, NGOs, foundations, and businesses working in the same field.",
                "Deep Dive into Their Models - Website, Programs & Campaigns, Business Models, Strategy & Execution.",
                "Create a Competitive Analysis Report - Summarize findings, highlight gaps, opportunities, and unique differentiators."
              ],
              outcome: "Submit a complete initiative analysis report. This report will be used to select Frontliner Scholars."
            }
          }
        ]
      },
      {
        id: 2,
        title: "Stage 2 — Action Phase",
        icon: <Rocket className="w-8 h-8" />,
        description: "Once selected as a Frontliner Scholar, your journey moves into practical execution.",
        color: "from-green-500 to-teal-600",
        steps: [
          {
            id: 3,
            title: "Build Digital Infrastructure",
            icon: <Building className="w-6 h-6" />,
            emoji: "🏗️",
            description: "Your initiative needs a strong digital identity and operational ecosystem.",
            details: {
              components: [
                "Tech Setup: Build a website, app, or AI agent aligned with your initiative.",
                "Social Media Presence: Create Instagram, LinkedIn, YouTube, and Twitter handles.",
                "Team Building & Collaboration: Form an open-source contribution team for technical help.",
                "Business & Strategy Development: Learn basic business fundamentals.",
                "Portfolio & Certification: Each contributor gets practical exposure + verified certification."
              ],
              outcome: "A complete digital ecosystem ready to drive your initiative."
            }
          },
          {
            id: 4,
            title: "Execute & Create Impact",
            icon: <Sprout className="w-6 h-6" />,
            emoji: "🌱",
            description: "Now, it's time to turn your idea into reality.",
            details: {
              principles: [
                "Clarity Comes First 🧩 - Define your goal clearly",
                "Strategy is the Backbone 📊 - Design your execution strategy using business hypothesis model",
                "Learn from the Best 📖 - Study similar organizations and adopt proven strategies",
                "Leverage Digital Platforms 💻 - Stay active on LinkedIn, YouTube, and forums",
                "Measure & Document Impact 📑 - Track engagement, reach, conversions, and outcomes"
              ],
              outcome: "Real social impact, strong digital visibility, and a scalable initiative."
            }
          }
        ]
      }
    ]
  };

  const attachments = [
    { name: "Frontliner Scholar Guidelines", size: "2.4 MB", type: "PDF" },
    { name: "Initiative Analysis Template", size: "856 KB", type: "DOCX" },
    { name: "Digital Infrastructure Checklist", size: "1.2 MB", type: "PDF" },
    { name: "Impact Measurement Framework", size: "3.1 MB", type: "PDF" },
    { name: "Business Model Canvas Template", size: "672 KB", type: "XLSX" },
  ];

  const stage1Attachments = [
    { name: "Initiative Selection Guide", size: "1.8 MB", type: "PDF" },
    { name: "Research Methodology Video", size: "45 MB", type: "MP4" },
    { name: "Competitive Analysis Worksheet", size: "920 KB", type: "XLSX" },
    { name: "Passion Discovery Framework", size: "1.1 MB", type: "PDF" },
    { name: "Market Research Templates", size: "2.3 MB", type: "DOCX" },
    { name: "Initiative Examples Database", size: "5.2 MB", type: "PDF" },
  ];

  const stage2Attachments = [
    { name: "Digital Infrastructure Setup Guide", size: "3.1 MB", type: "PDF" },
    { name: "Social Media Strategy Video", size: "78 MB", type: "MP4" },
    { name: "Team Building Playbook", size: "2.7 MB", type: "PDF" },
    { name: "Business Strategy Templates", size: "1.4 MB", type: "XLSX" },
    { name: "Impact Measurement Tools", size: "2.9 MB", type: "PDF" },
    { name: "Execution Checklist", size: "850 KB", type: "DOCX" },
    { name: "Partnership Templates", size: "1.6 MB", type: "PDF" },
  ];

  const StepDetailModal = ({ step }: { step: any }) => (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-3 text-2xl">
          {step.icon}
          <span>{step.title} {step.emoji}</span>
        </DialogTitle>
      </DialogHeader>
      
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground">{step.description}</p>
        
        {step.details.parameters && (
          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              Parameters of Selection:
            </h4>
            <ul className="space-y-2">
              {step.details.parameters.map((param: string, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>{param}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {step.details.examples && (
          <div>
            <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Examples:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {step.details.examples.map((example: string, index: number) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-4">
                    <p className="text-sm">{example}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step.details.tip && (
          <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-800">
            <p className="font-medium text-yellow-800 dark:text-yellow-200">
              💡 Tip: {step.details.tip}
            </p>
          </div>
        )}

        {step.details.tasks && (
          <div>
            <h4 className="font-semibold text-lg mb-3">What to do:</h4>
            <div className="space-y-3">
              {step.details.tasks.map((task: string, index: number) => (
                <Card key={index} className="border-l-4 border-l-green-500">
                  <CardContent className="p-4">
                    <p className="text-sm">{task}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {step.details.components && (
          <div>
            <h4 className="font-semibold text-lg mb-3">Core Components:</h4>
            <div className="space-y-3">
              {step.details.components.map((component: string, index: number) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{component}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step.details.principles && (
          <div>
            <h4 className="font-semibold text-lg mb-3">Principles of Execution:</h4>
            <div className="space-y-3">
              {step.details.principles.map((principle: string, index: number) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                  <Rocket className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {step.details.outcome && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Outcome:
            </h4>
            <p className="text-green-700 dark:text-green-300">{step.details.outcome}</p>
          </div>
        )}
      </div>
    </DialogContent>
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
          <div className="relative max-w-4xl mx-auto">
            <Badge className="mb-6 px-6 py-2 text-sm font-medium">
              Frontliner Scholar Program
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent mb-6">
              Frontliner Scholar Roadmap
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transforming Ideas into Impact 🌍
            </p>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              This program helps students discover their passion, develop an initiative, build digital infrastructure, and execute real-world impact. The journey is divided into two major stages and four steps.
            </p>
            
            {/* Attachments Section */}
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="mb-8">
                  <Download className="mr-2 h-5 w-5" />
                  View Program Resources
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <FileText className="w-6 h-6" />
                    Program Resources & Attachments
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-3">
                  {attachments.map((attachment, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <FileText className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">{attachment.name}</p>
                            <p className="text-sm text-muted-foreground">{attachment.size} • {attachment.type}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Roadmap Timeline */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="space-y-16">
              {roadmapData.stages.map((stage, stageIndex) => (
                <div key={stage.id} className="relative">
                   {/* Stage Header */}
                   <div className="text-center mb-12">
                     <div className={`inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r ${stage.color} text-white mb-4`}>
                       {stage.icon}
                       <h2 className="text-2xl md:text-3xl font-bold">{stage.title}</h2>
                     </div>
                     <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{stage.description}</p>
                   </div>

                   {/* Stage Resources */}
                   <div className="mb-12 max-w-4xl mx-auto">
                     <Dialog>
                       <DialogTrigger asChild>
                         <Button variant="outline" size="lg" className="w-full">
                           <Download className="mr-2 h-5 w-5" />
                           {stage.id === 1 ? 'Stage 1 Resources & Mentorship Materials' : 'Stage 2 Resources & Mentorship Materials'}
                         </Button>
                       </DialogTrigger>
                       <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                         <DialogHeader>
                           <DialogTitle className="flex items-center gap-2">
                             <FileText className="w-6 h-6" />
                             {stage.title} - Supporting Materials
                           </DialogTitle>
                         </DialogHeader>
                         <div className="space-y-3">
                           {(stage.id === 1 ? stage1Attachments : stage2Attachments).map((attachment, index) => (
                             <Card key={index} className="hover:shadow-md transition-shadow">
                               <CardContent className="p-4 flex items-center justify-between">
                                 <div className="flex items-center gap-3">
                                   <div className={`w-10 h-10 ${attachment.type === 'MP4' ? 'bg-red-100 dark:bg-red-900/20' : 'bg-primary/10'} rounded-lg flex items-center justify-center`}>
                                     <FileText className={`w-5 h-5 ${attachment.type === 'MP4' ? 'text-red-600' : 'text-primary'}`} />
                                   </div>
                                   <div>
                                     <p className="font-medium">{attachment.name}</p>
                                     <p className="text-sm text-muted-foreground">{attachment.size} • {attachment.type}</p>
                                   </div>
                                 </div>
                                 <Button variant="outline" size="sm">
                                   <Download className="w-4 h-4 mr-2" />
                                   {attachment.type === 'MP4' ? 'Watch' : 'Download'}
                                 </Button>
                               </CardContent>
                             </Card>
                           ))}
                         </div>
                       </DialogContent>
                     </Dialog>
                   </div>

                  {/* Steps Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {stage.steps.map((step, stepIndex) => (
                      <Card key={step.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                        <CardContent className="p-8">
                          <div className="flex items-start gap-4 mb-6">
                            <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center text-white flex-shrink-0`}>
                              {step.icon}
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                                {step.title} {step.emoji}
                              </h3>
                              <p className="text-muted-foreground mb-4">{step.description}</p>
                            </div>
                          </div>
                          
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                View Details
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Button>
                            </DialogTrigger>
                            <StepDetailModal step={step} />
                          </Dialog>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Stage Connector */}
                  {stageIndex < roadmapData.stages.length - 1 && (
                    <div className="flex justify-center mt-16">
                      <div className="w-px h-16 bg-gradient-to-b from-primary to-transparent" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Summary Table */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Final Roadmap Summary</h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-muted">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold">Stage</th>
                      <th className="px-6 py-4 text-left font-semibold">Step</th>
                      <th className="px-6 py-4 text-left font-semibold">Focus Area</th>
                      <th className="px-6 py-4 text-left font-semibold">Deliverable</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr className="hover:bg-muted/50">
                      <td rowSpan={2} className="px-6 py-4 font-medium border-r">Stage 1 — Idea Submission</td>
                      <td className="px-6 py-4">1</td>
                      <td className="px-6 py-4">Initiative Selection</td>
                      <td className="px-6 py-4">Choose an initiative based on passion</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">2</td>
                      <td className="px-6 py-4">Research & Analysis</td>
                      <td className="px-6 py-4">Submit competitive analysis report</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td rowSpan={2} className="px-6 py-4 font-medium border-r">Stage 2 — Action Phase</td>
                      <td className="px-6 py-4">3</td>
                      <td className="px-6 py-4">Build Digital Infrastructure</td>
                      <td className="px-6 py-4">Website, socials, team, policy, strategy</td>
                    </tr>
                    <tr className="hover:bg-muted/50">
                      <td className="px-6 py-4">4</td>
                      <td className="px-6 py-4">Execute & Impact</td>
                      <td className="px-6 py-4">Launch campaigns, measure results, optimize</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary/10 via-purple-600/10 to-primary/10 rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the Frontliner Scholar Program and transform your ideas into meaningful impact that changes the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8 py-4">
                  <Users className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <Globe className="mr-2 h-5 w-5" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Frontliner;