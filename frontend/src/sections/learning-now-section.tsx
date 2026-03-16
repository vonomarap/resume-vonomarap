import { currentLearningTopics } from "@/data/education";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function LearningNowSection() {
  return (
    <section id="learning-now" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Learning Now"
            title="The next layer of backend depth is already in progress"
            description="This section keeps current growth visible and honest. It shows the direction of the portfolio, not just the current snapshot."
          />
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="overflow-hidden">
            <div className="grid gap-8 p-6 lg:grid-cols-[0.9fr_1.1fr] lg:p-8">
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                  Current roadmap
                </p>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Moving from CRUD confidence to stronger backend engineering habits
                </h3>
                <p className="text-sm leading-7 text-muted-foreground">
                  The current emphasis is on securing APIs, validating architecture choices, adding tests, packaging services cleanly, and understanding delivery workflows.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {currentLearningTopics.map((topic, index) => (
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
                <Badge>Architecture</Badge>
                <Badge variant="secondary">Security</Badge>
                <Badge variant="outline">Containers</Badge>
                <Badge variant="outline">Testing</Badge>
                <Badge variant="secondary">Delivery basics</Badge>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
