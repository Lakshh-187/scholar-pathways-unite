import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  Map,
  Info,
  Gift
} from 'lucide-react';

const WeBackedSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const benefits = [
    { icon: BookOpen, title: 'UNSIP Program', desc: 'National Social Internship opportunities' },
    { icon: Award, title: 'Digital Badges', desc: 'Official verification and credentials' },
    { icon: Lightbulb, title: 'Uni-Pitch', desc: 'Innovation platform for ideas' },
    { icon: Trophy, title: 'Competitions', desc: 'Academic and skill competitions' },
    { icon: GraduationCap, title: 'Elite Programs', desc: 'Exclusive educational initiatives' },
    { icon: Globe, title: 'Global Network', desc: 'Worldwide opportunities access' }
  ];

  const milestones = [
    { number: '2,500+', label: 'Internships Secured', icon: Briefcase },
    { number: '1,200+', label: 'Scholarships Awarded', icon: Award },
    { number: '800+', label: 'Research Projects', icon: BookOpen },
    { number: '25+', label: 'Countries Reached', icon: Globe }
  ];

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-red-50 via-white to-yellow-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-50 opacity-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
              <Badge className="bg-red-100 text-red-700 px-6 py-3 mb-8 text-lg font-bold shadow-lg">
                <Shield className="h-5 w-5 mr-2" />
                WE BACKED INITIATIVE
              </Badge>
              <h2 className="text-5xl md:text-7xl font-bold text-red-900 mb-8 tracking-tight">
                <span className="text-yellow-600">UNCIF</span> We Backed
              </h2>
              <p className="text-2xl md:text-3xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-12">
                <span className="font-bold text-red-900">Uniford National Council of Institutes & Frontliners</span> - 
                Where we back students by connecting them with platforms, opportunities, and resources to build credibility & global profiles
              </p>
              
              <div className="flex flex-wrap gap-6 justify-center">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-red-600 hover:bg-red-700 text-white text-xl px-10 py-6 rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                      Learn More About UNCIF
                      <Info className="ml-3 h-6 w-6" />
                    </Button>
                  </DialogTrigger>
                </Dialog>
                
                <Button 
                  variant="outline" 
                  className="border-3 border-red-600 text-red-600 hover:bg-red-600 hover:text-white text-xl px-10 py-6 rounded-xl shadow-xl"
                  asChild
                >
                  <a href="https://uncif.uniford.org/" target="_blank" rel="noopener noreferrer">
                    Visit UNCIF Portal
                    <Globe className="ml-3 h-6 w-6" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Main Benefits Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-red-900 mb-8">What UNCIF Candidates Receive</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
                      <CardContent className="p-6 text-center">
                        <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <benefit.icon className="h-7 w-7 text-red-600" />
                        </div>
                        <h4 className="text-lg font-bold text-red-900 mb-2">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-red-900 to-red-800 rounded-3xl p-12 text-white shadow-2xl">
                  <div className="text-center mb-8">
                    <Network className="h-20 w-20 text-yellow-300 mx-auto mb-6" />
                    <h3 className="text-3xl font-bold mb-4">Talent Hunt Alliance</h3>
                    <p className="text-red-100 text-lg leading-relaxed">
                      Verified candidates connect with worldwide opportunities through strategic referrals & recommendations
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="text-center p-4 bg-red-800/50 rounded-xl">
                        <milestone.icon className="h-8 w-8 text-yellow-300 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-yellow-300">{milestone.number}</div>
                        <div className="text-red-100 text-sm">{milestone.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-yellow-400 rounded-full animate-pulse flex items-center justify-center">
                  <Star className="h-6 w-6 text-red-900" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-red-600 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-white rounded-3xl shadow-2xl p-12 mb-16">
              <div className="text-center mb-12">
                <h3 className="text-4xl font-bold text-red-900 mb-6">Self-Initiated Excellence</h3>
                <p className="text-xl text-gray-700 max-w-4xl mx-auto">
                  Most opportunities within UNCIF are self-initiated, empowering candidates to take charge of their academic and professional journey
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Rocket className="h-10 w-10 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold text-red-900 mb-4">Initiative Leadership</h4>
                  <p className="text-gray-600">Lead your own projects with UNCIF backing and support</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Target className="h-10 w-10 text-yellow-600" />
                  </div>
                  <h4 className="text-xl font-bold text-red-900 mb-4">Goal Achievement</h4>
                  <p className="text-gray-600">Set and achieve ambitious goals with strategic guidance</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="h-10 w-10 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold text-red-900 mb-4">Growth Acceleration</h4>
                  <p className="text-gray-600">Accelerate professional and academic growth through self-driven efforts</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Ready to Join UNCIF?</h3>
                <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
                  To become a member of UNCIF, apply for your official ID card and unlock access to worldwide opportunities
                </p>
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-red-900 font-bold text-lg px-8 py-4 rounded-lg shadow-xl">
                  Apply for ID Card
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Information Modal */}
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-red-900 text-center mb-6">
            <Shield className="h-8 w-8 inline mr-3" />
            UNCIF - Complete Overview
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-8">
          {/* Mission */}
          <div className="bg-red-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <Heart className="h-6 w-6 mr-3" />
              Our Mission
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Uniford National Council of Institutes & Frontliners (UNCIF)</strong> is dedicated to backing students by connecting them with platforms, opportunities, and resources. We empower candidates to build credibility and global profiles through excellence in education and self-initiated growth.
            </p>
          </div>

          {/* What Candidates Get */}
          <div>
            <h3 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
              <Gift className="h-6 w-6 mr-3" />
              What UNCIF Candidates Receive
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <BookOpen className="h-8 w-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-blue-900">UNSIP</h4>
                <p className="text-sm text-gray-600">National Social Internship Program</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <Award className="h-8 w-8 text-yellow-600 mb-3" />
                <h4 className="font-bold text-yellow-900">Digital Badges</h4>
                <p className="text-sm text-gray-600">Official verification credentials</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <Lightbulb className="h-8 w-8 text-purple-600 mb-3" />
                <h4 className="font-bold text-purple-900">Uni-Pitch</h4>
                <p className="text-sm text-gray-600">Innovation platform for ideas</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <GraduationCap className="h-8 w-8 text-green-600 mb-3" />
                <h4 className="font-bold text-green-900">Elite Programs</h4>
                <p className="text-sm text-gray-600">Exclusive educational initiatives</p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <Trophy className="h-8 w-8 text-indigo-600 mb-3" />
                <h4 className="font-bold text-indigo-900">Competitions</h4>
                <p className="text-sm text-gray-600">Academic and skill competitions</p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <Globe className="h-8 w-8 text-red-600 mb-3" />
                <h4 className="font-bold text-red-900">Global Network</h4>
                <p className="text-sm text-gray-600">Worldwide opportunities access</p>
              </div>
            </div>
          </div>

          {/* Talent Hunt Alliance */}
          <div className="bg-gradient-to-r from-red-900 to-red-800 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4 flex items-center">
              <Network className="h-6 w-6 mr-3" />
              Talent Hunt Alliance (THA)
            </h3>
            <p className="text-lg text-red-100 mb-6">
              Our Talent Hunt Alliance helps verified candidates connect with worldwide opportunities through strategic referrals and recommendations.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-yellow-300 mb-3">Opportunities Include:</h4>
                <ul className="space-y-2 text-red-100">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Internships</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Scholarships</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Research Projects</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Academic Invitations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-yellow-300 mb-3">Additional Benefits:</h4>
                <ul className="space-y-2 text-red-100">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Career Placements</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Research Grants</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Featured Recognition</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-400" />Global Networking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Self-Initiated Nature */}
          <div className="bg-yellow-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <Rocket className="h-6 w-6 mr-3" />
              Self-Initiated Excellence
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Most opportunities within UNCIF are self-initiated, empowering candidates to take charge of their academic and professional journey through proactive engagement.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <Target className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-bold text-red-900">Initiative Leadership</h4>
              </div>
              <div className="text-center">
                <TrendingUp className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-bold text-red-900">Goal Achievement</h4>
              </div>
              <div className="text-center">
                <Star className="h-12 w-12 text-yellow-600 mx-auto mb-2" />
                <h4 className="font-bold text-red-900">Growth Acceleration</h4>
              </div>
            </div>
          </div>

          {/* Membership */}
          <div className="bg-green-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-red-900 mb-4 flex items-center">
              <Users className="h-6 w-6 mr-3" />
              Becoming a Member
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              To become a member of UNCIF, candidates must apply for an official ID card. This serves as verification and grants access to all UNCIF programs and opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-red-600 hover:bg-red-700 text-white">
                Apply for ID Card
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white" asChild>
                <a href="https://uncif.uniford.org/" target="_blank" rel="noopener noreferrer">
                  Visit UNCIF Portal
                  <Globe className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </>
  );
};

export default WeBackedSection;