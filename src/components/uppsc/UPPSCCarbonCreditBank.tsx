import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Leaf, Building, Lock, Recycle, Trophy, Cake, Calendar,
  Sprout, Package, Palette, FlaskConical, Video, Gift, Heart,
  CheckCircle2, Users, Globe, Banknote
} from 'lucide-react';
import { useState } from 'react';

const bankSections = [
  {
    id: 'establishment',
    title: 'Climate Carbon Bank (CCB)',
    subtitle: 'Establishment & Governance',
    icon: Building,
    color: 'bg-green-600',
    content: {
      description: 'Each participating school establishes a Climate Carbon Bank, jointly governed by School Climate Committee and SSSA/Uniford Climate Cell.',
      items: [
        { icon: Users, text: 'School Climate Committee' },
        { icon: Globe, text: 'SSSA / Uniford Climate Cell' },
      ],
      accepts: [
        'Carbon Actions',
        'Material for Plantation',
        'Student-led Innovations',
        'Minimum Green Fund Contribution'
      ]
    }
  },
  {
    id: 'plantation',
    title: 'Plantation & Eco Resources',
    subtitle: 'What the Carbon Bank Collects',
    icon: Sprout,
    color: 'bg-green-500',
    content: {
      description: 'Waste becomes wealth. Students learn circular economy through collecting and utilizing eco resources.',
      items: [
        { icon: Sprout, text: 'Seeds (fruit, native, medicinal plants)' },
        { icon: Package, text: 'Empty milk packets (used as planters)' },
        { icon: Recycle, text: 'Old tools (spades, watering cans, gloves)' },
        { icon: Leaf, text: 'Reused bottles, grow bags, compost materials' },
      ],
      note: 'Waste becomes wealth. Students learn circular economy.'
    }
  },
  {
    id: 'competitions',
    title: 'Student Competitions & Activities',
    subtitle: 'Earn Carbon Credit Points',
    icon: Trophy,
    color: 'bg-yellow-500',
    content: {
      description: 'Each activity earns Carbon Credit Points for students and schools.',
      items: [
        { icon: Sprout, text: 'Student-designed plantation models' },
        { icon: Palette, text: 'Eco-art & recycled design challenges' },
        { icon: FlaskConical, text: 'Science & sustainability experiments' },
        { icon: Video, text: 'Climate storytelling (posters, reels, short films)' },
      ],
      note: 'Each activity = Carbon Credit Points'
    }
  },
  {
    id: 'donation',
    title: 'Green Donation Box',
    subtitle: 'School Climate Impact Fund',
    icon: Banknote,
    color: 'bg-emerald-600',
    content: {
      description: 'Minimum yearly contribution: ₹11,000 per school. Named as "School Climate Impact Fund".',
      purposes: [
        'Refreshments during drives',
        'Tools & safety gear',
        'Flags, banners & awareness material',
        'Buying plants & saplings'
      ],
      note: 'This fund is not a fee, but a shared climate responsibility.'
    }
  },
  {
    id: 'achiever',
    title: 'Achiever → Plant Gift',
    subtitle: 'Culture Building - Achievement = Responsibility',
    icon: Gift,
    color: 'bg-amber-500',
    content: {
      description: 'Every academic / sports / leadership achiever receives a plant instead of trophy only.',
      items: [
        { icon: Trophy, text: 'Plant tagged with student name & year' },
        { icon: Heart, text: 'Achievement = Responsibility 🌱' },
      ],
      note: 'Creating lasting memories through environmental gifts.'
    }
  },
  {
    id: 'birthday',
    title: 'Birthday Green Ritual',
    subtitle: 'Celebration becomes Contribution',
    icon: Cake,
    color: 'bg-pink-500',
    content: {
      description: 'On student birthday, the student plants one fruit plant and makes a voluntary donation in Climate Box.',
      items: [
        { icon: Sprout, text: 'Student plants one fruit plant' },
        { icon: Gift, text: 'Voluntary donation in Climate Box' },
      ],
      note: 'Celebration becomes contribution.'
    }
  },
  {
    id: 'campaign',
    title: 'Annual Climate Campaign',
    subtitle: 'Climate Action Drive',
    icon: Calendar,
    color: 'bg-blue-600',
    content: {
      description: 'Every year, School + Organization jointly launch "Climate Action Drive" funded entirely by Climate Carbon Bank donations and collected resources.',
      activities: [
        'Mass plantation drives',
        'Clean-up campaigns',
        'Awareness marches',
        'Student-led sustainability fairs'
      ]
    }
  }
];

