import { ArrowDown, Download, Github, Mail } from "lucide-react";

import { contactLinks } from "@/data/contact";
import { profiles } from "@/data/profile";
import { useLocale } from "@/hooks/use-locale";
import { AnimatedTerminal } from "@/components/animated-terminal";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const terminalLines = {
  ru: [
    { command: "cat profile.json", output: '{ "stack": "Java, Spring, SQL" }' },
    { command: "echo $DATABASES", output: "MySQL, PostgreSQL" },
    { command: "echo $TOOLS", output: "Python, Git" },
    { command: "echo $STATUS", output: "Ищу позицию junior backend-разработчика" },
    { command: "ls projects/", output: "auth-service/" },
  ],
  en: [
    { command: "cat profile.json", output: '{ "stack": "Java, Spring, SQL" }' },
    { command: "echo $DATABASES", output: "MySQL, PostgreSQL" },
    { command: "echo $TOOLS", output: "Python, Git" },
    { command: "echo $STATUS", output: "Looking for a junior backend role" },
    { command: "ls projects/", output: "auth-service/" },
  ],
} as const;

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
              <h1 className="text-balance font-brand text-4xl leading-[0.98] text-gradient sm:text-5xl lg:text-6xl">
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
          <AnimatedTerminal
            title="vlad@dev:~"
            lines={terminalLines[locale]}
            typingSpeed={35}
            lineDelay={500}
          />
        </Reveal>
      </div>
    </section>
  );
}
