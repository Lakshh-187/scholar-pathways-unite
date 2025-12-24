import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Globe, Users, Shield, Leaf, Lightbulb, Award } from 'lucide-react';

const dialogues = [
  {
    id: 'biss-finland',
    title: "BISS Movement - Finland",
    person: "International Education Expo",
    role: "Finland Learning Together Partnership",
    description: "BISS - 1 Million Safe & Standard School movement was presented at Finland's premier education expo. This international dialogue brought together educators from across Europe to discuss best practices in school safety and standards.",
    highlights: [
      "Cross-border safety protocols",
      "Nordic education best practices",
      "International certification standards",
      "Cultural exchange programs"
    ],
    image: "/uppsc/global-dialogue-1.png",
    icon: Shield,
    color: "bg-blue-500"
  },
  {
    id: 'biss-europe',
    title: "BISS Movement - Europe",
    person: "European Education Forum",
    role: "Uniford Council Initiative",
    description: "Engaging with European education leaders to spread the BISS movement across borders. This dialogue focused on adapting safety standards for diverse educational contexts while maintaining core principles.",
    highlights: [
      "Pan-European safety framework",
      "Multi-lingual resource development",
      "Cross-cultural implementation",
      "Regulatory compliance guidance"
    ],
    image: "/uppsc/global-dialogue-2.png",
    icon: Users,
    color: "bg-green-500"
  },
  {
    id: 'edutech-fair',
    title: "EduTech Fair Participation",
    person: "National Education Summit",
    role: "NCERT & CIET Collaboration",
    description: "Showcasing UPPSC initiatives at India's largest education technology fair. Interactive sessions demonstrated how technology can enhance school safety and standardization efforts.",
    highlights: [
      "Digital safety tools demo",
      "Smart audit systems",
      "EdTech integration strategies",
      "Future of school safety"
    ],
    image: "/uppsc/global-dialogue-3.png",
    icon: Lightbulb,
    color: "bg-purple-500"
  },
  {
    id: 'sdg-energy',
    title: "SDG - Natural Energy",
    person: "Director, Chankya International Academy",
    role: "UPPSC Expert Session",
    description: "Expert session on Solar & Hydrogen energy solutions that can transform schools into sustainable institutions. This dialogue explored practical implementation strategies for renewable energy in educational settings.",
    highlights: [
      "Solar power integration",
      "Hydrogen fuel education",
      "Cost-effective solutions",
      "Carbon footprint reduction"
    ],
    image: "/uppsc/expert-session.png",
    icon: Leaf,
    color: "bg-yellow-500"
  },
  {
    id: 'global-standards',
    title: "Global Safety Standards",
    person: "International Safety Council",
    role: "Cross-border Education Initiative",
    description: "Building frameworks for international school safety standards. This ongoing dialogue creates bridges between educational systems worldwide, fostering best practices exchange.",
    highlights: [
      "International benchmarking",
      "Safety certification framework",
      "Global compliance standards",
      "Recognition protocols"
    ],
    image: "/lovable-uploads/uniford-flags.png",
    icon: Award,
    color: "bg-red-500"
  }
];

const UPPSCGlobalDialogues = () => {
  const [activeDialogue, setActiveDialogue] = useState(0);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 grid grid-cols-10 gap-3">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-black rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-yellow-400 text-black font-bold mb-4 px-6 py-2">
            <Globe className="w-4 h-4 mr-2 inline" />
            Global Dialogues
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
            International <span className="bg-yellow-400 px-2">Conversations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading discussions with global experts shaping the future of safe & standard schools
          </p>
        </div>

        {/* Tab-based Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Sidebar - Tab Navigation */}
          <div className="lg:col-span-4 space-y-2">
            {dialogues.map((dialogue, index) => {
              const IconComponent = dialogue.icon;
              return (
                <button
                  key={dialogue.id}
                  onClick={() => setActiveDialogue(index)}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-center gap-3 ${
                    activeDialogue === index
                      ? 'bg-yellow-400 text-black shadow-lg scale-[1.02]'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    activeDialogue === index ? 'bg-black text-yellow-400' : dialogue.color + ' text-white'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-bold truncate ${activeDialogue === index ? 'text-black' : 'text-gray-800'}`}>
                      {dialogue.title}
                    </p>
                    <p className={`text-sm truncate ${activeDialogue === index ? 'text-black/70' : 'text-gray-500'}`}>
                      {dialogue.role}
                    </p>
                  </div>
                </button>
              );
            })}

            {/* Progress Indicator */}
            <div className="flex gap-2 pt-4 justify-center">
              {dialogues.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDialogue(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeDialogue === index ? 'w-8 bg-yellow-400' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Content Area */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Content Details */}
              <div className="space-y-6 order-2 md:order-1">
                <div>
                  <Badge className={`${dialogues[activeDialogue].color} text-white font-bold mb-3`}>
                    Dialogue {activeDialogue + 1}
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-black text-black mb-2">
                    {dialogues[activeDialogue].title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-700">{dialogues[activeDialogue].person}</p>
                  <p className="text-sm text-gray-500 mb-4">{dialogues[activeDialogue].role}</p>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {dialogues[activeDialogue].description}
                </p>

                {/* Highlights */}
                <div className="space-y-2">
                  <p className="font-bold text-black text-sm uppercase tracking-wider">Key Highlights</p>
                  <div className="grid grid-cols-2 gap-2">
                    {dialogues[activeDialogue].highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image Area */}
              <div className="relative order-1 md:order-2">
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-yellow-400/30 rounded-full blur-xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src={dialogues[activeDialogue].image}
                    alt={dialogues[activeDialogue].title}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                        <Globe className="w-4 h-4 text-black" />
                      </div>
                      <span className="text-white text-sm font-medium">Powered by Uniford</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPPSCGlobalDialogues;
