
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Target, 
  CheckCircle2, 
  Rocket, 
  Brain, 
  Globe, 
  Award, 
  Lightbulb,
  GraduationCap,
  Star,
  Shield,
  HelpCircle,
  Building2,
  TrendingUp,
  UserCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProblemStatement from "@/components/francisco/ProblemStatement";
import SolutionOverview from "@/components/francisco/SolutionOverview";
import TransformationProcess from "@/components/francisco/TransformationProcess";
import ScholarBenefits from "@/components/francisco/ScholarBenefits";
import ProgramDetails from "@/components/francisco/ProgramDetails";
import EligibilitySection from "@/components/francisco/EligibilitySection";
import IDCardProcess from "@/components/francisco/IDCardProcess";

const FranciscoScholars = () => {
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
              REVOLUTIONARY SCHOLAR PROGRAM
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Francisco Scholars
            </h1>
            <p className="text-2xl md:text-3xl text-purple-100 mb-4">
              Where Organizations Adopt Students for Success
            </p>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              A revolutionary program where we take complete responsibility for your career transformation - 
              from internships to placements, we've got you covered!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/id-card">
                <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 text-lg px-8 py-6">
                  Apply for Francisco Scholar ID <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6">
                Learn How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <ProblemStatement />

      {/* Solution Overview */}
      <SolutionOverview />

      {/* Transformation Process */}
      <TransformationProcess />

      {/* Scholar Benefits vs Others */}
      <ScholarBenefits />

      {/* Program Details */}
      <ProgramDetails />

      {/* Eligibility Criteria */}
      <EligibilitySection />

      {/* ID Card Process */}
      <IDCardProcess />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Career Journey?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of Francisco Scholars who are building credible careers with our complete support!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/id-card">
                <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 px-8 py-6 text-lg">
                  Get Francisco Scholar ID
                </Button>
              </Link>
              <Link to="/programs">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                  Explore All Programs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FranciscoScholars;