const UPPSCCarbonCreditBank = () => {
  const [activeSection, setActiveSection] = useState(0);

  return (
    <section id="carbon-credit-bank" className="py-20 bg-gradient-to-br from-green-900 via-emerald-800 to-green-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-green-400 text-black font-bold mb-4 px-6 py-2">
            <Leaf className="w-4 h-4 mr-2 inline" />
            Uniford Initiative
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
            Climate <span className="text-green-400">Carbon Bank</span> (CCB)
          </h2>
          <p className="text-green-100/80 max-w-3xl mx-auto text-lg">
            Empowering schools to take climate action through structured sustainability programs
          </p>
        </div>

        {/* Tab-based Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-2 max-h-[600px] overflow-y-auto pr-2">
            {bankSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(index)}
                className={`w-full text-left p-4 rounded-xl transition-all duration-300 border-2 ${
                  activeSection === index
                    ? 'bg-green-400 text-black border-green-400 shadow-lg'
                    : 'bg-black/20 text-white border-white/10 hover:bg-black/40 hover:border-green-400/50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`${section.color} p-2 rounded-lg`}>
                    <section.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm">{section.title}</h3>
                    <p className={`text-xs ${activeSection === index ? 'text-black/70' : 'text-white/60'}`}>
                      {section.subtitle}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <Card className="bg-white/10 backdrop-blur-sm border-green-500/20 overflow-hidden h-full">
              <CardContent className="p-8">
                <div className={`${bankSections[activeSection].color} inline-block p-4 rounded-2xl mb-6`}>
                  {(() => {
                    const IconComponent = bankSections[activeSection].icon;
                    return <IconComponent className="w-10 h-10 text-white" />;
                  })()}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">
                  {bankSections[activeSection].title}
                </h3>
                <p className="text-green-300 text-lg mb-6">
                  {bankSections[activeSection].subtitle}
                </p>
                
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  {bankSections[activeSection].content.description}
                </p>

                {/* Items */}
                {bankSections[activeSection].content.items && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {bankSections[activeSection].content.items.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-black/20 p-4 rounded-xl border border-green-500/20">
                        <div className="bg-green-500/20 p-2 rounded-lg">
                          <item.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <span className="text-white/90">{item.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Accepts */}
                {bankSections[activeSection].content.accepts && (
                  <div className="bg-black/20 p-6 rounded-xl border border-green-500/20 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Lock className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-bold">Bank Accepts:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {bankSections[activeSection].content.accepts.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Purposes */}
                {bankSections[activeSection].content.purposes && (
                  <div className="bg-black/20 p-6 rounded-xl border border-green-500/20 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Banknote className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-bold">Purpose:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {bankSections[activeSection].content.purposes.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Activities */}
                {bankSections[activeSection].content.activities && (
                  <div className="bg-black/20 p-6 rounded-xl border border-green-500/20 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-bold">Activities Include:</span>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {bankSections[activeSection].content.activities.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/80">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Note */}
                {bankSections[activeSection].content.note && (
                  <div className="bg-green-500/20 p-4 rounded-xl border border-green-400/30">
                    <p className="text-green-300 font-medium italic">
                      💡 {bankSections[activeSection].content.note}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPPSCCarbonCreditBank;
