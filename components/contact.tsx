"use client";

import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const contacts = [
  { label: "GitHub", value: "github.com/Sep-Vanced", href: "https://github.com/Sep-Vanced", icon: Github },
  { label: "Email", value: "joseph@example.com", href: "mailto:joseph@example.com", icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/sep-vanced-598313381", href: "https://www.linkedin.com/in/sep-vanced-598313381/", icon: Linkedin },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-7 font-mono text-2xl font-semibold text-accent sm:text-3xl"
      >
        {"<Contact />"}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <Card className="border-border/70 bg-card/85">
          <CardHeader>
            <CardTitle className="font-mono text-accent">
              {`const contact = {`}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 font-mono text-sm text-foreground/95">
            {contacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex flex-col items-start gap-1 rounded-md border border-border/70 bg-card/60 px-4 py-3 transition hover:border-accent/45 hover:bg-accent/10 sm:flex-row sm:items-center sm:justify-between"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4 text-accent" />
                    {contact.label}
                  </span>
                  <span className="break-all text-muted-foreground transition group-hover:text-accent sm:break-normal">
                    {contact.value}
                  </span>
                </a>
              );
            })}
            <div className="pt-2">
              <Button asChild variant="outline">
                <a href="/Mangubat_Joseph_Resume_v2.pdf" download>
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground">{`};`}</p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
