import React from "react";
import { CheckCircle2, X, Users, DollarSign, Filter, Building } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ScholarBenefits = () => {
  const scholarBenefits = [
    "Unconditional opportunities (no fees, filters, discrimination)",
    "Special Internship for Scholars (UNSIP)",
    "Worldwide opportunities through THA",
    "AI-powered internship matching through CAF",
    "Complete platform to build credible portfolio",
    "Uni-Pitch & Pitchburg participation opportunities",
    "Organization takes complete responsibility"
  ];

  const otherStudents = [
    "Apply for internships manually, one by one",
    "Pay money for training internships",
    "Find all opportunities and resources themselves",
    "Face filters like DSA, Aptitude tests",
    "Get conditional opportunities only",
    "No organizational support",
    "Limited access to premium platforms"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-2 mb-4">
              SCHOLAR PRIVILEGES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Francisco Scholars vs Other Students
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See the incredible difference between being a Francisco Scholar and being just another student. 
              The privileges are amazing!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Francisco Scholars Benefits */}
            <Card className="border-green-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Francisco Scholars</CardTitle>
                    <p className="text-green-100">Complete Support & Privileges</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {scholarBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-green-50 rounded-lg">
                  <h4 className="font-bold text-green-800 mb-2">Special Programs Access:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">UNSIP</Badge>
                      <span className="text-sm">Special Internships for Scholars</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Pitchburg</Badge>
                      <span className="text-sm">Innovation & Project Platform</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Other Students Challenges */}
            <Card className="border-red-200 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                    <X className="h-8 w-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Other Students</CardTitle>
                    <p className="text-red-100">Struggling on Their Own</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {otherStudents.map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <X className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <h4 className="font-bold text-red-800 mb-2">Common Struggles:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4 text-red-600" />
                      <span className="text-sm">Paying for internship opportunities</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Filter className="h-4 w-4 text-red-600" />
                      <span className="text-sm">Facing multiple selection filters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="h-4 w-4 text-red-600" />
                      <span className="text-sm">No organizational support</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">The Choice is Clear!</h3>
              <p className="text-lg mb-6">
                Why struggle alone when you can have complete organizational support and unconditional opportunities? 
                Join Francisco Scholars and transform your career journey today!
              </p>
              <Badge className="bg-white/20 text-white px-6 py-3 text-lg">
                Be a Francisco Scholar - Get Everything You Need!
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarBenefits;
