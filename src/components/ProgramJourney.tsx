import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  ClipboardCheck, 
  GraduationCap,
  Rocket,
  Award,
  Building,
  Users,
  FileText,
  Presentation,
  Megaphone,
  Handshake
} from 'lucide-react';

const ProgramJourney = () => {
  const c2cPhases = [
    {
      id: 1,
      title: "Internship",
      description: "Scholars work on curated, real-time internships provided by partner startups & orgs",
      importance: "Builds industry skills, teamwork, and discipline with mentors from real companies",
      icon: <Briefcase className="h-10 w-10 text-unifor-purple" />
    },
    {
      id: 2,
      title: "Project Expo",
      description: "Students submit and showcase their own built projects at a virtual or physical expo",
      importance: "Validates practical skills and innovation in front of industry experts",
      icon: <Presentation className="h-10 w-10 text-unifor-purple" />
    },
    {
      id: 3,
      title: "Uni-Pitch",
      description: "Students pitch their work, product, or project in front of investors/startup founders",
      importance: "Improves communication, storytelling, and can lead to direct job/funding invites",
      icon: <Megaphone className="h-10 w-10 text-unifor-purple" />
    }
  ];
  
  const frontlinerPhases = [
    {
      id: 1,
      title: "Initiator Internship",
      description: "Scholar joins as a community leader/intern and works on campaigns, awareness drives, or digital outreach",
      importance: "Builds leadership, social responsibility, teamwork, and communication",
      icon: <Handshake className="h-10 w-10 text-unifor-purple" />
    },
    {
      id: 2,
      title: "Annual Report Submission",
      description: "Scholar documents all impact-work done in a well-structured report (provided template)",
      importance: "Shows consistency, commitment, and builds a credible portfolio of social impact",
      icon: <FileText className="h-10 w-10 text-unifor-purple" />
    },
    {
      id: 3,
      title: "Uni-Pitch",
      description: "Scholar presents their journey, challenges, and outcomes in front of NGOs, CSR heads, and global leaders",
      importance: "Creates networking opportunities, mentoring, and can lead to funding or social project partnerships",
      icon: <Megaphone className="h-10 w-10 text-unifor-purple" />
    }
  ];
  
  const programBenefits = [
    {
      activity: "Internships (C2C/Frontliner)",
      profileAddition: "Practical experience, verified by companies/mentors",
      attracts: "Startups, companies looking for interns/employees",
      icon: <Briefcase className="h-6 w-6 text-unifor-purple" />
    },
    {
      activity: "Project Expo",
      profileAddition: "Strong GitHub/portfolio, innovation proof",
      attracts: "Tech companies, startup CTOs",
      icon: <Presentation className="h-6 w-6 text-unifor-purple" />
    },
    {
      activity: "Annual Report",
      profileAddition: "Showcases social contribution, initiative, and leadership",
      attracts: "NGOs, CSR heads, university partners",
      icon: <FileText className="h-6 w-6 text-unifor-purple" />
    },
    {
      activity: "Uni-Pitch",
      profileAddition: "Proof of confidence, vision, and real problem-solving",
      attracts: "Investors, funders, media, publishers",
      icon: <Megaphone className="h-6 w-6 text-unifor-purple" />
    }
  ];
  
  const problemSolutions = [
    {
      problem: "No practical experience",
      solution: "Students get mentored internships"
    },
    {
      problem: "No strong portfolios",
      solution: "Build, present, and publish projects and impact"
    },
    {
      problem: "No public recognition",
      solution: "Get featured in pitch events, expos, annual journals"
    },
    {
      problem: "Lack of visibility",
      solution: "Profile listed in the Talent Hunt Alliance portal"
    },
    {
      problem: "Missed career opportunities",
      solution: "Direct invites from companies, publishers, investors"
    }
  ];
  
  const renderProgramPhases = (phases, title, goal) => (
    <div className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
          {title}
        </Badge>
        <h3 className="text-2xl md:text-3xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Goal:</span> {goal}
        </p>
      </div>
      
      {/* Desktop view */}
      <div className="hidden md:block relative mb-16">
        {/* Timeline line */}
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-unifor-purple to-unifor-blue"></div>
        
        {/* Timeline nodes and content */}
        <div className="flex justify-between">
          {phases.map((phase, index) => (
            <div key={phase.id} className="w-1/3 px-4 relative" style={{ paddingTop: "30px" }}>
              {/* Timeline node */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-4 border-unifor-purple flex items-center justify-center z-10">
                <span className="text-unifor-purple font-bold">{phase.id}</span>
              </div>
              
              {/* Content card */}
              <div className="glass-card p-6 h-full hover:shadow-lg transition-all">
                <div className="bg-unifor-light-purple p-3 rounded-xl inline-block mb-4">
                  {phase.icon}
                </div>
                <h4 className="text-xl font-bold mb-2">Phase {phase.id}: {phase.title}</h4>
                <p className="text-gray-600 mb-4">{phase.description}</p>
                <div className="p-3 bg-unifor-light-purple/20 rounded-lg">
                  <h5 className="font-bold text-unifor-dark-purple mb-1">Why It's Important:</h5>
                  <p className="text-sm text-gray-700">{phase.importance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Mobile view */}
      <div className="md:hidden space-y-8">
        {phases.map((phase) => (
          <div key={phase.id} className="glass-card p-6 relative">
            <div className="absolute -left-3 top-6 w-8 h-8 bg-unifor-purple rounded-full flex items-center justify-center shadow-lg">
              <span className="text-white font-bold">{phase.id}</span>
            </div>
            <div className="ml-4">
              <div className="flex items-center gap-3 mb-3">
                {phase.icon}
                <h4 className="text-lg font-bold">Phase {phase.id}: {phase.title}</h4>
              </div>
              <p className="text-gray-600 mb-3">{phase.description}</p>
              <div className="p-3 bg-unifor-light-purple/20 rounded-lg">
                <h5 className="font-bold text-unifor-dark-purple mb-1">Why It's Important:</h5>
                <p className="text-sm text-gray-700">{phase.importance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Outcome */}
      <div className="bg-unifor-light-purple/20 rounded-xl p-6 max-w-xl mx-auto">
        <h4 className="font-bold text-xl mb-3 text-center text-unifor-dark-purple">Outcome:</h4>
        <ul className="space-y-2">
          {title === "Campus to Corporate (C2C)" ? (
            <>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✅</span>
                <span>A well-rounded portfolio</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✅</span>
                <span>Real industry project exposure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✅</span>
                <span>Pitch deck + videos + feedback = profile gets listed in Talent Hunt Alliance</span>
              </li>
            </>
          ) : (
            <>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✅</span>
                <span>Strong social leadership profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✅</span>
                <span>Credibility as a youth changemaker</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-500 text-lg">✅</span>
                <span>Visibility to CSR partners via Talent Hunt Alliance</span>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            PROGRAM JOURNEY
          </Badge>
          <h2 className="section-title">From Student to Professional</h2>
          <p className="text-gray-600 text-lg">
            Our specialized programs provide real-world exposure, practical skills, and direct connections to opportunities.
          </p>
        </div>
        
        {/* C2C Program Journey */}
        {renderProgramPhases(
          c2cPhases, 
          "Campus to Corporate (C2C)", 
          "Transform regular students into industry-ready professionals with a strong project portfolio and real-world skills."
        )}
        
        {/* Frontliner Program Journey */}
        {renderProgramPhases(
          frontlinerPhases, 
          "Frontliner Program", 
          "Recognize and uplift socially active, responsible youth who want to lead change and build credibility in impact-driven work."
        )}
        
        {/* Program Benefits Table */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-8">How These Programs Help in Talent Hunt Alliance Matching</h3>
          <div className="overflow-hidden rounded-xl shadow-lg">
            <table className="w-full">
              <thead className="bg-unifor-dark-purple text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Program Activity</th>
                  <th className="py-4 px-6 text-left">What It Adds to Scholar's Profile</th>
                  <th className="py-4 px-6 text-left">Who It Attracts</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {programBenefits.map((benefit, index) => (
                  <tr key={index} className="bg-white hover:bg-unifor-light-purple/10 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        {benefit.icon}
                        <span>{benefit.activity}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">{benefit.profileAddition}</td>
                    <td className="py-4 px-6">{benefit.attracts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        {/* Problem Solution Grid */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Why These Programs are Game-Changers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {problemSolutions.map((item, index) => (
              <div key={index} className="glass-card p-6 flex items-start gap-4 hover:shadow-lg transition-all">
                <div className="h-10 w-10 rounded-full bg-unifor-light-purple flex items-center justify-center flex-shrink-0">
                  <span className="text-unifor-purple text-lg">🔥</span>
                </div>
                <div>
                  <h4 className="font-bold mb-1 text-unifor-dark-purple">{item.problem}</h4>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramJourney;
