import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, GraduationCap, Building } from 'lucide-react';

const financialAid = [
  {
    title: "Free Programs",
    description: "Comprehensive free educational programs and establishment support for underprivileged schools.",
    image: "/lovable-uploads/baf6c96d-a314-4745-ba69-67672aa9a098.png",
    icon: GraduationCap
  },
  {
    title: "CSR Funded",
    description: "Corporate Social Responsibility backed programs enabling quality education access.",
    image: "/lovable-uploads/be3517cc-e81e-4f61-a133-019267cf75c1.png",
    icon: Building
  },
  {
    title: "Philanthropist Projects",
    description: "Methodology-driven initiatives supported by educational philanthropists worldwide.",
    image: "/lovable-uploads/cf19831c-2c00-4761-8379-c6757b623d07.png",
    icon: Heart
  }
];

const UPPSCFinancialAid = () => {
  return (
    <section className="py-20 bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-black text-yellow-400 font-bold mb-4">
            <Heart className="w-4 h-4 mr-2 inline" />
            Financial Aid to Students
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
            Free Programs & Methodology
          </h2>
          <p className="text-black/70 max-w-2xl mx-auto">
            Comprehensive financial aid programs through CSR & philanthropist funded initiatives
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {financialAid.map((program, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-white">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="bg-yellow-400 p-3 rounded-full">
                    <program.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-xl text-black mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UPPSCFinancialAid;
