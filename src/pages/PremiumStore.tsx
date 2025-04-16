
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
      
      <main className="flex-grow py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold text-unifor-dark-purple">
              Premium Store
            </h1>
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
