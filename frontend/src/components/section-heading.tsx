import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl space-y-4">
      <Badge variant="outline" className="font-mono uppercase tracking-[0.24em]">
        {eyebrow}
      </Badge>
      <h2 className="text-balance font-heading text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-balance text-base leading-7 text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
