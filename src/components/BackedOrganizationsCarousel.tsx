import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';

const organizations = [
  { name: "TUQ Service", country: "India", countryCode: "IN", url: "https://www.youngburg.com/", grants: "Education & Innovation Grants" },
  { name: "PTV Global", country: "South Africa", countryCode: "ZA", url: "https://www.ptvevent.com/", grants: "Event & Cultural Grants" },
  { name: "CIA", country: "India", countryCode: "IN", url: "https://ciarampur.org", grants: "Research & Development Grants" },
  { name: "Stanburg", country: "India", countryCode: "IN", url: "https://uniwave.in", grants: "Technology & Learning Grants" },
  { name: "Ablestar", country: "India", countryCode: "IN", url: "https://ablestar.youngburg.com/", grants: "Innovation & Startup Grants" },
  { name: "NCHW", country: "Indo-Canada", countryCode: "CA", url: "https://uniwave.in", grants: "Global Partnership Grants" },
  { name: "UIRAD", country: "Global", countryCode: "UN", url: "/uirad", grants: "Educational Excellence Grants" },
];

const BackedOrganizationsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % organizations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleOrgs = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(organizations[(currentIndex + i) % organizations.length]);
    }
    return visible;
  };

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute h-96 w-96 rounded-full bg-purple-400 blur-3xl top-0 left-0 animate-pulse-soft"></div>
        <div className="absolute h-96 w-96 rounded-full bg-pink-400 blur-3xl bottom-0 right-0 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge variant="outline" className="bg-purple-100 text-purple-700 px-4 py-2 mb-4 text-lg">
            OUR NETWORK
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Backed Organizations
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted partners making a global impact
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {getVisibleOrgs().map((org, index) => (
            <Card 
              key={`${org.name}-${index}`}
              className="hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-2 hover:border-purple-300 animate-fade-in"
            >
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="mb-4 relative">
                    <div className="text-7xl mb-2">
                      {org.countryCode === "IN" && "🇮🇳"}
                      {org.countryCode === "ZA" && "🇿🇦"}
                      {org.countryCode === "CA" && "🇨🇦"}
                      {org.countryCode === "UN" && "🌐"}
                    </div>
                    <Badge className="bg-green-500 text-white text-xs">
                      Grants Available
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl mb-2">{org.name}</h3>
                  <Badge variant="outline" className="mb-2">{org.country}</Badge>
                  <p className="text-xs text-purple-600 font-medium mb-3 px-3 py-1 bg-purple-50 rounded-full">
                    {org.grants}
                  </p>
                  {org.url !== '#' && (
                    <a 
                      href={org.url.startsWith('http') ? org.url : org.url}
                      target={org.url.startsWith('http') ? '_blank' : '_self'}
                      rel={org.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-medium transition-colors"
                    >
                      Visit <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {organizations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-purple-600' : 'w-2 bg-purple-300'
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
