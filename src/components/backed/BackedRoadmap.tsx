
import React from 'react';
import { 
  School, 
  FlaskConical, 
  Computer, 
  Award, 
  DollarSign, 
  Globe, 
  Users, 
  Trophy, 
  Medal, 
  Flag, 
  Handshake 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

// Timeline point component
const TimelinePoint = ({ 
  icon, 
  title, 
  description, 
  items, 
  isLeft = true,
  color = "bg-[#9b87f5]",
  iconBg = "bg-[#9b87f5]"
}) => {
  return (
    <div className={`flex w-full ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col mb-16`}>
      {/* Content */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
        <h3 className="text-2xl font-bold text-[#7E69AB] mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {items && (
          <div className={`flex flex-wrap gap-2 ${isLeft ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
            {items.map((item, idx) => (
              <Badge 
                key={idx} 
                className="bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 text-[#7E69AB] px-3 py-1.5"
              >
                {item}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {/* Center icon */}
      <div className="mx-auto md:mx-0 relative flex items-center justify-center">
        <div className="hidden md:block absolute h-full w-1 bg-gradient-to-b from-[#9b87f5] to-[#7E69AB] left-1/2 transform -translate-x-1/2 -z-10"></div>
        <div className={cn("rounded-full p-4 shadow-lg z-10", iconBg)}>
          {icon}
        </div>
      </div>
      
      {/* Empty space for layout */}
      <div className="w-full md:w-5/12"></div>
    </div>
  );
};

const BackedRoadmap = () => {
  // Roadmap data
  const roadmapData = [
    {
      icon: <School className="h-7 w-7 text-white" />,
      title: "Institute Transformation",
      description: "Our mission is to transform educational institutes by aligning them with international standards and parameters.",
      isLeft: true,
      color: "bg-[#9b87f5]",
      iconBg: "bg-[#9b87f5]"
    },
    {
      icon: <FlaskConical className="h-7 w-7 text-white" />,
      title: "Establishments",
      description: "Using grants and funding, we help member institutes establish cutting-edge labs and innovation spaces.",
      items: ["AR/VR Labs", "Coding & STEM Labs", "Robotics & Innovation Centers", "Research & Botany Labs"],
      isLeft: false,
      color: "bg-[#8B5CF6]",
      iconBg: "bg-[#8B5CF6]"
    },
    {
      icon: <Computer className="h-7 w-7 text-white" />,
      title: "Tech Infrastructure",
      description: "We provide complete digital solutions to standardize and upgrade institutes.",
      items: ["Institute Website & Software", "Learning Portals", "Digital Libraries", "AI-Powered Tools", "Merchandise Stores"],
      isLeft: true,
      color: "bg-[#D946EF]",
      iconBg: "bg-[#D946EF]"
    },
    {
      icon: <Flag className="h-7 w-7 text-white" />,
      title: "Pitchburg License",
      description: "A unique Indo-American-themed platform where students can pitch their innovations, get featured for achievements, and represent their institute globally.",
      items: ["Free Pitchburg license", "Student Participation", "Global Representation"],
      isLeft: false,
      color: "bg-[#F97316]",
      iconBg: "bg-[#F97316]"
    },
    {
      icon: <Award className="h-7 w-7 text-white" />,
      title: "Recognition & Empowerment",
      description: "Partner institutes get access to our official curriculum kits, goodies & swag, and awards & certifications.",
      items: ["Official Curriculum Kits", "Goodies & Swag", "Awards & Certifications"],
      isLeft: true,
      color: "bg-[#0EA5E9]",
      iconBg: "bg-[#0EA5E9]"
    },
    {
      icon: <DollarSign className="h-7 w-7 text-white" />,
      title: "Financial Aid for Students",
      description: "We offer financial assistance to ensure no student misses an opportunity due to fees.",
      items: ["Event Participation Support", "Innovation Development", "Practical Exposure Programs"],
      isLeft: false,
      color: "bg-[#9b87f5]",
      iconBg: "bg-[#9b87f5]"
    },
    {
      icon: <Globe className="h-7 w-7 text-white" />,
      title: "UIRAD",
      description: "Uniford International Research & Academic Development connects institutes with the world's best educational techniques and models.",
      items: ["Global Educational Techniques", "International Curriculum Models", "Implementation & Execution Support"],
      isLeft: true,
      color: "bg-[#8B5CF6]",
      iconBg: "bg-[#8B5CF6]"
    },
    {
      icon: <Handshake className="h-7 w-7 text-white" />,
      title: "CSR Projects & Implementation",
      description: "We organize and implement CSR-funded educational programs and initiatives across our network of institutes.",
      isLeft: false,
      color: "bg-[#D946EF]",
      iconBg: "bg-[#D946EF]"
    },
    {
      icon: <Users className="h-7 w-7 text-white" />,
      title: "Financial Freedom for All",
      description: "We prioritize removing financial barriers so every student gains practical exposure and equal opportunities.",
      items: ["Practical Exposure", "Equal Opportunities", "Overcome Brain Drain"],
      isLeft: true,
      color: "bg-[#F97316]",
      iconBg: "bg-[#F97316]"
    },
    {
      icon: <Medal className="h-7 w-7 text-white" />,
      title: "Connect & Invite",
      description: "Exceptional institutes are invited to national and international conferences, fests, and award shows.",
      items: ["Global Conferences", "Award Shows", "Grants & Opportunities"],
      isLeft: false,
      color: "bg-[#0EA5E9]",
      iconBg: "bg-[#0EA5E9]"
    },
    {
      icon: <Trophy className="h-7 w-7 text-white" />,
      title: "Awards & Competitions",
      description: "We host prestigious National and International Award Shows to recognize and celebrate excellence.",
      items: ["Innovation Competitions", "Academic & Performance Audits", "Institutional Achievements"],
      isLeft: true,
      color: "bg-[#9b87f5]",
      iconBg: "bg-[#9b87f5]"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="bg-[#9b87f5]/10 text-[#7E69AB] px-3 py-1.5 text-sm mb-4">
            OUR JOURNEY
          </Badge>
          <h2 className="text-4xl font-bold mb-6 text-[#1A1F2C]">Transformative Roadmap</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach to transforming educational institutions through funding, 
            technology, and academic empowerment - creating future-ready centers of innovation.
          </p>
        </div>

        {/* Mobile summary cards (visible on small screens) */}
        <div className="md:hidden mb-10 space-y-4">
          {roadmapData.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-3">
                  <div className={cn("rounded-full p-2", item.iconBg)}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#7E69AB]">{item.title}</h3>
                </div>
                <p className="text-gray-600 mb-3">{item.description}</p>
                {item.items && (
                  <div className="flex flex-wrap gap-2">
                    {item.items.map((subItem, idx) => (
                      <Badge 
                        key={idx} 
                        className="bg-[#9b87f5]/10 hover:bg-[#9b87f5]/20 text-[#7E69AB] px-2 py-1"
                      >
                        {subItem}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Desktop timeline (hidden on small screens) */}
        <div className="hidden md:block relative">
          {roadmapData.map((item, index) => (
            <TimelinePoint 
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              items={item.items}
              isLeft={item.isLeft}
              color={item.color}
              iconBg={item.iconBg}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <div className="mt-16 text-center">
          <p className="text-xl text-[#7E69AB] font-medium mb-6">
            Ready to transform your educational institution?
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#9b87f5] to-[#7E69AB] text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300">
            Partner With Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default BackedRoadmap;
