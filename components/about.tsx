"use client";

import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="mb-7 font-mono text-2xl font-semibold text-accent sm:text-3xl"
      >
        {"<About />"}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
      >
        <Card className="border-border/70 bg-card/80">
          <CardContent className="pt-6 text-base leading-relaxed text-foreground/95 sm:text-lg">
            Web Developer with a strong foundation in Next.js, Laravel API, and the MERN Stack.
            Skilled in delivering scalable, cloud-native solutions and managing databases with
            SQL Server. Proven ability to handle projects from initiation to delivery, blending
            technical expertise with a focus on user-friendly, visually appealing digital
            solutions. Committed to collaborating on enterprise-grade projects within innovative,
            progressive teams.
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
