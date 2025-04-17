
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Brain, School, DollarSign, Users, TrendingUp, GraduationCap, Building2, LineChart, Target, ClipboardCheck } from 'lucide-react';

const StudentProblems = () => {
  const problems = [
    {
      id: "fees",
      icon: <DollarSign className="h-6 w-6 text-red-500" />,
      title: "High Fees Barrier",
      description: "Students pay 5k-70k for internships and short programs",
      impact: "78% students never participate due to financial barriers"
    },
    {
      id: "potential",
      icon: <Brain className="h-6 w-6 text-orange-500" />,
      title: "Potential Drain",
      description: "Skilled students blocked by traditional filters",
      impact: "Limited interview opportunities despite practical skills"
    },
    {
      id: "brain-drain",
      icon: <TrendingUp className="h-6 w-6 text-yellow-500" />,
      title: "Brain Drain",
      description: "Lack of network and referrals",
      impact: "Deserving students miss opportunities"
    },
    {
      id: "regional",
      icon: <Building2 className="h-6 w-6 text-green-500" />,
      title: "Regional Limitations",
      description: "90% students in regional institutes",
      impact: "Limited exposure to international standards"
    },
    {
      id: "potential-waste",
      icon: <AlertTriangle className="h-6 w-6 text-purple-500" />,
      title: "Untapped Potential",
      description: "87% students with high potential lack platforms",
      impact: "Leads to underemployment and credibility issues"
    }
  ];

  const solutions = [
    {
      id: "structure",
      icon: <LineChart className="h-6 w-6 text-blue-500" />,
      title: "Structured System",
      description: "Organizing resources, mentorship, and opportunities"
    },
    {
      id: "caf",
      icon: <ClipboardCheck className="h-6 w-6 text-green-500" />,
      title: "Common Application Form (CAF)",
      description: "One form for multiple opportunities"
    },
    {
      id: "tha",
      icon: <Users className="h-6 w-6 text-purple-500" />,
      title: "Talent Hunt Alliance (THA)",
      description: "Profile-based recommendations and referrals"
    }
  ];

  const goals = [
    {
      icon: <Target className="h-6 w-6 text-red-500" />,
      title: "80% Top Placements",
      description: "Scholar placement in leading companies"
    },
    {
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
      title: "International Standards",
      description: "Every scholar matches global benchmarks"
    },
    {
      icon: <School className="h-6 w-6 text-green-500" />,
      title: "Uni-pitch Integration",
      description: "70% institutes implementing Uni-pitch model"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-unifor-light-purple/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="problems" className="space-y-8">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="problems">Current Challenges</TabsTrigger>
              <TabsTrigger value="solutions">Our Solutions</TabsTrigger>
              <TabsTrigger value="goals">2026 Goals</TabsTrigger>
            </TabsList>

            <TabsContent value="problems" className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                {problems.map((problem) => (
                  <Card key={problem.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow">
                        {problem.icon}
                      </div>
                      <CardTitle className="text-lg">{problem.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-2">{problem.description}</p>
                      <p className="text-sm text-unifor-purple font-medium">{problem.impact}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="solutions" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                {solutions.map((solution) => (
                  <Card key={solution.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow">
                        {solution.icon}
                      </div>
                      <CardTitle className="text-lg">{solution.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{solution.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                {goals.map((goal, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader className="flex flex-row items-center gap-4">
                      <div className="bg-white p-2 rounded-lg shadow">
                        {goal.icon}
                      </div>
                      <CardTitle className="text-lg">{goal.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{goal.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default StudentProblems;
