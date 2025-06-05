
import React from "react";
import { Users, Target, Building2, Lightbulb } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProgramDetails = () => {
  const programs = [
    {
      name: "UNSIP",
      fullName: "Uniford Special Internship Program",
      icon: <Users className="h-8 w-8 text-blue-500" />,
      description: "Special internships designed specifically for Francisco Scholars",
      parameters: [
        "Relevant Skills Assessment",
        "Tools & Automation Training",
        "Portfolio Website Development", 
        "Domain-Specific Projects"
      ],
      color: "blue"
    },
    {
      name: "Pitchburg",
      fullName: "Innovation & Project Platform",
      icon: <Lightbulb className="h-8 w-8 text-purple-500" />,
      description: "Platform where students pitch projects and connect innovations with worldwide opportunities",
      parameters: [
        "Project Pitching",
        "Innovation Showcase",
        "Global Impact Projects",
        "Worldwide Opportunity Connections"
      ],
      color: "purple"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-2 mb-4">
              SPECIAL PROGRAMS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Exclusive Programs for Francisco Scholars
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              As a Francisco Scholar, you get access to special programs that other students can't access. 
              These programs are designed to fast-track your career success!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {programs.map((program, index) => (
              <Card key={index} className={`border-${program.color}-200 shadow-xl hover:shadow-2xl transition-shadow`}>
                <CardHeader className={`bg-gradient-to-r from-${program.color}-500 to-${program.color}-600 text-white rounded-t-lg`}>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      {program.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{program.name}</CardTitle>
                      <p className="text-sm opacity-90">{program.fullName}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-6 text-lg">{program.description}</p>
                  
                  <h4 className="font-bold text-gray-900 mb-4">Key Features:</h4>
                  <div className="space-y-3">
                    {program.parameters.map((param, paramIndex) => (
                      <div key={paramIndex} className={`flex items-center gap-3 p-3 bg-${program.color}-50 rounded-lg`}>
                        <div className={`h-2 w-2 bg-${program.color}-500 rounded-full`}></div>
                        <span className={`text-${program.color}-800 font-medium`}>{param}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Simple Explanation Box */}
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border-l-4 border-yellow-400">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                !
              </div>
              <div>
                <h3 className="text-2xl font-bold text-yellow-800 mb-4">Simple Explanation (Like You're 9 Years Old!):</h3>
                <div className="space-y-3 text-lg text-gray-700">
                  <p><strong>UNSIP:</strong> Think of it like a special training program where we teach you real job skills, help you build cool projects, and make sure you're ready for any job!</p>
                  <p><strong>Pitchburg:</strong> It's like a "show and tell" platform where you can show your amazing projects to people all around the world who might want to hire you or fund your ideas!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
