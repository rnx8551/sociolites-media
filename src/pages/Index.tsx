import { useEffect, lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppButton from "@/components/WhatsAppButton";

// Lazy load all below-the-fold sections for faster initial paint
const MarqueeSection = lazy(() => import("@/components/MarqueeSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ApproachSection = lazy(() => import("@/components/ApproachSection"));
const WhyChooseUsSection = lazy(() => import("@/components/WhyChooseUsSection"));
const IndustriesSection = lazy(() => import("@/components/IndustriesSection"));
const PricingSection = lazy(() => import("@/components/PricingSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const TestimonialSection = lazy(() => import("@/components/TestimonialSection"));
const StatsSection = lazy(() => import("@/components/StatsSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const Footer = lazy(() => import("@/components/Footer"));

// Minimal inline fallback — no layout shift, no spinners
const SectionFallback = () => (
  <div className="w-full py-24" aria-hidden="true" />
);

const Index = () => {
  useEffect(() => {
    document.title = "Sociolites | Digital Marketing Agency in Central India";
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <Suspense fallback={<SectionFallback />}>
          <MarqueeSection />
          <ServicesSection />
          <ApproachSection />
          <WhyChooseUsSection />
          <IndustriesSection />
          <PricingSection />
          <PortfolioSection />
          <FAQSection />
          <TestimonialSection />
          <StatsSection />
          <CTASection />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      <WhatsAppButton />
    </div>
  );
};

export default Index;
