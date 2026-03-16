import { ArrowUpRight, Github } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ProjectCardProps = {
  project: {
    title: string;
    description: string;
    stack: readonly string[];
    features: readonly string[];
    githubUrl: string;
  };
  copy: {
    tag: string;
    featuresLabel: string;
    primaryButton: string;
    secondaryButton: string;
  };
};

export function ProjectCard({ project, copy }: ProjectCardProps) {
  return (
    <Card className="group h-full overflow-hidden">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-sky-400 to-cyan-300" />
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="leading-6">
              {project.description}
            </CardDescription>
          </div>
          <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-primary">
            {copy.tag}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary">
              {item}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
          {copy.featuresLabel}
        </p>
        <ul className="grid gap-3 text-sm text-muted-foreground">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-3">
              <span className="mt-1.5 h-2 w-2 rounded-full bg-primary" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="mt-auto flex items-center gap-3">
        <Button asChild className="flex-1">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            <Github className="h-4 w-4" />
            {copy.primaryButton}
          </a>
        </Button>
        <Button asChild variant="outline" className="flex-1">
          <a href={project.githubUrl} target="_blank" rel="noreferrer">
            {copy.secondaryButton}
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
