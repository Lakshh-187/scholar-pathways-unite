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
import IDCardServices from "./pages/IDCardServices";
import OfficialDocuments from "./pages/OfficialDocuments";
import SocialInternship from "./pages/SocialInternship";
import NotFound from "./pages/NotFound";
import WhatsAppHelpDesk from "./components/WhatsAppHelpDesk";
import LegalPolicy from "./pages/LegalPolicy";
import PremiumStore from "./pages/PremiumStore";
import Published from "./pages/Published";
import WeInvite from "./pages/WeInvite";
import FAQUpdates from "./pages/FAQUpdates";
import H1BScholar from "./pages/H1BScholar";
import Career from "./pages/Career";
import Leaders from "./pages/Leaders";
import Memories from "./pages/Memories";
import S700 from "./pages/S700";
import LetterOfAcceptance from "./pages/LetterOfAcceptance";
import LetterOfClearance from "./pages/LetterOfClearance";
import Apply from "./pages/Apply";
import UTHA from "./pages/UTHA";
import GFT from "./pages/GFT";
import Frontliner from "./pages/Frontliner";
import HerHaVa from "./pages/HerHaVa";
import HerHaVaManual from "./pages/HerHaVaManual";
import NotificationBanner from "./components/NotificationBanner";
import OfferLetter from "./pages/OfferLetter";
import BadgeID from "./pages/BadgeID";
import CertificateGenerator from "./pages/CertificateGenerator";
import DocumentAuthentication from "./pages/DocumentAuthentication";
import UIS from "./pages/UIS";
import UNCIF from "./pages/UNCIF";
import Grants from "./pages/Grants";
import GrantsDetails from "./pages/GrantsDetails";
import CertificateAwards from "./pages/CertificateAwards";
import UICSS from "./pages/UICSS";
import Elite from "./pages/Elite";
import UNCIFCertified from "./pages/UNCIFCertified";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NotificationBanner />
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
          <Route path="/id-card-services" element={<IDCardServices />} />
          <Route path="/social-internship" element={<SocialInternship />} />
          <Route path="/official-documents" element={<OfficialDocuments />} />
          <Route path="/legal-policy" element={<LegalPolicy />} />
          <Route path="/premium-store" element={<PremiumStore />} />
          <Route path="/published" element={<Published />} />
          <Route path="/we-invite" element={<WeInvite />} />
          <Route path="/faq-updates" element={<FAQUpdates />} />
          <Route path="/h1b-scholar" element={<H1BScholar />} />
          <Route path="/career" element={<Career />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/memories" element={<Memories />} />
          <Route path="/s700" element={<S700/>} />
          <Route path="/letter-of-clearance" element={<LetterOfClearance />} />
          <Route path="/letter-of-acceptance" element={<LetterOfAcceptance />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/utha" element={<UTHA />} />
          <Route path="/gft" element={<GFT />} />
          <Route path="/frontliner" element={<Frontliner />} />
          <Route path="/her-hava" element={<HerHaVa />} />
          <Route path="/her-hava-manual" element={<HerHaVaManual />} />
          <Route path="/offer-letter" element={<OfferLetter />} />
          <Route path="/badge-id" element={<BadgeID />} />
          <Route path="/certificate-generator" element={<CertificateGenerator />} />
          <Route path="/document-authentication" element={<DocumentAuthentication />} />
          <Route path="/uis" element={<UIS />} />
          <Route path="/uncif" element={<UNCIF />} />
          <Route path="/grants" element={<Grants />} />
          <Route path="/grants-details" element={<GrantsDetails />} />
          <Route path="/certificate-awards" element={<CertificateAwards />} />
          <Route path="/uicss" element={<UICSS />} />
          <Route path="/elite" element={<Elite />} />
          <Route path="/uncif-certified" element={<UNCIFCertified />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppHelpDesk />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
