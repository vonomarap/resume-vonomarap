import { educationContent } from "@/data/education";
import { useLocale } from "@/hooks/use-locale";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function LearningNowSection() {
  const { locale } = useLocale();
  const content = educationContent[locale].learningSection;

  return (
    <section id="learning-now" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  {content.roadmapLabel}
                </p>
                <h3 className="text-2xl font-semibold tracking-tight">
                  {content.roadmapTitle}
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  {content.roadmapDescription}
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {content.topics.map((topic, index) => (
                  <div
                    key={topic}
                    className="rounded-[24px] border border-border/70 bg-background/60 p-4"
                  >
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                      0{index + 1}
                    </p>
                    <p className="mt-2 font-semibold">{topic}</p>
                  </div>
                ))}
              </div>
            </div>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-3">
                {content.badges.map((badge, index) => (
                  <Badge
                    key={badge}
                    variant={index % 2 === 0 ? "outline" : "secondary"}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
