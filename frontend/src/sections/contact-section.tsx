import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactContent, contactLinks } from "@/data/contact";
import { useLocale } from "@/hooks/use-locale";
import { createMailtoLink } from "@/lib/contact";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactFormValues = {
  name: string;
  email: string;
  message: string;
};

export function ContactSection() {
  const { locale } = useLocale();
  const copy = contactContent[locale];
  const [clientMessage, setClientMessage] = useState<string | null>(null);

  const contactFormSchema = z.object({
    name: z.string().trim().min(2, copy.form.validation.name),
    email: z.string().trim().email(copy.form.validation.email),
    message: z.string().trim().min(10, copy.form.validation.message),
  });

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    const emailLink = contactLinks.find((item) => item.id === "email");
    const mailtoLink = createMailtoLink(emailLink, values, copy.form.mailto);

    setClientMessage(copy.form.successMessage);
    window.location.href = mailtoLink;
    form.reset();
  });

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow={copy.section.eyebrow}
            title={copy.section.title}
            description={copy.section.description}
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
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

          <Reveal delay={0.08}>
            <Card>
              <CardHeader>
                <CardTitle>{copy.formTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-5" onSubmit={onSubmit} noValidate>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{copy.form.nameLabel}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={copy.form.namePlaceholder}
                              autoComplete="name"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{copy.form.emailLabel}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder={copy.form.emailPlaceholder}
                              autoComplete="email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{copy.form.messageLabel}</FormLabel>
                          <FormControl>
                            <Textarea placeholder={copy.form.messagePlaceholder} {...field} />
                          </FormControl>
                          <FormDescription>{copy.form.description}</FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {clientMessage ? (
                      <p className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
                        {clientMessage}
                      </p>
                    ) : null}

                    <Button type="submit" size="lg">
                      <Send className="h-4 w-4" />
                      {copy.form.submitLabel}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
