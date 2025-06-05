
import React from "react";
import { GraduationCap, CheckCircle2, Users, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const EligibilitySection = () => {
  const eligibilityCriteria = [
    {
      icon: <GraduationCap className="h-6 w-6 text-green-500" />,
      title: "Academic Performance",
      description: "Must have at least 60% marks in aggregate or equivalent grade from a recognized Board, University, Council, or three-year diploma program."
    },
    {
      icon: <Users className="h-6 w-6 text-blue-500" />,
      title: "Experience Level", 
      description: "Must be a fresher or beginner with no corporate experience and no major internships completed."
    },
    {
      icon: <CheckCircle2 className="h-6 w-6 text-purple-500" />,
      title: "Minimum Marks",
      description: "Should have minimum 55% marks in Class 12th or last appeared examination."
    }
  ];

  const eligibleCourses = [
    "9th, 10th, 11th, and 12th Grades",
    "Engineering (All Branches)",
    "Management Courses", 
    "Mass Media",
    "Computer Science Related Courses",
    "Other Professional Courses"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 px-4 py-2 mb-4">
              ELIGIBILITY CRITERIA
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Who Can Become a Francisco Scholar?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We welcome students from various backgrounds! Check if you meet our simple eligibility criteria 
              to join the Francisco Scholars program.
            </p>
          </div>

          {/* Eligibility Criteria */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {eligibilityCriteria.map((criteria, index) => (
              <Card key={index} className="border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center pb-4">
                  <div className="h-16 w-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {criteria.icon}
                  </div>
                  <CardTitle className="text-lg text-green-800">{criteria.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{criteria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Eligible Courses */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">
                📚 Eligible Courses & Streams
              </h3>
              <p className="text-gray-700">Francisco Scholar ID card is available for students in:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {eligibleCourses.map((course, index) => (
                <div key={index} className="flex items-center gap-3 bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span className="font-medium text-gray-800">{course}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Simple Explanation */}
          <div className="mt-12 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-900">
                Simple Requirements (Easy to Understand!)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-4xl mb-2">📊</div>
                  <h4 className="font-bold text-green-800">Good Grades</h4>
                  <p className="text-sm text-gray-600">At least 55-60% marks</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🎓</div>
                  <h4 className="font-bold text-blue-800">Student Status</h4>
                  <p className="text-sm text-gray-600">Currently studying or fresh graduate</p>
                </div>
                <div>
                  <div className="text-4xl mb-2">🌟</div>
                  <h4 className="font-bold text-purple-800">Beginner Level</h4>
                  <p className="text-sm text-gray-600">No major work experience yet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
