
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, Brain, Laptop, Sparkles, Calendar, Award } from 'lucide-react';

const CompanyPolicies = () => {
  const [activeTab, setActiveTab] = useState("culture");
  
  const policyCards = [
    {
      id: "culture",
      title: "Company Culture & HR Policies",
      icon: <Book className="h-5 w-5 text-unifor-blue" />,
      description: "Our foundational principles and workplace guidelines",
      content: [
        "Open communication and transparent feedback",
        "Monthly one-on-ones with managers",
        "Clear growth pathways with regular performance reviews",
        "Inclusive and diverse work environment",
        "Zero tolerance for harassment and discrimination"
      ]
    },
    {
      id: "wellness",
      title: "Wellness & Mental Health Support",
      icon: <Brain className="h-5 w-5 text-green-600" />,
      description: "How we prioritize your wellbeing",
      content: [
        "Mental health days (4 per year)",
        "Subscription to wellness and meditation apps",
        "Quarterly wellness workshops",
        "Health insurance with mental health coverage",
        "Fitness allowance ($50/month)"
      ]
    },
    {
      id: "learning",
      title: "Learning & Upskilling Support",
      icon: <Sparkles className="h-5 w-5 text-amber-500" />,
      description: "Resources to help you grow professionally",
      content: [
        "Annual learning budget ($1,500)",
        "Conference attendance opportunities",
        "Internal knowledge sharing sessions",
        "Online course subscriptions",
        "Book allowance"
      ]
    },
    {
      id: "leave",
      title: "Leave & Vacation Policy",
      icon: <Calendar className="h-5 w-5 text-red-500" />,
      description: "Time off benefits for work-life balance",
      content: [
        "20 days paid time off annually",
        "10 paid holidays",
        "Parental leave (12 weeks)",
        "Sick leave (10 days)",
        "Sabbatical opportunity after 5 years"
      ]
    },
    {
      id: "remote",
      title: "Work-from-Home Benefits",
      icon: <Laptop className="h-5 w-5 text-purple-500" />,
      description: "Supporting your remote work lifestyle",
      content: [
        "Home office setup allowance ($500)",
        "Monthly internet stipend ($50)",
        "Flexible working hours",
        "Quarterly in-person team gatherings",
        "Digital collaboration tools and subscriptions"
      ]
    },
    {
      id: "events",
      title: "Team Events & Recognition",
      icon: <Award className="h-5 w-5 text-yellow-500" />,
      description: "How we celebrate success and build community",
      content: [
        "Quarterly team building activities",
        "Annual company retreat",
        "Peer recognition program with rewards",
        "Work anniversaries celebrations",
        "Holiday parties and special occasions"
      ]
    },
  ];
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-2 text-center">Company Policies & Perks</h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          We believe in creating a supportive, balanced, and engaging work environment.
          Here's what you can expect when joining our team.
        </p>
        
        <Tabs defaultValue="culture" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
            {policyCards.map(policy => (
              <TabsTrigger 
                key={policy.id} 
                value={policy.id}
                className={`flex flex-col items-center py-3 ${activeTab === policy.id ? 'data-[state=active]:bg-unifor-blue data-[state=active]:text-white' : ''}`}
              >
                {policy.icon}
                <span className="mt-1 text-xs">{policy.title.split(' ')[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          
          {policyCards.map(policy => (
            <TabsContent key={policy.id} value={policy.id}>
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    {policy.icon}
                    <div>
                      <CardTitle>{policy.title}</CardTitle>
                      <CardDescription>{policy.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {policy.content.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-unifor-blue"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CompanyPolicies;
