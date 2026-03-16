import { useState } from "react";
import { Menu } from "lucide-react";

import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type HeaderProps = {
  activeSection: string;
};

export function Header({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-lg font-extrabold text-primary-foreground shadow-panel">
            V
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Vlad</p>
            <p className="text-xs text-muted-foreground">Java / Spring Backend</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 lg:flex">
          {navigationItems.map((item) => {
            const itemId = item.href.slice(1);
            const isActive = activeSection === itemId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted/70 hover:text-foreground",
                  isActive && "bg-primary/10 text-primary",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <Button asChild variant="outline">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
                <SheetDescription>
                  Explore sections of the resume website.
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-3">
                {navigationItems.map((item) => {
                  const itemId = item.href.slice(1);

                  return (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className={cn(
                          "rounded-2xl border border-border/70 px-4 py-3 text-base font-medium transition-colors hover:bg-muted/60",
                          activeSection === itemId &&
                            "border-primary/30 bg-primary/10 text-primary",
                        )}
                      >
                        {item.label}
                      </a>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
