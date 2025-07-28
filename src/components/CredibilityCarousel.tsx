import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const CredibilityCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-slide every 4 seconds
    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [api]);

  const credibilityImages = [
    {
      src: "/lovable-uploads/2d30ca0a-35c4-4eb0-8b2d-19555a78a337.png",
      alt: "Our Free Workshops & Chapters - Uniford Foundation Programs",
      title: "Our Free Workshops & Chapters"
    },
    {
      src: "/lovable-uploads/61438adf-d790-43aa-82d6-7d96b9e8f931.png",
      alt: "Our Scholars & UF'26 Chapters from Global Universities",
      title: "Our Scholars & UF'26 Chapters"
    },
    {
      src: "/lovable-uploads/83320e27-0b79-43f5-8e30-6e45043a85a9.png",
      alt: "Scholar Program - Uniford Foundation Success Stories",
      title: "Scholar Program Success"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Credibility & Global Reach
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing our impact through workshops, global university partnerships, and successful scholar programs
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <Carousel 
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {credibilityImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-700"
                      />
                      <div className="p-6 text-center">
                        <h3 className="text-xl font-semibold text-gray-800">
                          {image.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CredibilityCarousel;