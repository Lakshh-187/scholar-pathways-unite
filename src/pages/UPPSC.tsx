import Layout from '@/components/Layout';
import { Helmet } from 'react-helmet';
import UPPSCHero from '@/components/uppsc/UPPSCHero';
import UPPSCMovementsPartnership from '@/components/uppsc/UPPSCMovementsPartnership';
import UPPSCMemberBenefits from '@/components/uppsc/UPPSCMemberBenefits';
import UPPSCGlobalDialogues from '@/components/uppsc/UPPSCGlobalDialogues';
import UPPSCCarbonCreditBank from '@/components/uppsc/UPPSCCarbonCreditBank';
import UPPSCFinancialAid from '@/components/uppsc/UPPSCFinancialAid';
import UPPSCRankingAwards from '@/components/uppsc/UPPSCRankingAwards';
import UPPSCCTА from '@/components/uppsc/UPPSCCTА';

const UPPSC = () => {
  return (
    <Layout>
      <Helmet>
        <title>UPPSC - Uttar Pradesh Progressive Schools Council | Uniford</title>
        <meta name="description" content="UPPSC - Bringing International Standard & Safety to schools. Backed by Uniford & UNCIF for 1 million safe schools." />
      </Helmet>

      <UPPSCHero />
      <UPPSCMovementsPartnership />
      <UPPSCMemberBenefits />
      <UPPSCGlobalDialogues />
      <UPPSCCarbonCreditBank />
      <UPPSCFinancialAid />
      <UPPSCRankingAwards />
      <UPPSCCTА />
    </Layout>
  );
};

export default UPPSC;
