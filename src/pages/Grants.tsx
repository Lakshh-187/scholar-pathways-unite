import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Building2, 
  Users, 
  Microscope, 
  Bot, 
  BookOpen, 
  Zap,
  CheckCircle,
  ArrowRight,
  Mail,
  Target
} from 'lucide-react';
import Layout from '@/components/Layout';

const Grants = () => {
  const grantTypes = [
    {
      id: 'lab-setup',
      title: 'Lab Setup Grant',
      description: 'Comprehensive funding for establishing state-of-the-art educational laboratories',
      amount: '₹50,000 - ₹5,00,000',
      duration: '6-12 months',
      eligibility: 'UNCIF Accredited Institutes',
      icon: Microscope,
      color: 'from-blue-500 to-cyan-500',
      labs: [
        { name: 'AI Lab', icon: Bot },
        { name: 'AR/VR Lab', icon: Zap },
        { name: 'STEM Lab', icon: Target },
        { name: 'Robotics Lab', icon: Bot },
        { name: 'Hi-tech Library', icon: BookOpen },
        { name: 'Practical Literacy Lab', icon: CheckCircle },
        { name: 'Frontliner Lab', icon: Users }
      ],
      benefits: [
        'Complete equipment procurement',
        'Installation & setup support',
        'Training for faculty members',
        'Technical maintenance for 1 year',
        'Curriculum integration assistance'
      ]
    },
    {
      id: 'fellowship',
      title: 'Uniford Fellowship Grant',
      description: 'Empowering students with comprehensive fellowship programs and opportunities',
      amount: '₹10,000 - ₹1,00,000',
      duration: '1-2 years',
      eligibility: 'Students from UNCIF Member Institutes',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      features: [
        'Fellowship ID Card',
        'Platform Access',
        'Competition Participation',
        'Research Scholarships',
        'Academic Support',
        'Networking Opportunities'
      ],
      benefits: [
        'Access to all UNCIF programs',
        'Priority in competitions',
        'Research & academic scholarships',
        'Mentorship opportunities',
        'Industry connections'
      ]
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>UNCIF Grants & Funds - Lab Setup & Fellowship Programs | Uniford Foundation</title>
        <meta name="description" content="Apply for UNCIF grants including Lab Setup Grant for institutes and Uniford Fellowship Grant for students. Funding for AI labs, STEM labs, research, and academic excellence." />
        <meta name="keywords" content="UNCIF grants, lab setup grant, fellowship grant, Uniford Foundation, education funding, STEM labs, AI labs, student fellowships, academic grants" />
        <meta property="og:title" content="UNCIF Grants & Funds - Transform Education with Funding" />
        <meta property="og:description" content="Discover funding opportunities through UNCIF grants. Support for lab setup, student fellowships, and educational excellence." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UNCIF Grants & Funds - Educational Excellence" />
        <meta name="twitter:description" content="Apply for UNCIF grants and transform education with comprehensive funding support." />
        <link rel="canonical" href={`${window.location.origin}/grants`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-unifor-purple via-unifor-blue to-unifor-dark-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Grants & Funds
              <span className="block text-3xl md:text-4xl text-yellow-300 mt-2">by UNCIF</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Empowering educational institutes and students through comprehensive funding programs for laboratories, research, and academic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {grantTypes.map((grant, index) => {
              const IconComponent = grant.icon;
              return (
                <Card key={index} className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300 group">
                  <CardHeader className="pb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${grant.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white mb-2">{grant.title}</CardTitle>
                    <p className="text-white/80 text-lg">{grant.description}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm text-white/70">Funding Range</p>
                        <p className="font-semibold text-lg">{grant.amount}</p>
                      </div>
                      <div className="bg-white/10 rounded-lg p-3">
                        <p className="text-sm text-white/70">Duration</p>
                        <p className="font-semibold text-lg">{grant.duration}</p>
                      </div>
                    </div>

                    <div className="bg-white/10 rounded-lg p-4">
                      <p className="text-sm text-white/70 mb-2">Eligibility</p>
                      <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">
                        {grant.eligibility}
                      </Badge>
                    </div>

                    <Link to="/grants-details" state={{ selectedGrant: grant.id }}>
                      <Button className="w-full bg-white text-unifor-purple hover:bg-gray-100 font-semibold py-3 text-lg group">
                        View Details & Apply
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Application Info */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">How to Apply</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple and transparent application process for both grant programs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="h-full border-l-4 border-l-blue-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Building2 className="h-6 w-6 text-blue-500" />
                  For Institutes - Lab Setup Grant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <span className="font-semibold">grants@uncif.org</span>
                </div>
                <p className="text-sm text-gray-600">
                  Subject: Application: Lab Setup Grant – [Institute Name] – [City]
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-blue-700">Required Documents:</p>
                  <ul className="text-sm text-blue-600 mt-2 space-y-1">
                    <li>• UNCIF Accreditation ID</li>
                    <li>• Student Annual Report</li>
                    <li>• Project Proposal (Max 2 pages)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full border-l-4 border-l-purple-500">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <Users className="h-6 w-6 text-purple-500" />
                  For Students - Fellowship Grant
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-purple-500" />
                  <span className="font-semibold">fellowship@uncif.org</span>
                </div>
                <p className="text-sm text-gray-600">
                  Subject: Application: Uniford Fellowship Grant – [Your Name] – [Institute]
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-purple-700">Required Information:</p>
                  <ul className="text-sm text-purple-600 mt-2 space-y-1">
                    <li>• Personal & Academic Details</li>
                    <li>• Motivation Statement (50-200 words)</li>
                    <li>• Previous UNCIF Participation Proof</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/grants-details">
              <Button className="primary-btn text-lg px-8 py-3">
                View Complete Application Guide
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* UNCIF Accreditation Info */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-unifor-dark-purple">UNCIF Accreditation Required</h2>
            <p className="text-xl text-gray-600 mb-8">
              To be eligible for grants, institutes must obtain UNCIF accreditation
            </p>
            
            <Card className="text-left bg-unifor-light-purple/10">
              <CardHeader>
                <CardTitle className="text-center text-2xl">Accreditation Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-unifor-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold">3+</span>
                    </div>
                    <h4 className="font-semibold mb-2">Years of Membership</h4>
                    <p className="text-sm text-gray-600">Institute must be UNCIF member for at least 3 years</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-unifor-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">UNCIF Curriculum</h4>
                    <p className="text-sm text-gray-600">Must implement UNCIF approved curriculum</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="bg-unifor-purple rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold mb-2">Audit Report</h4>
                    <p className="text-sm text-gray-600">Must have completed UNCIF audit process</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Grants;