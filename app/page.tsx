import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <main className="container max-w-[700px] flex flex-col gap-10 pt-10 pb-40 max-md:pt-6">
        {/* Hero Component */}
        <HeroSection />

        {/* Skills Component */}
        <SkillsSection />

        {/* Projects Component */}

        {/* Contact me Component */}
        <ContactSection />
    </main>
  )
}


