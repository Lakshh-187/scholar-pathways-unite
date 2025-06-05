
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  Users, 
  Target, 
  CheckCircle2, 
  Award, 
  Building2,
  GraduationCap,
  Star,
  Shield,
  UserCheck,
  TrendingUp,
  Briefcase
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UTHA = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Bypass Entrance Filters",
      description: "Skip DSA, Aptitude tests and other filters that cause potential talent drain"
    },
    {
      icon: <UserCheck className="h-8 w-8 text-green-500" />,
      title: "Direct Referrals",
      description: "Get direct referrals to partner companies based on your credible profile"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-purple-500" />,
      title: "Save Time & Cost",
      description: "Alliance partners save recruitment time and cost with pre-verified candidates"
    }
  ];

  const eligibilityCriteria = [
    "Have 75+ credits in Internship, Project Expo & Uni-Pitch",
    "Active participation in Frontliner Program increases selection chances",
    "Must be a verified Uniford Scholar with Badge ID"
  ];

  const journeySteps = [
    {
      step: "1",
      title: "Build Credible Portfolio",
      description: "Participate in Internships, UNSIP, Project Expo, Uni-Pitch, Pitchburg and other challenges"
    },
    {
      step: "2",
      title: "Earn Credits & Badge",
      description: "Accumulate 75+ credits and earn your verified Badge ID through participation"
    },
    {
      step: "3",
      title: "Apply to UTHA",
      description: "Use your Badge ID to apply for direct referrals to partner organizations"
    },
    {
      step: "4",
      title: "Get Career Opportunities",
      description: "Receive paid internships, offer letters, and hiring opportunities"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-unifor-dark-purple via-purple-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute h-96 w-96 rounded-full bg-purple-500 blur-3xl top-10 left-10 animate-pulse"></div>
          <div className="absolute h-64 w-64 rounded-full bg-blue-500 blur-3xl bottom-10 right-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="bg-white/10 text-white border-white/20 px-6 py-2 mb-6 text-lg">
              TALENT HUNT ALLIANCE
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              UTHA
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 mb-4">
              Uniford Talent Hunt Alliance
            </p>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              A group of Companies, Organizations & HRs that looks for credible candidates for hiring. 
              We refer our verified scholars to bypass traditional filters and connect directly with opportunities.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/id-card">
                <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 text-lg px-8 py-6">
                  Apply for Scholar ID <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is UTHA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200 px-4 py-2 mb-4">
              ALLIANCE NETWORK
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What is UTHA?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
              UTHA helps students get direct referrals to bypass filters like DSA, Aptitude tests etc. 
              that cause potential drain as many students are good in practical skills but lack in entrance filters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center">
                  <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    {benefit.icon}
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-green-50 text-green-600 border-green-200 px-4 py-2 mb-4">
                ELIGIBILITY CRITERIA
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Who Can Apply for UTHA?
              </h2>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="space-y-6">
                {eligibilityCriteria.map((criteria, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <CheckCircle2 className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <p className="text-lg text-gray-700">{criteria}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold text-blue-900 mb-4">How to Apply in UTHA?</h3>
                <p className="text-gray-700">
                  Uniford Scholars with their <strong>"Badge ID"</strong> can apply, which contains scores of all 
                  participation like Internships, Project Expo, Uni-Pitch, Pitchburg etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus to Corporate Journey */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-purple-50 text-purple-600 border-purple-200 px-4 py-2 mb-4">
                CAMPUS TO CORPORATE JOURNEY
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Transform Students into Employable Professionals
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Organization provides opportunities & platforms to their scholars to build credible portfolios 
                and then connects them with career opportunities through UTHA.
              </p>
            </div>

            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <Card key={index} className="border-l-4 border-l-purple-500 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {step.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{step.title}</CardTitle>
                        <CardDescription className="text-gray-600 mt-2">{step.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scholar ID Application */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-2 mb-4">
                GET STARTED
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Apply for Uniford Scholar ID Card
              </h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Using Uniford Scholar ID card you can participate in Uniford Campus to Corporate Program. 
                This is specially designed for Uniford Scholars.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Scholar Selection Criteria</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-blue-800">Academic Requirements</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-blue-500" />
                      <span>Minimum 55% marks in last appeared exam</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-blue-500" />
                      <span>Engineering or Management background</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-blue-500" />
                      <span>Currently pursuing or preparing for placement</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4 text-green-800">Selection Process</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="h-5 w-5 text-green-500" />
                      <span>Seats launched every year, region-wise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-green-500" />
                      <span>Based on eligibility criteria</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-green-500" />
                      <span>Preference given to qualifying students</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-8">
                <Link to="/id-card">
                  <Button className="bg-unifor-dark-purple hover:bg-purple-900 px-8 py-6 text-lg">
                    Apply for Scholar ID Card <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join UTHA Network?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get direct access to career opportunities through our alliance network of companies and organizations.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/id-card">
                <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 px-8 py-6 text-lg">
                  Get Scholar ID
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Explore Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UTHA;
