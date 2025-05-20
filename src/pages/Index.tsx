
import React from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { 
  ArrowRight, 
  Award, 
  Building, 
  DollarSign, 
  GraduationCap, 
  Globe, 
  Heart, 
  Rocket, 
  Users,
  Milestone,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-white text-unifor-dark light-purple  px-4 py-1.5">
                TRANSFORMING EDUCATION
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold white ">
                Transforming Students & Institutes Through <span className="text-yellow-300">CSR Grants</span>
              </h1>
              <p className="text-xl text-gray-200">
                Building a future where quality education is accessible to all through 
                alumni donations, modern AI platforms, and zero-fee opportunities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/apply">
                  <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 text-lg px-6 py-6">
                    Apply Now
                  </Button>
                </Link>
                <Link to="/programs">
                  <Button variant="outline" className="border-white text-white :bg-white/10 text-lg px-6 py-6">
                    Explore Programs
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-400/20 rounded-full blur-xl"></div>
              <div className="relative z-10 bg-white p-4 rounded-xl shadow-2xl">
                <img 
                  src="https://i.ibb.co/Lzm5hQPn/a-professional-photo-of-a-young-woman-wearing-a-un-MYMPk0-FYS9u-Ryz-X-ksf-Di-Q-rz2-Fq-R4s-Qgm-Tdu5-H.jpg" 
                  alt="Students at Uniford"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              OUR CORE VALUES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Drives Our Educational Transformation
            </h2>
            <p className="text-gray-600 text-lg">
              Our mission is centered around six core principles that guide all our initiatives and programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8 text-blue-600" />,
                title: "International Standards",
                description: "Bringing global educational standards to local institutions through proven frameworks and partnerships."
              },
              {
                icon: <DollarSign className="h-8 w-8 text-green-600" />,
                title: "Affordability",
                description: "Making quality education accessible without financial barriers through CSR funding and donations."
              },
              {
                icon: <Users className="h-8 w-8 text-purple-600" />,
                title: "Connect & Aware",
                description: "Building bridges between students, institutions, and industry to create meaningful opportunities."
              },
              {
                icon: <Heart className="h-8 w-8 text-red-600" />,
                title: "Life Impact",
                description: "Creating transformative educational experiences that change lives and communities."
              },
              {
                icon: <Globe className="h-8 w-8 text-teal-600" />,
                title: "International Outlook",
                description: "Fostering a global perspective through cross-border collaborations and international recognition."
              },
              {
                icon: <GraduationCap className="h-8 w-8 text-amber-600" />,
                title: "Education Centric",
                description: "Putting quality education at the center of everything we do, prioritizing learning outcomes."
              }
            ].map((value, index) => (
              <Card key={index} className="border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="h-16 w-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Approach */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                OUR APPROACH
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                How We Transform Educational Ecosystems
              </h2>
              <p className="text-gray-600 mb-6">
                We believe in a comprehensive transformation that addresses both student potential and institutional capabilities through our unique approach.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-unifor-light-purple rounded-full flex items-center justify-center">
                    <Rocket className="h-6 w-6 text-unifor-dark-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Students Transformation</h3>
                    <p className="text-gray-600">
                      We empower students with practical skills, real-world exposure, and international opportunities that traditional education often misses.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-unifor-light-purple rounded-full flex items-center justify-center">
                    <Building className="h-6 w-6 text-unifor-dark-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Institutes Transformation</h3>
                    <p className="text-gray-600">
                      We help institutions reach international standards through CSR grants, infrastructure upgrades, and cutting-edge curriculum integration.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 bg-unifor-light-purple rounded-full flex items-center justify-center">
                    <Cpu className="h-6 w-6 text-unifor-dark-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">AI-Powered Platforms</h3>
                    <p className="text-gray-600">
                      Our modern AI portals connect resources, opportunities, and people across the educational ecosystem for maximum impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://i.ibb.co/d48n7Y5n/a-photo-of-a-spacious-school-auditorium-with-a-bri-VH1z-VAR4-Teu-Akjbdzzb2-Cg-Nx5-JNYwx-RLy-XAUu7-Cb.jpg" 
                  alt="Educational Transformation"
                  className="w-full h-auto"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              OUR PROGRAMS
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flagship Initiatives Driving Change
            </h2>
            <p className="text-gray-600 text-lg">
              Explore our diverse programs designed to transform education and create opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "ID Card Program",
                description: "Official scholar recognition with verified credentials and exclusive benefits.",
                link: "/id-card",
                color: "bg-gradient-to-r from-blue-500 to-purple-600"
              },
              {
                title: "Uni-Pitch",
                description: "Platform for students to pitch innovations and ideas to industry experts.",
                link: "/uni-pitch",
                color: "bg-gradient-to-r from-green-500 to-teal-600"
              },
              {
                title: "UIRAD",
                description: "Research, analysis and development program connecting academia with industry.",
                link: "/uirad",
                color: "bg-gradient-to-r from-orange-500 to-red-600"
              },
              {
                title: "Talent Hunt Alliance",
                description: "Network of companies seeking exceptional talent from our scholar pool.",
                link: "/talent-hunt-alliance",
                color: "bg-gradient-to-r from-purple-500 to-pink-600"
              },
              {
                title: "Social Internship",
                description: "Impact-focused internships that develop skills while serving communities.",
                link: "/social-internship",
                color: "bg-gradient-to-r from-yellow-500 to-amber-600"
              },
              {
                title: "Backed By Uniford",
                description: "Institute transformation program bringing international standards to campuses.",
                link: "/backed-by-uniford",
                color: "bg-gradient-to-r from-teal-500 to-cyan-600"
              }
            ].map((program, index) => (
              <Link key={index} to={program.link} className="group">
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className={`h-3 w-full ${program.color}`}></div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-unifor-purple transition-colors">{program.title}</h3>
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div className="flex items-center text-unifor-purple font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link to="/programs">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple px-8 py-6 text-lg">
                View All Programs <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Milestone Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              OUR MILESTONES
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact & Achievements
            </h2>
            <p className="text-gray-600 text-lg">
              Tracking our progress in transforming education across the country.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "1000+",
                label: "Institutes Backed",
                description: "Educational institutions transformed through our programs",
                icon: <Building className="h-6 w-6 text-blue-600" />
              },
              {
                number: "50,000+",
                label: "Students Impacted",
                description: "Lives changed through opportunities and resources",
                icon: <Users className="h-6 w-6 text-green-600" />
              },
              {
                number: "₹20Cr+",
                label: "CSR Grants Facilitated",
                description: "Funds directed to educational transformation",
                icon: <DollarSign className="h-6 w-6 text-amber-600" />
              },
              {
                number: "25+",
                label: "States Reached",
                description: "Geographic spread across the country",
                icon: <Globe className="h-6 w-6 text-purple-600" />
              }
            ].map((milestone, index) => (
              <Card key={index} className="text-center border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    {milestone.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-unifor-dark-purple mb-2">{milestone.number}</h3>
                  <h4 className="text-lg font-semibold mb-2">{milestone.label}</h4>
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-unifor-dark-purple to-purple-900 text-white rounded-2xl overflow-hidden shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <Milestone className="h-8 w-8 text-yellow-300" />
                  <h2 className="text-2xl md:text-3xl font-bold">Vision 2030</h2>
                </div>
                
                <p className="text-lg text-gray-200 mb-6">
                  Our ambitious roadmap to transform education across India, making quality learning accessible to all regardless of financial constraints.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Building className="h-4 w-4 text-white" />
                    </div>
                    <span>10,000+ institutes transformed to international standards</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <span>1 million+ students with access to quality resources</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                      <Globe className="h-4 w-4 text-white" />
                    </div>
                    <span>Present in all states and union territories</span>
                  </div>
                </div>
                
                <Link to="/we-invite">
                  <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100">
                    Join Our Mission
                  </Button>
                </Link>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://i.ibb.co/Z6TrqkS0/a-confrence-hall-having-three-young-proffesors-con-TGMWs3-Ma-TPKpk-L6-Qug-Ph-Og-cfv9yv2-OQNC9-UNZ1-G.jpg" 
                  alt="Vision 2030" 
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1523240795612-9a054b0db644";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Be Part of the Transformation?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a student looking for opportunities, an institute seeking transformation, or a company wanting to join our alliance, we have a pathway for you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/apply">
                <Button className="bg-unifor-purple hover:bg-unifor-dark-purple px-6 py-6 text-lg">
                  Apply as Scholar
                </Button>
              </Link>
              <Link to="/backed-by-uniford">
                <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple px-6 py-6 text-lg">
                  Institute Partnership
                </Button>
              </Link>
              <Link to="/talent-hunt-alliance">
                <Button variant="outline" className="border-unifor-purple text-unifor-purple hover:bg-unifor-light-purple px-6 py-6 text-lg">
                  Join Talent Alliance
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
