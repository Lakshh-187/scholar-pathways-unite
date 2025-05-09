
import { Badge } from '@/components/ui/badge';
import { FileCheck, School, Calendar, Award, Rocket } from 'lucide-react';

const BackedJourney = () => {
  const journeySteps = [
    {
      title: "Initial Application",
      description: "Institutes submit their expression of interest and complete the basic eligibility assessment.",
      icon: <FileCheck className="h-6 w-6 text-white" />,
      timeframe: "Week 1-2",
      details: "Complete the digital MOU and submit required documentation"
    },
    {
      title: "Institute Assessment",
      description: "Our team evaluates the institute's infrastructure, faculty, and readiness for the backing program.",
      icon: <School className="h-6 w-6 text-white" />,
      timeframe: "Week 3-4",
      details: "Virtual or physical inspection of facilities and interviews"
    },
    {
      title: "Program Planning",
      description: "Collaborative development of a customized implementation roadmap based on institute needs.",
      icon: <Calendar className="h-6 w-6 text-white" />,
      timeframe: "Month 2",
      details: "Define milestones, timelines, and resource allocation"
    },
    {
      title: "Resource Deployment",
      description: "Sequential implementation of infrastructure, curriculum, and program elements.",
      icon: <Rocket className="h-6 w-6 text-white" />,
      timeframe: "Month 3-6",
      details: "Setup of physical and digital resources"
    },
    {
      title: "Full Integration",
      description: "Complete integration of all Uniford programs and platforms within the institute ecosystem.",
      icon: <Award className="h-6 w-6 text-white" />,
      timeframe: "1 Year",
      details: "Full implementation and certification as a Backed Institute"
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            PARTNERSHIP JOURNEY
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Backing Process Roadmap</h2>
          <p className="text-gray-600 text-lg">
            From initial application to full integration, here's how we transform your institute with our backing program.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Desktop view - Horizontal timeline */}
            <div className="hidden md:block">
              {/* Connecting line */}
              <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-[#7E69AB] to-[#9b87f5]"></div>
              
              <div className="grid grid-cols-5 gap-4">
                {journeySteps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Circle with icon */}
                    <div className="relative z-10 mb-6">
                      <div className="h-12 w-12 rounded-full bg-[#7E69AB] flex items-center justify-center shadow-lg">
                        {step.icon}
                      </div>
                    </div>
                    
                    {/* Timeframe */}
                    <div className="bg-[#F3EAFD] text-[#7E69AB] px-3 py-1 rounded-full text-xs font-medium mb-3">
                      {step.timeframe}
                    </div>
                    
                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                    
                    {/* Details card - appears on hover */}
                    <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute mt-4 bg-white p-4 rounded-lg shadow-lg text-sm">
                      {step.details}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Mobile view - Vertical timeline */}
            <div className="md:hidden space-y-8">
              {journeySteps.map((step, index) => (
                <div key={index} className="flex">
                  {/* Left side with icon and line */}
                  <div className="flex flex-col items-center mr-4">
                    <div className="h-12 w-12 rounded-full bg-[#7E69AB] flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                    {index < journeySteps.length - 1 && (
                      <div className="h-full w-1 bg-gradient-to-b from-[#7E69AB] to-[#9b87f5] my-2"></div>
                    )}
                  </div>
                  
                  {/* Right side with content */}
                  <div className="bg-white rounded-lg shadow-md p-4 flex-1">
                    <div className="bg-[#F3EAFD] text-[#7E69AB] px-2 py-0.5 rounded-full text-xs font-medium inline-block mb-2">
                      {step.timeframe}
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{step.description}</p>
                    <p className="text-xs text-gray-500 border-t border-gray-100 pt-2 mt-2">{step.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Additional information */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Post-Integration Support</h3>
              <p className="text-gray-600 mb-4">
                Our backing doesn't end with implementation. We provide continuous support through:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>Quarterly assessment and improvement plans</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>Continuous faculty development programs</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>Regular content and curriculum updates</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>Access to new CSR funding opportunities</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-bold mb-4">Growth Opportunities</h3>
              <p className="text-gray-600 mb-4">
                As a backed institute, you gain access to expanding opportunities:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>Pitchburg establishment license after 2 years</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>International partnerships and exchange programs</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>Hosting national events and competitions</span>
                </li>
                <li className="flex items-center">
                  <div className="h-2 w-2 bg-[#7E69AB] rounded-full mr-3"></div>
                  <span>Recognition in Uniford publications and media</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BackedJourney;
