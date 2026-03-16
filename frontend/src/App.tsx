import { Header } from "@/components/header";
import { useActiveSection } from "@/hooks/use-active-section";
import { navigationItems } from "@/data/navigation";
import { AboutSection } from "@/sections/about-section";
import { ContactSection } from "@/sections/contact-section";
import { EducationSection } from "@/sections/education-section";
import { Footer } from "@/sections/footer";
import { HeroSection } from "@/sections/hero-section";
import { LearningNowSection } from "@/sections/learning-now-section";
import { ProjectsSection } from "@/sections/projects-section";
import { SkillsSection } from "@/sections/skills-section";

const observableSectionIds = ["home", ...navigationItems.map((item) => item.href.slice(1))];

export default function App() {
  const activeSection = useActiveSection(observableSectionIds);

  return (
    <div className="relative min-h-screen">
      <Header activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <LearningNowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
