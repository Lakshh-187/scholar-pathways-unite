
import React from 'react';
import {
  BadgeCheck,
  BookOpen,
  Briefcase,
  Building,
  Clock,
  Compass,
  FileCheck,
  GraduationCap,
  Layers,
  Lightbulb,
  LinkIcon,
  Medal,
  Network,
  Rocket,
  ScrollText,
  Shield,
  Sparkles,
  Star,
  Target,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const IDCardBenefits = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-unifor-light-purple text-unifor-dark-purple mb-4">SCHOLAR ID BENEFITS</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unlocking a World of Opportunities</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Your Scholar ID Card is more than just an identification - it's your gateway to a comprehensive ecosystem of resources, platforms, and opportunities.
          </p>
        </div>

        <Tabs defaultValue="rpo" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="rpo">RPO Model</TabsTrigger>
            <TabsTrigger value="programs">Programs</TabsTrigger>
            <TabsTrigger value="platforms">Platforms</TabsTrigger>
            <TabsTrigger value="profile">Profile Benefits</TabsTrigger>
          </TabsList>

          {/* RPO Model Tab */}
          <TabsContent value="rpo" className="animate-fade-in space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl text-unifor-dark-purple font-bold mb-4 flex items-center">
                <Compass className="h-6 w-6 mr-2 text-unifor-purple" />
                The RPO Model Explained
              </h3>
              <p className="text-gray-600 mb-6">
                Uniford's exclusive RPO Model (Resources, Platforms, Opportunities) creates a comprehensive ecosystem for student development and success.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <BookOpen className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Premium learning materials</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Industry expert mentorship</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Official curriculum and guides</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <Layers className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Project Expo platforms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Internship portals & dashboards</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Uni-Pitch showcase system</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-orange-500">
                  <CardHeader className="pb-2">
                    <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-2">
                      <Rocket className="h-6 w-6 text-orange-600" />
                    </div>
                    <CardTitle className="text-xl">Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Career referrals via THA</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>AI-matched opportunities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <BadgeCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span>Leadership & initiative roles</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="bg-gradient-to-r from-unifor-light-purple to-unifor-purple/30 p-6 rounded-xl">
              <h4 className="text-xl font-semibold text-unifor-dark-purple mb-3">How the RPO Model Works Together</h4>
              <p className="text-gray-700">
                Your Scholar ID gives you complete access to all three pillars, creating a seamless journey from learning to performing to achieving real-world success. This integrated approach is what makes Uniford Scholars stand out in the competitive landscape.
              </p>
            </div>
          </TabsContent>

          {/* Programs Tab */}
          <TabsContent value="programs" className="animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl text-unifor-dark-purple font-bold mb-4 flex items-center">
                <Target className="h-6 w-6 mr-2 text-unifor-purple" />
                Exclusive Programs Access
              </h3>
              <p className="text-gray-600 mb-8">
                Your Scholar ID Card opens doors to specialized programs designed to enhance different aspects of your professional journey.
              </p>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-500">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Briefcase className="h-5 w-5 mr-2 text-blue-600" />
                        Campus to Corporate Program
                      </CardTitle>
                      <CardDescription>For Management & Engineering Students</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Shield className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium">Guaranteed Internships</h5>
                          <p className="text-sm text-gray-600">Secure quality internships without traditional barriers</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Medal className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium">Project Expo</h5>
                          <p className="text-sm text-gray-600">Showcase your work to industry partners and get recognized</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Building className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium">Career Opportunities</h5>
                          <p className="text-sm text-gray-600">Directly connect with hiring partners through CAF</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline">Learn More</Button>
                    </CardFooter>
                  </Card>

                  <Card className="hover:shadow-lg transition-all duration-300 border-t-4 border-t-emerald-500">
                    <CardHeader>
                      <CardTitle className="flex items-center text-xl">
                        <Sparkles className="h-5 w-5 mr-2 text-emerald-600" />
                        Frontliner Program
                      </CardTitle>
                      <CardDescription>For Entrepreneurs & Social Innovators</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Lightbulb className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium">Initiative Opportunities</h5>
                          <p className="text-sm text-gray-600">Lead campaigns, projects, and social initiatives</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium">Leadership Roles</h5>
                          <p className="text-sm text-gray-600">Develop and showcase leadership skills through real projects</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <ScrollText className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium">Publishing Opportunities</h5>
                          <p className="text-sm text-gray-600">Share your expertise through official publications</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline">Learn More</Button>
                    </CardFooter>
                  </Card>
                </div>

                <div className="bg-unifor-light-purple/20 p-5 rounded-lg">
                  <h4 className="text-lg font-semibold text-unifor-dark-purple mb-2 flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Time-Saving Advantage
                  </h4>
                  <p className="text-gray-700">
                    Instead of applying separately for each program, your Scholar ID serves as a universal access pass, streamlining the entire process and saving you valuable time.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Platforms Tab */}
          <TabsContent value="platforms" className="animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl text-unifor-dark-purple font-bold mb-4 flex items-center">
                <LinkIcon className="h-6 w-6 mr-2 text-unifor-purple" />
                Connected Platforms Ecosystem
              </h3>
              <p className="text-gray-600 mb-8">
                Your Scholar ID Card connects you to a comprehensive ecosystem of platforms designed to showcase your skills and accelerate your growth.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-white to-blue-50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                      <FileCheck className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle>Uni-Pitch</CardTitle>
                    <CardDescription>Showcase your achievements</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Create portfolio-style presentations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Present to industry evaluators</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Earn verified credentials</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white to-purple-50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
                      <GraduationCap className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle>Project Expo</CardTitle>
                    <CardDescription>Demonstrate practical skills</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Showcase problem-solving projects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Get recognized by companies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Build credible portfolio pieces</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-white to-emerald-50 hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-2">
                      <Network className="h-6 w-6 text-emerald-600" />
                    </div>
                    <CardTitle>Talent Hunt Alliance</CardTitle>
                    <CardDescription>Connect with opportunities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Get profile screening & referrals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Apply through CAF system</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                        <span>Connect with hiring partners</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8 p-5 border border-dashed border-unifor-purple rounded-lg bg-unifor-light-purple/10">
                <h4 className="text-lg font-semibold text-unifor-dark-purple mb-2">The Uniford Advantage</h4>
                <p className="text-gray-700">
                  All platforms are seamlessly integrated, allowing your achievements in one area to strengthen your profile across the entire ecosystem. This interconnected approach creates a comprehensive portfolio that truly showcases your abilities.
                </p>
              </div>
            </div>
          </TabsContent>

          {/* Profile Benefits Tab */}
          <TabsContent value="profile" className="animate-fade-in">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl text-unifor-dark-purple font-bold mb-4 flex items-center">
                <Badge className="h-6 w-6 mr-2 text-unifor-purple" />
                Profile Enhancement Benefits
              </h3>
              <p className="text-gray-600 mb-8">
                Your Scholar ID Card offers unique advantages that elevate your profile and make you stand out to potential employers and opportunities.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2 flex items-center">
                      <BadgeCheck className="h-5 w-5 mr-2" />
                      Verified Scholar Status
                    </h4>
                    <p className="text-gray-700 mb-3">
                      Complete profile verification to earn the prestigious "Verified Scholar" badge that signals quality to employers.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                        <BadgeCheck className="h-3 w-3 mr-1" /> Verified Scholar
                      </Badge>
                      <span>Adds credibility to your applications</span>
                    </div>
                  </div>

                  <div className="bg-emerald-50 p-5 rounded-lg border-l-4 border-emerald-500">
                    <h4 className="text-lg font-semibold text-emerald-800 mb-2 flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      AI Profile Screening
                    </h4>
                    <p className="text-gray-700">
                      Scholar profiles receive advanced AI screening that matches you with relevant opportunities based on your demonstrated skills and interests.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 h-full">
                  <h4 className="text-lg font-semibold text-purple-800 mb-4 flex items-center">
                    <Rocket className="h-5 w-5 mr-2" />
                    Career Development Pathway
                  </h4>
                  
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-1 bg-purple-200 rounded-full"></div>
                    
                    <div className="space-y-6">
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center border-2 border-white z-10">
                          <span className="text-purple-800 font-bold">1</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-purple-800">Profile Creation</h5>
                          <p className="text-sm text-gray-600">Complete your comprehensive profile</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center border-2 border-white z-10">
                          <span className="text-purple-800 font-bold">2</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-purple-800">Skill Demonstration</h5>
                          <p className="text-sm text-gray-600">Build portfolio through projects and internships</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center border-2 border-white z-10">
                          <span className="text-purple-800 font-bold">3</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-purple-800">Verification</h5>
                          <p className="text-sm text-gray-600">Earn badges and credentials based on performance</p>
                        </div>
                      </div>
                      
                      <div className="relative pl-12">
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center border-2 border-white z-10">
                          <span className="text-purple-800 font-bold">4</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-purple-800">Opportunities</h5>
                          <p className="text-sm text-gray-600">Receive tailored referrals and opportunities</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button className="bg-unifor-purple hover:bg-unifor-dark-purple" size="lg">
            Apply for Scholar ID Card
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IDCardBenefits;
