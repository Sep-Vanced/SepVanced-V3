"use client";

import { motion } from "framer-motion";

import { AnimatedCode } from "@/components/animated-code";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="mx-auto w-full max-w-6xl px-4 pb-10 pt-10 sm:px-6 lg:px-8 lg:pt-18">
      <div className="grid gap-8 sm:gap-10 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-6 sm:space-y-7"
        >
          <div className="inline-flex max-w-full items-center rounded-full border border-accent/30 bg-accent/12 px-3.5 py-1.5 font-mono text-[11px] text-[var(--accent-foreground)] sm:px-4 sm:text-xs">
            <span>{"const role = `Fullstack Web Developer`;"}</span>
          </div>
          <h1 className="text-glow text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hello, I&apos;m Joseph M. Mangubat.
          </h1>
          <p className="max-w-xl text-[1.05rem] leading-relaxed text-muted-foreground sm:text-lg">
            I build scalable fullstack applications with modern technologies.
          </p>
          <div className="grid grid-cols-1 gap-3 sm:flex sm:flex-wrap sm:items-center">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="w-full sm:w-auto">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>
        <AnimatedCode />
      </div>
    </section>
  );
}
