
import React from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import StoreProducts from "@/components/store/StoreProducts";
import StoreSuggestions from "@/components/store/StoreSuggestions";
import { Button } from "@/components/ui/button";
import { MessageSquarePlus } from "lucide-react";

const PremiumStore = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-unifor-dark-purple to-unifor-purple text-white py-16 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <img 
              src="https://www.uniford.org/uniford-main/uniford1.jpg"
              alt="Premium Products" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full mb-4 animate-pulse">
                <span className="text-white font-medium tracking-wider text-sm">Non-profit Organization</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Store</h1>
              <p className="text-lg md:text-xl mb-6">
                Exclusive merchandise and resources for Uniford scholars
              </p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-unifor-dark-purple">
              Featured Products
            </h2>
            <Button 
              variant="outline"
              onClick={() => window.open('https://forms.google.com/your-form-id', '_blank')}
              className="flex items-center gap-2"
            >
              <MessageSquarePlus className="h-5 w-5" />
              Suggest Product
            </Button>
          </div>
          
          <StoreProducts />
          <StoreSuggestions />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PremiumStore;
