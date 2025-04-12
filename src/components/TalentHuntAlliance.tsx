
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  GraduationCap, 
  Handshake, 
  Search, 
  Building, 
  Briefcase,
  Sparkles
} from 'lucide-react';

const TalentHuntAlliance = () => {
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

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-unifor-light-purple text-unifor-dark-purple px-4 py-1 mb-4">
            TALENT HUNT ALLIANCE
          </Badge>
          <h2 className="section-title">A Revolutionary Career Network</h2>
          <p className="text-gray-600 text-lg">
            A network of companies, publishers, investors, startups, and organizations that discover and support real talent without traditional barriers.
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
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TalentHuntAlliance;
