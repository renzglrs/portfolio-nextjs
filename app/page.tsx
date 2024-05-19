import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";

export default function HomePage() {
  return (
    <section className="flex flex-col gap-10">
      {/* Hero Component */}
      <HeroSection />

      {/* Skills Component */}
      <SkillsSection />

      {/* Projects Component */}

      {/* Contact me Component */}
      <ContactSection />
    </section>
  )
}


