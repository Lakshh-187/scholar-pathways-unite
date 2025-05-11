
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Programs from "./pages/Programs";
import UniPitch from "./pages/UniPitch";
import UIRAD from "./pages/UIRAD";
import WeBacked from "./pages/WeBacked";
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
import Published from "./pages/Published";
import WeInvite from "./pages/WeInvite";
import FAQUpdates from "./pages/FAQUpdates";

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
          <Route path="/we-backed" element={<WeBacked />} />
          <Route path="/talent-hunt-alliance" element={<TalentHuntAlliance />} />
          <Route path="/backed-by-uniford" element={<BackedByUniford />} />
          <Route path="/what-matters" element={<WhatMatters />} />
          <Route path="/id-card" element={<IDCard />} />
          <Route path="/social-internship" element={<SocialInternship />} />
          <Route path="/official-documents" element={<OfficialDocuments />} />
          <Route path="/legal-policy" element={<LegalPolicy />} />
          <Route path="/premium-store" element={<PremiumStore />} />
          <Route path="/published" element={<Published />} />
          <Route path="/we-invite" element={<WeInvite />} />
          <Route path="/faq-updates" element={<FAQUpdates />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppHelpDesk />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
