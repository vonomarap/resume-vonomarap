import { contactLinks, footerSignature } from "@/data/contact";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="container-shell flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-3">
          <p className="text-lg font-semibold">Vlad</p>
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            {footerSignature}
          </p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Vlad. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col gap-4 text-sm lg:items-end">
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {navigationItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 text-muted-foreground">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
