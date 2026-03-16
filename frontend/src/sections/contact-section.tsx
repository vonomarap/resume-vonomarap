import { ArrowUpRight } from "lucide-react";

import { contactContent, contactLinks } from "@/data/contact";
import { useLocale } from "@/hooks/use-locale";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ContactSection() {
  const { locale } = useLocale();
  const copy = contactContent[locale];

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={copy.section.eyebrow}
            title={copy.section.title}
          />
        </Reveal>

        <div className="max-w-3xl">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>{copy.directTitle}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.id}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="flex items-center justify-between rounded-[24px] border border-border/70 bg-background/60 px-4 py-4 transition-colors hover:bg-muted/60"
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label[locale]}
                      </p>
                      <p className="mt-2 text-sm font-medium">{item.value}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </a>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
