
import { Briefcase, GraduationCap, Lightbulb, Trophy, Users, Rocket, BookOpen, Target, Badge as BadgeIcon, Globe, Award, User, Code, Palette, Store } from "lucide-react";
import NavBar from '@/components/NavBar';
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ProgramCard from "@/components/ProgramCard";
import ProgramJourney from "@/components/ProgramJourney";
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

            <div className="max-w-4xl mx-auto">
              {/* Three Phases */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-8 text-unifor-dark-purple">Three Phase Program</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-unifor-purple">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-4">
                        <User className="h-6 w-6 text-unifor-purple" />
                      </div>
                      <CardTitle className="text-xl text-unifor-dark-purple">Phase 1</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Create profile in diverse socials than attach in website & Edit Details on Portfolio Website using Guide</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Create social media profiles</li>
                        <li>• Link to portfolio website</li>
                        <li>• Follow guided editing process</li>
                        <li>• Complete profile details</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-unifor-purple">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-4">
                        <Users className="h-6 w-6 text-unifor-purple" />
                      </div>
                      <CardTitle className="text-xl text-unifor-dark-purple">Phase 2</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Participate, enroll & initiate and attach in portfolio</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Join programs and events</li>
                        <li>• Enroll in courses</li>
                        <li>• Initiate projects</li>
                        <li>• Document participation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-unifor-purple">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-unifor-light-purple flex items-center justify-center mb-4">
                        <Code className="h-6 w-6 text-unifor-purple" />
                      </div>
                      <CardTitle className="text-xl text-unifor-dark-purple">Phase 3</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-4">Design, develop & create and list on your store & Blog page on portfolio</p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Design creative projects</li>
                        <li>• Develop solutions</li>
                        <li>• Create portfolio store</li>
                        <li>• Write blog posts</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Certification Info */}
              <div className="bg-gradient-to-r from-unifor-light-purple/20 to-unifor-purple/20 rounded-2xl p-8 mb-16 text-center">
                <BadgeIcon className="h-16 w-16 text-unifor-purple mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-unifor-dark-purple mb-4">Get Certified & Rewarded</h3>
                <p className="text-lg text-gray-700 mb-6">
                  You have to submit only Phase-1 and you get certification & goodies
                </p>
                <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white px-8 py-3 text-lg">
                  Start Phase 1
                </Button>
              </div>

              {/* Impact on Future */}
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-unifor-dark-purple mb-6">Impact on Your Future</h3>
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-unifor-light-purple">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    "Every opportunity whether your marriage, placement, funding, awards, invitation, profile screening, application etc everywhere the only thing matter is how credible & impressive profile you have as more participation more achievements & practical exposure more maturity more opportunity that all a interrelated circle"
                  </p>
                  
                  <div className="grid md:grid-cols-4 gap-6 mt-8">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-unifor-light-purple flex items-center justify-center mx-auto mb-3">
                        <Trophy className="h-8 w-8 text-unifor-purple" />
                      </div>
                      <h4 className="font-semibold text-unifor-dark-purple">More Participation</h4>
                      <p className="text-sm text-gray-600">Increased engagement</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-unifor-light-purple flex items-center justify-center mx-auto mb-3">
                        <Award className="h-8 w-8 text-unifor-purple" />
                      </div>
                      <h4 className="font-semibold text-unifor-dark-purple">More Achievements</h4>
                      <p className="text-sm text-gray-600">Recognition & awards</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-unifor-light-purple flex items-center justify-center mx-auto mb-3">
                        <GraduationCap className="h-8 w-8 text-unifor-purple" />
                      </div>
                      <h4 className="font-semibold text-unifor-dark-purple">Practical Exposure</h4>
                      <p className="text-sm text-gray-600">Real-world experience</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-unifor-light-purple flex items-center justify-center mx-auto mb-3">
                        <Globe className="h-8 w-8 text-unifor-purple" />
                      </div>
                      <h4 className="font-semibold text-unifor-dark-purple">More Opportunities</h4>
                      <p className="text-sm text-gray-600">Endless possibilities</p>
                    </div>
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
