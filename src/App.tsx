import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProductsSection from "@/components/ProductsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import TrustNumbers from "@/components/TrustNumbers";
import SecuritySection from "@/components/SecuritySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ResourcesSection from "@/components/ResourcesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <main className="overflow-hidden bg-stone">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProductsSection />
      <HowItWorksSection />
      <TrustNumbers />
      <SecuritySection />
      <TestimonialsSection />
      <ResourcesSection />
      <CTASection />
      <Footer />
    </main>
  );
}
