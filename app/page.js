
export const dynamic = "force-dynamic";
import HeroSection from "@/sections/HeroSection";
import KeyBenefits from "@/sections/KeyBenefits";
// Updated: import the new cinematic FeaturedProjects section
import FeaturedProjectsGrid from "@/sections/FeaturedProjectsGrid";
import Testimonials from "@/sections/Testimonials";
import Pricing from "@/sections/Pricing";
import Resources from "@/sections/Resources";

export default function HomePage() {
  return (
    <>
      {/* ---------------- HERO SECTION ---------------- */}
      <HeroSection />

      {/* ---------------- KEY BENEFITS ---------------- */}
      <KeyBenefits />

      {/* ---------------- SERVICES OVERVIEW ---------------- */}
    

      {/* ---------------- HOW IT WORKS ---------------- */}
      

      {/* ---------------- FEATURED PROJECTS ---------------- */}
      <FeaturedProjectsGrid />

      {/* ---------------- TESTIMONIALS ---------------- */}
      <Testimonials />

      {/* ---------------- PRICING ---------------- */}
      <Pricing />

      {/* ---------------- RESOURCES ---------------- */}
      <Resources />
    </>
  );
}
