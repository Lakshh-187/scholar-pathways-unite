import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Award, 
  Building2, 
  Users, 
  Microscope, 
  Bot, 
  BookOpen, 
  Zap,
  CheckCircle,
  Mail,
  Target,
  Clock,
  DollarSign,
  FileText,
  Phone,
  MapPin,
  Calendar,
  Star,
  TrendingUp,
  Globe
} from 'lucide-react';
import Layout from '@/components/Layout';

const GrantsDetails = () => {
  const location = useLocation();
  const selectedGrant = location.state?.selectedGrant || 'lab-setup';
  const [activeTab, setActiveTab] = useState(selectedGrant);

  const grantDetails = {
    'lab-setup': {
      title: 'Lab Setup Grant',
      subtitle: 'Transform Education with State-of-the-Art Laboratories',
      description: 'Comprehensive funding program designed to help UNCIF accredited institutes establish cutting-edge educational laboratories that enhance practical learning and innovation.',
      icon: Microscope,
      color: 'from-blue-500 to-cyan-500',
      amount: '₹50,000 - ₹5,00,000',
      duration: '6-12 months',
      eligibility: 'UNCIF Accredited Institutes',
      labs: [
        {
          name: 'AI Lab',
          icon: Bot,
          description: 'Machine learning workstations, GPU clusters, AI development tools',
          funding: '₹2,00,000 - ₹5,00,000',
          equipment: ['High-performance computers', 'GPU cards', 'AI software licenses', 'Development tools']
        },
        {
          name: 'AR/VR Lab',
          icon: Zap,
          description: 'Immersive technology setup for virtual and augmented reality',
          funding: '₹1,50,000 - ₹3,50,000',
          equipment: ['VR headsets', 'AR glasses', 'Motion sensors', 'Development software']
        },
        {
          name: 'STEM Lab',
          icon: Target,
          description: 'Science, Technology, Engineering & Mathematics practical lab',
          funding: '₹1,00,000 - ₹2,50,000',
          equipment: ['Scientific instruments', 'Measurement tools', 'Experiment kits', 'Safety equipment']
        },
        {
          name: 'Robotics Lab',
          icon: Bot,
          description: 'Robotics development and programming environment',
          funding: '₹1,50,000 - ₹4,00,000',
          equipment: ['Robot kits', 'Sensors', 'Controllers', 'Programming tools']
        },
        {
          name: 'Hi-tech Library',
          icon: BookOpen,
          description: 'Digital library with e-resources and smart learning systems',
          funding: '₹75,000 - ₹2,00,000',
          equipment: ['Digital displays', 'Tablets', 'E-book licenses', 'Learning management system']
        },
        {
          name: 'Practical Literacy Lab',
          icon: CheckCircle,
          description: 'Hands-on learning environment for practical skills development',
          funding: '₹50,000 - ₹1,50,000',
          equipment: ['Interactive whiteboards', 'Simulation software', 'Practical kits', 'Assessment tools']
        },
        {
          name: 'Frontliner Lab',
          icon: Users,
          description: 'Leadership and professional development facility',
          funding: '₹60,000 - ₹1,80,000',
          equipment: ['Video conferencing setup', 'Presentation tools', 'Collaboration software', 'Training materials']
        }
      ],
      applicationProcess: [
        {
          step: 1,
          title: 'Eligibility Check',
          description: 'Verify UNCIF accreditation status and membership duration'
        },
        {
          step: 2,
          title: 'Proposal Preparation',
          description: 'Prepare detailed project proposal with budget and timeline'
        },
        {
          step: 3,
          title: 'Document Submission',
          description: 'Submit all required documents to grants@uncif.org'
        },
        {
          step: 4,
          title: 'Review Process',
          description: 'UNCIF committee reviews application (15-30 days)'
        },
        {
          step: 5,
          title: 'Site Visit',
          description: 'On-site evaluation by UNCIF technical team'
        },
        {
          step: 6,
          title: 'Grant Approval',
          description: 'Final approval and fund disbursement'
        }
      ],
      benefits: [
        'Complete equipment procurement assistance',
        'Professional installation and setup',
        'Comprehensive faculty training programs',
        'One-year technical maintenance support',
        'Curriculum integration guidance',
        'Performance monitoring and evaluation',
        'Access to UNCIF research network',
        'Priority consideration for future grants'
      ]
    },
    'fellowship': {
      title: 'Uniford Fellowship Grant',
      subtitle: 'Empowering Student Excellence and Innovation',
      description: 'A comprehensive fellowship program designed to support outstanding students from UNCIF member institutes with access to platforms, competitions, research opportunities, and academic scholarships.',
      icon: Award,
      color: 'from-purple-500 to-pink-500',
      amount: '₹10,000 - ₹1,00,000',
      duration: '1-2 years',
      eligibility: 'Students from UNCIF Member Institutes',
      features: [
        {
          name: 'Fellowship ID Card',
          icon: Award,
          description: 'Official recognition with exclusive privileges',
          benefits: ['Platform access', 'Event priority', 'Network access', 'Digital portfolio']
        },
        {
          name: 'Platform Access',
          icon: Globe,
          description: 'Complete access to UNCIF digital platforms',
          benefits: ['Learning resources', 'Collaboration tools', 'Project management', 'Skill assessments']
        },
        {
          name: 'Competition Participation',
          icon: Star,
          description: 'Priority participation in national and international competitions',
          benefits: ['Fee waivers', 'Travel support', 'Mentorship', 'Recognition certificates']
        },
        {
          name: 'Research Scholarships',
          icon: TrendingUp,
          description: 'Financial support for research and academic projects',
          benefits: ['Research funding', 'Publication support', 'Conference attendance', 'Equipment access']
        },
        {
          name: 'Academic Support',
          icon: BookOpen,
          description: 'Comprehensive academic and career guidance',
          benefits: ['Tutoring', 'Career counseling', 'Industry connections', 'Skill development']
        },
        {
          name: 'Networking Opportunities',
          icon: Users,
          description: 'Connect with industry leaders and fellow scholars',
          benefits: ['Mentor matching', 'Industry events', 'Alumni network', 'Professional development']
        }
      ],
      categories: [
        {
          name: 'Academic Excellence Fellowship',
          amount: '₹25,000 - ₹75,000',
          criteria: 'Top 10% academic performance',
          duration: '1 year renewable'
        },
        {
          name: 'Innovation Fellowship',
          amount: '₹30,000 - ₹1,00,000',
          criteria: 'Outstanding innovation projects',
          duration: '1-2 years'
        },
        {
          name: 'Leadership Fellowship',
          amount: '₹20,000 - ₹60,000',
          criteria: 'Demonstrated leadership qualities',
          duration: '1 year'
        },
        {
          name: 'Research Fellowship',
          amount: '₹40,000 - ₹1,00,000',
          criteria: 'Research publications or projects',
          duration: '2 years'
        }
      ],
      applicationProcess: [
        {
          step: 1,
          title: 'Institute Verification',
          description: 'Confirm enrollment in UNCIF member institute'
        },
        {
          step: 2,
          title: 'Application Form',
          description: 'Complete online fellowship application'
        },
        {
          step: 3,
          title: 'Document Upload',
          description: 'Submit academic records and certificates'
        },
        {
          step: 4,
          title: 'Motivation Statement',
          description: 'Write compelling motivation statement (50-200 words)'
        },
        {
          step: 5,
          title: 'Review & Interview',
          description: 'Application review and virtual interview'
        },
        {
          step: 6,
          title: 'Fellowship Award',
          description: 'Fellowship confirmation and ID card issuance'
        }
      ]
    }
  };

  const currentGrant = grantDetails[activeTab];

  return (
    <Layout>
      <Helmet>
        <title>UNCIF Grants Details - Complete Application Guide | Uniford Foundation</title>
        <meta name="description" content="Detailed information about UNCIF Lab Setup Grant and Uniford Fellowship Grant. Complete application process, eligibility criteria, and benefits." />
        <meta name="keywords" content="UNCIF grants details, lab setup grant application, fellowship grant process, Uniford Foundation, education funding, grant eligibility, application guide" />
        <meta property="og:title" content="UNCIF Grants Details - Complete Application Guide" />
        <meta property="og:description" content="Everything you need to know about UNCIF grants. Detailed application process, eligibility criteria, and comprehensive benefits." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UNCIF Grants Details - Application Guide" />
        <meta name="twitter:description" content="Complete guide to UNCIF grants with detailed application process and requirements." />
        <link rel="canonical" href={`${window.location.origin}/grants-details`} />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-unifor-purple via-unifor-blue to-unifor-dark-purple text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Grant Details
              <span className="block text-3xl md:text-4xl text-yellow-300 mt-2">Complete Application Guide</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Everything you need to know about UNCIF grants, application process, and eligibility requirements
            </p>
          </div>
        </div>
      </section>

      {/* Grant Selection Tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="lab-setup" className="text-lg py-3">Lab Setup Grant</TabsTrigger>
              <TabsTrigger value="fellowship" className="text-lg py-3">Fellowship Grant</TabsTrigger>
            </TabsList>

            <TabsContent value={activeTab} className="space-y-16">
              {/* Grant Overview */}
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <div className={`bg-gradient-to-br ${currentGrant.color} rounded-full p-4`}>
                    <currentGrant.icon className="h-12 w-12 text-white" />
                  </div>
                </div>
                <h2 className="text-4xl font-bold mb-4 text-unifor-dark-purple">{currentGrant.title}</h2>
                <p className="text-2xl text-unifor-purple mb-4">{currentGrant.subtitle}</p>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  {currentGrant.description}
                </p>
              </div>

              {/* Grant Summary Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-16">
                <Card className="text-center">
                  <CardHeader>
                    <DollarSign className="h-8 w-8 text-green-500 mx-auto mb-2" />
                    <CardTitle>Funding Range</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-green-600">{currentGrant.amount}</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <Clock className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                    <CardTitle>Duration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold text-blue-600">{currentGrant.duration}</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CheckCircle className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                    <CardTitle>Eligibility</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="text-lg py-2 px-4 bg-purple-100 text-purple-700">
                      {currentGrant.eligibility}
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              {/* Lab Types or Fellowship Features */}
              {activeTab === 'lab-setup' && (
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-center mb-12 text-unifor-dark-purple">Laboratory Types & Funding</h3>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {currentGrant.labs.map((lab, index) => {
                      const LabIcon = lab.icon;
                      return (
                        <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                          <CardHeader>
                            <div className="flex items-center gap-4">
                              <div className="bg-blue-100 rounded-lg p-3">
                                <LabIcon className="h-8 w-8 text-blue-600" />
                              </div>
                              <div>
                                <CardTitle className="text-xl">{lab.name}</CardTitle>
                                <p className="text-green-600 font-semibold">{lab.funding}</p>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-gray-600 mb-4">{lab.description}</p>
                            <div>
                              <h4 className="font-semibold mb-2">Included Equipment:</h4>
                              <ul className="space-y-1">
                                {lab.equipment.map((item, idx) => (
                                  <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-green-500" />
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'fellowship' && (
                <>
                  <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-unifor-dark-purple">Fellowship Features & Benefits</h3>
                    <div className="grid lg:grid-cols-2 gap-8">
                      {currentGrant.features.map((feature, index) => {
                        const FeatureIcon = feature.icon;
                        return (
                          <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                            <CardHeader>
                              <div className="flex items-center gap-4">
                                <div className="bg-purple-100 rounded-lg p-3">
                                  <FeatureIcon className="h-8 w-8 text-purple-600" />
                                </div>
                                <CardTitle className="text-xl">{feature.name}</CardTitle>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-gray-600 mb-4">{feature.description}</p>
                              <div>
                                <h4 className="font-semibold mb-2">Benefits:</h4>
                                <ul className="space-y-1">
                                  {feature.benefits.map((benefit, idx) => (
                                    <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      {benefit}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-12 text-unifor-dark-purple">Fellowship Categories</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {currentGrant.categories.map((category, index) => (
                        <Card key={index} className="h-full border-l-4 border-l-purple-500">
                          <CardHeader>
                            <CardTitle className="text-lg">{category.name}</CardTitle>
                            <p className="text-2xl font-bold text-purple-600">{category.amount}</p>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              <p><span className="font-semibold">Criteria:</span> {category.criteria}</p>
                              <p><span className="font-semibold">Duration:</span> {category.duration}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {/* Application Process */}
              <div className="mb-16">
                <h3 className="text-3xl font-bold text-center mb-12 text-unifor-dark-purple">Application Process</h3>
                <div className="max-w-4xl mx-auto">
                  {currentGrant.applicationProcess.map((step, index) => (
                    <div key={index} className="flex gap-6 mb-8">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-unifor-purple text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.step}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h4 className="text-xl font-semibold mb-2">{step.title}</h4>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              {activeTab === 'lab-setup' && (
                <div className="mb-16">
                  <h3 className="text-3xl font-bold text-center mb-12 text-unifor-dark-purple">Grant Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {currentGrant.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Application Contact */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-center mb-8 text-unifor-dark-purple">Ready to Apply?</h3>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-unifor-purple" />
                        Email Application
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p>
                        <span className="font-semibold">Email:</span> {' '}
                        {activeTab === 'lab-setup' ? 'grants@uncif.org' : 'fellowship@uncif.org'}
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">Subject:</span> {' '}
                        {activeTab === 'lab-setup' 
                          ? 'Application: Lab Setup Grant – [Institute Name] – [City]'
                          : 'Application: Uniford Fellowship Grant – [Your Name] – [Institute]'
                        }
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Phone className="h-6 w-6 text-unifor-purple" />
                        Contact Support
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p><span className="font-semibold">Phone:</span> +917347099610</p>
                      <p><span className="font-semibold">Office Hours:</span> Mon-Fri, 9 AM - 6 PM</p>
                      <p className="text-sm text-gray-600">For application support and queries</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="text-center mt-8">
                  <Button className="primary-btn text-lg px-8 py-3">
                    Start Your Application
                    <Mail className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default GrantsDetails;