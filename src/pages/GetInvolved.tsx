import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, ChevronDown, ChevronUp, Users, Target, Rocket, Award, BookOpen, Globe } from 'lucide-react';

interface Role {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  gradient: string;
  description: string;
  responsibilities: Array<{
    title: string;
    description: string;
  }>;
  email: string;
}

const GetInvolved = () => {
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  const roles: Role[] = [
    {
      id: 'advisors',
      title: 'ADVISORS',
      subtitle: 'Leadership Council',
      icon: <Award className="h-8 w-8" />,
      gradient: 'from-purple-500 to-pink-500',
      description: 'As an Advisor, you will play a strategic role in shaping national-level school transformation. You will actively guide our leadership team on policy, innovation & expansion, participate in high-level reviews of initiatives, standards & accreditation models, lend your expertise to strengthen credibility, governance and impact, and represent the organization across key forums, campaigns & partnerships.',
      responsibilities: [
        {
          title: 'Serve as Jury Member',
          description: 'Take part in evaluating national-level school programs, campaigns and awards—your expertise shapes the future of education.'
        },
        {
          title: 'Appear as Guest of Honour',
          description: 'Be invited to prestigious award ceremonies, school events, global observances and national conferences.'
        },
        {
          title: 'Lead High-Impact Conferences',
          description: 'Represent us as a keynote speaker, panel member or moderator at national & international summits.'
        },
        {
          title: 'Contribute to School Cinema',
          description: 'Support storytelling-led learning, review episodes, and guide the direction of our signature School Cinema initiative.'
        },
        {
          title: 'Advisor for Global Campaigns',
          description: 'Participate in international safety, well-being and standardisation campaigns supported by our organization.'
        },
        {
          title: 'Strategic Think Tank Member',
          description: 'Participate in quarterly advisory circles that shape policies, frameworks and institutional programs.'
        }
      ],
      email: 'info@uniford.org'
    },
    {
      id: 'mentors',
      title: 'MENTORS',
      subtitle: 'Impact & Implementation Leaders',
      icon: <Target className="h-8 w-8" />,
      gradient: 'from-blue-500 to-cyan-500',
      description: 'You will actively mentor educators, coordinators & school teams across programs, lead training, assessments & structured improvement journeys, support quality assurance, reporting & school transformation planning, and guide students & teachers in skill development, SEL & future-ready learning.',
      responsibilities: [
        {
          title: 'Deliver Expert Sessions',
          description: 'Conduct masterclasses, teacher training, parent sessions and student leadership programs.'
        },
        {
          title: 'Represent in Conferences & Workshops',
          description: 'Participate as speakers, moderators, or resource persons at national and regional summits.'
        },
        {
          title: 'Inspection & School Evaluation',
          description: 'Engage as Inspection Officers for standards, safety, classroom practices, compliance and quality benchmarking.'
        },
        {
          title: 'Lead Assessments & Academic Audits',
          description: 'Contribute to evaluation, certification rubrics, school readiness audits and NEP-2020 implementation scoring.'
        },
        {
          title: 'Mentor School Leadership Teams',
          description: 'Guide principals, coordinators and committees in academic strategy, innovation, school safety and student well-being.'
        },
        {
          title: 'Join Professional Committees',
          description: 'Become part of the School Standard Council, Academic Committee, Incubation Cell and Teacher Development Committee.'
        },
        {
          title: 'Develop Training Frameworks',
          description: 'Help us create progressive modules, toolkits and 21st-century capacity-building programs.'
        }
      ],
      email: 'info@uniford.org'
    },
    {
      id: 'frontliners',
      title: 'FRONTLINERS',
      subtitle: 'Student & School Impact Ambassadors',
      icon: <Rocket className="h-8 w-8" />,
      gradient: 'from-orange-500 to-red-500',
      description: 'You will actively guide students in learning, leadership & life skills, support school engagement, outreach & implementation tasks, represent our campaigns, programs & youth initiatives nationally, and collaborate with Mentors & Advisors to drive impact on ground.',
      responsibilities: [
        {
          title: 'Mentor Students',
          description: 'Work closely with student groups as guides, role models and skill-development coaches.'
        },
        {
          title: 'Serve as Speaker & Story Sharer',
          description: 'Engage in school events, youth gatherings, webinars and leadership forums.'
        },
        {
          title: 'Student Advisory & Counselling Support',
          description: 'Help create youth-led ideas, feedback systems and student advisory panels.'
        },
        {
          title: 'Join Leadership Tracks',
          description: 'Become Ambassadors, Presidents, Council Members or Chapter Leads for different regions.'
        },
        {
          title: 'Support Awareness Campaigns',
          description: 'Participate in safety, standards, mental health, environment and social impact campaigns.'
        },
        {
          title: 'Represent Your Region',
          description: 'Drive our mission in schools, colleges and communities as the local representative of our organization.'
        }
      ],
      email: 'info@uniford.org'
    }
  ];

  const toggleRole = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <Layout>
      <Helmet>
        <title>Get Involved - Join Our Mission | Uniford</title>
        <meta name="description" content="Join Uniford as an Advisor, Mentor, or Frontliner. Shape the future of education through strategic leadership, implementation, and grassroots impact." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/20 via-accent/20 to-background">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/uniford-foundation-event.png')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 px-6 py-2 text-lg">
            <Users className="h-5 w-5 mr-2 inline" />
            Join Our Network
          </Badge>
          
          <h1 className="hero-text mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-fade-in">
            Get Involved
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in">
            Shape the future of education. Choose your role and make an impact.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
            <img src="/lovable-uploads/great-place-badge.png" alt="Recognition" className="h-20 w-auto animate-scale-in" />
            <img src="/lovable-uploads/sdg-badge.png" alt="SDG Badge" className="h-20 w-auto animate-scale-in" />
            <img src="/lovable-uploads/uniford-certificate.jpeg" alt="Certificate" className="h-20 w-auto animate-scale-in" />
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Roles Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title text-foreground">Three Pathways to Impact</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're a strategic leader, implementation expert, or grassroots changemaker—we have a role for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {roles.map((role) => (
              <Card 
                key={role.id} 
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 group"
              >
                <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${role.gradient}`} />
                
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-r ${role.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {role.icon}
                  </div>
                  <Badge className="mx-auto mb-2 bg-accent/20 text-accent-foreground">
                    {role.title}
                  </Badge>
                  <CardTitle className="text-2xl text-foreground">{role.subtitle}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-4">
                    {role.description}
                  </p>

                  <Button
                    onClick={() => toggleRole(role.id)}
                    variant="outline"
                    className="w-full mb-4 hover:bg-accent/10"
                  >
                    {expandedRole === role.id ? (
                      <>
                        <ChevronUp className="h-4 w-4 mr-2" />
                        Hide Details
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 mr-2" />
                        View Responsibilities
                      </>
                    )}
                  </Button>

                  {expandedRole === role.id && (
                    <div className="space-y-4 animate-fade-in mb-4">
                      {role.responsibilities.map((resp, index) => (
                        <div key={index} className="border-l-2 border-primary pl-4 py-2">
                          <h4 className="font-semibold text-foreground mb-1">
                            {index + 1}. {resp.title}
                          </h4>
                          <p className="text-sm text-muted-foreground">{resp.description}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <Button 
                    className={`w-full bg-gradient-to-r ${role.gradient} text-white hover:opacity-90`}
                    onClick={() => window.location.href = `mailto:${role.email}?subject=${role.title} Application – [Your Name]`}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Impact Gallery */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-bold mb-8 text-foreground">Our Community in Action</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                '/lovable-uploads/school-bus-certification.jpeg',
                '/lovable-uploads/biss-book.jpeg',
                '/lovable-uploads/uniford-edutech-fair.png',
                '/lovable-uploads/uniford-flags.png',
                '/lovable-uploads/9487df78-6cfe-43c2-a1e9-9bffe95059c9.png',
                '/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png'
              ].map((img, index) => (
                <div 
                  key={index} 
                  className="aspect-square rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <img 
                    src={img} 
                    alt={`Community ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-3xl p-12">
            <Globe className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h3 className="text-3xl font-bold mb-4 text-foreground">Ready to Make a Difference?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of educators, leaders, and changemakers who are transforming education across the nation.
            </p>
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => window.location.href = 'mailto:info@uniford.org?subject=Get Involved Inquiry'}
            >
              <Mail className="h-5 w-5 mr-2" />
              Contact Us Today
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GetInvolved;
