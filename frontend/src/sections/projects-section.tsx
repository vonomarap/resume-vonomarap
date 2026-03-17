import { projectsContent } from "@/data/projects";
import { useLocale } from "@/hooks/use-locale";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  const { locale } = useLocale();
  const content = projectsContent[locale];
  const singleCardLayout = content.items.length === 1;

  return (
    <section id="projects" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.section.eyebrow}
            title={content.section.title}
            description={content.section.description}
          />
        </Reveal>

        <div className={singleCardLayout ? "mx-auto max-w-xl" : "grid gap-6 xl:grid-cols-3"}>
          {content.items.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} copy={content.card} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
