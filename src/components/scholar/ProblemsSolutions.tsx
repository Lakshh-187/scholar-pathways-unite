
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Check, X, Book, Briefcase, Laptop, GraduationCap, FileMinusIcon, FilePlusIcon, Toolbox } from 'lucide-react';

interface ComparisonItem {
  problem: string;
  solution: string;
  icon: React.ReactNode;
}

const ProblemsSolutions = () => {
  const comparisonItems: ComparisonItem[] = [
    {
      problem: "Students pay for internships, training programs, and apply to each manually, leading to time & money loss.",
      solution: "Get guaranteed internships for free using CAF (One form, multiple opportunities).",
      icon: <Briefcase className="h-6 w-6" />
    },
    {
      problem: "High application and participation fees across platforms, events, and resources.",
      solution: "Membership Card provides free access to multiple events, resources, and opportunities.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      problem: "Placement filters like ATS, aptitude, coding scores, and percentage overlook practical talent.",
      solution: "Get career opportunities through AI-powered screening with Talent Hunt Alliance.",
      icon: <Laptop className="h-6 w-6" />
    },
    {
      problem: "Outdated curriculum and irrelevant subjects lead to unemployability.",
      solution: "Learn with modern tools using AI + automation, aligned with World Economic Forum parameters.",
      icon: <Book className="h-6 w-6" />
    },
    {
      problem: "Lack of practical exposure due to costly entry fees for expos, tech fests, and competitions.",
      solution: "Use Scholar ID Card to get practical exposure & free entry into learning events.",
      icon: <GraduationCap className="h-6 w-6" />
    },
    {
      problem: "Career resources, tools, and platforms are scattered and unorganized.",
      solution: "Everything integrated into one RPO (Resource + Platform + Opportunity) model.",
      icon: <Toolbox className="h-6 w-6" />
    },
    {
      problem: "Students pay high fees for software, tools, kits, and courses.",
      solution: "Get access to premium tools & kits through our discounted portals (₹4–₹7 only).",
      icon: <FileMinusIcon className="h-6 w-6" />
    },
    {
      problem: "Pay extra for career-tracking portals, unaware of resources.",
      solution: "Advanced learning portals bundled with the Scholar ID Card for free.",
      icon: <FilePlusIcon className="h-6 w-6" />
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="bg-unifor-light-purple text-unifor-purple px-4 py-1 mb-4">
            COMPARISON
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            Problems Solved by Uniford Scholar ID Card
          </h2>
          <p className="text-gray-600 mb-8">
            See how our innovative approach addresses the challenges faced by today's students
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Header */}
          <div className="hidden lg:flex items-center justify-center p-4 rounded-t-lg bg-gradient-to-r from-unifor-purple to-unifor-dark-purple">
            <div className="flex items-center gap-2">
              <X className="h-5 w-5 text-white" />
              <h3 className="text-xl font-bold text-white">Traditional Problems</h3>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center p-4 rounded-t-lg bg-gradient-to-r from-unifor-purple to-unifor-dark-purple">
            <div className="flex items-center gap-2">
              <Check className="h-5 w-5 text-white" />
              <h3 className="text-xl font-bold text-white">Uniford Solutions</h3>
            </div>
          </div>

          {/* Comparison items */}
          {comparisonItems.map((item, index) => (
            <React.Fragment key={index}>
              {/* Problem Card */}
              <Card className={cn(
                "p-6 transition-all duration-300 hover:shadow-lg border-l-4 border-red-400 flex items-start gap-4",
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              )}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                  <X className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 lg:hidden text-red-700 text-lg flex items-center gap-2">
                    <X className="h-4 w-4" /> Traditional Problem
                  </h4>
                  <div className="flex items-center gap-2 mb-2 text-unifor-dark-purple">
                    {item.icon}
                    <span className="text-gray-400 text-sm">{index + 1}/8</span>
                  </div>
                  <p className="text-gray-700">{item.problem}</p>
                </div>
              </Card>

              {/* Solution Card */}
              <Card className={cn(
                "p-6 transition-all duration-300 hover:shadow-lg border-l-4 border-green-400 flex items-start gap-4",
                index % 2 === 0 ? "bg-white" : "bg-gray-50"
              )}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 lg:hidden text-green-700 text-lg flex items-center gap-2">
                    <Check className="h-4 w-4" /> Uniford Solution
                  </h4>
                  <div className="flex items-center gap-2 mb-2 text-unifor-dark-purple">
                    {item.icon}
                    <span className="text-gray-400 text-sm">{index + 1}/8</span>
                  </div>
                  <p className="text-gray-700">{item.solution}</p>
                </div>
              </Card>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutions;
