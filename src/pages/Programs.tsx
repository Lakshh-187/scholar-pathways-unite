import { Briefcase, GraduationCap, Lightbulb, Trophy, Users, Rocket, BookOpen, Target, Badge as BadgeIcon, Globe, Award, User, Code, Palette, Store, Lock, ArrowRight, CheckCircle, Star, TrendingUp, Heart, Building, DollarSign, Medal, UserCheck } from "lucide-react";
import NavBar from '@/components/NavBar';
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import ProgramJourney from "@/components/ProgramJourney";
import ProgramPortfolioGuide from "@/components/ProgramPortfolioGuide";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Programs = () => {
  const campusToCorporateFeatures = [
    "Industry internships with partner companies",
    "Project expo to showcase innovations", 
    "Uni-pitch for presentation skills",
    "Cohort-based learning with peers",
    "Profile verification for opportunities",
  ];
  
  const frontlinerFeatures = [
    "Leadership development training",
    "Entrepreneurship support and mentorship",
    "Innovation grants and incubation",
    "Youth parliament participation",
    "Campaign leadership opportunities",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-20">
        {/* Programs Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-unifor-dark to-black text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="outline" className="bg-unifor-light-purple/20 text-unifor-light-purple border-unifor-light-purple/30 px-4 py-1 mb-6">
                OUR PROGRAMS
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transform Your Potential Into Success</h1>
              <p className="text-xl text-gray-300 mb-8">
                Our specialized programs provide the resources, platform, and opportunities to help you excel in your career journey.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Instructions Guide */}
        <ProgramPortfolioGuide />
        
        {/* Uniford Badge Program */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                UNIFORD BADGE PROGRAM
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
                Uniford Badge Program
              </h2>
              <p className="text-lg text-gray-600">
                Organization offers Badge to Students with a personal portfolio website and tasks to perform and complete your Profile
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              {/* Three Phases - Enhanced Design */}
              <div className="mb-20">
                <h3 className="text-2xl font-bold text-center mb-12 text-unifor-dark-purple">Three Phase Program</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {/* Phase 1 - Accessible */}
                  <Card className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-unifor-purple relative overflow-hidden bg-gradient-to-br from-white to-unifor-light-purple/10">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-unifor-purple to-unifor-light-purple"></div>
                    <CardHeader className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-unifor-purple to-unifor-light-purple flex items-center justify-center mb-4 shadow-lg">
                        <User className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl text-unifor-dark-purple">Phase 1</CardTitle>
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <Badge className="bg-green-100 text-green-700 border-green-200 w-fit">Available</Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6 font-medium">Create profile in diverse socials than attach in website & Edit Details on Portfolio Website using Guide</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-unifor-purple"></div>
                          <span className="text-sm text-gray-600">Create social media profiles</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-unifor-purple"></div>
                          <span className="text-sm text-gray-600">Link to portfolio website</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-unifor-purple"></div>
                          <span className="text-sm text-gray-600">Follow guided editing process</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-unifor-purple"></div>
                          <span className="text-sm text-gray-600">Complete profile details</span>
                        </li>
                      </ul>
                      <Button className="w-full bg-unifor-purple hover:bg-unifor-dark-purple text-white group-hover:scale-105 transition-transform">
                        Start Phase 1 <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Phase 2 - Restricted */}
                  <Card className="group transition-all duration-500 border-2 border-gray-200 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 opacity-60">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10"></div>
                    <CardHeader className="relative z-20">
                      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-4">
                        <Users className="h-8 w-8 text-gray-500" />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl text-gray-500">Phase 2</CardTitle>
                        <Lock className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <BadgeIcon className="h-4 w-4 text-unifor-purple" />
                        <Badge className="bg-unifor-light-purple text-unifor-purple border-unifor-purple/30">Only For Uniford Scholar</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-20">
                      <p className="text-gray-600 mb-6">Participate, enroll & initiate and attach in portfolio</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Join programs and events</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Enroll in courses</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Initiate projects</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Document participation</span>
                        </li>
                      </ul>
                      <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                        Scholar Access Required <Lock className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Phase 3 - Restricted */}
                  <Card className="group transition-all duration-500 border-2 border-gray-200 relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 opacity-60">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-300"></div>
                    <div className="absolute inset-0 bg-white/50 backdrop-blur-sm z-10"></div>
                    <CardHeader className="relative z-20">
                      <div className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-4">
                        <Code className="h-8 w-8 text-gray-500" />
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <CardTitle className="text-2xl text-gray-500">Phase 3</CardTitle>
                        <Lock className="h-6 w-6 text-gray-400" />
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <BadgeIcon className="h-4 w-4 text-unifor-purple" />
                        <Badge className="bg-unifor-light-purple text-unifor-purple border-unifor-purple/30">Only For Uniford Scholar</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="relative z-20">
                      <p className="text-gray-600 mb-6">Design, develop & create and list on your store & Blog page on portfolio</p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Design creative projects</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Develop solutions</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Create portfolio store</span>
                        </li>
                        <li className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                          <span className="text-sm text-gray-500">Write blog posts</span>
                        </li>
                      </ul>
                      <Button disabled className="w-full bg-gray-300 text-gray-500 cursor-not-allowed">
                        Scholar Access Required <Lock className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Certification Info */}
              <div className="bg-gradient-to-r from-unifor-light-purple/20 to-unifor-purple/20 rounded-2xl p-8 mb-20 text-center">
                <BadgeIcon className="h-16 w-16 text-unifor-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-unifor-dark-purple mb-4">Get Certified & Rewarded</h3>
                <p className="text-lg text-gray-700 mb-6">
                  You have to submit only Phase-1 and you get certification & goodies
                </p>
                <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 text-lg">
                  Start Phase 1
                </Button>
              </div>

              {/* Enhanced Impact on Future Section */}
              <div className="mb-12">
                <h3 className="text-3xl font-bold text-center text-unifor-dark-purple mb-6">Impact on Your Future</h3>
                <div className="bg-gradient-to-r from-unifor-dark-purple/5 to-unifor-purple/5 rounded-3xl p-8 md:p-12 shadow-xl border border-unifor-purple/20">
                  <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-unifor-purple to-unifor-light-purple mb-6 shadow-lg">
                      <TrendingUp className="h-10 w-10 text-white" />
                    </div>
                    <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto mb-8">
                      "Every opportunity whether your marriage, placement, funding, awards, invitation, profile screening, application etc everywhere the only thing matter is how credible & impressive profile you have as more participation more achievements & practical exposure more maturity more opportunity that all a interrelated circle"
                    </p>
                  </div>
                  
                  {/* Visual Flow of Impact */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
                    <div className="text-center group">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Users className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="font-bold text-unifor-dark-purple text-lg mb-2">More Participation</h4>
                      <p className="text-sm text-gray-600">Active engagement in programs, events, and initiatives</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Medal className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="font-bold text-unifor-dark-purple text-lg mb-2">More Achievements</h4>
                      <p className="text-sm text-gray-600">Recognition, awards, and certifications</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Briefcase className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="font-bold text-unifor-dark-purple text-lg mb-2">Practical Exposure</h4>
                      <p className="text-sm text-gray-600">Real-world experience and skill development</p>
                    </div>
                    
                    <div className="text-center group">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                        <Rocket className="h-10 w-10 text-white" />
                      </div>
                      <h4 className="font-bold text-unifor-dark-purple text-lg mb-2">More Opportunities</h4>
                      <p className="text-sm text-gray-600">Endless possibilities and pathways</p>
                    </div>
                  </div>

                  {/* Opportunity Categories */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <Heart className="h-8 w-8 text-red-500 mb-3" />
                      <h5 className="font-semibold text-gray-800 mb-2">Personal Life</h5>
                      <p className="text-sm text-gray-600">Marriage, relationships, social standing</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <Building className="h-8 w-8 text-blue-500 mb-3" />
                      <h5 className="font-semibold text-gray-800 mb-2">Career</h5>
                      <p className="text-sm text-gray-600">Placements, promotions, job opportunities</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <DollarSign className="h-8 w-8 text-green-500 mb-3" />
                      <h5 className="font-semibold text-gray-800 mb-2">Financial</h5>
                      <p className="text-sm text-gray-600">Funding, investments, scholarships</p>
                    </div>
                    
                    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                      <UserCheck className="h-8 w-8 text-purple-500 mb-3" />
                      <h5 className="font-semibold text-gray-800 mb-2">Recognition</h5>
                      <p className="text-sm text-gray-600">Awards, invitations, profile screening</p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="text-center mt-12">
                    <div className="inline-flex items-center gap-2 bg-unifor-purple/10 px-6 py-3 rounded-full mb-4">
                      <Star className="h-5 w-5 text-unifor-purple" />
                      <span className="text-unifor-purple font-semibold">Start Building Your Profile Today</span>
                    </div>
                    <p className="text-gray-600 text-sm">Every step you take in Phase 1 builds toward your future success</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Uniford Scholars Stand Out - NEW SECTION */}
        <section className="py-20 bg-gradient-to-br from-unifor-dark-purple/5 to-unifor-purple/5">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                BREAKING THE CYCLE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-unifor-dark-purple">
                Why Uniford Scholars Stand Out Among Students
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                <span className="font-semibold text-unifor-dark-purple">Traditional Model:</span> Students stuck in textbooks and exam stress with no real opportunities.<br />
                <span className="font-semibold text-unifor-dark-purple">Uniford Model:</span> Students equipped with practical skills, global connections, and unlimited opportunities.
              </p>
              
              {/* Visual Transformation */}
              <div className="grid md:grid-cols-2 gap-8 mb-12 text-left">
                {/* Traditional Model - Left Side */}
                <div className="bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚫</span>
                    Traditional Educational Model
                  </h3>
                  <ul className="space-y-2 text-red-600">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>Limited to classroom learning only</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>No practical industry exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>Exam-focused, not skill-focused</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>No global opportunities or connections</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">❌</span>
                      <span>Graduates with degrees but no experience</span>
                    </li>
                  </ul>
                </div>
                
                {/* Uniford Model - Right Side */}
                <div className="bg-green-50 border-l-4 border-green-400 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    Uniford Scholar Model
                  </h3>
                  <ul className="space-y-2 text-green-600">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Practical exposure through internships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>AI-based Career Fit Analysis (CFA)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Portfolio website & special badge</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Global opportunities through profile screening</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✅</span>
                      <span>Ready-to-work professionals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* The Uniford Advantage */}
            <div className="max-w-6xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-12 text-unifor-dark-purple">
                How Uniford Foundation Transforms Students
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Unconditional Opportunities */}
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-unifor-purple">
                  <div className="w-16 h-16 bg-gradient-to-r from-unifor-purple to-unifor-light-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-unifor-dark-purple">Unconditional Opportunities</h4>
                  <p className="text-gray-600 mb-4">
                    We don't wait for students to be "ready" - we provide platforms and backing immediately, believing every student has potential.
                  </p>
                  <div className="text-sm text-unifor-purple font-medium">
                    🎯 Platform + Backing = Success
                  </div>
                </div>

                {/* Special Badge & Portfolio */}
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-unifor-purple">
                  <div className="w-16 h-16 bg-gradient-to-r from-unifor-purple to-unifor-light-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-unifor-dark-purple">Special Badge + Portfolio</h4>
                  <p className="text-gray-600 mb-4">
                    Every scholar gets a verified badge and professional portfolio website - your digital identity that opens doors globally.
                  </p>
                  <div className="text-sm text-unifor-purple font-medium">
                    🏆 Recognition + Professional Presence
                  </div>
                </div>

                {/* AI-Based CFA */}
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-unifor-purple">
                  <div className="w-16 h-16 bg-gradient-to-r from-unifor-purple to-unifor-light-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-unifor-dark-purple">Modern AI-Based CFA</h4>
                  <p className="text-gray-600 mb-4">
                    Career Fit Analysis using AI technology matches you with perfect internships and opportunities based on your skills and interests.
                  </p>
                  <div className="text-sm text-unifor-purple font-medium">
                    🤖 AI-Powered Career Matching
                  </div>
                </div>

                {/* RPO Model */}
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-unifor-purple">
                  <div className="w-16 h-16 bg-gradient-to-r from-unifor-purple to-unifor-light-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-unifor-dark-purple">RPO Model</h4>
                  <p className="text-gray-600 mb-4">
                    <strong>Resources</strong> to Learn → <strong>Platform</strong> to Perform → <strong>Opportunities</strong> based on Profile
                  </p>
                  <div className="text-sm text-unifor-purple font-medium">
                    📚 → 🎯 → 🚀 Complete Development Cycle
                  </div>
                </div>

                {/* Profile Screening */}
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-unifor-purple">
                  <div className="w-16 h-16 bg-gradient-to-r from-unifor-purple to-unifor-light-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-unifor-dark-purple">Global Profile Screening</h4>
                  <p className="text-gray-600 mb-4">
                    We connect students with worldwide opportunities through referrals, Letters of Recommendation, and profile recommendations.
                  </p>
                  <div className="text-sm text-unifor-purple font-medium">
                    🌍 Global Network + Recommendations
                  </div>
                </div>

                {/* Initiative & Participation */}
                <div className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-unifor-purple">
                  <div className="w-16 h-16 bg-gradient-to-r from-unifor-purple to-unifor-light-purple rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-unifor-dark-purple">Initiative & High Participation</h4>
                  <p className="text-gray-600 mb-4">
                    Every student develops initiatives and participates actively in internships, competitions, and real-world projects.
                  </p>
                  <div className="text-sm text-unifor-purple font-medium">
                    🎯 Active Learning + Real Impact
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="text-center mt-16">
                <div className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white rounded-2xl p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Ready to Break Free from the Traditional Model?
                  </h3>
                  <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                    Join thousands of Uniford Scholars who have transformed their careers through practical exposure, global opportunities, and unconditional support.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a href="https://forms.gle/VJJCWM2wzcZjT8YK8">
                      <Button size="lg" className="bg-white text-unifor-dark-purple hover:bg-gray-100">
                        <Award className="mr-2 h-5 w-5" />
                        Become a Uniford Scholar
                      </Button>
                    </a>
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Explore Programs
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Program Journey */}
        <ProgramJourney />
        
        {/* Campus to Corporate */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  CAMPUS TO CORPORATE
                </Badge>
                <h2 className="section-title">Bridge the Gap Between Academia and Industry</h2>
                <p className="text-gray-600 mb-6">
                  The Campus to Corporate program prepares scholars for professional environments through practical experiences, industry projects, and skill development opportunities.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Industry Internships</h3>
                      <p className="text-sm text-gray-600">Gain hands-on experience with leading companies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center flex-shrink-0">
                      <Rocket className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Project Expo</h3>
                      <p className="text-sm text-gray-600">Showcase your innovative projects to industry experts</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center flex-shrink-0">
                      <Users className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Cohort-Based Learning</h3>
                      <p className="text-sm text-gray-600">Learn with peers and build your professional network</p>
                    </div>
                  </div>
                </div>

                <a href="https://forms.gle/VJJCWM2wzcZjT8YK8">
                  <Button className="primary-btn">Apply for Program</Button>
                </a>

              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProgramCard 
                  title="Internship Program"
                  description="Gain practical experience through structured internships with industry partners."
                  features={["Industry mentorship", "Real-world projects", "Professional feedback", "Portfolio building"]}
                  icon={<Briefcase className="h-8 w-8 text-unifor-purple" />}
                  badgeText="Popular"
                />
                
                <ProgramCard 
                  title="Project Expo"
                  description="Showcase your innovative projects to industry leaders and potential employers."
                  features={["Expert panels", "Innovation funding", "Media coverage", "Networking events"]}
                  icon={<Rocket className="h-8 w-8 text-unifor-purple" />}
                />
                
                <ProgramCard 
                  title="Uni-Pitch"
                  description="Develop and present your ideas in a professional setting with expert guidance."
                  features={["Presentation coaching", "Feedback sessions", "Pitch competitions", "Industry audience"]}
                  icon={<Target className="h-8 w-8 text-unifor-purple" />}
                />
                
                <ProgramCard 
                  title="Industry Cohorts"
                  description="Join specialized learning groups focused on industry-specific skills and knowledge."
                  features={["Peer learning", "Expert sessions", "Collaborative projects", "Industry insights"]}
                  icon={<Users className="h-8 w-8 text-unifor-purple" />}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Frontliner Program */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProgramCard 
                  title="Leadership Development"
                  description="Comprehensive training to develop your leadership skills and abilities."
                  features={["Leadership workshops", "Mentorship", "Case studies", "Leadership challenges"]}
                  icon={<Trophy className="h-8 w-8 text-unifor-purple" />}
                  badgeText="Featured"
                />
                
                <ProgramCard 
                  title="Entrepreneurship"
                  description="Support and resources for scholars interested in launching their own ventures."
                  features={["Business mentoring", "Startup funding", "Pitch training", "Incubation support"]}
                  icon={<Lightbulb className="h-8 w-8 text-unifor-purple" />}
                />
                
                <ProgramCard 
                  title="Innovation Grants"
                  description="Funding opportunities for innovative ideas and projects with social impact."
                  features={["Grant applications", "Project support", "Implementation guidance", "Impact tracking"]}
                  icon={<GraduationCap className="h-8 w-8 text-unifor-purple" />}
                />
                
                <ProgramCard 
                  title="Youth Initiatives"
                  description="Platforms for youth to lead social and community development campaigns."
                  features={["Youth parliament", "Campaign planning", "Community outreach", "Impact assessment"]}
                  icon={<BookOpen className="h-8 w-8 text-unifor-purple" />}
                />
              </div>
              
              <div className="order-1 lg:order-2">
                <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
                  FRONTLINER PROGRAM
                </Badge>
                <h2 className="section-title">Develop Leadership and Innovation Skills</h2>
                <p className="text-gray-600 mb-6">
                  The Frontliner Program is designed for scholars who aspire to lead, innovate, and create impact. It focuses on developing management, leadership, and entrepreneurial skills.
                </p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center flex-shrink-0">
                      <Trophy className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Leadership Development</h3>
                      <p className="text-sm text-gray-600">Comprehensive training and mentorship for future leaders</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center flex-shrink-0">
                      <Lightbulb className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Entrepreneurship Support</h3>
                      <p className="text-sm text-gray-600">Resources and guidance for building successful ventures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-unifor-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium">Youth Initiatives</h3>
                      <p className="text-sm text-gray-600">Platforms for youth to lead social and community development</p>
                    </div>
                  </div>
                </div>
                <a href="https://forms.gle/VJJCWM2wzcZjT8YK8">
                  <Button className="primary-btn">Apply for Program</Button>
                </a>

              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-gradient-to-r from-unifor-dark-purple to-unifor-dark text-white rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Begin Your Scholar Journey Today</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Apply for your scholar ID card and access a world of resources, opportunities, and connections.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="https://forms.gle/VJJCWM2wzcZjT8YK8">
                  <Button
                    size="lg"
                    className="bg-white text-unifor-dark-purple hover:bg-gray-100"
                  >
                    Apply for ID Card
                  </Button>
                </a>
                <Link to="/programs">
                    <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                        Learn More
                    </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
