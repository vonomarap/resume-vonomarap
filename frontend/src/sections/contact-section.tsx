import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowUpRight, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { contactLinks } from "@/data/contact";
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

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Please enter at least 10 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const [clientMessage, setClientMessage] = useState<string | null>(null);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    const emailLink = contactLinks.find((item) => item.label === "Email");
    const mailtoLink = createMailtoLink(emailLink, values);

    setClientMessage("Opening your email client with a pre-filled message.");
    window.location.href = mailtoLink;
    form.reset();
  });

  return (
    <section id="contact" className="section-shell">
      <div className="container-shell space-y-10">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Simple contact flow, no backend required"
            description="The site is now fully frontend-only. The form validates input in the browser, then opens your email client with a pre-filled message so direct contact still feels polished without any server code."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Reach out directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                    className="flex items-center justify-between rounded-[24px] border border-border/70 bg-background/60 px-4 py-4 transition-colors hover:bg-muted/60"
                  >
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {item.label}
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
                <CardTitle>Send a message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form className="space-y-5" onSubmit={onSubmit} noValidate>
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" autoComplete="name" {...field} />
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
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your@email.com"
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
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your opportunity, project, or question."
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            The form validates in the browser and opens a pre-filled email draft.
                          </FormDescription>
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
                      Prepare Email
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
