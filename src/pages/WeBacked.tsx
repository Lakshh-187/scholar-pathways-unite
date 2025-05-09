
import { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import BackedHeroSection from '@/components/backed/BackedHeroSection';
import InstituteTransformation from '@/components/backed/InstituteTransformation';
import BackedOfferings from '@/components/backed/BackedOfferings';
import InstituteResponsibilities from '@/components/backed/InstituteResponsibilities';
import BackedMotivation from '@/components/backed/BackedMotivation';
import ProblemsSolved from '@/components/backed/ProblemsSolved';
import BackedJourney from '@/components/backed/BackedJourney';
import BackedAgreementForm from '@/components/backed/BackedAgreementForm';

const WeBacked = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "We Backed - Uniford Council";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow pt-16">
        <BackedHeroSection />
        <InstituteTransformation />
        <BackedOfferings />
        <InstituteResponsibilities />
        <BackedMotivation />
        <ProblemsSolved />
        <BackedJourney />
        <BackedAgreementForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default WeBacked;
