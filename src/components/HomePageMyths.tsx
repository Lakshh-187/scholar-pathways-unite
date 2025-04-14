
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MarketInfoCards } from "./myths/MarketInfoCards";
import { MythCard } from "./myths/MythCard";
import { mythsFAQData } from "./myths/MythData";
import { Link } from "react-router-dom";

export const HomePageMyths = () => {
  const [openIllusion, setOpenIllusion] = useState<number | null>(0); // Auto-open the first one
  
  const toggleIllusion = (index: number) => {
    setOpenIllusion(openIllusion === index ? null : index);
  };
  
  // Only show first 3 myths on the home page
  const previewMyths = mythsFAQData.slice(0, 3);
  
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="bg-purple-900/50 text-purple-300 border-purple-700 px-4 py-1 mb-4">
              MYTHS & REALITIES
            </Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Common Illusions About Career Success</h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Let's debunk the myths that might be holding you back from reaching your full potential
            </p>
          </div>
          
          <MarketInfoCards />
          
          <div className="space-y-4 mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center text-purple-300">Common Myths Debunked</h3>
            
            {previewMyths.map((illusion, index) => (
              <MythCard 
                key={index}
                myth={illusion}
                isOpen={openIllusion === index}
                onToggle={() => toggleIllusion(index)}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Link to="/what-matters">
              <Button variant="outline" className="bg-purple-900/50 text-purple-300 border-purple-700 hover:bg-purple-800/60">
                Explore All Career Myths
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
