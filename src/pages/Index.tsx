import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { SocialProofBar } from "@/components/SocialProofBar";
import { ToursSection } from "@/components/ToursSection";
import { VanShowcase } from "@/components/VanShowcase";
import { ShuttleSection } from "@/components/ShuttleSection";
import { CreatorSection } from "@/components/CreatorSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ReviewsSection } from "@/components/ReviewsSection";
import { HowItWorks } from "@/components/HowItWorks";
import { FAQSection } from "@/components/FAQSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";
import { MobileBookingBar } from "@/components/MobileBookingBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <SocialProofBar />
        <ToursSection />
        <VanShowcase />
        <ShuttleSection />
        <CreatorSection />
        <WhyChooseUs />
        <ReviewsSection />
        <HowItWorks />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <MobileBookingBar />
    </div>
  );
};

export default Index;
