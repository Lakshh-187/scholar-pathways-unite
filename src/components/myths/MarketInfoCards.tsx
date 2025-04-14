
import { ReactNode } from "react";
import { Info, Laptop, Code2, FileQuestion, Rocket, Lightbulb, Users, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const MarketInfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      <Card className="bg-gradient-to-br from-purple-900/80 to-indigo-900/80 border-purple-700/50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-purple-300 flex items-center gap-2">
            <Info className="h-5 w-5" />
            Current Market Reality
          </CardTitle>
          <CardDescription className="text-gray-300">
            Understanding today's job market landscape
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="flex items-start gap-3 text-gray-200">
            <Laptop className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
            <span>AI is transforming how we work across all industries</span>
          </p>
          <p className="flex items-start gap-3 text-gray-200">
            <Code2 className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
            <span>Modern employers value practical skills over academic credentials</span>
          </p>
          <p className="flex items-start gap-3 text-gray-200">
            <FileQuestion className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
            <span>76% of students never reach the interview stage due to filtering</span>
          </p>
        </CardContent>
      </Card>
      
      <Card className="bg-gradient-to-br from-indigo-900/80 to-blue-900/80 border-blue-700/50 shadow-xl">
        <CardHeader>
          <CardTitle className="text-blue-300 flex items-center gap-2">
            <Rocket className="h-5 w-5" />
            Student Success Factors
          </CardTitle>
          <CardDescription className="text-gray-300">
            What truly matters for career success
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="flex items-start gap-3 text-gray-200">
            <Lightbulb className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
            <span>Problem-solving skills demonstrated through real projects</span>
          </p>
          <p className="flex items-start gap-3 text-gray-200">
            <Users className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
            <span>Practical experience through internships and team collaborations</span>
          </p>
          <p className="flex items-start gap-3 text-gray-200">
            <Sparkles className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
            <span>Ability to leverage AI and modern tools to increase productivity</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
