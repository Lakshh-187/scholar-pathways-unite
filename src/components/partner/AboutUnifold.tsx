
import { Building, Users, GraduationCap } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const AboutUnifold = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="bg-[#D6BCFA] text-[#7E69AB] px-4 py-1 mb-4">
            ABOUT UNIFORD
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforming Education Ecosystem</h2>
          <p className="text-gray-600 text-lg">
            Uniford Foundation is dedicated to transforming both students and institutes with 
            the help of CSR grants, alumni donations, and venture funds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D6BCFA] rounded-lg">
                  <Users className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Student Empowerment</h3>
                  <p className="text-gray-600">
                    We provide resources, platforms, and opportunities to students. Our AI profile 
                    screening helps students connect with worldwide opportunities through our 
                    Talent Hunt Alliance.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D6BCFA] rounded-lg">
                  <Building className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Institute Transformation</h3>
                  <p className="text-gray-600">
                    We help transform institutes to international standards by establishing 
                    Pitchburg, UIRAD, and UIEC programs designed to enhance educational outcomes.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#D6BCFA] rounded-lg">
                  <GraduationCap className="h-6 w-6 text-[#7E69AB]" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">2026 Milestones</h3>
                  <p className="text-gray-600">
                    By 2026, we aim to back 1000+ institutes, reach 100,000 students, 
                    and expand to 25 states across the country.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-[#9b87f5]/20 rounded-2xl"></div>
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-[#D3E4FD]/30 rounded-2xl"></div>
              <div className="absolute inset-0 m-auto w-5/6 h-5/6 bg-white shadow-lg rounded-xl flex items-center justify-center p-6">
                <img src="https://www.uniford.org/uniford-main/uniford1.jpg" alt="Uniford Foundation" className="rounded-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUnifold;
