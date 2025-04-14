import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Search, 
  Filter, 
  UserCheck, 
  BriefcaseBusiness, 
  Brain,
  BarChart3,
  Layers,
  ArrowUpRight,
  Settings,
  ChevronRight,
  ChevronLeft,
  MoreHorizontal,
  Building,
  Briefcase,
  Rocket,
  Sparkles,
  Clock
} from 'lucide-react';

interface ProfileBase {
  id: number;
  name: string;
  role: string;
  skills: string[];
  score: number;
  status: string;
  matchedWith?: string;
}

const TalentHuntDashboard = () => {
  const [activeTab, setActiveTab] = useState('matched');
  
  const matchedProfiles: ProfileBase[] = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Frontend Developer",
      skills: ["React", "TypeScript", "UI/UX"],
      score: 92,
      matchedWith: "TechFusion Labs",
      status: "matched"
    },
    {
      id: 2,
      name: "Arjun Kapur",
      role: "AI Researcher",
      skills: ["Python", "Machine Learning", "Data Science"],
      score: 89,
      matchedWith: "DataSense AI",
      status: "matched"
    },
    {
      id: 3,
      name: "Rahul Mehta",
      role: "Full Stack Developer",
      skills: ["Node.js", "MongoDB", "React"],
      score: 87,
      matchedWith: "InnovateTech",
      status: "matched"
    },
    {
      id: 4,
      name: "Neha Kapoor",
      role: "Product Designer",
      skills: ["Figma", "UX Research", "Prototyping"],
      score: 90,
      matchedWith: "DesignMasters",
      status: "matched"
    }
  ];
  
  const pendingProfiles: ProfileBase[] = [
    {
      id: 5,
      name: "Vikram Singh",
      role: "Backend Developer",
      skills: ["Java", "Spring Boot", "AWS"],
      score: 84,
      status: "evaluating"
    },
    {
      id: 6,
      name: "Ananya Gupta",
      role: "Data Analyst",
      skills: ["SQL", "Python", "Tableau"],
      score: 82,
      status: "evaluating"
    }
  ];
  
  const alliancePartners = [
    {
      name: "TechFusion Labs",
      type: "Startup",
      lookingFor: ["Frontend", "Backend", "Mobile"],
      openPositions: 3
    },
    {
      name: "DataSense AI",
      type: "Enterprise",
      lookingFor: ["AI", "ML", "Data Science"],
      openPositions: 2
    },
    {
      name: "InnovateTech",
      type: "Venture",
      lookingFor: ["Full Stack", "DevOps"],
      openPositions: 4
    },
    {
      name: "DesignMasters",
      type: "Agency",
      lookingFor: ["UI/UX", "Product Design"],
      openPositions: 1
    }
  ];
  
  const aiMetrics = [
    { name: "Project Quality", weight: 25, icon: <Layers className="h-4 w-4 text-emerald-500" /> },
    { name: "Technical Skills", weight: 20, icon: <BriefcaseBusiness className="h-4 w-4 text-blue-500" /> },
    { name: "Innovation Level", weight: 20, icon: <Sparkles className="h-4 w-4 text-purple-500" /> },
    { name: "Problem Solving", weight: 15, icon: <Brain className="h-4 w-4 text-amber-500" /> },
    { name: "Consistency", weight: 10, icon: <Clock className="h-4 w-4 text-red-500" /> },
    { name: "Growth Potential", weight: 10, icon: <Rocket className="h-4 w-4 text-indigo-500" /> }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            AI-POWERED DASHBOARD
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-white">Talent Hunt Alliance Dashboard</h2>
          <p className="text-gray-300">
            Our AI-powered system matches talented scholars with the right opportunities based on
            their unique skills, projects, and potential.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          <div className="lg:col-span-2 bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-4 border-b border-gray-800">
              <div className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-lg">
                  <BarChart3 className="h-5 w-5 text-unifor-purple" />
                </div>
                <h3 className="font-semibold text-xl">AI Profile Screening Dashboard</h3>
              </div>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="flex border-b border-gray-800">
              <button 
                className={`px-4 py-3 flex-1 text-center ${activeTab === 'matched' ? 'bg-unifor-purple/20 text-unifor-light-purple border-b-2 border-unifor-purple' : 'text-gray-400 hover:bg-gray-800/50'}`}
                onClick={() => setActiveTab('matched')}
              >
                Matched Scholars ({matchedProfiles.length})
              </button>
              <button 
                className={`px-4 py-3 flex-1 text-center ${activeTab === 'evaluating' ? 'bg-unifor-purple/20 text-unifor-light-purple border-b-2 border-unifor-purple' : 'text-gray-400 hover:bg-gray-800/50'}`}
                onClick={() => setActiveTab('evaluating')}
              >
                Being Evaluated ({pendingProfiles.length})
              </button>
            </div>
            
            <div className="p-4 flex flex-wrap items-center gap-3 border-b border-gray-800">
              <div className="relative flex-1 min-w-[200px]">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <input 
                  type="text" 
                  className="bg-gray-800 text-white w-full pl-10 pr-4 py-2 rounded-lg border border-gray-700 focus:border-unifor-purple focus:outline-none focus:ring-1 focus:ring-unifor-purple"
                  placeholder="Search scholars..."
                />
              </div>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <select className="bg-gray-800 text-white px-3 py-2 rounded-lg border border-gray-700 focus:border-unifor-purple focus:outline-none">
                <option>All Skills</option>
                <option>Technical</option>
                <option>Design</option>
                <option>Research</option>
              </select>
            </div>
            
            <div className="relative overflow-x-auto">
              <Table>
                <TableHeader className="bg-gray-900">
                  <TableRow className="border-gray-800">
                    <TableHead className="text-gray-400">Scholar</TableHead>
                    <TableHead className="text-gray-400">AI Score</TableHead>
                    <TableHead className="text-gray-400">Skills</TableHead>
                    <TableHead className="text-gray-400">Status</TableHead>
                    <TableHead className="text-gray-400 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {(activeTab === 'matched' ? matchedProfiles : pendingProfiles).map((profile) => (
                    <TableRow key={profile.id} className="border-gray-800 hover:bg-gray-800/50 transition-colors">
                      <TableCell className="font-medium">
                        <div className="flex items-center gap-3">
                          <div className="bg-unifor-purple/30 w-10 h-10 rounded-full flex items-center justify-center">
                            <span className="font-bold text-unifor-light-purple">
                              {profile.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-semibold text-white">{profile.name}</p>
                            <p className="text-sm text-gray-400">{profile.role}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <span className={`text-lg font-semibold ${
                            profile.score >= 90 ? 'text-green-400' : 
                            profile.score >= 80 ? 'text-amber-400' : 'text-gray-400'
                          }`}>
                            {profile.score}
                          </span>
                          <div className="w-20 bg-gray-800 h-2 ml-3 rounded-full overflow-hidden">
                            <div 
                              className={`h-full rounded-full ${
                                profile.score >= 90 ? 'bg-green-400' : 
                                profile.score >= 80 ? 'bg-amber-400' : 'bg-gray-400'
                              }`}
                              style={{ width: `${profile.score}%` }}
                            ></div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1">
                          {profile.skills.map((skill, i) => (
                            <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-800 text-gray-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        {profile.status === 'matched' ? (
                          <div className="flex items-center">
                            <Badge className="bg-green-500/20 text-green-400 border-green-500">
                              Matched
                            </Badge>
                            <span className="text-xs text-gray-400 ml-2">
                              with {profile.matchedWith}
                            </span>
                          </div>
                        ) : (
                          <Badge className="bg-amber-500/20 text-amber-400 border-amber-500">
                            Evaluating
                          </Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="flex justify-between items-center p-4 border-t border-gray-800">
                <span className="text-sm text-gray-400">
                  Showing {activeTab === 'matched' ? matchedProfiles.length : pendingProfiles.length} items
                </span>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="border-gray-700 h-8 w-8 p-0">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <span className="text-sm">1 / 1</span>
                  <Button variant="outline" size="sm" className="border-gray-700 h-8 w-8 p-0">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <Card className="bg-black/40 backdrop-blur-md border-gray-800 shadow-xl">
              <CardHeader className="border-b border-gray-800">
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5 text-unifor-light-purple" />
                  AI Screening Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {aiMetrics.map((metric, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          {metric.icon}
                          <span className="text-sm text-gray-300">{metric.name}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-400">{metric.weight}%</span>
                      </div>
                      <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-unifor-purple"
                          style={{ width: `${metric.weight * 4}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-800">
                  <p className="text-sm text-gray-400">
                    Our AI system evaluates scholars based on multiple factors, creating a holistic 
                    assessment that goes beyond traditional metrics.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-black/40 backdrop-blur-md border-gray-800 shadow-xl flex-1">
              <CardHeader className="border-b border-gray-800">
                <CardTitle className="flex items-center gap-2">
                  <Building className="h-5 w-5 text-unifor-light-purple" />
                  Alliance Partners
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {alliancePartners.map((partner, index) => (
                    <div key={index} className="p-3 bg-gray-800/50 rounded-lg flex items-start justify-between">
                      <div>
                        <h4 className="font-medium text-white">{partner.name}</h4>
                        <span className="text-xs text-gray-400">{partner.type}</span>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {partner.lookingFor.map((skill, i) => (
                            <span key={i} className="px-2 py-0.5 text-xs rounded-full bg-gray-700 text-gray-300">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Badge className="bg-unifor-purple/20 text-unifor-light-purple">
                        {partner.openPositions} open
                      </Badge>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800">
                  View All Partners
                  <ArrowUpRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">How Our AI Screening System Works</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-unifor-purple/50 transition-colors">
              <div className="bg-unifor-purple/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="h-6 w-6 text-unifor-light-purple" />
              </div>
              <h4 className="text-xl font-bold mb-2">Scholar Profile</h4>
              <p className="text-gray-400">
                AI analyzes comprehensive scholar profiles including projects, skills, and achievements.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-unifor-purple/50 transition-colors">
              <div className="bg-unifor-purple/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Brain className="h-6 w-6 text-unifor-light-purple" />
              </div>
              <h4 className="text-xl font-bold mb-2">AI Evaluation</h4>
              <p className="text-gray-400">
                Advanced algorithms score profiles based on multiple parameters like quality, innovation, and consistency.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-unifor-purple/50 transition-colors">
              <div className="bg-unifor-purple/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-unifor-light-purple" />
              </div>
              <h4 className="text-xl font-bold mb-2">Partner Matching</h4>
              <p className="text-gray-400">
                Top-ranked scholars are matched with Alliance partners based on skill fit and opportunity requirements.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-6 border border-gray-800 hover:border-unifor-purple/50 transition-colors">
              <div className="bg-unifor-purple/20 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Rocket className="h-6 w-6 text-unifor-light-purple" />
              </div>
              <h4 className="text-xl font-bold mb-2">Opportunity Access</h4>
              <p className="text-gray-400">
                Matched scholars receive direct access to opportunities without traditional barriers like aptitude tests.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-20 relative">
          <div className="absolute inset-0 bg-unifor-purple/5 rounded-2xl blur-3xl"></div>
          <div className="relative bg-black/40 backdrop-blur-md rounded-xl border border-gray-800 overflow-hidden shadow-xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <h3 className="text-xl font-bold">Talent Pipeline Management</h3>
              <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                <Settings className="h-4 w-4 mr-2" />
                Flow Settings
              </Button>
            </div>
            
            <div className="p-6">
              <div className="flex overflow-x-auto gap-6 pb-4">
                <div className="min-w-[300px] flex-1">
                  <div className="bg-gray-800/70 p-3 rounded-lg flex justify-between items-center mb-4">
                    <h4 className="font-medium">Applications</h4>
                    <Badge className="bg-gray-700">23</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex justify-between">
                          <h5 className="font-medium">Scholar #{item}</h5>
                          <Badge className="bg-gray-700 text-gray-300">New</Badge>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Applied on {new Date().toLocaleDateString()}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="min-w-[300px] flex-1">
                  <div className="bg-amber-900/20 p-3 rounded-lg flex justify-between items-center mb-4">
                    <h4 className="font-medium">AI Screening</h4>
                    <Badge className="bg-amber-800 text-amber-200">18</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex justify-between">
                          <h5 className="font-medium">Scholar #{item + 3}</h5>
                          <span className="text-amber-400 text-sm">Evaluating</span>
                        </div>
                        <div className="mt-2 flex items-center">
                          <div className="w-full bg-gray-800 h-2 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-amber-500"
                              style={{ width: `${70 + (item * 5)}%` }}
                            ></div>
                          </div>
                          <span className="ml-2 text-xs text-gray-400">{70 + (item * 5)}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="min-w-[300px] flex-1">
                  <div className="bg-blue-900/20 p-3 rounded-lg flex justify-between items-center mb-4">
                    <h4 className="font-medium">Partner Matching</h4>
                    <Badge className="bg-blue-800 text-blue-200">12</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex justify-between">
                          <h5 className="font-medium">Scholar #{item + 6}</h5>
                          <span className="text-blue-400 text-sm">Matching</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Top match: Company {item}</p>
                        <div className="flex items-center gap-1 mt-2">
                          <Badge className="bg-gray-800 text-gray-300">JavaScript</Badge>
                          <Badge className="bg-gray-800 text-gray-300">React</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="min-w-[300px] flex-1">
                  <div className="bg-green-900/20 p-3 rounded-lg flex justify-between items-center mb-4">
                    <h4 className="font-medium">Opportunities</h4>
                    <Badge className="bg-green-800 text-green-200">8</Badge>
                  </div>
                  
                  <div className="space-y-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="bg-gray-900 p-4 rounded-lg border border-gray-800">
                        <div className="flex justify-between">
                          <h5 className="font-medium">Scholar #{item + 9}</h5>
                          <span className="text-green-400 text-sm">Placed</span>
                        </div>
                        <p className="text-gray-400 text-sm mt-1">Matched with Enterprise {item}</p>
                        <Button variant="outline" size="sm" className="w-full mt-2 text-xs border-gray-700">
                          View Details
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-gray-800 text-center">
              <p className="text-4xl font-bold text-unifor-light-purple mb-2">100%</p>
              <p className="text-xl">Free For Students</p>
              <p className="text-gray-400 mt-3">
                Every opportunity through our platform is completely free, funded by CSR initiatives, alumni donations, and venture funds.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-gray-800 text-center">
              <p className="text-4xl font-bold text-unifor-light-purple mb-2">300+</p>
              <p className="text-xl">Alliance Partners</p>
              <p className="text-gray-400 mt-3">
                A growing network of companies, startups, and investors looking for talent based on real skills, not just test scores.
              </p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-md rounded-xl p-8 border border-gray-800 text-center">
              <p className="text-4xl font-bold text-unifor-light-purple mb-2">87%</p>
              <p className="text-xl">Placement Rate</p>
              <p className="text-gray-400 mt-3">
                Of scholars who complete our process, the vast majority find meaningful opportunities through our AI matching system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentHuntDashboard;
