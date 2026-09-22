"use client";

import { motion } from "framer-motion";
import type { ComponentType } from "react";
import { Briefcase, Code2, GraduationCap, Wrench } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  icon: ComponentType<{ className?: string }>;
  highlights: string[];
};

const experience: ExperienceItem[] = [
  {
    role: "Programmer / Full-Stack Web Developer",
    company: "Sanyo Denki Philippines, Inc.",
    period: "May 2026 – Present",
    icon: Briefcase,
    highlights: [
      "Develop and maintain custom web applications and internal business systems using Next.js, Laravel/PHP, RESTful APIs, and Microsoft SQL Server.",
      "Transform manual and paper-based workflows into systematic, web-based solutions to improve process efficiency and data accessibility.",
      "Design and implement application logic, database structures, and system workflows based on departmental requirements.",
      "Collaborate with end users to understand operational requirements and translate them into practical software solutions.",
    ],
  },
  {
    role: "Freelance IT Technician & Web Developer",
    company: "Self-Employed",
    period: "August 2025 – May 2026",
    icon: Wrench,
    highlights: [
      "Provided technical repair and maintenance services for laptops, system units, and printers.",
      "Diagnosed hardware malfunctions and performed component replacements to restore device functionality.",
      "Developed and maintained scalable web projects using Next.js for the frontend and Laravel API for the backend.",
      "Utilized PostgreSQL for database management.",
    ],
  },
  {
    role: "On-the-Job Trainee",
    company: "President Ramon Magsaysay State University",
    period: "January 2025 – May 2025",
    icon: GraduationCap,
    highlights: [
      "Assisted in creating client websites and gained hands-on experience with various web technologies.",
      "Provided technical repair and maintenance services for laptops, system units, and printers.",
      "Learned and applied industry best practices to deliver quality digital outputs.",
    ],
  },
  {
    role: "Freelance Web Developer",
    company: "Self-Employed",
    period: "May 2023 – December 2024",
    icon: Code2,
    highlights: [
      "Developed custom web projects for clients using a stack that included HTML, PHP, and JavaScript.",
      "Managed full project lifecycles from initial requirements gathering to final delivery and system presentation.",
      "Focused on creating user-friendly and visually appealing digital solutions.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-5 font-mono text-xl font-semibold text-accent sm:mb-7 sm:text-3xl"
      >
        {"<Experience />"}
      </motion.h2>

      <div className="relative space-y-6 sm:space-y-8">
        {/* Connecting line */}
        <div
          aria-hidden="true"
          className="absolute left-[15px] top-2 hidden h-[calc(100%-1rem)] w-px bg-border/70 sm:block sm:left-[19px]"
        />

        {experience.map((item, index) => (
          <motion.div
            key={`${item.company}-${item.period}`}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="relative flex gap-3 sm:gap-5"
          >
            {/* Timeline marker */}
            <span className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/50 bg-card/85 shadow-[0_0_0_4px_rgba(9,21,58,0.08)] sm:h-10 sm:w-10">
              <item.icon className="h-4 w-4 text-accent sm:h-5 sm:w-5" />
            </span>

            <Card className="w-full rounded-2xl border-border/70 bg-card/80">
              <CardContent className="pt-6">
                <div className="mb-1 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
                  <h3 className="text-base font-semibold text-foreground sm:text-lg">
                    {item.role}
                  </h3>
                  <span className="whitespace-nowrap font-mono text-xs text-accent sm:text-sm">
                    {item.period}
                  </span>
                </div>
                <p className="mb-3 text-sm font-medium text-foreground/70 sm:text-base">
                  {item.company}
                </p>
                <ul className="space-y-1.5 text-[0.9rem] leading-relaxed text-foreground/90 sm:text-base">
                  {item.highlights.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}