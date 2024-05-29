import ContactSection from "./home/contact/ContactSection";
import HeroSection from "@/app/home/hero/HeroSection";
import SkillsSection from "@/app/home/skills/components/SkillsSection";
import BentoGrid from "@/app/components/bento/BentoGrid"

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


