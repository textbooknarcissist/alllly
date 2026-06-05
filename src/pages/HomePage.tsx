import { lazy, Suspense } from "react";
import HeroSection from "@/sections/HeroSection";
import TrustSection from "@/sections/TrustSection";
import ProductsSection from "@/sections/ProductsSection";

const MoneyManagementSection = lazy(() => import("@/sections/MoneyManagementSection"));
const BusinessBankingSection = lazy(() => import("@/sections/BusinessBankingSection"));
const MobileAppSection = lazy(() => import("@/sections/MobileAppSection"));
const SecuritySection = lazy(() => import("@/sections/SecuritySection"));
const LoansSection = lazy(() => import("@/sections/LoansSection"));
const InvestmentSection = lazy(() => import("@/sections/InvestmentSection"));
const TestimonialsSection = lazy(() => import("@/sections/TestimonialsSection"));
const ResourcesSection = lazy(() => import("@/sections/ResourcesSection"));
const FinalCTASection = lazy(() => import("@/sections/FinalCTASection"));

function SectionFallback() {
  return <div className="section-padding" aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ProductsSection />
      <Suspense fallback={<SectionFallback />}>
        <MoneyManagementSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <BusinessBankingSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <MobileAppSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <SecuritySection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <LoansSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <InvestmentSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ResourcesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <FinalCTASection />
      </Suspense>
    </>
  );
}
