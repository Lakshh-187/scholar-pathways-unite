
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Mail, Users, Building2, Lightbulb, Star, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CertificateAwards = () => {
  const certificationGrades = [
    {
      grade: "A++",
      emoji: "🥇",
      criteria: "The school has both well-established infrastructure (labs, digital tools, PBL systems) and active frontliners (trained teachers, student leaders, eco-ambassadors, etc.)."
    },
    {
      grade: "A+",
      emoji: "🥈", 
      criteria: "The school has either strong establishments or active frontliners, but not both."
    }
  ];

  const eligibilityCriteria = [
    {
      icon: Users,
      title: "Minimum Student Strength",
      description: "325 students or more"
    },
    {
      icon: Building2,
      title: "Established Tenure",
      description: "For schools with 300–1000 students, the school must be operational for at least 2 years"
    },
    {
      icon: CheckCircle,
      title: "Affiliation Requirement",
      description: "The school must be affiliated with a recognized education board (CBSE, ICSE, State Boards, or International Boards)"
    }
  ];

  const coreParameters = [
    {
      parameter: "Frontliners",
      focus: "Teachers, students, and staff actively leading change (eco-warriors, social interns, club leaders, mentors)."
    },
    {
      parameter: "Establishments",
      focus: "Physical/digital infrastructure: labs, smart classrooms, PBL corners, sustainability zones, tech-enabled libraries."
    },
    {
      parameter: "Innovation & Implementation",
      focus: "Originality of ideas in curriculum, community integration, and how effectively the idea was implemented."
    }
  ];

  const awardCategories = [
    {
      icon: Users,
      title: "Frontliner Champion School",
      description: "For institutions empowering teachers and students to be social leaders and change agents."
    },
    {
      icon: Building2,
      title: "Establishment Excellence Award",
      description: "For schools with outstanding labs, infrastructure, PBL hubs, or green innovation centers."
    },
    {
      icon: Lightbulb,
      title: "Innovation & Implementation Award",
      description: "For bold, creative, and fully executed ideas that transformed learning, inclusion, or community impact."
    },
    {
      icon: Star,
      title: "India's Most Impactful A++ School",
      description: "A++ Certified (both Frontliners + Establishments) — Top-performing, high-impact schools."
    },
    {
      icon: Trophy,
      title: "Emerging A+ School Leader",
      description: "A+ Certified (either Frontliners or Establishment) — Strong groundwork with potential to scale."
    },
    {
      icon: Award,
      title: "People's Choice School of the Year",
      description: "Selected through community voting and engagement."
    }
  ];

  const auditSteps = [
    {
      step: "Step 1: Nomination / Self-Apply",
      description: "Schools can apply or be nominated online. Upload documentation, photo/video evidence, or testimonials."
    },
    {
      step: "Step 2: Evaluation",
      description: "Based on your 3-Pillar Rubric (Frontliners, Establishments, Innovation). Field visit or virtual walkthrough may be conducted."
    },
    {
      step: "Step 3: Scoring & Benchmarking",
      description: "Independent jury + internal review panel with weighted score distribution: 40% Frontliners, 30% Establishments, 30% Innovation & Execution"
    },
    {
      step: "Step 4: Publication & Recognition",
      description: "Finalist schools are featured in the 'India's Most Impactful Schools 2025' Annual Report. Top schools honored at the Education Transformation Summit & Award Night."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Trophy className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-unifor-purple to-unifor-dark-purple bg-clip-text text-transparent">
            Certificate & Awards
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            🏆 Great Place To Learn Certification & Recognition by UNCIF
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Great Place To Learn Certification is a prestigious recognition awarded by UNCIF to schools that meet high standards in infrastructure, pedagogy, and social responsibility. This recognition is based on a comprehensive audit, ensuring that certified schools are truly advancing modern education practices. It provides validation to parents, educators, and communities that the institution is committed to excellence, innovation, and impact.
            </p>
          </CardContent>
        </Card>

        {/* Certification Grades */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🎖️ Certification Grades</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {certificationGrades.map((grade, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <span className="text-2xl">{grade.emoji}</span>
                    <Badge className="bg-yellow-100 text-yellow-800 text-lg px-4 py-2">
                      Grade {grade.grade}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{grade.criteria}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">📩 How to Apply</h2>
          <Card>
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-unifor-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</div>
                  <div>
                    <p className="text-lg">Email us at <Mail className="inline h-4 w-4" /> <a href="mailto:info@uniford.org" className="text-unifor-purple font-semibold">info@uniford.org</a> to request the submission form.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-unifor-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</div>
                  <div>
                    <p className="text-lg">Fill out the form with required data and documentation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-unifor-purple text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</div>
                  <div>
                    <p className="text-lg">Connect with your regional officer for the audit process and verification.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <a href="mailto:info@uniford.org">
                  <Button className="primary-btn text-lg px-8 py-3">
                    <Mail className="mr-2 h-5 w-5" />
                    Apply Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">✅ Eligibility Criteria</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {eligibilityCriteria.map((criteria, index) => (
              <Card key={index} className="h-full text-center">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <criteria.icon className="h-12 w-12 text-unifor-purple" />
                  </div>
                  <CardTitle className="text-xl">{criteria.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{criteria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Award Parameters */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🔧 Core Award Parameters</h2>
          <div className="space-y-4">
            {coreParameters.map((param, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-1">
                      <Badge className="bg-unifor-light-purple text-unifor-dark-purple text-lg px-4 py-2">
                        {index + 1}. {param.parameter}
                      </Badge>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700">{param.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Award Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🏅 Award Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardCategories.map((category, index) => (
              <Card key={index} className="h-full">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <category.icon className="h-12 w-12 text-unifor-purple" />
                  </div>
                  <CardTitle className="text-lg text-center">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Audit & Evaluation Process */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">🔍 Audit + Evaluation Process</h2>
          <div className="space-y-6">
            {auditSteps.map((step, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-unifor-purple to-unifor-dark-purple text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default CertificateAwards;
