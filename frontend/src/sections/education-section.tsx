import { educationContent } from "@/data/education";
import { useLocale } from "@/hooks/use-locale";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function EducationSection() {
  const { locale } = useLocale();
  const content = educationContent[locale];

  return (
    <section id="education" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.section.eyebrow}
            title={content.section.title}
            description={content.section.description}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6 border-l border-border/70 pl-5">
            {content.items.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <Card className="relative">
                  <span className="absolute -left-[1.55rem] top-8 h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_2px_hsl(var(--primary)/0.4)]" />
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
                <CardTitle>{content.selfStudyTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-7 text-muted-foreground">
                  {content.selfStudyDescription}
                </p>
                <div className="flex flex-wrap gap-3">
                  {content.selfStudyTopics.map((topic) => (
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
