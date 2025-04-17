
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const scholars = [
  {
    name: "Alex Johnson",
    achievement: "Tech Innovation Award",
    image: "placeholder.svg"
  },
  {
    name: "Maria Garcia",
    achievement: "Research Excellence",
    image: "placeholder.svg"
  },
  {
    name: "John Smith",
    achievement: "Community Leader",
    image: "placeholder.svg"
  },
  // Add more scholars as needed
];

const ScholarImageCarousel = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-unifor-light-purple/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-unifor-dark-purple mb-4">
            Our Distinguished Scholars
          </h2>
          <p className="text-gray-600">
            Meet the bright minds shaping the future through innovation and excellence
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {scholars.map((scholar, index) => (
              <CarouselItem key={index} className="md:basis-1/3">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <Avatar className="w-24 h-24 mx-auto mb-4">
                      <AvatarImage src={scholar.image} alt={scholar.name} />
                      <AvatarFallback>
                        {scholar.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold mb-2">{scholar.name}</h3>
                    <Badge variant="secondary">{scholar.achievement}</Badge>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default ScholarImageCarousel;
