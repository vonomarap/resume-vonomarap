import { skillsContent } from "@/data/skills";
import { useLocale } from "@/hooks/use-locale";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  const { locale } = useLocale();
  const content = skillsContent[locale];

  return (
    <section id="skills" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.section.eyebrow}
            title={content.section.title}
            description={content.section.description}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{content.categoriesTitle}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 sm:grid-cols-2">
                {content.categories.map((group) => (
                  <div
                    key={group.title}
                    className="rounded-[24px] border border-border/70 bg-background/60 p-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      {group.title}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((skill) => (
                        <Badge key={`${group.title}-${skill}`} className="px-3 py-1.5 text-sm">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{content.learningTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-muted-foreground">
                  {content.learningDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  {content.learning.map((skill) => (
                    <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
