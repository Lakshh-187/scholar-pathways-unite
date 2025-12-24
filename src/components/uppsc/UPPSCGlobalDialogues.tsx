import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Globe } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const dialogues = [
  {
    title: "Cyber & Physical Safety",
    person: "Scott Flower",
    role: "Co-founder CIISAC International, Singapore",
    description: "Leading conversations on comprehensive safety measures combining digital security with physical protection for educational institutions worldwide.",
    image: "/lovable-uploads/06d7a363-4fa0-4df2-8417-9267f42b3add.png",
  },
  {
    title: "SDG Movement",
    person: "Dharmender Tomar",
    role: "Director CIA Group of Schools",
    description: "Championing sustainable development goals integration in education, creating a roadmap for schools to contribute to global sustainability.",
    image: "/lovable-uploads/uniford-foundation-event.png",
  },
  {
    title: "School Safety",
    person: "Michelle Yao",
    role: "Co-founder Cyberlite",
    description: "Pioneering digital literacy and safety programs that empower students to navigate the online world safely and responsibly.",
    image: "/lovable-uploads/uniford-edutech-fair.png",
  },
  {
    title: "International Board",
    person: "India - Australia Collaboration",
    role: "Cross-border Educational Initiative",
    description: "Building bridges between educational systems, fostering international standards and cultural exchange for holistic development.",
    image: "/lovable-uploads/uniford-flags.png",
  },
  {
    title: "AI for Education",
    person: "India - UAE Partnership",
    role: "EdTech Innovation Initiative",
    description: "Leveraging artificial intelligence to personalize learning, enhance teaching methodologies, and prepare students for the future.",
    image: "/lovable-uploads/uniford-art-display.png",
  }
];

const UPPSCGlobalDialogues = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 grid grid-cols-12 gap-4">
          {[...Array(144)].map((_, i) => (
            <div key={i} className="w-2 h-2 bg-black rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <Badge className="bg-yellow-400 text-black font-bold mb-4 px-6 py-2">
            <Globe className="w-4 h-4 mr-2 inline" />
            Global Dialogues
          </Badge>
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-black">
            International <span className="bg-yellow-400 px-2">Conversations</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Leading discussions with global experts shaping the future of education
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {dialogues.map((dialogue, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="group overflow-hidden h-full border-2 border-gray-100 hover:border-yellow-400 shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={dialogue.image} 
                      alt={dialogue.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <Badge className="bg-yellow-400 text-black font-bold mb-2">
                        Dialogue {index + 1}
                      </Badge>
                      <h3 className="text-xl font-bold">{dialogue.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6 bg-white">
                    <p className="text-black font-bold text-lg">{dialogue.person}</p>
                    <p className="text-gray-500 text-sm mb-3">{dialogue.role}</p>
                    <p className="text-gray-600 text-sm line-clamp-3">{dialogue.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-yellow-400 text-black border-0 hover:bg-yellow-500" />
          <CarouselNext className="hidden md:flex -right-4 bg-yellow-400 text-black border-0 hover:bg-yellow-500" />
        </Carousel>
      </div>
    </section>
  );
};

export default UPPSCGlobalDialogues;
