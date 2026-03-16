import { educationItems, selfStudyTopics } from "@/data/education";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection() {
  return (
    <section id="education" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Education"
            title="Learning is shown as a timeline, not filler"
            description="This section keeps formal education, courses, and self-study visible without inventing work experience that does not exist."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 border-l border-border/70 pl-5">
            {educationItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card className="relative">
                  <span className="absolute -left-[1.55rem] top-8 h-3 w-3 rounded-full bg-primary" />
                  <CardHeader>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                      {item.period}
                    </p>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Self-study focus areas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-muted-foreground">
                  The strongest gains come from studying concepts and applying them immediately in small backend systems.
                </p>
                <div className="flex flex-wrap gap-3">
                  {selfStudyTopics.map((topic) => (
                    <Badge key={topic} variant="outline" className="px-4 py-2 text-sm">
                      {topic}
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
