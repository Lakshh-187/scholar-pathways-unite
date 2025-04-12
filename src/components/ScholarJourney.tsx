import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Award, 
  Users, 
  HeartHandshake,
  FileBadge,
  FileCheck
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ScholarJourney = () => {
  const journeySteps = [
    {
      id: 1,
      emoji: "✅",
      title: "Apply for Uniford Scholar ID",
      description: "Students apply for the official Uniford ID card & membership",
      benefits: ["Verified Identity", "Access to all Uniford resources & programs"],
      icon: <CreditCard className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 2,
      emoji: "📇",
      title: "Receive Scholar ID & Membership Kit",
      description: "Scholar receives Digital ID, Scholar Dashboard Access, Membership Card",
      benefits: ["Entry into ecosystem", "Use ID to apply for internships, programs, events"],
      icon: <FileBadge className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 3,
      emoji: "📚",
      title: "Get Access to Resources",
      description: "Scholar gets free access to premium tools, courses, and mentorship via SEP-700",
      benefits: ["Upskilling", "No cost learning", "Certified growth journey"],
      icon: <BookOpen className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 4,
      emoji: "⚙️",
      title: "Join Programs & Platforms",
      description: "Participate in: Internships (C2C, Frontliner), Project Expo, Uni-pitch, Training Cohorts, Social Campaigns",
      benefits: ["Build portfolio", "Real-world exposure", "Leadership & Innovation"],
      icon: <GraduationCap className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 5,
      emoji: "🧪",
      title: "Build & Submit Projects / Reports",
      description: "Scholars submit: Projects, Social Impact Reports, Pitch Decks",
      benefits: ["Credibility", "Public recognition", "Eligibility for screening"],
      icon: <FileCheck className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 6,
      emoji: "📤",
      title: "Profile Screening by Foundation",
      description: "Based on: Participation score, Project impact, Mentor reviews",
      benefits: ["Shortlisted for Talent Hunt Alliance", "Verified profile status"],
      icon: <Award className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 7,
      emoji: "🌐",
      title: "Featured in Talent Hunt Alliance",
      description: "Profile shared with a network of: Companies, Startups, NGOs, Investors, Publishers",
      benefits: ["Internship/Job invites", "Grants/Funding", "Book Features", "Event Passes"],
      icon: <Users className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 8,
      emoji: "🏆",
      title: "Receive Opportunities",
      description: "Scholar receives real offers via email, dashboard or invite",
      benefits: ["No application fee", "Direct entry", "Based on merit, not filters"],
      icon: <Briefcase className="h-10 w-10 text-unifor-purple" />,
    },
    {
      id: 9,
      emoji: "💝",
      title: "Give Back as Alumni (Optional)",
      description: "After success, scholar contributes by: Mentorship, Networking, 1% Donation",
      benefits: ["Help juniors", "Join Alumni Trust", "Build lasting impact"],
      icon: <HeartHandshake className="h-10 w-10 text-unifor-purple" />,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            SCHOLAR JOURNEY
          </Badge>
          <h2 className="section-title">Your Path to Excellence</h2>
          <p className="text-gray-600 text-lg">
            Follow this comprehensive journey designed to transform students into industry-ready professionals through practical experiences and real opportunities.
          </p>
        </div>
        
        {/* Desktop table view */}
        <div className="hidden md:block overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white animate-fade-in">
          <Table>
            <TableHeader className="bg-unifor-dark-purple">
              <TableRow>
                <TableHead className="text-white w-16 text-center">#</TableHead>
                <TableHead className="text-white">Stage</TableHead>
                <TableHead className="text-white">What Happens</TableHead>
                <TableHead className="text-white">Benefits/Outcome</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {journeySteps.map((step) => (
                <TableRow key={step.id} className="hover:bg-unifor-light-purple/10 transition-colors">
                  <TableCell className="font-medium text-center text-2xl">
                    {step.emoji}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="bg-unifor-light-purple p-2 rounded-lg">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-unifor-dark-purple">{step.title}</h3>
                        <p className="text-xs text-gray-500">Step {step.id}</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-gray-700">{step.description}</TableCell>
                  <TableCell>
                    <div className="flex flex-wrap gap-2">
                      {step.benefits.map((benefit, index) => (
                        <Badge key={index} variant="secondary" className="bg-unifor-light-purple/20 text-unifor-dark-purple">
                          🔹 {benefit}
                        </Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        {/* Mobile timeline view - keeps the existing timeline design for mobile */}
        <div className="md:hidden relative mt-20">
          {/* Central timeline line */}
          <div className="roadmap-line"></div>
          
          {/* Journey steps */}
          <div className="relative z-10">
            {journeySteps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Timeline node */}
                <div className="roadmap-node flex items-center justify-center text-white text-xs" style={{ top: `${index * 260 + 60}px` }}>
                  {step.id}
                </div>
                
                {/* Content card */}
                <div className="relative" style={{ marginTop: index === 0 ? '0' : '200px' }}>
                  <div 
                    className={`roadmap-card ${index % 2 === 0 ? 'ml-auto mr-4' : 'mr-auto ml-4'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-unifor-light-purple p-3 rounded-xl">
                        {step.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{step.emoji}</span>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 text-sm my-2">{step.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {step.benefits.map((benefit, index) => (
                            <Badge key={index} variant="outline" className="text-xs bg-unifor-light-purple/10 text-unifor-dark-purple">
                              🔹 {benefit}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScholarJourney;
