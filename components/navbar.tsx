"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <a href="#home" className="font-mono text-lg font-semibold tracking-tight text-accent sm:text-xl">
          <span>{"<SepVanced/>"}</span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <ul className="flex items-center gap-4 text-sm text-foreground/80 sm:gap-6">
            {links.map((link) => (
              <li key={link.href}>
                <a className="transition hover:text-accent" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border/70 bg-card/40 text-foreground transition hover:border-[var(--accent)]/70 hover:bg-card"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-border/70 bg-background/95 px-4 py-3 md:hidden"
          >
            <ul className="space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/85 transition hover:bg-card hover:text-accent"
                    href={link.href}
                    onClick={closeMobileMenu}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
