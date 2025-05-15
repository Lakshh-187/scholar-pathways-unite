
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Calendar, Rocket, GraduationCap, FileCheck, Award, Clock, Briefcase, Megaphone, Landmark, Star, Link } from 'lucide-react';

const ScholarRoadmap = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge className="bg-unifor-light-purple text-unifor-purple px-4 py-1 mb-4">
            ROADMAP
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-unifor-dark-purple">
            🛤️ Scholar Roadmap to Build a Credible Portfolio
          </h2>
          <p className="text-gray-600 mb-8">
            Follow this structured pathway to develop a strong profile for evaluation and career opportunities
          </p>
        </div>

        {/* Seasonal Timeline Overview */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-unifor-dark-purple">Seasonal Timeline Overview</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Winter Period Card */}
            <Card className="border-l-4 border-blue-500 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold">Winter Period</h4>
                </div>
                <p className="text-gray-600 italic mb-4">September – December</p>
                
                <div className="space-y-4 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium">🔓 Application Open</h5>
                      <p className="text-sm text-gray-600">September – October</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium">📬 Submission</h5>
                      <p className="text-sm text-gray-600">November – December</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium">🔍 Evaluation</h5>
                      <p className="text-sm text-gray-600">December</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                    <Link className="mr-2 h-4 w-4" />
                    Apply for Winter Cycle
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Summer Period Card */}
            <Card className="border-l-4 border-amber-500 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-amber-100 text-amber-500">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold">Summer Period</h4>
                </div>
                <p className="text-gray-600 italic mb-4">February – June</p>
                
                <div className="space-y-4 mt-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <div>
                      <h5 className="font-medium">🔓 Application Open</h5>
                      <p className="text-sm text-gray-600">February – March</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <div>
                      <h5 className="font-medium">📬 Submission</h5>
                      <p className="text-sm text-gray-600">April – May</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div>
                      <h5 className="font-medium">🔍 Evaluation</h5>
                      <p className="text-sm text-gray-600">June</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-2 border-amber-500 text-amber-600 hover:bg-amber-50">
                    <Link className="mr-2 h-4 w-4" />
                    Apply for Summer Cycle
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Key Components for Portfolio Building */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-unifor-dark-purple">Key Components for Portfolio Building</h3>
          
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-1/3">Component</TableHead>
                    <TableHead>Purpose</TableHead>
                    <TableHead className="text-right w-[100px]">Apply</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-unifor-purple" />
                        <span>🎯 Internship</span>
                      </div>
                    </TableCell>
                    <TableCell>Gain real-world experience and skills</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Megaphone className="h-5 w-5 text-unifor-purple" />
                        <span>🎤 Uni-Pitch</span>
                      </div>
                    </TableCell>
                    <TableCell>Pitch innovations to panels and build credibility</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Landmark className="h-5 w-5 text-unifor-purple" />
                        <span>🏛️ Pitchburg</span>
                      </div>
                    </TableCell>
                    <TableCell>Institute-level platform for showcasing projects</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Rocket className="h-5 w-5 text-unifor-purple" />
                        <span>🧪 Project Expo</span>
                      </div>
                    </TableCell>
                    <TableCell>Display projects for recognition and feedback</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-unifor-purple" />
                        <span>✅ Verified Badge</span>
                      </div>
                    </TableCell>
                    <TableCell>Adds authenticity and unlocks elite opportunities</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-5 w-5 text-unifor-purple" />
                        <span>🎓 Programs</span>
                      </div>
                    </TableCell>
                    <TableCell>Skill-building and development initiatives</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <FileCheck className="h-5 w-5 text-unifor-purple" />
                        <span>📑 Annual Report</span>
                      </div>
                    </TableCell>
                    <TableCell>Compile activities and achievements</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-unifor-purple" />
                        <span>🏆 YLC (Youth Leadership Council)</span>
                      </div>
                    </TableCell>
                    <TableCell>Leadership roles and competitions</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" className="text-unifor-purple hover:text-unifor-dark-purple hover:bg-unifor-light-purple/20">
                        <Link className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </motion.div>

        {/* How It Works (Seasonal Flow) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-unifor-dark-purple">How It Works (Seasonal Flow)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Summer Cycle Card */}
            <Card className="overflow-hidden bg-gradient-to-br from-amber-50 to-white border border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-amber-100 text-amber-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold">Summer Cycle</h4>
                  <Badge className="ml-auto bg-amber-100 text-amber-600 hover:bg-amber-200">Feb – June</Badge>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div className="relative pl-8 pb-6 border-l-2 border-amber-200">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-300"></div>
                    <h5 className="font-semibold text-amber-700 mb-2">Feb–Mar: Application Phase</h5>
                    <p className="text-gray-600">Apply for internships, Uni-Pitch, YLC, programs; enroll in Project Expo & Pitchburg</p>
                    <Button variant="outline" size="sm" className="mt-2 border-amber-500 text-amber-600 hover:bg-amber-50">
                      <Calendar className="mr-2 h-4 w-4" />
                      Apply Now
                    </Button>
                  </div>
                  
                  <div className="relative pl-8 pb-6 border-l-2 border-amber-200">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-300"></div>
                    <h5 className="font-semibold text-amber-700 mb-2">Apr–May: Participation Phase</h5>
                    <p className="text-gray-600">Participate and submit projects, reports, annual progress; prepare for Verified Badge</p>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-amber-300"></div>
                    <h5 className="font-semibold text-amber-700 mb-2">June: Evaluation Phase</h5>
                    <p className="text-gray-600">Evaluation by Talent Hunt Alliance; Profile screening, LORs, recommendations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Winter Cycle Card */}
            <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-white border border-blue-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-full bg-blue-100 text-blue-500">
                    <Clock className="h-6 w-6" />
                  </div>
                  <h4 className="text-xl font-bold">Winter Cycle</h4>
                  <Badge className="ml-auto bg-blue-100 text-blue-600 hover:bg-blue-200">Sept – Dec</Badge>
                </div>
                
                <div className="space-y-6 mt-6">
                  <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-300"></div>
                    <h5 className="font-semibold text-blue-700 mb-2">Sept–Oct: Application Phase</h5>
                    <p className="text-gray-600">Applications open; join new programs and events</p>
                    <Button variant="outline" size="sm" className="mt-2 border-blue-500 text-blue-600 hover:bg-blue-50">
                      <Calendar className="mr-2 h-4 w-4" />
                      Apply Now
                    </Button>
                  </div>
                  
                  <div className="relative pl-8 pb-6 border-l-2 border-blue-200">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-300"></div>
                    <h5 className="font-semibold text-blue-700 mb-2">Nov–Dec: Submission Phase</h5>
                    <p className="text-gray-600">Submit projects and reports; get shortlisted for Verified Badge</p>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-300"></div>
                    <h5 className="font-semibold text-blue-700 mb-2">December: Evaluation Phase</h5>
                    <p className="text-gray-600">Profile screening round 2; career placement or next-level invitations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ScholarRoadmap;
