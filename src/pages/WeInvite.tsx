
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import PartnerHeroSection from '@/components/partner/PartnerHeroSection';
import AboutUnifold from '@/components/partner/AboutUnifold';
import WhyWorkWithUs from '@/components/partner/WhyWorkWithUs';
import PartnershipPolicy from '@/components/partner/PartnershipPolicy';
import SpecialBacking from '@/components/partner/SpecialBacking';
import PartnershipJourney from '@/components/partner/PartnershipJourney';
import PartnershipForm from '@/components/partner/PartnershipForm';

const WeInvite = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "We Invite - Uniford Council";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-16">
        <PartnerHeroSection />
        <AboutUnifold />
        <WhyWorkWithUs />
        <PartnershipPolicy />
        <SpecialBacking />
        <PartnershipJourney />
        <PartnershipForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default WeInvite;
