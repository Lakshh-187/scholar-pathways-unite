import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Award, 
  Building, 
  Globe, 
  GraduationCap, 
  Users,
  Trophy,
  Star,
  Target,
  Lightbulb,
  Shield,
  CheckCircle,
  Heart,
  Rocket,
  BookOpen,
  Network,
  Briefcase,
  TrendingUp,
  Map
} from 'lucide-react';

const UNCIF = () => {
  return (
    <Layout>
      {/* Hero Section - Harvard Inspired */}
      <section className="relative py-24 bg-gradient-to-br from-red-900 via-red-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Badge className="bg-yellow-500 text-red-900 px-6 py-2 mb-6 text-lg font-bold">
              VERITAS • EXCELLENTIA • SOCIETAS
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-yellow-300">UNCIF</span>
            </h1>
            <p className="text-2xl md:text-3xl font-serif mb-4 text-yellow-100">
              Uniford National Council of 
            </p>
            <p className="text-3xl md:text-4xl font-bold mb-8">
              <span className="text-yellow-300">Institutes</span> & <span className="text-red-200">Frontliners</span>
            </p>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed text-gray-200">
              Dedicated to backing students by connecting them with platforms, opportunities, and resources 
              to build credibility and global profiles through excellence in education.
            </p>
            
            <div className="flex flex-wrap gap-6 justify-center">
              <Button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold text-lg px-8 py-4 rounded-lg shadow-xl">
                Become UNCIF Member
                <Shield className="ml-2 h-6 w-6" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-yellow-300 text-yellow-300 hover:bg-yellow-300 hover:text-red-900 font-bold text-lg px-8 py-4 rounded-lg"
                asChild
              >
                <a href="https://uncif.uniford.org/" target="_blank" rel="noopener noreferrer">
                  Visit UNCIF Portal
                  <ArrowRight className="ml-2 h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What is UNCIF Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
                The UNCIF Mission
              </h2>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                A prestigious council dedicated to transforming educational excellence and creating 
                worldwide opportunities for students and institutions.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-red-900">Our Foundation</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  UNCIF operates on the principle that every student deserves access to world-class opportunities. 
                  We bridge the gap between academic potential and real-world success through systematic 
                  backing and strategic connections.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">Platform integration for enhanced visibility</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">Resource allocation and strategic backing</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">Credibility building through verified programs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                    <p className="text-gray-700">Global profile development and networking</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=600&h=400&fit=crop" 
                  alt="UNCIF Excellence"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-red-900 text-white p-6 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-300">500+</div>
                    <div className="text-sm">Members Worldwide</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UNCIF Programs Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-6">
                UNCIF Candidate Benefits
              </h2>
              <p className="text-xl text-gray-700">
                Comprehensive programs designed to elevate student potential and institutional excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* UNSIP */}
              <Card className="border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">UNSIP</h3>
                  <p className="text-gray-600 mb-6">
                    Uniford National Social Internship Program for practical experience and social impact
                  </p>
                  <Link to="/unsip">
                    <Button className="bg-red-600 hover:bg-red-700 text-white">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Badge Program */}
              <Card className="border-2 border-yellow-100 hover:border-yellow-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Digital Badge</h3>
                  <p className="text-gray-600 mb-6">
                    Official UNCIF verification badges for credibility and professional recognition
                  </p>
                  <Link to="/badge-id">
                    <Button className="bg-yellow-600 hover:bg-yellow-700 text-white">
                      Get Badge
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Uni-Pitch */}
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Uni-Pitch</h3>
                  <p className="text-gray-600 mb-6">
                    Innovation platform for presenting ideas and connecting with industry leaders
                  </p>
                  <Link to="/uni-pitch">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Pitch Ideas
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Programs */}
              <Card className="border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Elite Programs</h3>
                  <p className="text-gray-600 mb-6">
                    Exclusive educational programs for skill development and academic excellence
                  </p>
                  <Link to="/programs">
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Explore Programs
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Competitions */}
              <Card className="border-2 border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Competitions</h3>
                  <p className="text-gray-600 mb-6">
                    Academic and innovation competitions for recognition and advancement
                  </p>
                  <Link to="/s700">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Compete Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Global Opportunities */}
              <Card className="border-2 border-indigo-100 hover:border-indigo-300 transition-all duration-300 hover:shadow-xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Globe className="h-8 w-8 text-indigo-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mb-4">Global Network</h3>
                  <p className="text-gray-600 mb-6">
                    Worldwide opportunities through strategic partnerships and referrals
                  </p>
                  <Link to="/career">
                    <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                      Explore Careers
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Hunt Alliance Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-red-100 text-red-700 px-4 py-2 mb-6">
                  TALENT HUNT ALLIANCE
                </Badge>
                <h2 className="text-4xl font-bold text-red-900 mb-6">
                  Connecting Verified Candidates Worldwide
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Our Talent Hunt Alliance (THA) serves as a bridge between verified UNCIF candidates 
                  and global opportunities through strategic referrals and recommendations.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <Briefcase className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900 mb-2">Internship Opportunities</h4>
                      <p className="text-gray-600">Access to premium internships with top global companies</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <GraduationCap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900 mb-2">Scholarship Programs</h4>
                      <p className="text-gray-600">Merit-based scholarships at prestigious institutions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900 mb-2">Research Invitations</h4>
                      <p className="text-gray-600">Collaborative research projects with leading universities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                      <Building className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-red-900 mb-2">Career Placements</h4>
                      <p className="text-gray-600">Direct placement opportunities with partner organizations</p>
                    </div>
                  </div>
                </div>
                
                <Link to="/talent-hunt-alliance">
                  <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                    Join THA Network
                    <Network className="ml-2 h-6 w-6" />
                  </Button>
                </Link>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop" 
                  alt="Global Opportunities"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute top-6 right-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">25+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Self-Initiated Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-red-900 mb-8">
              Self-Initiated Excellence
            </h2>
            <p className="text-xl text-gray-700 mb-12 max-w-4xl mx-auto">
              Most opportunities within UNCIF are self-initiated, empowering candidates to take charge 
              of their academic and professional journey through proactive engagement.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-gradient-to-br from-red-50 to-red-100 border-red-200">
                <CardContent className="p-8 text-center">
                  <Rocket className="h-12 w-12 text-red-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-red-900 mb-4">Initiative Leadership</h3>
                  <p className="text-gray-700">
                    Lead your own projects and initiatives with UNCIF backing and support
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-yellow-200">
                <CardContent className="p-8 text-center">
                  <Target className="h-12 w-12 text-yellow-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-red-900 mb-4">Goal Achievement</h3>
                  <p className="text-gray-700">
                    Set and achieve ambitious goals with strategic guidance and resources
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                <CardContent className="p-8 text-center">
                  <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                  <h3 className="text-xl font-bold text-red-900 mb-4">Growth Acceleration</h3>
                  <p className="text-gray-700">
                    Accelerate your professional and academic growth through self-driven efforts
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* UNCIF Milestones */}
      <section className="py-20 bg-gradient-to-br from-red-900 to-red-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                UNCIF Success Milestones
              </h2>
              <p className="text-xl text-red-100 max-w-4xl mx-auto">
                Our candidates achieve remarkable milestones through dedicated backing and worldwide connections
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-10 w-10 text-red-900" />
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">2,500+</div>
                <div className="text-red-100">Internships Secured</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-red-900" />
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">1,200+</div>
                <div className="text-red-100">Scholarships Awarded</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-10 w-10 text-red-900" />
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">800+</div>
                <div className="text-red-100">Research Projects</div>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-10 w-10 text-red-900" />
                </div>
                <div className="text-3xl font-bold text-yellow-300 mb-2">3,000+</div>
                <div className="text-red-100">Career Placements</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Application */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-12">
              <div className="text-center mb-12">
                <Shield className="h-16 w-16 text-red-600 mx-auto mb-6" />
                <h2 className="text-4xl font-bold text-red-900 mb-6">
                  Become a UNCIF Member
                </h2>
                <p className="text-xl text-gray-700 mb-8">
                  Join the prestigious council and unlock access to worldwide opportunities, 
                  exclusive programs, and the global UNCIF network.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-900 mb-4">Membership Requirements:</h3>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Valid student ID or academic credentials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Commitment to academic excellence</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Active participation in UNCIF programs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-1" />
                    <span className="text-gray-700">Verification through ID card application</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-red-900 mb-4">Member Benefits:</h3>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <span className="text-gray-700">Access to all UNCIF programs</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <span className="text-gray-700">Global opportunity network</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <span className="text-gray-700">Official verification and credentials</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="h-5 w-5 text-yellow-500 mt-1" />
                    <span className="text-gray-700">Priority access to scholarships</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center space-y-6">
                <p className="text-lg text-gray-600 font-medium">
                  To become a member of UNCIF, apply for your official ID card
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link to="/id-card">
                    <Button className="bg-red-600 hover:bg-red-700 text-white text-lg px-8 py-4">
                      Apply for ID Card
                      <ArrowRight className="ml-2 h-6 w-6" />
                    </Button>
                  </Link>
                  <Button 
                    variant="outline" 
                    className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-lg px-8 py-4"
                    asChild
                  >
                    <a href="https://uncif.uniford.org/" target="_blank" rel="noopener noreferrer">
                      Visit UNCIF Portal
                      <Globe className="ml-2 h-6 w-6" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default UNCIF;