
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Package, Gift, Heart, ShoppingCart } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Digital Course Bundle",
    type: "digital",
    price: 0,
    description: "Complete learning resources package",
    image: "placeholder.svg"
  },
  {
    id: 2,
    name: "Scholar Merchandise",
    type: "physical",
    price: 499,
    description: "Official Uniford merchandise",
    image: "placeholder.svg"
  },
  {
    id: 3,
    name: "Community Resources",
    type: "free",
    price: 0,
    description: "Donated by our community",
    image: "placeholder.svg"
  }
];

const StoreProducts = () => {
  return (
    <div className="space-y-8 mb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card className="bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="pt-6">
            <Package className="h-8 w-8 text-unifor-purple mb-4" />
            <h3 className="text-lg font-semibold mb-2">Digital Products</h3>
            <p className="text-gray-600">Access our premium digital resources</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-green-50 to-white">
          <CardContent className="pt-6">
            <Gift className="h-8 w-8 text-green-600 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Free Resources</h3>
            <p className="text-gray-600">Community donated materials</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-to-br from-orange-50 to-white">
          <CardContent className="pt-6">
            <Heart className="h-8 w-8 text-red-500 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Social Welfare</h3>
            <p className="text-gray-600">Products supporting our mission</p>
          </CardContent>
        </Card>
      </div>

      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
              <Card>
                <CardContent className="p-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <Badge variant={product.type === 'free' ? 'secondary' : 'default'}>
                    {product.type}
                  </Badge>
                  <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="font-semibold">
                    {product.price === 0 ? 'Free' : `₹${product.price}`}
                  </span>
                  <Button variant="default" size="sm">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.price === 0 ? 'Get Now' : 'Add to Cart'}
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default StoreProducts;
