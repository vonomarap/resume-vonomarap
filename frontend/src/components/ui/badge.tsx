import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-primary/25 bg-primary/10 text-primary shadow-[0_0_12px_-4px_hsl(var(--primary)/0.3)]",
        secondary: "border-border bg-muted/60 text-muted-foreground backdrop-blur-sm",
        outline: "border-border/70 bg-background/50 text-foreground backdrop-blur-sm hover:border-primary/30 hover:bg-primary/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof badgeVariants>) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
