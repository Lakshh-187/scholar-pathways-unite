
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
      criteria: "The school has both well-established infrastructure (labs, digital tools, PBL systems) and active frontliners (trained teachers, student leaders, eco-ambassadors, etc.).",
      image: "/lovable-uploads/417c6974-656e-4cc8-9b02-9500b11d325b.png"
    },
    {
      grade: "A+",
      emoji: "🥈", 
      criteria: "The school has either strong establishments or active frontliners, but not both.",
      image: "/lovable-uploads/61438adf-d790-43aa-82d6-7d96b9e8f931.png"
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <NavBar />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section with Background Image */}
        <div 
          className="text-center mb-16 py-20 bg-cover bg-center bg-no-repeat rounded-3xl relative overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png')`
          }}
        >
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <Trophy className="h-20 w-20 text-yellow-400 animate-bounce" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Certificate & Awards
            </h1>
            <p className="text-xl text-white max-w-4xl mx-auto drop-shadow-md">
              🏆 Great Place To Learn Certification & Recognition by UNCIF
            </p>
          </div>
        </div>

        {/* Introduction with Image */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <Card className="h-full shadow-xl border-0 bg-gradient-to-br from-white to-blue-50">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                The Great Place To Learn Certification is a prestigious recognition awarded by UNCIF to schools that meet high standards in infrastructure, pedagogy, and social responsibility. This recognition is based on a comprehensive audit, ensuring that certified schools are truly advancing modern education practices. It provides validation to parents, educators, and communities that the institution is committed to excellence, innovation, and impact.
              </p>
            </CardContent>
          </Card>
          <div className="relative">
            <img 
              src="/lovable-uploads/83320e27-0b79-43f5-8e30-6e45043a85a9.png" 
              alt="Education Excellence" 
              className="w-full h-80 object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-2xl"></div>
          </div>
        </div>

        {/* Certification Grades with Images */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            🎖️ Certification Grades
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {certificationGrades.map((grade, index) => (
              <Card key={index} className="h-full overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-yellow-50 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={grade.image} 
                    alt={`Grade ${grade.grade}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-yellow-500 text-white text-xl px-6 py-3 shadow-lg">
                      Grade {grade.grade}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="text-4xl">{grade.emoji}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-700 text-lg leading-relaxed">{grade.criteria}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* How to Apply */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            📩 How to Apply
          </h2>
          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-green-50">
            <CardContent className="p-12">
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">1</div>
                  <div>
                    <p className="text-xl">Email us at <Mail className="inline h-5 w-5" /> <a href="mailto:info@uniford.org" className="text-purple-600 font-semibold hover:underline">info@uniford.org</a> to request the submission form.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">2</div>
                  <div>
                    <p className="text-xl">Fill out the form with required data and documentation.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0 shadow-lg">3</div>
                  <div>
                    <p className="text-xl">Connect with your regional officer for the audit process and verification.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <a href="mailto:info@uniford.org">
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-12 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                    <Mail className="mr-3 h-6 w-6" />
                    Apply Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Eligibility Criteria */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
            ✅ Eligibility Criteria
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {eligibilityCriteria.map((criteria, index) => (
              <Card key={index} className="h-full text-center shadow-2xl border-0 bg-gradient-to-br from-white to-orange-50 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-4 shadow-lg">
                      <criteria.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gray-800">{criteria.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">{criteria.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Award Parameters */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            🔧 Core Award Parameters
          </h2>
          <div className="space-y-6">
            {coreParameters.map((param, index) => (
              <Card key={index} className="shadow-2xl border-0 bg-gradient-to-r from-white to-indigo-50 hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div className="md:col-span-1">
                      <Badge className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xl px-6 py-3 shadow-lg">
                        {index + 1}. {param.parameter}
                      </Badge>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-gray-700 text-lg">{param.focus}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Award Categories */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
            🏅 Award Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardCategories.map((category, index) => (
              <Card key={index} className="h-full shadow-2xl border-0 bg-gradient-to-br from-white to-pink-50 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-pink-500 to-rose-500 rounded-full p-4 shadow-lg">
                      <category.icon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                  <CardTitle className="text-lg text-gray-800">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-center leading-relaxed">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Audit & Evaluation Process */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
            🔍 Audit + Evaluation Process
          </h2>
          <div className="space-y-8">
            {auditSteps.map((step, index) => (
              <Card key={index} className="shadow-2xl border-0 bg-gradient-to-r from-white to-teal-50 hover:shadow-3xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold text-2xl flex-shrink-0 shadow-lg">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-gray-800">{step.step}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
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
