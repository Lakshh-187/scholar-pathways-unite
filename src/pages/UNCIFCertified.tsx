import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Shield, 
  Users, 
  Lightbulb, 
  GraduationCap, 
  Globe, 
  Heart,
  CheckCircle,
  TrendingUp,
  FileText,
  Lock,
  Building
} from 'lucide-react';

const UNCIFCertified = () => {
  const partners = [
    { name: 'UICSS', icon: Shield },
    { name: 'UTHA', icon: Users },
    { name: 'UIRAD', icon: TrendingUp },
    { name: 'PitchBurg', icon: Lightbulb },
    { name: 'Her-HaVa', icon: Heart }
  ];

  const programs = [
    {
      id: 1,
      title: 'POSH (Prevention of Sexual Harassment)',
      icon: Shield,
      fees: {
        selfLearning: '₹1,500',
        withLectures: '₹28,000'
      },
      curriculum: [
        'POSH Law, Roles & Responsibilities',
        'Training Employees & IC Members',
        'Policy & Documentation Drafting',
        'Internship with Real Training Session'
      ],
      careerOps: [
        'POSH Trainer / Consultant',
        'HR & Compliance Specialist'
      ],
      scope: 'Corporates, Startups, Educational Institutions, NGOs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      title: 'POCSO (Child Protection & Safety)',
      icon: Users,
      fees: {
        selfLearning: '₹1,500',
        withLectures: '₹28,000'
      },
      curriculum: [
        'POCSO Act 2012 & Legal Duties',
        'Training Teachers & Committees',
        'Policy & Reporting Formats',
        'Field Internship – Awareness Session'
      ],
      careerOps: [
        'Child Protection Trainer',
        'Compliance Officer in Schools/NGOs'
      ],
      scope: 'Schools, Child Welfare NGOs, CSR Projects',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      title: 'Cyber & Data Privacy Trainer',
      icon: Lock,
      fees: {
        selfLearning: '₹1,500',
        withLectures: '₹28,000'
      },
      curriculum: [
        'IT Act, GDPR, DPDP Act 2023',
        'Cybersecurity Basics & Data Protection',
        'Policy Drafting & Audit Reports',
        'Internship – Awareness Training'
      ],
      careerOps: [
        'Cyber Law Trainer',
        'Data Privacy Officer'
      ],
      scope: 'Corporates, EdTech, Startups, Legal Firms',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      title: 'CSR & ESG Specialist',
      icon: TrendingUp,
      fees: {
        selfLearning: '₹1,500',
        withLectures: '₹28,000'
      },
      curriculum: [
        'CSR Regulations & ESG Standards',
        'Sustainability & Reporting',
        'Case Studies & Project Frameworks',
        'Field Assignment in CSR Activity'
      ],
      careerOps: [
        'CSR Consultant',
        'ESG Policy Analyst'
      ],
      scope: 'Corporates, NGOs, Sustainability Firms',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 5,
      title: 'Policy Expert',
      icon: FileText,
      fees: {
        selfLearning: '₹1,500',
        withLectures: '₹28,000'
      },
      curriculum: [
        'Policy Drafting & Review',
        'Legal Compliance in Education & Workplaces',
        'Gap Analysis & Policy Updates',
        'Internship with School/Organization Policy Projects'
      ],
      careerOps: [
        'Policy Advisor / Compliance Expert',
        'Education Consultant'
      ],
      scope: 'Schools, NGOs, Government Bodies, Private Sector',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const advantages = [
    {
      icon: GraduationCap,
      title: 'Accredited Programs',
      description: 'Internationally recognized programs'
    },
    {
      icon: Globe,
      title: 'Global Career Network',
      description: 'Access to worldwide opportunities'
    },
    {
      icon: CheckCircle,
      title: 'Practical Assignments',
      description: 'Real-world internships & projects'
    },
    {
      icon: Heart,
      title: 'Financial Aid',
      description: 'Support for deserving candidates'
    },
    {
      icon: Users,
      title: 'Career Mentorship',
      description: 'Ongoing support & guidance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-accent/20">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
        <div className="container mx-auto max-w-6xl">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            UNCIF Accredited Programs
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            UNCIF Certified
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Diploma & Certification Programs with UNCIF Accreditation & Recognition
          </p>
          
          {/* Partners */}
          <div className="mb-8">
            <p className="text-lg font-semibold mb-4">In Partnership with:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {partners.map((partner) => {
                const IconComponent = partner.icon;
                return (
                  <Badge key={partner.name} variant="secondary" className="text-sm py-2 px-4">
                    <IconComponent className="w-4 h-4 mr-2" />
                    {partner.name}
                  </Badge>
                );
              })}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">UTHA Connection</h3>
                <p className="text-muted-foreground">
                  UTHA connects the best scholars with partnered schools & organizations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Her-HaVa Support</h3>
                <p className="text-muted-foreground">
                  Financial aid and support to deserving candidates through Her-HaVa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Programs Offered</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Each program includes curriculum, assignments, and mentorship — preparing you for global career opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <Card key={program.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader className={`bg-gradient-to-r ${program.color} text-white`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <CardDescription className="text-white/90">
                          UNCIF Accredited Program
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 space-y-6">
                    {/* Fees */}
                    <div>
                      <h4 className="font-semibold mb-2">Fees</h4>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-accent/50 rounded-lg">
                          <p className="text-sm text-muted-foreground">Self-Learning</p>
                          <p className="font-bold text-lg">{program.fees.selfLearning}</p>
                        </div>
                        <div className="text-center p-3 bg-primary/10 rounded-lg">
                          <p className="text-sm text-muted-foreground">With Lectures</p>
                          <p className="font-bold text-lg">{program.fees.withLectures}</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="mt-2 text-xs">
                        Financial Aid Available via Her-HaVa
                      </Badge>
                    </div>

                    <Separator />

                    {/* Curriculum */}
                    <div>
                      <h4 className="font-semibold mb-3">Curriculum</h4>
                      <ul className="space-y-2">
                        {program.curriculum.map((item, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Separator />

                    {/* Career Opportunities */}
                    <div>
                      <h4 className="font-semibold mb-2">Career Opportunities</h4>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {program.careerOps.map((career, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {career}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <Building className="w-4 h-4 inline mr-1" />
                        Scope: {program.scope}
                      </p>
                    </div>

                    <div className="pt-4">
                      <Button className="w-full" variant="outline">
                        Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* UNCIF Advantage */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">UNCIF Advantage</h2>
            <p className="text-lg text-muted-foreground">
              Why choose UNCIF certified programs for your career growth
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="text-center hover:shadow-md transition-shadow border-primary/20">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex p-3 bg-primary/10 rounded-full">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Ready to Start Your Journey?</h3>
                <p className="text-muted-foreground mb-6">
                  Join thousands of professionals who have advanced their careers with UNCIF certified programs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary">
                    Apply Now
                  </Button>
                  <Button size="lg" variant="outline">
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UNCIFCertified;