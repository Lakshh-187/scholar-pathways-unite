
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { MythCard } from "./MythCard";
import { MarketInfoCards } from "./MarketInfoCards";
import { mythsFAQData } from "./MythData";

export const MythsAndRealities = () => {
  const [openIllusion, setOpenIllusion] = useState<number | null>(null);
  
  const toggleIllusion = (index: number) => {
    setOpenIllusion(openIllusion === index ? null : index);
  };
  
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
            
            {mythsFAQData.map((illusion, index) => (
              <MythCard 
                key={index}
                myth={illusion}
                isOpen={openIllusion === index}
                onToggle={() => toggleIllusion(index)}
                index={index}
              />
            ))}
          </div>
          
          <div className="mt-12 bg-gradient-to-r from-purple-900/50 to-indigo-900/50 p-6 rounded-xl border border-purple-700/30">
            <p className="text-xl text-center text-purple-200 font-medium">
              Don't let these myths hold you back. Start building your real-world experience today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
