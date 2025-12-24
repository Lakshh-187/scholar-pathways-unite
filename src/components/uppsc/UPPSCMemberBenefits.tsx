import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, ClipboardCheck, FileCheck, UserCheck, Rocket,
  CheckCircle2, Users
} from 'lucide-react';
import { useState } from 'react';

const memberBenefits = [
  {
    title: "Help Desk for Advocacy",
    description: "Expert guidance on safety & standard policies including Child Safety, POSH, POCSO, NEP-2020, NCF and more. Get 24/7 support from our dedicated team of education policy experts.",
    icon: Phone,
    color: "bg-yellow-400",
    image: "/sssa/helpdesk-launch.png",
    features: ["24/7 Support", "Policy Guidance", "Expert Consultations", "Compliance Help"]
  },
  {
    title: "Free Safety Audit",
    description: "Comprehensive safety audit & compliance advocacy to ensure your school meets international standards. Our certified auditors evaluate all aspects of school safety.",
    icon: ClipboardCheck,
    color: "bg-black",
    image: "/sssa/safety-audit.png",
    features: ["Full Audit Report", "Gap Analysis", "Action Plan", "Follow-up Support"]
  },
  {
    title: "NEP-2020 Implementation",
    description: "Complete implementation guide & advocacy support for National Education Policy 2020 compliance. Transform your curriculum and teaching methodologies.",
    icon: FileCheck,
    color: "bg-yellow-400",
    image: "/sssa/standard-audit.png",
    features: ["Curriculum Mapping", "Teacher Training", "Assessment Reform", "Documentation"]
  },
  {
    title: "Teacher Training",
    description: "Professional development by International organizations & global collaborations for educators. Upskill your teachers with world-class training programs.",
    icon: UserCheck,
    color: "bg-black",
    image: "/sssa/teacher-training.png",
    features: ["Certified Programs", "Global Experts", "Practical Skills", "Ongoing Learning"]
  },
  {
    title: "Incubation & Programs",
    description: "Establishment of Incubation cells, Skill development programs & fully funded initiatives. Create entrepreneurial mindset in students.",
    icon: Rocket,
    color: "bg-yellow-400",
    image: "/sssa/incubation-cell.png",
    features: ["Student Incubators", "Skill Labs", "Funded Projects", "Mentorship"]
  }
];

const UPPSCMemberBenefits = () => {
  const [activeBenefit, setActiveBenefit] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-black text-white mb-4 px-6 py-2">
            <Users className="w-4 h-4 mr-2 inline" />
            For Member Schools
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
            Exclusive <span className="bg-yellow-400 px-2">Benefits</span> for Members
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join UPPSC and unlock comprehensive support for your school's transformation
          </p>
        </div>

        {/* Tab-based Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-3">
            {memberBenefits.map((benefit, index) => (
              <button
                key={index}
                onClick={() => setActiveBenefit(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                  activeBenefit === index
                    ? 'bg-yellow-400 text-black border-yellow-400 shadow-lg'
                    : 'bg-white text-gray-800 border-gray-200 hover:border-yellow-400'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${benefit.color} p-3 rounded-xl`}>
                    <benefit.icon className={`w-5 h-5 ${benefit.color === 'bg-yellow-400' ? 'text-black' : 'text-yellow-400'}`} />
                  </div>
                  <h3 className="font-bold">{benefit.title}</h3>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <Card className="overflow-hidden border-2 border-gray-100 shadow-xl">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={memberBenefits[activeBenefit].image} 
                  alt={memberBenefits[activeBenefit].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className={`${memberBenefits[activeBenefit].color} inline-block p-3 rounded-xl mb-2`}>
                    {(() => {
                      const IconComponent = memberBenefits[activeBenefit].icon;
                      return <IconComponent className={`w-6 h-6 ${memberBenefits[activeBenefit].color === 'bg-yellow-400' ? 'text-black' : 'text-yellow-400'}`} />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{memberBenefits[activeBenefit].title}</h3>
                </div>
              </div>
              <CardContent className="p-6 bg-white">
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                  {memberBenefits[activeBenefit].description}
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {memberBenefits[activeBenefit].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPPSCMemberBenefits;
