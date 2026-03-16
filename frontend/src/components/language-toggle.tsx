import { useLocale, type Locale } from "@/hooks/use-locale";
import { cn } from "@/lib/utils";

const localeOptions: Locale[] = ["ru", "en"];

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="inline-flex items-center rounded-full border border-border/70 bg-background/70 p-1 shadow-sm"
      aria-label="Language switcher"
      role="group"
    >
      {localeOptions.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setLocale(option)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
            locale === option
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
          aria-pressed={locale === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
