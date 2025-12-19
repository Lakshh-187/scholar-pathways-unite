import { Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from 'react';

const ssaImages = [
  { src: "/sssa/safety-audit.png", alt: "Safety Audit" },
  { src: "/sssa/standard-audit.png", alt: "Standard Audit" },
  { src: "/sssa/teacher-training.png", alt: "Teacher Training" },
  { src: "/sssa/incubation-cell.png", alt: "Incubation Cell" },
  { src: "/sssa/helpdesk-launch.png", alt: "Helpdesk Launch" },
  { src: "/sssa/school-cinema.png", alt: "School Cinema" },
  { src: "/sssa/great-school-tour.png", alt: "Great School Tour" },
  { src: "/sssa/ai-green-skills.png", alt: "AI & Green Skills" },
];

const BISSSection = () => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );

  return (
    <section className="py-16 bg-gradient-to-br from-yellow-50 via-white to-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-black transform skew-x-[-12deg] translate-x-20 hidden lg:block opacity-90" />
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-1/4 w-48 h-48 bg-yellow-400/30 rounded-full blur-3xl" />
      
      {/* Dot Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 grid grid-cols-8 gap-2">
          {[...Array(64)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-black rounded-full" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Badge className="bg-yellow-400 text-black font-bold mb-4">SAFETY & STANDARDS</Badge>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-black">
              BISS - Bringing International{' '}
              <span className="bg-yellow-400 px-2">Standard & Safety</span>
            </h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg">
                Transforming educational institutions through comprehensive safety protocols and international standards implementation.
              </p>
              
              <Card className="border-l-4 border-l-yellow-400 bg-white/80 backdrop-blur">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">Global safety standards compliance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">POSH & POCSO implementation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">Cyber safety & digital protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">Environmental & health standards</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Link to="/sssa">
                <Button className="bg-black hover:bg-gray-900 text-white font-bold px-6 py-5 mt-4 shadow-lg">
                  Explore SSSA Movements
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <Carousel
              plugins={[plugin.current]}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {ssaImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-yellow-400">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="bg-yellow-400 text-black font-bold">
                          {image.alt}
                        </Badge>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden md:flex -left-4 bg-yellow-400 text-black border-0 hover:bg-yellow-500" />
              <CarouselNext className="hidden md:flex -right-4 bg-yellow-400 text-black border-0 hover:bg-yellow-500" />
            </Carousel>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-2 right-8 bg-black text-white px-4 py-2 rounded-lg shadow-xl hidden lg:block">
              <span className="font-bold text-sm">SSSA Movement</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BISSSection;
