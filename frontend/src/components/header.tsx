import { useState } from "react";
import { Menu } from "lucide-react";

import vladHeader from "@/assets/vlad-header.jpg";
import { headerCopy, navigationItems } from "@/data/navigation";
import { useLocale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";
import { LanguageToggle } from "@/components/language-toggle";
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
  const { locale } = useLocale();
  const navigation = navigationItems[locale];
  const copy = headerCopy[locale];

  return (
    <header className="sticky top-0 z-40 border-b border-border/40 bg-background/60 backdrop-blur-2xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-3 group">
          <span className="h-11 w-11 overflow-hidden rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_4px_20px_-6px_hsl(var(--primary)/0.45)] transition-shadow duration-300 group-hover:shadow-[0_4px_28px_-4px_hsl(var(--primary)/0.6)]">
            <img src={vladHeader} alt="Portrait of Vlad" className="h-full w-full object-cover" />
          </span>
          <div>
            <p className="font-heading text-sm font-semibold text-foreground">Vlad</p>
            <p className="text-xs text-muted-foreground">{copy.roleLabel}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => {
            const itemId = item.href.slice(1);
            const isActive = activeSection === itemId;

            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:bg-primary/5 hover:text-foreground",
                  isActive && "bg-primary/10 text-primary shadow-[0_0_12px_-4px_hsl(var(--primary)/0.3)]",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle />
          <ThemeToggle />
          <Button asChild variant="outline">
            <a href="#contact">{copy.contactButton}</a>
          </Button>
        </div>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label={copy.openMenuLabel}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>{copy.mobileTitle}</SheetTitle>
                <SheetDescription>{copy.mobileDescription}</SheetDescription>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-3">
                {navigation.map((item) => {
                  const itemId = item.href.slice(1);

                  return (
                    <SheetClose asChild key={item.href}>
                      <a
                        href={item.href}
                        className={cn(
                          "rounded-2xl border border-border/70 px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-primary/5",
                          activeSection === itemId &&
                            "border-primary/30 bg-primary/10 text-primary shadow-[0_0_16px_-6px_hsl(var(--primary)/0.3)]",
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
