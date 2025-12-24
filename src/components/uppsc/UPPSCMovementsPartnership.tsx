import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Award, Leaf, ArrowRight, Building, Globe, Users, Sparkles, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const partnerships = [
  {
    id: 'biss',
    title: 'BISS Movement',
    subtitle: 'Bringing International Standards & Safety',
    partner: 'SSSA',
    icon: Shield,
    color: 'bg-blue-500',
    description: 'UPPSC with support of SSSA (Safe & Standard Schools Alliance) launches the BISS Movement to bring international safety standards and protocols to every school.',
    image: '/sssa/safety-audit.png',
    features: [
      'Comprehensive Safety Audits',
      'Standard Compliance Framework',
      'International Safety Protocols',
      'Teacher Training Programs',
      'Annual Safety Certification'
    ],
    link: '/sssa',
    linkText: 'Explore SSSA'
  },
  {
    id: 'greats',
    title: 'Greats Movement',
    subtitle: 'Great Place to Learn Recognition',
    partner: 'Uniford',
    icon: Award,
    color: 'bg-yellow-500',
    description: 'UPPSC with support of Uniford Foundation launches the Greats Movement to recognize schools as "Great Place to Learn" based on excellence in education, infrastructure, and student outcomes.',
    image: '/greats/gptl-schools.jpeg',
    features: [
      'Great Place to Learn Certification',
      'Excellence Recognition Awards',
      'Global School Rankings',
      'Quality Education Standards',
      'International Visibility'
    ],
    link: '/greats',
    linkText: 'Explore Greats'
  },
  {
    id: 'ccb',
    title: 'Carbon Credit Bank',
    subtitle: 'Climate Action for Schools',
    partner: 'Uniford',
    icon: Leaf,
    color: 'bg-green-500',
    description: 'UPPSC with support of Uniford Foundation establishes Climate Carbon Banks in schools to promote sustainability, environmental education, and green initiatives.',
    image: '/lovable-uploads/uniford-art-display.png',
    features: [
      'School Climate Carbon Bank',
      'Green Campus Initiatives',
      'Student-led Sustainability',
      'Carbon Credit Points System',
      'Climate Action Drives'
    ],
    link: '#carbon-credit-bank',
    linkText: 'Learn More'
  }
];

const UPPSCMovementsPartnership = () => {
  const [activePartnership, setActivePartnership] = useState(0);

  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-yellow-400 text-black font-bold mb-4 px-6 py-2">
            <Globe className="w-4 h-4 mr-2 inline" />
            Strategic Partnerships
          </Badge>
          <h2 className="text-3xl md:text-5xl font-black mb-4 text-white">
            UPPSC <span className="text-yellow-400">Movements</span>
          </h2>
          <p className="text-amber-100/80 max-w-3xl mx-auto text-lg">
            UPPSC collaborates with SSSA and Uniford Foundation to launch transformative movements for schools
          </p>
        </div>

        {/* Partnership Visual */}
        <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
          <div className="flex items-center gap-2 bg-black/30 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-500/30">
            <Building className="w-6 h-6 text-yellow-400" />
            <span className="text-white font-bold">UPPSC</span>
          </div>
          <span className="text-yellow-400 text-2xl font-bold">+</span>
          <div className="flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30">
            <img src="/sssa-logo.png" alt="SSSA" className="h-6 object-contain" />
            <span className="text-white font-bold">SSSA</span>
          </div>
          <span className="text-yellow-400 text-2xl font-bold">+</span>
          <div className="flex items-center gap-2 bg-yellow-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-yellow-400/30">
            <img src="/uniford-logo.png" alt="Uniford" className="h-6 object-contain bg-white rounded p-1" />
            <span className="text-white font-bold">Uniford</span>
          </div>
        </div>

        {/* Tab-based Sidebar Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-3">
            {partnerships.map((partnership, index) => (
              <button
                key={partnership.id}
                onClick={() => setActivePartnership(index)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 border-2 ${
                  activePartnership === index
                    ? 'bg-yellow-400 text-black border-yellow-400 shadow-lg'
                    : 'bg-black/20 text-white border-white/10 hover:bg-black/40 hover:border-yellow-400/50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${partnership.color} p-3 rounded-xl`}>
                    <partnership.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{partnership.title}</h3>
                    <p className={`text-sm ${activePartnership === index ? 'text-black/70' : 'text-white/60'}`}>
                      With {partnership.partner}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3">
            <Card className="bg-white/10 backdrop-blur-sm border-yellow-500/20 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={partnerships[activePartnership].image} 
                  alt={partnerships[activePartnership].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <Badge className={`${partnerships[activePartnership].color} text-white font-bold mb-2`}>
                    {partnerships[activePartnership].partner} Partnership
                  </Badge>
                  <h3 className="text-2xl font-bold text-white">{partnerships[activePartnership].title}</h3>
                  <p className="text-yellow-300">{partnerships[activePartnership].subtitle}</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-white/90 mb-6 text-lg leading-relaxed">
                  {partnerships[activePartnership].description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {partnerships[activePartnership].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-white/80">
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                {partnerships[activePartnership].link.startsWith('#') ? (
                  <a href={partnerships[activePartnership].link}>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                      {partnerships[activePartnership].linkText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                ) : (
                  <Link to={partnerships[activePartnership].link}>
                    <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
                      {partnerships[activePartnership].linkText}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UPPSCMovementsPartnership;
