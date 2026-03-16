import { contactContent, contactLinks } from "@/data/contact";
import { navigationItems } from "@/data/navigation";
import { useLocale } from "@/hooks/use-locale";

export function Footer() {
  const { locale } = useLocale();
  const navigation = navigationItems[locale];
  const copy = contactContent[locale];

  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="font-brand text-2xl leading-none text-foreground">Vlad</p>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            {copy.footerSignature}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vlad. {copy.footerRights}
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm lg:items-end">
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {contactLinks.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="hover:text-foreground"
              >
                {item.label[locale]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
