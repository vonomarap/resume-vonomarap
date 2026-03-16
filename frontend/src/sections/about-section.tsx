import { profile } from "@/data/profile";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  return (
    <section id="about" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A junior backend profile built around practical progress"
            description={profile.summary}
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {profile.aboutHighlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.06}>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
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
      </div>
    </section>
  );
}
