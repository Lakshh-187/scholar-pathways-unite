
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CreditCard, BookOpen, GraduationCap, Briefcase, Award, Users, HeartHandshake } from 'lucide-react';

const ScholarJourney = () => {
  const journeySteps = [
    {
      id: 1,
      title: "Apply for ID Card",
      description: "Scholars apply for a unique ID card that serves as their digital passport to the Unifor ecosystem.",
      icon: <CreditCard className="h-10 w-10 text-unifor-purple" />,
      position: "left",
    },
    {
      id: 2,
      title: "Access Resources & Portals",
      description: "With the ID card, scholars get access to learning resources, mentorship, and various educational portals.",
      icon: <BookOpen className="h-10 w-10 text-unifor-purple" />,
      position: "right",
    },
    {
      id: 3,
      title: "Enroll in Programs",
      description: "Scholars participate in 3-phase programs including internships, cohorts, project expos, Uni-pitch, and annual reports.",
      icon: <GraduationCap className="h-10 w-10 text-unifor-purple" />,
      position: "left",
    },
    {
      id: 4,
      title: "Participate in Challenges",
      description: "Gain practical exposure through competitions and challenges designed to showcase real-world skills.",
      icon: <Briefcase className="h-10 w-10 text-unifor-purple" />,
      position: "right",
    },
    {
      id: 5,
      title: "Profile Screening",
      description: "Based on performance, scholars undergo profile screening for various opportunities.",
      icon: <Award className="h-10 w-10 text-unifor-purple" />,
      position: "left",
    },
    {
      id: 6,
      title: "Access Opportunities",
      description: "Qualified scholars receive opportunities like internships, jobs, scholarships, grants, and more through the Talent Hunt Alliance.",
      icon: <Users className="h-10 w-10 text-unifor-purple" />,
      position: "right",
    },
    {
      id: 7,
      title: "Join Scholar Council",
      description: "Successful scholars join the council to donate network connections, mentorship, time, and resources to upcoming scholars.",
      icon: <HeartHandshake className="h-10 w-10 text-unifor-purple" />,
      position: "left",
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
        
        <div className="relative mt-20">
          {/* Central timeline line */}
          <div className="roadmap-line"></div>
          
          {/* Journey steps */}
          <div className="relative z-10">
            {journeySteps.map((step, index) => (
              <React.Fragment key={step.id}>
                {/* Timeline node */}
                <div className="roadmap-node" style={{ top: `${index * 260 + 60}px` }}></div>
                
                {/* Content card */}
                <div className="relative" style={{ marginTop: index === 0 ? '0' : '200px' }}>
                  <div 
                    className={`roadmap-card ${step.position === 'left' ? 'ml-auto mr-4 md:mr-0' : 'mr-auto ml-4 md:ml-0'}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="bg-unifor-light-purple p-3 rounded-xl">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
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
