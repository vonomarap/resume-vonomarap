import { useEffect } from "react";

import { Header } from "@/components/header";
import { useActiveSection } from "@/hooks/use-active-section";
import { useLocale } from "@/hooks/use-locale";
import { observableSectionIds } from "@/data/navigation";
import { profiles } from "@/data/profile";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { EducationSection } from "@/sections/education-section";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

export default function App() {
  const { locale } = useLocale();
  const activeSection = useActiveSection([...observableSectionIds]);
  const profile = profiles[locale];

  useEffect(() => {
    document.title = profile.metaTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription?.setAttribute("content", profile.metaDescription);
  }, [profile.metaDescription, profile.metaTitle]);

  return (
    <div className="relative min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
