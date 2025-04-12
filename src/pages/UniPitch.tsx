
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Toaster } from "@/components/ui/toaster";
import { 
  Mic, 
  Award, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  Rocket, 
  Star, 
  Lightbulb, 
  Briefcase, 
  DollarSign, 
  Megaphone, 
  GraduationCap,
  Users,
  Handshake,
  Link,
  Medal
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UniPitchJourney } from '@/components/UniPitchJourney';
import { UniPitchCategories } from '@/components/UniPitchCategories';
import { UniPitchBenefits } from '@/components/UniPitchBenefits';

const UniPitch = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              UNI-PITCH
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-unifor-dark-purple">Transform Your Ideas Into Opportunities</h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary platform bridging the gap between students and real-world opportunities through innovative pitch evaluations.
            </p>
          </div>
          
          {/* Visual Journey */}
          <UniPitchJourney />
          
          {/* Real-life Impact */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Real-Life Impact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Briefcase className="h-5 w-5 text-unifor-purple" />
                    A Fresher Looking for an Internship
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <div className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                        <span className="text-red-500 text-sm">❌</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Before Uni-Pitch:</p>
                        <p className="text-gray-500">Struggles to find an internship, lacks guidance, and worries about paid training costs.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-2 mt-1">
                        <span className="text-green-500 text-sm">✅</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">After Uni-Pitch:</p>
                        <p className="text-gray-500">Gets internship offers, access to free resources, and connections with top organizations.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <Lightbulb className="h-5 w-5 text-unifor-purple" />
                    A Student With an Innovative Project
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-start mb-2">
                      <div className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                        <span className="text-red-500 text-sm">❌</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">Before Uni-Pitch:</p>
                        <p className="text-gray-500">Creates a great project but lacks visibility & support.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-2 mt-1">
                        <span className="text-green-500 text-sm">✅</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-600">After Uni-Pitch:</p>
                        <p className="text-gray-500">Project is published in news/magazines, gets awards & funding, and is invited to global expos & summits.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Problems Solved */}
          <div className="mt-24">
            <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">How Uni-Pitch Solves Student Problems</h2>
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-unifor-dark-purple text-white">
                  <tr>
                    <th className="py-4 px-6 text-left">Problems Faced by Students</th>
                    <th className="py-4 px-6 text-left">How Uni-Pitch Helps</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Struggles to find direct help for: Internships, mentorship, resources, guidance, etc.</td>
                    <td className="py-4 px-6">Directly connects students with verified opportunities through partnered alliances.</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-4 px-6">Lack of a platform to showcase potential: Skills, projects, ideas, achievements.</td>
                    <td className="py-4 px-6">Provides exposure via publications, networking, and global nominations.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Categories */}
          <UniPitchCategories />
          
          {/* Benefits */}
          <UniPitchBenefits />
        </div>
      </section>
    </div>
  );
};

export default UniPitch;
