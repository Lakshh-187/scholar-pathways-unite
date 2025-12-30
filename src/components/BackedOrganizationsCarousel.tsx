import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Building2, Globe, Award, Briefcase } from 'lucide-react';

const organizations = [
  { 
    name: "TUQ Service", 
    country: "India", 
    countryCode: "IN", 
    url: "https://www.youngburg.com/", 
    grants: "Education & Innovation Grants",
    description: "Leading educational innovation partner providing cutting-edge solutions for modern learning.",
    icon: Building2
  },
  { 
    name: "PTV Global", 
    country: "South Africa", 
    countryCode: "ZA", 
    url: "https://www.ptvevent.com/", 
    grants: "Event & Cultural Grants",
    description: "Global event management partner fostering cultural exchange and educational events.",
    icon: Globe
  },
  { 
    name: "CIA", 
    country: "India", 
    countryCode: "IN", 
    url: "https://ciarampur.org", 
    grants: "Research & Development Grants",
    description: "Research institution driving innovation in education and community development.",
    icon: Award
  },
  { 
    name: "Stanburg", 
    country: "India", 
    countryCode: "IN", 
    url: "https://uniwave.in", 
    grants: "Technology & Learning Grants",
    description: "Technology partner enabling digital transformation in educational institutions.",
    icon: Briefcase
  },
  { 
    name: "Ablestar", 
    country: "India", 
    countryCode: "IN", 
    url: "https://ablestar.youngburg.com/", 
    grants: "Innovation & Startup Grants",
    description: "Startup ecosystem partner supporting student entrepreneurs and innovators.",
    icon: Building2
  },
  { 
    name: "NCHW", 
    country: "Indo-Canada", 
    countryCode: "CA", 
    url: "https://uniwave.in", 
    grants: "Global Partnership Grants",
    description: "International collaboration hub connecting educational institutions across borders.",
    icon: Globe
  },
  { 
    name: "UIRAD", 
    country: "Global", 
    countryCode: "UN", 
    url: "/uirad", 
    grants: "Educational Excellence Grants",
    description: "Research and development wing driving educational innovation worldwide.",
    icon: Award
  },
];

const BackedOrganizationsCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeOrg = organizations[activeIndex];
  const IconComponent = activeOrg.icon;

  return (
    <section className="py-20 bg-gradient-to-b from-background via-purple-50/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-purple-400 blur-3xl top-0 left-0 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-pink-400 blur-3xl bottom-0 right-0 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-purple-100 text-purple-700 px-4 py-2 mb-4 text-lg">
            OUR NETWORK
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Our Backed Organizations
          </h2>
          <p className="text-muted-foreground text-lg">
            Trusted partners making a global impact
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-5 space-y-2">
            {organizations.map((org, index) => (
              <button
                key={org.name}
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left px-5 py-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                  activeIndex === index
                    ? "bg-purple-600 text-white shadow-lg"
                    : "bg-card hover:bg-purple-50 text-foreground border border-border/50"
                }`}
              >
                <div className={`text-3xl`}>
                  {org.countryCode === "IN" && "🇮🇳"}
                  {org.countryCode === "ZA" && "🇿🇦"}
                  {org.countryCode === "CA" && "🇨🇦"}
                  {org.countryCode === "UN" && "🌐"}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-sm">{org.name}</h4>
                  <p className={`text-xs mt-0.5 ${
                    activeIndex === index ? "text-white/70" : "text-muted-foreground"
                  }`}>
                    {org.country} • {org.grants}
                  </p>
                </div>
                <Badge className={`text-xs ${
                  activeIndex === index ? "bg-white/20 text-white" : "bg-green-100 text-green-700"
                }`}>
                  Active
                </Badge>
              </button>
            ))}
          </div>

          {/* Big Image/Content Area */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-purple-600 to-pink-600">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/90 to-pink-600/90" />
              <div className="relative h-full flex flex-col justify-center items-center text-center p-8 text-white">
                <div className="text-8xl mb-6">
                  {activeOrg.countryCode === "IN" && "🇮🇳"}
                  {activeOrg.countryCode === "ZA" && "🇿🇦"}
                  {activeOrg.countryCode === "CA" && "🇨🇦"}
                  {activeOrg.countryCode === "UN" && "🌐"}
                </div>
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  {activeOrg.country}
                </Badge>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  {activeOrg.name}
                </h3>
                <p className="text-white/80 text-lg mb-4 max-w-md">
                  {activeOrg.description}
                </p>
                <Badge className="bg-white/20 text-white mb-6">
                  {activeOrg.grants}
                </Badge>
                {activeOrg.url !== '#' && (
                  <a 
                    href={activeOrg.url.startsWith('http') ? activeOrg.url : activeOrg.url}
                    target={activeOrg.url.startsWith('http') ? '_blank' : '_self'}
                    rel={activeOrg.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="inline-flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition-colors"
                  >
                    Visit Partner <ExternalLink className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {organizations.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-purple-600' : 'w-2 bg-purple-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BackedOrganizationsCarousel;
