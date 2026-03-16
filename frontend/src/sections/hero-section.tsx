import { ArrowDown, ArrowUpRight, Download, Github, Mail, Terminal } from "lucide-react";

import { contactLinks } from "@/data/contact";
import { profiles } from "@/data/profile";
import { useLocale } from "@/hooks/use-locale";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function HeroSection() {
  const { locale } = useLocale();
  const profile = profiles[locale];
  const githubLink = contactLinks.find((item) => item.id === "github")?.href ?? "#";

  return (
    <section id="home" className="section-shell overflow-hidden pt-16 sm:pt-20">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="space-y-8">
          <div className="space-y-6">
            <Badge className="font-mono uppercase tracking-[0.24em]">
              {profile.role}
            </Badge>
            <div className="space-y-5">
              <h1 className="text-balance font-heading text-4xl font-extrabold tracking-tight text-gradient sm:text-5xl lg:text-6xl">
                {profile.headline}
              </h1>
              <p className="max-w-2xl text-balance text-lg leading-8 text-muted-foreground">
                {profile.tagline}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">
                {profile.heroButtons.projects}
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="./Vlad-Junior-Java-Backend-Developer-Resume.pdf" download>
                <Download className="h-4 w-4" />
                {profile.heroButtons.resume}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail className="h-4 w-4" />
                {profile.heroButtons.contact}
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={githubLink} target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" />
                {profile.heroButtons.github}
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap gap-3">
            {profile.heroBullets.map((item) => (
              <Badge key={item} variant="outline" className="rounded-full px-4 py-2 text-sm">
                {item}
              </Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <Card className="relative overflow-hidden rounded-[32px] bg-hero-glow">
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_0_16px_-4px_hsl(var(--primary)/0.4)]">
                    <Terminal className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">
                      {profile.developerSnapshot.eyebrow}
                    </p>
                    <CardTitle className="mt-1 text-2xl">
                      {profile.developerSnapshot.title}
                    </CardTitle>
                  </div>
                </div>
                <Badge variant="secondary">{profile.developerSnapshot.availabilityLabel}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* ---------- terminal block ---------- */}
              <div className="rounded-[28px] border border-primary/15 bg-[hsl(270_40%_6%)] px-5 py-5 font-mono text-sm text-purple-100 shadow-panel">
                <div className="mb-4 flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-3">
                  {profile.developerSnapshot.lines.map((line) => (
                    <div key={line} className="flex gap-3">
                      <span className="text-[hsl(270_85%_68%)]">$</span>
                      <span>{line}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {profile.developerSnapshot.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="bg-background/60">
                    {badge}
                  </Badge>
                ))}
              </div>

              <div className="grid gap-4 rounded-[28px] border border-border/70 bg-background/70 p-5 sm:grid-cols-2">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {profile.developerSnapshot.priorityTitle}
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    {profile.developerSnapshot.priorityDescription}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                    {profile.developerSnapshot.strengthTitle}
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    {profile.developerSnapshot.strengthDescription}
                  </p>
                </div>
              </div>

              <Button asChild variant="ghost" className="justify-start px-0">
                <a href="#projects">
                  {profile.developerSnapshot.projectsLabel}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  );
}
