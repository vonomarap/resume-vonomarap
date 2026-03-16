import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Projects are the core proof of capability"
            description="Without commercial experience, the strongest signal comes from how backend projects are structured, documented, and presented. These cards are intentionally designed to look serious and engineering-focused."
          />
        </Reveal>

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.08} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
