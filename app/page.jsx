// app/page.jsx
import ChallengeFlow from "@/components/ChallengeFlow";
import ChallengePackages from "@/components/ChallengePackages";
import CTASection from "@/components/CTASection";
import HeroSection from "@/components/HeroSection";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function HomePage() {
  return (
    <main className="bg-white text-gray-900 scroll-smooth">
      <HeroSection />
      <WhyChooseUs />
      <ChallengeFlow />
      <ChallengePackages />
      <Testimonials />
      <CTASection />
    </main>
  );
}
