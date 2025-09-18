import AnnouncementBar from "@/components/sections/announcement-bar";
import Navigation from "@/components/sections/navigation";
import HeroSection from "@/components/sections/hero-section";
import ViralContentSection from "@/components/sections/viral-content-section";
import TrustedBySection from "@/components/sections/trusted-by-section";
import StatsSection from "@/components/sections/stats-section";
import ProductOverview from "@/components/sections/product-overview";
import FeaturesSection from "@/components/sections/features-section";
import UseCasesSection from "@/components/sections/use-cases";
import HowItWorks from "@/components/sections/how-it-works";
import AccuracySection from "@/components/sections/accuracy-section";
import TestimonialsSection from "@/components/sections/testimonials";
import PricingSection from "@/components/sections/pricing-section";
import FaqSection from "@/components/sections/faq-section";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background-primary">
      <AnnouncementBar />
      <Navigation />
      <main>
        <HeroSection />
        <ViralContentSection />
        <TrustedBySection />
        <StatsSection />
        <ProductOverview />
        <FeaturesSection />
        <UseCasesSection />
        <HowItWorks />
        <AccuracySection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}