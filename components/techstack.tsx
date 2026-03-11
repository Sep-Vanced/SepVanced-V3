"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Braces, Database } from "lucide-react";
import {
  SiCss,
  SiCplusplus,
  SiDigitalocean,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPhp,
  SiPhpmyadmin,
  SiPostgresql,
  SiPython,
  SiReact,
  SiShadcnui,
  SiSupabase,
  SiSwagger,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";

type StackItem = {
  name: string;
  icon: ComponentType<{ className?: string }>;
  iconClassName?: string;
};

type StackGroup = {
  title: string;
  items: StackItem[];
};

const stackGroups: StackGroup[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: SiHtml5, iconClassName: "text-[#E34F26]" },
      { name: "CSS3", icon: SiCss, iconClassName: "text-[#1572B6]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, iconClassName: "text-[#06B6D4]" },
      { name: "Shadcn", icon: SiShadcnui, iconClassName: "text-foreground" },
      { name: "JavaScript", icon: SiJavascript, iconClassName: "text-[#F7DF1E]" },
      { name: "TypeScript", icon: SiTypescript, iconClassName: "text-[#3178C6]" },
      { name: "React JS", icon: SiReact, iconClassName: "text-[#61DAFB]" },
      { name: "Next JS", icon: SiNextdotjs, iconClassName: "text-foreground" },
      { name: "Vue.js", icon: SiVuedotjs, iconClassName: "text-[#4FC08D]" },
      { name: "Flutter", icon: SiFlutter, iconClassName: "text-[#02569B]" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node JS", icon: SiNodedotjs, iconClassName: "text-[#5FA04E]" },
      { name: "PHP", icon: SiPhp, iconClassName: "text-[#777BB4]" },
      { name: "Laravel", icon: SiLaravel, iconClassName: "text-[#FF2D20]" },
      { name: "Express.js", icon: SiExpress, iconClassName: "text-foreground" },
      { name: "Convex", icon: Braces, iconClassName: "text-accent" },
      { name: "Supabase", icon: SiSupabase, iconClassName: "text-[#3ECF8E]" },
      { name: "Firebase", icon: SiFirebase, iconClassName: "text-[#FFCA28]" },
      { name: "Docker", icon: SiDocker, iconClassName: "text-[#2496ED]" },
      { name: "API Development", icon: SiSwagger, iconClassName: "text-[#85EA2D]" },
    ],
  },
  {
    title: "Database",
    items: [
      { name: "MySQL", icon: SiMysql, iconClassName: "text-[#4479A1]" },
      { name: "PostgreSQL", icon: SiPostgresql, iconClassName: "text-[#4169E1]" },
      { name: "MongoDB", icon: SiMongodb, iconClassName: "text-[#47A248]" },
      { name: "PhpMyAdmin", icon: SiPhpmyadmin, iconClassName: "text-[#6C78AF]" },
      { name: "SQL Server", icon: Database, iconClassName: "text-[#CC2927]" },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "Python", icon: SiPython, iconClassName: "text-[#3776AB]" },
      { name: "WordPress", icon: SiWordpress, iconClassName: "text-[#21759B]" },
      { name: "DigitalOcean", icon: SiDigitalocean, iconClassName: "text-[#0080FF]" },
      { name: "Java", icon: SiOpenjdk, iconClassName: "text-[#EA2D2E]" },
      { name: "C++", icon: SiCplusplus, iconClassName: "text-[#00599C]" },
    ],
  },
];

export function TechStack() {
  return (
    <section id="techstack" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-5 font-mono text-xl font-semibold text-accent sm:mb-7 sm:text-3xl"
      >
        {"< Technical Stacks/>"}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.4 }}
        className="rounded-2xl border border-border/70 bg-card/70 p-3 shadow-[0_8px_28px_rgba(9,21,58,0.2)] backdrop-blur-sm sm:rounded-3xl sm:p-6"
      >
        <div className="space-y-4 sm:space-y-6">
          {stackGroups.map((group, groupIndex) => (
            <div key={group.title}>
              <h3 className="mb-2 font-mono text-base font-semibold text-accent sm:mb-3 sm:text-lg">
                {group.title}
              </h3>
              <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:grid-cols-3 xl:grid-cols-4">
                {group.items.map((item, itemIndex) => (
                  <motion.div
                    key={`${group.title}-${item.name}`}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.25, delay: groupIndex * 0.05 + itemIndex * 0.02 }}
                    className="card-glow flex min-h-14 items-center gap-2 rounded-lg border border-border/70 bg-background/55 px-2.5 py-2.5 transition hover:border-accent/45 hover:bg-accent/10 sm:min-h-16 sm:gap-3 sm:rounded-xl sm:px-3 sm:py-3"
                  >
                    <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-border/70 bg-card/85 p-1 sm:h-7 sm:w-7">
                      <item.icon className={`h-full w-full ${item.iconClassName ?? "text-foreground"}`} />
                    </span>
                    <span className="text-sm font-semibold leading-tight text-foreground/90 sm:text-base lg:text-lg">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
