import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SkillsSection() {
  return (
    <section id="skills" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="Clear separation between tools I use confidently and areas I am actively leveling up"
            description="The goal is honest positioning: show what I can already build with confidence, while making current growth areas visible instead of hiding them."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Confident</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {skillGroups.confident.map((skill) => (
                  <Badge key={skill} className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Learning</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-3">
                {skillGroups.learning.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
