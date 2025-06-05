
import React from "react";
import { TrendingDown, Users, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProblemStatement = () => {
  const problems = [
    {
      icon: <TrendingDown className="h-8 w-8 text-red-500" />,
      percentage: "86.3%",
      title: "Students Graduate with No Skills",
      description: "Most students complete their education without practical skills and credibility, leading to unemployment despite having degrees."
    },
    {
      icon: <AlertTriangle className="h-8 w-8 text-orange-500" />,
      percentage: "78%",
      title: "Students Lack Credibility",
      description: "Students don't have the right skills for jobs due to lack of practical exposure, real experience, and meaningful opportunities."
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Youth Depression",
      description: "Layoffs, AI automation, and lack of opportunities are causing depression among young people who can't find suitable employment."
    }
  ];

  return (
    <section className="py-16 bg-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <Badge variant="outline" className="bg-red-100 text-red-600 border-red-200 px-4 py-2 mb-4">
            THE BIG PROBLEM
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-900">
            Why Students Are Struggling to Get Jobs
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The problem isn't lack of opportunities - it's that students aren't employable! 
            Here's what's really happening:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <Card key={index} className="border-red-200 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-red-100 rounded-full w-20 h-20 flex items-center justify-center">
                  {problem.icon}
                </div>
                {problem.percentage && (
                  <div className="text-3xl font-bold text-red-600 mb-2">
                    {problem.percentage}
                  </div>
                )}
                <CardTitle className="text-xl text-red-800">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{problem.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">The Real Issue:</h3>
            <p className="text-lg">
              Opportunities are everywhere, but students aren't <strong>employable</strong> because they lack 
              practical skills, real experience, and credible portfolios that employers actually want!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
