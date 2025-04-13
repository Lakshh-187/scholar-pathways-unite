import React, { useState } from 'react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import TalentHuntDashboard from '@/components/TalentHuntDashboard';
import { 
  Users, 
  GraduationCap, 
  Handshake, 
  Search, 
  Building, 
  Briefcase,
  Sparkles,
  Network,
  ThumbsUp,
  Shield,
  LucideFilter,
  Database,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  DollarSign,
  BarChart4,
  Brain,
  HeartHandshake,
  Link
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Network as NetworkIcon } from '@/components/ui/network-icon';

const TalentHuntAlliance = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const allianceSteps = [
    {
      id: 1,
      title: "Student Applies for Uniford Scholar ID",
      description: "Once verified, the student becomes eligible to access all resources and platforms",
      icon: <GraduationCap className="h-6 w-6 text-unifor-purple" />
    },
    {
      id: 2,
      title: "Student Learns & Builds Projects",
      description: "Through Uniford resources – courses, mentors, tools – student starts building real-world projects",
      icon: <Briefcase className="h-6 w-6 text-unifor-purple" />
    },
    {
      id: 3,
      title: "Participation in Platforms",
      description: "Internships, UniPitch, Hackathons, Challenges, Campaigns – to showcase skills",
      icon: <Users className="h-6 w-6 text-unifor-purple" />
    },
    {
      id: 4,
      title: "Profile Evaluation",
      description: "Based on skill performance, creativity, idea execution, project submissions",
      icon: <Search className="h-6 w-6 text-unifor-purple" />
    },
    {
      id: 5,
      title: "Talent Hunt Alliance Activated",
      description: "Scholar profile gets shared with Alliance members (investors, companies, VCs, publishers, etc.)",
      icon: <Building className="h-6 w-6 text-unifor-purple" />
    },
    {
      id: 6,
      title: "Opportunity Matching",
      description: "Company/startup invites the student for a project, internship, collaboration, funding, or job",
      icon: <Handshake className="h-6 w-6 text-unifor-purple" />
    },
    {
      id: 7,
      title: "Game-Changing Breakthrough",
      description: "The student gets direct access to an opportunity without traditional tests like DSA, aptitude, or CGPA filters",
      icon: <Sparkles className="h-6 w-6 text-unifor-purple" />
    }
  ];

  const faqs = [
    {
      question: "Why is the Talent Hunt Alliance different from other placement platforms?",
      answer: "Unlike traditional placement platforms that charge high fees and rely on standard aptitude tests, Talent Hunt Alliance is completely free for students and focuses on practical skills, projects, and real-world achievements. We use AI-based profile screening to match students with opportunities based on their true potential rather than just test scores."
    },
    {
      question: "How does the AI-based profile screening work?",
      answer: "Our AI system evaluates students based on multiple parameters including project quality, problem-solving skills, creativity, innovation, teamwork, and consistent performance across different platforms. This comprehensive approach ensures that talented students don't get overlooked because of a single parameter like coding tests or CGPA."
    },
    {
      question: "Are there any hidden costs or fees?",
      answer: "Absolutely none. As part of the Uniford Foundation, a non-profit organization, we are committed to providing completely free opportunities to students. Our funding comes from CSR initiatives, alumni donations, and venture funds, allowing us to maintain a zero-fee policy for students."
    },
    {
      question: "What kind of opportunities are available through the Alliance?",
      answer: "The Alliance connects students with a wide range of opportunities including internships, full-time jobs, project collaborations, startup funding, mentorship, research opportunities, international programs, and more. Our network includes startups, established companies, research institutions, and investors."
    }
  ];

  const painPoints = [
    {
      title: "High Fees for Opportunities",
      description: "Many platforms charge ₹1.5 lakh, ₹70k, or ₹12k for programs, internships, and cohorts, creating financial barriers.",
      solution: "Talent Hunt Alliance offers all opportunities completely free of charge, funded through CSR, alumni donations, and venture funds.",
      icon: <DollarSign className="h-8 w-8 text-red-500" />
    },
    {
      title: "One-Dimensional Evaluation",
      description: "Traditional recruitment relies heavily on DSA tests, aptitude exams, or CGPA, overlooking practical skills and innovation.",
      solution: "Our AI-based profile screening evaluates students on multiple parameters including projects, problem-solving, creativity, and real-world applications.",
      icon: <BarChart4 className="h-8 w-8 text-red-500" />
    },
    {
      title: "Lack of Platform Connecting Talent with Opportunities",
      description: "Skilled students struggle to find deserving opportunities that match their unique abilities and ambitions.",
      solution: "We create direct connections between talented students and organizations looking for specific skills and fresh perspectives.",
      icon: <Link className="h-8 w-8 text-red-500" />
    },
    {
      title: "Credibility and Recognition Challenges",
      description: "Students with great projects and ideas often lack the visibility and credibility needed to attract opportunities.",
      solution: "Alliance partners trust our screening process, giving students instant credibility and recognition for their work.",
      icon: <Shield className="h-8 w-8 text-red-500" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <NavBar />
      
      <section className="py-16 px-4 bg-gradient-to-br from-unifor-dark to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute h-64 w-64 rounded-full bg-unifor-purple blur-3xl top-20 left-20 animate-pulse-soft"></div>
          <div className="absolute h-80 w-80 rounded-full bg-unifor-blue blur-3xl bottom-10 right-10 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              TALENT HUNT ALLIANCE
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Breaking Barriers to Opportunities
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              A revolutionary network by <span className="font-bold">Uniford Foundation</span>, a <span className="font-bold">non-profit organization</span>, that connects talented students with real opportunities — completely free of cost.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Button className="bg-unifor-purple hover:bg-unifor-dark-purple text-white font-medium rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group">
                Join the Alliance
                <Users className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium rounded-lg transition-all duration-300">
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Key Stats */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-xl max-w-4xl mx-auto mb-10 animate-fade-in">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Transforming Career Opportunities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">300+</p>
                <p className="text-gray-300">Alliance Partners</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">10k+</p>
                <p className="text-gray-300">Students Placed</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-unifor-purple/30 flex items-center justify-center mb-3">
                  <DollarSign className="h-8 w-8 text-white" />
                </div>
                <p className="text-3xl font-bold text-white">₹0</p>
                <p className="text-gray-300">Cost to Students</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto max-w-6xl px-4 py-10">
        {/* Pain Points Section */}
        <section className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              THE PROBLEM
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">Pain Points We're Solving</h2>
            <p className="text-gray-600">
              As a <span className="font-bold text-unifor-dark-purple">non-profit organization</span>, 
              <span className="font-bold text-unifor-dark-purple"> Uniford Foundation</span> created the Talent Hunt Alliance to address 
              critical challenges facing students in their career journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {painPoints.map((point, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-all border-t-4 border-red-500 transform hover:-translate-y-1 duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-red-50 p-3 rounded-full">
                      {point.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{point.title}</h3>
                      <p className="text-gray-600 mt-1">{point.description}</p>
                    </div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg flex items-start">
                    <div className="bg-green-100 rounded-full p-2 mr-3 mt-1">
                      <span className="text-green-500 text-lg">✅</span>
                    </div>
                    <p className="text-gray-700">
                      <span className="font-bold">Our Solution:</span> {point.solution}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        
        {/* AI Dashboard Component */}
        <TalentHuntDashboard />
        
        {/* AI-Based Profile Screening */}
        <section className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              INNOVATION
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">AI-Based Profile Screening</h2>
            <p className="text-gray-600">
              Our intelligent system moves beyond traditional filters to identify and nurture real talent,
              creating a meritocratic platform that focuses on skills and potential.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-all border-2 border-unifor-light-purple/30">
              <CardHeader className="bg-unifor-light-purple/10 pb-4">
                <CardTitle className="flex items-center gap-2 text-unifor-dark-purple">
                  <Brain className="h-5 w-5 text-unifor-purple" />
                  What We Evaluate
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Project quality & execution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Problem-solving creativity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Innovation & unique thinking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Participation across platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Consistency & improvement</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all border-2 border-unifor-light-purple/30">
              <CardHeader className="bg-unifor-light-purple/10 pb-4">
                <CardTitle className="flex items-center gap-2 text-unifor-dark-purple">
                  <LucideFilter className="h-5 w-5 text-unifor-purple" />
                  What We Don't Focus On
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Just DSA test scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Generic aptitude scores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">CGPA as primary filter</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">College name/tier bias</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Previous experience only</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-all border-2 border-unifor-light-purple/30">
              <CardHeader className="bg-unifor-light-purple/10 pb-4">
                <CardTitle className="flex items-center gap-2 text-unifor-dark-purple">
                  <Database className="h-5 w-5 text-unifor-purple" />
                  How It Benefits Everyone
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Students find opportunities matching their skills</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Companies discover hidden talent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Startups find fresh, innovative minds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reduces bias in selection process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ThumbsUp className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Creates a meritocratic ecosystem</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How it works section */}
        <section className="my-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
              THE PROCESS
            </Badge>
            <h2 className="text-3xl font-bold mb-4 text-unifor-dark-purple">How Talent Hunt Alliance Works</h2>
            <p className="text-gray-600">
              A streamlined process that connects talented students with life-changing opportunities
              through the support of <span className="font-bold text-unifor-dark-purple">Uniford Foundation</span>.
            </p>
          </div>
          
          {/* Desktop view */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Central timeline line */}
              <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-unifor-purple to-unifor-blue"></div>
              
              {/* Timeline steps */}
              <div className="relative">
                {allianceSteps.map((step, index) => (
                  <div 
                    key={step.id} 
                    className={`flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  >
                    {/* Content for left-aligned items */}
                    {index % 2 === 0 && (
                      <div className="w-[calc(50%-32px)] pr-8 text-right">
                        <div className="glass-card p-6 hover:translate-y-[-8px] transition-all">
                          <h3 className="text-xl font-bold mb-2 text-unifor-dark-purple">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    )}
                    
                    {/* Timeline node */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-unifor-light-purple">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-unifor-light-purple">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Content for right-aligned items */}
                    {index % 2 !== 0 && (
                      <div className="w-[calc(50%-32px)] pl-8">
                        <div className="glass-card p-6 hover:translate-y-[-8px] transition-all">
                          <h3 className="text-xl font-bold mb-2 text-unifor-dark-purple">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Mobile view */}
          <div className="md:hidden space-y-8">
            {allianceSteps.map((step) => (
              <div key={step.id} className="glass-card p-6 relative">
                <div className="absolute -left-3 top-6 w-8 h-8 bg-unifor-light-purple rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold">{step.id}</span>
                </div>
                <div className="ml-4">
                  <div className="flex items-center gap-3 mb-3">
                    {step.icon}
                    <h3 className="text-lg font-bold text-unifor-dark-purple">{step.title}</h3>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Comparison table */}
        <div className="mt-20 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Why Talent Hunt Alliance is a Game-Changer</h3>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <table className="w-full">
              <thead className="bg-unifor-dark-purple text-white">
                <tr>
                  <th className="py-4 px-6 text-left">🚫 Old System</th>
                  <th className="py-4 px-6 text-left">✅ Talent Hunt Alliance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                  <td className="py-3 px-6">Only DSA/aptitude-based filters</td>
                  <td className="py-3 px-6">Based on practical work & innovation</td>
                </tr>
                <tr className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                  <td className="py-3 px-6">Startups struggle to find fresh raw talent</td>
                  <td className="py-3 px-6">Directly connects them with student doers & builders</td>
                </tr>
                <tr className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                  <td className="py-3 px-6">Investors miss young, unfunded idea-makers</td>
                  <td className="py-3 px-6">Alliance highlights startup-worthy scholars</td>
                </tr>
                <tr className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                  <td className="py-3 px-6">Good project builders stay hidden</td>
                  <td className="py-3 px-6">Now their profile is featured & recommended</td>
                </tr>
                <tr className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                  <td className="py-3 px-6">Poor access to networks & visibility</td>
                  <td className="py-3 px-6">Students become part of a global discovery engine</td>
                </tr>
                <tr className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                  <td className="py-3 px-6">High fees (₹70k-1.5 lakh) for programs</td>
                  <td className="py-3 px-6">All opportunities completely free for students</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-24 mb-16">
          <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full text-left p-5 flex justify-between items-center rounded-lg font-medium text-lg ${
                    expandedFaq === index 
                      ? 'bg-unifor-purple text-white' 
                      : 'bg-white text-gray-700 hover:bg-gray-50'
                  } transition-colors shadow-md`}
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="bg-white p-5 rounded-b-lg shadow-md -mt-1 border-t border-gray-100 animate-accordion-down">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-24 mb-20 bg-gradient-to-r from-unifor-purple to-unifor-blue rounded-xl overflow-hidden shadow-xl">
          <div className="p-10 md:p-16 text-center text-white">
            <NetworkIcon size={56} animated={true} className="mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join the Revolution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Whether you're a student seeking opportunities or an organization looking for talent,
              the Alliance powered by <span className="font-bold">Uniford Foundation</span> is here to connect you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-white text-unifor-dark-purple hover:bg-gray-100 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                Students: Join Now
                <GraduationCap className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-lg text-lg transition-all duration-300">
                Become an Alliance Partner
                <HeartHandshake className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="my-24">
          <h2 className="text-3xl font-bold text-center mb-10 text-unifor-dark-purple">Success Stories</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-unifor-light-purple text-unifor-dark-purple rounded-full flex items-center justify-center font-bold text-xl">
                  RK
                </div>
                <div>
                  <div className="font-bold text-gray-800">Rahul Kumar</div>
                  <div className="text-gray-500 text-sm">Computer Science Student</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I created a project for image processing but had no way to showcase it. Through Talent Hunt Alliance, 
                my profile was seen by a startup that offered me an internship — all without any competitive coding tests!"
              </p>
              <div className="text-unifor-purple font-medium text-sm">Placed at: Vision AI Labs</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-unifor-light-purple text-unifor-dark-purple rounded-full flex items-center justify-center font-bold text-xl">
                  SG
                </div>
                <div>
                  <div className="font-bold text-gray-800">Sneha Gupta</div>
                  <div className="text-gray-500 text-sm">Mechanical Engineering Student</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I couldn't afford expensive programs to showcase my CAD designs. Through Uniford's free platform, my work was spotted by 
                an automotive company that hired me directly! This would have been impossible otherwise."
              </p>
              <div className="text-unifor-purple font-medium text-sm">Placed at: Innovate Motors</div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-unifor-light-purple text-unifor-dark-purple rounded-full flex items-center justify-center font-bold text-xl">
                  AK
                </div>
                <div>
                  <div className="font-bold text-gray-800">Aditya Krishnan</div>
                  <div className="text-gray-500 text-sm">Entrepreneurship Student</div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "My startup idea was just a concept until the Talent Hunt Alliance connected me with an angel investor. 
                I didn't have to pay hefty fees to pitch my idea — Uniford made it possible for free!"
              </p>
              <div className="text-unifor-purple font-medium text-sm">Funded by: Venture Capital Network</div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TalentHuntAlliance;
