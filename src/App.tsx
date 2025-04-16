import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import UniPitch from "./pages/UniPitch";
import UIRAD from "./pages/UIRAD";
import TalentHuntAlliance from "./pages/TalentHuntAlliance";
import BackedByUniford from "./pages/BackedByUniford";
import WhatMatters from "./pages/WhatMatters";
import IDCard from "./pages/IDCard";
import OfficialDocuments from "./pages/OfficialDocuments";
import SocialInternship from "./pages/SocialInternship";
import NotFound from "./pages/NotFound";
import WhatsAppHelpDesk from "./components/WhatsAppHelpDesk";
import LegalPolicy from "./pages/LegalPolicy";
import PremiumStore from "./pages/PremiumStore";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/uni-pitch" element={<UniPitch />} />
          <Route path="/uirad" element={<UIRAD />} />
          <Route path="/talent-hunt-alliance" element={<TalentHuntAlliance />} />
          <Route path="/backed-by-uniford" element={<BackedByUniford />} />
          <Route path="/what-matters" element={<WhatMatters />} />
          <Route path="/id-card" element={<IDCard />} />
          <Route path="/social-internship" element={<SocialInternship />} />
          <Route path="/official-documents" element={<OfficialDocuments />} />
          <Route path="/legal-policy" element={<LegalPolicy />} />
          <Route path="/premium-store" element={<PremiumStore />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppHelpDesk />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
