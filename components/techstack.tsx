"use client";

import { motion } from "framer-motion";
import { AppWindow, Database, KeyRound, ServerCog } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stacks = [
  {
    title: "Frontend",
    icon: AppWindow,
    items: ["HTML5", "CSS3", "Tailwind CSS", "Shadcn", "JavaScript", "React.js", "Next.js", "Vue.js"],
  },
  {
    title: "Backend & APIs",
    icon: Database,
    items: ["PHP", "Laravel", "Express.js", "Convex", "Supabase", "API Development"],
  },
  {
    title: "Database",
    icon: ServerCog,
    items: ["MySQL", "Postgres", "MongoDB", "PhpMyAdmin", "SQL Server"],
  },
  {
    title: "Basic Knowledge",
    icon: ServerCog,
    items: ["WordPress", "Python", "Java", "C++"],
  },
];

export function TechStack() {
  return (
    <section id="techstack" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-7 font-mono text-2xl font-semibold text-accent sm:text-3xl"
      >
        {"<TechStack />"}
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-2">
        {stacks.map((stack, index) => {
          const Icon = stack.icon;
          return (
            <motion.div
              key={stack.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.35 }}
            >
              <Card className="card-glow h-full border-border/70 bg-card/75 transition">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-lg text-foreground">{stack.title}</CardTitle>
                  <Icon className="h-5 w-5 text-accent" />
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                    {stack.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-md border border-border/70 bg-card/60 px-3 py-2 text-foreground/95 transition hover:border-accent/45 hover:bg-accent/10"
                      >
                        <span className="inline-flex items-center gap-2">
                          <KeyRound className="h-3.5 w-3.5 text-accent/90" />
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
