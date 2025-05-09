
import { Badge } from '@/components/ui/badge';
import { Mail, FileCheck, Handshake, Calendar } from 'lucide-react';

const PartnershipJourney = () => {
  const steps = [
    {
      title: "Initial Contact",
      description: "Reach out to us through our contact form or schedule a meeting to discuss partnership possibilities.",
      icon: <Mail className="h-6 w-6 text-white" />,
    },
    {
      title: "Alignment Discussion",
      description: "We'll explore how our missions align and identify mutual benefits from the partnership.",
      icon: <FileCheck className="h-6 w-6 text-white" />,
    },
    {
      title: "Agreement Signing",
      description: "Complete our digital partnership agreement to formalize our collaboration.",
      icon: <Handshake className="h-6 w-6 text-white" />,
    },
    {
      title: "Implementation",
      description: "Begin collaborative initiatives and programs to benefit both our communities.",
      icon: <Calendar className="h-6 w-6 text-white" />,
    },
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            PARTNERSHIP JOURNEY
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How We Work Together</h2>
          <p className="text-gray-600 text-lg">
            Our partnership process is designed to be straightforward, collaborative, and mutually beneficial.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#7E69AB]/30"></div>
            
            <div className="space-y-20">
              {steps.map((step, index) => (
                <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  
                  <div className="z-10">
                    <div className="h-16 w-16 rounded-full bg-[#7E69AB] flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipJourney;
