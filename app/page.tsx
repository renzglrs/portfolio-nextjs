import ContactSection from "@/src/components/ContactSection";
import HeroSection from "@/src/components/HeroSection";
import SkillsSection from "@/src/components/skills/SkillsSection";
import BentoGrid from "@/src/components/bento/BentoGrid";

export default function HomePage() {
  return (
    <main className="container max-w-[700px] flex flex-col gap-10 pb-40 max-md:pt-6">
        {/* Hero Component */}
        <HeroSection />

        {/* Bento Grid */}
        <BentoGrid />

        {/* Skills Component */}
        <SkillsSection />

        {/* Projects Component */}

        {/* Contact me Component */}
        <ContactSection />
    </main>
  )
}


