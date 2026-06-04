import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ProductsSection from '@/components/ProductsSection';
import MoneyManagementSection from '@/components/MoneyManagementSection';
import MobileExperienceSection from '@/components/MobileExperienceSection';
import SecuritySection from '@/components/SecuritySection';
import LoansSection from '@/components/LoansSection';
import FinancialToolsSection from '@/components/FinancialToolsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ResourcesSection from '@/components/ResourcesSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProductsSection />
      <MoneyManagementSection />
      <MobileExperienceSection />
      <SecuritySection />
      <LoansSection />
      <FinancialToolsSection />
      <TestimonialsSection />
      <ResourcesSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
