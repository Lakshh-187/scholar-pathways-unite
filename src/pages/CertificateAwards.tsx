
import React from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award, Trophy, Medal, Star, Users, Building, Lightbulb, Mail, CheckCircle, School, Target, Crown } from 'lucide-react';

const CertificateAwards = () => {
  const certificationGrades = [
    {
      grade: "A++",
      icon: Trophy,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      emoji: "🥇",
      criteria: "The school has both well-established infrastructure (labs, digital tools, PBL systems) and active frontliners (trained teachers, student leaders, eco-ambassadors, etc.)."
    },
    {
      grade: "A+",
      icon: Medal,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      emoji: "🥈",
      criteria: "The school has either strong establishments or active frontliners, but not both."
    }
  ];

  const awardCategories = [
    {
      title: "Frontliner Champion School",
      emoji: "🧑‍🏫",
      description: "For institutions empowering teachers and students to be social leaders and change agents.",
      icon: Users
    },
    {
      title: "Establishment Excellence Award",
      emoji: "🏗️",
      description: "For schools with outstanding labs, infrastructure, PBL hubs, or green innovation centers.",
      icon: Building
    },
    {
      title: "Innovation & Implementation Award",
      emoji: "💡",
      description: "For bold, creative, and fully executed ideas that transformed learning, inclusion, or community impact.",
      icon: Lightbulb
    },
    {
      title: "India's Most Impactful A++ School",
      emoji: "🌟",
      description: "A++ Certified (both Frontliners + Establishments) — Top-performing, high-impact schools.",
      icon: Crown
    },
    {
      title: "Emerging A+ School Leader",
      emoji: "🏆",
      description: "A+ Certified (either Frontliners or Establishment) — Strong groundwork with potential to scale.",
      icon: Trophy
    },
    {
      title: "People's Choice School of the Year",
      emoji: "🗳️",
      description: "Selected through community voting and engagement.",
      icon: Star
    }
  ];

  const coreParameters = [
    {
      parameter: "Frontliners",
      focus: "Teachers, students, and staff actively leading change (eco-warriors, social interns, club leaders, mentors).",
      weight: "40%",
      icon: Users
    },
    {
      parameter: "Establishments",
      focus: "Physical/digital infrastructure: labs, smart classrooms, PBL corners, sustainability zones, tech-enabled libraries.",
      weight: "30%",
      icon: Building
    },
    {
      parameter: "Innovation & Implementation",
      focus: "Originality of ideas in curriculum, community integration, and how effectively the idea was implemented.",
      weight: "30%",
      icon: Lightbulb
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
      description: "Independent jury + internal review panel with weighted score distribution."
    },
    {
      step: "Step 4: Publication & Recognition",
      description: "Finalist schools are featured in the \"India's Most Impactful Schools 2025\" Annual Report. Top schools honored at the Education Transformation Summit & Award Night."
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-teal-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                <Trophy className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Certificate & <span className="text-yellow-300">Awards</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
              Recognizing Excellence in Education through UNCIF's Great Place to Learn Certification Program
            </p>
          </div>
        </div>
      </section>

      {/* Great Place To Learn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <img 
                    src="/lovable-uploads/fcae1f06-c4cd-4738-8732-251649bd9ebb.png" 
                    alt="Great Place To Learn Certificate" 
                    className="h-32 w-auto"
                  />
                </div>
                <CardTitle className="text-3xl font-bold text-gray-800 mb-4">
                  🏆 Great Place To Learn
                </CardTitle>
                <p className="text-lg text-gray-700 font-semibold">
                  Certification & Recognition by UNCIF
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  The Great Place To Learn Certification is a prestigious recognition awarded by UNCIF to schools 
                  that meet high standards in infrastructure, pedagogy, and social responsibility. This recognition 
                  is based on a comprehensive audit, ensuring that certified schools are truly advancing modern 
                  education practices. It provides validation to parents, educators, and communities that the 
                  institution is committed to excellence, innovation, and impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certification Grades */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">🎖️ Certification Grades</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certificationGrades.map((grade, index) => (
              <Card key={index} className={`${grade.bgColor} ${grade.borderColor} border-2 shadow-xl`}>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className={`text-4xl`}>{grade.emoji}</div>
                    <div>
                      <CardTitle className={`text-2xl ${grade.color}`}>Grade {grade.grade}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{grade.criteria}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">📩 How to Apply</h2>
            <p className="text-lg text-gray-600 mb-8">
              Schools can initiate the certification process in 3 simple steps:
            </p>
            
            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <p className="text-gray-700">
                    Email us at <strong>info@uniford.org</strong> to request the submission form.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <p className="text-gray-700">
                    Fill out the form with required data and documentation.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200 border-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-gray-700">
                    Connect with your regional officer for the audit process and verification.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Button className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              <Mail className="mr-2 h-5 w-5" />
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">✅ Eligibility Criteria</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border-2 border-blue-200 shadow-lg">
                <CardHeader className="text-center">
                  <School className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">📚 Student Strength</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">Minimum <strong>325 students</strong> or more</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-green-200 shadow-lg">
                <CardHeader className="text-center">
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">🕒 Established Tenure</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">For schools with 300–1000 students, must be operational for <strong>at least 2 years</strong></p>
                </CardContent>
              </Card>
              
              <Card className="bg-white border-2 border-purple-200 shadow-lg">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">🏫 Affiliation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">Must be affiliated with <strong>recognized education board</strong> (CBSE, ICSE, State Boards, or International Boards)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Award Parameters */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🔧 Core Award Parameters</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreParameters.map((param, index) => (
                <Card key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-xl">
                  <CardHeader className="text-center">
                    <param.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <CardTitle className="text-xl">{param.parameter}</CardTitle>
                    <Badge className="bg-blue-600 text-white">{param.weight}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 leading-relaxed text-center">{param.focus}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Award Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🏅 Award Categories</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {awardCategories.map((category, index) => (
                <Card key={index} className="bg-white border-2 border-yellow-200 shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center">
                    <div className="text-4xl mb-2">{category.emoji}</div>
                    <category.icon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm leading-relaxed">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">🔍 Audit + Evaluation Process</h2>
            <div className="space-y-6">
              {auditSteps.map((step, index) => (
                <Card key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-l-blue-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-3">{step.step}</h3>
                    <p className="text-gray-700 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CertificateAwards;
